import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link> */}

      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink to="/About">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
