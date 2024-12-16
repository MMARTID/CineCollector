const footerStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#222", 
      position: "fixed", 
      bottom: "0", 
      left: "0",
      right: "0",
      zIndex: "1000", 
      borderTop: "1px solid #444"
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