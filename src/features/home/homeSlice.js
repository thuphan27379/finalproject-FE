import { createSlice } from "@reduxjs/toolkit"; // provider
import { toast } from "react-toastify";
import apiService from "../../app/apiService"; // ket noi server

// /project
// /startup
// /domain
// trang thai khoi tao ban dau, quy dinh cac thanh phan cua slice
const initialState = {
  isLoading: false,
  error: null,
  totalDomain: {},
  domainsForSale: [], // domain for sale list
  domainForStartup: [], // domain for startup list
  projectList: [], // project list
  currentPage: 1,
  totalPages: 1,
};

// createSlice for all slices
const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // create types of actions
    startLoading(state) {
      state.isLoading = true;
    },
    //
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get domain for sale list
    getDomainForSaleSuccess(state, action) {
      state.isLoading = false;
      state.error = action.payload; //?

      // console.log(action.payload);
      const domainsForSale = action.payload;
      state.domainsForSale = domainsForSale;
      // console.log("domain:", domainsForSale);
      const { totalPages, currentPage } = action.payload;
      state.totalPages = totalPages;
    },

    // startup list
    getDomainForStartupSuccess(state, action) {
      state.isLoading = false;
      state.error = action.payload;

      // console.log(action.payload);
      const domainForStartup = action.payload;
      state.domainForStartup = domainForStartup;
      // console.log("Startup:", domainForStartup);
      const { totalPages, currentPage } = action.payload;
      state.totalPages = totalPages;
    },
    // project list
    getProjectSuccess(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      // state.error = null;

      // console.log(action.payload);
      const projectList = action.payload;
      state.projectList = projectList;
      // console.log("Project:", projectList);
      const { totalPages, currentPage } = action.payload;
      state.totalDomain = projectList.length;
    },
  },
});

export default slice.reducer;

// functions //
// get domain for sale list
export const getDomainForSale =
  ({ page = 1, limit = 20, q }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = {
        page: page,
        limit: limit,
        q: q,
      };
      const response = await apiService.get(`/home/domain`, {
        params,
      });

      dispatch(
        slice.actions.getDomainForSaleSuccess({
          ...response.data,
          page,
        })
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// get Domain for startup list
export const getDomainForStartup =
  ({ page = 1, limit = 20, q }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = {
        page: page,
        limit: limit,
        q: q,
      };
      const response = await apiService.get(`/home/startup`, {
        params,
      });

      dispatch(
        slice.actions.getDomainForStartupSuccess({
          ...response.data,
          page,
        })
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// get Projects list
export const getProjects =
  ({ page = 1, limit }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = {
        page: page,
        limit: limit,
      };
      const response = await apiService.get(`/home/project`, {
        params,
      });

      dispatch(
        slice.actions.getProjectSuccess({
          ...response.data,
          page,
        })
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };
