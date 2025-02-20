import { Search } from "lucide-react"

import Navbar from "./navbar/Navbar"

import logo from "../../assets/images/logo.svg"

export default function Header() {
  return(
    <header className="flex justify-around items-center p-6">
      <img 
        src={ logo } 
        alt="Logo" 
        className="w-20 h-20 pointer-events-none user-drag-none -webkit-user-drag-none"
      />
      
      <Navbar />
      <Elements />
    </header>
  );
}

export function Elements() {
  return(
    <div className="flex flex-row justify-center gap-4 text-base font-serif">
      <button 
        type="button" 
        className="px-2 py-2 border border-red text-transparent bg-clip-text bg-gradient-to-r from-red to-orange rounded-full hover:border-orange transition"
        onClick={() => console.log()}
      >
        Order Now
      </button>

      <button 
        type="button" 
        className="bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={() => console.log()}
      >
        <Search /> 
      </button>
    </div>
  )
}