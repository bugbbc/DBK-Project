import React, { useState } from 'react';

const IntelligentWritingPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const suggestions = [
    '帮我写一篇关于优化营商环境的报告',
    '生成一份关于数字经济发展的演讲稿',
    '起草一份关于推动乡村振兴的政策建议',
  ];

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // 在这里添加调用 agent 的逻辑
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">智能写作</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
          输入您的需求，我们的AI助手将为您生成高质量的政务文稿。
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-6">
        <div className="h-96 overflow-y-auto mb-6 p-4 border rounded-md">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 h-full flex items-center justify-center">
              暂无消息
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`text-right my-2`}>
                <span className={`inline-block p-2 rounded-lg bg-blue-500 text-white`}>
                  {msg.text}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">试试这些提示词：</h3>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="请输入您的需求..."
            className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntelligentWritingPage;