import MoviesList from '../components/MoviesList'
function Home() {

  const pageStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", 
    backgroundColor: "#F8F8F8" 
    
  }

  const contentStyles = {
    flex: "1",
    padding: "20px",
    width: '100%'
  }

  return (
    <div style={pageStyles}>
      <main style={contentStyles}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Home</h1>
          
      </main>
      
    </div>
  )
}
export default Home