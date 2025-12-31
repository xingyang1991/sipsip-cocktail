import React from 'react';
import { Cocktail } from '../types';
import { SPIRIT_ZH } from '../labels';

interface CocktailCardProps {
  cocktail: Cocktail;
  onClick: () => void;
  onAdd: (e: React.MouseEvent) => void;
  isAdded?: boolean;
}

const FlavorMiniLine = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-2 w-full">
    <span className="text-[10px] font-bold text-[#777] w-12">{label}</span>
    <div className="flex-1 h-[1px] bg-[#E9E2DA] relative">
      <div
        className="absolute w-1.5 h-1.5 bg-[#333] rounded-full top-1/2 -translate-y-1/2 transition-all duration-500"
        style={{ left: `${(value / 5) * 100}%` }}
      ></div>
    </div>
  </div>
);

export const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail, onClick, onAdd, isAdded }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[4px] p-6 paper-shadow border border-[#E9E2DA]/20 flex flex-col cursor-pointer transition-all hover:brightness-95 active:scale-[0.99] group relative"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h3 className="text-[20px] font-bold text-[#333] leading-none mb-1">{cocktail.enName}</h3>
          <p className="text-[12px] text-[#777] font-medium">{cocktail.name}</p>
        </div>
        <button
          onClick={onAdd}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
            isAdded ? 'bg-[#333] text-white' : 'text-[#E9E2DA] hover:text-[#333]'
          }`}
        >
          {isAdded ? '✓' : '+'}
        </button>
      </div>

      <div className="flex gap-6 mb-8">
        {/* 配料列表 - 极简主义 */}
        <div className="flex-1 space-y-1">
          {cocktail.ingredients.slice(0, 4).map((ing, i) => (
            <p key={i} className="text-[10px] text-[#777] whitespace-nowrap overflow-hidden text-ellipsis">
              {ing.name}
            </p>
          ))}
          {cocktail.ingredients.length > 4 && <p className="text-[9px] text-[#E9E2DA]">...</p>}
        </div>

        {/* 杯内分层预览 */}
        <div className="w-16 h-20 bg-[#F7F4EF]/50 rounded-b-xl border border-[#E9E2DA]/30 flex flex-col-reverse overflow-hidden shrink-0">
          {cocktail.ingredients.map((ing, i) => (
            <div key={i} style={{ height: `${ing.ratio * 10}%`, backgroundColor: ing.color, opacity: 0.5 }} />
          ))}
        </div>
      </div>

      {/* 风味条 - 灵感自参考图 */}
      <div className="space-y-2 mb-6">
        <FlavorMiniLine label="酒精度" value={cocktail.flavor.strength} />
        <FlavorMiniLine label="甜度" value={cocktail.flavor.sweet} />
        <FlavorMiniLine label="酸度" value={cocktail.flavor.sour} />
      </div>

      {/* 底部信息栏 */}
      <div className="mt-auto pt-3 border-t border-[#E9E2DA] flex justify-between items-center">
        <span className="text-[10px] font-bold text-[#333] tracking-wider">
          {cocktail.tags[0]} · {cocktail.tags[1]}
        </span>
        <span className="text-[10px] font-bold text-[#777]">{SPIRIT_ZH[cocktail.base]}</span>
      </div>
    </div>
  );
};
