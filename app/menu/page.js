import supabase from "@/config/supabase";
import MenuClient from "./menuClient";

export default async function MenuPage() {
  const { data: menu } = await supabase.from("MenuCard").select("*");

  return <MenuClient menu={menu || []} />;
}
