import React from 'react'
import { Link } from 'react-router-dom'

export default function Movies({movies}) {
    return (
        <div>
            <ul>
            {movies.map((movie) => {
                return <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>  
                    <p>{movie.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/> 
                </Link>
                </li>
            })}

            </ul> 
        </div>
    )
}
