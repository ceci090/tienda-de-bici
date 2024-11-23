"use client";

import Image from "next/image";
import { useCart } from "@/contexts/cardContext";

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price:number;
  quantity: number;
}

interface CardProps {
  product: Product; 
}


export default function Card({ product }: CardProps) {
  const { addToCart } = useCart();

  const handleAddCart = () => {
    addToCart({ ...product, quantity: 1 });
  };
  
  return (
    <div className="bg-gradient-to-b from-orange-600 to-black rounded-lg shadow-xl p-4 max-w-sm hover:shadow-xl transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={200}
        className="rounded-lg object-cover w-full h-48"
      />
      <h2 className="mt-4 text-lg font-bold text-gray-800">{product.title}</h2>
      <p className="mt-2 text-gray-400">{product.description}</p>
      <div className="flex flex-col gap-4 justify-end items-end w-full">
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
        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          onClick={handleAddCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
