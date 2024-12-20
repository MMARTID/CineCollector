import { useEffect, useState } from "react"
import axios from "axios"

function MyMoviesServer() {
    const [db, setDb] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/db`)
        .then((response) => {
            setDb(response.data.movies)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    const handleDelete = (id) => {
      axios
        .delete(`${import.meta.env.VITE_SERVER_URL}/movies/${id}`)
        .then((response) => {
          console.log(response)
        });
    };
    const handleFavorite = (id, isFavorite) => {
      axios
        .patch(`${import.meta.env.VITE_SERVER_URL}/movies/${id}`, {
          Favorite: !isFavorite, // Cambiar el estado de 'Favorite'
        })
        .then((response) => {
          // Actualizar la lista de películas después de cambiar el estado de 'Favorite'
          setDb((prevDb) =>
            prevDb.map((movie) =>
              movie.id === id ? { ...movie, Favorite: !isFavorite } : movie
            )
          );
          console.log("Película marcada como favorita:", response.data);
        })
        .catch((err) => {
          console.log("Error al marcar como favorita:", err);
        });
    };

    return(
        <div className="container my-5">
      <h1 className="text-center mb-4">Mis Películas</h1>
      {db.map((eachMovie) => (
        <div
          key={eachMovie.id}
          className="card mb-3 shadow-sm d-flex flex-row align-items-center p-3"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <button
            className="btn btn-danger mx-3"
            onClick={() => handleDelete(eachMovie.id)}
          >
            Borrar
          </button>
          <img
            src={eachMovie.Poster}
            alt={eachMovie.Title}
            className="img-thumbnail me-3"
            style={{ width: "80px", height: "120px", objectFit: "cover" }}
          />
          <div className="flex-grow-1">
            <h5 className="mb-0">{eachMovie.Title}</h5>
          </div>
          <button
            className="btn"
            onClick={() => handleFavorite(eachMovie.id, eachMovie.Favorite)}
          >
            {eachMovie.Favorite ? "❤️" : "🤍"}
          </button>
          
        </div>
      ))}
    </div>
      

    )
}
export default MyMoviesServer