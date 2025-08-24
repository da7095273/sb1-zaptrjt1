import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Star, 
  Users, 
  Award,
  Sparkles,
  Camera,
  Heart,
  Eye,
  Crown,
  Gift,
  Zap,
  Globe
} from 'lucide-react';
import PhotoCard from '../components/PhotoCard';
import CategoryCard from '../components/CategoryCard';
import { featuredPhotos, latestPhotos, popularPhotos, categories, hotTags } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - 增强版 */}
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
        {/* 动态背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-12 w-12 text-yellow-300 mr-4 animate-spin" />
              <span className="text-2xl font-bold text-yellow-300">2025年度精选</span>
              <Sparkles className="h-12 w-12 text-yellow-300 ml-4 animate-spin" />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              发现最美的
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
                写真艺术世界
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              汇集全球顶尖摄影师的日韩写真作品，为您带来最新、最美的视觉盛宴
              <br />
              <span className="text-yellow-300 font-semibold">每日更新 · 精品推荐 · 专业品质</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                to="/categories"
                className="group bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                <Camera className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                <span>开始探索</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/latest"
                className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
              >
                <Zap className="h-6 w-6 group-hover:text-yellow-500 transition-colors" />
                <span>查看最新</span>
              </Link>
              
              <Link
                to="/popular"
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center space-x-3 shadow-2xl transform hover:scale-105"
              >
                <Crown className="h-6 w-6" />
                <span>热门推荐</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 增强版统计数据 */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Camera className="h-8 w-8 text-pink-300 mr-2" />
                  <div className="text-4xl font-bold">2,580+</div>
                </div>
                <div className="text-sm text-gray-200">精品写真</div>
                <div className="text-xs text-pink-300 mt-1">每日新增50+</div>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 text-purple-300 mr-2" />
                  <div className="text-4xl font-bold">15,000+</div>
                </div>
                <div className="text-sm text-gray-200">注册用户</div>
                <div className="text-xs text-purple-300 mt-1">活跃度98%</div>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-yellow-300 mr-2" />
                  <div className="text-4xl font-bold">850+</div>
                </div>
                <div className="text-sm text-gray-200">专业摄影师</div>
                <div className="text-xs text-yellow-300 mt-1">国际认证</div>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-orange-300 mr-2" />
                  <div className="text-4xl font-bold">98%</div>
                </div>
                <div className="text-sm text-gray-200">用户满意度</div>
                <div className="text-xs text-orange-300 mt-1">五星好评</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特色功能展示 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择我们</h2>
            <p className="text-xl text-gray-600">专业品质 · 精选内容 · 优质服务</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl">
                <Crown className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">VIP专享内容</h3>
              <p className="text-gray-600 leading-relaxed">
                独家高清写真作品，专业摄影师精心拍摄，为VIP用户提供最优质的视觉体验
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl">
                <Globe className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">全球精选</h3>
              <p className="text-gray-600 leading-relaxed">
                汇集日韩顶级摄影师作品，每日精选更新，为您带来最新最美的写真艺术
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl">
                <Gift className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">免费体验</h3>
              <p className="text-gray-600 leading-relaxed">
                大量免费高质量内容，无需付费即可欣赏精美写真，注册即享更多特权
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 热门标签 - 增强版 */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-pink-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">热门标签</h2>
              <Sparkles className="h-8 w-8 text-pink-500 ml-3" />
            </div>
            <p className="text-xl text-gray-600">探索最受欢迎的写真主题</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {hotTags.map((tag, index) => (
              <Link
                key={tag}
                to={`/search?tag=${encodeURIComponent(tag)}`}
                className="group px-8 py-4 bg-white text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:shadow-xl transition-all duration-300 font-semibold border-2 border-transparent hover:border-white transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center space-x-2">
                  <span>#</span>
                  <span>{tag}</span>
                  {index < 5 && <Star className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 精选作品展示 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-yellow-500 mr-4" />
              <h2 className="text-5xl font-bold text-gray-900">编辑精选</h2>
              <Award className="h-12 w-12 text-yellow-500 ml-4" />
            </div>
            <p className="text-2xl text-gray-600 mb-4">每周精心挑选的顶级作品</p>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPhotos.slice(0, 6).map((photo) => (
              <PhotoCard key={photo.id} photo={photo} size="large" />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/categories"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <Eye className="h-6 w-6" />
              <span>查看更多精选</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* 分类展示 - 增强版 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">热门分类</h2>
              <p className="text-xl text-gray-600">按风格分类浏览精美写真</p>
            </div>
            <Link
              to="/categories"
              className="group text-pink-500 hover:text-pink-600 font-bold flex items-center space-x-2 text-lg"
            >
              <span>查看全部</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 最新作品 - 增强版 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">最新上传</h2>
                <p className="text-xl text-gray-600">刚刚上传的新鲜作品</p>
              </div>
            </div>
            <Link
              to="/latest"
              className="group text-green-500 hover:text-green-600 font-bold flex items-center space-x-2 text-lg"
            >
              <span>查看更多</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPhotos.slice(0, 6).map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </section>

      {/* 热门推荐 - 增强版 */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">热门推荐</h2>
                <p className="text-xl text-gray-600">用户最喜爱的精选作品</p>
              </div>
            </div>
            <Link
              to="/popular"
              className="group text-orange-500 hover:text-orange-600 font-bold flex items-center space-x-2 text-lg"
            >
              <span>查看更多</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* 摄影师推荐 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">明星摄影师</h2>
            <p className="text-xl text-gray-600">与顶级摄影师一起探索艺术之美</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '田中美咲', specialty: '日式传统写真', works: 156, likes: 12450 },
              { name: '李智恩', specialty: '韩式清新风格', works: 203, likes: 18760 },
              { name: '陈美琳', specialty: '时尚都市写真', works: 134, likes: 9870 }
            ].map((photographer, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {photographer.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{photographer.name}</h3>
                <p className="text-gray-600 mb-4">{photographer.specialty}</p>
                <div className="flex justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Camera className="h-4 w-4" />
                    <span>{photographer.works} 作品</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{photographer.likes.toLocaleString()} 点赞</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 增强版 */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-300 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full opacity-5 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Star className="h-20 w-20 mx-auto mb-6 text-yellow-300 animate-spin" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              加入我们的创作者社区
            </h2>
            <p className="text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
              分享您的作品，与全球摄影师交流，获得专业反馈和支持
              <br />
              <span className="text-yellow-300 font-bold">立即注册，享受专属特权</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link
              to="/register"
              className="group bg-white text-gray-900 px-12 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 shadow-2xl transform hover:scale-110"
            >
              <Users className="h-6 w-6 group-hover:text-pink-500 transition-colors" />
              <span>立即注册</span>
              <Gift className="h-6 w-6 group-hover:text-pink-500 transition-colors" />
            </Link>
            
            <Link
              to="/upload"
              className="group border-3 border-white text-white px-12 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-3 transform hover:scale-110"
            >
              <Camera className="h-6 w-6" />
              <span>上传作品</span>
            </Link>
            
            <Link
              to="/vip"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center space-x-3 shadow-2xl transform hover:scale-110"
            >
              <Crown className="h-6 w-6" />
              <span>升级VIP</span>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-2">免费用户</h3>
              <p className="text-gray-200">每日10张高清下载</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-300">
              <h3 className="text-2xl font-bold mb-2 text-yellow-300">VIP会员</h3>
              <p className="text-gray-200">无限下载 + 独家内容</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-2">创作者</h3>
              <p className="text-gray-200">上传作品 + 收益分成</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;