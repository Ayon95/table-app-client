import { Link } from 'react-router-dom';
import { useUser } from '../contexts/authContext';
import LogoutButton from '../features/authentication/LogoutButton';

function Navbar() {
  const { user } = useUser();
  return (
    <header className="flex-between">
      <Link to="/">Table App</Link>
      <nav>
        {user ? (
          <div className="flex-between">
            <div className="user-info">
              <p>{user.email}</p>
              <p>{user.userType}</p>
            </div>
            <LogoutButton />
          </div>
        ) : (
          <Link className="btn btn--link" to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
