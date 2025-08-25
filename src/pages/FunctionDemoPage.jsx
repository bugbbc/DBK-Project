import React from 'react';
import { Link } from 'react-router-dom';

const FunctionDemoPage = () => {
  const functions = [
    { name: '智能写作', path: '/intelligent-writing', description: '利用先进的AI技术，快速生成高质量的文稿，支持多种风格和场景。' },
    { name: '多模态创作', path: '/multimodal-creation', description: '结合文本、图片、音视频等多种媒体，创作内容丰富、形式多样的作品。' },
    { name: '政策解读', path: '/policy-interpretation', description: '精准解读最新政策文件，提取关键信息，为决策提供有力支持。' },
  ];

  return (
    <section id="function-demo" className="module-spacing">
      <div className="module-card">
        <div className="text-center mb-12">
          <h2 className="module-title">功能演示</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
            点击下方功能模块，深入了解DBK智撰工坊的核心能力。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {functions.map((func) => (
            <Link to={func.path} key={func.name} className="block p-6 bg-light-surface dark:bg-dark-surface rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-2">{func.name}</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary">{func.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionDemoPage;