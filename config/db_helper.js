import supabase from "@/config/supabase";

// export async function addItemToCart(itemId, itemName, itemPrice) {
//   const { data, error } = await supabase
//     .from("orders_table_1")
//     .insert([{ item_id: itemId, item_name: itemName, item_price: itemPrice }]);
//   if (error) {
//     console.error("Error adding item to cart:", error);
//   }
// }

// export async function getMenuItems() {
//   const { data, error } = await supabase.from("MenuCard").select("*");

//   if (error) {
//     console.error("Error fetching cart items:", error);
//     return {};
//   }
//   return data;
// }

// export async function getMenu() {
//   const { data, error } = await supabase
//     .from("MenuCard")
//     .select("*")
//     .order("item_type", { ascending: true });

//   if (error) throw error;
//   return data;
// }
