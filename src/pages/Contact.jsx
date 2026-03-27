
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  // WhatsApp function
  const handleWhatsApp = () => {
    const text = `Hello, I want hotel staff services.
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.message}`;

    window.open(`https://wa.me/919584573759?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen flex items-center justify-center px-4">

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h1>

          <p className="text-gray-400 mb-6">
            Need professional hotel staff or consultancy?  
            Contact us today and grow your business.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📍 India (Pan India Service)</p>
            <p>📞 +91 8319399961</p>
            <p>📞 +91 9584573759</p>
            <p>📧 info@smservice.co.in</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#0f172a] p-8 rounded-xl border border-gray-800">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Contact Form
          </h2>

          <div className="space-y-4">

            <input
              placeholder="Your Name"
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
              onChange={(e) => setForm({...form, name: e.target.value})}
            />

            <input
              placeholder="Phone Number"
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
              onChange={(e) => setForm({...form, phone: e.target.value})}
            />

            <textarea
              placeholder="Your Requirement"
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
              onChange={(e) => setForm({...form, message: e.target.value})}
            />

            {/* BUTTONS */}
            <div className="flex gap-4">

              <button className="bg-[#D4AF37] text-black w-full py-3 rounded hover:opacity-80">
                Submit
              </button>

              <button 
                onClick={handleWhatsApp}
                className="bg-green-500 w-full py-3 rounded hover:opacity-80"
              >
                WhatsApp
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}