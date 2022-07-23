import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const createData = async (endpoint, body) => {
  const { data } = await axios.post((baseURL) + endpoint, body);
  console.log(data);
  return data;
};

export default createData;
