import React from 'react'

export default function Detail({movie}) {
    return (
        <div>
            <p>{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <p>{movie.overview}</p>
            <p>Budget: {movie.budget}</p>
            <p></p>
        </div>
    )
}
