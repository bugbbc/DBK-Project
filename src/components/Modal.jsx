import React from 'react';

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-4" dangerouslySetInnerHTML={{ __html: content }} />
        <button onClick={onClose} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">关闭</button>
      </div>
    </div>
  );
};

export default Modal;