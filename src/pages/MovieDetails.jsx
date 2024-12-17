import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`http://www.omdbapi.com/?apikey=57a961e0&i=${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => {
        setError("Hubo un error al obtener los detalles de la película.");
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img 
        src={movie.Poster} 
        alt={movie.Title} 
        style={{ width: "300px", height: "auto" }} 
      />
      <h2>{movie.Title} ({movie.Year})</h2>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  );
}

export default MovieDetail;