
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   return (
//     <div className="relative overflow-hidden">

//       {/* 🌌 STAR BACKGROUND */}
//       <div className="absolute inset-0 bg-black">

//         {/* SMALL STARS */}
//         <div className="stars"></div>

//         {/* GLOW STARS */}
//         <div className="stars2"></div>

//         {/* BIG SHINE STARS */}
//         <div className="stars3"></div>

//       </div>

//       {/* 🔥 NAV CONTENT */}
//       <div className="relative z-10 flex justify-between items-center px-10 py-4">

//         {/* LOGO */}
//         <img src={logo} className="h-20" />

//         {/* MENU */}
//         <div className="space-x-8 text-white font-medium text-lg">

//           <Link to="/" className="hover:text-[#D4AF37] transition">Home</Link>
//           <Link to="/services" className="hover:text-[#D4AF37] transition">Services</Link>
//           <Link to="/apply-job" className="hover:text-[#D4AF37] transition">Jobs</Link>
//           <Link to="/contact" className="hover:text-[#D4AF37] transition">Contact</Link>

//         </div>

//       </div>

//     </div>
//   );
// }
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="relative">

      {/* 🌌 STAR BACKGROUND (हल्का visible रहेगा) */}
      <div className="absolute inset-0 z-0">
        <div className="stars opacity-20"></div>
        <div className="stars2 opacity-20"></div>
      </div>

      {/* 🔥 GOLDEN NAVBAR */}
      <div className="relative z-10 flex justify-between items-center px-10 py-5 
        bg-gradient-to-r from-[#1a1a1a] via-[#D4AF37] to-[#1a1a1a] 
        border-b border-[#D4AF37]/40 shadow-lg">

        {/* LOGO */}
        <img src={logo} className="h-20 object-contain" />

        {/* MENU */}
        <div className="space-x-8 text-white font-medium text-lg flex items-center">

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

      </div>

    </div>
  );
}