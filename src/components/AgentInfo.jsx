import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import transformerImg from '../assets/transformer.png';
import llama3Img from '../assets/llama3.png';
import geminiImg from '../assets/gemini.png';
import claudeImg from '../assets/claude.png';

const modelData = [
  { name: 'GPT-4', 'Performance': 95, 'Speed': 70, 'Cost': 85 },
  { name: 'Llama3', 'Performance': 90, 'Speed': 85, 'Cost': 60 },
  { name: 'Claude 3', 'Performance': 88, 'Speed': 80, 'Cost': 70 },
  { name: 'Gemini', 'Performance': 92, 'Speed': 75, 'Cost': 80 },
];

const architectureData = [
  {
    name: "Transformer",
    paper: "Attention Is All You Need",
    link: "https://arxiv.org/abs/1706.03762",
    imageUrl: transformerImg
  },
  {
    name: "Llama3",
    paper: "The Llama3-V, a large multimodal model competitive with GPT4-V",
    link: "https://arxiv.org/abs/2406.16435",
    imageUrl: llama3Img
  },
  {
    name: "Gemini",
    paper: "Gemini: A Family of Highly Capable Multimodal Models",
    link: "https://arxiv.org/abs/2312.11805",
    imageUrl: geminiImg
  },
  {
    name: "Claude",
    paper: "Claude 3: A Family of Models for Any Task",
    link: "https://www.anthropic.com/news/claude-3-family",
    imageUrl: claudeImg
  }
];

const agentData = [
  { id: 1, name: '智能写作Agent', description: '基于大语言模型，能够感知环境、自主决策并执行复杂任务的智能系统，具备目标导向、工具使用和多步骤推理能力。', version: '1.2' },
  { id: 2, name: '多模态创作Agent', description: '一种能够同时处理文本、图像、文件等多种输入，并生成相应多模态内容的智能Agent。', version: '1.1' },
  { id: 3, name: '政策解读Agent', description: '基于知识库和大语言模型对政策文件进行智能解读和分析，帮助用户快速理解政策要点和社会实质。', version: '1.0' },
];

const paperData = [
  { id: 1, model: 'GPT-4', paper: 'Sparks of Artificial General Intelligence: Early experiments with GPT-4', link: 'https://arxiv.org/abs/2303.12712' },
  { id: 2, model: 'Llama3', paper: 'The Llama 3 Herd of Models', link: 'https://ai.meta.com/research/publications/the-llama-3-herd-of-models/' },
  { id: 3, model: 'Claude 3', paper: 'The Claude 3 Model Family: Opus, Sonnet, Haiku', link: 'https://www.anthropic.com/news/claude-3-family' },
  { id: 4, model: 'Gemini', paper: 'Gemini: A Family of Highly Capable Multimodal Models', link: 'https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf' },
];

const AgentInfo = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Agent与大模型性能概览</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">大模型性能对比</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={modelData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Performance" fill="#8884d8" />
            <Bar dataKey="Speed" fill="#82ca9d" />
            <Bar dataKey="Cost" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Agent功能介绍</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Agent名称</th>
                <th className="py-3 px-4 text-left">功能描述</th>
                <th className="py-3 px-4 text-left">版本</th>
              </tr>
            </thead>
            <tbody>
              {agentData.map((agent) => (
                <tr key={agent.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4">{agent.name}</td>
                  <td className="py-3 px-4">{agent.description}</td>
                  <td className="py-3 px-4">{agent.version}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">大模型原始论文</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">模型</th>
                <th className="py-3 px-4 text-left">论文</th>
                <th className="py-3 px-4 text-left">链接</th>
              </tr>
            </thead>
            <tbody>
              {paperData.map((paper) => (
                <tr key={paper.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4">{paper.model}</td>
                  <td className="py-3 px-4">{paper.paper}</td>
                  <td className="py-3 px-4">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      阅读论文
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">大模型框架图</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {architectureData.map((item) => (
            <div key={item.name} className="bg-white shadow-md rounded-lg p-4 text-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.imageUrl} alt={`${item.name} Architecture`} className="w-full h-auto object-contain mb-4" />
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600 hover:underline">{item.paper}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;