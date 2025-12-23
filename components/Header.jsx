// app/components/Header.jsx (or wherever you keep components)
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex  max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={"/"}>
          {" "}
          <h1 className="text-2xl font-bold text-gray-900">DeepCart</h1>
        </Link>

        {/* Navigation */}
        <nav className=" space-x-6  overflow-x-auto  whitespace-nowrap hidden md:block">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            products
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            services
          </Link>
          <Link href="/orders" className="text-gray-700 hover:text-blue-600">
            Orders
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-blue-600">
            Menu
          </Link>
        </nav>

        {/* Action Button */}
        <Link
          href="#"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Login / Signup
        </Link>
      </div>
    </header>
  );
}
