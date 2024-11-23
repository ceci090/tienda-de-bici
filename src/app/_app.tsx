import { CartProvider } from "@/contexts/cardContext"; // Importa tu proveedor de contexto
import "../styles/globals.css";
// Recibe las props globales de la app
export default function App({ Component, pageProps }: any) {
  return (
    <CartProvider>
      {/* Renderiza la página actual */}
      <Component {...pageProps} />
    </CartProvider>
  );
}
