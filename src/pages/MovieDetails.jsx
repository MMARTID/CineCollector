import { useEffect, useState } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import AddMovie from '../components/AddMovie'
import { useParams } from "react-router-dom";
import { MdSave } from "react-icons/md";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false); 
  const {id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`)
      .then((response) => {setMovie(response.data) 
       })
      .catch((error) =>  console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddMovie = () => {
    const newMovie = {
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
      Year: movie.Year,
      ImdbID: movie.imdbID,
      favorite: false
    };

    axios.post(`${import.meta.env.VITE_SERVER_URL}/movies`, newMovie)
      .then(response => {
        console.log("Movie added:", response.data)

        setSaved(true)
      })
      .catch(error => {
        console.error("Error adding movie:", error);
      });
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="container my-5">
      <div className="row align-items-start bg-light shadow rounded p-4">
        {/* IMAGEN */}
        <div className="col-md-4 mb-3">
          <img 
            src={movie.Poster} 
            alt={movie.Title} 
            className="img-fluid rounded shadow" 
          />
          <p>{movie.imdbVotes} people vote this</p>
        </div>
        {/* DESCRIPCION */}
        <div className="col-md-8 text-lg-start">
          <div>
            <h2 className="fw-bold text-primary">
            {movie.Title} <span className="text-secondary"></span>
          </h2>
          
          </div>
          
          <p>{movie.Year} · {movie.Rated} · {movie.Runtime}</p>
          <p>{movie.Genre}</p>
          <p><strong>Sinopsis:</strong> {movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actores:</strong> {movie.Actors}</p>
          <p><strong>Guionistas</strong> {movie.Writer}</p>

          {saved ? (
            <p className="text-success fw-bold">¡Película añadida!</p>
          ) : (
            <button 
              className="btn btn-success mt-3"
              onClick={handleAddMovie}
            >
              guardar <MdSave/>
            </button>
          )}
          
          
        </div>
      </div>
      {/* RESEÑAS */}
      <div className="mt-5"> 
        <AddMovie/>
        <ReviewList />
       
      </div>
    </div>
  );
}

export default MovieDetail;