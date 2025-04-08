// src/pages/Marketplace.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { 
  FiFilter, FiHeart, FiShoppingCart, FiSearch, 
  FiChevronDown, FiStar, FiTruck, FiCreditCard 
} from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Marketplace = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    { id: 1, name: 'Handwoven Kente Cloth', price: 249.99, category: 'textiles', rating: 4.8, image: 'https://images.squarespace-cdn.com/content/v1/5fb54df0f2b5d20cf1f5ba59/1637269710802-DI2098XC17K53RNUAATC/CEK24.1+Kente+Kingdom.jpg' },
    { id: 2, name: 'Beaded Tribal Necklace', price: 189.99, category: 'jewelry', rating: 4.9, image: 'https://i.pinimg.com/736x/56/d1/1d/56d11d5df4cbe032458dde9b5bbf976d.jpg' },
    { id: 1, name: 'Handwoven Kente Cloth', price: 249.99, category: 'textiles', rating: 4.8, image: 'https://images.squarespace-cdn.com/content/v1/5fb54df0f2b5d20cf1f5ba59/1637269710802-DI2098XC17K53RNUAATC/CEK24.1+Kente+Kingdom.jpg' },
    { id: 2, name: 'Beaded Tribal Necklace', price: 189.99, category: 'jewelry', rating: 4.9, image: 'https://i.pinimg.com/736x/56/d1/1d/56d11d5df4cbe032458dde9b5bbf976d.jpg' },
    // Add more products...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50/20">
      {/* Filters Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-4">
            <FiFilter className="text-emerald-600" />
            <select 
              className="bg-white border border-slate-200 rounded-xl px-4 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="textiles">Textiles</option>
              <option value="jewelry">Jewelry</option>
            </select>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search cultural artifacts..."
                className="w-full pl-12 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-emerald-500 hover:text-white">
                  <FiHeart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <FiStar />
                  <span className="text-slate-600">{product.rating}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-bold">${product.price}</span>
                  <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
                    <FiShoppingCart /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;