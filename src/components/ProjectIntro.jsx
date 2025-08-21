import React from 'react';
import { FaLightbulb, FaRocket, FaShieldAlt, FaPuzzlePiece } from 'react-icons/fa';

const features = [
  {
    icon: <FaLightbulb size={32} />,
    title: '智能驱动',
    description: '基于前沿的 Agent 技术，我们的平台能够模拟专家级的思考过程，实现高度智能化的内容生成与辅助决策。它能帮助您快速起草、审阅和修订各类文稿，显著提升政务工作的效率与质量。'
  },
  {
    icon: <FaRocket size={32} />,
    title: '高效赋能',
    description: '提供一键生成、智能润色、多维分析等强大功能。无论是日常报告还是重要文件，都能将繁琐的文书工作化繁为简，让您从重复性劳动中解放出来，专注于更有价值的核心业务。'
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: '安全可靠',
    description: '我们深知政务数据的敏感性。因此，平台采用数据本地化处理方案，所有操作均在您的安全环境中进行，完全符合国家对政务系统的严格安全标准，确保信息安全无虞，让您使用安心。'
  },
  {
    icon: <FaPuzzlePiece size={32} />,
    title: '多模态融合',
    description: '突破单一文本的局限，平台支持处理和融合文本、图片、图表等多种信息格式。能够深度理解和分析复杂信息，生成内容翔实、形式多样的现代化报告，满足多样化的政务需求。'
  }
];

const ProjectIntro = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};

export default ProjectIntro;