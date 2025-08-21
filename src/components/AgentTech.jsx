import React from 'react';
import { FaBrain, FaTasks, FaCogs, FaShieldAlt } from 'react-icons/fa';

const techConcepts = [
  {
    icon: <FaBrain size={28} />,
    title: '智能感知',
    description: '理解处理文本、图像、语音等多种来源的复杂信息。'
  },
  {
    icon: <FaTasks size={28} />,
    title: '自主规划',
    description: '基于目标自主拆解任务、规划并动态调整执行路径。'
  },
  {
    icon: <FaCogs size={28} />,
    title: '高效执行',
    description: '调用工具自动化完成报告生成、数据分析等任务。'
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: '安全可控',
    description: '操作全程记录和审计，确保行为符合预设规范和安全要求。'
  }
];

const AgentTech = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Agent 技术核心</h3>
      <div className="grid grid-cols-2 gap-6">
        {techConcepts.map((concept, index) => (
          <div key={index} className="feature-item p-4 bg-bg-main dark:bg-gray-800 rounded-lg shadow-sm">
            <i className="text-brand-primary mr-4">{concept.icon}</i>
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