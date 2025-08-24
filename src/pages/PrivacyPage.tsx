import React from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">隐私政策</h1>
            <p className="text-xl text-blue-100">
              我们重视您的隐私，致力于保护您的个人信息安全
            </p>
            <div className="mt-6 text-sm text-blue-200">
              最后更新时间：2025年1月15日
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* 概述 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">隐私政策概述</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                写真之家（以下简称"我们"）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。
                我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、
                选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。
              </p>
            </div>
          </section>

          {/* 信息收集 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">我们收集的信息</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">账户信息</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>注册时提供的用户名、邮箱地址</li>
                  <li>个人资料信息（如头像、个人简介等）</li>
                  <li>账户设置和偏好信息</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">使用信息</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>浏览记录、搜索历史</li>
                  <li>收藏、点赞等互动行为</li>
                  <li>设备信息（IP地址、浏览器类型等）</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">上传内容</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>您上传的图片及相关描述信息</li>
                  <li>评论、反馈等用户生成内容</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 信息使用 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <UserCheck className="h-6 w-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">信息使用方式</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">服务提供</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>提供个性化内容推荐</li>
                  <li>维护账户安全</li>
                  <li>处理用户请求和反馈</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">服务改进</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>分析用户行为，优化产品功能</li>
                  <li>进行数据统计和分析</li>
                  <li>开发新功能和服务</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 信息保护 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">信息保护措施</h2>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">技术保护</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>数据加密传输和存储</li>
                    <li>访问权限控制</li>
                    <li>定期安全审计</li>
                    <li>防火墙和入侵检测</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">管理保护</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>员工隐私培训</li>
                    <li>数据访问审批流程</li>
                    <li>第三方合作伙伴审核</li>
                    <li>应急响应机制</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 用户权利 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <UserCheck className="h-6 w-6 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">您的权利</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">访问权</h3>
                  <p className="text-gray-700">您有权了解我们收集、使用您个人信息的情况</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">更正权</h3>
                  <p className="text-gray-700">您有权要求我们更正或补充您的个人信息</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">删除权</h3>
                  <p className="text-gray-700">在特定情况下，您有权要求我们删除您的个人信息</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">撤回同意权</h3>
                  <p className="text-gray-700">您有权撤回对个人信息处理的同意</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie政策 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-6 w-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Cookie 使用说明</h2>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                我们使用Cookie和类似技术来提供、保护和改进我们的服务。Cookie是存储在您设备上的小型文本文件。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">必要Cookie</h3>
                  <p className="text-sm text-gray-600">确保网站正常运行</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">分析Cookie</h3>
                  <p className="text-sm text-gray-600">帮助我们改进服务</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">个性化Cookie</h3>
                  <p className="text-sm text-gray-600">提供个性化体验</p>
                </div>
              </div>
            </div>
          </section>

          {/* 联系我们 */}
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">联系我们</h2>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                如果您对本隐私政策有任何疑问、意见或建议，请通过以下方式联系我们：
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">邮箱联系</h3>
                  <p className="text-gray-700">privacy@photo-home.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">客服热线</h3>
                  <p className="text-gray-700">400-888-0000</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>注意：</strong>我们将在收到您的请求后15个工作日内回复。为了保护您的隐私和安全，
                  我们可能需要验证您的身份后才能处理您的请求。
                </p>
              </div>
            </div>
          </section>

          {/* 政策更新 */}
          <section>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">政策更新</h3>
              <p className="text-gray-700">
                我们可能会不时更新本隐私政策。当我们对隐私政策进行重大变更时，我们会通过网站公告、
                邮件通知等方式告知您。请您定期查看本政策，以了解我们如何保护您的信息。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;