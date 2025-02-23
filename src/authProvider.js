import axios from 'axios';
import apiService from './app/apiService'; // Adjust path as needed
import { isValidToken } from './utils/jwt'; // Adjust path as needed
import { useState, useContext, createContext } from 'react';

//
const apiUrl = 'http://localhost:9000'; // Your API base URL                 FRONTEND
const AuthContext = createContext();

const authProvider = {
  // login: Authenticates the user, stores the access token, and sets the token in the apiService headers.
  login: async ({ email, password }) => {
    try {
      const response = await apiService.post('/admin/login', {
        email,
        password,
      });
      const { accessToken, user } = response.data; // Assuming the response includes a user object with a role.

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('userRole', user.roles); // Store the role in localStorage
        apiService.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
      }
    } catch (error) {
      throw new Error('Authentication failed');
    }
  },

  // logout: Removes the access token and clears the apiService headers.
  logout: async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userRole');
    delete apiService.defaults.headers.common['Authorization'];
  },

  // checkAuth: Checks if the user is authenticated by verifying the token's validity.
  checkAuth: async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && isValidToken(accessToken)) {
      apiService.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`;
      return;
    }
    throw new Error('User is not authenticated');
  },

  // checkError: Handles authentication-related errors, such as clearing the token if a 401 or 403 error occurs.
  checkError: async (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userRole'); // Clear role on authentication error
      delete apiService.defaults.headers.common['Authorization'];
      return Promise.reject(error);
    }
    return Promise.resolve();
  },

  // getPermissions: Optionally handles fetching user permissions or roles if needed.
  getPermissions: async () => {
    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      return Promise.resolve(userRole); // Return the stored role
    }
    return Promise.reject(new Error('No role found'));
  },
};

export default authProvider;
