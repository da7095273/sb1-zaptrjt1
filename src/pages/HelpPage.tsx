import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  User, 
  Download, 
  Crown, 
  Camera, 
  Shield, 
  CreditCard,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';

const HelpPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('account');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const categories = [
    { id: 'account', name: '账户管理', icon: User },
    { id: 'download', name: '下载使用', icon: Download },
    { id: 'vip', name: 'VIP服务', icon: Crown },
    { id: 'upload', name: '上传作品', icon: Camera },
    { id: 'payment', name: '支付问题', icon: CreditCard },
    { id: 'privacy', name: '隐私安全', icon: Shield },
  ];

  const faqs = {
    account: [
      {
        id: 'acc-1',
        question: '如何注册账户？',
        answer: '点击页面右上角的"登录"按钮，然后选择"立即注册"。填写邮箱地址、设置密码即可完成注册。注册后您将获得免费用户权限，可以浏览和下载部分免费内容。'
      },
      {
        id: 'acc-2',
        question: '忘记密码怎么办？',
        answer: '在登录页面点击"忘记密码？"链接，输入您的注册邮箱，我们会发送重置密码的链接到您的邮箱。请检查邮箱（包括垃圾邮件文件夹）并按照邮件指引重置密码。'
      },
      {
        id: 'acc-3',
        question: '如何修改个人信息？',
        answer: '登录后点击右上角的用户头像，选择"个人设置"。在设置页面您可以修改用户名、头像、个人简介等信息。邮箱地址修改需要验证新邮箱。'
      },
      {
        id: 'acc-4',
        question: '可以注销账户吗？',
        answer: '可以。在个人设置页面底部有"注销账户"选项。注销前请确保下载您需要的内容，注销后账户数据将无法恢复。VIP用户注销前请联系客服处理剩余服务期。'
      }
    ],
    download: [
      {
        id: 'dl-1',
        question: '如何下载图片？',
        answer: '点击图片进入详情页，然后点击"下载"按钮。免费用户每日可下载10张图片，VIP用户享受无限下载。下载的图片仅供个人使用，商业用途需要额外授权。'
      },
      {
        id: 'dl-2',
        question: '下载的图片在哪里？',
        answer: '图片会下载到您浏览器的默认下载文件夹中。您可以在浏览器的下载管理器中查看下载历史和文件位置。建议为写真图片创建专门的文件夹进行整理。'
      },
      {
        id: 'dl-3',
        question: '为什么下载失败？',
        answer: '下载失败可能由以下原因造成：1）网络连接不稳定 2）浏览器阻止了下载 3）已达到每日下载限制 4）文件暂时不可用。请检查网络连接并重试，或联系客服获得帮助。'
      },
      {
        id: 'dl-4',
        question: '可以批量下载吗？',
        answer: 'VIP用户可以使用批量下载功能。在分类页面或搜索结果页面，选择多张图片后点击"批量下载"按钮。免费用户暂不支持批量下载功能。'
      }
    ],
    vip: [
      {
        id: 'vip-1',
        question: 'VIP会员有什么特权？',
        answer: 'VIP会员享受：1）无限高清图片下载 2）独家VIP专享内容 3）无广告浏览体验 4）优先客服支持 5）批量下载功能 6）高级搜索筛选 7）收藏夹无限制。'
      },
      {
        id: 'vip-2',
        question: 'VIP价格是多少？',
        answer: '我们提供多种VIP套餐：月度会员29元/月，季度会员79元/3个月，年度会员299元/年。年度会员最优惠，平均每月仅需25元。首次购买用户享受7天免费试用。'
      },
      {
        id: 'vip-3',
        question: '如何升级VIP？',
        answer: '登录后点击"升级VIP"按钮，选择合适的套餐并完成支付即可。支持支付宝、微信支付、银行卡等多种支付方式。升级后立即生效，无需等待。'
      },
      {
        id: 'vip-4',
        question: 'VIP可以退款吗？',
        answer: '我们提供7天无理由退款保证。如果您在购买VIP后7天内不满意，可以申请全额退款。超过7天的退款申请将根据具体情况处理。退款将在3-5个工作日内到账。'
      }
    ],
    upload: [
      {
        id: 'up-1',
        question: '如何上传作品？',
        answer: '注册并登录后，点击"上传作品"按钮。选择图片文件，填写标题、描述、标签等信息，选择合适的分类，然后提交审核。审核通过后作品将在平台展示。'
      },
      {
        id: 'up-2',
        question: '上传有什么要求？',
        answer: '图片要求：1）原创作品或拥有版权 2）分辨率不低于1920x1080 3）文件大小不超过20MB 4）支持JPG、PNG格式 5）内容健康，符合平台规范。'
      },
      {
        id: 'up-3',
        question: '上传作品有收益吗？',
        answer: '是的！优质作品可以获得收益分成。当用户下载您的作品时，您将获得一定比例的收益。具体分成比例根据作品质量和用户等级而定。收益每月结算一次。'
      },
      {
        id: 'up-4',
        question: '作品被拒绝怎么办？',
        answer: '如果作品审核未通过，您会收到详细的拒绝原因。常见原因包括：版权问题、质量不达标、内容不符合规范等。您可以根据反馈修改后重新提交。'
      }
    ],
    payment: [
      {
        id: 'pay-1',
        question: '支持哪些支付方式？',
        answer: '我们支持多种支付方式：支付宝、微信支付、银联卡、信用卡、Apple Pay等。所有支付都通过加密通道处理，确保您的支付信息安全。'
      },
      {
        id: 'pay-2',
        question: '支付失败怎么办？',
        answer: '支付失败可能原因：1）银行卡余额不足 2）网络连接问题 3）支付限额限制 4）银行风控。请检查账户余额和网络连接，或尝试其他支付方式。如仍有问题请联系客服。'
      },
      {
        id: 'pay-3',
        question: '如何查看消费记录？',
        answer: '登录后进入"个人中心"-"消费记录"查看所有支付记录，包括VIP购买、单次下载等。每笔交易都有详细的时间、金额和订单号信息。'
      },
      {
        id: 'pay-4',
        question: '可以开发票吗？',
        answer: '可以。VIP用户可以申请电子发票。在消费记录页面点击"申请发票"，填写发票信息即可。发票将在3个工作日内发送到您的邮箱。'
      }
    ],
    privacy: [
      {
        id: 'pri-1',
        question: '个人信息安全吗？',
        answer: '我们采用银行级别的安全措施保护您的个人信息：SSL加密传输、数据库加密存储、访问权限控制、定期安全审计等。我们承诺不会向第三方泄露您的个人信息。'
      },
      {
        id: 'pri-2',
        question: '如何保护账户安全？',
        answer: '建议：1）设置复杂密码并定期更换 2）不在公共设备上保存登录信息 3）及时退出登录 4）开启登录提醒 5）发现异常立即修改密码。我们也会监控异常登录行为。'
      },
      {
        id: 'pri-3',
        question: '数据会被删除吗？',
        answer: '正常使用情况下，您的数据会被永久保存。账户注销时，个人信息将在30天内删除，但已发布的作品可能会保留（匿名化处理）。我们会定期备份数据防止意外丢失。'
      },
      {
        id: 'pri-4',
        question: '如何举报违规内容？',
        answer: '如发现违规内容，请点击内容页面的"举报"按钮，选择举报原因并提供详细说明。我们会在24小时内处理举报，对违规内容进行删除或限制。举报者信息将被保密。'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">帮助中心</h1>
            <p className="text-xl text-blue-100 mb-8">
              为您提供全面的使用指南和问题解答
            </p>
            
            {/* 搜索框 */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索您的问题..."
                  className="w-full px-6 py-4 pl-12 text-gray-900 bg-white rounded-full focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 侧边栏分类 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">问题分类</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 主内容区 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
              
              <div className="space-y-4">
                {faqs[activeCategory as keyof typeof faqs]?.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 联系客服 */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">还有其他问题？</h3>
                <p className="text-blue-100 mb-6">
                  我们的客服团队随时为您提供帮助
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Mail className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                    <h4 className="font-semibold mb-2">邮件支持</h4>
                    <p className="text-sm text-blue-100">support@photo-home.com</p>
                    <p className="text-xs text-blue-200 mt-1">24小时内回复</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Phone className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                    <h4 className="font-semibold mb-2">电话支持</h4>
                    <p className="text-sm text-blue-100">400-888-0000</p>
                    <p className="text-xs text-blue-200 mt-1">工作日 9:00-18:00</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <MessageCircle className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                    <h4 className="font-semibold mb-2">在线客服</h4>
                    <p className="text-sm text-blue-100">即时聊天支持</p>
                    <p className="text-xs text-blue-200 mt-1">7x24小时在线</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;