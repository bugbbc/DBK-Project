import React, { useState } from 'react';
import { Input, Button, List, Avatar, Card, Tabs } from 'antd';

const { TextArea } = Input;
const { TabPane } = Tabs;

const IntelligentWritingPage = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // 模拟智能写作响应数据
  const mockResponses = {
    report: `# 人工智能发展趋势报告\n\n## 一、引言\n\n人工智能（AI）作为新一轮科技革命和产业变革的核心驱动力，正在深刻改变着人类社会的生产方式、生活方式和思维方式。\n\n## 二、技术发展趋势\n\n### 2.1 大语言模型（LLMs）持续演进\n大型语言模型如GPT-4、Claude 2等在理解能力和生成能力上不断突破，模型规模和参数持续增长。\n\n### 2.2 多模态融合成为主流\n文本、图像、音频、视频等不同模态的信息融合处理技术快速发展，AI系统能够同时理解和生成多种形式的内容。\n\n### 2.3 轻量化模型加速落地\n为了适应边缘计算和移动设备需求，模型压缩、量化、知识蒸馏等技术使得AI模型在保持高性能的同时降低计算资源消耗。\n\n## 三、产业应用前景\n\n人工智能技术在金融、医疗、制造、教育、交通等领域的应用不断深化，推动各行业数字化、智能化转型。\n\n## 四、挑战与对策\n\n尽管AI技术发展迅速，但仍面临数据隐私、算法偏见、安全风险等诸多挑战，需要技术创新和政策监管协同发力。\n\n## 五、结论\n\n人工智能的发展将继续保持高速增长态势，未来将更加注重技术的可解释性、安全性和普惠性，为人类社会创造更大价值。\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
    speech: `# 项目启动会议发言稿\n\n尊敬的各位领导、同事们：\n\n大家上午好！\n\n今天，我们在这里隆重召开[项目名称]启动会议，标志着这个承载着我们共同期望的项目正式拉开帷幕。\n\n首先，我谨代表项目组，向一直以来关心、支持本项目的各位领导和同事表示衷心的感谢！\n\n## 项目背景与意义\n\n随着[行业背景/市场需求]的快速发展，[项目名称]的实施具有重要的战略意义。它将帮助我们[解决的问题/带来的价值]，提升我们在[相关领域]的核心竞争力。\n\n## 项目目标与范围\n\n我们的总体目标是：在[时间节点]前，完成[具体任务]，实现[预期成果]。项目范围涵盖[主要内容]。\n\n## 项目组织与分工\n\n为确保项目顺利推进，我们成立了专门的项目团队，设立了[各小组名称]等多个专项小组，明确了各成员的职责和分工。\n\n## 工作计划与节点\n\n项目将分为[阶段名称]三个阶段实施，关键时间节点包括：[列出主要里程碑]。\n\n## 工作要求\n\n为确保项目高质量完成，我提几点要求：\n\n1. 高度重视，精心组织\n2. 加强沟通，密切协作\n3. 严控质量，确保安全\n4. 强化考核，注重实效\n\n同志们，[项目名称]的启动，既是机遇也是挑战。让我们以饱满的热情、务实的作风、创新的精神，全力以赴推进项目实施，确保项目如期高质量完成！\n\n最后，预祝项目取得圆满成功！\n\n谢谢大家！\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
    manual: `# [产品名称]说明书大纲\n\n## 一、产品概述\n\n### 1.1 产品简介\n简要介绍产品的基本信息、定位和主要功能。\n\n### 1.2 产品特点\n列出产品的核心优势和差异化特点。\n\n### 1.3 适用范围\n说明产品的适用场景和目标用户群体。\n\n## 二、系统要求\n\n### 2.1 硬件要求\n列出产品运行所需的最低和推荐硬件配置。\n\n### 2.2 软件要求\n列出产品运行所需的操作系统、浏览器等软件环境。\n\n## 三、安装与部署\n\n### 3.1 安装前准备\n安装前需要完成的准备工作。\n\n### 3.2 安装步骤\n详细的安装流程和操作说明。\n\n### 3.3 部署配置\n部署过程中的关键配置项说明。\n\n## 四、使用指南\n\n### 4.1 界面介绍\n产品主要界面和功能区域的说明。\n\n### 4.2 基本操作\n用户常用的基本操作步骤。\n\n### 4.3 高级功能\n产品的高级功能和使用方法。\n\n## 五、故障排除\n\n### 5.1 常见问题\n用户在使用过程中可能遇到的常见问题及解决方法。\n\n### 5.2 错误代码\n常见错误代码的含义和解决方法。\n\n## 六、附录\n\n### 6.1 术语解释\n产品相关的专业术语解释。\n\n### 6.2 快捷键\n常用快捷键列表。\n\n### 6.3 联系方式\n技术支持和售后服务的联系方式。\n\n---\n\n生成时间：${new Date().toLocaleString()}`
  };
  
  const handleSubmit = () => {
    if (!inputText.trim()) return;
    
    const userMessage = { id: Date.now(), type: 'user', content: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsGenerating(true);
    
    // 根据输入内容选择模拟响应
    let responseType = 'report';
    if (inputText.includes('发言稿') || inputText.includes('讲话')) {
      responseType = 'speech';
    } else if (inputText.includes('说明书') || inputText.includes('手册')) {
      responseType = 'manual';
    }
    
    // 模拟生成响应过程
    setTimeout(() => {
      const botMessage = { 
        id: Date.now() + 1, 
        type: 'bot', 
        content: mockResponses[responseType] 
      };
      setMessages(prev => [...prev, botMessage]);
      setIsGenerating(false);
    }, 2000);
  };
  
  const writingPrompts = [
    '生成一份关于人工智能发展趋势的报告',
    '起草一份项目启动会议发言稿',
    '撰写一份产品说明书大纲'
  ];
  
  const formatMessageContent = (content) => {
    // 简单的Markdown解析和格式化
    return content
      .replace(/#{1,6}\s(.*?)(\n|$)/g, (match, text, end) => `<h${match.match(/#/g).length}>${text}</h${match.match(/#/g).length}>${end}`)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>')
      .replace(/---/g, '<hr/>');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">智能写作</h1>
      
      <Tabs defaultActiveKey="1" className="mb-6">
        <TabPane tab="功能介绍" key="1">
          <Card>
            <p className="mb-4">智能写作功能基于先进的大语言模型，能够根据用户提供的需求，快速生成各类文档内容，包括但不限于：</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>工作报告、研究报告、分析报告等各类报告</li>
              <li>会议发言稿、演讲稿等各类讲话材料</li>
              <li>产品说明书、用户手册等技术文档</li>
              <li>公文、通知、方案等政务文档</li>
            </ul>
            <p>您只需输入具体的写作需求，系统将自动为您生成符合要求的内容初稿，大大提高您的工作效率。</p>
          </Card>
        </TabPane>
        <TabPane tab="使用指南" key="2">
          <Card>
            <p className="mb-4">使用智能写作功能，您可以按照以下步骤操作：</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>在下方输入框中，详细描述您的写作需求</li>
              <li>点击"提交需求"按钮，等待系统生成内容</li>
              <li>查看生成的内容，根据需要进行修改和调整</li>
              <li>您也可以点击右侧的常用提示词，快速发起写作请求</li>
            </ol>
            <p className="text-blue-600">提示：提供的需求越详细，生成的内容质量越高。您可以指定文档类型、风格要求、内容要点等信息。</p>
          </Card>
        </TabPane>
      </Tabs>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* 聊天区域 */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-10">
                <p>请输入您的写作需求，或选择右侧的常用提示词开始</p>
              </div>
            )}
            
            <List
              dataSource={messages}
              renderItem={message => (
                <List.Item className={`mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <Avatar className={`${message.type === 'user' ? 'bg-blue-500' : 'bg-green-500'}`}>
                      {message.type === 'user' ? '用户' : 'AI'}
                    </Avatar>
                    <div 
                      className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'} overflow-hidden`}
                      dangerouslySetInnerHTML={{
                        __html: message.type === 'bot' ? formatMessageContent(message.content) : message.content
                      }}
                    />
                  </div>
                </List.Item>
              )}
            />
            
            {isGenerating && (
              <div className="flex justify-start items-center p-4">
                <Avatar className="bg-green-500 mr-2">AI</Avatar>
                <div className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                  <div className="flex space-x-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <TextArea
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="请输入您的写作需求...例如：生成一份关于人工智能发展趋势的报告"
              rows={4}
              className="mb-2"
              disabled={isGenerating}
            />
            <Button 
              type="primary" 
              onClick={handleSubmit} 
              className="w-full"
              disabled={isGenerating || !inputText.trim()}
            >
              {isGenerating ? '生成中...' : '提交需求'}
            </Button>
          </div>
        </div>
        
        {/* 提示词建议和功能介绍 */}
        <div className="w-full md:w-80">
          <Card title="常用提示词" className="mb-4">
            <List
              dataSource={writingPrompts}
              renderItem={(prompt, index) => (
                <List.Item>
                  <Button
                    type="link"
                    onClick={() => setInputText(prompt)}
                    className="w-full justify-start text-left"
                    disabled={isGenerating}
                  >
                    {prompt}
                  </Button>
                </List.Item>
              )}
            />
          </Card>
          
          <Card title="功能特点">
            <List
              size="small"
              dataSource={[
                "基于大语言模型的智能生成",
                "支持多种文档类型和风格",
                "实时响应，快速生成内容",
                "可根据需求进行个性化调整",
                "支持内容润色和优化"
              ]}
              renderItem={(item, index) => (
                <List.Item>
                  <span className="text-green-600 mr-2">✓</span>
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IntelligentWritingPage;