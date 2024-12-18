import { useEffect, useState } from "react"
import axios from "axios"
import { meta } from "@eslint/js"

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
    console.log(db)


    const handleDelete = {
    //! logica para alñimina!
    }
    return(
        <div className="container my-5">
      <h1 className="text-center mb-4">Mis Películas</h1>
      {db.map((eachMovie) => (
        <div
          key={eachMovie.id}
          className="card mb-3 shadow-sm d-flex flex-row align-items-center p-3"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
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
            className="btn btn-danger"
            onClick={() => handleDelete(eachMovie.id)}
          >
            Borrar
          </button>
        </div>
      ))}
    </div>
      

    )
}
export default MyMoviesServer