import { Link } from "react-router-dom";
import { logo } from "../assets";
function Navbar() {
  return (
    <div className="w-full py-5 fixed">
      <nav className="max-w-7xl mx-auto px-8 navbar navbar-dark bg-dark flex flex-row items-center justify-between">
        <Link to="">
          <img
            src={logo}
            className="w-[55px] h-[55px] object-contain rounded-full"
            alt="Logo"
          />
        </Link>
        <ul className="flex flex-row nav-links">
          <Link to="">
            <li>Home</li>
          </Link>
          <Link to="">
            <li>About Us</li>
          </Link>
          <Link to="/properties">
            <li>Properties</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="">
            <li>Contact Us</li>
          </Link>
        </ul>
        <button className="btn btn-primary">Discover</button>
      </nav>
    </div>
  );
}
export default Navbar;
