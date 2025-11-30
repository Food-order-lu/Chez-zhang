"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "À Propos", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-white">
                    Chez <span className="text-primary">Zhang</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/80 hover:text-primary transition-colors text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        className="ml-4"
                        data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
                        data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
                    >
                        Commander
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/80 hover:text-primary transition-colors text-lg py-2 border-b border-white/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                className="w-full mt-4"
                                data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
                                data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
                            >
                                Commander
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
