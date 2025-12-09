"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/impact", label: "Impact" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "#", label: "Contact" },
];

// px-2 2xl:px-8 xlaptop:px-4

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-xs">
      <div className="h-16 flex items-center justify-between w-full max-w-7xl mx-auto px-2 laptop:px-8 desktop:px-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/dsws_brand_logo.png"
              alt="DSWS Logo"
              width={40}
              height={40}
            />
            <h2 className="text-lg font-bold tracking-tight">DSWS</h2>
          </div>
        </Link>

        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-foreground transition-colors",
                  pathname === link.href && "text-brand"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button variant="primary">Donate</Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 px-4">
            <SheetTitle className="mt-4 text-lg font-bold">DSWS</SheetTitle>
            <nav className="flex flex-col gap-4 mt-0">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                    pathname === link.href && "text-brand"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" className="mt-4">
                Donate
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
