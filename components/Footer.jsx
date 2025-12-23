import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black text-white items-center justify-center p-4">
      <div className="flex flex-row space-x-4 mt-5">
        <Link href={"./"}>Home</Link>
        <p>|</p>
        <Link href={"./about"}>About</Link>
        <p>|</p>
        <Link href={"./orders"}>Service</Link>
        <p>|</p>
        <Link href={"./contact"}>Contact</Link>
      </div>
      <p className="mt-5">DeepCart @2025 All Rights Reserved</p>
    </footer>
  );
}
