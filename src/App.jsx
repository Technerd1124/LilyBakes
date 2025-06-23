import Navbar from "./Components/Navbar.jsx";
import "./Styles/App.scss";
import Footer from "./Components/Footer.jsx";
import Catalog from "./Components/catalog.jsx";
import Contact from "./Components/Contact.jsx";
// import "./App.css";

function App() {
  return (
    <div className="PageStruct">
      <Navbar />
      <Catalog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
