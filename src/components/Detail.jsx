import React from 'react'
import { move } from 'superagent'

export default function Detail({movie}) {
    return (
        <div>
            <p>{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Budget: {movie.budget}</p>
            <p>Revenue: {movie.revenue}</p>
            <p>Release date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Status: {movie.status}</p>
            <p>Tagline: {movie.tagline}</p>
        </div>
    )
}
