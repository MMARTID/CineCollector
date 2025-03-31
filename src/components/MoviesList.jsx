import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import MovieCard from './MovieCard'

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${inputValue}&page=1`)
      .then((response) => {
        console.log(response.data);
        if (response.data.Response === "True") {
          setMovies(response.data.Search); 
        }
      })
      .catch((error) => {
        setError("Hubo un error al obtener los datos.");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [inputValue]);
  

  console.log(movies);
  return (
    <>
    <div className="fixed-top bg-white shadow py-3" style={{ marginTop: "66px" }}>
      <div className="container">
        <input
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Buscar por titulo..."
          className="form-control mx-auto"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>

    {/* contenedor principal */}
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "166px" }}>
      {loading && <p className="text-center">Cargando...</p>}

      {/* contenido vacío inicial */}
      {!loading && movies.length === 0 && (
        <div className="text-center text-muted mt-5">
          <h3>Busca tus películas favoritas</h3>
          <p>Escribe en el campo de búsqueda para comenzar.</p>
        </div>
      )}

      {/* lista de películas */}
      {!loading && !error && movies.length > 0 && (
        <div className="row justify-content-center">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />  
        ))}
      </div>
      )}
    </div>
  </>
  );
}

export default MoviesList;
