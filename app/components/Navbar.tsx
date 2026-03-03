"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

/* -------------------------------
   Desktop Hover Link (Underline)
-------------------------------- */
function NavHoverLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <a
      href={pathname === "/" ? href : `/${href}`}
      onClick={handleClick}
      className="
        relative inline-block
        text-sm font-medium text-gray-300
        transition-colors duration-200
        hover:text-white

        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full
        after:origin-bottom-right after:scale-x-0
        after:bg-white/80
        after:transition-transform after:duration-300
        after:ease-[cubic-bezier(0.65,0.05,0.36,1)]
        hover:after:origin-bottom-left hover:after:scale-x-100
      "
    >
      {children}
    </a>
  );
}

/* -------------------------------
   Navbar
-------------------------------- */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMobileClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              href="/"
              className="
                flex items-center justify-center 
                 rounded-md
                bg-white/5 backdrop-blur-md p-0.5 xl:p-0.5
                border border-white/10 
                hover:bg-white/10 hover:border-white/20 
                transition-all duration-300
              "
            >
              <Image
                src="/favicon.ico"
                alt="Kaif Shaikh Logo"
                width={40}
                height={40}
                className="h-10 w-10 xl:h-11 xl:w-11 object-contain rounded-md"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavHoverLink key={item.name} href={item.href}>
                {item.name}
              </NavHoverLink>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a
                href="/KaifShaikh-Resume.pdf"
                download="KaifShaikh-Resume.pdf"
                className="
                  group relative flex items-center gap-2 
                  px-5 py-2.5 rounded-full 
                  text-sm font-semibold
                  bg-white/5 backdrop-blur-sm
                  border border-white/10
                  hover:border-white/20 hover:bg-white/10
                  transition-all duration-300
                  hover:-translate-y-0.5
                  shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)]
                  hover:shadow-[0_8px_20px_-10px_rgba(255,255,255,0.2)]
                  overflow-hidden
                "
              >
                {/* Shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <Download className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Resume
                </span>

                {/* Subtle outer glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 blur-md -z-10" />
              </a>
              <Link
                href="tel:9920489366"
                target="_blank"
                className="
                  bg-white text-black 
                  px-5 py-2.5 rounded-full 
                  font-semibold font-inter text-sm 
                  hover:bg-gray-200 hover:scale-105
                  active:scale-95
                  transition-all duration-300
                  shadow-lg shadow-white/5
                "
              >
                Book a call
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - FIXED */}
          <div className="flex-shrink-0 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - FIXED positioning */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={pathname === "/" ? item.href : `/${item.href}`}
                onClick={(e) => handleMobileClick(e, item.href)}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition"
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-4 space-y-4">
              <a
                href="/KaifShaikh-Resume.pdf"
                download="KaifShaikh-Resume.pdf"
                className="
                  flex items-center justify-center gap-3 w-full 
                  bg-gradient-to-r from-white/5 to-white/10
                  border border-white/10 text-white 
                  px-4 py-3 rounded-xl font-bold
                  hover:bg-white/15 transition-all
                  relative overflow-hidden
                "
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <Link
                href="tel:9920489366"
                target="_blank"
                className="
                  block w-full font-mono text-center 
                  bg-white text-black 
                  px-4 py-3 rounded-xl font-bold 
                  hover:bg-gray-100 transition-colors
                  shadow-[0_0_20px_rgba(255,255,255,0.1)]
                "
                onClick={() => setIsOpen(false)}
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
