import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getByID } from '../services/fetch-movies';
import Detail from '../components/Detail';

export default function MovieDetail() {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const onMount = async () => {
            const response = await getByID(id);
            console.log(response.body);
            setMovie(response.body);
            setLoading(false);
        }
        
    onMount()}, [])
    return (
        <div>{id}
            {loading ? <div>Loading</div> : <div><Detail movie={movie}/></div>}
        </div>
    )
}
