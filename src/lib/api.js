import axios from 'axios';

// 영화 목록 요청
// sort: String (title, year, rating, peers, seeds, download_count, like_count, date_added)
// limit: Integer between 1 - 50 (inclusive)
export function getMovieList(param) {
  return axios.get(`https://yts.lt/api/v2/list_movies.json?${param}`);
}
// export function getMovieList(sort, limit) {
//   return axios.get(`https://yts.lt/api/v2/list_movies.json?sort=${sort}&limit=${limit}`)
// }
