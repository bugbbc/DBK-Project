import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope size={22} />,
    title: '电子邮箱',
    content: 'contact@dbk-workshop.com',
    href: 'mailto:contact@dbk-workshop.com',
  },
  {
    icon: <FaPhone size={22} />,
    title: '联系电话',
    content: '(+86) 123-4567-8900',
    href: 'tel:+8612345678900',
  },
  {
    icon: <FaMapMarkerAlt size={22} />,
    title: '办公地址',
    content: '中国江苏省南京市江宁区南京航空航天大学',
    href: '#',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('提交失败，请稍后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="module-title">联系我们 & 获取演示</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        <div className="module-card p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6">发送您的垂询</h3>
          {isSubmitted ? (
            <div className="text-center py-10">
              <h4 className="text-2xl font-bold text-brand-primary mb-3">感谢您的留言！</h4>
              <p className="text-text-secondary">我们已收到您的信息，将尽快与您联系。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-secondary mb-2">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-2.5 bg-bg-main border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition duration-200" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-secondary mb-2">邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-2.5 bg-bg-main border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition duration-200" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-text-secondary mb-2">主题</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-2.5 bg-bg-main border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition duration-200" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-secondary mb-2">留言内容</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5" 
                  className="w-full px-4 py-2.5 bg-bg-main border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition duration-200"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="main-btn w-full flex items-center justify-center"
              >
                {isSubmitting ? '正在提交...' : <><FaPaperPlane className="mr-2" /> 立即发送</>}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6">联系信息</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="module-card p-5 flex items-start space-x-5">
              <div className="flex-shrink-0 mt-1 text-brand-primary">{info.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">{info.title}</h4>
                <a href={info.href} className="text-text-secondary hover:text-brand-primary transition-colors duration-300">{info.content}</a>
              </div>
            </div>
          ))}
          <div className="module-card p-6">
            <h4 className="text-lg font-semibold text-text-primary mb-3">关于我们</h4>
            <p className="text-text-secondary text-sm">
              DBK智撰工坊团队致力于将先进的多模态AI技术应用于政务领域，为政府部门提供智能、高效的办公解决方案。我们期待与您的交流与合作，共同推动政务服务的智能化转型。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;