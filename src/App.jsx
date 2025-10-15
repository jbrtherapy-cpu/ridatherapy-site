import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800">
        {/* HEADER with Samarkand-inspired background */}
        <header
          className="relative"
          style={{
            backgroundImage: 'url("/pattern-samarkand.png")',
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
            backgroundAttachment: "fixed",
            backgroundColor: "rgba(247, 247, 245, 0.9)",
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm">
            <Header />
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
