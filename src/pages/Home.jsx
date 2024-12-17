import { useEffect } from 'react'
import MoviesList from '../components/MoviesList'
import axios from 'axios'
function Home() {

useEffect(() => {
  axios.get('http://www.omdbapi.com/?apikey=57a961e0&s=movie&type=movie&y=2023&page=1')
  .then((response) => {
    console.log(response.data)
  })
  .catch((err) => {
      console.log(err)
    })
}, [])

  return (
  <>
   <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Home</h1>

  </>
       
  )
}
export default Home