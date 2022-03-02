import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navMenu">
        <Link to='/' className="links">Home</Link>
        <Link to='/products' className="links">Produtos</Link>
    </nav>
  );
};

export default Navbar;
