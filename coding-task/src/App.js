import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/header/NavbarComp.js";
import FooterComp from "./components/footer/FooterComp.js";
import Body from "./components/main/MainComp.js";

function App() {
  return (
    <div className="App">
      <div className="Layout">
        <NavbarComp />
        <Body />
        <FooterComp />
      </div>
    </div>
  );
}

export default App;
