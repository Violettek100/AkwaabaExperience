import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaHeart, FaSearch, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../../components/Layout/Header"; // ✅ Fixed Import Path

interface TravelGuide {
  id: number;
  title: string;
  region: string;
  price: number;
  image: string;
  rating: number;
  duration: string;
}

const TravelGuideStore = () => {
  const [cart, setCart] = useState<TravelGuide[]>([]);
  const [showCart, setShowCart] = useState(false);

  const travelGuides: TravelGuide[] = [
    {
      id: 1,
      title: "Golden Cultural Expedition",
      region: "Ashanti Kingdom",
      price: 299,
      image: "/images/guides/ashanti-premium.jpg",
      rating: 4.9,
      duration: "7 Days",
    },
    {
      id: 2,
      title: "Coastal Heritage Journey",
      region: "Cape Coast & Elmina",
      price: 399,
      image: "/images/guides/coastal-premium.jpg",
      rating: 4.8,
      duration: "5 Days",
    }
  ];

  const addToCart = (guide: TravelGuide) => {
    setCart([...cart, guide]);
  };

  // 📌 Set Page Title Dynamically
  useEffect(() => {
    document.title = "Explore Premium Ghana Travel Guides";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 font-sans">
      {/* ✅ Include Header */}
      <Header />

      {/* Page Title - Animated Effect */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mt-24 mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Explore Premium Ghana Travel Guides
        </h1>
        <p className="text-slate-300 text-lg mt-2">
          Discover, explore, and immerse yourself in Ghana’s rich heritage.
        </p>
      </motion.div>

      {/* Main Content */}
      <main className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelGuides.map((guide) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-all"
            >
              {/* Image Container */}
              <div className="relative h-80">
                <img 
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-sm font-medium flex items-center gap-1">
                    <FaStar className="text-sm" /> {guide.rating}
                  </span>
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
                    {guide.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-100 mb-1">
                      {guide.title}
                    </h2>
                    <p className="text-slate-400 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-emerald-400" />
                      {guide.region}
                    </p>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-rose-400 transition-colors">
                    <FaHeart className="text-xl" />
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-400">
                    ${guide.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(guide)}
                    className="bg-emerald-400 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-300 transition-colors"
                  >
                    Add to Journey
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-800 shadow-2xl z-50 border-l border-slate-700"
          >
            {/* Cart Sidebar Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">Your Cart</h2>
              {cart.length === 0 ? (
                <p className="text-slate-400 mt-4">Your cart is empty.</p>
              ) : (
                <div className="mt-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-slate-700 p-4 rounded-lg mb-3">
                      <div>
                        <h3 className="text-white">{item.title}</h3>
                        <p className="text-slate-400">${item.price}</p>
                      </div>
                      <button
                        className="text-rose-400 hover:text-rose-500"
                        onClick={() => setCart(cart.filter((g) => g.id !== item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={() => setShowCart(false)}
                className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-400 transition-colors"
              >
                Close Cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelGuideStore;
