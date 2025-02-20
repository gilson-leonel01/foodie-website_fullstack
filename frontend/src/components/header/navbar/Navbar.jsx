import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="text-xl text-orange font-serif flex justify-center gap-12 uppercase">
        <li><Link to="/" className="hover:text-[#9A4F00]">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#9A4F00]">About Us</Link></li>
        <li><Link to="/services" className="hover:text-[#9A4F00]">Services</Link></li>
        <li><Link to="/contacts" className="hover:text-[#9A4F00]">Contact Us</Link></li>
      </ul>
    </nav>
  );
};
