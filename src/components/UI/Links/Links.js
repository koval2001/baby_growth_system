import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Links = ({ isSigned }) => (
  <ul className="right">
    {isSigned ? (
      <>
        <li>
          <NavLink to="/create">Add measures</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink ligten-1">
            NN
          </NavLink>
        </li>
      </>
    ) : (
      <>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      </>
    )}
  </ul>
);

Links.propTypes = {
  isSigned: PropTypes.bool,
};

Links.defaultProps = {
  isSigned: true,
};

export default Links;
