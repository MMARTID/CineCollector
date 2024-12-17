import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
const headerStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "10px 20px",
    backgroundColor: "#289",
    position: "relative", 
    zIndex: "1000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
  },
  logo: {
    width: "80px", 
    height: "auto", 
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  nav: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    padding: "5px 10px",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
  linkHover: {
    backgroundColor: "#444", // color de fondo al hacer hover
  }
};

function Header() {
  return (
    <div style={headerStyles.container}>
      <Link to='/'> 
      <img src={logo} alt="logo" style={headerStyles.logo} />
      </Link>
      <h1 style={headerStyles.title}>Cine Collector</h1>
      <div style={headerStyles.nav}>
        <Link to="/searchMovies" style={headerStyles.link} onMouseOver={(e) => e.target.style.backgroundColor = "#444"} onMouseOut={(e) => e.target.style.backgroundColor = ""}>
          Find
        </Link>
        <Link to="/myMovies" style={headerStyles.link} onMouseOver={(e) => e.target.style.backgroundColor = "#444"} onMouseOut={(e) => e.target.style.backgroundColor = ""}>
          Guardadas
        </Link>
      </div>
    </div>
  );
}

export default Header;
