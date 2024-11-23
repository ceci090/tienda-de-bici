// components/Cart.tsx
import { useCart } from "@/contexts/cardContext";

export default function Cart(){
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
<div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg ">
  <h2 className="text-white font-bold mb-4">Carrito</h2>
  {cart.length === 0 ? (
    <p className="text-white">El carrito está vacío</p>
  ) : (
    <div>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center text-white">
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p>
                ${item.price} x {item.quantity}
              </p>
            </div>
            <button
              className="bg-transparent border-2 border-red-500 text-red-500 rounded-lg px-4 py-2 hover:bg-red-200 hover:text-white"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="font-bold">Total: ${total.toFixed(2)}</p>
        <button
          className="bg-transparent border-2 border-gray-500 text-gray-500 rounded-lg px-4 py-2 hover:bg-gray-500 hover:text-white w-full mt-4"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  )}
</div>
  );
};

