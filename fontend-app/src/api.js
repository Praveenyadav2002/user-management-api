const API_URL = "http://localhost:5000/api";

export const signup = (data) => fetch(`${API_URL}/signup`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
}).then(res => res.json());

export const login = (data) => fetch(`${API_URL}/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
}).then(res => res.json());

export const getProfile = (token) => fetch(`${API_URL}/profile`, {
  headers: { Authorization: `Bearer ${token}` }
}).then(res => res.json());

export const updateProfile = (data, token) => fetch(`${API_URL}/profile`, {
  method: "PUT",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  body: JSON.stringify(data)
}).then(res => res.json());

export const deleteProfile = (token) => fetch(`${API_URL}/profile`, {
  method: "DELETE",
  headers: { Authorization: `Bearer ${token}` }
}).then(res => res.json());
