import React from 'react';
import MultimodalStatus from '../components/MultimodalStatus';
import AgentTech from '../components/AgentTech';

const TechDemoPage = () => {
  return (
    <section id="tech-demo" className="module-spacing">
      <div className="module-card">
        <div className="text-center mb-12">
          <h2 className="module-title">技术展示</h2>
          <p className="text-lg text-text-secondary mt-4">
            探索多模态AI技术在政务领域的创新应用
          </p>
        </div>
        <div className="content-grid">
          <MultimodalStatus />
          <AgentTech />
        </div>
      </div>
    </section>
  );
};

export default TechDemoPage;