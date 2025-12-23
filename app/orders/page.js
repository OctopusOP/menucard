"use client";
import { useEffect, useState } from "react";
import supabase from "@/config/supabase";
import MenuItem from "@/components/MenuItem";

export default function OrdersPage() {
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await supabase.from("MenuCard").select("*");

      setMenu(data || []);
    };

    fetchMenu();
  }, []);

  const categories = ["All", ...new Set(menu.map((item) => item.item_type))];

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((i) => i.item_type === selectedCategory);

  return (
    <div className="p-4">
      {/* CATEGORY BAR */}
      <div className="flex gap-2 overflow-x-auto mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
              ${
                selectedCategory === cat
                  ? "bg-red-500 text-white"
                  : "bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU LIST */}
      <div className="flex flex-col gap-3">
        {filteredMenu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
