import { useState } from "react";
import ServiceForm from "../../components/ServiceForm";

export default function Training() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: ""
  });

  const handleWhatsApp = () => {
    const msg = `I need Staff Training Service
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.requirement}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen p-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
        Staff Training
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-6 max-w-3xl">
        Enhance your team’s performance with professional hospitality training programs.
      </p>

      {/* FEATURES */}
      <ul className="mb-10 space-y-2">
        <li>✔ Customer service training</li>
        <li>✔ Grooming & personality development</li>
        <li>✔ Communication skills</li>
        <li>✔ Service excellence standards</li>
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