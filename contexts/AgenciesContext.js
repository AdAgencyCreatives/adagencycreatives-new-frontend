"use client";

import { api } from "contexts/api";
import createDataContext from "./createDataContext";

const state = {
  agencies: null,
  featured_agencies: null,
  meta: {},
  nextPage: null,
  loading: false,
  single_agency: {},
  open_positions: [],
  stats: null,
  formSubmit: false,
  subscription: null,
  request_package: null,
  video: null,
  creative_applications: [],
  cache: {},
  directory_agencies: null,
  directory_nextPage: null,
  directory_loading: false,

};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_cache":
      return { ...state, cache: { ...state.cache, [action.payload.url]: action.payload.data } };
    case "set_agencies":
      return {
        ...state,
        agencies: action.payload.data,
        nextPage: action.payload.links.next,
      };
    case "set_featured_agencies":
      return {
        ...state,
        featured_agencies: action.payload.data,
      };
    case "set_agencie_roles":
      console.log(action.payload.data);
      return {
        ...state,
        agencies: action.payload.data,
        nextPage: action.payload.links.next,
      };
    case "set_single_agency":
      return { ...state, single_agency: action.payload };
    case "set_video":
      return { ...state, video: action.payload.data[0] };
    case "set_open_positions":
      return { ...state, open_positions: action.payload.data, meta: action.payload.meta };
    case "set_creative_applications":
      return { ...state, creative_applications: action.payload.data };
    case "delete_job":
      return {
        ...state,
        open_positions: state.open_positions.filter((job) => job.id != action.payload),
      };
    case "load_agencies":
      return {
        ...state,
        agencies: [...state.agencies, ...action.payload.data],
        nextPage: action.payload.links.next,
      };
    case "set_loading":
      return { ...state, loading: action.payload };
    case "set_form_submit":
      return { ...state, formSubmit: action.payload };
    case "set_stats":
      return { ...state, stats: action.payload.stats };
    case "set_subscription":
      return { ...state, subscription: action.payload };
    case "set_request_package":
      return { ...state, request_package: action.payload };
    case "set_directory_agencies":
      return {
        ...state,
        directory_agencies: action.payload.data,
        directory_nextPage: action.payload.links.next,
      };
    case "load_directory_agencies":
      return {
        ...state,
        directory_agencies: [...state.directory_agencies, ...action.payload.data],
        directory_nextPage: action.payload.links.next,
      };
    case "set_directory_loading":
      return { ...state, directory_loading: action.payload };
    default:
      return state;
  }
};

const getAgencies = (dispatch) => {
  return async (page) => {
    try {
      const response = await api.get("/agencies?filter[status]=1&filter[is_visible]=1&sort=-featured_at");
      dispatch({
        type: "set_agencies",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getFeaturedAgencies = (dispatch) => {
  return async (per_page = false) => {
    try {
      const response = await api.get(`/agencies?&filter[status]=1&filter[is_featured]=1&filter[is_visible]=1&sort=sort_order${per_page ? '&per_page=' + per_page : ''}`);
      dispatch({
        type: "set_featured_agencies",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getAgencyRoles = (dispatch) => {
  return async (page, role) => {
    try {
      const response = await api.get("/agencies?filter[status]=1&filter[is_visible]=1" + (role ? "&filter[role]=" + role : "") + (page == "home" ? "&per_page=30" : ""));
      dispatch({
        type: "set_agencie_roles",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getAgency = (dispatch) => {
  return async (slug, self = false, role = false, cb = false) => {
    try {
      const response = await api.get("/agencies?filter[status]=1&filter[slug]=" + slug + (self ? "" : "&filter[is_visible]=1") + (role ? "&filter[role]=" + role : ""));
      const data = response.data.data[0];
      const uid = data.user_id;
      getOpenPositions(dispatch, uid);
      dispatch({
        type: "set_single_agency",
        payload: data,
      });
      cb && cb();
    } catch (error) {
      cb && cb(error);
    }
  };
};

const getRoleId = (role) => {
  // Roles => 1:admin, 2:advisor, 3:agency, 4:creative, 5:recruiter
  let roleId = 3;
  switch (role) {
    case "admin": roleId = 1; break;
    case "advisor": roleId = 2; break;
    case "agency": roleId = 3; break;
    case "creative": roleId = 4; break;
    case "recruiter": roleId = 5; break;
  }
  return roleId;
};

const getAgencyById = (dispatch) => {
  return async (user, self = false) => {
    try {
      let role = getRoleId(user?.role);
      let endpoint = "/agencies?filter[status]=1&filter[user_id]=" + user.uuid + "&filter[role]=" + role + (self ? "" : "&filter[is_visible]=1");

      if (state.cache[endpoint]) {
        dispatch({
          type: "set_single_agency",
          payload: state.cache[endpoint].data,
        });
      }

      const response = await api.get(endpoint);
      const data = response.data.data[0];

      dispatch({
        type: "set_cache",
        payload: { url: endpoint, data: data },
      });

      dispatch({
        type: "set_single_agency",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const getAgencyByIdCacheOnly = (dispatch) => {
  return async (user, self = false) => {
    try {
      let role = getRoleId(user?.role);
      let endpoint = "/agencies?filter[status]=1&filter[user_id]=" + user.uuid + "&filter[role]=" + role + (self ? "" : "&filter[is_visible]=1");

      const response = await api.get(endpoint);
      const data = response.data.data[0];

      dispatch({
        type: "set_cache",
        payload: { url: endpoint, data: data },
      });

    } catch (error) {
      console.log(error);
    }
  };
};

const loadAgencies = (dispatch) => {
  return async (page) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get(page);
      dispatch({
        type: "load_agencies",
        payload: response.data,
      });
      setLoading(dispatch, false);
    } catch (error) {
      setLoading(dispatch, false);
    }
  };
};

const getOpenPositions = (dispatch) => {
  return async (uid, page = false, status = null, applications_count = 0) => {
    setLoading(dispatch, true);
    try {
      dispatch({
        type: "set_open_positions",
        payload: [],
      });
      const response = await api.get("/jobs?sort=-created_at&filter[user_id]=" + uid + (status != null && status != '' ? "&filter[status]=" + status : "") + ("&applications_count=" + applications_count) + (page ? "&page=" + page : ""));
      const data = response.data;
      dispatch({
        type: "set_open_positions",
        payload: data,
      });
      setLoading(dispatch, false);
    } catch (error) {
      setLoading(dispatch, false);
    }

  };
};

const searchOpenPositions = (dispatch, state) => {
  return async (searchText, uid, page = false, status = null, applications_count = 0, cb = () => { }) => {
    try {
      const endpoint = "/jobs?skip_applications=yes&sort=-created_at&filter[user_id]=" + uid + (searchText?.length > 0 ? ("&jobSearch=" + searchText) : "") + (status != null && status != '' ? "&filter[status]=" + status : "") + ("&applications_count=" + applications_count) + (page ? "&page=" + page : "");

      if (state.cache[endpoint]) {
        dispatch({
          type: "set_open_positions",
          payload: state.cache[endpoint],
        });
        setLoading(dispatch, false);
        cb();
      } else {
        setLoading(dispatch, true);
      }

      const response = await api.get(endpoint);
      dispatch({
        type: "set_cache",
        payload: { url: endpoint, data: response.data },
      });

      dispatch({
        type: "set_open_positions",
        payload: response.data,
      });
      setLoading(dispatch, false);
      cb();
    } catch (error) {
      setLoading(dispatch, false);
    }
  };
};

const searchOpenPositionsCacheOnly = (dispatch, state) => {
  return async (searchText, uid, page = false, status = null, applications_count = 0, cb = () => { }) => {
    let meta = null;
    try {
      const endpoint = "/jobs?skip_applications=yes&sort=-created_at&filter[user_id]=" + uid + (searchText?.length > 0 ? ("&jobSearch=" + searchText) : "") + (status != null && status != '' ? "&filter[status]=" + status : "") + ("&applications_count=" + applications_count) + (page ? "&page=" + page : "");

      const response = await api.get(endpoint);
      meta = response.data.meta;

      dispatch({
        type: "set_cache",
        payload: { url: endpoint, data: response.data },
      });

    } catch (error) {
      console.log(error);
    } finally {
      if ((page === false || page == 1) && meta != null) {
        // load all pages for caching
        for (let i = 2; i <= meta.last_page; i++) {
          searchOpenPositionsCacheOnly(dispatch, state)(searchText, uid, i, status, applications_count, () => { });
        }
      }
    }
  };
};

const getOpenPositionsAll = (dispatch) => {
  return async (uid, status = null, applications_count = 0) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/jobs?sort=-created_at&filter[user_id]=" + uid + (status != null && status != '' ? "&filter[status]=" + status : "") + ("&applications_count=" + applications_count) + "&per_page=999999");
      const data = response.data;
      dispatch({
        type: "set_open_positions",
        payload: data,
      });
      setLoading(dispatch, false);
    } catch (error) {
      setLoading(dispatch, false);
    }
  };
};

const sendJobInvite = (dispatch) => {
  return async (receiver_id, job_id) => {
    setLoading(dispatch, true);
    const response = await api.post("/job-invitation", {
      receiver_id,
      job_id,
    });
    setLoading(dispatch, false);
    return response;
  };
};

const getStats = (dispatch) => {
  return async () => {
    try {
      const endpoint = "/agency_stats";
      if (state.cache[endpoint]) {
        dispatch({
          type: "set_stats",
          payload: state.cache[endpoint],
        });
      }

      const response = await api.get(endpoint);
      dispatch({
        type: "set_cache",
        payload: { url: endpoint, data: response.data },
      });

      dispatch({
        type: "set_stats",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const getAgencyDashboardStatsCacheOnly = (dispatch) => {
  return async () => {
    try {
      const endpoint = "/agency_stats";
      const response = await api.get(endpoint);
      dispatch({
        type: "set_cache",
        payload: { url: endpoint, data: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const saveAgency = (dispatch) => {
  return async (uid, data, callback, callbackError) => {
    setFormSubmit(dispatch, true);
    try {
      await api.patch("/agency_profile/" + uid, data);
      callback("Agency profile updated successfully");
    } catch (error) {
      callbackError(error.response.data.message);
    }
    setFormSubmit(dispatch, false);
  };
};

const saveAdvisorRecruiter = (dispatch) => {
  return async (role, uid, data, callback, callbackError) => {
    setFormSubmit(dispatch, true);
    try {
      await api.patch("/advisor_profile/" + uid, data);
      callback(role + " profile updated successfully");
    } catch (error) {
      callbackError(error.response.data.message);
    }
    setFormSubmit(dispatch, false);
  };
};

const uploadAttachment = (dispatch) => {
  return async (data, callback) => {
    try {
      const response = await api.post("/attachments", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      callback(response);
    } catch (error) { }
  };
};

const removeAttachment = (dispatch) => {
  return async (id) => {
    try {
      const response = await api.delete("/attachments/" + id);
    } catch (error) { }
  };
};

const removeJobAttachment = (dispatch) => {
  return async (job_id, attachment_id, cb = false) => {
    try {
      const response = await api.post("/delete_job_logo", {
        job_id: job_id,
        attachment_id: attachment_id
      });
      cb && cb();
    } catch (error) { }
  };
};

const getVideo = (dispatch) => {
  return async (uid) => {
    try {
      const response = await api.get("/attachments?filter[user_id]=" + uid + "&filter[resource_type]=agency_reel");
      dispatch({
        type: "set_video",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const searchAgencies = (dispatch) => {
  return async (query, role) => {
    try {
      const response = await api.get("/agencies?filter[status]=1&filter[is_visible]=1" + (role ? "&filter[role]=" + role : "") + "&filter[name]=" + query);
      dispatch({
        type: "set_agencies",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const agencySearch1 = (dispatch) => {
  return async (search) => {
    try {
      const response = await api.get("/agencies/search1/?search=" + search);
      dispatch({
        type: "set_agencies",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const agencySearch2 = (dispatch) => {
  return async (field, search) => {
    try {
      const response = await api.get("/agencies/search2/?field=" + field + "&search=" + search);
      dispatch({
        type: "set_agencies",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const requestPackage = (dispatch) => {
  return async (data, callback) => {
    setFormSubmit(dispatch, true);
    try {
      const response = await api.post("/package-requests", data);
      setRequestPackage(dispatch, data);
      callback();
    } catch (error) { }
    setFormSubmit(dispatch, false);
  };
};

const getSubscriptionStatus = (dispatch) => {
  return async () => {
    try {
      const response = await api.get("/subscription/status");
      if (response.data.data.status == "active") {
        dispatch({
          type: "set_subscription",
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: "set_subscription",
        payload: false,
      });
    }
  };
};

const setFormSubmit = (dispatch, status) => {
  dispatch({
    type: "set_form_submit",
    payload: status,
  });
};

const setRequestPackage = (dispatch, state) => {
  dispatch({
    type: "set_request_package",
    payload: state,
  });
};

const deleteJob = (dispatch) => {
  return async (id, cb = () => { }) => {
    try {
      const response = await api.delete("/jobs/" + id);
      dispatch({
        type: "delete_job",
        payload: id,
      });
      cb();
    } catch (error) { }
  };
};

const setLoading = (dispatch, state) => {
  dispatch({
    type: "set_loading",
    payload: state,
  });
};

const generateThumbnailAttachment = (dispatch) => {
  return async (user_id) => {
    try {
      const response = await api.get("/generate-thumbnail-attachment?user_id=" + user_id);
      return response.data.data;
    } catch (error) { }
  };
};

const generateCroppedAttachment = (dispatch) => {
  return async (user_id, x, y, width, height) => {
    try {
      const response = await api.get(
        "/generate-cropped-attachment?user_id=" + user_id
        + "&x=" + x
        + "&y=" + y
        + "&width=" + width
        + "&height=" + height
      );
      return response.data.data;
    } catch (error) { }
  };
};

const getCreativeApplications = (dispatch) => {
  return async (job_user_id, creative_user_id) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/get_creative_applications?job_user_id=" + job_user_id + "&creative_user_id=" + creative_user_id);
      const data = response.data;
      dispatch({
        type: "set_creative_applications",
        payload: data,
      });
      setLoading(dispatch, false);
    } catch (error) {
      setLoading(dispatch, false);
    }

  };
};

const isCreativeApplicant = (dispatch) => {
  return async (job_user_id, creative_user_id, cb = (data = null) => { }) => {
    try {
      const response = await api.get("/is_creative_applicant?job_user_id=" + job_user_id + "&creative_user_id=" + creative_user_id);
      const data = response.data;
      cb(response.data);
    } catch (error) { }
  };
};

const getDirectoryAgencies = (dispatch) => {
  return async (per_page = false) => {
    setDirectoryLoading(dispatch, true);
    try {
      const response = await api.get(`/agencies?filter[status]=1&filter[is_visible]=1&sort=-featured_at${per_page ? '&per_page=' + per_page : ''}`);
      dispatch({
        type: "set_directory_agencies",
        payload: response.data,
      });
    } catch (error) {

    } finally {
      setDirectoryLoading(dispatch, false);
    }
  };
};

const searchDirectoryAgenciesAdvanced = (dispatch) => {
  return async (query, cb = (data = null) => { }) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/agencies/search1" + "?search=" + query);
      dispatch({
        type: "set_directory_agencies",
        payload: response.data,
      });
      cb(response.data?.data);
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const loadDirectoryAgencies = (dispatch) => {
  return async (page) => {
    setDirectoryLoading(dispatch, true);
    try {
      const response = await api.get(page);
      dispatch({
        type: "load_directory_agencies",
        payload: response.data,
      });
    } catch (error) {

    } finally {
      setDirectoryLoading(dispatch, false);
    }
  };
};

const setDirectoryLoading = (dispatch, status) => {
  dispatch({
    type: "set_directory_loading",
    payload: status,
  });
};


export const { Context, Provider } = createDataContext(
  reducer,
  {
    getAgencies,
    getFeaturedAgencies,
    loadAgencies,
    getAgency,
    getStats,
    getAgencyDashboardStatsCacheOnly,
    getAgencyById,
    getAgencyByIdCacheOnly,
    saveAgency,
    searchAgencies,
    agencySearch1,
    agencySearch2,
    getOpenPositions,
    searchOpenPositions,
    searchOpenPositionsCacheOnly,
    getOpenPositionsAll,
    uploadAttachment,
    removeAttachment,
    removeJobAttachment,
    getVideo,
    deleteJob,
    requestPackage,
    getSubscriptionStatus,
    sendJobInvite,
    getAgencyRoles,
    saveAdvisorRecruiter,
    generateThumbnailAttachment,
    generateCroppedAttachment,
    getCreativeApplications,
    isCreativeApplicant,
    getDirectoryAgencies,
    loadDirectoryAgencies,
    searchDirectoryAgenciesAdvanced,
  },
  state
);
