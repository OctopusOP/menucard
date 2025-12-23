import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/components/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
