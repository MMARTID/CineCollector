import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";



function Header() {
  return (
    <header className="bg-primary text-white shadow-sm fixed-top ">
      <div className="container d-flex align-items-center justify-content-between py-2">

        {/* assets */}
        <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
          <img src={logo} alt="logo" className="me-2" style={{ width: "50px", height: "auto" }} />
          <h1 className="m-0 fs-4 fw-bold text-uppercase">Cine Collector</h1>
        </Link>

        {/* links navbar */}
        <nav>
          <ul className="list-unstyled d-flex gap-3 m-0">
            <li>
              <Link
                to="/searchMovies"
                className="text-white text-decoration-none px-3 py-2 rounded"
              >
                Buscar
              </Link>
            </li>
            <li>
              <Link
                to="/myMovies"
                className="text-white text-decoration-none px-3 py-2 rounded"
              >
                Guardadas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
