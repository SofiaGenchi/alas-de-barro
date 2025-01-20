'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export function Header() {
    const pathname = usePathname()
  
    return (
      <header className="container mx-auto px-4 py-8 flex items-center justify-between">
        <Link href="/" className="text-[#ff69b4] font-cursive hover:opacity-80">
          alas de barro
        </Link>
        
        <nav className="hidden md:flex items-center gap-12">
          <Link 
            href="/" 
            className={`${
              pathname === '/' ? 'text-[#FB008A]' : 'text-gray-700'
            } hover:text-gray-900`}
          >
            inicio
          </Link>
          <Link 
            href="/productos" 
            className={`${
              pathname === '/productos' ? 'text-[#FB008A]' : 'text-gray-700'
            } hover:text-gray-900`}
          >
            productos
          </Link>
          <Link 
            href="/nosotros" 
            className={`${
              pathname === '/nosotros' ? 'text-[#FB008A]' : 'text-gray-700'
            } hover:text-gray-900`}
          >
            nosotros
          </Link>
        </nav>
  
        {/* <Button className="btn-custom">
          comprar
        </Button> */}
      </header>
    )
  }