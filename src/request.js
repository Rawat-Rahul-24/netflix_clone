const APIKEY = "5425ab36e3146eaa84a8614b1d836822";

const requests = {
  fetchtrendingWeekly: `/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchnetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${APIKEY}&with_genre=28`,
  fetchComedyMovies: `/discover/tv?api_key=${APIKEY}&with_genre=35`,
  fetchRomanceMovies: `/discover/tv?api_key=${APIKEY}&with_genre=10749`,
  fetchHorrorMovies: `/discover/tv?api_key=${APIKEY}&with_genre=27`,
  fetchDocumentaries: `/discover/tv?api_key=${APIKEY}&with_genre=99`,
};

export default requests;
