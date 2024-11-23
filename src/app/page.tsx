"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import Card from "@/components/cards";
import { CartProvider } from "@/contexts/cardContext"; // Asegúrate de que esta importación esté correcta
import { useState } from "react";
import Cart from "@/components/cart";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    // CartProvider debe envolver toda la página para que todos los componentes puedan usar useCart
    <CartProvider>
      <Navbar toggleCart={toggleCart} />

      {/* Modal del carrito */}
      {isCartOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={toggleCart}
          >
            <div
              className="bg-gray-700 bg-opacity-20 text-white p-8 rounded-lg shadow-md max-w-lg w-full backdrop-blur-lg font-[family-name:var(--font-geist-mono)]"
              onClick={(e) => e.stopPropagation()} // Previene que el modal se cierre si se hace clic dentro
            >
              <h2 className="font-bold mb-4">Tu Carrito</h2>
              <Cart /> {/* Componente que muestra los productos en el carrito */}
              <button
                className="mt-4 bg-transparent border-2 text-white rounded-lg px-4 py-2 hover:bg-red-600 w-50"
                onClick={toggleCart}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}


      {/* Fondo de la página */}
      <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-centre h-screen"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Carousel />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Aquí insertas el componente Cards */}
            <Card
              product={{
                id: "3",  // Asegúrate de tener un id único para cada producto
                image: "/images/bici3.jpg",
                title: "Bici 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia neque vitae pulvinar vulputate. Donec in fermentum nisl. Proin hendrerit eros ut augue mattis cursus",
                price: 100, // Añade un precio de ejemplo
                quantity: 1, // Definir la cantidad por defecto
              }}
            />
            <Card
              product={{
                id: "4",  // Asegúrate de tener un id único para cada producto
                image: "/images/bici4.jpg",
                title: "Bici 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia neque vitae pulvinar vulputate. Donec in fermentum nisl. Proin hendrerit eros ut augue mattis cursus",
                price: 100, // Añade un precio de ejemplo
                quantity: 1, // Definir la cantidad por defecto
              }}            />
            <Card
              product={{
                id: "5",  // Asegúrate de tener un id único para cada producto
                image: "/images/bici5.jpg",
                title: "Bici 5",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia neque vitae pulvinar vulputate. Donec in fermentum nisl. Proin hendrerit eros ut augue mattis cursus",
                price: 100, // Añade un precio de ejemplo
                quantity: 1, // Definir la cantidad por defecto
              }}            />
            <Card
              product={{
                id: "6",  // Asegúrate de tener un id único para cada producto
                image: "/images/bici6.jpg",
                title: "Bici 6",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia neque vitae pulvinar vulputate. Donec in fermentum nisl. Proin hendrerit eros ut augue mattis cursus",
                price: 100, // Añade un precio de ejemplo
                quantity: 1, // Definir la cantidad por defecto
              }}            />
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </CartProvider>
  );
}
