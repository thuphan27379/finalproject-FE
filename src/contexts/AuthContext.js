// module 2.3 .3.4 & .5
import { createContext, useReducer, useEffect } from "react"; //Context truyen thong tin cho component con
import { useSelector } from "react-redux";

import apiService from "../app/apiService";
import { isValidToken } from "../utils/jwt";

//// all about authentication ////
// init value
const initialState = {
  isInitialized: false, // app render first time yet?
  isAuthenticated: false, // login yet?
  user: {},
};

// khai bao constant of action types
const INITIALIZE = "AUTH.INITIALIZE";
const LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS";
const REGISTER_SUCCESS = "AUTH.REGISTER_SUCCESS";
const LOGOUT = "AUTH.LOGOUT";
const UPDATE_PROFILE = "AUTH.UPDATE_PROFILE";

// func reducers (khai bao states) qly tat ca cac state cua user cho viec authorization
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
        youtubeLink,
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
          youtubeLink,
          friendCount,
          postCount,
          commentCount,
        },
      };
    default:
      return state;
  }
};

// access Token: luu/xoa token trong headers (inspect network)
const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("accessToken", accessToken);
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("accessToken");
    delete apiService.defaults.headers.common.Authorization;
  }
};

// authorization
const AuthContext = createContext({ ...initialState });

// func: AuthProvider, connect server API
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updatedProfile = useSelector((state) => state.user.updatedProfile);

  // AUTH INITIALIZE: stay login at account page with value accessToken

  // update profile: reset user account setting page
  useEffect(() => {
    if (updatedProfile)
      dispatch({ type: UPDATE_PROFILE, payload: updatedProfile });
  }, [updatedProfile]);

  // 1. func: user login
  const login = async ({ email, password }, callback) => {
    const response = await apiService.post("/auth/login", { email, password });
    console.log(response);

    // get access token
    const { user, accessToken } = response.data;
    console.log("user login", user);

    setSession(accessToken, user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user }, //
    });

    callback(); //to navigate after login
  };

  // 2. func: register a new account
  const register = async ({ name, email, password }, callback) => {
    const response = await apiService.post("/users/register", {
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

  // 4. for stay login if refresh
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        // ?
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

          // dispatch({
          //   type: LOGIN_SUCCESS,
          //   // // payload: { user }, //
          //   payload: { isAuthenticated: false, user: null },
          // });
        }
      } catch (err) {
        console.error(err);

        // if accessToken is expired or null
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
  }, []); // chay 1 lan duy nhat sau lan render dau tien

  //
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
