import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const {id} = useParams();
    
    const [movie, setMovie] = useState({});
    const apiKey = '870967436c1517d581daf3b245495790'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => res.json())
        .then((data) => setMovie(data));
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt=""/>
            </div>
            <div className="col-md-6">
                <h1>{movie.title}</h1>
                <h3>Release Date: {movie.release_date}</h3>
                <h4>Popularity: {movie.popularity}</h4>
                <h5>{movie.overview}</h5>
                <h6>Budget: ${movie.budget}</h6>
            </div>
            </div>
        </div>
    );
};

export default MovieDetails;