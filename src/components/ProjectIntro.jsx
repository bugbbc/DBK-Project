import React from 'react';
import { FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaLightbulb size={32} />,
    title: '智能驱动',
    description: '基于前沿的 Agent 技术，实现高度智能化的内容生成与辅助决策，提升政务工作效率与质量。'
  },
  {
    icon: <FaRocket size={32} />,
    title: '高效赋能',
    description: '一键生成、智能润色、多维分析，将繁琐的文书工作化繁为简，让您专注于核心业务。'
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: '安全可靠',
    description: '数据本地化处理，符合严格的政务安全标准，确保信息安全无虞，使用安心。'
  }
];

const ProjectIntro = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="module-title">项目介绍</h2>
        <p className="text-lg text-text-secondary mt-4">DBK 智撰工坊：您的智能政务写作伙伴</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-bg-main dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 text-brand-primary mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectIntro;