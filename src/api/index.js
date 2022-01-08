import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const editPost = (post) => axios.patch(`${url}/${post._id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
