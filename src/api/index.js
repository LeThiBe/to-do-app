import axios from "axios";

const urlGetPost = 'https://jsonplaceholder.typicode.com/posts'

export default function getPostsList() {
  return axios({
    method: 'GET',
    url: urlGetPost
  });
}
