import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ServicesPage from "@/react-app/pages/Services";
import PortfolioPage from "@/react-app/pages/Portfolio";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";
import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

