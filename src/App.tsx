import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryFilter from './components/CategoryFilter';
import Section from './components/Section';
import ScanCard from './components/ScanCard';
import { featuredScan, popularScans, allCategories } from './data/mockData';
import { Category } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredScans = activeCategory === 'All' 
    ? popularScans 
    : popularScans.filter(scan => scan.tags.includes(activeCategory));

  return (
    <div className="min-h-screen relative selection:bg-violet-500/30 selection:text-violet-200 flex flex-col">
      {/* Background Glow Effects */}
      <div className="bg-glow" />

      <Navbar />

      <main className="flex-1">
        <HeroBanner scan={featuredScan} />

        <div className="max-w-7xl mx-auto px-6 pb-24 -mt-6 relative z-20">
          <Section title="Discover Scanlators">
            <CategoryFilter 
              categories={allCategories} 
              activeCategory={activeCategory} 
              onSelectCategory={setActiveCategory} 
            />
            
            {filteredScans.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredScans.map((scan, idx) => (
                  <ScanCard key={scan.id} scan={scan} index={idx} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-gray-400">
                <p className="text-lg">No scanlators found in this category.</p>
              </div>
            )}
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/5 bg-[#05050a]/80 backdrop-blur-xl py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-display font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              N
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              NexaManga
            </span>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} NexaManga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

