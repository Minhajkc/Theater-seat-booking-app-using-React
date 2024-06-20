import axios from 'axios';

const API_URL = 'https://myserver-l91unoqi6-minhajs-projects-cc01af4f.vercel.app/'; // Node.js server URL

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
