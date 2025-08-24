import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Eye, 
  Share2, 
  Download, 
  Clock, 
  Camera, 
  MapPin, 
  Tag,
  ChevronLeft,
  ChevronRight,
  Crown
} from 'lucide-react';
import PhotoCard from '../components/PhotoCard';
import { mockPhotos } from '../data/mockData';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 模拟获取图片详情
  const photo = mockPhotos.find(p => p.id === id) || mockPhotos[0];
  const relatedPhotos = mockPhotos.filter(p => p.id !== photo.id).slice(0, 4);
  
  // 模拟图片集合（用于浏览器）
  const imageGallery = [photo.fullUrl, ...mockPhotos.slice(0, 5).map(p => p.fullUrl)];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? imageGallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === imageGallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要内容区域 */}
          <div className="lg:col-span-2">
            {/* 图片显示区域 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="relative">
                <img
                  src={imageGallery[currentImageIndex]}
                  alt={photo.title}
                  className="w-full h-96 md:h-[600px] object-cover"
                />
                
                {/* VIP标识 */}
                {photo.isVip && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 font-medium">
                      <Crown className="h-4 w-4" />
                      <span>VIP专享</span>
                    </div>
                  </div>
                )}

                {/* 图片导航 */}
                {imageGallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    
                    {/* 图片指示器 */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {imageGallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* 操作按钮 */}
              <div className="p-6 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                        isLiked
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-pink-50 hover:text-pink-500'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{(photo.likes + (isLiked ? 1 : 0)).toLocaleString()}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>分享</span>
                    </button>
                  </div>

                  <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all">
                    <Download className="h-4 w-4" />
                    <span>下载</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 图片信息 */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{photo.title}</h1>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{photo.views.toLocaleString()} 次浏览</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{photo.likes.toLocaleString()} 次点赞</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(photo.uploadDate).toLocaleDateString('zh-CN')}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {photo.description}
              </p>

              {/* 标签 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-pink-500" />
                  相关标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/search?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full hover:from-pink-200 hover:to-purple-200 transition-colors text-sm"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* 摄影师信息 */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-pink-500" />
                  摄影师信息
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {photo.photographer.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{photo.photographer}</p>
                    <p className="text-sm text-gray-500">专业人像摄影师</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 图片信息卡片 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">图片信息</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">分辨率:</span>
                  <span className="text-gray-900">1920 × 1080</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">文件大小:</span>
                  <span className="text-gray-900">2.3 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">格式:</span>
                  <span className="text-gray-900">JPEG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">分类:</span>
                  <span className="text-pink-500">{photo.category}</span>
                </div>
              </div>
            </div>

            {/* 相关推荐 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">相关推荐</h3>
              <div className="space-y-4">
                {relatedPhotos.map((relatedPhoto) => (
                  <Link
                    key={relatedPhoto.id}
                    to={`/photo/${relatedPhoto.id}`}
                    className="flex space-x-3 group"
                  >
                    <img
                      src={relatedPhoto.thumbnailUrl}
                      alt={relatedPhoto.title}
                      className="w-16 h-16 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-pink-500 transition-colors">
                        {relatedPhoto.title}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Eye className="h-3 w-3 mr-1" />
                        <span>{relatedPhoto.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;