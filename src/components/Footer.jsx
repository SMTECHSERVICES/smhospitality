export default function Footer() {
  return (
    <div className="mt-10">

      {/* 🔥 MAIN FOOTER */}
      <div className="bg-gradient-to-r from-[#1a1a1a] via-[#D4AF37] to-[#1a1a1a] 
        text-white text-center py-6 shadow-lg border-t border-[#D4AF37]/40">

        
        {/* 🔗 POWERED BY */}
        <p className="mt-2 text-sm font-semibold tracking-wide">
          Powered by{" "}
          <a
            href="https://www.smservice.co.in/software"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white underline transition duration-300"
          >
            SM Services
          </a>
        </p>

        {/* 📞 ACTION BUTTONS */}
        <div className="mt-4 flex justify-center gap-4 flex-wrap">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919098273259"
            target="_blank"
            className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            WhatsApp
          </a>

          {/* CALL */}
          <a
            href="tel:9098273259"
            className="bg-black text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition"
          >
            Call Now
          </a>

        </div>

      </div>

    </div>
  );
}