import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-500" />
            <span className="text-white font-bold text-xl">DevCrow Dynamics</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} DevCrow Dynamics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}