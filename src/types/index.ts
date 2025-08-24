export interface PhotoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  fullUrl: string;
  category: string;
  tags: string[];
  uploadDate: string;
  views: number;
  likes: number;
  photographer: string;
  isVip: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  count: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  isVip: boolean;
  joinDate: string;
}

export interface SearchFilters {
  category?: string;
  tags?: string[];
  sortBy: 'latest' | 'popular' | 'views' | 'likes';
  timeRange: 'all' | 'today' | 'week' | 'month' | 'year';
}