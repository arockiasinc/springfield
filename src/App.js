// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
=======
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/footer'
import GetStarted from './pages/GetStarted';
import Contact from './pages/Contact';
<<<<<<< HEAD
import Gallery from './pages/Gallery';
import CustomQuote from './pages/CustomQuote';
import CabinetDoors from './pages/CabinetDoors';
import PrivacyPolicy from './pages/PrivacyPolicy';
import WarrantyPage from './pages/WarrantyPage';
import Careers from './pages/Careers';
import KitchenCabinets from './pages/KitchenCabinets';
import BathroomCabinets from './pages/BathCabinet';
import NewHomeCabinets from './pages/NewHomeCabinets';
import FaqPage from './pages/Faq';


function App() {

  
  return (
    <AppProvider>
    <AuthProvider>
=======


function App() {
  return (
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
   <Router basename="/sfww-r">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/get-started" element={<GetStarted />} />
<<<<<<< HEAD
           <Route path="/custom-quote" element={<CustomQuote />} />
           <Route path="/cabinet-doors-winnipeg" element={<CabinetDoors />} />
           <Route path="/custom-kitchen-cabinets" element={<KitchenCabinets />} />
           <Route path="/custom-bathroom-cabinets-winnipeg" element={<BathroomCabinets />} />
             <Route path="/best-custom-cabinets-company-in-winnipeg" element={<NewHomeCabinets />} />
           <Route path="/custom-cabinet-manufacturer-canada" element={<Gallery />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/springfield-warranty" element={<WarrantyPage />} />
           <Route path="/careers" element={<Careers />} />

            
=======
            <Route path="/contact" element={<Contact />} />
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
        </Routes>
      </main>

      <Footer />
    </Router>
<<<<<<< HEAD
    </AuthProvider>
       </AppProvider>

=======
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
  );
}

export default App;
