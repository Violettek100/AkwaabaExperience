import { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { 
  FaPlay, FaQuoteLeft, FaCheckCircle, FaMapMarkerAlt, 
  FaHotel, FaPlane, FaGift, FaStar
} from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Required Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const features = [
    { icon: FaMapMarkerAlt, title: "Curated Journeys", desc: "Expertly designed cultural expeditions" },
    { icon: FaHotel, title: "Luxury Retreats", desc: "5-star accommodations with local flair" },
    { icon: FaPlane, title: "Seamless Travel", desc: "End-to-end trip management" },
    { icon: FaGift, title: "Artisan Market", desc: "Authentic Ghanaian craftsmanship" }
  ];

  const testimonials = [
    { 
      name: "Kwame Asante", 
      role: "Adventure Traveler", 
      text: "An unparalleled cultural immersion experience",
      Image: "/assets/testimonial1.jpg"
    },
    { 
      name: "Ama Serwah", 
      role: "Cultural Enthusiast", 
      text: "Rediscovered my heritage in profound ways",
      image: "/assets/testimonial2.jpg"
    },
    { 
      name: "David Mensah", 
      role: "Luxury Travel Blogger", 
      text: "World-class service with authentic touches",
      image: "/assets/testimonial3.jpg"
    }
  ];

  const pricing = [
    { tier: "Explorer", price: "299", features: ["Basic Tours", "3-Star Accommodation", "Local Guide"] },
    { tier: "Culturalist", price: "599", features: ["Premium Tours", "4-Star Hotels", "Private Transfers"] },
    { tier: "Connoisseur", price: "999", features: ["VIP Experiences", "5-Star Resorts", "24/7 Concierge"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-emerald-900/20 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-emerald-900/80"
        >
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Experience Ghana's Soul
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto mb-8">
            Immerse yourself in vibrant traditions, breathtaking landscapes, and luxury redefined
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all hover:bg-emerald-600 border border-emerald-500 hover:border-emerald-600"
            >
              <FaPlay /> Explore Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="border border-emerald-500 text-emerald-500 px-8 py-4 rounded-xl transition-all hover:bg-emerald-500/10"
            >
              Custom Journey
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Akwaaba</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Premium experiences crafted with cultural authenticity and modern luxury
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <feature.icon className="text-5xl text-emerald-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="relative"
            >
              <img 
                src="/assets/kente-weaving.jpg" 
                alt="Cultural Experience"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg">
                <FaStar className="text-4xl text-emerald-500" />
                <p className="mt-2 font-semibold">Authentic Craftsmanship</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Cultural Immersion</h2>
              <p className="text-lg text-slate-300 mb-8">
                Engage with master artisans, participate in traditional ceremonies, and create 
                meaningful connections with local communities
              </p>
              <ul className="space-y-6">
                {['Kente Weaving Workshops', 'Traditional Drumming Sessions', 
                  'Local Cuisine Masterclasses', 'Historical Storytelling'].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <FaCheckCircle className="text-emerald-400 text-xl flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Booking Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Plan Your Journey</h2>
          
          <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
            <TabList className="flex justify-center gap-4 mb-12">
              {['Destination', 'Dates', 'Preferences', 'Confirm'].map((tab, index) => (
                <Tab key={index}>
                  <motion.div 
                    className={`px-6 py-3 rounded-full cursor-pointer ${
                      activeTab === index 
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' 
                        : 'bg-white text-slate-600 hover:bg-emerald-500/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tab}
                  </motion.div>
                </Tab>
              ))}
            </TabList>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              {[0, 1, 2, 3].map((index) => (
                <TabPanel key={index}>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold">Select Your {['Destination', 'Travel Dates', 'Preferences', 'Payment'][index]}</h3>
                      <p className="text-slate-600">
                        {[ 
                          'Choose from our curated destinations',
                          'Select your preferred travel dates',
                          'Customize your experience preferences',
                          'Secure payment options'
                        ][index]}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      {/* Interactive elements would go here */}
                    </div>
                  </motion.div>
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Traveler Stories</h2>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            style={{
              '--swiper-navigation-color': '#10b981',
              '--swiper-pagination-color': '#10b981',
            } as React.CSSProperties}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg h-full"
                >
                  <FaQuoteLeft className="text-4xl text-emerald-500 mb-6" />
                  <p className="text-lg text-slate-600 mb-8">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-slate-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
{/* Premium Experience Section */}
<section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl" />
              <img 
                src="/assets/luxury-resort.jpg" 
                alt="Luxury Experience"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Uncompromised Luxury</h2>
              <p className="text-slate-300 text-lg">
                Experience Ghana's beauty through our collection of premium properties and 
                exclusive access experiences
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {['Private Beach Villas', 'Safari Lodges', 'City Penthouse', 'Eco-Resorts']
                  .map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl">
                      <FaStar className="text-emerald-400 text-xl" />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Your Journey Timeline</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-slate-200 transform -translate-x-1/2" />
            {[ 
              { title: "Discovery Call", desc: "Understand your travel aspirations" },
              { title: "Custom Itinerary", desc: "Tailored experience design" },
              { title: "Booking Confirmation", desc: "Secure your journey" },
              { title: "Pre-Trip Preparation", desc: "Travel logistics finalized" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`mb-16 w-full ${index % 2 === 0 ? 'pr-24' : 'pl-24'}`}
              >
                <div className={`relative w-1/2 ${index % 2 === 0 ? 'float-left' : 'float-right'}`}>
                  <div className="absolute top-4 w-6 h-6 bg-emerald-500 rounded-full" />
                  <div className="p-6 ml-12 bg-white rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Experience Tiers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -20 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{plan.tier}</h3>
                  <div className="text-4xl font-bold mb-6">
                    <span className="text-emerald-500">${plan.price}</span>/journey
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="w-full bg-emerald-500 text-white py-3 rounded-lg"
                  >
                    Select Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="bg-emerald-500/10 p-12 rounded-3xl"
          >
            <h2 className="text-4xl font-bold mb-6">Ready for Transformation?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Begin your journey to unforgettable memories and cultural discovery
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-500 text-white px-12 py-4 rounded-xl text-lg"
            >
              Start Your Adventure
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;