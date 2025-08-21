import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const demos = [
  {
    title: '一键生成工作报告',
    description: '输入关键要点，AI自动生成结构完整、内容详实的周报、月报或年度总结，并支持导出为Word或PDF格式。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E4%B8%80%E9%94%AE%E6%8A%A5%E5%91%8A+Demo',
  },
  {
    title: '多模态舆情分析',
    description: '上传相关新闻链接或视频，系统自动分析情感倾向、提取关键事件，并生成可视化舆情分析报告。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E8%88%86%E6%83%85%E5%88%86%E6%9E%90+Demo',
  },
  {
    title: '智能政策解读',
    description: '粘贴政策文件内容，AI自动提炼核心要点、解读关键条款，并以问答形式提供精准查询服务。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E6%94%BF%E7%AD%96%E8%A7%A3%E8%AF%BB+Demo',
  },
];

const FunctionDemo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="module-title">功能演示</h2>
        <p className="text-lg text-text-secondary mt-4">探索“智撰工坊”如何赋能您的日常工作流程。</p>
      </div>
      <div className="content-grid mt-12">
        {demos.map((demo, index) => (
          <div
            key={index}
            className="module-card group"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img src={demo.thumbnail} alt={demo.title} referrerPolicy="no-referrer" className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={demo.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`播放 ${demo.title} 演示视频`} className="transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <FaPlayCircle className="text-white text-7xl opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">{demo.title}</h3>
              <p className="text-text-secondary text-sm">{demo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionDemo;