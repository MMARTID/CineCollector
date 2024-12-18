import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function ReviewList ( ) {

    const [singleReview, setSingleReview] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=57a961e0&i=${id}`)
        .then((response) => {
            console.log( 'VALORACION/ES OFICIALES:', response.data.Ratings)
            setSingleReview(response.data.Ratings)
        })
    },[])

    return(
        <>
        <h1 className="text-center my-4">Reseñas de la API</h1>
        <div>
          {singleReview.map((eachReview) => (
            <div key={id + eachReview.Source} className="col-12 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex justify-content-between align-items-center">              
                  <h5 className="card-title mb-0">{eachReview.Source}</h5>
                  <p className="card-text mb-0 text-end">{eachReview.Value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
}
export default ReviewList