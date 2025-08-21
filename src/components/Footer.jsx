import React from "react";
import { FaGithub, FaWeixin, FaQq, FaArrowUp } from "react-icons/fa";

const links = {
  about: [
    { name: "关于我们", href: "#about" },
    { name: "团队介绍", href: "#team" },
    { name: "联系我们", href: "#contact" },
  ],
  services: [
    { name: "智能写作", href: "#" },
    { name: "多模态创作", href: "#" },
    { name: "政策解读", href: "#" },
  ],
  legal: [
    { name: "使用条款", href: "#" },
    { name: "隐私政策", href: "#" },
    { name: "免责声明", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={22} />,
    href: "https://github.com/your-repo",
  },
  { name: "微信公众号", icon: <FaWeixin size={22} />, href: "#" },
  { name: "技术交流QQ群", icon: <FaQq size={22} />, href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-main border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-2xl font-bold text-text-primary">
              DBK智撰工坊
            </h3>
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
                  className="text-text-secondary hover:text-brand-primary transition-colors"
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
                    <a
                      href={link.href}
                      className="text-base text-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {link.name}
                    </a>
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
                    <a
                      href={link.href}
                      className="text-base text-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {link.name}
                    </a>
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
                    <a
                      href={link.href}
                      className="text-base text-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-text-secondary">
            &copy; {currentYear} DBK智撰工坊. 保留所有权利。
          </p>
          <p className="text-sm text-text-secondary mt-4 sm:mt-0">
            "华为杯"第二届中国研究生人工智能创新大赛参赛作品
          </p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
        aria-label="返回顶部"
        title="返回顶部"
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
