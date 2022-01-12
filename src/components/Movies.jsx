import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Movies.css';

export default function Movies({movies}) {
    return (
        <div>
            <div className={styles.movies} >
            {movies.map((movie) => {
                return (
                <div key={movie.id} className={styles.container}>
                <Link to={`/movies/${movie.id}`}>  
                    <p className={styles.title}>{movie.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/> 
                </Link>
                </div>
                )
            })}
            </div> 
        </div>
    )
}
