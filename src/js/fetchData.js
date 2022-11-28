import axios from 'axios';

const fetchData = async (queryType, params) => {
  switch
  link = 'https://api.themoviedb.org/3/trending/movie/week';
  try {
    const data = await axios.get(link, {
      params: { api_key: 'a8c13239d5351cd341496e4bdbeed27b', ...params },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
export default fetchData;

fetchData();
