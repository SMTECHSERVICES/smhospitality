import { useState } from "react";
import ServiceForm from "../../components/ServiceForm";

export default function HotelSetup() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: ""
  });

  const handleWhatsApp = () => {
    const msg = `I need Hotel Setup Service
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.requirement}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen p-10">

      <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
        Hotel Setup Services
      </h1>

      <p className="text-gray-400 mb-6">
        Complete restaurant & kitchen setup consultancy for new and existing hotels.
      </p>

      <ul className="mb-8 space-y-2">
        <li>✔ Kitchen planning & design</li>
        <li>✔ Equipment setup</li>
        <li>✔ Staff hiring & training</li>
        <li>✔ End-to-end hotel setup</li>
      </ul>

      {/* FORM */}
      <ServiceForm 
        form={form} 
        setForm={setForm} 
        handleWhatsApp={handleWhatsApp} 
      />

    </div>
  );
}