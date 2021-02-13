const API_KEY = "4e2c21912c8fe072b41307bb095128be";

const requests = {
fetchTrending: `/trending/allyweek?api_key=${API_KEY}&language=en-US`,
fetchNetflixoriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`, fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with genres-10749`,
fetchDocumentaries: `/discover/movie?api_key%-${API_KEY}&with_genres-99`,
}

export default requests;
