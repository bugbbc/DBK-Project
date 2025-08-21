import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const demos = [
  {
    title: '一键生成工作报告',
    description: '无论是周报、月报还是年度总结，只需输入核心要点和数据，AI 就能为您生成结构完整、内容详实、符合政务文风的专业报告，并支持一键导出为 Word 或 PDF 格式，极大提升文书撰写效率。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E4%B8%80%E9%94%AE%E6%8A%A5%E5%91%8A+Demo',
  },
  {
    title: '多模态舆情分析',
    description: '上传相关新闻链接、社交媒体截图或视频，系统能自动分析事件的情感倾向、识别关键人物与观点，并生成包含数据图表和核心摘要的可视化舆情分析报告，助您快速掌握舆论动态。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E8%88%86%E6%83%85%E5%88%86%E6%9E%90+Demo',
  },
  {
    title: '智能政策解读',
    description: '面对冗长复杂的政策文件，只需将其粘贴或上传，AI 即可为您自动提炼核心要点、解读关键条款，并以简洁明了的问答形式提供精准的查询服务，让政策精神一目了然。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E6%94%BF%E7%AD%96%E8%A7%A3%E8%AF%BB+Demo',
  },
  {
    title: '跨语言内容翻译与润色',
    description: '整合了领先的神经机器翻译技术，支持多种语言与中文的精准互译。除此之外，AI 还能对翻译结果进行智能润色，使其更符合中文阅读习惯和官方语境，确保跨文化交流的准确与得体。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E8%B7%A8%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91+Demo',
  },
  {
    title: '会议纪要自动生成',
    description: '上传会议录音或视频，AI 将自动完成语音转文字、区分不同发言人、并智能提炼会议议题与核心决议，最终生成一份结构清晰、内容完整的会议纪要，让您从繁琐的记录工作中彻底解放。',
    videoUrl: '#',
    thumbnail: 'https://placehold.co/1470x560/png?text=%E4%BC%9A%E8%AE%AE%E7%BA%AA%E8%A6%81+Demo',
  },
];

const FunctionDemo = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {demos.map((demo, index) => (
        <div
          key={index}
          className="module-card group transform transition-transform duration-300 hover:-translate-y-2"
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
  );
};

export default FunctionDemo;