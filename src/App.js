import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Features from "./components/pages/Features";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
