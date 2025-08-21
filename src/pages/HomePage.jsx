import React from 'react';
import Hero from '../components/Hero';
import ProjectIntro from '../components/ProjectIntro';
import MultimodalStatus from '../components/MultimodalStatus';
import AgentTech from '../components/AgentTech';
import CoreInteraction from '../components/CoreInteraction';
import FunctionDemo from '../components/FunctionDemo';
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
          <div className="text-center mb-12">
            <h2 className="module-title">项目介绍</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
              DBK智撰工坊是一个基于多模态大语言模型的智能内容生成平台，旨在为政府部门提供高效、智能的报告和文稿撰写服务。
            </p>
          </div>
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
              亲身体验我们精心设计的交互流程。只需输入您的需求，即可获得一份结构完整、内容翔实的报告。
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
              观看功能演示视频，直观了解DBK智撰工坊如何简化您的工作流程，提升文稿撰写效率。
            </p>
          </div>
          <FunctionDemo />
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