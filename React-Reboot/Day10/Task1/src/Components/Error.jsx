import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/comments"
        className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition"
      >
        Go Home
      </Link>
    </div>
  );
}
