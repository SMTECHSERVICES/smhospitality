// import { useState } from "react";

// export default function ApplyJob() {

//   const [form, setForm] = useState({
//     jobProfile: "",
//     name: "",
//     phone: "",
//     email: "",
//     file: null
//   });

//   return (
//     <div className="bg-[#020617] text-white min-h-screen flex items-center justify-center p-6">

//       <div className="bg-[#0f172a] p-8 rounded-xl border border-gray-800 w-full max-w-xl">

//         {/* TITLE */}
//         <h1 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">
//           Apply for Job
//         </h1>

//         {/* FORM */}
//         <div className="space-y-4">

//           {/* JOB PROFILE */}
//           <select
//             className="w-full p-3 bg-[#020617] border border-gray-700 rounded text-white"
//             onChange={(e) => setForm({ ...form, jobProfile: e.target.value })}
//           >
//             <option value="">Select Job Profile</option>
//             <option>Chef</option>
//             <option>Head Chef</option>
//             <option>Kitchen Helper</option>
//             <option>Restaurant Manager</option>
//             <option>Captain / Supervisor</option>
//             <option>Steward / Waiter</option>
//             <option>Housekeeping Staff</option>
//             <option>Barman</option>
//             <option>Front Office / Reception</option>
//           </select>

//           {/* NAME */}
//           <input
//             placeholder="Your Name"
//             className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />

//           {/* PHONE */}
//           <input
//             placeholder="Phone Number"
//             className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           />

//           {/* EMAIL */}
//           <input
//             placeholder="Email Address"
//             className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />

//           {/* FILE UPLOAD */}
//           <input
//             type="file"
//             className="w-full text-gray-400"
//             onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
//           />

//           {/* BUTTON */}
//           <button className="bg-[#D4AF37] text-black w-full py-3 rounded font-semibold hover:opacity-80">
//             Apply Now
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }
import { useState } from "react";

export default function ApplyJob() {

  const [form, setForm] = useState({
    jobProfile: "",
    name: "",
    phone: "",
    email: "",
    file: null
  });

  const handleSubmit = async () => {

    if (!form.jobProfile || !form.name || !form.phone || !form.email || !form.file) {
      alert("Please fill all fields ❌");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(form.file);

    reader.onload = async () => {
      const base64 = reader.result.split(",")[1];

      await fetch("https://script.google.com/macros/s/AKfycbyHVfslTjwVE5gLbud5i6ebhORJrVNsE-bDnOstNassXgeLlxwgL5YC6rn0thURBXLb/exec", {
        method: "POST",
        mode: "no-cors",   // 🔥 IMPORTANT FIX
        body: JSON.stringify({
          jobProfile: form.jobProfile,
          name: form.name,
          phone: form.phone,
          email: form.email,
          file: base64,
          fileName: form.file.name,
          fileType: form.file.type
        }),
      });

      alert("Application Submitted ✅");

      setForm({
        jobProfile: "",
        name: "",
        phone: "",
        email: "",
        file: null
      });
    };
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen flex items-center justify-center p-6">

      <div className="bg-[#0f172a] p-8 rounded-xl border border-gray-800 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">
          Apply for Job
        </h1>

        <div className="space-y-4">

          <select
            className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
            value={form.jobProfile}
            onChange={(e) => setForm({ ...form, jobProfile: e.target.value })}
          >
            <option value="">Select Job Profile</option>
            <option>Chef</option>
            <option>Head Chef</option>
            <option>Manager</option>
            <option>Steward</option>
            <option>Housekeeping</option>
          </select>

          <input
            placeholder="Name"
            className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Phone"
            className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            placeholder="Email"
            className="w-full p-3 bg-[#020617] border border-gray-700 rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="file"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          />

          <button
            onClick={handleSubmit}
            className="bg-[#D4AF37] text-black w-full py-3 rounded"
          >
            Apply Now
          </button>

        </div>

      </div>

    </div>
  );
}