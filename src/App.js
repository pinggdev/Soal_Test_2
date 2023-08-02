import "./App.scss";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
