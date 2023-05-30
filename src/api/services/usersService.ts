import api from '../axios';


export async function getCurrentUser() {
  const response = await api.get(`/users/me/`);
  return response.data;
}

export async function followUser(userId: string) {
  const response = await api.post(`/users/${userId}/follow/`);
  return response.data;
}

export async function unfollowUser(userId: string) {
  const response = await api.post(`/users/${userId}/unfollow/`);
  return response.data;
}

export async function getFollowedUsers() {
  const response = await api.get(`/users/following/`);
  return response.data;
}

