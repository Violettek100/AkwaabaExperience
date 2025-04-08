// src/pages/AboutUs.tsx
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Parallax, Autoplay } from 'swiper/modules';
import { FaHandshake, FaRocket, FaUsers, FaAward, FaMapMarker, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Required Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/parallax';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Kwame Asante', role: 'CEO', image: '/team/ceo.jpg' },
    { name: 'Ama Serwah', role: 'CTO', image: '/team/cto.jpg' },
    { name: 'Kofi Mensah', role: 'Lead Guide', image: '/team/guide.jpg' },
  ];

  const coreValues = [
    { icon: FaHandshake, title: 'Authenticity', desc: 'Genuine cultural experiences' },
    { icon: FaRocket, title: 'Innovation', desc: 'Modern travel solutions' },
    { icon: FaUsers, title: 'Community', desc: 'Empowering local partners' },
    { icon: FaAward, title: 'Excellence', desc: 'Award-winning service' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-emerald-900/60">
          <img 
            src="/about-hero.jpg" 
            alt="Ghana Landscape" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Embracing Ghana's Soul
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto">
            Where Tradition Meets Modern Exploration
          </p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <img
              src="/mission.jpg"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 flex items-end p-8">
              <FaMapMarker className="text-4xl text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">Rooted in Ghana</h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Our Vision for African Tourism
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              At Akwaaba Experiences, we bridge the gap between cultural preservation 
              and modern travel. Born from a deep love for Ghana's heritage, we curate 
              journeys that empower communities while offering authentic experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
                  <value.icon className="text-4xl text-emerald-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Tribe</h2>
          
          <Swiper
            modules={[EffectCreative, Autoplay]}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-120%', 0, -500] },
              next: { translate: ['120%', 0, -500] },
            }}
            autoplay={{ delay: 5000 }}
            className="!pb-16"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="py-12">
                <div className="flex flex-col items-center">
                  <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-2xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-emerald-400 mb-4">{member.role}</p>
                  <div className="flex gap-4">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                      <FaLinkedin className="text-xl" />
                    </button>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                      <FaTwitter className="text-xl" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="p-8"
          >
            <div className="text-5xl font-bold mb-4">15K+</div>
            <div className="text-slate-300">Happy Travelers</div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="p-8"
          >
            <div className="text-5xl font-bold mb-4">200+</div>
            <div className="text-slate-300">Local Partners</div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="p-8"
          >
            <div className="text-5xl font-bold mb-4">98%</div>
            <div className="text-slate-300">Positive Reviews</div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto">
              Join thousands who've discovered the real Ghana through our eyes
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-500 text-white px-12 py-4 rounded-xl text-lg"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;