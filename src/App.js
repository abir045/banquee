import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./components/pages/Features";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
