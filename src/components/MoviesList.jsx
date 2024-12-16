import { useEffect, useState } from "react";
import axios from "axios";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (event) => {
    event.preventDefault()
    setInputValue(event.target.value);
  }
  
  useEffect(() => {
    
    setLoading(true)
    setError(null)
    axios
      .get(`http://www.omdbapi.com/?apikey=57a961e0&t=${inputValue}`)
      .then((response) => {
        console.log(response)
        setMovies(response.data)
      })
      .catch((error) => {
        setError("Hubo un error al obtener los datos.")
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [inputValue]);


console.log(movies)
  return (
    <><div> 
      
      <input
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Buscar película..."
        style={{ padding: "8px", width: "300px", margin: "20px 0" }}
      />

      {/* Indicador de carga */}
      {loading && <p>Cargando...</p>}

      {/* Mensaje de error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar la información de la película */}
      {movies && !loading && !error && (
        <div>
          <img
            src={movies.Poster}
            alt={movies.Title}
            style={{ width: "200px", height: "auto" }}
          />
          <h1>{movies.Title}</h1>
          <p> {movies.Released}</p>
          <p>{movies.Genre}</p>
          <p> {movies.Plot}</p>
        </div>
      )}
    </div>
     
    </>
  );
}

export default MoviesList;