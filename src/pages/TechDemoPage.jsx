import React from 'react';
import MultimodalStatus from '../components/MultimodalStatus';
import AgentTech from '../components/AgentTech';

const TechDemoPage = () => {
  return (
    <section id="tech-demo" className="module-spacing">
      <div className="module-card">
        <div className="text-center mb-12">
          <h2 className="module-title">技术展示</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
            探索多模态AI技术在政务领域的创新应用，我们融合了多种先进技术，以实现更智能、更高效的内容处理。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <MultimodalStatus />
          <AgentTech />
        </div>
      </div>
    </section>
  );
};

export default TechDemoPage;