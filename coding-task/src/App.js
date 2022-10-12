import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/header/NavbarComp.js";
import FooterComp from "./components/footer/FooterComp.js";
import Body from "./components/main/MainComp.js";
import About from "./components/header/About.js";
import Api from "./components/header/Api.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Layout">
        <Router>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/about" element={<About />} />
            <Route path="/api" element={<Api />} />
            <Route index path="/home" element={<Body />} />
          </Routes>
          <FooterComp />
        </Router>
      </div>
    </div>
  );
}

export default App;
