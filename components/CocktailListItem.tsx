import React from 'react';
import { Cocktail } from '../types';
import { MOOD_ZH, SPIRIT_ZH } from '../labels';

interface CocktailListItemProps {
  cocktail: Cocktail;
  onClick: () => void;
  onAdd: (e: React.MouseEvent) => void;
  isAdded?: boolean;
}

const DifficultyDots = ({ level }: { level: number }) => {
  const safe = Math.max(1, Math.min(5, level));
  return (
    <div className="flex items-center gap-1" aria-label={`难度 ${safe} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < safe ? 'text-[#333]' : 'text-[#E9E2DA]'}>
          ●
        </span>
      ))}
    </div>
  );
};

export const CocktailListItem: React.FC<CocktailListItemProps> = ({ cocktail, onClick, onAdd, isAdded }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/70 border border-[#E9E2DA]/30 rounded-[8px] p-4 md:p-5 paper-shadow flex gap-4 md:gap-6 items-start cursor-pointer transition-all hover:brightness-95 active:scale-[0.99]"
    >
      {/* 左侧“杯中分层”预览 */}
      <div className="w-16 md:w-20 h-20 md:h-24 bg-[#F7F4EF] rounded-[10px] border border-[#E9E2DA]/50 flex items-end justify-center overflow-hidden shrink-0">
        <div className="w-10 md:w-12 h-14 md:h-16 mb-3 rounded-b-xl border border-[#333]/15 bg-white/40 flex flex-col-reverse overflow-hidden">
          {cocktail.ingredients.map((ing, i) => (
            <div key={i} style={{ height: `${ing.ratio * 10}%`, backgroundColor: ing.color, opacity: 0.55 }} />
          ))}
        </div>
      </div>

      {/* 中间信息 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-[16px] md:text-[18px] font-bold text-[#333] leading-tight truncate">{cocktail.name}</h3>
            <p className="text-[11px] md:text-[12px] text-[#777] uppercase tracking-tight truncate">{cocktail.enName}</p>
          </div>

          {/* 右上角基酒标签 */}
          <div className="text-right shrink-0">
            <div className="text-[10px] font-black text-[#333] tracking-widest">{SPIRIT_ZH[cocktail.base]}</div>
            <div className="mt-1 text-[10px] font-bold text-[#E9E2DA] tracking-widest">{MOOD_ZH[cocktail.mood]}</div>
          </div>
        </div>

        {/* 简短介绍 */}
        <p className="mt-3 text-[12px] text-[#777] leading-relaxed line-clamp-2">
          {cocktail.tips}
        </p>

        {/* 关键信息 */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[10px] font-bold text-[#777]">
            <span className="text-[#333]">{cocktail.tags.join(' · ')}</span>
            <span className="text-[#E9E2DA]">/</span>
            <DifficultyDots level={cocktail.difficulty} />
          </div>

          <button
            onClick={onAdd}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border border-[#E9E2DA] jelly-bounce shrink-0 ${
              isAdded ? 'bg-[#333] text-white border-[#333]' : 'bg-white/60 text-[#333] hover:bg-white'
            }`}
            aria-label={isAdded ? '已加入酒单' : '加入酒单'}
          >
            {isAdded ? '✓' : '+'}
          </button>
        </div>

        {/* 配料预览 */}
        <div className="mt-3 text-[10px] text-[#777] whitespace-nowrap overflow-hidden text-ellipsis">
          {cocktail.ingredients.map((i) => i.name).join(' / ')}
        </div>
      </div>
    </div>
  );
};
