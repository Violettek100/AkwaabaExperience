import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Updated navigation items with proper paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Discover Ghana', path: '/travel/discover-ghana' },
    { name: 'Travel Guides', path: '/travel/guides' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Booking', path: '/booking' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with proper root link */}
          <Link to="/" className="flex items-center gap-2">
      <img 
        src="/assets/logo.png"  // ✅ Add logo to header
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        alt="Akwaaba Experience Logo"
        className="h-12 w-auto"
      />
    </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="text-slate-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-emerald-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium ml-4 hover:shadow-lg transition-shadow"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with proper transitions */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-slate-700 hover:text-emerald-600 transition-colors p-3 rounded-lg hover:bg-slate-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="bg-gradient-to-r from-emerald-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium mt-4 hover:shadow-lg transition-shadow">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;