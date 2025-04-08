import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
}

export const ProductCard = ({ id, name, price, image, rating }: ProductCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden group"
  >
    <div className="relative h-64">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
        <StarIcon className="w-4 h-4 text-amber-400" />
        <span className="text-sm font-medium">{rating}</span>
      </div>
    </div>
    
    <div className="p-4">
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{name}</h3>
      <p className="text-xl font-bold text-emerald-600">${price}</p>
    </div>
  </motion.div>
);