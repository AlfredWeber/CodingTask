import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/header/NavbarComp.js";
import FooterComp from "./components/footer/FooterComp.js";
import Body from "./components/main/MainComp.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComp />
        <Body />
        <FooterComp />
      </header>
    </div>
  );
}

export default App;
