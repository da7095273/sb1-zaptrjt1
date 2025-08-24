import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Grid3X3, List, Filter, ChevronDown, Star, TrendingUp, Clock } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';
import { getPhotosByCategory } from '../data/mockData';
import { SearchFilters, PhotoItem } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const location = useLocation();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    sortBy: 'latest',
    timeRange: 'all'
  });

  // 根据路径确定页面类型和数据
  useEffect(() => {
    let pageType = 'categories';
    
    if (location.pathname.includes('/latest')) {
      pageType = 'latest';
    } else if (location.pathname.includes('/popular')) {
      pageType = 'popular';
    } else if (location.pathname.includes('/favorites')) {
      pageType = 'favorites';
    } else if (categoryId) {
      pageType = categoryId;
    }
    
    const categoryPhotos = getPhotosByCategory(pageType);
    setPhotos(categoryPhotos);
  }, [categoryId, location.pathname]);

  const getPageTitle = () => {
    if (location.pathname.includes('/latest')) return '最新作品';
    if (location.pathname.includes('/popular')) return '热门推荐';
    if (location.pathname.includes('/favorites')) return '我的收藏';
    
    switch (categoryId) {
      case 'japanese': return '日式写真';
      case 'korean': return '韩式写真';
      case 'pure': return '清纯系';
      case 'fashion': return '时尚系';
      case 'campus': return '校园系';
      case 'office': return '职场系';
      default: return '分类浏览';
    }
  };

  const getPageDescription = () => {
    if (location.pathname.includes('/latest')) return '最新上传的精美写真作品，每日更新';
    if (location.pathname.includes('/popular')) return '用户最喜爱的热门写真作品';
    if (location.pathname.includes('/favorites')) return '您收藏的精选写真作品';
    
    switch (categoryId) {
      case 'japanese': return '传统与现代结合的日式写真艺术';
      case 'korean': return '清新自然的韩式写真风格';
      case 'pure': return '纯真自然的清纯系写真';
      case 'fashion': return '时尚前沿的都市写真';
      case 'campus': return '青春活力的校园写真';
      case 'office': return '专业优雅的职场写真';
      default: return '探索不同风格的写真作品';
    }
  };

  const getPageIcon = () => {
    if (location.pathname.includes('/latest')) return <Clock className="h-8 w-8 text-green-500" />;
    if (location.pathname.includes('/popular')) return <TrendingUp className="h-8 w-8 text-orange-500" />;
    if (location.pathname.includes('/favorites')) return <Star className="h-8 w-8 text-yellow-500" />;
    return <Grid3X3 className="h-8 w-8 text-pink-500" />;
  };

  const handleSortChange = (sortBy: SearchFilters['sortBy']) => {
    setFilters({ ...filters, sortBy });
  };

  const handleTimeRangeChange = (timeRange: SearchFilters['timeRange']) => {
    setFilters({ ...filters, timeRange });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              {getPageIcon()}
            </div>
            <h1 className="text-5xl font-bold mb-4">{getPageTitle()}</h1>
            <p className="text-xl text-gray-200 mb-8">{getPageDescription()}</p>
            
            {/* 页面特色标签 */}
            <div className="flex flex-wrap justify-center gap-3">
              {location.pathname.includes('/latest') && (
                <>
                  <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-200 font-medium">每日更新</span>
                  <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 font-medium">新鲜出炉</span>
                </>
              )}
              {location.pathname.includes('/popular') && (
                <>
                  <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-200 font-medium">用户推荐</span>
                  <span className="px-4 py-2 bg-red-500/20 rounded-full text-red-200 font-medium">热门精选</span>
                </>
              )}
              {location.pathname.includes('/favorites') && (
                <>
                  <span className="px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-200 font-medium">个人收藏</span>
                  <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-200 font-medium">精心挑选</span>
                </>
              )}
              {categoryId === 'japanese' && (
                <>
                  <span className="px-4 py-2 bg-red-500/20 rounded-full text-red-200 font-medium">传统美学</span>
                  <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-200 font-medium">和风写真</span>
                </>
              )}
              {categoryId === 'korean' && (
                <>
                  <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 font-medium">清新自然</span>
                  <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-200 font-medium">韩流风格</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 控制面板 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">
                找到 <span className="font-semibold text-gray-900">{photos.length}</span> 张精美图片
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* 视图切换 */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-pink-500' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-pink-500' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* 筛选按钮 */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>筛选</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* 筛选面板 */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 排序方式 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    排序方式
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleSortChange(e.target.value as SearchFilters['sortBy'])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white"
                  >
                    <option value="latest">最新上传</option>
                    <option value="popular">最受欢迎</option>
                    <option value="views">浏览量</option>
                    <option value="likes">点赞数</option>
                  </select>
                </div>

                {/* 时间范围 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    时间范围
                  </label>
                  <select
                    value={filters.timeRange}
                    onChange={(e) => handleTimeRangeChange(e.target.value as SearchFilters['timeRange'])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white"
                  >
                    <option value="all">全部时间</option>
                    <option value="today">今天</option>
                    <option value="week">本周</option>
                    <option value="month">本月</option>
                    <option value="year">今年</option>
                  </select>
                </div>

                {/* 分类筛选 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    分类
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white">
                    <option value="">全部分类</option>
                    <option value="japanese">日式写真</option>
                    <option value="korean">韩式写真</option>
                    <option value="pure">清纯系</option>
                    <option value="fashion">时尚系</option>
                    <option value="campus">校园系</option>
                    <option value="office">职场系</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 图片网格 */}
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
            : 'space-y-8'
        }>
          {photos.map((photo) => (
            <PhotoCard 
              key={photo.id} 
              photo={photo} 
              size={viewMode === 'list' ? 'large' : 'medium'}
            />
          ))}
        </div>

        {/* 加载更多按钮 */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            加载更多精彩内容
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;