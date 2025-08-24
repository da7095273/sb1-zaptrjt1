import { PhotoItem, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'japanese',
    name: '日式写真',
    description: '日本风格写真作品',
    imageUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 1250
  },
  {
    id: 'korean',
    name: '韩式写真',
    description: '韩国风格写真作品',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 980
  },
  {
    id: 'pure',
    name: '清纯系',
    description: '清纯可爱风格',
    imageUrl: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 756
  },
  {
    id: 'fashion',
    name: '时尚系',
    description: '时尚潮流风格',
    imageUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 642
  },
  {
    id: 'campus',
    name: '校园系',
    description: '校园青春风格',
    imageUrl: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 534
  },
  {
    id: 'office',
    name: '职场系',
    description: '职业装风格',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 423
  }
];

// 首页展示的精选作品
export const featuredPhotos: PhotoItem[] = [
  {
    id: 'featured-1',
    title: '春日樱花写真系列',
    description: '在樱花盛开的季节拍摄的清纯写真，展现青春的美好',
    thumbnailUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '日式写真',
    tags: ['樱花', '春天', '清纯', '户外'],
    uploadDate: '2025-01-15',
    views: 12547,
    likes: 856,
    photographer: '田中美咲',
    isVip: false
  },
  {
    id: 'featured-2',
    title: '韩式校园风写真',
    description: '青春校园主题写真，展现学生时代的纯真与活力',
    thumbnailUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '韩式写真',
    tags: ['校园', '青春', '学生', '可爱'],
    uploadDate: '2025-01-14',
    views: 9834,
    likes: 723,
    photographer: '李智恩',
    isVip: true
  },
  {
    id: 'featured-3',
    title: '清新自然风写真',
    description: '自然光线下的清新写真，展现最真实的美丽',
    thumbnailUrl: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['自然', '清新', '阳光', '户外'],
    uploadDate: '2025-01-13',
    views: 15632,
    likes: 1234,
    photographer: '山田花子',
    isVip: false
  },
  {
    id: 'featured-4',
    title: '时尚街拍写真',
    description: '都市街头时尚写真，展现现代都市女性的魅力',
    thumbnailUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '时尚系',
    tags: ['时尚', '街拍', '都市', '现代'],
    uploadDate: '2025-01-12',
    views: 8756,
    likes: 567,
    photographer: '金泰妍',
    isVip: true
  },
  {
    id: 'featured-5',
    title: '夏日海边写真',
    description: '海边度假风写真，展现夏日的清爽与活力',
    thumbnailUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['海边', '夏日', '度假', '清爽'],
    uploadDate: '2025-01-11',
    views: 11234,
    likes: 892,
    photographer: '佐藤美雪',
    isVip: false
  },
  {
    id: 'featured-6',
    title: '复古港风写真',
    description: '复古港式风格写真，展现经典的东方美学',
    thumbnailUrl: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '时尚系',
    tags: ['复古', '港风', '经典', '优雅'],
    uploadDate: '2025-01-10',
    views: 7654,
    likes: 543,
    photographer: '陈美琳',
    isVip: true
  }
];

// 最新上传的作品
export const latestPhotos: PhotoItem[] = [
  {
    id: 'latest-1',
    title: '新年和服写真',
    description: '传统和服与现代美学的完美结合',
    thumbnailUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '日式写真',
    tags: ['和服', '传统', '新年', '文化'],
    uploadDate: '2025-01-16',
    views: 3456,
    likes: 234,
    photographer: '松本雅美',
    isVip: false
  },
  {
    id: 'latest-2',
    title: '韩式咖啡厅写真',
    description: '温馨咖啡厅里的慵懒午后时光',
    thumbnailUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '韩式写真',
    tags: ['咖啡厅', '慵懒', '温馨', '午后'],
    uploadDate: '2025-01-16',
    views: 2890,
    likes: 187,
    photographer: '朴智妍',
    isVip: true
  },
  {
    id: 'latest-3',
    title: '校园图书馆写真',
    description: '安静的图书馆里，知性美的完美诠释',
    thumbnailUrl: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['图书馆', '知性', '安静', '学习'],
    uploadDate: '2025-01-15',
    views: 4567,
    likes: 321,
    photographer: '林小雅',
    isVip: false
  },
  {
    id: 'latest-4',
    title: '都市夜景写真',
    description: '霓虹灯下的都市夜晚，展现现代女性的独立魅力',
    thumbnailUrl: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '时尚系',
    tags: ['夜景', '都市', '霓虹', '独立'],
    uploadDate: '2025-01-15',
    views: 6789,
    likes: 456,
    photographer: '王雅琪',
    isVip: true
  },
  {
    id: 'latest-5',
    title: '春日花田写真',
    description: '花海中的浪漫写真，春天的气息扑面而来',
    thumbnailUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['花田', '春天', '浪漫', '自然'],
    uploadDate: '2025-01-14',
    views: 5432,
    likes: 378,
    photographer: '张美丽',
    isVip: false
  },
  {
    id: 'latest-6',
    title: '职场精英写真',
    description: '现代职场女性的专业与优雅并存',
    thumbnailUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '职场系',
    tags: ['职场', '专业', '优雅', '现代'],
    uploadDate: '2025-01-14',
    views: 3210,
    likes: 245,
    photographer: '李雅婷',
    isVip: true
  }
];

// 热门推荐作品
export const popularPhotos: PhotoItem[] = [
  {
    id: 'popular-1',
    title: '樱花季和服写真集',
    description: '最受欢迎的樱花季和服写真，传统与美丽的完美融合',
    thumbnailUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '日式写真',
    tags: ['樱花', '和服', '传统', '经典'],
    uploadDate: '2025-01-05',
    views: 25678,
    likes: 1890,
    photographer: '田中美咲',
    isVip: false
  },
  {
    id: 'popular-2',
    title: '韩式清新校园风',
    description: '最受喜爱的韩式校园写真，青春活力的代表作',
    thumbnailUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '韩式写真',
    tags: ['校园', '清新', '青春', '活力'],
    uploadDate: '2025-01-03',
    views: 23456,
    likes: 1678,
    photographer: '李智恩',
    isVip: true
  },
  {
    id: 'popular-3',
    title: '时尚街拍大片',
    description: '都市时尚街拍的经典之作，展现现代女性魅力',
    thumbnailUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '时尚系',
    tags: ['街拍', '时尚', '都市', '魅力'],
    uploadDate: '2025-01-01',
    views: 21234,
    likes: 1567,
    photographer: '金泰妍',
    isVip: true
  },
  {
    id: 'popular-4',
    title: '清纯自然风光',
    description: '自然光线下的清纯写真，最受欢迎的自然系作品',
    thumbnailUrl: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['自然', '清纯', '阳光', '纯真'],
    uploadDate: '2024-12-28',
    views: 19876,
    likes: 1456,
    photographer: '山田花子',
    isVip: false
  }
];

// 日式写真专属内容
export const japanesePhotos: PhotoItem[] = [
  {
    id: 'jp-1',
    title: '京都古寺和服写真',
    description: '在千年古寺中拍摄的传统和服写真，展现东方古典美学',
    thumbnailUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '日式写真',
    tags: ['京都', '古寺', '和服', '传统'],
    uploadDate: '2025-01-15',
    views: 8765,
    likes: 654,
    photographer: '松本雅美',
    isVip: false
  },
  {
    id: 'jp-2',
    title: '富士山下樱花写真',
    description: '富士山脚下的樱花季写真，日本最美的春日风景',
    thumbnailUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '日式写真',
    tags: ['富士山', '樱花', '春日', '风景'],
    uploadDate: '2025-01-14',
    views: 12345,
    likes: 987,
    photographer: '田中美咲',
    isVip: true
  },
  {
    id: 'jp-3',
    title: '日式庭院茶道写真',
    description: '传统日式庭院中的茶道写真，宁静致远的东方美学',
    thumbnailUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '日式写真',
    tags: ['庭院', '茶道', '宁静', '传统'],
    uploadDate: '2025-01-13',
    views: 6789,
    likes: 456,
    photographer: '佐藤美雪',
    isVip: false
  }
];

// 韩式写真专属内容
export const koreanPhotos: PhotoItem[] = [
  {
    id: 'kr-1',
    title: '首尔明洞街拍',
    description: '首尔最繁华商圈的时尚街拍，展现韩式都市魅力',
    thumbnailUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '韩式写真',
    tags: ['首尔', '明洞', '街拍', '时尚'],
    uploadDate: '2025-01-15',
    views: 9876,
    likes: 743,
    photographer: '朴智妍',
    isVip: true
  },
  {
    id: 'kr-2',
    title: '韩式咖啡厅写真',
    description: '温馨韩式咖啡厅里的慵懒午后时光',
    thumbnailUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '韩式写真',
    tags: ['咖啡厅', '慵懒', '午后', '温馨'],
    uploadDate: '2025-01-14',
    views: 7654,
    likes: 567,
    photographer: '李智恩',
    isVip: false
  },
  {
    id: 'kr-3',
    title: '韩式校园制服写真',
    description: '青春校园制服写真，回忆最美好的学生时代',
    thumbnailUrl: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '韩式写真',
    tags: ['校园', '制服', '青春', '学生'],
    uploadDate: '2025-01-13',
    views: 11234,
    likes: 834,
    photographer: '金泰妍',
    isVip: true
  }
];

// 清纯系专属内容
export const purePhotos: PhotoItem[] = [
  {
    id: 'pure-1',
    title: '田园风光写真',
    description: '乡村田园中的清纯写真，回归自然的纯真美好',
    thumbnailUrl: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['田园', '乡村', '自然', '纯真'],
    uploadDate: '2025-01-15',
    views: 8765,
    likes: 654,
    photographer: '林小雅',
    isVip: false
  },
  {
    id: 'pure-2',
    title: '校园图书馆写真',
    description: '安静的图书馆里，知性与清纯的完美结合',
    thumbnailUrl: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['图书馆', '知性', '安静', '清纯'],
    uploadDate: '2025-01-14',
    views: 6543,
    likes: 487,
    photographer: '张美丽',
    isVip: true
  },
  {
    id: 'pure-3',
    title: '海边清晨写真',
    description: '清晨海边的纯净写真，展现最自然的美丽',
    thumbnailUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '清纯系',
    tags: ['海边', '清晨', '纯净', '自然'],
    uploadDate: '2025-01-13',
    views: 9876,
    likes: 723,
    photographer: '王小清',
    isVip: false
  }
];

// 时尚系专属内容
export const fashionPhotos: PhotoItem[] = [
  {
    id: 'fashion-1',
    title: '都市夜景时尚大片',
    description: '霓虹灯下的都市夜晚，展现现代时尚女性魅力',
    thumbnailUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '时尚系',
    tags: ['都市', '夜景', '时尚', '现代'],
    uploadDate: '2025-01-15',
    views: 12345,
    likes: 987,
    photographer: '陈美琳',
    isVip: true
  },
  {
    id: 'fashion-2',
    title: '复古港风写真',
    description: '经典港式复古风格，展现永恒的东方美学',
    thumbnailUrl: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '时尚系',
    tags: ['复古', '港风', '经典', '优雅'],
    uploadDate: '2025-01-14',
    views: 8765,
    likes: 654,
    photographer: '黄雅琪',
    isVip: false
  },
  {
    id: 'fashion-3',
    title: '高级定制时装写真',
    description: '高级定制时装展示，奢华与优雅的完美诠释',
    thumbnailUrl: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '时尚系',
    tags: ['定制', '时装', '奢华', '优雅'],
    uploadDate: '2025-01-13',
    views: 7654,
    likes: 543,
    photographer: '李雅婷',
    isVip: true
  }
];

// 收藏页面专属内容
export const favoritePhotos: PhotoItem[] = [
  {
    id: 'fav-1',
    title: '我的收藏 - 樱花季回忆',
    description: '收藏的樱花季写真，每一张都是珍贵的回忆',
    thumbnailUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '日式写真',
    tags: ['樱花', '收藏', '回忆', '珍贵'],
    uploadDate: '2025-01-10',
    views: 5432,
    likes: 398,
    photographer: '田中美咲',
    isVip: false
  },
  {
    id: 'fav-2',
    title: '收藏精选 - 韩式清新',
    description: '精心收藏的韩式清新写真，青春永不落幕',
    thumbnailUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    fullUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: '韩式写真',
    tags: ['韩式', '清新', '青春', '收藏'],
    uploadDate: '2025-01-08',
    views: 4321,
    likes: 287,
    photographer: '李智恩',
    isVip: true
  }
];

export const hotTags = [
  '樱花', '清纯', '校园', '时尚', '自然', '青春', '可爱', '韩式', '日式', '街拍',
  '和服', '复古', '海边', '夜景', '咖啡厅', '图书馆', '花田', '都市', '传统', '现代'
];

// 合并所有照片数据，去除重复项
export const mockPhotos: PhotoItem[] = (() => {
  const allPhotos = [
    ...featuredPhotos,
    ...latestPhotos,
    ...popularPhotos,
    ...japanesePhotos,
    ...koreanPhotos,
    ...purePhotos,
    ...fashionPhotos,
    ...favoritePhotos
  ];
  
  // 使用 Map 去除重复的照片（基于 id）
  const uniquePhotos = new Map<string, PhotoItem>();
  allPhotos.forEach(photo => {
    uniquePhotos.set(photo.id, photo);
  });
  
  return Array.from(uniquePhotos.values());
})();

// 根据页面类型获取对应数据的函数
export const getPhotosByCategory = (category: string): PhotoItem[] => {
  switch (category) {
    case 'japanese':
      return japanesePhotos;
    case 'korean':
      return koreanPhotos;
    case 'pure':
      return purePhotos;
    case 'fashion':
      return fashionPhotos;
    case 'latest':
      return latestPhotos;
    case 'popular':
      return popularPhotos;
    case 'favorites':
      return favoritePhotos;
    default:
      return featuredPhotos;
  }
};