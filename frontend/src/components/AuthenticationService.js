// components/AuthenticationService.js
import axios from 'axios';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function login(email, password) {
  return client.post("/api/login", { email, password });
}

function register(email, username, password) {
  return client.post("/api/register", { email, username, password });
}

function logout() {
  return client.post("/api/logout");
}

export { login, register, logout };
