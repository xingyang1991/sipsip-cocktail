import React, { useMemo, useState } from 'react';
import { Cocktail, MoodType, SpiritType } from './types';
import { COCKTAILS, COLORS, MOODS } from './constants';
import { CocktailListItem } from './components/CocktailListItem';
import { RecipeModal } from './components/RecipeModal';
import { TodayMenu } from './components/TodayMenu';
import { Logo } from './components/Logo';
import { ProductIntroModal } from './components/ProductIntroModal';
import { MOOD_ZH, SPIRIT_ZH } from './labels';

const SPIRITS = Object.entries(COLORS.spirits).map(([key, value]) => ({
  type: key as SpiritType,
  color: value,
}));

function App() {
  const [activeTab, setActiveTab] = useState<'mixer' | 'menu'>('mixer');
  const [selectedBase, setSelectedBase] = useState<SpiritType | null>(null);
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(null);
  const [todayList, setTodayList] = useState<Cocktail[]>([]);
  const [showProductCard, setShowProductCard] = useState(false);

  const countsByBase = useMemo(() => {
    const counts: Partial<Record<SpiritType, number>> = {};
    COCKTAILS.forEach((c) => {
      counts[c.base] = (counts[c.base] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredCocktails = useMemo(() => {
    return COCKTAILS.filter((c) => {
      const matchBase = !selectedBase || c.base === selectedBase;
      const matchMood = !selectedMood || c.mood === selectedMood;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.enName.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q));
      return matchBase && matchMood && matchSearch;
    });
  }, [selectedBase, selectedMood, searchQuery]);

  const toggleTodayList = (cocktail: Cocktail) => {
    setTodayList((prev) => {
      const exists = prev.find((c) => c.id === cocktail.id);
      if (exists) return prev.filter((c) => c.id !== cocktail.id);
      return [...prev, cocktail];
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#333] flex flex-col">
      {/* 顶部栏（保留原配色与纸感风格，新增 Logo + Tabs + 产品卡片入口） */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#F7F4EF]/80 border-b border-[#E9E2DA]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Logo size={46} className="shrink-0" />
            <div className="min-w-0">
              <h1 className="text-[16px] md:text-[18px] font-black tracking-tight leading-none truncate">
                SipSip 微醺手记
              </h1>
              <p className="mt-1 text-[11px] text-[#777] font-medium truncate">
                Mix your mood · 家用调酒配方酒单
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowProductCard(true)}
              className="hidden sm:inline-flex px-3 py-2 text-[11px] font-bold border border-[#E9E2DA] rounded-[8px] bg-white/40 hover:bg-white/70 transition-colors"
            >
              产品卡片
            </button>

            {/* Tabs */}
            <div className="flex items-center bg-white/40 border border-[#E9E2DA] rounded-full p-1">
              <button
                onClick={() => setActiveTab('mixer')}
                className={`px-4 py-2 text-[11px] font-bold rounded-full transition-colors ${
                  activeTab === 'mixer' ? 'bg-[#333] text-white' : 'text-[#333] hover:bg-white/60'
                }`}
              >
                调饮
              </button>
              <button
                onClick={() => setActiveTab('menu')}
                className={`px-4 py-2 text-[11px] font-bold rounded-full transition-colors relative ${
                  activeTab === 'menu' ? 'bg-[#333] text-white' : 'text-[#333] hover:bg-white/60'
                }`}
              >
                酒单
                {todayList.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#333] text-white text-[10px] rounded-full flex items-center justify-center border border-[#F7F4EF]">
                    {todayList.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 主体 */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto overflow-hidden">
        {activeTab === 'mixer' ? (
          <div className="h-full flex">
            {/* 左侧目录：按基酒分类 */}
            <aside className="w-24 md:w-36 bg-white/30 border-r border-[#E9E2DA] overflow-y-auto scrollbar-hide py-6">
              <div className="px-3 mb-5">
                <p className="text-[10px] font-black text-[#E9E2DA] uppercase tracking-[0.35em]">目录</p>
              </div>

              <div className="space-y-1 px-2">
                <button
                  onClick={() => setSelectedBase(null)}
                  className={`w-full rounded-[10px] px-2 py-3 transition-all ${
                    !selectedBase ? 'bg-white/70 border border-[#E9E2DA] text-[#333]' : 'text-[#777] hover:bg-white/40'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E9E2DA]"></span>
                    <span className="text-[12px] font-bold">全部</span>
                    <span className="text-[9px] font-bold text-[#E9E2DA]">{COCKTAILS.length}</span>
                  </div>
                </button>

                {SPIRITS.map((spirit) => {
                  const count = countsByBase[spirit.type] || 0;
                  const disabled = count === 0;
                  const active = selectedBase === spirit.type;

                  return (
                    <button
                      key={spirit.type}
                      onClick={() => !disabled && setSelectedBase(spirit.type)}
                      className={`w-full rounded-[10px] px-2 py-3 transition-all ${
                        active
                          ? 'bg-white/70 border border-[#E9E2DA] text-[#333]'
                          : disabled
                            ? 'text-[#E9E2DA] opacity-40 cursor-not-allowed'
                            : 'text-[#777] hover:bg-white/40'
                      }`}
                      title={disabled ? '暂无该基酒配方' : SPIRIT_ZH[spirit.type]}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: spirit.color }}></span>
                        <span className="text-[12px] font-bold">{SPIRIT_ZH[spirit.type]}</span>
                        <span className="text-[9px] font-bold text-[#E9E2DA]">{count}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 小屏幕下让“产品卡片”也能入口 */}
              <div className="sm:hidden mt-6 px-2">
                <button
                  onClick={() => setShowProductCard(true)}
                  className="w-full px-3 py-3 text-[11px] font-bold border border-[#E9E2DA] rounded-[10px] bg-white/40 hover:bg-white/70 transition-colors"
                >
                  产品卡片
                </button>
              </div>
            </aside>

            {/* 右侧内容：调酒介绍列表 */}
            <section className="flex-1 overflow-y-auto scrollbar-hide px-4 md:px-10 py-6 md:py-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="text-[28px] md:text-[42px] font-black tracking-tighter text-[#333] leading-none">调酒清单</h2>
                  <p className="text-[10px] font-bold text-[#E9E2DA] uppercase tracking-[0.5em]">LEFT DIRECTORY / RIGHT RECIPES</p>
                </div>

                <div className="relative max-w-xs w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索配方 / 标签 / 心情..."
                    className="w-full bg-transparent border-b border-[#E9E2DA] py-2 text-[12px] font-medium focus:border-[#333] focus:outline-none transition-all placeholder:text-[#E9E2DA]"
                  />
                </div>
              </div>

              {/* 心情过滤（保留原有交互，但更贴近“菜单”排版） */}
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-black text-[#E9E2DA] uppercase tracking-[0.2em]">心情</span>
                <button
                  onClick={() => setSelectedMood(null)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors border ${
                    !selectedMood ? 'bg-[#333] text-white border-[#333]' : 'bg-white/40 text-[#333] border-[#E9E2DA] hover:bg-white/70'
                  }`}
                >
                  不限
                </button>
                {MOODS.map((mood) => (
                  <button
                    key={mood.type}
                    onClick={() => setSelectedMood(mood.type)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors border ${
                      selectedMood === mood.type
                        ? 'bg-[#333] text-white border-[#333]'
                        : 'bg-white/40 text-[#333] border-[#E9E2DA] hover:bg-white/70'
                    }`}
                    title={MOOD_ZH[mood.type]}
                  >
                    {MOOD_ZH[mood.type]}
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {filteredCocktails.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="text-[14px] font-bold text-[#777]">没有匹配的配方</p>
                    <p className="mt-2 text-[11px] text-[#777]/70">试试切换基酒 / 心情或清空搜索词</p>
                  </div>
                ) : (
                  filteredCocktails.map((cocktail) => (
                    <CocktailListItem
                      key={cocktail.id}
                      cocktail={cocktail}
                      onClick={() => setSelectedCocktail(cocktail)}
                      onAdd={(e) => {
                        e.stopPropagation();
                        toggleTodayList(cocktail);
                      }}
                      isAdded={todayList.some((item) => item.id === cocktail.id)}
                    />
                  ))
                )}
              </div>
            </section>
          </div>
        ) : (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <TodayMenu
              items={todayList}
              onRemove={(id) => setTodayList((prev) => prev.filter((c) => c.id !== id))}
              onClear={() => setTodayList([])}
            />
          </div>
        )}
      </main>

      {/* 详情弹层 */}
      <RecipeModal cocktail={selectedCocktail} onClose={() => setSelectedCocktail(null)} />

      {/* 产品介绍卡片（参考图三的海报式卡片布局） */}
      <ProductIntroModal open={showProductCard} onClose={() => setShowProductCard(false)} />
    </div>
  );
}

export default App;
