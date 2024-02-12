import instance from "./axios";

const api_uri = "http://localhost:8181";

export const userList = () => instance.get(`${api_uri}/api/v1/user/list`);