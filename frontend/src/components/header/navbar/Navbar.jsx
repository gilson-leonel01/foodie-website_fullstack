import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="text-xl text-orange font-serif flex justify-center gap-12">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contacts">Contact Us</Link></li>
      </ul>
    </nav>
  );
};
