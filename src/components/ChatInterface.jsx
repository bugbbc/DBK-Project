import React, { useState } from 'react';
import { Button, Select, message, Input, Progress, Modal } from 'antd';
import { FaImage, FaPaperclip } from 'react-icons/fa';

const { Option } = Select;
const { TextArea } = Input;

const ChatInterface = () => {
  const [knowledgeBaseConnected, setKnowledgeBaseConnected] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState('intelligent-writing');
  const [showFileTypeMenu, setShowFileTypeMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handlePromptClick = (prompt) => {
    setInputValue(prompt);
  };

  const handleFileUploadClick = () => {
    if (selectedFunction === 'document-analysis') {
      setShowFileTypeMenu(!showFileTypeMenu);
    } else {
      document.getElementById('file-upload-input').click();
    }
  };

  const handleFileTypeSelect = (fileType) => {
    setShowFileTypeMenu(false);
    document.getElementById(fileType + '-input').click();
  };

  const handleKnowledgeBaseConnect = () => {
    setLoading(true);
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setLoading(false);
          setKnowledgeBaseConnected(true);
          message.success('知识库接入成功');
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);
  };

  const functionOptions = [
    { value: 'intelligent-writing', label: '智能写作' },
    { value: 'multimodal-creation', label: '多模态创作' },
    { value: 'policy-interpretation', label: '政策解读' },
    { value: 'document-analysis', label: '文档解析' },
  ];

  const writingPrompts = [
    '生成一份关于rivia.report 的报告。',
    '起草一份关于加强基层党建工作的讲话稿。',
    '撰写一份关于推进乡村振兴战略的实施方案。',
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center">
          <Select
            value={selectedFunction}
            onChange={(value) => setSelectedFunction(value)}
            className="w-48"
          >
            {functionOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </div>
        <Button onClick={handleKnowledgeBaseConnect} disabled={knowledgeBaseConnected || loading}>
          {knowledgeBaseConnected ? '知识库已接入' : '知识库接入'}
        </Button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Chat messages will go here */}
        <div className="text-gray-500 dark:text-gray-400">
          <p>提示词:</p>
          <ul className="list-disc list-inside">
            {writingPrompts.map((prompt, index) => (
              <li key={index} onClick={() => handlePromptClick(prompt)} className="cursor-pointer hover:underline">{prompt}</li>
            ))}\
          </ul>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-2">
          {writingPrompts.map((prompt, index) => (
            <button key={index} onClick={() => handlePromptClick(prompt)} className="px-3 py-1 border rounded-full text-sm border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700">
              {prompt}
            </button>
          ))}
        </div>
        <div className="relative">
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            rows="4"
            placeholder="输入你的问题..."
          />
          <div className="absolute bottom-3 right-3 flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
              <FaImage size={20} />
            </button>
            <div className="relative">
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full" onClick={handleFileUploadClick}>
                <FaPaperclip size={20} />
              </button>
              {showFileTypeMenu && selectedFunction === 'document-analysis' && (
                <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                  <button onClick={() => handleFileTypeSelect('excel')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Excel文件解析</button>
                  <button onClick={() => handleFileTypeSelect('word')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Word文件解析</button>
                  <button onClick={() => handleFileTypeSelect('pdf')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">PDF文件解析</button>
                  <button onClick={() => handleFileTypeSelect('image')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">图片文件解析</button>
                </div>
              )}
            </div>
            <input type="file" id="file-upload-input" className="hidden" />
            <input type="file" id="excel-input" className="hidden" accept=".xls,.xlsx" />
            <input type="file" id="word-input" className="hidden" accept=".doc,.docx" />
            <input type="file" id="pdf-input" className="hidden" accept=".pdf" />
            <input type="file" id="image-input" className="hidden" accept="image/png, image/jpeg" />
            <Button type="primary">
              发送
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title="知识库接入"
        visible={loading}
        footer={null}
        closable={false}
      >
        <Progress percent={progress} />
      </Modal>
    </div>
  );
};

export default ChatInterface;