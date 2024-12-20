
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm text-center">
        <img
          src={movie.Poster ? movie.Poster : "https://via.placeholder.com/200"}
          alt={movie.Title}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;