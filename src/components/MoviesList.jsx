import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

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
    axios.get(`http://www.omdbapi.com/?apikey=57a961e0&s=${inputValue}&page=1`)
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


  const pageStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", 
    backgroundColor: "#F8F8F8" 
    
  }

  console.log(movies);
  return (
    <>
        <input
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Buscar película..."
          style={{ padding: "8px", width: "300px", margin: "20px 0" }}
        />
        <div style={pageStyles}>
        {/* loading */}
        {loading && <p>Cargando...</p>}

        {/*  error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && movies.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}>
              
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "center",
                }}>

                <img
                  src={
                    movie.Poster 
                      ? movie.Poster
                      : "https://via.placeholder.com/200"
                  }
                  alt={movie.Title}
                  style={{ width: "200px", height: "auto" }}
                />
                <div style={{width: '180px'}}>
                  <h3>{movie.Title}</h3>
                </div>
                
                <p>{movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`}>Ver detalles</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MoviesList;
