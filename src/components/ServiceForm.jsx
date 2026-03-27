// export default function ServiceForm({ form, setForm, handleWhatsApp }) {
//   return (
//     <div className="bg-[#0f172a] p-8 rounded-xl max-w-xl border border-gray-800">

//       <h2 className="text-2xl mb-4">Request Service</h2>

//       <input
//         placeholder="Your Name"
//         className="w-full p-3 mb-3 bg-[#020617] border border-gray-700 rounded"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />

//       <input
//         placeholder="Phone Number"
//         className="w-full p-3 mb-3 bg-[#020617] border border-gray-700 rounded"
//         value={form.phone}
//         onChange={(e) => setForm({ ...form, phone: e.target.value })}
//       />

//       <textarea
//         placeholder="Requirement"
//         className="w-full p-3 mb-4 bg-[#020617] border border-gray-700 rounded"
//         value={form.requirement}
//         onChange={(e) => setForm({ ...form, requirement: e.target.value })}
//       />

//       <button
//         onClick={handleWhatsApp}
//         className="bg-green-500 w-full py-3 rounded"
//       >
//         Contact on WhatsApp
//       </button>

//     </div>
//   );
// }
export default function ServiceForm({ form, setForm, handleWhatsApp }) {

  const handleSubmit = async () => {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzYkK_weadvvfCONYf3J-ptIwNMSmwosjAeIt0W2BtSFFpLcJ-lLHD6VlnUB0w8Rhua/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });

      alert("Lead saved successfully ✅");

      setForm({
        name: "",
        phone: "",
        requirement: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error ❌");
    }
  };

  return (
    <div className="bg-[#0f172a] p-8 rounded-xl max-w-xl border border-gray-800">

      <h2 className="text-2xl mb-4">Request Service</h2>

      <input
        placeholder="Your Name"
        className="w-full p-3 mb-3 bg-[#020617] border border-gray-700 rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone Number"
        className="w-full p-3 mb-3 bg-[#020617] border border-gray-700 rounded"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        placeholder="Requirement"
        className="w-full p-3 mb-4 bg-[#020617] border border-gray-700 rounded"
        value={form.requirement}
        onChange={(e) => setForm({ ...form, requirement: e.target.value })}
      />

      <div className="flex gap-4">

        <button
          onClick={handleSubmit}
          className="bg-[#D4AF37] text-black w-full py-3 rounded"
        >
          Submit
        </button>

        <button
          onClick={handleWhatsApp}
          className="bg-green-500 w-full py-3 rounded"
        >
          WhatsApp
        </button>

      </div>

    </div>
  );
}