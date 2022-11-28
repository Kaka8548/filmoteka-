import axios from 'axios';

const fetchData = async (queryType, params) => {
  switch (queryType) {
    case 'TRENDING':
      const trendingLink = 'https://api.themoviedb.org/3/trending/movie/week';
      try {
        const data = await axios.get(trendingLink, {
          params: { api_key: 'a8c13239d5351cd341496e4bdbeed27b', ...params },
        });
        console.log('TRENDING');
        return data;
      } catch (error) {
        console.error(error.message);
      }
      break;

    case 'SEARCH_FILMS':
      const searchLink = 'https://api.themoviedb.org/3/trending/movie/week';
      try {
        const data = await axios.get(searchLink, {
          params: { api_key: 'a8c13239d5351cd341496e4bdbeed27b', ...params },
        });
        console.log('SEARCH_FILMS');
        return data;
      } catch (error) {
        console.error(error.message);
      }
      break;

    default:
      console.error('Such query type does not exist');
  }
};
export default fetchData;

const data = fetchData('SEARCH_FILMS');
console.log(data);
