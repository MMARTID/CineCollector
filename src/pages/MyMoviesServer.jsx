import { useEffect, useState } from "react"
import axios from "axios"

function MyMoviesServer() {
    const [db, setDb] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5005/db')
        .then((response) => {
            setDb(response.data.movies)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    console.log(db)


    const handleDelete = {
    
    }
    const styles = {
        page: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#F8F8F8",
          padding: "20px",
          fontFamily: "'Arial', sans-serif",
        },
        card: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          backgroundColor: "#FFF",
          margin: "10px 0",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        },
        image: {
          width: "80px",
          height: "120px",
          borderRadius: "4px",
          objectFit: "cover",
          marginRight: "15px",
        },
        title: {
          flex: "1",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#333",
        },
        button: {
          backgroundColor: "#FF4C4C",
          color: "#FFF",
          border: "none",
          borderRadius: "4px",
          padding: "8px 12px",
          cursor: "pointer",
          fontSize: "1rem",
          transition: "background-color 0.3s ease",
        },
        buttonHover: {
          backgroundColor: "#E63946",
        },
      }
    return(
        <div style={styles.page}>
        {db.map((eachMovie) => (
          <div key={eachMovie.id} style={styles.card}>
            <img
              src={eachMovie.Poster}
              alt={eachMovie.Title}
              style={styles.image}
            />
            <p style={styles.title}>{eachMovie.Title}</p>
            <button
              onClick
              style={styles.button}
            >
              Borrar
            </button>
          </div>
        ))}
      </div>
      

    )
}
export default MyMoviesServer