import axios from "axios";

export const database = axios.create({
  baseURL: "http://localhost:4001",
  //   url: "http://localhost:4001",
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVkMjQzMDRlNmExNzRhNWQwNWViZiIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2NzI4NjAyMjcsImV4cCI6MTY3Mjk0NjYyN30.GSiR1HccW_mqZcf-2HUiwy4agqo0kY88mBTAhvf9xV4",
  },
});
// TODO: AUTO TOKEN REFRESH
