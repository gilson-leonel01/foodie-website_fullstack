import React from "react";

import { Link } from "react-router-dom"
import { Instagram, Send } from "lucide-react";

import logo from "../../assets/images/logo.svg"

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return(
    <footer className="mt-32">
      <section className="flex justify-between mr-8 ml-8">
        <div className="p-2 flex flex-col gap-2 mx-4">
          <img 
            src={ logo } 
            alt="Logo" 
            className="w-32 h-32"
          />
          
          <a href="tel:+1745896102">
            <p className="text-white hover:text-gray">
              +1 (745) 896-102
            </p>
          </a>

          <a href="mailto:geral@foodie_official.com">
            <p className="text-white hover:text-gray">
              geral@foodie_official.com
            </p>
          </a>
        </div>

        <div className="flex gap-14 mx-6 items-center">
          {Array.from({ length: 3}).map((_, i) => (
            <React.Fragment key={i}>
              <div>
                <h4 className="text-yellowOrange text-base tracking-tighter">
                  Quick Links
                </h4>

                <nav>
                  <ul className="text-lg text-white">
                    <li><Link to="/" className="hover:text-gray">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray">About Us</Link></li>
                    <li><Link to="/services" className="hover:text-gray">Services</Link></li>
                    <li><Link to="/contacts" className="hover:text-gray">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-yellowOrange text-lg font-semibold indent-6">
            Subscribe our newsletter
          </h2>

          <div>
            <input 
              type="email" 
              placeholder="Email" 
              className="relative rounded-full p-4 ml-2 w-80 placeholder:px-2 outline-none" 
            />

            <div className="relative flex items-center justify-center">
              <button 
                type="button" 
                onClick={() => console.log()}
              >
                <div className="absolute right-0 text-white w-20 h-10 z-10  p-2 rounded-full bg-gradient-to-r from-red to-orange flex gap-2 text-center font-semibold uppercase -mt-12 mr-2">
                  <Send />
                  Send
                </div>            
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="p-2 mr-2 ml-2 mt-6 h-2 w-auto flex justify-center rounded-full bg-gray opacity-5"></div>

      <section className="mt-6 flex flex-wrap justify-around items-center text-center">
        <div className="text-green text-center flex gap-8 p-2 m-2">
          <a href="/notfound">Terms & Conditions</a>
          <a href="/notfound">Policy Privacy</a>
        </div>

        <p className="text-red text-center font-serif font-semibold p-2 m-2">
          Copyright &copy; <span>{ currentYear }</span> FLAMES Inc. All rights reserved &reg;	
        </p>

        <div className="flex gap-2 justify-end">
          {Array.from({ length: 4 }).map((_, i) => (
            <React.Fragment key={i}>
              <div className="p-2 rounded-full w-8 h-8 bg-gray">
                <Instagram className="text-white text-center"/>
              </div>
            </React.Fragment>  
          ))}
        </div>
      </section>
    </footer>
  );
}
