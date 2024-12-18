import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false); // Estado para saber si la película fue guardada

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`https://www.omdbapi.com/?apikey=57a961e0&i=${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) =>  console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>
  const handleAddMovie = () => {
    const newMovie = {
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
      Year: movie.Year,
      imdbID: movie.imdbID
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
    const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        padding: "30px",
        margin: "20px auto",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "900px",
        gap: "30px",
        fontFamily: "'Arial', sans-serif",
    },
    poster: {
        width: "300px",
        height: "auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
    },
    text: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "8px",
        lineHeight: "1.5",
    },
    button: {
        marginTop: "15px",
        backgroundColor: "#3D8361",
        color: "#FFF",
        border: "none",
        borderRadius: "5px",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s ease",
    },
    savedMessage: {
        color: "#2C6E49",
        marginTop: "10px",
        fontWeight: "bold",
    },
    loading: {
        fontSize: "1.5rem",
        color: "#3D8361",
        textAlign: "center",
        marginTop: "50px",
    },
    };

  return (
    <div style={styles.container}>
      <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
      <div style={styles.details}>
        <h2 style={styles.title}>
          {movie.Title} ({movie.Year})
        </h2>
        <p style={styles.text}>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p style={styles.text}>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p style={styles.text}>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p style={styles.text}>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        {saved ? (
          <p style={styles.savedMessage}>¡Película añadida a la base de datos!</p>
        ) : (
          <button
            style={styles.button}
            onClick={handleAddMovie}
          >
            Añadir a la base de datos
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;