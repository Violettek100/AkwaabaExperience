// src/pages/Dashboard/Profile.tsx
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiMapPin } from 'react-icons/fi';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Profile = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-8">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-emerald-100 mx-auto mb-4 flex items-center justify-center">
                <FiUser className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-slate-600">john@culturalartistry.com</p>
            </div>
            <nav className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg bg-emerald-500 text-white">
                Profile
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-100">
                Order History
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-100">
                Address Book
              </button>
            </nav>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h1 className="text-2xl font-bold mb-8">Profile Settings</h1>
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-700 mb-2">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">Email</label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">Address</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      defaultValue="123 Cultural Lane, Accra"
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600">
                  Save Changes
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Profile;