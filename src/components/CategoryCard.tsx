import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* 分类信息 */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-200 mb-2">{category.description}</p>
              <p className="text-xs text-gray-300">
                {category.count.toLocaleString()} 张图片
              </p>
            </div>
            
            <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full group-hover:bg-pink-500 transition-colors">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      
      {/* 悬停效果 */}
      <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 group-hover:from-pink-100 group-hover:to-purple-100 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors">
            浏览更多
          </span>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;