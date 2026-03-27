// import { useState } from "react";

// export default function Marketing() {
//   const [form, setForm] = useState({ name: "", phone: "", requirement: "" });

//   const handleWhatsApp = () => {
//     const msg = `I need Marketing Strategy
// Name: ${form.name}
// Phone: ${form.phone}
// Requirement: ${form.requirement}`;

//     window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
//   };

//   return (
//     <div className="bg-[#020617] text-white min-h-screen p-10">
//       <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
//         Marketing Strategy
//       </h1>

//       <p className="text-gray-400 mb-6">
//         Grow your hotel with smart promotions.
//       </p>

//       <ul className="mb-8 space-y-2">
//         <li>✔ Social media marketing</li>
//         <li>✔ Local promotion</li>
//         <li>✔ Branding strategy</li>
//       </ul>

//       <ServiceForm form={form} setForm={setForm} handleWhatsApp={handleWhatsApp} />
//     </div>
//   );
// }
import { useState } from "react";
import ServiceForm from "../../components/ServiceForm";

export default function Marketing() {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });

  const handleWhatsApp = () => {
    const msg = `I need Marketing Strategy
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.requirement}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen p-10">

      <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
        Marketing Strategy
      </h1>

      <p className="text-gray-400 mb-6">
        Grow your hotel with smart promotions.
      </p>

      <ServiceForm form={form} setForm={setForm} handleWhatsApp={handleWhatsApp} />

    </div>
  );
}