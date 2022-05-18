const API_KEY = "130897c80384cc4c549e4ec94bbc0780";
// const baseUrl = 'https://api.themoviedb.org/3';

const requests ={
    trendingMovies:`/trending/all/week?api_key=${API_KEY}`,
    netflixOrginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated:`/movie/top_rated?api_key=${API_KEY}`,
    actionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,

}

export default requests;