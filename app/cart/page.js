"use client";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const orderMessage = `
Hello, I want to order food 🍽️

${cart.map((i) => `${i.name} x ${i.qty} = ₹${i.price * i.qty}`).join("\n")}

Total Amount: ₹${total}

Please confirm my order.
`;

  const whatsappUrl = `https://wa.me/919832067907?text=${encodeURIComponent(
    orderMessage
  )}`;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-3">
          <span>{item.name}</span>
          <div className="flex gap-2">
            <button onClick={() => decreaseQty(item.id)}>−</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
        </div>
      ))}

      <hr className="my-4" />

      <p className="font-bold">Total: ₹{total}</p>

      <a
        href={whatsappUrl}
        target="_blank"
        className="block mt-4 bg-green-600 text-white text-center py-2 rounded"
      >
        Order Now on WhatsApp
      </a>
    </div>
  );
}
