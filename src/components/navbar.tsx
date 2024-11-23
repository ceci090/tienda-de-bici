"use client";

import { useState } from "react";
import { useCart } from "@/contexts/cardContext";
import Image from "next/image";
import Link from "next/link";


interface NavbarProps {
  toggleCart: () => void;
}

export default function Navbar({ toggleCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const { cart } = useCart(); // Desestructuramos el hook useCart
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-gray bg-opacity-50 text-white p-4 shadow-md fixed top-0 left-0 w-full z-10 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center font-[family-name:var(--font-geist-mono)]">
        <div className="text-lg font-bold">
          <Image src="/images/Logo.png" alt="Logo" width={70} height={70} />
          <Link href="/">Bici-Zone</Link>
        </div>

        <button className="sm:hidden block text-white font-[family-name:var(--font-geist-mono)]" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>

        <form className="relative hidden sm:block">
          <input type="text" placeholder="Buscar..." className="bg-black bg-opacity-20 text-white p-2 rounded-full w-80" />
          <button type="submit" className="absolute right-0 top-0 px-4 py-2 bg-transparent text-white rounded-r-md">🔍</button>
        </form>

        <ul className={`sm:flex space-x-6 sm:space-y-0 sm:static sm:flex-row sm:opacity-100 ${isOpen ? "flex flex-col space-y-4 opacity-100" : "hidden"}`}>
          <li>
            <Link href="/perfil" className="hover:text-gray-300">Perfil</Link>
          </li>

          {/* Carrito */}
          <nav>
            <div className="flex items-center gap-4">
              <button onClick={toggleCart}>
                🛒 ({cart.length}) {/* Muestra la cantidad de productos en el carrito */}
              </button>
            </div>
          </nav>
        </ul>
      </div>
    </nav>
  );
}