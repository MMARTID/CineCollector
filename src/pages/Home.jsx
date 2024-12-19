import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Home() {
  const [ movies, setMovies ] = useState([])


useEffect(() => {
  axios.get('https://www.omdbapi.com/?apikey=57a961e0&s=movie&type=movie&page=1')
  .then((response) => {
    setMovies(response.data.Search)
    
  })
  .catch((err) => {
      console.log(err)
    })
}, [])
console.log(movies)

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column' }}>

   
    <h1 className="text-center mb-4">Más recientes</h1>  
    
    {movies && movies.length > 0 ? (
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"> 
          {movies.map((eachMovie) => (
            <div key={eachMovie.imdbID} className="col">
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