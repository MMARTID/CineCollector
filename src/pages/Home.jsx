import { useEffect, useState } from 'react'
import MoviesList from '../components/MoviesList'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Home() {
  const [ moviesByYear, setMoviesByYear ] = useState([])

useEffect(() => {
  axios.get('https://www.omdbapi.com/?apikey=57a961e0&s=movie&type=movie&y=2024&page=1')
  .then((response) => {
    console.log(response.data)
    setMoviesByYear(response.data.Search)
  })
  .catch((err) => {
      console.log(err)
    })
}, [])
console.log(moviesByYear)

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column' }}>

   
    <h1 className="text-center mb-4">Más recientes</h1>  
    
    {moviesByYear && moviesByYear.length > 0 ? (
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"> 
          {/* row-cols-1: 1 columna en pantallas pequeñas, row-cols-md-3: 3 columnas en pantallas medianas */}
          {moviesByYear.map((eachMovie) => (
            <div key={eachMovie.imdbID} className="col">
              {/* Tarjeta de Bootstrap para cada película */}
              <div className="card">
                <Link to={`/movie/${eachMovie.imdbID}`}>
                 <img 
                  src={eachMovie.Poster} 
                  className="card-img-top img-fluid" 
                  alt={eachMovie.Title}
                />
                </Link>
               
                <div className="card-body">
                  <h5 className="card-title text-center">{eachMovie.Title}</h5>
                  <p className="card-text text-center">{eachMovie.Year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <p className="text-center">No se encontraron películas.</p>
    )}
     </div>
  </>
       
  )
}
export default Home