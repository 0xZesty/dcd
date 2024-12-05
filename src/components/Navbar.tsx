import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './ui/Logo'; // Certifique-se de que o caminho está correto

export function Navbar() {
  return (
    // <nav className="bg-black/95 fixed w-full z-50 border-b border-zinc-800">
    <nav className="bg-black/95 fixed w-full z-50 border-zinc-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Logo /> {/* Exibe o logo SVG */}
            </div>
          </div>
          {/* Links de navegação */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          {/* Menu Mobile */}
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}
