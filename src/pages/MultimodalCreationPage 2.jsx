import React, { useState } from 'react';

const MultimodalCreationPage = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Logic to handle the multimodal submission
    console.log({ text, image, file });
    alert('内容已提交，后台处理中...');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">多模态创作</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
          结合文本、图像和文件，释放您的创造力。我们的平台支持多种格式，助您轻松完成文件创作与修改。
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <label htmlFor="text-input" className="block text-xl font-semibold mb-2">
            文本输入
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="在此输入您的文本内容..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label htmlFor="image-upload" className="block text-xl font-semibold mb-2">
              上传图像
            </label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex text-sm">
                  <label
                    htmlFor="image-upload"
                    className="relative cursor-pointer bg-light-surface dark:bg-dark-surface rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>{image ? image.name : '选择一张图片'}</span>
                    <input id="image-upload" name="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                  </label>
                </div>
                <p className="text-xs">{image ? '' : 'PNG, JPG, GIF up to 10MB'}</p>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="file-upload" className="block text-xl font-semibold mb-2">
              上传文件
            </label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex text-sm">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-light-surface dark:bg-dark-surface rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>{file ? file.name : '选择一个文件'}</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                  </label>
                </div>
                <p className="text-xs">{file ? '' : 'PDF, DOCX, TXT up to 25MB'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
          >
            提交创作
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultimodalCreationPage;