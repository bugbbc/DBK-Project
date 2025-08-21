import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaRobot, FaUser, FaUpload } from 'react-icons/fa';

const CoreInteraction = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = "正在为您生成报告，请稍候...";
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newMessages = [...messages, { text: `已上传文件: ${file.name}`, sender: 'user' }];
      setMessages(newMessages);
      // Here you would typically handle the file upload to a server
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    setMessages([{ text: "您好！我是“智撰工坊”的AI助手，请问有什么可以帮助您？", sender: 'bot' }]);
  }, []);

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="module-title">交互体验</h2>
        <p className="text-lg text-text-secondary mt-4">
          多模态内容输入，智能生成与输出展示
        </p>
      </div>

      <div className="highlight-container">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-inner overflow-hidden">
          <div className="p-4 sm:p-6 h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start my-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && <FaRobot className="w-8 h-8 text-brand-primary mr-3 flex-shrink-0" />}
                <div className={`px-4 py-2 rounded-lg max-w-xs lg:max-w-md shadow-md ${msg.sender === 'user' ? 'bg-brand-primary text-white' : 'bg-gray-50 dark:bg-gray-700 dark:text-gray-200'}`}>
                  {msg.text}
                </div>
                {msg.sender === 'user' && <FaUser className="w-8 h-8 text-brand-primary ml-3 flex-shrink-0" />}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center justify-start my-4">
                <FaRobot className="w-8 h-8 text-brand-primary mr-3 flex-shrink-0" />
                <div className="px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200 shadow-md">
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
            />
            <button onClick={handleUploadClick} title="上传文件" className="main-btn mr-3">
              <FaUpload />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="输入文本、图片链接或语音指令..."
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary bg-gray-100 dark:bg-gray-800 text-text-primary"
            />
            <button onClick={handleSend} className="main-btn ml-3">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreInteraction;