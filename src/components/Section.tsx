import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface SectionProps {
  title: string;
  children: ReactNode;
  onViewAll?: () => void;
}

export default function Section({ title, children, onViewAll }: SectionProps) {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">
          {title}
        </h2>
        {onViewAll && (
          <button 
            onClick={onViewAll}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
          >
            View All 
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
