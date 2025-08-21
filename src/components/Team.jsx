import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: '李浩然',
    role: '项目总监 & AI架构师',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: '十年政务系统研发经验，主导多个国家级智能化项目，致力于将前沿AI技术与政务场景深度融合。',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: '张文博',
    role: '算法科学家 & 大模型专家',
    avatar: 'https://i.pravatar.cc/150?img=2',
    bio: '自然语言处理博士，在多模态内容生成与理解领域有深入研究，追求算法的极致性能与创新。',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: '陈思颖',
    role: '前端开发工程师 & UX设计师',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: '精通现代前端技术栈，对数据可视化与用户体验设计充满热情，力求打造美观与实用兼备的人机交互界面。',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: '王建国',
    role: '后端架构师 & 数据工程师',
    avatar: 'https://i.pravatar.cc/150?img=4',
    bio: '负责系统后端架构设计与数据处理流程优化，保障平台稳定、高效运行，对高并发、大数据场景有丰富经验。',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
];

const Team = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="module-title">核心团队</h2>
        <p className="text-lg text-text-secondary mt-4">
          我们的专家团队，致力于为您提供最卓越的智能化服务。
        </p>
      </div>
      <div className="content-grid mt-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="module-card text-center p-8 hover:-translate-y-1 transition-transform duration-300"
          >
            <img 
              src={member.avatar} 
              alt={member.name} 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-brand-primary/30 shadow-lg" 
            />
            <h3 className="text-2xl font-bold text-text-primary mb-1">{member.name}</h3>
            <p className="font-semibold text-text-secondary mb-4">{member.role}</p>
            <p className="text-text-secondary text-sm mb-6">{member.bio}</p>
            <div className="flex justify-center space-x-5">
              <a 
                href={member.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`${member.name}的Github`} 
                className="text-text-secondary hover:text-brand-primary transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href={member.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`${member.name}的LinkedIn`} 
                className="text-text-secondary hover:text-brand-primary transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href={member.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`${member.name}的Twitter`} 
                className="text-text-secondary hover:text-brand-primary transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;