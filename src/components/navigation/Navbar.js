import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        ToDo <span className="logo">App</span>
      </h1>
      <div className="links">
        <Link to="/start"> UI</Link>
        <Link to="/signup"> Start "To Do"</Link>
        <Link to="/login"> Continue work with "To Do"</Link>
        <Link to="/feauters"> Feauters</Link>
        <Link to="/creators"> Creators</Link>
      </div>
    </nav>
  );
};

export default Navbar;
