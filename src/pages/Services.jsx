
// import { ChefHat, Users, ClipboardList, UtensilsCrossed, Building2, Megaphone } from "lucide-react";

// export default function Services() {
//   const services = [
//     {
//       title: "Staff Hiring",
//       desc: "Professional chefs, managers & trained hotel staff.",
//       icon: <Users size={40} />,
//     },
//     {
//       title: "SOP Development",
//       desc: "Structured systems for smooth hotel operations.",
//       icon: <ClipboardList size={40} />,
//     },
//     {
//       title: "Hotel Setup",
//       desc: "Complete restaurant & kitchen consultancy.",
//       icon: <Building2 size={40} />,
//     },
//     {
//       title: "Menu Engineering",
//       desc: "Profit-based menu planning & costing.",
//       icon: <UtensilsCrossed size={40} />,
//     },
//     {
//       title: "Staff Training",
//       desc: "Grooming & service excellence programs.",
//       icon: <ChefHat size={40} />,
//     },
//     {
//       title: "Marketing Strategy",
//       desc: "Grow your hotel with smart promotion.",
//       icon: <Megaphone size={40} />,
//     },
//   ];

//   return (
//     <div className="bg-[#020617] text-white min-h-screen p-10">

//       {/* Heading */}
//       <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
//         Our <span className="text-[#D4AF37]">Services</span>
//       </h1>

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-8">

//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 
//             hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] 
//             transition duration-300 group"
//           >

//             {/* Icon */}
//             <div className="text-[#D4AF37] mb-4 group-hover:scale-110 transition">
//               {service.icon}
//             </div>

//             {/* Title */}
//             <h2 className="text-xl font-bold mb-2">
//               {service.title}
//             </h2>

//             {/* Description */}
//             <p className="text-gray-400">
//               {service.desc}
//             </p>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

import { Link } from "react-router-dom";

const services = [
  { title: "Staff Hiring", link: "/services/staff-hiring" },
  { title: "SOP Development", link: "/services/sop" },
  { title: "Hotel Setup", link: "/services/hotel-setup" },
  { title: "Menu Engineering", link: "/services/menu" },
  { title: "Staff Training", link: "/services/training" },
  { title: "Marketing Strategy", link: "/services/marketing" },
];

export default function Services() {
  return (
    <div className="bg-[#020617] text-white min-h-screen p-10">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our <span className="text-[#D4AF37]">Services</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <Link to={service.link} key={index}>

            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 
            hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] 
            transition cursor-pointer">

              <h2 className="text-xl font-bold mb-2 text-[#D4AF37]">
                {service.title}
              </h2>

              <p className="text-gray-400">
                Click to explore service details
              </p>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}