
import React from 'react';
import { Ingredient } from '../types';

interface CupLayerChartProps {
  ingredients: Ingredient[];
}

export const CupLayerChart: React.FC<CupLayerChartProps> = ({ ingredients }) => {
  const totalRatio = ingredients.reduce((sum, ing) => sum + ing.ratio, 0);

  return (
    <div className="relative w-40 h-56 mx-auto">
      {/* Cup Outline */}
      <div className="absolute inset-0 border-4 border-[#333]/10 rounded-b-[40px] rounded-t-lg overflow-hidden flex flex-col-reverse bg-white/50">
        {ingredients.map((ing, idx) => (
          <div
            key={idx}
            className="w-full transition-all duration-500 hover:brightness-95 cursor-help group relative"
            style={{ 
              height: `${(ing.ratio / totalRatio) * 100}%`,
              backgroundColor: ing.color 
            }}
          >
            {/* Tooltip on hover */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap z-10 border border-[#E9E2DA]">
              {ing.name} {ing.amount}
            </div>
          </div>
        ))}
      </div>
      
      {/* Liquid Sheen */}
      <div className="absolute inset-0 pointer-events-none rounded-b-[40px] rounded-t-lg bg-gradient-to-tr from-white/10 to-transparent"></div>
    </div>
  );
};
