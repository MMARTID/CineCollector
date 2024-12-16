import { useEffect, useState } from "react";
import axios from "axios";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event) => {
    event.preventDefault()
    setInputValue(event.target.value);
  }
  
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=57a961e0&t=${inputValue}`)
      .then((response) => {
        console.log(response);
        setMovies(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [inputValue]);


console.log(movies)
  return (
    <><div> <input onChange={handleInputChange} value={inputValue}></input></div>
        <div> <img src={movies.Poster} alt="" />
       <h1> {movies.Title} </h1>  </div>
     
    </>
  );
}

export default MoviesList;