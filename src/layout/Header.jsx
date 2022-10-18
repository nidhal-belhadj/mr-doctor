import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logo = { padding: "20px", backgroundColor: "#33c3df", color: "white" };
  const linkContainerStyle = { display: "flex", listStyleType: "none" };
  const linkStyle = { margin: "0 20px" };
  const logoName = { padding: "0" };
  const logoFct = { margin: "0" };

  return (
    <header style={headerStyle}>
      <Link to="/">
        <div style={logo}>
          <h2 style={logoName}>DR. Olivier AMI</h2>
          <h4 style={logoFct}>gynécologue obstéricien</h4>
        </div>
      </Link>

      <div style={linkContainerStyle}>
        <li style={linkStyle} className={"link"}>
          <NavLink to="chirurgie">Chirurgie</NavLink>
        </li>
        <li style={linkStyle} className={"link"}>
          <NavLink to="echographie">Echographie</NavLink>
        </li>
        <li style={linkStyle} className={"link"}>
          <NavLink to="fertilité">Fertilité</NavLink>
        </li>
        <li style={linkStyle} className={"link"}>
          <NavLink to="grossesse">Grossesse</NavLink>
        </li>
        <li style={linkStyle} className={"link"}>
          <NavLink to="rdv">RDV en ligne</NavLink>
        </li>
      </div>
    </header>
  );
};

export default Header;
