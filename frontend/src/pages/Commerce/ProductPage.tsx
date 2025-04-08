// src/pages/ProductPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FiShoppingCart } from 'react-icons/fi';

const ProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Artisan-Crafted Bronze Sculpture',
    price: 599.99,
    description: 'Hand-crafted using ancient lost-wax techniques passed down through generations',
    images: ['https://example.com/sculpture1.jpg', 'https://example.com/sculpture2.jpg'],
    variants: { sizes: ['Small', 'Medium', 'Large'], colors: ['Bronze', 'Brass'] }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <Swiper
              spaceBetween={10}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className="mb-4 rounded-2xl overflow-hidden"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt="" className="w-full aspect-square object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              modules={[Thumbs]}
              className="thumb-gallery"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt="" className="w-full aspect-square object-cover rounded-lg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="text-3xl font-bold text-emerald-600">${product.price}</div>
            <p className="text-slate-600">{product.description}</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Size</h3>
                <div className="flex gap-2">
                  {product.variants.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg ${
                        selectedSize === size 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 hover:text-emerald-500"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 hover:text-emerald-500"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 flex items-center justify-center gap-2">
                  <FiShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;