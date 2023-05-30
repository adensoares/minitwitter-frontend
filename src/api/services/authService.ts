import api from '../axios';

export async function signin(email: string, password: string) {
  const response = await api.post('/token/', { email, password });
  localStorage.setItem('token', response.data.access);
  localStorage.setItem('refreshToken', response.data.refresh);
  return response.data;
}

export async function signup(full_name: string, email: string, password: string,) {
  const response = await api.post('/users/signup/', { full_name, email, password });
  return response.data;
}


export function signout() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
}
