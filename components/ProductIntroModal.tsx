import React, { useMemo } from 'react';
import { COCKTAILS } from '../constants';
import { Cocktail } from '../types';
import { Logo } from './Logo';

interface ProductIntroModalProps {
  open: boolean;
  onClose: () => void;
}

const MiniFlavorLine = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-3 w-full">
    <span className="text-[10px] font-bold text-[#777] w-12">{label}</span>
    <div className="flex-1 h-[1px] bg-[#E9E2DA] relative">
      <div
        className="absolute w-1.5 h-1.5 bg-[#333] rounded-full top-1/2 -translate-y-1/2"
        style={{ left: `${(value / 5) * 100}%` }}
      ></div>
    </div>
  </div>
);

const DrinkPreview = ({ cocktail, size = 'md' }: { cocktail: Cocktail; size?: 'sm' | 'md' | 'lg' }) => {
  const dims =
    size === 'lg'
      ? { w: 'w-40 md:w-44', h: 'h-56 md:h-64', glass: 'w-24 md:w-28 h-40 md:h-48' }
      : size === 'sm'
        ? { w: 'w-28 md:w-32', h: 'h-40 md:h-44', glass: 'w-16 md:w-20 h-28 md:h-32' }
        : { w: 'w-32 md:w-36', h: 'h-44 md:h-48', glass: 'w-20 md:w-24 h-32 md:h-36' };

  return (
    <div className={`${dims.w} ${dims.h} bg-white/50 border border-[#E9E2DA] rounded-[18px] flex items-end justify-center overflow-hidden paper-shadow`}>
      <div className={`${dims.glass} relative mb-4 rounded-b-[26px] rounded-t-[10px] border-4 border-[#333]/10 overflow-hidden flex flex-col-reverse bg-white/40`}>
        {cocktail.ingredients.map((ing, idx) => (
          <div
            key={idx}
            style={{ height: `${ing.ratio * 10}%`, backgroundColor: ing.color, opacity: 0.75 }}
          />
        ))}
        <div className="absolute inset-0 pointer-events-none rounded-b-[26px] rounded-t-[10px] bg-gradient-to-tr from-white/10 to-transparent"></div>
      </div>
    </div>
  );
};

const MiniRecipeCard = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <div className="bg-white/80 border border-[#E9E2DA] rounded-[10px] p-4 w-[210px] paper-shadow">
      <div className="space-y-1">
        <h4 className="text-[14px] font-bold text-[#333] leading-none">{cocktail.enName}</h4>
        <p className="text-[11px] text-[#777] font-medium">{cocktail.name}</p>
      </div>

      <div className="mt-3 space-y-1">
        {cocktail.ingredients.slice(0, 4).map((ing, i) => (
          <p key={i} className="text-[10px] text-[#777] whitespace-nowrap overflow-hidden text-ellipsis">
            {ing.name}
          </p>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <MiniFlavorLine label="酒精度" value={cocktail.flavor.strength} />
        <MiniFlavorLine label="甜度" value={cocktail.flavor.sweet} />
        <MiniFlavorLine label="酸度" value={cocktail.flavor.sour} />
      </div>

      <div className="mt-3 pt-3 border-t border-[#E9E2DA] flex justify-between items-center">
        <span className="text-[10px] font-bold text-[#333]">{cocktail.tags.join(' · ')}</span>
        <span className="text-[10px] font-bold text-[#E9E2DA]">SipSip</span>
      </div>
    </div>
  );
};

export const ProductIntroModal: React.FC<ProductIntroModalProps> = ({ open, onClose }) => {
  const samples = useMemo(() => {
    // 取 3 杯做陈列（内容只是示例，重点是卡片结构）
    return [COCKTAILS[0], COCKTAILS[1], COCKTAILS[3]].filter(Boolean) as Cocktail[];
  }, []);

  if (!open) return null;

  const today = new Date();
  const dateText = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#F7F4EF] rounded-[14px] border border-[#E9E2DA] paper-shadow overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <Logo size={54} />
              <div className="leading-tight">
                <h2 className="text-[28px] md:text-[34px] font-black tracking-tighter text-[#333]">SipSip</h2>
                <p className="text-[11px] font-bold text-[#777] tracking-[0.35em] uppercase">微醺手记 · 产品介绍卡片</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-bold text-[#777] tracking-[0.35em] uppercase">with GPT</p>
              <p className="mt-1 text-[11px] font-bold text-[#333]">{dateText}</p>
            </div>
          </div>

          {/* Collage */}
          <div className="relative mt-10 md:mt-14 min-h-[520px]">
            {/* Big drink */}
            {samples[0] && (
              <div className="absolute left-1/2 top-14 -translate-x-1/2">
                <DrinkPreview cocktail={samples[0]} size="lg" />
              </div>
            )}

            {/* Card for big */}
            {samples[0] && (
              <div className="absolute left-[8%] top-10 hidden md:block">
                <MiniRecipeCard cocktail={samples[0]} />
              </div>
            )}

            {/* Top-right */}
            {samples[1] && (
              <>
                <div className="absolute right-[6%] top-6">
                  <DrinkPreview cocktail={samples[1]} size="sm" />
                </div>
                <div className="absolute right-[10%] top-[210px] hidden md:block">
                  <MiniRecipeCard cocktail={samples[1]} />
                </div>
              </>
            )}

            {/* Bottom-left */}
            {samples[2] && (
              <>
                <div className="absolute left-[6%] bottom-10">
                  <DrinkPreview cocktail={samples[2]} size="md" />
                </div>
                <div className="absolute left-[34%] bottom-8 hidden md:block">
                  <MiniRecipeCard cocktail={samples[2]} />
                </div>
              </>
            )}

            {/* Mobile: stack cards */}
            <div className="md:hidden absolute left-0 right-0 bottom-0">
              <div className="grid grid-cols-1 gap-4">
                {samples.map((c) => (
                  <MiniRecipeCard key={c.id} cocktail={c} />
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#E9E2DA] flex items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-[12px] text-[#777] leading-relaxed max-w-xl">
                一个给自家小酒吧用的配方酒单 App：左侧按基酒快速分组，右侧查看配方与风味，支持把喜欢的酒加入今日酒单并生成分享海报。
              </p>
              <p className="text-[10px] font-bold text-[#E9E2DA] tracking-[0.35em] uppercase">Mix your mood · Build your menu</p>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-bold text-[#777]">SipSip - 微醺手记</p>
              <p className="text-[10px] font-bold text-[#E9E2DA]">Product Card</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/60 border border-[#E9E2DA] text-[#333] flex items-center justify-center hover:bg-white"
          aria-label="关闭产品介绍"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
