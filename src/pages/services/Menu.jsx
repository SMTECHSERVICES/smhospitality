import { useState } from "react";
import ServiceForm from "../../components/ServiceForm";

export default function Menu() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: ""
  });

  const handleWhatsApp = () => {
    const msg = `I need Menu Engineering Service
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.requirement}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen p-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
        Menu Engineering
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-6 max-w-3xl">
        Optimize your menu for higher profit, better customer experience, and smart pricing strategy.
      </p>

      {/* FEATURES */}
      <ul className="mb-10 space-y-2">
        <li>✔ Menu cost optimization</li>
        <li>✔ High-profit dish planning</li>
        <li>✔ Smart pricing strategy</li>
        <li>✔ Menu design & layout</li>
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