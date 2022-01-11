
import React from 'react'
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/fetch-movies';
import Movies from '../components/Movies';

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const onMount = async () => {
        const res = await getPopularMovies();
        console.log('res', res);
        const movieList = res.body.results;
        console.log('movielist', movieList);
       setMovies(movieList);
        console.log(movies)
        setLoading(false);
       }
        
    onMount()
}, [])
    return (
        <>
            {loading ? <div>Loading</div> : <div><Movies movies={movies}/></div>}
       
       </>
    )
}