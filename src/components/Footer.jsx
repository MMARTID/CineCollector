const footerStyles = {
    container: {
      display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "#fff",
    borderTop: "1px solid #444",
    marginTop: "auto", // Empuja el footer al final
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
    },
    text: {
      color: "#fff", 
      fontSize: "1rem",
      textAlign: "center",
      fontWeight: "normal"
    },
  }
  
  function Footer() {
    return (
      <div style={footerStyles.container}>
        <p style={footerStyles.text}>© 2024 Cine Collector. Todos los derechos reservados.</p>
      </div>
    )
  }
  
  export default Footer