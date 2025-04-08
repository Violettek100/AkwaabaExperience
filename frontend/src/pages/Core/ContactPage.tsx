import { motion } from "framer-motion";
import { Suspense } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons for Vite compatibility
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/assets/marker-icon-2x.png",
  iconUrl: "/assets/marker-icon.png",
  shadowUrl: "/assets/marker-shadow.png",
});

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800">Contact Us</h2>
            <p className="text-slate-600 mt-4">Feel free to reach out to us for any inquiries.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-emerald-500 text-xl" />
                <p className="text-slate-700">123 Accra, Ghana</p>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="text-emerald-500 text-xl" />
                <p className="text-slate-700">+233 123 456 789</p>
              </div>
              <div className="flex items-center space-x-4">
                <FiMail className="text-emerald-500 text-xl" />
                <p className="text-slate-700">info@akwaabaexperience.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 relative">
            <Suspense fallback={<div className="bg-slate-100 w-full h-full" />}>
              <MapContainer center={[5.6037, -0.1870]} zoom={13} style={{ height: "100%", width: "100%" }} className="z-0">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[5.6037, -0.1870]}>
                  <Popup>Cultural Headquarters</Popup>
                </Marker>
              </MapContainer>
            </Suspense>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
