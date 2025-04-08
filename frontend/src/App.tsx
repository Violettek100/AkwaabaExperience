import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./context/CartContext"; // ✅ Ensure correct path

// Pages
import Home from "./pages/Core/Home";
import MarketplacePage from "./pages/Commerce/MarketplacePage";
import CartPage from "./pages/Commerce/CartPage";
import CheckoutPage from "./pages/Commerce/CheckoutPage";
import BookingPage from "./pages/Services/BookingPage";

const App = () => {
    return (
        <CartProvider> {/* ✅ Ensure CartProvider wraps everything */}
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/marketplace" element={<MarketplacePage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/booking" element={<BookingPage />} />
                    </Routes>
                </Layout>
            </Router>
        </CartProvider>
    );
};

export default App;
