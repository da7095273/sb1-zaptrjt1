import React from 'react';
import { FileText, Scale, AlertTriangle, Users, Shield, CheckCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl font-bold mb-4">使用条款</h1>
            <p className="text-xl text-green-100">
              欢迎使用写真之家，请仔细阅读以下使用条款
            </p>
            <div className="mt-6 text-sm text-green-200">
              生效日期：2025年1月15日
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* 接受条款 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">接受条款</h2>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                欢迎访问写真之家！通过访问或使用我们的网站和服务，您同意受本使用条款的约束。
                如果您不同意这些条款，请不要使用我们的服务。我们保留随时修改这些条款的权利，
                修改后的条款将在网站上公布后立即生效。
              </p>
            </div>
          </section>

          {/* 服务描述 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">服务描述</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">平台服务</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>提供日韩写真图片浏览和下载服务</li>
                  <li>用户注册、登录和个人资料管理</li>
                  <li>图片收藏、点赞和分享功能</li>
                  <li>摄影师作品展示和交流平台</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">VIP服务</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>高清图片无限下载</li>
                  <li>独家VIP专享内容</li>
                  <li>优先客服支持</li>
                  <li>无广告浏览体验</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 用户责任 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">用户责任与义务</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">账户管理</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>提供真实、准确的注册信息</li>
                  <li>保护账户密码安全</li>
                  <li>及时更新个人信息</li>
                  <li>对账户活动承担责任</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">使用规范</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>遵守相关法律法规</li>
                  <li>尊重他人知识产权</li>
                  <li>不传播违法有害信息</li>
                  <li>维护平台良好秩序</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 禁止行为 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">禁止行为</h2>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4 font-semibold">
                以下行为是严格禁止的，违反者将面临账户限制或永久封禁：
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">内容相关</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>上传违法、淫秽、暴力内容</li>
                    <li>侵犯他人版权或肖像权</li>
                    <li>传播虚假、误导性信息</li>
                    <li>恶意刷屏或垃圾信息</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">技术相关</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>使用爬虫或自动化工具</li>
                    <li>恶意攻击服务器</li>
                    <li>破解或绕过技术限制</li>
                    <li>干扰正常服务运行</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 知识产权 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">知识产权</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">平台内容</h3>
                <p className="text-gray-700 mb-4">
                  写真之家平台上的所有内容，包括但不限于文字、图片、音频、视频、软件、程序、版面设计等，
                  均受著作权、商标权及其他知识产权法律法规保护。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>未经授权不得复制、传播或商业使用</li>
                  <li>个人使用需遵守相关限制条件</li>
                  <li>商业使用需获得明确授权</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">用户内容</h3>
                <p className="text-gray-700 mb-4">
                  用户上传的内容版权归用户所有，但用户授予写真之家在平台范围内使用、展示、
                  传播该内容的非独占性许可。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>用户保证拥有上传内容的合法权利</li>
                  <li>用户承担内容侵权的法律责任</li>
                  <li>平台有权删除违规内容</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 免责声明 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">免责声明</h2>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">服务可用性</h3>
                  <p className="text-gray-700">
                    我们努力确保服务的稳定性，但不保证服务不会中断。因系统维护、升级或不可抗力因素
                    导致的服务中断，我们不承担责任。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">内容准确性</h3>
                  <p className="text-gray-700">
                    平台内容仅供参考，我们不保证所有信息的准确性、完整性或时效性。
                    用户应自行判断并承担使用风险。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">第三方链接</h3>
                  <p className="text-gray-700">
                    平台可能包含第三方网站链接，我们不对第三方网站的内容、隐私政策或做法负责。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 服务变更和终止 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-gray-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">服务变更和终止</h2>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">服务变更</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>我们有权随时修改或停止服务</li>
                    <li>重大变更将提前通知用户</li>
                    <li>用户可选择接受或停止使用</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">账户终止</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>用户可随时注销账户</li>
                    <li>违规账户将被限制或封禁</li>
                    <li>终止后数据将按政策处理</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 争议解决 */}
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Scale className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">争议解决</h2>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                本条款的解释、效力及纠纷的解决，适用中华人民共和国法律。
                若用户和写真之家之间发生任何纠纷或争议，首先应友好协商解决；
                协商不成的，应提交至写真之家所在地人民法院诉讼解决。
              </p>
              
              <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">联系方式</h3>
                <p className="text-gray-700">
                  如对本条款有任何疑问，请联系我们：
                  <br />
                  邮箱：legal@photo-home.com
                  <br />
                  电话：400-888-0000
                </p>
              </div>
            </div>
          </section>

          {/* 条款生效 */}
          <section>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">条款生效</h3>
              <p className="text-gray-700">
                本使用条款自2025年1月15日起生效。我们保留随时修改本条款的权利，
                修改后的条款将在网站公布后立即生效。继续使用我们的服务即表示您接受修改后的条款。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;