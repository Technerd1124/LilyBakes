import Navbar from "./Components/Navbar.jsx";
import "./Styles/App.scss";
import Footer from "./Components/Footer.jsx";
import Catalog from "./Components/catalog.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import ImageCarousel from "./Components/swipe.jsx";
// import "../assets/icon.js";

// import "./App.css";

function App() {
  return (
    <div className="PageStruct">
      <Navbar />
      <Home />
  
      {/* 
      <Catalog />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
