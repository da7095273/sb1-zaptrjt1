import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Heart, Clock, Crown } from 'lucide-react';
import { PhotoItem } from '../types';

interface PhotoCardProps {
  photo: PhotoItem;
  size?: 'small' | 'medium' | 'large';
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, size = 'medium' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-full h-48';
      case 'large':
        return 'w-full h-80';
      default:
        return 'w-full h-64';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <Link to={`/photo/${photo.id}`} className="block relative">
        <div className={`relative ${getSizeClasses()} overflow-hidden`}>
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* VIP标识 */}
          {photo.isVip && (
            <div className="absolute top-2 right-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full flex items-center space-x-1 text-xs font-medium">
                <Crown className="h-3 w-3" />
                <span>VIP</span>
              </div>
            </div>
          )}

          {/* 悬停时显示的信息 */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-white text-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">{photo.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">{photo.likes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/photo/${photo.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-pink-500 transition-colors">
            {photo.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {photo.description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {photo.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
          {photo.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{photo.tags.length - 3}
            </span>
          )}
        </div>

        {/* 底部信息 */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{new Date(photo.uploadDate).toLocaleDateString('zh-CN')}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{photo.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-3 w-3" />
              <span>{photo.likes.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* 摄影师信息 */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            摄影师: <span className="text-gray-700 font-medium">{photo.photographer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;