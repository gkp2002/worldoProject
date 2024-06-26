import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Services from "./Components/Services/Services";
import ParticlesComponent from "./Components/Particle/ParticlesComponent";
import Calendy from "./Components/ScheduleMeeting/Calendy";
import BrandSolution from "./Pages/Ourservices/BrandSolution";
import Design from "./Pages/Ourservices/Design";
import Development from "./Pages/Ourservices/Development";
import TechSolution from "./Pages/Ourservices/TechSolution";
import Ecommerce from "./Pages/Ourservices/Ecommerce";
import Marketing from "./Pages/Ourservices/Marketing";
import markg from "./assets/mrkg.png";
import tech from "./assets/tech.png";
import develop from "./assets/develop.png";
import brand from "./assets/design1.png";
import ecomm from "./assets/ecomm.png";
import design from "./assets/design2.png";
import CareersPage from "./Components/Careers/CareersPage";
import Whatsapp from "./Components/Whatsapp";
import what from "./assets/whats.png"

function App() {
  return (
    <div className=" w-full">
      <div className="md:flex hidden"></div>
      <Whatsapp img={what}/>
      <Navbar />
      <ParticlesComponent id="particle" />
      <Routes >
        <Route path="/" element={<Home />}>
          <Route index element={<BrandSolution img={brand} />} />
          <Route
            path="/BrandSolution"
            element={<BrandSolution img={brand} />}
          />
          <Route path="/Design" element={<Design img={design} />} />
          <Route path="/Development" element={<Development img={develop} />} />
          <Route path="/TechSoluton" element={<TechSolution img={tech} />} />
          <Route path="E-commerce" element={<Ecommerce img={ecomm} />} />
          <Route path="Marketing" element={<Marketing img={markg} />} />
        </Route>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/Careers" element={<CareersPage />} />
        <Route path="/Schedulemeeting" element={<Calendy />} />
        <Route path="/Services" element={<Services />}>
          <Route index element={<BrandSolution img={brand} />} />
          <Route
            path="BrandSolution"
            element={<BrandSolution img={brand} />}
          />
          <Route path="Design" element={<Design img={design} />} />
          <Route path="Development" element={<Development img={develop} />} />
          <Route path="TechSoluton" element={<TechSolution img={tech} />} />
          <Route path="E-commerce" element={<Ecommerce img={ecomm} />} />
          <Route path="Marketing" element={<Marketing img={markg} />} />
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
