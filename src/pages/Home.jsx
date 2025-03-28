import { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import axios from 'axios'
import MovieCard from '../components/MovieCard'



function Home() {
  const [ movies, setMovies ] = useState([])
  const [ movies2024, setMovies2024 ] = useState([])

const date = new Date
let year = date.getFullYear()

useEffect(() => {
  axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=movie&y=${year + 1}&type=movie&page=1`)
  .then((response) => {
    setMovies(response.data.Search)
    
  })
  .catch((err) => {
      console.log(err)
    })
  
}, [])
useEffect(() => {
  axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=movie&y=${year}&type=movie&page=1`)
  .then((response) => {
    setMovies2024(response.data.Search)
    
  })
  .catch((err) => {
      console.log(err)
    })
  
}, [])


  return (
    <>
    <div className="container my-5 " style={{flexDirection: 'column' }}>

   
    
       
    <h1 className="text-center mb-4">ULTIMOS ESTRENOS</h1>  
    {movies && movies.length > 0 ? (
      <div className="container my-5 ">
        
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center"> 
          {movies2024.map((movie) => (
             <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>

    

      </div>
    ) : (
      <p className="text-center">No se encontraron películas.</p>
    )}
    
    <h1 className="text-center mb-4">PROXIMÓS ESTRENOS</h1>  
    
    {movies && movies.length > 0 ? (
      <div className="container my-5 ">

        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center"> 
          {movies.slice(0, 2).map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
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