import request from "superagent";

const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apikey}&language=en-US&page=1`



export async function getPopularMovies() {
    const response = await request
    .get(popularURL);
    return response;
}

export async function getByID(id) {
    const response = await request
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apikey}`);
    return response;
}