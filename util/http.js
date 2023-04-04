import axios from 'axios';
import { BACKEND_URL } from '@env';

export async function storePost(postData) {
  const response = await axios.post(BACKEND_URL, postData);
  const id = response.data.name;
  return id;
}

export async function fetchPost() {
  const response = await axios.get(BACKEND_URL);
  const posts = [];
  for (const key in response.data) {
    const postObj = {
      id: key,
      name: response.data[key].name,
      title: response.data[key].title,
      text: response.data[key].text,
      image: response.data[key].image,
      date: response.data[key].date,
      country: response.data[key].country,
    };
    posts.unshift(postObj);
  }

  return posts;
}
