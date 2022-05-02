import React from "react";
import PropTypes from "prop-types";

function Movie({id ,year ,title,summary,poster,genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <h4 className="movie__genres">{genres}</h4>
                
                {/* {genres.map((genre,index) => (
                    <li key={index} className="genres_genre">{genres}</li>
                ))} */}
            
            <p className="movie__summary">{summary ? summary.slice(0, 140) : <h3>No Summary</h3>}</p>
            {summary ? <span>...</span> : null}
            
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;