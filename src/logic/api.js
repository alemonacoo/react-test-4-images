import axios from "axios";

const searchImages = async (query) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
      },
      params: {
        query: query,
      },
    });
    return response.data.results;
  } catch (e) {
    return e;
  }
};

export default searchImages;
