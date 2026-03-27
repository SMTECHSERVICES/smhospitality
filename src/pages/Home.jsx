
// import { Link } from "react-router-dom";
// import videoBg from "../assets/videos/hotel.mp4";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

//       {/* 🎥 VIDEO BACKGROUND */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute w-full h-full object-cover"
//       >
//         <source src={videoBg} type="video/mp4" />
//       </video>

//       {/* 🔥 OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

//       {/* 💎 CONTENT */}
//       <div className="relative z-10 text-center px-4 max-w-3xl">

//         {/* HEADING */}
//         <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//           <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-300 bg-clip-text text-transparent">
//             FAITH Hospitality
//           </span>
//         </h1>

//         {/* SUBTEXT */}
//         <p className="mt-6 text-gray-300 text-lg md:text-xl">
//           Professional Hotel Staffing & Consultancy Services
//         </p>

//         {/* 🔥 BUTTONS */}
//         <div className="mt-10 flex flex-wrap justify-center gap-6">

//           {/* Hire Staff */}
//           <Link to="/services/staff-hiring">
//             <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
//               Hire Staff
//             </button>
//           </Link>

//           {/* View Services */}
//           <Link to="/services">
//             <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
//               View Services
//             </button>
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }
import { Link } from "react-router-dom";
import videoBg from "../assets/videos/hotel.mp4";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* 💎 CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-3xl">

        {/* PREMIUM HEADING */}
        <h1 className="leading-tight">
       <motion.span
  className="font-bold text-[#2F5BFF] block text-6xl md:text-8xl"
  
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0],
  }}
  transition={{
    duration: 1,
    y: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  
  whileHover={{ scale: 1.1 }}
>
  SM
</motion.span>

          <span className="text-white font-semibold text-2xl md:text-3xl tracking-widest">
            Hospitality
          </span>

        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          Professional Hotel Staffing & Consultancy Services
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">

          <Link to="/services/staff-hiring">
            <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
              Hire Staff
            </button>
          </Link>

          <Link to="/services">
            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
              View Services
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}