import logo from "../assets/logo.webp";

const headerStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "10px 20px", 
    backgroundColor: "#289", 
    borderRadius: "8px", 
    position: "fixed", 
    top: "0", 
    left: "0",
    right: "0",
    zIndex: "1000", 
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
};

function Header() {
  return (
    <div style={headerStyles.container}>
      <img src={logo} alt="logo" style={headerStyles.logo} />
      <h1 style={headerStyles.title}>Cine Collector</h1>
    </div>
  );
}

export default Header;
