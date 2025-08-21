import React from 'react';
import { FaChartBar, FaFileAlt, FaComments } from 'react-icons/fa';

const multimodalFeatures = [
  {
    icon: <FaFileAlt size={28} />,
    title: '文本与图像识别 (OCR)',
    description: '我们集成了先进的 OCR 技术，能够从扫描的文档、图片中精准提取文字信息，并将其转化为可编辑、可分析的结构化数据。'
  },
  {
    icon: <FaChartBar size={28} />,
    title: '图表数据解析',
    description: '平台能够自动识别报告中的柱状图、折线图、饼图等多种图表，并提取出关键数据点和趋势，为深度分析提供支持。'
  },
  {
    icon: <FaComments size={28} />,
    title: '自然语言生成 (NLG)',
    description: '基于强大的语言模型，系统能够将结构化的数据和分析结果，自动生成流畅、专业、符合政务文风的报告文本。'
  }
];

const MultimodalStatus = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">多模态技术解析</h3>
      <div className="space-y-6">
        {multimodalFeatures.map((feature, index) => (
          <div key={index} className="flex items-start p-4 bg-bg-main dark:bg-gray-800 rounded-lg shadow-sm">
            <i className="text-brand-primary mt-1 mr-4">{feature.icon}</i>
            <div>
              <h4 className="font-bold text-text-primary">{feature.title}</h4>
              <p className="text-sm text-text-secondary">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultimodalStatus;