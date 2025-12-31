import { MoodType, SpiritType } from './types';

/**
 * 中文标签统一管理，避免在多个组件里重复维护。
 */

export const SPIRIT_ZH: Record<SpiritType, string> = {
  [SpiritType.Gin]: '金酒',
  [SpiritType.Whiskey]: '威士忌',
  [SpiritType.Vodka]: '伏特加',
  [SpiritType.Tequila]: '龙舌兰',
  [SpiritType.Rum]: '朗姆酒',
  [SpiritType.Brandy]: '白兰地',
  [SpiritType.Liqueur]: '力娇酒',
  [SpiritType.NonAlcoholic]: '无酒精',
};

export const MOOD_ZH: Record<MoodType, string> = {
  Refreshing: '清爽',
  Cozy: '惬意',
  Elegant: '优雅',
  Energetic: '活力',
  Sophisticated: '深邃',
  Bittersweet: '苦甜',
  Sweet: '甜美',
};
