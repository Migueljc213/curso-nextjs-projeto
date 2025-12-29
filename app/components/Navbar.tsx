'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname()
    
    return (
      <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
        <Link
          style={{
            padding: "10px",
            color: pathname == "/" ? "yellow" : "white",
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          style={{
            padding: "10px",
            color: pathname == "/dashboard" ? "yellow" : "white",
          }}
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          style={{
            padding: "10px",
            color: pathname == "/produtos/123" ? "yellow" : "white",
          }}
          href="/produtos/123"
        >
          Produtos
        </Link>
      </nav>
    );
}