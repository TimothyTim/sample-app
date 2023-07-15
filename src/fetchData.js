export const fetchData = async (data) => {
    const usersResp = await fetch(data);
    const usersRespJson = await usersResp.json();

    return usersRespJson;
};
