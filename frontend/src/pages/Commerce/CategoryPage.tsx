// src/pages/Commerce/CategoryPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarsArrowUpIcon, FilmIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const CategoryPage = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('popularity');

  const products: Product[] = [
    // Sample products array
    {
      id: 1,
      name: 'Handwoven Kente Cloth',
      price: 249.99,
      image: '/products/kente.jpg',
      rating: 4.8,
      category: 'Textiles'
    },
    {
      id: 2,
      name: 'Ashanti Golden Stool Replica',
      price: 189.99,
      image: '/products/stool.jpg',
      rating: 4.9,
      category: 'Art'
    }
    // Add more products...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Traditional Crafts</h1>
          <p className="text-slate-600">Showing {products.length} items</p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xl h-fit">
            <div className="flex items-center gap-2 mb-6">
              <FilmIcon className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-semibold">Filters</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-emerald-500"
                />
                <div className="flex justify-between text-sm text-slate-600 mt-2">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Customer Rating</h3>
                {[4, 3, 2, 1].map((rating) => (
                  <label 
                    key={rating} 
                    className="flex items-center gap-2 mb-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(rating)}
                      className="accent-emerald-500"
                    />
                    <div className="flex items-center">
                      {[...Array(rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                      ))}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sorting Header */}
            <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent focus:outline-none"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
              <span className="text-slate-600">{products.length} results</span>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className="relative h-60">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full text-sm">
                      <StarIcon className="w-4 h-4 text-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-emerald-600">
                        ${product.price}
                      </p>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-emerald-100 rounded-lg hover:bg-emerald-200"
                      >
                        <ShoppingBagIcon className="w-6 h-6 text-emerald-600" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg ${
                    page === 1 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;