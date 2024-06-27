// CONNECT TO .ENV
export const BASE_URL = process.env.REACT_APP_BACKEND_API;

// upload image
export const CLOUDINARY_CLOUD_NAME =
  process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_UPLOAD_PRESET =
  process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

// pagination
export const POSTS_PER_PAGE = 5;
export const FRIEND_REQUESTS_PER_PAGE = 10;
export const COMMENTS_PER_POST = 3;
export const GROUP_PER_PAGE = 5;
export const INTEREST_PER_PAGE = 5;
