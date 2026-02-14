import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Text Only */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-orange-500">videobelajar</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-orange-500 transition-colors">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;