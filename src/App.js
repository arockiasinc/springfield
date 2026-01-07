// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";

import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import CustomQuote from "./pages/CustomQuote";
import CabinetDoors from "./pages/CabinetDoors";
import KitchenCabinets from "./pages/KitchenCabinets";
import BathroomCabinets from "./pages/BathCabinet";
import NewHomeCabinets from "./pages/NewHomeCabinets";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WarrantyPage from "./pages/WarrantyPage";
import Careers from "./pages/Careers";
import FaqPage from "./pages/Faq";

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router basename="/sfww-r">
          <Header />

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/get-started" element={<GetStarted />} />

              <Route path="/custom-quote" element={<CustomQuote />} />
              <Route
                path="/cabinet-doors-winnipeg"
                element={<CabinetDoors />}
              />
              <Route
                path="/custom-kitchen-cabinets"
                element={<KitchenCabinets />}
              />
              <Route
                path="/custom-bathroom-cabinets-winnipeg"
                element={<BathroomCabinets />}
              />
              <Route
                path="/best-custom-cabinets-company-in-winnipeg"
                element={<NewHomeCabinets />}
              />
              <Route
                path="/custom-cabinet-manufacturer-canada"
                element={<Gallery />}
              />

              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/springfield-warranty"
                element={<WarrantyPage />}
              />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
