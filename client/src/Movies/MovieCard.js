import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  const history = useHistory()

  return (
    <div className="movie-card" >
      <h2 onClick={() => history.push(`/movies/${id}`)}>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <div>
        <Link to={`/update-movie/${id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default MovieCard;
