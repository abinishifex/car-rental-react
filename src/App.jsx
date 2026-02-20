import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contact";
import CarDetail from "./pages/CarDetail";

function App() {
  return (
    
    <Routes>
      <Route element= {<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/cars/:id" element = {<CarDetail/>} />
      </Route>
    </Routes>
  );
}
  

export default App;
