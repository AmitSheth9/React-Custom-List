import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getByID } from '../services/fetch-movies';
import Detail from '../components/Detail';
import { useHistory } from 'react-router-dom';

export default function MovieDetail() {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const onMount = async () => {
            setLoading(true)
            const response = await getByID(id);
            console.log(response.body);
            setMovie(response.body);
            setLoading(false);
        }
        
    onMount()}, [])
    return (
        <div>
            <div>
                <button onClick={() => (history.replace('/'))}>Back</button>
            </div>

            {!loading ? <div><Detail movie={movie}/></div> : <div>Loading</div>}

            
        </div>
    )
}
