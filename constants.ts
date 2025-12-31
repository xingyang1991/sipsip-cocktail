
import { SpiritType, Cocktail, ThemeOption, MoodType } from './types';

export const COLORS = {
  background: '#F7F4EF',
  surface: '#FFFFFF',
  text: '#333333',
  subtext: '#777777',
  divider: '#E9E2DA',
  spirits: {
    [SpiritType.Gin]: '#BFD7C1',
    [SpiritType.Whiskey]: '#E6D7A6',
    [SpiritType.Vodka]: '#E7C1C7',
    [SpiritType.Tequila]: '#BFD2E8',
    [SpiritType.Rum]: '#E3C7A5',
    [SpiritType.Brandy]: '#C7A58B',
    [SpiritType.Liqueur]: '#C9C3D8',
    [SpiritType.NonAlcoholic]: '#C9D3C7',
  }
};

export const MOODS: { type: MoodType; color: string }[] = [
  { type: 'Refreshing', color: '#BFD7C1' },
  { type: 'Cozy', color: '#E6D7A6' },
  { type: 'Elegant', color: '#C9C3D8' },
  { type: 'Energetic', color: '#BFD2E8' },
  { type: 'Sophisticated', color: '#C7A58B' },
  { type: 'Bittersweet', color: '#E7C1C7' },
  { type: 'Sweet', color: '#E3C7A5' },
];

export const THEMES: ThemeOption[] = [
  { id: 'cafe', name: 'Cafe Style', bg: '#F3E8C9', text: '#4A3728', accent: '#A68B6D', paperTexture: true },
  { id: 'summer', name: 'Summer Vibe', bg: '#FFFFFF', text: '#333333', accent: '#BFD2E8' },
  { id: 'minimalist', name: 'Minimalist', bg: '#F7F4EF', text: '#333333', accent: '#E9E2DA' }
];

export const COCKTAILS: Cocktail[] = [
  // ===== 原有酒品 =====
  {
    id: '1',
    name: '金汤力',
    enName: 'Gin & Tonic',
    base: SpiritType.Gin,
    mood: 'Refreshing',
    tags: ['爽脆', '气泡'],
    flavor: { sweet: 2, sour: 4, bitter: 3, strength: 2 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '金酒 / Gin', amount: '45ml', color: '#BFD7C1', ratio: 3 },
      { name: '汤力水 / Tonic', amount: '120ml', color: '#E0F0E3', ratio: 7 },
      { name: '青柠 / Lime', amount: '1 Wedge', color: '#A8C69F', ratio: 1 }
    ],
    steps: [
      { instruction: '冰块入杯', icon: 'ice' },
      { instruction: '倒入基酒与滋补水', icon: 'pour' },
      { instruction: '搅拌并点缀青柠', icon: 'garnish' }
    ],
    tips: '杯壁挂满水雾时饮用口感最佳。'
  },
  {
    id: '2',
    name: '古典酒',
    enName: 'Old Fashioned',
    base: SpiritType.Whiskey,
    mood: 'Sophisticated',
    tags: ['醇厚', '烟熏'],
    flavor: { sweet: 3, sour: 1, bitter: 4, strength: 5 },
    difficulty: 2,
    glass: 'Rocks',
    ingredients: [
      { name: '威士忌 / Bourbon', amount: '60ml', color: '#E6D7A6', ratio: 8 },
      { name: '苦精 / Bitters', amount: '2 Dashes', color: '#8B4513', ratio: 1 },
      { name: '方糖 / Sugar', amount: '1 Cube', color: '#FFFFFF', ratio: 1 }
    ],
    steps: [
      { instruction: '杯底化开糖与苦精', icon: 'stir' },
      { instruction: '入冰并倒入威士忌', icon: 'ice' },
      { instruction: '缓慢搅拌均匀', icon: 'stir' }
    ],
    tips: '一小块橙皮的油脂能提升整体香气。'
  },
  {
    id: '3',
    name: '莫吉托',
    enName: 'Mojito',
    base: SpiritType.Rum,
    mood: 'Energetic',
    tags: ['薄荷', '清新'],
    flavor: { sweet: 4, sour: 4, bitter: 1, strength: 2 },
    difficulty: 3,
    glass: 'Highball',
    ingredients: [
      { name: '朗姆酒 / White Rum', amount: '45ml', color: '#E3C7A5', ratio: 4 },
      { name: '苏打水 / Soda', amount: '60ml', color: '#F0F8FF', ratio: 4 },
      { name: '薄荷 / Mint', amount: '10 Leaves', color: '#98FB98', ratio: 1 }
    ],
    steps: [
      { instruction: '轻压薄荷与青柠', icon: 'stir' },
      { instruction: '加碎冰与朗姆酒', icon: 'shake' },
      { instruction: '苏打水补满', icon: 'pour' }
    ],
    tips: '不要过度揉搓薄荷叶，否则会产生苦味。'
  },
  {
    id: '4',
    name: '玛格丽特',
    enName: 'Margarita',
    base: SpiritType.Tequila,
    mood: 'Bittersweet',
    tags: ['酸甜', '经典'],
    flavor: { sweet: 3, sour: 5, bitter: 2, strength: 4 },
    difficulty: 2,
    glass: 'Coupe',
    ingredients: [
      { name: '特基拉 / Tequila', amount: '45ml', color: '#BFD2E8', ratio: 5 },
      { name: '橙酒 / Cointreau', amount: '15ml', color: '#FADADD', ratio: 2 },
      { name: '青柠汁 / Lime Juice', amount: '30ml', color: '#D4EFDF', ratio: 3 }
    ],
    steps: [
      { instruction: '制作盐边', icon: 'garnish' },
      { instruction: '加冰摇匀', icon: 'shake' },
      { instruction: '滤入杯中', icon: 'pour' }
    ],
    tips: '杯缘的盐能中和青柠的锐利酸度。'
  },

  // ===== 新增酒品 =====
  
  // 金酒类
  {
    id: '5',
    name: '尼格罗尼',
    enName: 'Negroni',
    base: SpiritType.Gin,
    mood: 'Bittersweet',
    tags: ['苦味', '意式'],
    flavor: { sweet: 2, sour: 1, bitter: 5, strength: 4 },
    difficulty: 1,
    glass: 'Rocks',
    ingredients: [
      { name: '金酒 / Gin', amount: '30ml', color: '#BFD7C1', ratio: 3 },
      { name: '金巴利 / Campari', amount: '30ml', color: '#DC143C', ratio: 3 },
      { name: '甜味美思 / Sweet Vermouth', amount: '30ml', color: '#8B0000', ratio: 3 }
    ],
    steps: [
      { instruction: '加入冰块', icon: 'ice' },
      { instruction: '倒入所有材料', icon: 'pour' },
      { instruction: '搅拌均匀，橙皮装饰', icon: 'garnish' }
    ],
    tips: '等比例配方是经典，可根据口味微调金巴利用量。'
  },
  {
    id: '6',
    name: '干马天尼',
    enName: 'Dry Martini',
    base: SpiritType.Gin,
    mood: 'Elegant',
    tags: ['经典', '优雅'],
    flavor: { sweet: 1, sour: 1, bitter: 2, strength: 5 },
    difficulty: 2,
    glass: 'Martini',
    ingredients: [
      { name: '金酒 / Gin', amount: '60ml', color: '#BFD7C1', ratio: 6 },
      { name: '干味美思 / Dry Vermouth', amount: '10ml', color: '#F5F5DC', ratio: 1 }
    ],
    steps: [
      { instruction: '冰镇马天尼杯', icon: 'ice' },
      { instruction: '搅拌金酒与味美思', icon: 'stir' },
      { instruction: '滤入杯中，橄榄装饰', icon: 'garnish' }
    ],
    tips: '鸡尾酒之王，搅拌而非摇晃才能保持清澈。'
  },
  {
    id: '7',
    name: '吉姆雷特',
    enName: 'Gimlet',
    base: SpiritType.Gin,
    mood: 'Refreshing',
    tags: ['酸爽', '简约'],
    flavor: { sweet: 3, sour: 5, bitter: 1, strength: 4 },
    difficulty: 1,
    glass: 'Coupe',
    ingredients: [
      { name: '金酒 / Gin', amount: '60ml', color: '#BFD7C1', ratio: 6 },
      { name: '青柠汁 / Lime Juice', amount: '20ml', color: '#D4EFDF', ratio: 2 },
      { name: '糖浆 / Simple Syrup', amount: '15ml', color: '#FFFFFF', ratio: 1 }
    ],
    steps: [
      { instruction: '加冰摇匀所有材料', icon: 'shake' },
      { instruction: '滤入冰镇酒杯', icon: 'pour' },
      { instruction: '青柠片装饰', icon: 'garnish' }
    ],
    tips: '新鲜青柠汁是关键，瓶装果汁无法替代。'
  },
  {
    id: '8',
    name: '飞行',
    enName: 'Aviation',
    base: SpiritType.Gin,
    mood: 'Elegant',
    tags: ['花香', '紫罗兰'],
    flavor: { sweet: 3, sour: 4, bitter: 2, strength: 4 },
    difficulty: 3,
    glass: 'Coupe',
    ingredients: [
      { name: '金酒 / Gin', amount: '45ml', color: '#BFD7C1', ratio: 5 },
      { name: '樱桃利口酒 / Maraschino', amount: '15ml', color: '#FFB6C1', ratio: 2 },
      { name: '紫罗兰利口酒 / Crème de Violette', amount: '7ml', color: '#9370DB', ratio: 1 },
      { name: '柠檬汁 / Lemon Juice', amount: '15ml', color: '#FFFACD', ratio: 2 }
    ],
    steps: [
      { instruction: '加冰摇匀所有材料', icon: 'shake' },
      { instruction: '双重过滤入杯', icon: 'pour' },
      { instruction: '樱桃装饰', icon: 'garnish' }
    ],
    tips: '紫罗兰利口酒赋予独特的淡紫色泽和花香。'
  },

  // 威士忌类
  {
    id: '9',
    name: '威士忌酸',
    enName: 'Whiskey Sour',
    base: SpiritType.Whiskey,
    mood: 'Bittersweet',
    tags: ['酸甜', '蛋清'],
    flavor: { sweet: 3, sour: 5, bitter: 2, strength: 4 },
    difficulty: 2,
    glass: 'Rocks',
    ingredients: [
      { name: '波本威士忌 / Bourbon', amount: '60ml', color: '#E6D7A6', ratio: 6 },
      { name: '柠檬汁 / Lemon Juice', amount: '30ml', color: '#FFFACD', ratio: 3 },
      { name: '糖浆 / Simple Syrup', amount: '15ml', color: '#FFFFFF', ratio: 1 },
      { name: '蛋清 / Egg White', amount: '1个', color: '#FFFAF0', ratio: 1 }
    ],
    steps: [
      { instruction: '干摇所有材料（无冰）', icon: 'shake' },
      { instruction: '加冰再次摇匀', icon: 'shake' },
      { instruction: '滤入杯中，苦精点缀', icon: 'garnish' }
    ],
    tips: '蛋清带来丝滑口感，可用鹰嘴豆水替代。'
  },
  {
    id: '10',
    name: '曼哈顿',
    enName: 'Manhattan',
    base: SpiritType.Whiskey,
    mood: 'Sophisticated',
    tags: ['经典', '优雅'],
    flavor: { sweet: 4, sour: 1, bitter: 3, strength: 5 },
    difficulty: 2,
    glass: 'Coupe',
    ingredients: [
      { name: '黑麦威士忌 / Rye Whiskey', amount: '60ml', color: '#E6D7A6', ratio: 6 },
      { name: '甜味美思 / Sweet Vermouth', amount: '30ml', color: '#8B0000', ratio: 3 },
      { name: '安高天娜苦精 / Angostura Bitters', amount: '2 Dashes', color: '#8B4513', ratio: 1 }
    ],
    steps: [
      { instruction: '加冰搅拌所有材料', icon: 'stir' },
      { instruction: '滤入冰镇酒杯', icon: 'pour' },
      { instruction: '樱桃装饰', icon: 'garnish' }
    ],
    tips: '与古典酒齐名的威士忌经典，搅拌保持清澈。'
  },
  {
    id: '11',
    name: '盘尼西林',
    enName: 'Penicillin',
    base: SpiritType.Whiskey,
    mood: 'Cozy',
    tags: ['生姜', '蜂蜜'],
    flavor: { sweet: 3, sour: 4, bitter: 2, strength: 4 },
    difficulty: 3,
    glass: 'Rocks',
    ingredients: [
      { name: '苏格兰威士忌 / Scotch', amount: '60ml', color: '#E6D7A6', ratio: 6 },
      { name: '蜂蜜生姜糖浆 / Honey Ginger Syrup', amount: '20ml', color: '#FFD700', ratio: 2 },
      { name: '柠檬汁 / Lemon Juice', amount: '20ml', color: '#FFFACD', ratio: 2 },
      { name: '艾雷岛威士忌 / Islay Scotch', amount: '7ml', color: '#DAA520', ratio: 1 }
    ],
    steps: [
      { instruction: '加冰摇匀前三种材料', icon: 'shake' },
      { instruction: '滤入装有大冰块的杯中', icon: 'pour' },
      { instruction: '漂浮艾雷岛威士忌，姜片装饰', icon: 'garnish' }
    ],
    tips: '现代经典，烟熏与生姜蜂蜜的完美结合。'
  },

  // 朗姆酒类
  {
    id: '12',
    name: '得其利',
    enName: 'Daiquiri',
    base: SpiritType.Rum,
    mood: 'Refreshing',
    tags: ['清爽', '古巴'],
    flavor: { sweet: 3, sour: 5, bitter: 1, strength: 3 },
    difficulty: 1,
    glass: 'Coupe',
    ingredients: [
      { name: '白朗姆酒 / White Rum', amount: '60ml', color: '#E3C7A5', ratio: 6 },
      { name: '青柠汁 / Lime Juice', amount: '25ml', color: '#D4EFDF', ratio: 3 },
      { name: '糖浆 / Simple Syrup', amount: '15ml', color: '#FFFFFF', ratio: 1 }
    ],
    steps: [
      { instruction: '加冰摇匀所有材料', icon: 'shake' },
      { instruction: '双重过滤入杯', icon: 'pour' },
      { instruction: '青柠轮装饰', icon: 'garnish' }
    ],
    tips: '海明威最爱，简单三种原料的完美平衡。'
  },
  {
    id: '13',
    name: '椰林飘香',
    enName: 'Piña Colada',
    base: SpiritType.Rum,
    mood: 'Sweet',
    tags: ['热带', '椰子'],
    flavor: { sweet: 5, sour: 2, bitter: 0, strength: 2 },
    difficulty: 2,
    glass: 'Highball',
    ingredients: [
      { name: '白朗姆酒 / White Rum', amount: '45ml', color: '#E3C7A5', ratio: 4 },
      { name: '椰奶 / Coconut Cream', amount: '45ml', color: '#FFFAF0', ratio: 4 },
      { name: '菠萝汁 / Pineapple Juice', amount: '90ml', color: '#FFE4B5', ratio: 6 }
    ],
    steps: [
      { instruction: '所有材料加碎冰搅拌', icon: 'shake' },
      { instruction: '倒入高球杯', icon: 'pour' },
      { instruction: '菠萝片和樱桃装饰', icon: 'garnish' }
    ],
    tips: '波多黎各国饮，夏日度假的完美选择。'
  },
  {
    id: '14',
    name: '月黑风高',
    enName: "Dark 'n' Stormy",
    base: SpiritType.Rum,
    mood: 'Energetic',
    tags: ['生姜', '辛辣'],
    flavor: { sweet: 3, sour: 2, bitter: 2, strength: 3 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '黑朗姆酒 / Dark Rum', amount: '60ml', color: '#8B4513', ratio: 4 },
      { name: '姜汁啤酒 / Ginger Beer', amount: '120ml', color: '#F5DEB3', ratio: 8 },
      { name: '青柠汁 / Lime Juice', amount: '15ml', color: '#D4EFDF', ratio: 1 }
    ],
    steps: [
      { instruction: '杯中加入冰块', icon: 'ice' },
      { instruction: '倒入姜汁啤酒和青柠汁', icon: 'pour' },
      { instruction: '漂浮黑朗姆酒', icon: 'pour' }
    ],
    tips: '百慕大经典，深色朗姆漂浮在姜汁啤酒上。'
  },

  // 伏特加类
  {
    id: '15',
    name: '莫斯科骡子',
    enName: 'Moscow Mule',
    base: SpiritType.Vodka,
    mood: 'Refreshing',
    tags: ['生姜', '铜杯'],
    flavor: { sweet: 2, sour: 3, bitter: 1, strength: 2 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '伏特加 / Vodka', amount: '45ml', color: '#E7C1C7', ratio: 3 },
      { name: '姜汁啤酒 / Ginger Beer', amount: '120ml', color: '#F5DEB3', ratio: 8 },
      { name: '青柠汁 / Lime Juice', amount: '15ml', color: '#D4EFDF', ratio: 1 }
    ],
    steps: [
      { instruction: '铜杯中加入冰块', icon: 'ice' },
      { instruction: '倒入伏特加和青柠汁', icon: 'pour' },
      { instruction: '姜汁啤酒补满，青柠装饰', icon: 'garnish' }
    ],
    tips: '标志性的铜杯能保持冰凉，提升饮用体验。'
  },
  {
    id: '16',
    name: '大都会',
    enName: 'Cosmopolitan',
    base: SpiritType.Vodka,
    mood: 'Elegant',
    tags: ['蔓越莓', '都市'],
    flavor: { sweet: 3, sour: 4, bitter: 1, strength: 3 },
    difficulty: 2,
    glass: 'Martini',
    ingredients: [
      { name: '柑橘伏特加 / Citrus Vodka', amount: '40ml', color: '#E7C1C7', ratio: 4 },
      { name: '君度 / Cointreau', amount: '15ml', color: '#FADADD', ratio: 2 },
      { name: '蔓越莓汁 / Cranberry Juice', amount: '30ml', color: '#DC143C', ratio: 3 },
      { name: '青柠汁 / Lime Juice', amount: '15ml', color: '#D4EFDF', ratio: 1 }
    ],
    steps: [
      { instruction: '加冰摇匀所有材料', icon: 'shake' },
      { instruction: '双重过滤入马天尼杯', icon: 'pour' },
      { instruction: '橙皮火焰装饰', icon: 'garnish' }
    ],
    tips: '《欲望都市》同款，优雅粉红的都市经典。'
  },
  {
    id: '17',
    name: '血腥玛丽',
    enName: 'Bloody Mary',
    base: SpiritType.Vodka,
    mood: 'Bittersweet',
    tags: ['番茄', '辛辣'],
    flavor: { sweet: 2, sour: 3, bitter: 3, strength: 2 },
    difficulty: 2,
    glass: 'Highball',
    ingredients: [
      { name: '伏特加 / Vodka', amount: '45ml', color: '#E7C1C7', ratio: 3 },
      { name: '番茄汁 / Tomato Juice', amount: '90ml', color: '#FF6347', ratio: 6 },
      { name: '柠檬汁 / Lemon Juice', amount: '15ml', color: '#FFFACD', ratio: 1 },
      { name: '辣酱 / Tabasco', amount: '适量', color: '#FF4500', ratio: 1 }
    ],
    steps: [
      { instruction: '杯中加入冰块', icon: 'ice' },
      { instruction: '倒入所有材料', icon: 'pour' },
      { instruction: '搅拌均匀，西芹装饰', icon: 'garnish' }
    ],
    tips: '解酒神器，可根据口味调整辣度和调味。'
  },
  {
    id: '18',
    name: '意式浓缩马天尼',
    enName: 'Espresso Martini',
    base: SpiritType.Vodka,
    mood: 'Energetic',
    tags: ['咖啡', '提神'],
    flavor: { sweet: 3, sour: 1, bitter: 4, strength: 4 },
    difficulty: 2,
    glass: 'Martini',
    ingredients: [
      { name: '伏特加 / Vodka', amount: '45ml', color: '#E7C1C7', ratio: 4 },
      { name: '咖啡利口酒 / Kahlúa', amount: '30ml', color: '#3C1414', ratio: 3 },
      { name: '浓缩咖啡 / Espresso', amount: '30ml', color: '#3C1414', ratio: 3 }
    ],
    steps: [
      { instruction: '加冰用力摇匀', icon: 'shake' },
      { instruction: '双重过滤入马天尼杯', icon: 'pour' },
      { instruction: '咖啡豆装饰', icon: 'garnish' }
    ],
    tips: '用力摇晃产生绵密泡沫，咖啡需新鲜萃取。'
  },

  // 龙舌兰类
  {
    id: '19',
    name: '帕洛玛',
    enName: 'Paloma',
    base: SpiritType.Tequila,
    mood: 'Refreshing',
    tags: ['葡萄柚', '清爽'],
    flavor: { sweet: 2, sour: 4, bitter: 2, strength: 3 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '龙舌兰 / Tequila', amount: '60ml', color: '#BFD2E8', ratio: 4 },
      { name: '葡萄柚汁 / Grapefruit Juice', amount: '90ml', color: '#FFB6C1', ratio: 6 },
      { name: '苏打水 / Soda', amount: '30ml', color: '#F0F8FF', ratio: 2 },
      { name: '青柠汁 / Lime Juice', amount: '15ml', color: '#D4EFDF', ratio: 1 }
    ],
    steps: [
      { instruction: '杯口做盐边', icon: 'garnish' },
      { instruction: '加冰倒入所有材料', icon: 'pour' },
      { instruction: '轻轻搅拌，葡萄柚片装饰', icon: 'stir' }
    ],
    tips: '墨西哥最受欢迎的龙舌兰鸡尾酒。'
  },
  {
    id: '20',
    name: '龙舌兰日出',
    enName: 'Tequila Sunrise',
    base: SpiritType.Tequila,
    mood: 'Sweet',
    tags: ['渐变', '日出'],
    flavor: { sweet: 4, sour: 3, bitter: 1, strength: 2 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '龙舌兰 / Tequila', amount: '45ml', color: '#BFD2E8', ratio: 3 },
      { name: '橙汁 / Orange Juice', amount: '90ml', color: '#FFA500', ratio: 6 },
      { name: '红石榴糖浆 / Grenadine', amount: '15ml', color: '#DC143C', ratio: 1 }
    ],
    steps: [
      { instruction: '杯中加入冰块', icon: 'ice' },
      { instruction: '倒入龙舌兰和橙汁', icon: 'pour' },
      { instruction: '缓慢倒入红石榴糖浆', icon: 'pour' }
    ],
    tips: '红石榴糖浆沉底形成日出渐变效果。'
  },

  // 白兰地类
  {
    id: '21',
    name: '边车',
    enName: 'Sidecar',
    base: SpiritType.Brandy,
    mood: 'Elegant',
    tags: ['经典', '柑橘'],
    flavor: { sweet: 3, sour: 4, bitter: 2, strength: 4 },
    difficulty: 2,
    glass: 'Coupe',
    ingredients: [
      { name: '干邑白兰地 / Cognac', amount: '45ml', color: '#C7A58B', ratio: 5 },
      { name: '君度 / Cointreau', amount: '20ml', color: '#FADADD', ratio: 2 },
      { name: '柠檬汁 / Lemon Juice', amount: '20ml', color: '#FFFACD', ratio: 2 }
    ],
    steps: [
      { instruction: '杯口做糖边', icon: 'garnish' },
      { instruction: '加冰摇匀所有材料', icon: 'shake' },
      { instruction: '滤入酒杯', icon: 'pour' }
    ],
    tips: '白兰地鸡尾酒的代表作，一战时期诞生。'
  },
  {
    id: '22',
    name: '白兰地亚历山大',
    enName: 'Brandy Alexander',
    base: SpiritType.Brandy,
    mood: 'Sweet',
    tags: ['奶油', '甜点'],
    flavor: { sweet: 5, sour: 1, bitter: 1, strength: 3 },
    difficulty: 2,
    glass: 'Coupe',
    ingredients: [
      { name: '干邑白兰地 / Cognac', amount: '30ml', color: '#C7A58B', ratio: 3 },
      { name: '可可利口酒 / Crème de Cacao', amount: '30ml', color: '#3C1414', ratio: 3 },
      { name: '鲜奶油 / Heavy Cream', amount: '30ml', color: '#FFFAF0', ratio: 3 }
    ],
    steps: [
      { instruction: '加冰摇匀所有材料', icon: 'shake' },
      { instruction: '双重过滤入杯', icon: 'pour' },
      { instruction: '肉豆蔻粉装饰', icon: 'garnish' }
    ],
    tips: '甜点般的鸡尾酒，适合餐后享用。'
  },

  // 力娇酒/其他类
  {
    id: '23',
    name: '阿佩罗橙光',
    enName: 'Aperol Spritz',
    base: SpiritType.Liqueur,
    mood: 'Refreshing',
    tags: ['气泡', '意式'],
    flavor: { sweet: 3, sour: 2, bitter: 3, strength: 1 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '阿佩罗 / Aperol', amount: '60ml', color: '#FF6347', ratio: 3 },
      { name: '普罗塞克 / Prosecco', amount: '90ml', color: '#F5F5DC', ratio: 5 },
      { name: '苏打水 / Soda', amount: '30ml', color: '#F0F8FF', ratio: 2 }
    ],
    steps: [
      { instruction: '大酒杯中加入冰块', icon: 'ice' },
      { instruction: '依次倒入阿佩罗和普罗塞克', icon: 'pour' },
      { instruction: '苏打水补满，橙片装饰', icon: 'garnish' }
    ],
    tips: '意大利开胃酒文化的代表，下午茶首选。'
  },
  {
    id: '24',
    name: '贝里尼',
    enName: 'Bellini',
    base: SpiritType.Liqueur,
    mood: 'Elegant',
    tags: ['桃子', '香槟'],
    flavor: { sweet: 4, sour: 2, bitter: 0, strength: 1 },
    difficulty: 1,
    glass: 'Coupe',
    ingredients: [
      { name: '白桃果泥 / White Peach Purée', amount: '50ml', color: '#FFDAB9', ratio: 3 },
      { name: '普罗塞克 / Prosecco', amount: '100ml', color: '#F5F5DC', ratio: 7 }
    ],
    steps: [
      { instruction: '桃子果泥倒入香槟杯', icon: 'pour' },
      { instruction: '缓慢倒入冰镇普罗塞克', icon: 'pour' },
      { instruction: '轻轻搅拌均匀', icon: 'stir' }
    ],
    tips: '威尼斯哈里酒吧的经典，用新鲜白桃最佳。'
  },
  {
    id: '25',
    name: '美国佬',
    enName: 'Americano',
    base: SpiritType.Liqueur,
    mood: 'Bittersweet',
    tags: ['苦味', '开胃'],
    flavor: { sweet: 2, sour: 1, bitter: 4, strength: 1 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '金巴利 / Campari', amount: '30ml', color: '#DC143C', ratio: 3 },
      { name: '甜味美思 / Sweet Vermouth', amount: '30ml', color: '#8B0000', ratio: 3 },
      { name: '苏打水 / Soda', amount: '适量', color: '#F0F8FF', ratio: 4 }
    ],
    steps: [
      { instruction: '杯中加入冰块', icon: 'ice' },
      { instruction: '倒入金巴利和味美思', icon: 'pour' },
      { instruction: '苏打水补满，橙片装饰', icon: 'garnish' }
    ],
    tips: '尼格罗尼的前身，低酒精度的开胃选择。'
  },

  // 无酒精类
  {
    id: '26',
    name: '处女莫吉托',
    enName: 'Virgin Mojito',
    base: SpiritType.NonAlcoholic,
    mood: 'Refreshing',
    tags: ['薄荷', '无酒精'],
    flavor: { sweet: 4, sour: 4, bitter: 0, strength: 0 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '青柠 / Lime', amount: '半个', color: '#D4EFDF', ratio: 2 },
      { name: '薄荷叶 / Mint', amount: '10片', color: '#98FB98', ratio: 1 },
      { name: '糖浆 / Simple Syrup', amount: '20ml', color: '#FFFFFF', ratio: 2 },
      { name: '苏打水 / Soda', amount: '150ml', color: '#F0F8FF', ratio: 8 }
    ],
    steps: [
      { instruction: '轻压薄荷与青柠', icon: 'stir' },
      { instruction: '加入碎冰', icon: 'ice' },
      { instruction: '苏打水补满，薄荷装饰', icon: 'garnish' }
    ],
    tips: '清爽解暑的无酒精选择，老少皆宜。'
  },
  {
    id: '27',
    name: '雪莉登波',
    enName: 'Shirley Temple',
    base: SpiritType.NonAlcoholic,
    mood: 'Sweet',
    tags: ['樱桃', '气泡'],
    flavor: { sweet: 5, sour: 2, bitter: 0, strength: 0 },
    difficulty: 1,
    glass: 'Highball',
    ingredients: [
      { name: '姜汁汽水 / Ginger Ale', amount: '150ml', color: '#F5DEB3', ratio: 8 },
      { name: '红石榴糖浆 / Grenadine', amount: '30ml', color: '#DC143C', ratio: 2 },
      { name: '樱桃 / Cherry', amount: '2颗', color: '#DC143C', ratio: 1 }
    ],
    steps: [
      { instruction: '杯中加入冰块', icon: 'ice' },
      { instruction: '倒入姜汁汽水', icon: 'pour' },
      { instruction: '加入红石榴糖浆，樱桃装饰', icon: 'garnish' }
    ],
    tips: '以童星秀兰·邓波儿命名的经典无酒精饮品。'
  }
];
