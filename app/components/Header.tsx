'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/initiatives', label: 'Initiatives' },
        { href: '/get-involved', label: 'Get Involved' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-blue-600">CycleZLab</div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
