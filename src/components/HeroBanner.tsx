import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ScanGroup } from '../types';

interface HeroBannerProps {
  scan: ScanGroup;
}

export default function HeroBanner({ scan }: HeroBannerProps) {
  return (
    <div className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16">
      {/* Background Image & Gradients */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900/40 to-[#05050a]">
        {scan.bannerUrl && (
          <img
            src={scan.bannerUrl}
            alt={scan.name}
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl flex flex-col md:flex-row gap-6 items-start md:items-center"
        >
          {/* Logo */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border-4 border-white/10 overflow-hidden shadow-2xl shrink-0">
            <img
              src={scan.logoUrl}
              alt={`${scan.name} logo`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full backdrop-blur-md">
                Featured Scanlator
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 leading-[1.1] tracking-tight">
              {scan.name}
            </h1>

            <p className="text-gray-300 text-base md:text-lg mb-6 line-clamp-2 leading-relaxed max-w-xl">
              {scan.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={scan.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 duration-200"
              >
                Visit Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
