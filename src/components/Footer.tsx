import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-bold">写真之家</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              专业的日韩写真图片分享平台，汇集2025年最新高质量写真作品，为用户提供优质的视觉体验。
            </p>
            <div className="flex space-x-4">
              <Heart className="h-5 w-5 text-pink-500" />
              <span className="text-sm text-gray-400">分享美好，传递温暖</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速导航</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-pink-500 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-pink-500 transition-colors">
                  分类浏览
                </Link>
              </li>
              <li>
                <Link to="/latest" className="text-gray-400 hover:text-pink-500 transition-colors">
                  最新作品
                </Link>
              </li>
              <li>
                <Link to="/popular" className="text-gray-400 hover:text-pink-500 transition-colors">
                  热门推荐
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">热门分类</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/japanese" className="text-gray-400 hover:text-pink-500 transition-colors">
                  日式写真
                </Link>
              </li>
              <li>
                <Link to="/category/korean" className="text-gray-400 hover:text-pink-500 transition-colors">
                  韩式写真
                </Link>
              </li>
              <li>
                <Link to="/category/pure" className="text-gray-400 hover:text-pink-500 transition-colors">
                  清纯系
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-gray-400 hover:text-pink-500 transition-colors">
                  时尚系
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-pink-500" />
                <span className="text-gray-400">contact@photo-home.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pink-500" />
                <span className="text-gray-400">400-888-0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-pink-500" />
                <span className="text-gray-400">中国·上海</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 写真之家. 保留所有权利.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">
                隐私政策
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">
                使用条款
              </Link>
              <Link to="/help" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">
                帮助中心
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;