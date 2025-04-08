import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Parallax } from 'swiper/modules';
import { 
  FaUtensils, FaMusic, FaMask, FaMonument,
  FaLeaf, FaWater, FaSun, FaHandsHelping
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/parallax';

const DiscoverGhana = () => {
  const culturalItems = [
    { icon: FaUtensils, title: "Culinary Journey", color: "bg-amber-500", image: "jollof.jpg" },
    { icon: FaMusic, title: "Rhythmic Traditions", color: "bg-emerald-600", image: "drumming.jpg" },
    { icon: FaMask, title: "Festival Heritage", color: "bg-rose-600", image: "festival.jpg" },
    { icon: FaMonument, title: "Historic Sites", color: "bg-slate-800", image: "castle.jpg" }
  ];

  const cuisine = [
    { name: "Jollof Rice", region: "West African Classic", image: "jollof.jpg" },
    { name: "Banku & Tilapia", region: "Coastal Delicacy", image: "banku.jpg" },
    { name: "Waakye", region: "Northern Specialty", image: "waakye.jpg" },
    { name: "Kelewele", region: "Street Food Favorite", image: "kelewele.jpg" }
  ];

  return (
    <Layout>
      {/* Hero Parallax Section */}
      <section className="relative h-screen overflow-hidden mt-16"> {/* Added margin-top for header */}
        <div className="absolute inset-0">
          <Swiper
            modules={[Parallax, EffectCreative]}
            speed={1200}
            parallax={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-20%', 0, -1] },
              next: { translate: ['100%', 0, 0] },
            }}
            className="h-full"
            breakpoints={{
              640: {
                creativeEffect: {
                  prev: { translate: ['-10%', 0, -1] },
                  next: { translate: ['50%', 0, 0] },
                }
              }
            }}
          >
            <div slot="container-start" className="parallax-bg" 
              data-swiper-parallax="-23%"
              style={{ 
                backgroundImage: "url('/assets/ghana-map-texture.png')",
                backgroundSize: 'cover'
              }}
            ></div>
            
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative z-10 text-center px-4">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 text-slate-900"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-emerald-700">
                    Ghana
                  </span>
                  <br />
                  <span className="text-xl md:text-2xl lg:text-4xl font-medium text-slate-600">
                    Where Culture Comes Alive
                  </span>
                </motion.h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Cultural Mosaic Grid */}
      <section className="py-12 md:py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {culturalItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square md:aspect-[3/4] rounded-xl lg:rounded-3xl overflow-hidden group"
            >
              <img 
                src={`/assets/${item.image}`} 
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className={`absolute inset-0 ${item.color} bg-opacity-80 flex items-center justify-center flex-col p-4 md:p-6`}>
                <item.icon className="text-2xl md:text-4xl text-white mb-2 md:mb-4" />
                <h3 className="text-lg md:text-2xl font-bold text-white text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culinary Experience */}
      <section className="py-12 md:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Taste of Ghana</h2>
              <p className="text-base md:text-lg text-slate-300 mb-8 md:mb-12">
                Explore a culinary landscape where every dish tells a story, blending indigenous 
                ingredients with centuries-old traditions.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {['Spice Blends', 'Fresh Seafood', 'Tropical Fruits', 'Street Food'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <FaLeaf className="text-sm md:text-xl text-white" />
                    </div>
                    <span className="text-sm md:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="relative aspect-video md:h-[600px] w-full rounded-xl md:rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-emerald-700/20" />
                <Swiper
                  modules={[Parallax]}
                  speed={600}
                  parallax={true}
                  className="h-full"
                  breakpoints={{
                    640: {
                      slidesPerView: 1.2,
                      spaceBetween: 20
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    }
                  }}
                >
                  {cuisine.map((dish, index) => (
                    <SwiperSlide key={index} className="relative">
                      <img 
                        src={`/assets/${dish.image}`} 
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-slate-900/80">
                        <h3 className="text-lg md:text-2xl font-bold text-white">{dish.name}</h3>
                        <p className="text-sm md:text-base text-slate-300">{dish.region}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People & Community */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-3 gap-6 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">The Heartbeat of Africa</h2>
              <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 max-w-2xl">
                Meet the vibrant communities that make Ghana one of the most welcoming 
                destinations in the world, where every greeting comes with a smile.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {['Artisan Crafts', 'Traditional Music', 'Community Festivals', 'Family Values'].map((item, index) => (
                  <div key={index} className="p-4 md:p-6 bg-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 rounded-xl mb-2 md:mb-4 flex items-center justify-center">
                      <FaHandsHelping className="text-xl md:text-2xl text-emerald-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square md:h-[600px] rounded-xl md:rounded-3xl overflow-hidden mt-8 lg:mt-0">
              <img 
                src="/assets/ghana-people.jpg" 
                alt="Ghanaian Community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 flex items-end p-4 md:p-8">
                <h3 className="text-lg md:text-2xl font-bold text-white">Community First</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Heritage Timeline */}
      <section className="py-12 md:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">Historical Legacy</h2>
          <div className="relative pl-4 md:pl-8 border-l-4 border-amber-500 space-y-8 md:space-y-16">
            {[
              { year: "1482", event: "Elmina Castle Established", icon: FaMonument },
              { year: "1957", event: "Independence from Colonial Rule", icon: FaSun },
              { year: "Present", event: "Cultural Renaissance", icon: FaWater }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-amber-500 rounded-full -left-3 md:-left-4 top-1 md:top-2 flex items-center justify-center">
                  <item.icon className="text-sm md:text-base text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.year}</h3>
                <p className="text-sm md:text-lg text-slate-300">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscoverGhana;