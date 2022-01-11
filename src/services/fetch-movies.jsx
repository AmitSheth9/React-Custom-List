import request from "superagent";

const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apikey}&language=en-US&page=1`

const movieURL = `http://api.themoviedb.org/3/movie/634649?api_key=5787ecc0ae092dc17128bfee5aebeb24`

export async function getPopularMovies() {
    const response = await request
    .get(popularURL);
    return response;
}

export async function getByID(id) {
    const response = await request
    .get(`http://api.themoviedb.org/3/movie/${id}?api_key=5787ecc0ae092dc17128bfee5aebeb24`);
    return response;
}