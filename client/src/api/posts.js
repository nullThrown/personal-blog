import axios from '../config/axios';

// GET all posts
export const fetchPosts = async () => {
  try {
    const res = await axios.get('/post/all');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// GET single post
export const fetchSinglePost = async id => {
  try {
    const res = await axios.get(`/post/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
// POST create new post
export const createPost = async post => {
  try {
    const res = await axios.post('/post/create', post);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
// PUT edit single post
export const editPost = async post => {
  try {
    const res = await axios.put('/post/edit', post);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// PUT edit single post
export const deletePost = async id => {
  try {
    const res = await axios.delete(`/post/delete/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
