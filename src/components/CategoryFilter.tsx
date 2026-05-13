import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export default function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-4 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
              : 'glass-panel text-gray-400 hover:text-white glass-panel-hover'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
