// module 2.3 .3.4 & .5
import { createContext, useReducer, useEffect } from "react";
import { useSelector } from "react-redux";

import apiService from "../app/apiService";
import { isValidToken } from "../utils/jwt";

// khi reload blog ???????????? bao loi user?
//// all about authentication ////
// init value
const initialState = {
<<<<<<< HEAD
  isInitialized: false, //first render yet?, stay login when refresh page, lay thong tin trong local storage
  isAuthenticated: false, //login yet?
=======
  isInitialized: false,
  isAuthenticated: false,
>>>>>>> 5580e5d7533b101092ad6f56a8a828c2ebe0053c
  user: {},
};

// khai bao action types
const INITIALIZE = "AUTH.INITIALIZE";
const LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS";
const REGISTER_SUCCESS = "AUTH.REGISTER_SUCCESS";
const LOGOUT = "AUTH.LOGOUT";
const UPDATE_PROFILE = "AUTH.UPDATE_PROFILE";

// reducers (khai bao states)
const reducer = (state, action) => {
  switch (action.type) {
    // persistent login
    case INITIALIZE:
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isInitialized: true,
        isAuthenticated,
        user,
      };
    // login
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    // register
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    // logout
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    // update profile: reset user account page
    case UPDATE_PROFILE:
      const {
        name,
        avatarUrl,
        coverUrl,
        aboutMe,
        city,
        country,
        company,
        jobTitle,
        facebookLink,
        instagramLink,
        linkedinLink,
        twitterLink,
        friendCount,
        postCount,
        commentCount,
      } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          name,
          avatarUrl,
          coverUrl,
          aboutMe,
          city,
          country,
          company,
          jobTitle,
          facebookLink,
          instagramLink,
          linkedinLink,
          twitterLink,
          friendCount,
          postCount,
          commentCount,
        },
      };
    default:
      return state;
  }
};

// access Token
const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("accessToken", accessToken);
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("accessToken");
    delete apiService.defaults.headers.common.Authorization;
  }
};

//
const AuthContext = createContext({ ...initialState });

// func: AuthProvider
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updatedProfile = useSelector((state) => state.user.updatedProfile);

  // AUTH INITIALIZE: stay login at account page with value accessToken

  // update profile: reset user account page
  useEffect(() => {
    if (updatedProfile)
      dispatch({ type: UPDATE_PROFILE, payload: updatedProfile });
  }, [updatedProfile]);

  // 1. func: user login
  const login = async ({ email, password }, callback) => {
    const response = await apiService.post("/auth/login", { email, password });
    console.log(response);

    // access token
    const { user, accessToken } = response.data;
    console.log("user login", user);

    setSession(accessToken, user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user },
    });

    callback();
  };

  // 2. func: register a new account
  const register = async ({ name, email, password }, callback) => {
    const response = await apiService.post("/users", {
      name,
      email,
      password,
    });

    const { user, accessToken } = response.data;
    setSession(accessToken);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user },
    });

    callback();
  };

  // 3. func: log out
  const logout = async (callback) => {
    setSession(null);
    dispatch({ type: LOGOUT });
    callback();
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        // ??????????????????????????????????????????????????????
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await apiService.get("/users/me"); //send to server
          const user = response.data;

          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: true, user },
          });
        } else {
          setSession(null);

          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: false, user: null },
          });
        }
      } catch (err) {
        console.error(err);

        // if accessToken is expired
        setSession(null);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
