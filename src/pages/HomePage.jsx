import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectIntro from '../components/ProjectIntro';
import MultimodalStatus from '../components/MultimodalStatus';
import AgentTech from '../components/AgentTech';
import CoreInteraction from '../components/CoreInteraction';
import Team from '../components/Team';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <div className="module-divider" />

      <section id="project-intro" className="module-spacing">
        <div className="module-card">
          <ProjectIntro />
        </div>
      </section>

      <div className="module-divider" />

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

      <div className="module-divider" />

      <section id="interaction" className="module-spacing">
        <div className="module-card">
          <div className="text-center mb-12">
            <h2 className="module-title">交互体验</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
              亲身体验我们精心设计的交互流程。您可以输入文本、上传图片或文件，我们的系统将为您生成一份结构完整、内容翔实的报告。
            </p>
          </div>
          <div className="highlight-container">
            <CoreInteraction />
          </div>
        </div>
      </section>

      <div className="module-divider" />

      <section id="function-demo" className="module-spacing">
        <div className="module-card">
          <div className="text-center mb-12">
            <h2 className="module-title">功能演示</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
              体验我们全新的统一对话界面，在一个地方访问所有核心功能。
            </p>
          </div>
          <div className="text-center">
            <Link to="/integrated" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              开始使用
            </Link>
          </div>
        </div>
      </section>

      <div className="module-divider" />

      <section id="team" className="module-spacing">
        <div className="module-card">
          <div className="text-center mb-12">
            <h2 className="module-title">团队介绍</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
              我们是一支充满激情、经验丰富的团队，致力于用AI技术赋能内容创作。
            </p>
          </div>
          <Team />
        </div>
      </section>

      <div className="module-divider" />

      <section id="contact" className="module-spacing pb-16">
        <div className="module-card">
          <div className="text-center mb-12">
            <h2 className="module-title">联系我们</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
              有任何问题或合作意向？请随时与我们联系，我们期待您的回音。
            </p>
          </div>
          <Contact />
        </div>
      </section>
    </>
  );
};

export default HomePage;