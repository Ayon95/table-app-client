import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="min-height-screen center">
      <div className="text-center">
        <h1>404 Error</h1>
        <p className="mb-2">The page you are looking for could not be found</p>
        <Link to="/" className="btn btn--link">
          Go To Home Page
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
