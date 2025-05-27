"use client";

import { api } from "contexts/api";
import createDataContext from "./createDataContext";
import { usePathname } from "next/navigation";

const state = {
  creatives: null,
  directory_creatives: null,
  related_creatives: null,
  related_creatives_nextPage: null,
  search_creatives: null,
  featured_creatives: null,
  nextPage: null,
  directory_nextPage: null,
  loading: false,
  directory_loading: false,
  single_creative: {},
  single_creative_for_pdf: {},
  creative_experience: [],
  creative_education: [],
  stats: null,
  applications: null,
  formSubmit: false,
  applied_jobs: [],
  applied_jobsNextPage: null,
  resume: [],
  profile_resume: null,
  portfolio_items: [],
  video: null,
  notifications: [],
  cache: {},
  group_invite_members: null,
  group_invite_members_nextPage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_cache":
      return { ...state, cache: { ...state.cache, [action.payload.url]: action.payload.data } };
    case "set_creatives":
      return {
        ...state,
        creatives: action.payload.data,
        nextPage: action.payload.links.next,
      };
    case "set_directory_creatives":
      return {
        ...state,
        directory_creatives: action.payload.data,
        directory_nextPage: action.payload.links.next,
      };
    case "set_related_creatives":
      return {
        ...state,
        related_creatives: action.payload.data,
        related_creatives_nextPage: action.payload.links.next,
      };
    case "set_search_creatives":
      return {
        ...state,
        search_creatives: action.payload.data,
        nextPage: action.payload.links.next,
      };
    case "set_featured_creatives":
      return {
        ...state,
        featured_creatives: action.payload.data,
        // nextPage: action.payload.links.next,
      };
    case "set_group_invite_members":
      return {
        ...state,
        group_invite_members: action.payload.data,
        group_invite_members_nextPage: action.payload.links.next,
      };
    case "set_single_creative":
      return { ...state, single_creative: action.payload };
    case "set_single_creative_for_pdf":
      return { ...state, single_creative_for_pdf: action.payload };
    case "set_video":
      return { ...state, video: action.payload.data[0] };
    case "reset_video":
      return { ...state, video: null };
    case "set_creative_experience":
      return { ...state, creative_experience: action.payload.data };
    case "set_creative_education":
      return { ...state, creative_education: action.payload.data };
    case "load_creatives":
      return {
        ...state,
        creatives: [...state.creatives, ...action.payload.data],
        nextPage: action.payload.links.next,
      };
    case "load_directory_creatives":
      return {
        ...state,
        directory_creatives: [...state.directory_creatives, ...action.payload.data],
        directory_nextPage: action.payload.links.next,
      };
    case "load_group_invite_member":
      return {
        ...state,
        group_invite_members: [...state.group_invite_members, ...action.payload.data],
        group_invite_members_nextPage: action.payload.links.next,
      };
    case "load_search_creatives":
      return {
        ...state,
        search_creatives: [...state.search_creatives, ...action.payload.data],
        nextPage: action.payload.links.next,
      };
    case "set_loading":
      return { ...state, loading: action.payload };
    case "set_directory_loading":
      return { ...state, directory_loading: action.payload };
    case "set_form_submit":
      return { ...state, formSubmit: action.payload };
    case "set_stats":
      return { ...state, stats: action.payload.stats };
    case "set_resume":
      return { ...state, resume: action.payload.data };
    case "set_profile_resume":
      return { ...state, profile_resume: action.payload };
    case "set_portfolio_items":
      return { ...state, portfolio_items: action.payload.data };
    case "set_applied_jobs":
      return {
        ...state,
        applied_jobs: action.payload.data,
        applied_jobsNextPage: action.payload.links.next,
        applied_jobsMeta: action.payload.meta
      };
    case "set_applications":
      return { ...state, applications: action.payload.data };
    case "set_notifications":
      return { ...state, notifications: action.payload.data };
    default:
      return state;
  }
};

const getCreatives = (dispatch) => {
  return async () => {
    try {
      const response = await api.get("/creatives?filter[status]=1&filter[is_visible]=1");
      dispatch({
        type: "set_creatives",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getDirectoryCreatives = (dispatch) => {
  return async (per_page = false) => {
    setDirectoryLoading(dispatch, true);
    try {
      const response = await api.get(`/creatives?filter[status]=1&filter[is_visible]=1${per_page ? '&per_page=' + per_page : ''}`);
      dispatch({
        type: "set_directory_creatives",
        payload: response.data,
      });
    } catch (error) { 

    } finally {
      setDirectoryLoading(dispatch, false);
    }
  };
};

const getGroupInviteMembers = (dispatch) => {
  return async (group) => {
    try {
      const response = await api.get(`/creatives?filter[status]=1&filter[is_visible]=1&filter[not_in_group]=${group}&filter[not_invited]=${group}`);
      dispatch({
        type: "set_group_invite_members",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getFeaturedCreatives = (dispatch) => {
  return async (per_page = false) => {
    try {
      const response = await api.get(`/home/creatives?sort=sort_order&filter[is_featured]=1&filter[status]=1&filter[is_visible]=1${per_page ? '&per_page=' + per_page : ''}`);
      dispatch({
        type: "set_featured_creatives",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getLoungeCreativesForTag = (dispatch) => {
  return async (search) => {
    try {
      const response = await api.get("/creatives/search/tag?name=" + search);
      return response.data.data;
    } catch (error) { }
    return null;
  };
};

const getRelatedCreatives = (dispatch) => {
  return async (user_id) => {
    try {
      const response = await api.get("/creatives/related?creative_id=" + user_id);
      dispatch({
        type: "set_related_creatives",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getCreative = (dispatch) => {
  return async (slug, cb = (error = null) => { }) => {
    try {
      dispatch({
        type: "set_single_creative",
        payload: {},
      });
      const response = await api.get("/creatives?filter[status]=1&filter[slug]=" + slug);
      const data = response.data.data[0];
      const uid = data.user_id;
      const pathname = usePathname();
      const currentPage = pathname;
      if (currentPage != '/change-password' && currentPage != '/change-password/' && currentPage != 'change-password/') {
        getCreativeEducation(dispatch, uid);
        getCreativeExperience(dispatch, uid);
      }
      // console.log('data', data);
      dispatch({
        type: "set_single_creative",
        payload: data,
      });
      cb();
    } catch (error) {
      cb(error);
    }
  };
};

const getCreativeForPdf = (dispatch) => {
  return async (slug, cb = (data = null, error = null) => { }) => {
    try {
      const response = await api.get("/creatives?base64=yes&educations=yes&experiences=yes&reviews=yes&filter[status]=1&filter[slug]=" + slug);
      const data = response.data.data[0];
      const uid = data.user_id;
      const currentPage = window.location.pathname;
      dispatch({
        type: "set_single_creative_for_pdf",
        payload: data,
      });
      cb(data, null);
    } catch (error) {
      cb(null, error);
    }
  };
};

const getCreativeById = (dispatch) => {
  return async (id, cb = (data = null) => { }) => {
    try {
      const response = await api.get("/creatives?filter[status]=1&filter[user_id]=" + id);
      const data = response.data.data[0];
      const uid = data.user_id;
      const currentPage = window.location.pathname;
      if (currentPage != '/change-password' && currentPage != '/change-password/' && currentPage != 'change-password/') {
        getCreativeEducation(dispatch, uid);
        getCreativeExperience(dispatch, uid);
      }

      dispatch({
        type: "set_single_creative",
        payload: data,
      });
      cb(data);
    } catch (error) { }
  };
};

const searchCreatives = (dispatch) => {
  return async (query) => {
    setLoading(dispatch, true);

    try {
      const response = await api.get("/creatives?filter[status]=1&filter[is_visible]=1&filter[name]=" + query);
      dispatch({
        type: "set_creatives",
        payload: response.data,
      });
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const searchCreativesAdvanced = (dispatch) => {
  return async (type, query, role, queryLevel2 = "", cb = (data = null) => { }) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/creatives/" + type + "?search=" + query + "&role=" + role + (queryLevel2?.length > 0 ? ("&search_level2=" + queryLevel2) : ""));

      dispatch({
        type: "set_creatives",
        payload: response.data,
      });
      cb(response.data?.data);
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const searchDirectoryCreativesAdvanced = (dispatch) => {
  return async (type, query, role, queryLevel2 = "", cb = (data = null) => { }) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/creatives/" + type + "?search=" + query + "&role=" + role + (queryLevel2?.length > 0 ? ("&search_level2=" + queryLevel2) : ""));
      dispatch({
        type: "set_directory_creatives",
        payload: response.data,
      });
      cb(response.data?.data);
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const searchGroupInviteMember = (dispatch) => {
  return async (type, query, role, queryLevel2 = "", cb = (data = null) => { }) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/creatives/" + type + "?search=" + query + "&role=" + role + (queryLevel2?.length > 0 ? ("&search_level2=" + queryLevel2) : ""));

      dispatch({
        type: "set_group_invite_members",
        payload: response.data,
      });
      cb(response.data?.data);
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const searchCreativesFull = (dispatch) => {
  return async (field, search, searcLevel2 = "") => {
    setLoading(dispatch, true);

    try {
      const response = await api.get("/creatives/search4/?field=" + field + "&search=" + search + (searcLevel2?.length > 0 ? ("&search_level2=" + searcLevel2) : ""));

      dispatch({
        type: "set_search_creatives",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(dispatch, false);
  };
};

const getCreativeEducation = async (dispatch, uid) => {
  try {
    dispatch({
      type: "set_creative_education",
      payload: [],
    });
    const response = await api.get("/educations?per_page=9999&filter[user_id]=" + uid);
    dispatch({
      type: "set_creative_education",
      payload: response.data,
    });
  } catch (error) { }
};

const getCreativeExperience = async (dispatch, uid) => {
  try {
    dispatch({
      type: "set_creative_experience",
      payload: [],
    });
    const response = await api.get("/experiences?per_page=9999&filter[user_id]=" + uid);
    dispatch({
      type: "set_creative_experience",
      payload: response.data,
    });
  } catch (error) { }
};

const loadGroupInviteMember = (dispatch) => {
  return async (page) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get(page);
      dispatch({
        type: "load_group_invite_member",
        payload: response.data,
      });
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const loadCreatives = (dispatch) => {
  return async (page) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get(page);
      dispatch({
        type: "load_creatives",
        payload: response.data,
      });
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const loadDirectoryCreatives = (dispatch) => {
  return async (page) => {
    setDirectoryLoading(dispatch, true);
    try {
      const response = await api.get(page);
      dispatch({
        type: "load_directory_creatives",
        payload: response.data,
      });
    } catch (error) {

     } finally {
    setDirectoryLoading(dispatch, false);
     }
  };
};

const loadSearchCreatives = (dispatch) => {
  return async (page) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get(page);
      dispatch({
        type: "load_search_creatives",
        payload: response.data,
      });
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const setLoading = (dispatch, status) => {
  dispatch({
    type: "set_loading",
    payload: status,
  });
};

const setDirectoryLoading = (dispatch, status) => {
  dispatch({
    type: "set_directory_loading",
    payload: status,
  });
};

const saveCreative = (dispatch) => {
  return async (uid, data, callback, callbackError) => {
    dispatch({
      type: "set_form_submit",
      payload: true,
    });
    try {
      await api.patch("/creative_profile/" + uid, data);
      callback("Creative profile updated successfully");
    } catch (error) {
      callbackError(error.response.data.message);
    }
    dispatch({
      type: "set_form_submit",
      payload: false,
    });
  };
};

const saveResume = (dispatch) => {
  return async (uid, data, educations, experiences) => {
    dispatch({
      type: "set_form_submit",
      payload: true,
    });
    try {
      await api.patch("/creative_resume/" + uid, data);
      await api.patch("/educations/", { educations });
      await api.patch("/experiences/", { experiences });
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: "set_form_submit",
      payload: false,
    });
  };
};

const saveAttachment = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.post("/attachments", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) { }
  };
};

const removeAttachment = (dispatch) => {
  return async (id, cb = (error = null) => { }) => {
    try {
      const response = await api.delete("/attachments/" + id);
      cb();
    } catch (error) {
      cb(error);
    }
  };
};

const capturePortfolioSnapshot = (dispatch) => {
  return async (uuid, wait_secs, cb = (error = null) => { }) => {
    try {
      const response = await api.get("/creatives/capture-portfolio-snapshot/" + uuid + "?wait_seconds=" + wait_secs);
      cb();
      return response.data;
    } catch (error) {
      cb(error);
    }
    return null;
  };
};

const getResume = (dispatch) => {
  return async (uid) => {
    try {
      const response = await api.get("/attachments?filter[user_id]=" + uid + "&filter[resource_type]=resume");
      dispatch({
        type: "set_resume",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const removePortfolioCaptureLog = (dispatch) => {
  return async (uuid) => {
    try {
      const response = await api.get("/creatives/remove-portfolio-capture-log/" + uuid);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return null;
  };
};

const getProfileResume = (dispatch) => {
  return async (uid) => {
    try {
      const response = await api.get("/resume/system-generated");
      dispatch({
        type: "set_profile_resume",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getPortfolio = (dispatch) => {
  return async (uid) => {
    try {
      const response = await api.get("/attachments?filter[user_id]=" + uid + "&filter[resource_type]=portfolio_item");
      dispatch({
        type: "set_portfolio_items",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getVideo = (dispatch) => {
  return async (uid) => {
    try {
      const response = await api.get("/attachments?filter[user_id]=" + uid + "&filter[resource_type]=creative_reel");
      dispatch({
        type: "set_video",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const resetVideo = (dispatch) => {
  return () => {
    dispatch({ type: "reset_video" });
  };
};

const saveCreativeImage = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.post("/attachments", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.data;
    } catch (error) { }
  };
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


const getStats = (dispatch) => {
  return async () => {
    try {
      const endpoint = "/creative_stats";
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

const getCreativeDashboardStatsCacheOnly = (dispatch) => {
  return async () => {
    try {
      const endpoint = "/creative_stats";
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

const getApplications = (dispatch) => {
  return async (uid, recent_only = "no") => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/applications?filter[user_id]=" + uid + "&recent_only=" + recent_only);
      dispatch({
        type: "set_applications",
        payload: response.data,
      });
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const getNotifications = (dispatch) => {
  return async (uid, type) => {
    try {
      const response = await api.get(`/notifications?filter[user_id]=${uid}`);
      // &filter[type]=${type}
      dispatch({
        type: "set_notifications",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getAppliedJobs = (dispatch) => {
  return async (page = false) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get("/applied_jobs" + (page ? "?page=" + page : ""));
      dispatch({
        type: "set_applied_jobs",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(dispatch, false);
  };
};

const searchAppliedJobs = (dispatch, state) => {
  return async (searchText = "", page = false, cb = (data = null) => { }) => {
    let meta = null;
    try {
      let endpoint = "/applied_jobs" + (searchText?.length > 0 || page ? "?" : "") + (searchText?.length > 0 ? ("&searchText=") + searchText : "") + (page ? "&page=" + page : "");

      if (state.cache[endpoint]) {
        dispatch({
          type: "set_applied_jobs",
          payload: state.cache[endpoint],
        });
        cb(state.cache[endpoint].data);
        setLoading(dispatch, false);
      } else {
        setLoading(dispatch, true);
      }

      const response = await api.get(endpoint);
      meta = response.data.meta;
      dispatch({
        type: "set_cache",
        payload: { url: endpoint, data: response.data },
      });

      dispatch({
        type: "set_applied_jobs",
        payload: response.data,
      });
      setLoading(dispatch, false);
      cb();
    } catch (error) {
      console.log(error);
      setLoading(dispatch, false);
      cb();
    }
  };
};

const deleteApplication = (dispatch) => {
  return async (id) => {
    setLoading(dispatch, true);
    try {
      const response = await api.delete("/applications/" + id);
      getAppliedJobs(dispatch)();
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    getCreatives,
    getDirectoryCreatives,
    getRelatedCreatives,
    getFeaturedCreatives,
    getStats,
    getCreativeDashboardStatsCacheOnly,
    getApplications,
    loadCreatives,
    loadDirectoryCreatives,
    loadSearchCreatives,
    getCreative,
    getCreativeForPdf,
    getCreativeById,
    searchCreatives,
    searchCreativesAdvanced,
    searchDirectoryCreativesAdvanced,
    searchCreativesFull,
    saveCreative,
    saveResume,
    saveAttachment,
    saveCreativeImage,
    getAppliedJobs,
    searchAppliedJobs,
    deleteApplication,
    getResume,
    getProfileResume,
    getPortfolio,
    getVideo,
    resetVideo,
    removeAttachment,
    getLoungeCreativesForTag,
    getNotifications,
    capturePortfolioSnapshot,
    removePortfolioCaptureLog,
    generateThumbnailAttachment,
    generateCroppedAttachment,
    getGroupInviteMembers,
    searchGroupInviteMember,
    loadGroupInviteMember
  },
  state
);
