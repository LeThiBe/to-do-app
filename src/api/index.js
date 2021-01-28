import axios from "axios";

export default function getPostsList() {
  return axios({
    method: 'GET',
    url: process.env.REACT_APP_URL_GET_POST
  });
}
