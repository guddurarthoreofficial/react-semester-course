import React from 'react'
import './Movie.css'

function Movie({ url, Title, imdbID, Poster }) {
    return (
        <div className="movie-card">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={Poster} alt={Title} className="movie-poster" />
                <div className="movie-info">
                    <h3>{Title}</h3>
                    <p>IMDB ID: {imdbID}</p>
                </div>
            </a>
        </div>
    )
}

export default Movie