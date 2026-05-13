import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
            <span className="font-display font-bold text-white text-xl">N</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Nexa<span className="text-violet-400">Manga</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400 group-focus-within:text-violet-400 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:bg-white/10 transition-all sm:text-sm backdrop-blur-md"
            placeholder="Search scans, groups, or genres..."
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors md:hidden">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
