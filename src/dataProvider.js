import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

// connect database from Backend with URL in .env
const apiUrl = 'http://localhost:9001/api'; // API base URL     FRONTEND OR BACKEND

// Custom httpClient to handle authentication headers, etc.
const httpClient = async (url, options = {}) => {
  // Ensure options.headers is a Headers instance
  if (!options.headers) {
    options.headers = new Headers({ 'Content-Type': 'application/json' });
  } else {
    options.headers = new Headers(options.headers);
  }

  // Set the Authorization header with the access token
  const token = localStorage.getItem('accessToken');
  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  // Log the URL, options, and headers before the request
  // console.log('HTTP Request URL:', url);
  // console.log('HTTP Request Options:', options);
  // console.log('Authorization Header:', options.headers.get('Authorization'));

  try {
    // Use fetchJson to handle the request
    const response = await fetchUtils.fetchJson(url, options);

    // Log the response once it's received
    // console.log('Response:', response);

    return response;
  } catch (error) {
    // Log the error if the request fails
    console.error('API Error: ', error);
    throw error; // React-Admin will handle this error appropriately
  }
};

// Define custom dataProvider methods <ADMIN <RESOURCE/> />
const dataProvider = {
  //  list={DomainList} // GOOD
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const q = {
      sort: JSON.stringify([field, order]),
      page: page,
      limit: perPage,
      q: params.filter.q || '', // Include search query from filter
      filter: Object.keys(params.filter).length
        ? JSON.stringify(params.filter)
        : undefined, // Only send filter if it's not empty
    };

    const url = `${apiUrl}/admin/${resource}?${stringify(q)}`;

    try {
      const { headers, json } = await httpClient(url);

      if (
        !json.data ||
        !json.data.domainList ||
        json.data.domainList.length === 0
      ) {
        return { data: [], total: 0 };
      }

      return {
        data: json.data?.domainList, // The actual domain list
        total: json.data?.totalDomain, // Total domain count
      };
    } catch (error) {
      // console.error('Error fetching domain list:', error); // Handle errors
      throw new Error('Failed to fetch domain list');
    }
  },

  // edit={DomainEdit} // BACKEND GOOD
  update: async (resource, params) => {
    const url = `${apiUrl}/admin/domain/edit/${params.id}`; // The URL for updating the resource

    try {
      // Send the PUT or PATCH request with the updated data
      const { json } = await httpClient(url, {
        method: 'PUT',
        body: JSON.stringify(params.data), // The updated data
      });

      return {
        data: json, // Return the updated resource from the API response
      };
    } catch (error) {
      console.error('Error updating domain:', error); // Handle errors
      throw new Error('Failed to update domain');
    }
  },

  // to fetch a single // BACKEND GOOD
  getOne: async (resource, params) => {
    const url = `${apiUrl}/admin/${resource}/${params._id}`;

    try {
      const { json } = await httpClient(url);

      return { data: json };
    } catch (error) {
      // console.error('Error updating domain:', error); // Handle errors
      throw new Error('Failed to get single domain');
    }
  },

  // create={DomainCreate} //
  create: async (resource, params) => {
    const url = `${apiUrl}/admin/${resource}/create`;
    const { json } = await httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/admin/${resource}/${params.id}`;
    await httpClient(url, { method: 'DELETE' });
    return { data: {} };
  },

  getPermissions: async () => {
    const userRole = localStorage.getItem('roles');
    if (userRole) {
      return Promise.resolve(userRole);
    }
    return Promise.reject(new Error('No role found'));
  },
};

export default dataProvider;
