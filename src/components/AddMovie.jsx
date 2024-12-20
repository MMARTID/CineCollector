import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function AddMovie() {
 const {id} = useParams()
    //const [submit,setSubmit] = useState(false)
    const [reviewForm, setReviewForm] = useState({
            Reviewer: '',
            Opinion: '',
            Score: '',
            imdbID: id
        })
    

    const handleChange = e => {
        setReviewForm({
            ...reviewForm,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        //setSubmit(true)
         axios.post(`${import.meta.env.VITE_SERVER_URL}/reviews`, reviewForm)
        .then((response) => {
          console.log('hola')
            console.log('review added:',response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    // useEffect(() => {
    // if (submit){
       
    // }
    // },[submit])

    console.log(reviewForm)

    return (
        <div className="container mt-5">
        <h2 className="text-center mb-4">Agregar Reseña</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="Reviewer" className="form-label">
              Nombre del Revisor
            </label>
            <input
              type="text"
              className="form-control"
              id="Reviewer"
              name="Reviewer"
              placeholder="Escribe tu nombre"
              value={reviewForm.Reviewer}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="col-md-6">
            <label htmlFor="Score" className="form-label">
              Puntuación (1-10)
            </label>
            <input
              type="number"
              className="form-control"
              id="Score"
              name="Score"
              min="1"
              max="10"
              placeholder="Puntuación"
              value={reviewForm.Score}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="col-12">
            <label htmlFor="Opinion" className="form-label">
              Opinión
            </label>
            <textarea
              className="form-control"
              id="Opinion"
              name="Opinion"
              rows="3"
              placeholder="Escribe tu opinión sobre la película"
              value={reviewForm.Opinion}
              onChange={handleChange}
              required
            ></textarea>
          </div>
  
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Enviar Reseña
            </button>
          </div>
        </form>
      </div>
    )
    
}
export default AddMovie