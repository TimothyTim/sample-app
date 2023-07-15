import { act } from 'react-dom/test-utils';

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "./App";

const usersStub = [
    {
        name: "user 1",
    },
    {
        name: "user 2"
    }
];

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.json(usersStub))
  })
)

beforeAll(() => server.listen({
    onUnhandledRequest: "error"
}));
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("renders a list of user names", async () => {
    render(<App />);


    await waitFor(() => screen.getByText('user 1'))

    const users = screen.getAllByText(/user/);

    expect(users.length).toEqual(2);

    // const firstUser = users.first();
    // expect(firstUser.text()).toEqual(usersStub[0].name);
});

// it("renders learn react link", () => {
//     const wrapper = shallow(<App />);
//     const appLink = wrapper.find(".App-link");
//     expect(appLink.text()).toEqual("Learn React");
// });

// it("call fetch with the correct endpoint", () => {
//     mount(<App />);
//
//     expect(fetchWrapper).toHaveBeenCalled();
// });
