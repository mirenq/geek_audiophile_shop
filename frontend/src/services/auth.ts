import api from "../lib/api";

export interface LoginPayload {
  username: string;
  password: string;
}

export async function login(payload: LoginPayload) {
  const response = await api.post("/auth/login/", payload);

  const { access, refresh, user } = response.data;

  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
  localStorage.setItem("user", JSON.stringify(user));

  return user;
}

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}
