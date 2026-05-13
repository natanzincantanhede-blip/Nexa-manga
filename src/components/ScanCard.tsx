import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ScanGroup } from '../types';

interface ScanCardProps {
  scan: ScanGroup;
  index: number;
}

export default function ScanCard({ scan, index }: ScanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col glass-panel rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 border border-white/10 hover:border-violet-500/30"
    >
      {/* Banner */}
      <div className="h-32 w-full relative overflow-hidden bg-gradient-to-br from-red-900/40 to-violet-900/40">
        {scan.bannerUrl && (
          <img
            src={scan.bannerUrl}
            alt={`${scan.name} banner`}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] to-transparent opacity-90" />
      </div>

      {/* Content Area */}
      <div className="px-5 pb-6 pt-0 relative flex-1 flex flex-col">
        {/* Logo (Overlapping Banner) */}
        <div className="relative -mt-10 mb-3 flex justify-between items-end">
          <div className="w-20 h-20 rounded-2xl border-4 border-[#05050a] overflow-hidden bg-[#05050a] shadow-xl">
            <img
              src={scan.logoUrl}
              alt={`${scan.name} logo`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Info */}
        <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-violet-400 transition-colors">
          {scan.name}
        </h3>
        
        <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-1">
          {scan.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {scan.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a 
          href={scan.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 bg-white/5 hover:bg-violet-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
