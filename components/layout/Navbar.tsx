"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    if (Math.abs(diff) > 5) {
      setIsHidden(diff > 0 && latest > 100);
      setIsScrolled(latest > 20);
    }
    lastScrollY.current = latest;
  });

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Docs', href: '/docs' },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -20, opacity: 0 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
          className={cn(
            "w-full max-w-5xl rounded-full transition-all duration-300 ease-out flex items-center justify-between px-6 py-3",
            isScrolled 
              ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/40" 
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="group">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 px-8 py-2 rounded-full bg-white/0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-deep-teal transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-bright-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-deep-teal hover:bg-deep-teal/5">
                Log in
              </Button>
            </Link>
            <Link href="/dashboard">
               <Button size="sm" className="bg-deep-teal text-white hover:bg-ocean-teal shadow-md hover:shadow-lg transition-all rounded-full px-5">
                 Get Started
               </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-deep-teal p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" },
          closed: { opacity: 0, pointerEvents: "none" }
        }}
        className="fixed inset-0 z-40 bg-white/90 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-heading font-bold text-deep-teal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
            <Button size="lg" className="w-full bg-deep-teal text-white mt-4">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};