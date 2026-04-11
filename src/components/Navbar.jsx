

// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   return (
//     <div className="relative">

//       {/* 🌌 STAR BACKGROUND (हल्का visible रहेगा) */}
//       <div className="absolute inset-0 z-0">
//         <div className="stars opacity-20"></div>
//         <div className="stars2 opacity-20"></div>
//       </div>

//       {/* 🔥 GOLDEN NAVBAR */}
//       <div className="relative z-10 flex justify-between items-center px-10 py-5 
//         bg-gradient-to-r from-[#1a1a1a] via-[#D4AF37] to-[#1a1a1a] 
//         border-b border-[#D4AF37]/40 shadow-lg">

//         {/* LOGO */}
//         <img src={logo} className="h-20 object-contain" />

//         {/* MENU */}
//         <div className="space-x-8 text-white font-medium text-lg flex items-center">

//           <Link to="/" className="hover:text-black transition duration-300">
//             Home
//           </Link>

//           <Link to="/services" className="hover:text-black transition duration-300">
//             Services
//           </Link>

//           <Link to="/apply-job" className="hover:text-black transition duration-300">
//             Jobs
//           </Link>

//           <Link to="/contact" className="hover:text-black transition duration-300">
//             Contact
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      {/* 🌌 STAR BACKGROUND (click block fix) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="stars opacity-20"></div>
        <div className="stars2 opacity-20"></div>
      </div>

      {/* 🔥 NAVBAR */}
      <div className="relative z-10 flex justify-between items-center 
        px-4 md:px-10 py-4 md:py-5
        bg-gradient-to-r from-[#1a1a1a] via-[#D4AF37] to-[#1a1a1a] 
        border-b border-[#D4AF37]/40 shadow-lg">

        {/* LOGO */}
        <img 
          src={logo} 
          alt="logo"
          className="h-12 md:h-20 object-contain"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-white font-medium text-lg items-center">
          <Link to="/" className="hover:text-black transition duration-300">
            Home
          </Link>

          <Link to="/services" className="hover:text-black transition duration-300">
            Services
          </Link>

          <Link to="/apply-job" className="hover:text-black transition duration-300">
            Jobs
          </Link>

          <Link to="/contact" className="hover:text-black transition duration-300">
            Contact
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-white z-20">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* 📱 MOBILE MENU (z-index fix applied) */}
      {isOpen && (
        <div className="md:hidden relative z-20 
          bg-[#1a1a1a] text-white px-6 py-4 space-y-4 
          border-b border-[#D4AF37]/40 shadow-lg">

          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="block hover:text-[#D4AF37] transition"
          >
            Home
          </Link>

          <Link 
            to="/services" 
            onClick={() => setIsOpen(false)} 
            className="block hover:text-[#D4AF37] transition"
          >
            Services
          </Link>

          <Link 
            to="/apply-job" 
            onClick={() => setIsOpen(false)} 
            className="block hover:text-[#D4AF37] transition"
          >
            Jobs
          </Link>

          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="block hover:text-[#D4AF37] transition"
          >
            Contact
          </Link>
        </div>
      )}

    </div>
  );
}