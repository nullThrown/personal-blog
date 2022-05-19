import axios from '../../config/axios';
// try /catch
const fetchPosts = async () => {
  return await axios.get('/post/all');
};
export default fetchPosts;
