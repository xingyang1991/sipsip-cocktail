
export enum SpiritType {
  Gin = 'Gin',
  Whiskey = 'Whiskey',
  Vodka = 'Vodka',
  Tequila = 'Tequila',
  Rum = 'Rum',
  Brandy = 'Brandy',
  Liqueur = 'Liqueur',
  NonAlcoholic = 'Non-Alcoholic'
}

export type MoodType = 'Refreshing' | 'Cozy' | 'Elegant' | 'Energetic' | 'Sophisticated' | 'Bittersweet' | 'Sweet';

export interface FlavorProfile {
  sweet: number; // 0-5
  sour: number;  // 0-5
  bitter: number; // 0-5
  strength: number; // 0-5
}

export interface Ingredient {
  name: string;
  amount: string;
  color: string;
  ratio: number;
}

export interface Step {
  instruction: string;
  icon: 'shake' | 'stir' | 'ice' | 'garnish' | 'pour';
}

export interface Cocktail {
  id: string;
  name: string;
  enName: string;
  base: SpiritType;
  mood: MoodType;
  tags: string[];
  flavor: FlavorProfile;
  difficulty: number;
  ingredients: Ingredient[];
  steps: Step[];
  tips: string;
  glass?: 'Highball' | 'Coupe' | 'Rocks' | 'Martini';
}

export interface ThemeOption {
  id: string;
  name: string;
  bg: string;
  text: string;
  accent: string;
  paperTexture?: boolean;
}
