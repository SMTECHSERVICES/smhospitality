


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";

// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import ApplyJob from "./pages/ApplyJob";

// // Service Pages
// import StaffHiring from "./pages/services/StaffHiring";
// import SOP from "./pages/services/SOP";
// import HotelSetup from "./pages/services/HotelSetup";
// import Menu from "./pages/services/Menu";
// import Training from "./pages/services/Training";
// import Marketing from "./pages/services/Marketing";

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>

//           {/* Main Pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/apply-job" element={<ApplyJob />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Service Pages */}
//           <Route path="/services/staff-hiring" element={<StaffHiring />} />
//           <Route path="/services/sop" element={<SOP />} />
//           <Route path="/services/hotel-setup" element={<HotelSetup />} />
//           <Route path="/services/menu" element={<Menu />} />
//           <Route path="/services/training" element={<Training />} />
//           <Route path="/services/marketing" element={<Marketing />} />

//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ApplyJob from "./pages/ApplyJob";

// Service Pages
import StaffHiring from "./pages/services/StaffHiring";
import SOP from "./pages/services/SOP";
import HotelSetup from "./pages/services/HotelSetup";
import Menu from "./pages/services/Menu";
import Training from "./pages/services/Training";
import Marketing from "./pages/services/Marketing";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apply-job" element={<ApplyJob />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service Pages */}
          <Route path="/services/staff-hiring" element={<StaffHiring />} />
          <Route path="/services/sop" element={<SOP />} />
          <Route path="/services/hotel-setup" element={<HotelSetup />} />
          <Route path="/services/menu" element={<Menu />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/marketing" element={<Marketing />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;