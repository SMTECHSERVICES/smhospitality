// import { useState } from "react";

// export default function StaffHiring() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     requirement: ""
//   });

//   const handleWhatsApp = () => {
//     const msg = `I need Staff Hiring Service
// Name: ${form.name}
// Phone: ${form.phone}
// Requirement: ${form.requirement}`;

//     window.open(`https://wa.me/919584573759?text=${encodeURIComponent(msg)}`);
//   };

//   return (
//     <div className="bg-[#020617] text-white min-h-screen p-10">
//       <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
//         Staff Hiring Services
//       </h1>

//       <p className="text-gray-400 mb-6">
//         We provide trained chefs, managers, stewards & housekeeping staff.
//       </p>

//       <ul className="mb-8 space-y-2">
//         <li>✔ Verified staff</li>
//         <li>✔ Fast hiring</li>
//         <li>✔ PAN India</li>
//       </ul>

//       <ServiceForm form={form} setForm={setForm} handleWhatsApp={handleWhatsApp} />
//     </div>
//   );
// }
import { useState } from "react";
import ServiceForm from "../../components/ServiceForm";

export default function SOP() {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });

  const handleWhatsApp = () => {
    const msg = `I need SOP Service
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.requirement}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen p-10">

      <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
        SOP Development
      </h1>

      <p className="text-gray-400 mb-6">
        Structured systems for smooth hotel operations.
      </p>

      <ServiceForm form={form} setForm={setForm} handleWhatsApp={handleWhatsApp} />

    </div>
  );
}