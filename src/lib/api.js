import axios from 'axios';

// 영화 목록 요청
// sort: String (title, year, rating, peers, seeds, download_count, like_count, date_added)
// limit: Integer between 1 - 50 (inclusive)
// minimum_rating: 	Integer between 0 - 9 (inclusive)
// order_by: String (desc, asc)
// genre: String
export function getMovieList(query) {
  return axios.get(`https://yts.lt/api/v2/list_movies.json?${query}`);
}
// export function getMovieList(sort, limit) {
//   return axios.get(`https://yts.lt/api/v2/list_movies.json?sort=${sort}&limit=${limit}`)
// }
