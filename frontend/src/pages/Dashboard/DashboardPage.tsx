// src/pages/Dashboard.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPlane,
  FaHotel,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaUser,
  FaWallet,
  FaHistory,
  FaStar,
  FaRegHeart,
  FaSearch
} from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('light');
  const [cartItems, setCartItems] = useState(2);

  const travelPackages = [
    {
      id: 1,
      name: 'Golden Safari Adventure',
      price: 1499,
      duration: '7 Days',
      location: 'Serengeti, Tanzania',
      image: '/assets/safari.jpg',
      rating: 4.8
    },
    {
      id: 2,
      name: 'European Cultural Tour',
      price: 2299,
      duration: '10 Days',
      location: 'Paris, Rome, Barcelona',
      image: '/assets/europe.jpg',
      rating: 4.6
    }
  ];

  const bookings = [
    {
      id: 1,
      date: '2024-03-15',
      status: 'Upcoming',
      package: 'Golden Safari Adventure',
      total: 1499
    },
    {
      id: 2,
      date: '2024-02-20',
      status: 'Completed',
      package: 'European Cultural Tour',
      total: 2299
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} font-sans`}>
      {/* Sidebar */}
      <motion.aside 
        className={`fixed top-0 left-0 h-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-xl z-50 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
        animate={{ width: sidebarOpen ? 256 : 80 }}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <FaMapMarkerAlt className="text-white" />
            </div>
            {sidebarOpen && <span className="text-xl font-bold">TravelHub</span>}
          </div>

          <nav className="space-y-2">
            {[
              { name: 'Dashboard', icon: FaMapMarkerAlt },
              { name: 'Bookings', icon: FaWallet },
              { name: 'Wishlist', icon: FaRegHeart },
              { name: 'Profile', icon: FaUser },
              { name: 'Settings', icon: FiSettings },
            ].map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === item.name.toLowerCase()
                    ? 'bg-emerald-500/20 text-emerald-500'
                    : theme === 'light' 
                      ? 'hover:bg-gray-100' 
                      : 'hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(item.name.toLowerCase())}
              >
                <item.icon className="w-6 h-6" />
                {sidebarOpen && <span>{item.name}</span>}
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`ml-64 transition-all ${!sidebarOpen && 'ml-20'}`}>
        {/* Top Bar */}
        <div className={`sticky top-0 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} border-b p-6 flex justify-between items-center`}>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <FaPlane className={`w-5 h-5 transform ${sidebarOpen ? 'rotate-90' : '-rotate-90'}`} />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <FaShoppingCart className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <FaUser className="text-white" />
              </div>
              <div className="text-right">
                <p className="font-medium">Traveler Profile</p>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
              <h3 className="text-gray-500 text-sm mb-2">Total Bookings</h3>
              <p className="text-2xl font-bold">12</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-emerald-500">↑ 24%</span>
                <span className="text-sm text-gray-500">vs last month</span>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
              <h3 className="text-gray-500 text-sm mb-2">Wishlist Items</h3>
              <p className="text-2xl font-bold">8</p>
              <div className="flex items-center gap-2 mt-4">
                <FaRegHeart className="text-rose-500" />
                <span className="text-sm text-gray-500">Saved items</span>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
              <h3 className="text-gray-500 text-sm mb-2">Loyalty Points</h3>
              <p className="text-2xl font-bold">4,850</p>
              <div className="flex items-center gap-2 mt-4">
                <FaStar className="text-amber-400" />
                <span className="text-sm text-gray-500">Platinum Status</span>
              </div>
            </div>
          </div>

          {/* Travel Packages */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Featured Travel Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {travelPackages.map((pkg) => (
                <motion.div 
                  key={pkg.id}
                  whileHover={{ y: -5 }}
                  className={`rounded-xl overflow-hidden shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{pkg.name}</h3>
                      <span className="flex items-center gap-1 text-amber-500">
                        <FaStar /> {pkg.rating}
                      </span>
                    </div>
                    <p className="text-gray-500 mb-4">{pkg.location}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-2xl font-bold">${pkg.price}</p>
                        <p className="text-gray-500">{pkg.duration}</p>
                      </div>
                      <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Booking Management */}
          <div className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
            <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
            <div className="flex gap-4 mb-6">
              {['Upcoming', 'Completed', 'Cancelled'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === tab.toLowerCase()
                      ? 'bg-emerald-500 text-white'
                      : theme === 'light'
                        ? 'bg-gray-100'
                        : 'bg-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className={`p-4 rounded-lg ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{booking.package}</h3>
                      <p className="text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${booking.total}</p>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        booking.status === 'Upcoming' 
                          ? 'bg-blue-100 text-blue-600'
                          : booking.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-rose-100 text-rose-600'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          {activeTab === 'profile' && (
            <div className={`mt-8 p-6 rounded-xl ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
              <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
                      Save Changes
                    </button>
                  </form>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Security</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gray-100">
                      <h4 className="font-medium mb-2">Password</h4>
                      <button className="text-emerald-500 hover:underline">
                        Change Password
                      </button>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-100">
                      <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                      <button className="text-emerald-500 hover:underline">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;