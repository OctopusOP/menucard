"use client";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function MenuClient({ menu }) {
  const [category, setCategory] = useState("All");
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const categories = ["All", ...new Set(menu.map((i) => i.item_type))];

  const filtered =
    category === "All" ? menu : menu.filter((i) => i.item_type === category);

  const getQty = (id) => cart.find((i) => i.id === id)?.qty || 0;

  return (
    <div className="p-4">
      {/* CATEGORY FILTER */}
      <div className="flex gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded ${
              cat === category ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU ITEMS */}
      {filtered.map((item) => {
        const qty = getQty(item.id);

        return (
          <div
            key={item.id}
            className="flex justify-between p-3 mb-2 bg-gray-100 rounded"
          >
            <div>
              <p className="font-semibold">{item.item_name}</p>
              <p>₹ {item.item_price}</p>
            </div>

            {qty === 0 ? (
              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.item_name,
                    price: item.item_price,
                  })
                }
                className="bg-green-500 text-white px-3 rounded"
              >
                ADD
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 bg-gray-300"
                >
                  −
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 bg-green-500 text-white"
                >
                  +
                </button>
              </div>
            )}
          </div>
        );
      })}

      <Link
        href="/cart"
        className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded"
      >
        Go to Cart →
      </Link>
    </div>
  );
}
