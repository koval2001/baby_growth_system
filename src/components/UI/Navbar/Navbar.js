import { Link } from 'react-router-dom';
import Links from '../Links';

const Navbar = () => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to="/" className="brand-logo">Baby Growth</Link>
      <Links />
    </div>
  </nav>
);

export default Navbar;
