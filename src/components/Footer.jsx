// export default function Footer() {
//   return (
//     <div className="mt-10">

//       {/* 🔥 MAIN FOOTER */}
//       <div className="bg-gradient-to-r from-[#1a1a1a] via-[#D4AF37] to-[#1a1a1a] 
//         text-white text-center py-6 shadow-lg border-t border-[#D4AF37]/40">

        
//         {/* 🔗 POWERED BY */}
//         <p className="mt-2 text-sm font-semibold tracking-wide">
//           Powered by{" "}
//           <a
//             href="https://www.smservice.co.in/software"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-black hover:text-white underline transition duration-300"
//           >
//             SM Services
//           </a>
//         </p>

//         {/* 📞 ACTION BUTTONS */}
//         <div className="mt-4 flex justify-center gap-4 flex-wrap">

//           {/* WHATSAPP */}
//           <a
//             href="https://wa.me/919301499995"
//             target="_blank"
//             className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
//           >
//             WhatsApp
//           </a>

//           {/* CALL */}
//           <a
//             href="tel: 9301499995"
//             className="bg-black text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition"
//           >
//             Call Now
//           </a>

//         </div>

//       </div>

//     </div>
//   );
// }
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="mt-10">

      {/* 🔥 MAIN FOOTER */}
      <div className="bg-gradient-to-r from-[#1a1a1a] via-[#D4AF37] to-[#1a1a1a] 
        text-white text-center py-6 shadow-lg border-t border-[#D4AF37]/40">

        {/* 🔗 POWERED BY + LOGO */}
        <div className="flex flex-col items-center gap-2">

          <span className="text-sm text-gray-200 tracking-wide">
            Powered by
          </span>

          <a
            href="https://www.smservice.co.in/software"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src={logo}
              alt="SM Services"
              className="h-10 md:h-12 object-contain"
            />
          </a>

        </div>

        {/* 📞 ACTION BUTTONS */}
        <div className="mt-5 flex justify-center gap-4 flex-wrap">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919301499995"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-2 rounded-full font-medium shadow hover:scale-105 transition"
          >
            WhatsApp
          </a>

          {/* CALL */}
          <a
            href="tel:9301499995"
            className="bg-black text-white px-5 py-2 rounded-full font-medium shadow hover:bg-gray-800 transition"
          >
            Call Now
          </a>

        </div>

      </div>

    </div>
  );
}