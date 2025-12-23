"use client";
import { useCartStore } from "@/components/cartstore";

export default function MenuItem({ item }) {
  const { cart, addItem, increaseQty, decreaseQty } = useCartStore();

  const cartItem = cart.find((i) => i.id === item.id);

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
      {/* LEFT */}
      <div>
        <p className="font-semibold">{item.item_name}</p>
        <p className="text-sm">₹ {item.item_price}</p>
      </div>

      {/* RIGHT */}
      {cartItem ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-8 h-8 rounded bg-gray-200"
          >
            -
          </button>

          <span className="w-6 text-center">{cartItem.qty}</span>

          <button
            onClick={() => increaseQty(item.id)}
            className="w-8 h-8 rounded bg-green-500 text-white"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            addItem({
              id: item.id,
              name: item.item_name,
              price: item.item_price,
            })
          }
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          ADD
        </button>
      )}
    </div>
  );
}
