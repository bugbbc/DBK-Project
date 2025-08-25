import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "李博涵",
    role: "副教授，硕士生导师",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "研究方向：软件工程，大语言模型LLM，推荐系统RS，人机交互UE",
    social: {
      github: "https://github.com/LiBoHan2022",
      linkedin: "https://www.linkedin.com/in/li-bohan-2022/",
      twitter: "https://twitter.com/LiBoHan2022",
    },
  },
  {
    name: "赵德政",
    role: "研究生辅导员",
    avatar: "https://i.pravatar.cc/150?img=2",
    bio: "负责全体人工智能学院博士生、2022级硕士生学生工作",
    social: {
      github: "https://github.com/DeZhengZhao",
      linkedin: "https://www.linkedin.com/in/de-zheng-zhao-2022/",
      twitter: "https://twitter.com/DeZhengZhao",
    },
  },
  {
    name: "吴文隆",
    role: "南京航空航天大学人工智能学院2024级硕士生",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "精通现代前端技术栈，对数据可视化与用户体验设计充满热情，力求打造美观与实用兼备的人机交互界面。",
    social: {
      github: "https://github.com/WenLongWu2022",
      linkedin: "https://www.linkedin.com/in/wen-long-wu-2022/",
      twitter: "https://twitter.com/WenLongWu2022",
    },
  },
  {
    name: "王昌杰",
    role: "南京航空航天大学人工智能学院2024级硕士生",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "负责系统后端架构设计与数据处理流程优化，保障平台稳定、高效运行，对高并发、大数据场景有丰富经验。",
    social: {
      github: "https://github.com/ChangjieW",
      linkedin: "https://www.linkedin.com/in/changjie-wu-947730222/",
      twitter: "https://twitter.com/ChangjieW",
    },
  },
  {
    name: "夏海涛",
    role: "上海海洋大学2022级本科生（拟推免）",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "对人工智能、大数据、数据挖掘等领域有浓厚的兴趣，正在努力学习和提升自己的技能。",
    social: {
      github: "https://github.com/XiaHaitao2022",
      linkedin: "https://www.linkedin.com/in/xia-haitao-2022/",
      twitter: "https://twitter.com/XiaHaitao2022",
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
            <h3 className="text-2xl font-bold text-text-primary mb-1">
              {member.name}
            </h3>
            <p className="font-semibold text-text-secondary mb-4">
              {member.role}
            </p>
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
