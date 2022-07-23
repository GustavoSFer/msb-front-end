import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const createData = async (endpoint, body) => {
  const { data } = await axios.post((baseURL) + endpoint, body);
  return data;
};

const ipClient = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    return console.error(error);
  }
};

export {
  createData,
  ipClient,
};
