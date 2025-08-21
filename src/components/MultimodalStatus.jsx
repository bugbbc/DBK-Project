import React from 'react';
import { FaChartBar, FaFileAlt, FaComments } from 'react-icons/fa';

const statusData = [
  {
    icon: <FaChartBar size={28} />,
    label: '数据可视化',
    value: 85,
    description: '洞察关键趋势'
  },
  {
    icon: <FaFileAlt size={28} />,
    label: '报告生成',
    value: 92,
    description: '生成专业报告'
  },
  {
    icon: <FaComments size={28} />,
    label: '智能交互',
    value: 78,
    description: '提升人机协作效率'
  }
];

const MultimodalStatus = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">多模态能力现状</h3>
      <div className="space-y-6">
        {statusData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center mb-2">
              <i className="text-brand-primary mr-3">{item.icon}</i>
              <h4 className="font-bold text-text-primary">{item.label}</h4>
              <span className="ml-auto text-sm font-semibold text-brand-primary">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-brand-primary h-2.5 rounded-full"
                style={{width: `${item.value}%`}}
              />
            </div>
            <p className="text-sm text-text-secondary mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultimodalStatus;