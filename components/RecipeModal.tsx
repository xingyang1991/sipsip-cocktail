import React from 'react';
import { Cocktail } from '../types';
import { CupLayerChart } from './CupLayerChart';
import { MOOD_ZH } from '../labels';

interface RecipeModalProps {
  cocktail: Cocktail | null;
  onClose: () => void;
}

const FlavorSlider = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-4 w-full group">
    <span className="text-[11px] font-bold text-[#777] w-16 tracking-wider">{label}</span>
    <div className="flex-1 h-[2px] bg-[#E9E2DA] relative">
      <div
        className="absolute w-2 h-2 bg-[#333] rounded-full top-1/2 -translate-y-1/2 shadow-sm"
        style={{ left: `${(value / 5) * 100}%` }}
      ></div>
      {/* 刻度线 */}
      {[0, 1, 2, 3, 4, 5].map((m) => (
        <div
          key={m}
          className="absolute w-[1px] h-2 bg-[#E9E2DA] -translate-y-1/2 top-1/2"
          style={{ left: `${(m / 5) * 100}%` }}
        ></div>
      ))}
    </div>
  </div>
);

export const RecipeModal: React.FC<RecipeModalProps> = ({ cocktail, onClose }) => {
  if (!cocktail) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#F7F4EF] w-full max-w-2xl rounded-[12px] h-[85vh] overflow-hidden paper-shadow flex flex-col animate-in fade-in zoom-in-95 duration-300">
        <div className="p-10 flex-1 overflow-y-auto space-y-12">
          {/* 头部区域 */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 max-w-sm">
              <div className="space-y-1">
                <h2 className="text-[32px] font-bold text-[#333] leading-tight">{cocktail.enName}</h2>
                <p className="text-sm font-medium text-[#777]">{cocktail.name}</p>
              </div>

              <div className="pt-4 space-y-2">
                {cocktail.ingredients.map((ing, idx) => (
                  <div key={idx} className="flex justify-between items-end border-b border-[#E9E2DA]/30 pb-1">
                    <span className="text-[13px] text-[#333]">{ing.name}</span>
                    <span className="text-[11px] text-[#777] font-bold">{ing.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center bg-white/40 rounded-2xl p-8 border border-white">
              <CupLayerChart ingredients={cocktail.ingredients} />
              <div className="mt-8 space-y-3 w-full max-w-[200px]">
                <FlavorSlider label="酒精度" value={cocktail.flavor.strength} />
                <FlavorSlider label="甜度" value={cocktail.flavor.sweet} />
                <FlavorSlider label="酸度" value={cocktail.flavor.sour} />
                <FlavorSlider label="苦度" value={cocktail.flavor.bitter} />
              </div>
            </div>
          </div>

          {/* 步骤与笔记 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[#E9E2DA]">
            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-[#333] uppercase tracking-[0.3em]">Method / 调制方法</h3>
              <div className="space-y-4">
                {cocktail.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-[11px] font-bold text-[#E9E2DA] pt-1">{String(idx + 1).padStart(2, '0')}</span>
                    <p className="text-[13px] text-[#333] leading-relaxed">{step.instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-[#333] uppercase tracking-[0.3em]">Journal / 手记心得</h3>
              <div className="bg-white/60 p-6 rounded-xl border border-white relative">
                <div className="absolute top-0 right-6 w-8 h-2 bg-[#E9E2DA]/50"></div>
                <p className="text-[13px] text-[#777] italic leading-relaxed">"{cocktail.tips}"</p>
                <div className="mt-4 text-[11px] font-bold text-[#E9E2DA]"># {MOOD_ZH[cocktail.mood]}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 py-4 bg-white/80 border-t border-[#E9E2DA] flex justify-between items-center text-[11px] font-bold text-[#777]">
          <span>建议使用 {cocktail.glass || '经典'} 杯型</span>
          <button onClick={onClose} className="text-[#333] hover:underline">
            关闭详情
          </button>
        </div>
      </div>
    </div>
  );
};
