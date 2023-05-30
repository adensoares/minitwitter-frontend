import api from '../axios';

export async function createTweet(content: string) {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.post('/tweets/', { content }, config);
  return response.data;
}


export async function getGeneralFeed() {
  const response = await api.get('/tweets/general_feed/');
  return response.data;
}

export async function getPersonalFeed() {
  const response = await api.get(`/tweets/personal_feed/`);
  return response.data;
}
