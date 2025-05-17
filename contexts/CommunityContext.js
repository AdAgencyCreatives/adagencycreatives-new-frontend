"use client";

import { api } from "contexts/api";
import createDataContext from "./createDataContext";

const default_feed_group = "715bfe90-833e-3459-9700-036ac28d3fd4";

const state = {
  posts: [],
  trending_posts: [],
  nextPage: null,
  loading: false,
  single_post: {},
  formSubmit: false,
  post_reactions: { post_id: "", data: {} },
  post_likes: { post_id: "", data: {} },
  post_laughs: { post_id: "", data: {} },
  post_loves: { post_id: "", data: {} },
  post_comments: { post_id: "", data: {} },
  post_comment_replies: { post_id: "", comment_id: "", data: {} },
  reaction_action: { post_id: "", action: "", error: null },
  like_action: { post_id: "", action: "", error: null },
  laugh_action: { post_id: "", action: "", error: null },
  love_action: { post_id: "", action: "", error: null },
  new_members: [],
  post_added: null,
  post_updated: null,
  post_deleted: null,
  comment_added: null,
  comment_updated: null,
  comment_deleted: null,
  reply_added: null,
  reply_updated: null,
  reply_deleted: null,
  halt_refresh: false,
  friends_count: 0,
  friend_requests_count: 0,
};

const appendNewPosts = (state, oldPosts, newPosts) => {
  if (!oldPosts?.length > 0) {
    return newPosts;
  }

  let filteredOldPosts = [];
  for (let idx = 0; idx < oldPosts.length; idx++) {
    const post = oldPosts[idx];

    if (post.id == state?.post_deleted) {
      continue;
    }

    let postFound = false;
    for (let index = 0; index < newPosts.length; index++) {
      const newPost = newPosts[index];
      if (post.id == newPost.id) {
        postFound = true;
        break;
      }
    }

    if (!postFound) {
      filteredOldPosts.push(post);
    }
  }

  let data = [...newPosts, ...filteredOldPosts];

  return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

const getPostsUpdated = (posts, new_post_reactions) => {

  let new_posts = [...posts];

  for (let idx = 0; idx < new_posts.length; idx++) {
    const post = new_posts[idx];

    if (post.id != new_post_reactions.post_id) {
      continue;
    }

    new_posts[idx].post_reactions = new_post_reactions.data;
    console.log("Post Reactions Updated: " + (new Date()).toString());
  }

  return new_posts;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_posts":
      return {
        ...state,
        posts: appendNewPosts(state, state.posts, action.payload.data),
        // posts: action.payload.data,
        nextPage: action.payload.links.next,
      };
    case "set_trending_posts":
      return {
        ...state,
        trending_posts: action.payload.data,
        // nextPage: action.payload.links.next,
        // interferring with lounge post nextPage urls
      };
    case "set_new_members":
      return {
        ...state,
        new_members: action.payload.data,
        // nextPage: action.payload.links.next,
        // interferring with lounge posts nextPage urls
      };
    case "set_post_comments":
      return {
        ...state,
        post_comments: action.payload,
      };
    case "add_post":
      return {
        ...state,
        post_added: action.payload,
      };
    case "update_post":
      return {
        ...state,
        post_updated: action.payload,
        posts: state.posts.filter(item => item.id == action.payload.id ? action.payload : item),
      };
    case "delete_post":
      return {
        ...state,
        post_deleted: action.payload,
      };
    case "add_comment":
      return {
        ...state,
        comment_added: action.payload,
      };
    case "update_comment":
      return {
        ...state,
        comment_updated: action.payload,
      };
    case "delete_comment":
      return {
        ...state,
        comment_deleted: action.payload,
      };
    case "add_reply":
      return {
        ...state,
        reply_added: action.payload,
      };
    case "update_reply":
      return {
        ...state,
        reply_updated: action.payload,
      };
    case "delete_reply":
      return {
        ...state,
        reply_deleted: action.payload,
      };
    case "load_posts":
      return {
        ...state,
        posts: appendNewPosts(state, state.posts, action.payload.data),
        // posts: [...state.posts, ...action.payload.data],
        nextPage: action.payload.links.next,
      };
    case "reset_posts":
      return {
        ...state,
        posts: action.payload,
        nextPage: "",
      };
    case "set_loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "set_halt_refresh":
      return {
        ...state,
        halt_refresh: action.payload,
      };

    case "set_form_submit":
      return {
        ...state,
        formSubmit: action.payload,
      };
    case "set_post_likes":
      return {
        ...state,
        post_likes: action.payload,
      };
    case "set_like_action":
      return {
        ...state,
        like_action: action.payload,
      };
    case "set_post_laughs":
      return {
        ...state,
        post_laughs: action.payload,
      };
    case "set_laugh_action":
      return {
        ...state,
        laugh_action: action.payload,
      };
    case "set_post_loves":
      return {
        ...state,
        post_loves: action.payload,
      };
    case "set_love_action":
      return {
        ...state,
        love_action: action.payload,
      };
    case "set_post_reactions":
      // let new_posts = getPostsUpdated(state.posts, action.payload);
      return {
        ...state,
        post_reactions: action.payload,
        // posts: new_posts,
      };
    case "set_reaction_action":
      return {
        ...state,
        reaction_action: action.payload,
      };
    case "set_friends_count":
      return {
        ...state,
        friends_count: action.payload,
      };
    case "set_friend_requests_count":
      return {
        ...state,
        friend_requests_count: action.payload,
      };
    default:
      return state;
  }
};

const getPosts = (dispatch) => {
  return async (group_id) => {
    try {
      let apiEndPoint = "/lounge/main_feed/?sort=-created_at&filter[status]=1"; // default will be main feed
      if (group_id != default_feed_group) {
        apiEndPoint = "/posts?filter[group_id]=" + group_id + "&sort=-created_at&filter[status]=1"
      }
      // filter[status]=1, i.e., only published posts in Feeds

      const response = await api.get(apiEndPoint);
      //console.log("fetched new posts at: " + (new Date()).toString());
      dispatch({
        type: "set_posts",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getTrendingPosts = (dispatch) => {
  return async (group_id) => {
    try {
      const response = await api.get("/trending_posts");
      dispatch({
        type: "set_trending_posts",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getNewMembers = (dispatch) => {
  return async (per_page) => {
    try {
      const response = await api.get(
        "/creatives?sort=-created_at&filter[status]=1&filter[is_visible]=1&per_page=" + per_page
      ); // only active members
      dispatch({
        type: "set_new_members",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const loadPosts = (dispatch) => {
  return async (page, group_id) => {
    let nextPageNumber = page.substring(
      page.indexOf("?page=") + "?page=".length
    );

    let apiEndPoint = "/lounge/main_feed/?sort=-created_at&filter[status]=1"; // default will be main feed
    if (group_id != default_feed_group) {
      apiEndPoint = "/posts?filter[group_id]=" + group_id + "&sort=-created_at&filter[status]=1"
    }
    let nextPageUrl = apiEndPoint + "&page=" + nextPageNumber;

    setLoading(dispatch, true);
    try {
      const response = await api.get(nextPageUrl);
      dispatch({
        type: "load_posts",
        payload: response.data,
      });
      setLoading(dispatch, false);
    } catch (error) { }
  };
};

const resetPosts = (dispatch) => {
  return async () => {
    try {
      dispatch({
        type: "reset_posts",
        payload: [],
      });
    } catch (error) { }
  };
};

const getComments = (dispatch) => {
  return async (uid) => {
    setLoading(dispatch, true);
    try {
      const response = await api.get(
        "/comments?sort=-created_at&filter[post_id]=" + uid
      );
      dispatch({
        type: "set_post_comments",
        payload: { post_id: uid, data: response.data },
      });
    } catch (error) { }
    setLoading(dispatch, false);
  };
};

const getLikes = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.get("/likes?filter[post_id]=" + data.post_id);
      dispatch({
        type: "set_post_likes",
        payload: { post_id: data.post_id, data: response.data },
      });
    } catch (error) { }
  };
};

const toggleLike = (dispatch) => {
  return async (data) => {
    dispatch({
      type: "set_like_action",
      payload: { post_id: data.post_id, action: "like_begin", error: null },
    });
    try {
      const response = await api.post("/likes", data);
      dispatch({
        type: "set_like_action",
        payload: { post_id: data.post_id, action: "like_success", error: null },
      });
    } catch (error) {
      dispatch({
        type: "set_like_action",
        payload: { post_id: data.post_id, action: "like_failed", error: error },
      });
    }
  };
};

const getLove = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.get(
        "/post-reactions?filter[post_id]=" +
        data.post_id +
        "&filter[type]=heart"
      );
      dispatch({
        type: "set_post_loves",
        payload: { post_id: data.post_id, data: response.data },
      });
    } catch (error) { }
  };
};

const toggleLove = (dispatch) => {
  return async (data) => {
    dispatch({
      type: "set_love_action",
      payload: { post_id: data.post_id, action: "love_begin", error: null },
    });
    try {
      const response = await api.post("/post-reactions", data);
      dispatch({
        type: "set_love_action",
        payload: {
          post_id: data.post_id,
          action: "love_success",
          error: null,
        },
      });
    } catch (error) {
      dispatch({
        type: "set_love_action",
        payload: {
          post_id: data.post_id,
          action: "love_failed",
          error: error,
        },
      });
    }
  };
};

const getLaugh = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.get(
        "/post-reactions?filter[post_id]=" +
        data.post_id +
        "&filter[type]=laugh"
      );
      dispatch({
        type: "set_post_laughs",
        payload: { post_id: data.post_id, data: response.data },
      });
    } catch (error) { }
  };
};

const toggleLaugh = (dispatch) => {
  return async (data) => {
    dispatch({
      type: "set_laugh_action",
      payload: { post_id: data.post_id, action: "laugh_begin", error: null },
    });
    try {
      const response = await api.post("/post-reactions", data);
      dispatch({
        type: "set_laugh_action",
        payload: {
          post_id: data.post_id,
          action: "laugh_success",
          error: null,
        },
      });
    } catch (error) {
      dispatch({
        type: "set_laugh_action",
        payload: {
          post_id: data.post_id,
          action: "laugh_failed",
          error: error,
        },
      });
    }
  };
};

const getReactions = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.get("/post-reactions?filter[post_id]=" + data.post_id);
      dispatch({
        type: "set_post_reactions",
        payload: { post_id: data.post_id, data: response.data },
      });
    } catch (error) { }
  };
};

const getReaction = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.get("/post-reactions?filter[post_id]=" + data.post_id + "&filter[type]=" + data.type);
      dispatch({
        type: "set_post_reactions",
        payload: { post_id: data.post_id, data: response.data },
      });
    } catch (error) { }
  };
};

const toggleReaction = (dispatch) => {
  return async (data) => {
    dispatch({
      type: "set_reaction_action",
      payload: { post_id: data.post_id, action: "reaction_begin", error: null },
    });
    try {
      const response = await api.post("/post-reactions", data);
      dispatch({
        type: "set_reaction_action",
        payload: {
          post_id: data.post_id,
          action: "reaction_success",
          error: null,
        },
      });
    } catch (error) {
      dispatch({
        type: "set_reaction_action",
        payload: {
          post_id: data.post_id,
          action: "reaction_failed",
          error: error,
        },
      });
    }
  };
};

const savePost = (dispatch) => {
  return async (data, callback) => {
    dispatch({
      type: "set_form_submit",
      payload: true,
    });
    try {
      const response = await api.post("/posts", data);
      callback(response);
      dispatch({
        type: "add_post",
        payload: response.data.data.id,
      });
    } catch (error) { }
    dispatch({
      type: "set_form_submit",
      payload: false,
    });
  };
};

const saveComment = (dispatch) => {
  return async (data, callback) => {
    dispatch({
      type: "set_form_submit",
      payload: true,
    });
    try {
      const response = await api.post("/comments", data);
      callback(response);
      dispatch({
        type: "add_comment",
        payload: {
          post_id: response.data.data.post_id,
          comment_uuid: response.data.data.uuid,
        },
      });
    } catch (error) { }
    dispatch({
      type: "set_form_submit",
      payload: false,
    });
  };
};

const updatePost = (dispatch) => {
  return async (uuid, data, callback) => {
    dispatch({
      type: "set_form_submit",
      payload: true,
    });
    try {
      const response = await api.patch("/posts/" + uuid, data);
      callback(response);
      dispatch({
        type: "update_post",
        payload: response.data.data,
      });
    } catch (error) { }
    dispatch({
      type: "set_form_submit",
      payload: false,
    });
  };
};

const updateComment = (dispatch) => {
  return async (post_id, comment_uuid, data) => {
    dispatch({
      type: "set_form_submit",
      payload: true,
    });
    try {
      const response = await api.patch("/comments/" + comment_uuid, data);
      dispatch({
        type: "update_comment",
        payload: {
          post_id: response.data.data.post_id,
          comment_uuid: response.data.data.uuid,
        },
      });
    } catch (error) { }
    dispatch({
      type: "set_form_submit",
      payload: false,
    });
  };
};

const savePostImage = (dispatch) => {
  return async (data) => {
    try {
      const response = await api.post("/attachments", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) { }
  };
};

const deletePost = (dispatch) => {
  return async (id) => {
    try {
      const response = await api.delete("/posts/" + id);
      dispatch({
        type: "delete_post",
        payload: id,
      });
    } catch (error) { }
  };
};

const deleteComment = (dispatch) => {
  return async (post_id, comment_uuid) => {
    try {
      console.log("trying to delete comment: " + comment_uuid);
      const response = await api.delete("/comments/" + comment_uuid);
      dispatch({
        type: "delete_comment",
        payload: { post_id: post_id, comment_uuid: comment_uuid },
      });
    } catch (error) { }
  };
};

const getFriendsCount = (dispatch) => {
  return async () => {
    try {
      const response = await api.get("/get_friends_count");
      dispatch({
        type: "set_friends_count",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const getFriendRequestsCount = (dispatch) => {
  return async () => {
    try {
      const response = await api.get("/get_friend_requests_count");
      dispatch({
        type: "set_friend_requests_count",
        payload: response.data,
      });
    } catch (error) { }
  };
};

const setLoading = (dispatch, state) => {
  dispatch({
    type: "set_loading",
    payload: state,
  });
};

const setHaltRefresh = (dispatch) => {
  return async (state) => {
    dispatch({
      type: "set_halt_refresh",
      payload: state,
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    getPosts,
    getTrendingPosts,
    getNewMembers,
    loadPosts,
    getReactions,
    getReaction,
    toggleReaction,
    getLikes,
    toggleLike,
    getLaugh,
    toggleLaugh,
    getLove,
    toggleLove,
    savePost,
    updatePost,
    getComments,
    savePostImage,
    deletePost,
    setHaltRefresh,
    saveComment,
    updateComment,
    deleteComment,
    resetPosts,
    getFriendsCount,
    getFriendRequestsCount,
  },
  state
);
