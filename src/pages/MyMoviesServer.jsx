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

    const pageStyles = {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
        backgroundColor: "#F8F8F8" 
    }
    return(
        <div style={pageStyles}>
            {db.map((eachMovie) => (
                <div key={eachMovie.imbdID}>
                     <p>{eachMovie.Title}</p>
                </div> 
               
            ))}
  
        </div>
      

    )
}
export default MyMoviesServer