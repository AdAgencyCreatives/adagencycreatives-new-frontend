'use client';

import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : "https://staging-api.adagencycreatives.com";

const api = axios.create({
  baseURL: baseUrl + "/api/v1",
});

// Set default headers
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Accept"] = "application/json";

// Try to get token from localStorage if it exists
let authToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
if (authToken) {
  api.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
}

const setAuthToken = (token) => {
  authToken = token;
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  } else {
    removeAuthToken();
  }
};

const removeAuthToken = () => {
  authToken = null;
  delete api.defaults.headers.common["Authorization"];
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken');
  }
};

const getAuthToken = () => {
  return authToken;
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific status codes
      if (error.response.status === 401) {
        // Token might be expired, remove it
        // removeAuthToken();
        // Optionally redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export { api, setAuthToken, getAuthToken, removeAuthToken };