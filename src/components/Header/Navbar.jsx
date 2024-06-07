import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Logo from "@public/Main/logo.png"
import Image from "next/image";
export function Navbar() {
  return (<>
    <header
      className="flex h-20 w-full items-center justify-between container mx-auto">
      <Link className="flex items-center" href="/">
        <Image src={Logo} className="h-20 w-20" alt="logo"/>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link className="hover:text-gray-900" href="/">
          Home
        </Link>
        <Link className="hover:text-gray-900" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-900" href="/services">
          Services
        </Link>
        <Link className="hover:text-gray-900" href="/gallery">
          Gallery
        </Link>
        <Link className="hover:text-gray-900" href="/contact">
          Contact US
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 p-6">
            <Link className="font-medium hover:underline" href="/">
              Home
            </Link>
            <Link className="font-medium hover:underline" href="/about">
              About
            </Link>
            <Link className="font-medium hover:underline" href="/services">
              Services
            </Link>
            <Link className="font-medium hover:underline" href="/gallery">
              Gallery
            </Link>
            <Link className="font-medium hover:underline" href="/contact">
              Contact US
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  </>);
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
