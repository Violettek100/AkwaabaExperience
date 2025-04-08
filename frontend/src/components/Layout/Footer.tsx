import { FC } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-4 gap-8 lg:gap-12">
        {/* Logo and Social Section */}
        <div className="space-y-6">
          <img
            src="/images/logo.png"  // ✅ Add logo to footer
            alt="Akwaaba Experience Logo"
            className="h-12 w-auto"
          />
          <p className="text-slate-400 text-sm leading-relaxed">
            Crafting premium travel experiences connecting you with Ghana's heritage.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <Icon
                key={index}
                className="text-xl cursor-pointer hover:text-emerald-500 transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        {[
          { title: "Explore", links: ["Destinations", "Cultural Tours", "Luxury Stays", "Adventure"] },
          { title: "Company", links: ["About Us", "Blog", "Careers", "Partners"] },
          { title: "Support", links: ["Contact", "FAQ", "Privacy", "Terms"] }
        ].map((section, index) => (
          <div key={index} className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">{section.title}</h4>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact and Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-200">Contact</h4>
          <p className="text-slate-400 text-sm">24/7 Support: +233 123 456 789</p>
          <p className="text-slate-400 text-sm">Email: experience@akwaaba.com</p>
          <div className="mt-4 bg-slate-800 p-4 rounded-xl">
            <p className="text-sm text-slate-300 mb-2">Sign up for exclusive offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-slate-900 rounded-lg px-4 py-2 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Akwaaba Experience. All rights reserved.
          <div className="mt-2 md:mt-0 md:inline-block">
            <a href="#" className="hover:text-emerald-500 mx-2">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-emerald-500 mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
