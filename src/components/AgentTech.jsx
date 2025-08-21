import React from 'react';
import { FaBrain, FaTasks, FaCogs, FaShieldAlt } from 'react-icons/fa';

const techConcepts = [
  {
    icon: <FaBrain size={28} />,
    title: '智能感知',
    description: '我们的 Agent 能够理解和处理文本、图像、语音等多种来源的复杂信息，为后续的决策和执行奠定坚实基础。'
  },
  {
    icon: <FaTasks size={28} />,
    title: '自主规划',
    description: '基于用户目标，Agent 会自主地将复杂任务分解为一系列可执行的子任务，并动态规划出最优的执行路径。'
  },
  {
    icon: <FaCogs size={28} />,
    title: '高效执行',
    description: '通过调用内部集成的多种工具（如数据分析、图表生成），Agent 能够自动化地完成报告生成、数据分析等任务。'
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: '安全可控',
    description: '我们将 Agent 的所有操作都置于严格的监控之下，确保其行为符合预设的规范和安全要求，全程可追溯、可审计。'
  }
];

const AgentTech = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Agent 技术实现过程</h3>
      <div className="space-y-6">
        {techConcepts.map((concept, index) => (
          <div key={index} className="flex items-start p-4 bg-bg-main dark:bg-gray-800 rounded-lg shadow-sm">
            <i className="text-brand-primary mt-1 mr-4">{concept.icon}</i>
            <div>
              <h4 className="font-bold text-text-primary">{concept.title}</h4>
              <p className="text-sm text-text-secondary">{concept.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentTech;