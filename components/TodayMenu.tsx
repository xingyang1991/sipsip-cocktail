
import React, { useState } from 'react';
import { Cocktail, ThemeOption } from '../types';
import { THEMES } from '../constants';

interface TodayMenuProps {
  items: Cocktail[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const THEME_NAMES: Record<string, string> = {
  cafe: '咖啡馆风格',
  summer: '夏日气息',
  minimalist: '极简白',
  midnight: '爵士深夜',
  naturalist: '自然主义'
};

export const TodayMenu: React.FC<TodayMenuProps> = ({ items, onRemove, onClear }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(THEMES[0]);
  const [showPoster, setShowPoster] = useState(false);
  const [menuTitle, setMenuTitle] = useState('我的微醺周末');

  if (items.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-[60vh] text-center px-8">
        <div className="w-24 h-24 mb-6 opacity-20 grayscale">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3L4 11l8 8L21 9V6a4 4 0 0 0-3-4z" />
                <path d="m16 2-3 7" />
                <path d="m14 2-3 7" />
            </svg>
        </div>
        <h3 className="text-xl font-medium text-[#777] mb-2">今晚想调点什么？</h3>
        <p className="text-sm text-[#777]/60">去 调饮画廊 里挑几杯加入酒单吧</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-12 space-y-12 animate-in fade-in duration-500">
      <div className="space-y-2">
        <input 
          type="text" 
          value={menuTitle}
          onChange={(e) => setMenuTitle(e.target.value)}
          placeholder="给这杯酒单起个名字..."
          className="w-full bg-transparent text-3xl font-bold border-b-2 border-[#E9E2DA] focus:border-[#333] outline-none py-4 transition-colors text-center"
        />
        <p className="text-center text-[10px] text-[#777] uppercase tracking-widest">今日特调清单 / Today's Selection</p>
      </div>

      <div className="space-y-4">
        {items.map((cocktail) => (
          <div key={cocktail.id} className="bg-white p-6 rounded-[4px] paper-shadow flex items-center gap-6 group border border-[#E9E2DA]/20">
             <div className="w-16 h-16 bg-[#F7F4EF] flex items-center justify-center overflow-hidden shrink-0 border border-[#E9E2DA]/40">
                <div className="w-6 h-10 border border-[#333]/20 flex flex-col-reverse overflow-hidden rounded-b-sm">
                    {cocktail.ingredients.map((ing, i) => (
                        <div key={i} style={{ height: `${ing.ratio * 10}%`, backgroundColor: ing.color, opacity: 0.5 }} />
                    ))}
                </div>
             </div>
             <div className="flex-1">
                <h4 className="font-bold text-[#333] text-lg">{cocktail.name}</h4>
                <p className="text-[11px] text-[#777] uppercase tracking-tight">{cocktail.enName}</p>
             </div>
             <button 
                onClick={() => onRemove(cocktail.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-red-300 hover:text-red-500"
             >
               ✕
             </button>
          </div>
        ))}
      </div>

      <div className="pt-12 border-t border-[#E9E2DA] space-y-8">
        <h3 className="text-center text-[11px] font-bold text-[#777] tracking-[0.3em] uppercase">选择主题风格 / THEMES</h3>
        <div className="flex justify-center flex-wrap gap-6">
           {THEMES.map((theme) => (
             <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme)}
                className={`flex flex-col items-center gap-3 transition-all ${selectedTheme.id === theme.id ? 'scale-110' : 'opacity-40 grayscale hover:opacity-100'}`}
             >
                <div 
                    className="w-12 h-16 rounded shadow-sm border border-[#E9E2DA] overflow-hidden relative"
                    style={{ backgroundColor: theme.bg }}
                >
                    <div className="absolute inset-0 flex flex-col p-1.5 gap-1">
                        <div className="w-full h-1.5 bg-[#333]/10 rounded-sm"></div>
                        <div className="w-2/3 h-1 bg-[#333]/10 rounded-sm"></div>
                    </div>
                </div>
                <span className="text-[11px] font-bold">{THEME_NAMES[theme.id] || theme.name}</span>
             </button>
           ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button 
            onClick={() => setShowPoster(true)}
            className="w-full bg-[#333] text-white py-5 rounded-[4px] font-bold shadow-lg jelly-bounce text-sm tracking-[0.2em]"
        >
            生成分享海报
        </button>
        <button 
            onClick={onClear}
            className="w-full text-[#777] py-2 text-[12px] font-bold hover:text-[#333] transition-colors"
        >
            清空清单
        </button>
      </div>

      {/* 海报弹出层 */}
      {showPoster && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPoster(false)} />
          <div className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 rounded-[8px] overflow-hidden bg-white shadow-2xl">
            <div 
                className={`w-full min-h-[650px] p-12 flex flex-col relative ${selectedTheme.paperTexture ? 'paper-texture' : ''}`}
                style={{ backgroundColor: selectedTheme.bg, color: selectedTheme.text }}
            >
              <header className="mb-12 space-y-2 border-b-2 pb-8" style={{ borderColor: selectedTheme.accent }}>
                <h1 className="text-3xl font-bold">{menuTitle}</h1>
                <p className="text-[10px] opacity-60 tracking-[0.4em] uppercase">微醺手记 · 每日志 / SipSip Journal</p>
              </header>

              <div className="flex-1 space-y-12">
                <div className="grid grid-cols-1 gap-10">
                  {items.map((cocktail) => (
                    <div key={cocktail.id} className="flex gap-6 items-center">
                      <div className="w-10 h-14 shrink-0 border border-current opacity-20 flex flex-col-reverse overflow-hidden rounded-b-sm">
                        {cocktail.ingredients.map((ing, i) => (
                            <div key={i} style={{ height: `${ing.ratio * 10}%`, backgroundColor: ing.color, opacity: 0.4 }} />
                        ))}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl leading-none mb-1">{cocktail.name}</h4>
                        <p className="text-[10px] opacity-40 uppercase tracking-tighter">{cocktail.enName}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <footer className="mt-16 pt-8 border-t border-dotted flex justify-between items-end" style={{ borderColor: `${selectedTheme.text}30` }}>
                <div className="space-y-1">
                    <p className="text-2xl font-black opacity-80 tracking-tighter">SipSip</p>
                    <p className="text-[10px] opacity-40 italic">调配你的今日心情 / Mix your mood.</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded border border-current opacity-30 flex items-center justify-center p-2">
                    <div className="w-full h-full border border-current rounded-sm flex flex-wrap gap-0.5 p-0.5 opacity-60">
                        {[...Array(9)].map((_, i) => <div key={i} className={`w-1.5 h-1.5 ${i % 2 === 0 ? 'bg-current' : 'opacity-20 bg-current'}`}></div>)}
                    </div>
                </div>
              </footer>
            </div>
            
            <button 
                className="absolute top-4 right-4 w-8 h-8 bg-black/10 text-current rounded-full flex items-center justify-center hover:bg-black/20"
                onClick={() => setShowPoster(false)}
            >
              ✕
            </button>
            <div className="bg-white p-6 grid grid-cols-2 gap-4 border-t border-[#E9E2DA]">
                <button className="bg-[#333] text-white py-4 rounded-[4px] font-bold text-xs tracking-widest">保存至相册</button>
                <button className="border border-[#E9E2DA] text-[#333] py-4 rounded-[4px] font-bold text-xs tracking-widest">发送给朋友</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
