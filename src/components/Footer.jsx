import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaWeixin, FaQq, FaArrowUp } from 'react-icons/fa';
import logo from '../assets/logo.png'; // 假设logo在assets中
import Modal from './Modal';

const links = {
  about: [
    { name: '关于我们', href: '/#team' },
    { name: '团队介绍', href: '/team-detail' },
    { name: '联系我们', href: '/#contact' },
  ],
  services: [
    { name: '智能写作', href: '/intelligent-writing' },
    { name: '多模态创作', href: '/multimodal-creation' },
    { name: '政策解读', href: '/policy-interpretation' },
  ],
  legal: [{ name: '使用条款' }, { name: '隐私政策' }, { name: '免责声明' }],
};

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub size={22} />,
    href: 'https://github.com/your-repo',
  },
  { name: '微信公众号', icon: <FaWeixin size={22} />, href: '#' },
  { name: '技术交流QQ群', icon: <FaQq size={22} />, href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [lastUpdated, setLastUpdated] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleLegalLinkClick = (type) => {
    let title = '';
    let content = '';
    if (type === '使用条款') {
      title = '使用条款';
      content = `
        <p>欢迎使用DBK智撰工坊。这些条款和条件概述了使用我们网站的规则和规定。</p>
        <p>通过访问本网站，我们假定您接受这些条款和条件。如果您不同意接受本页所述的所有条款和条件，请不要继续使用DBK智撰工坊。</p>
        <p><strong>许可：</strong>除非另有说明，DBK智撰工坊和/或其许可方拥有DBK智撰工坊上所有材料的知识产权。所有知识产权均予以保留。您可以出于个人目的访问本网站，但须遵守这些条款和条件中设定的限制。</p>
        <p><strong>您不得：</strong></p>
        <ul>
          <li>从DBK智撰工坊重新发布材料</li>
          <li>从DBK智撰工坊出售、出租或再许可材料</li>
          <li>从DBK智撰工坊复制、复制或抄袭材料</li>
          <li>从DBK智撰工坊重新分发内容</li>
        </ul>
      `;
    } else if (type === '隐私政策') {
      title = '隐私政策';
      content = `
        <p>您的隐私对我们至关重要。DBK智撰工坊的政策是尊重您在我们运营网站时可能收集的任何信息的隐私。</p>
        <p>我们仅在真正需要为向您提供服务时才要求提供个人信息。我们通过公平合法的方式，在您知情和同意的情况下收集信息。我们还会告知您我们收集信息的原因以及信息将如何使用。</p>
        <p>我们仅在为向您提供所请求的服务所需的时间内保留收集的信息。我们存储的数据将以商业上可接受的方式加以保护，以防止丢失和被盗，以及未经授权的访问、披露、复制、使用或修改。</p>
        <p>我们不会公开或与第三方共享任何个人识别信息，除非法律要求。</p>
      `;
    } else if (type === '免责声明') {
      title = '免责声明';
      content = `
        <p>DBK智撰工坊上提供的信息仅供一般参考。本网站上的所有信息均出于善意提供，但我们对本网站上任何信息的准确性、充分性、有效性、可靠性、可用性或完整性不作任何明示或暗示的陈述或保证。</p>
        <p>在任何情况下，我们均不对您因使用本网站或依赖本网站上提供的任何信息而遭受的任何损失或损害承担任何责任。您使用本网站以及您对本网站上任何信息的依赖完全由您自担风险。</p>
        <p>本网站可能包含（或您可能通过本网站被发送到）指向其他网站或第三方内容的链接，或指向网站和横幅广告或其他广告中功能的链接。我们不会对此类外部链接的准确性或可靠性进行调查、监控或检查。</p>
      `;
    }
    setModalContent({ title, content });
  };

  useEffect(() => {
    // 模拟获取最后更新时间
    setLastUpdated(new Date().toLocaleDateString('zh-CN'));

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-main border-t border-border-color-light dark:border-border-color-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-4 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="DBK智撰工坊 Logo" className="h-10 w-10 mr-3" />
              <h3 className="text-2xl font-bold text-text-primary">
                DBK智撰工坊
              </h3>
            </div>
            <p className="text-text-secondary mt-3 text-sm max-w-md">
              智汇多模态，笔撰政务新篇。我们致力于通过领先的AI技术，为政府部门提供高效、智能的文书工作解决方案。
            </p>
            <div className="flex space-x-5 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-brand-primary transform hover:-translate-y-1 transition-all duration-300"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-1 md:col-span-4 lg:col-span-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-text-primary tracking-wider uppercase">
                关于
              </h4>
              <ul className="mt-4 space-y-3">
                {links.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-base text-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary tracking-wider uppercase">
                核心功能
              </h4>
              <ul className="mt-4 space-y-3">
                {links.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-base text-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary tracking-wider uppercase">
                法律信息
              </h4>
              <ul className="mt-4 space-y-3">
                {links.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLegalLinkClick(link.name)}
                      className="text-base text-text-secondary hover:text-brand-primary transition-colors text-left w-full"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-text-secondary">
            <span>&copy; {currentYear} DBK智撰工坊. 保留所有权利.</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline mt-2 sm:mt-0">
              最后更新: {lastUpdated}
            </span>
          </p>
          <p className="text-sm text-text-secondary mt-4 sm:mt-0">
            "华为杯"第二届中国研究生人工智能创新大赛参赛作品
          </p>
        </div>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-opacity duration-300"
          aria-label="返回顶部"
          title="返回顶部"
        >
          <FaArrowUp size={20} />
        </button>
      )}
      {modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={() => setModalContent(null)}
        />
      )}
    </footer>
  );
};

export default Footer;
