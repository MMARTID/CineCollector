import logo from "../assets/logo.webp";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <img src={logo} alt="logo" width={"10%"} />
      <h1>Cine Collector</h1>
    </div>
  );
}

export default Header;
