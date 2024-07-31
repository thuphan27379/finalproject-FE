import { createSlice } from "@reduxjs/toolkit"; // provider
import { toast } from "react-toastify";
import apiService from "../../app/apiService"; // ket noi server
import { DOMAIN_PER_PAGE } from "../../app/config";

// /project
// /startup
// /domain
// trang thai khoi tao ban dau, quy dinh cac thanh phan cua slice
const initialState = {
  isLoading: false,
  error: null,
  totalDomain: {},
  domainsForSale: [], //domain for sale list
  domainForStartup: [], //domain for startup list
  projectList: [], //project list
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
      // state.error = null;

      // console.log(action.payload);
      const domainsForSale = action.payload;
      state.domainsForSale = domainsForSale;
      // console.log("domain:", domainsForSale);
      const { totalPages, currentPage } = action.payload;
      state.totalPages = totalPages;

      // state.totalPages = action.payload.totalPages;
      // state.currentPage = action.payload.currentPage;
    },

    // startup list
    getDomainForStartupSuccess(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      // state.error = null;

      // console.log(action.payload);
      const domainForStartup = action.payload;
      state.domainForStartup = domainForStartup;
      // console.log("Startup:", domainForStartup);
      // state.totalDomain = domainForStartup.length;
      const { totalPages, currentPage } = action.payload;
      state.totalPages = totalPages;

      // state.domainForStartup = action.payload.domainForStartup;
      // state.totalDomain = action.payload.domainForStartup.length;
    },

    // project list
    getProjectSuccess(state, action) {
      state.isLoading = false;
      // state.error = action.payload;
      state.error = null;

      // console.log(action.payload);
      const projectList = action.payload;
      state.projectList = projectList;
      // console.log("Project:", projectList);
      const { totalPages, currentPage } = action.payload;
      state.totalDomain = projectList.length;
      // state.projectList = action.payload.projectList;
      // state.totalDomain = action.payload.projectList.length;
    },

    // domain length
    getDomainLengthSuccess(state, action) {
      state.isLoading = false;
      state.error = action.payload;

      // console.log(action.payload);
      const domainLength = action.payload;
      state.domainLength = domainLength;
      const { startups, length } = action.payload;
    },

    // getSearchDomainSuccess
    getSearchDomainSuccess(state, action) {
      state.isLoading = false;
      // state.error = action.payload;
      state.error = null;
      state.searchDomainResult = action.payload.domains;
      // console.log(action.payload);
      // const { domains } = action.payload;
      // state.searchDomainResult = domains; //search domain Result
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
  ({ page = 1, limit = 20 }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = {
        page: page,
        limit: limit,
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

// get domain total
export const getDomainLength =
  ({ page = 1, limit = DOMAIN_PER_PAGE }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = {
        page: page,
        limit: limit,
      };
      const response = await apiService.get(`/home/domain`, {
        params,
      });

      dispatch(
        slice.actions.getDomainLengthSuccess({
          ...response.data,
          page,
        })
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// search domain by name
export const getSearchDomain =
  ({ filterDomain, domainId, page = 1, limit = DOMAIN_PER_PAGE }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = { page, limit };
      if (filterDomain) params.name = filterDomain;
      const response = await apiService.get("/home/domain", {
        params,
      });
      dispatch(slice.actions.getSearchDomainSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };
