import React from 'react';
import CoreInteraction from '../components/CoreInteraction';

const InteractionPage = () => {
  return (
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
  );
};

export default InteractionPage;