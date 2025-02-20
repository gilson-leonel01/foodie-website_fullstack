import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contacts from "../pages/contacts/Contacts";
import NotFound from "../pages/notfound/NotFound";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
