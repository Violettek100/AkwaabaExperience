import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";  // ✅ Import Axios
import { 
  FiCalendar, FiUsers, FiGift, FiMapPin, 
  FiClock, FiCheckCircle
} from "react-icons/fi";

const BookingPage = () => {
    const [guests, setGuests] = useState(1);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
    const [message, setMessage] = useState("");  
    const [isLoading, setIsLoading] = useState(false);  

    const culturalExperiences = [
        { name: "Kente Weaving Workshop", duration: "3 hours", price: 75 },
        { name: "Traditional Drumming Lesson", duration: "2 hours", price: 50 },
        { name: "Cultural Village Tour", duration: "4 hours", price: 120 },
    ];

    // ✅ Handle selecting/unselecting experiences
    const toggleExperience = (experienceName: string) => {
        setSelectedExperiences((prev) =>
            prev.includes(experienceName)
                ? prev.filter((exp) => exp !== experienceName)
                : [...prev, experienceName]
        );
    };

    // ✅ Handle Booking Function
    const handleBooking = async () => {
        if (!selectedDate) {
            setMessage("Please select a date for your booking.");
            return;
        }
        if (selectedExperiences.length === 0) {
            setMessage("Please select at least one experience.");
            return;
        }

        setIsLoading(true);
        setMessage("");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/bookings/", {
                date: selectedDate,
                guests,
                experiences: selectedExperiences,
            });

            console.log("API Response:", response.data); 

            if (response.status === 201) {
                setMessage("Booking confirmed successfully! ✅");
                setSelectedDate("");
                setGuests(1);
                setSelectedExperiences([]);
            } else {
                setMessage("Something went wrong. Please try again.");
            }
          } catch (error: any) {  // ✅ Explicitly cast error to `any`
            console.error("Booking error:", error.response?.data || error.message);
            setMessage(`Error: ${error.response?.data?.message || "Unable to complete booking."}`);
        }
         finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50/20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-900/95 to-emerald-900/80 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Book Your Cultural Journey
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Immerse yourself in authentic Ghanaian traditions with our curated experiences
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Booking Form */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div 
                            initial={{ x: -50 }}
                            animate={{ x: 0 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                            
                            <div className="space-y-6">
                                {/* Select Date */}
                                <div>
                                    <label className="block text-slate-700 mb-2 flex items-center gap-2">
                                        <FiCalendar /> Select Date
                                    </label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-400"
                                    />
                                </div>

                                {/* Select Guests */}
                                <div>
                                    <label className="block text-slate-700 mb-2 flex items-center gap-2">
                                        <FiUsers /> Number of Guests
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <button 
                                            onClick={() => setGuests(Math.max(1, guests - 1))}
                                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl font-medium">{guests}</span>
                                        <button 
                                            onClick={() => setGuests(guests + 1)}
                                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Select Experiences */}
                                <div>
                                    <label className="block text-slate-700 mb-2 flex items-center gap-2">
                                        <FiGift /> Select Experiences
                                    </label>
                                    <div className="grid gap-4">
                                        {culturalExperiences.map((experience, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ y: -2 }}
                                                className={`p-4 border border-slate-200 rounded-lg flex justify-between items-center cursor-pointer ${
                                                    selectedExperiences.includes(experience.name) 
                                                    ? "bg-emerald-100 border-emerald-500" 
                                                    : ""
                                                }`}
                                                onClick={() => toggleExperience(experience.name)}
                                            >
                                                <div>
                                                    <h3 className="font-semibold">{experience.name}</h3>
                                                    <p className="text-slate-600">{experience.duration}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-emerald-600">
                                                        ${experience.price * guests}
                                                    </p>
                                                    <p className="text-sm text-slate-600">
                                                        {experience.price}/person
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-8">
                        <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Guests</span>
                                <span>{guests}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Date</span>
                                <span>{selectedDate || "Select date"}</span>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span className="text-emerald-600">
                                        ${selectedExperiences.reduce((total, expName) => {
                                            const exp = culturalExperiences.find(e => e.name === expName);
                                            return total + (exp ? exp.price * guests : 0);
                                        }, 0)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Confirm Booking Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            onClick={handleBooking}
                            className="w-full bg-emerald-500 text-white py-4 rounded-lg mt-8 hover:bg-emerald-600 flex items-center justify-center gap-2"
                            disabled={isLoading}
                        >
                            {isLoading ? "Processing..." : (
                                <>
                                    <FiCheckCircle className="w-5 h-5" />
                                    Confirm Booking
                                </>
                            )}
                        </motion.button>

                        {message && <p className="text-center mt-4 text-red-600">{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
