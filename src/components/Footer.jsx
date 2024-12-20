function Footer() {
  return (
    <footer className="bg-dark text-light py-3 border-top mt-auto ">
      <div className="container-fluid text-center">
        <p className="mb-2">© 2024 Cine Collector. Todos los derechos reservados.</p>
        <div>
          <a
            href="https://github.com/MMARTID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/miguel-martin-a9050b158/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;