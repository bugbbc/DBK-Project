import React from 'react';
import { Card, Typography, List, Collapse } from 'antd';
import './PolicyInterpretationPage.css';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const PolicyInterpretationPage = () => {

  const policies = [
    {
      title: '《新一代人工智能发展规划》',
      source: '中华人民共和国中央人民政府',
      link: 'https://www.gov.cn/zhengce/content/2017-07/20/content_5211996.htm',
      summary: '为了抢抓人工智能发展的重大战略机遇，构筑我国人工智能发展的先发优势，加快建设创新型国家和世界科技强国，由国务院于2017年7月8日印发。',
      keyPoints: [
        '到2020年，人工智能总体技术和应用与世界先进水平同步。',
        '到2025年，人工智能基础理论实现重大突破，部分技术与应用达到世界领先水平。',
        '到2030年，人工智能理论、技术与应用总体达到世界领先水平，成为世界主要人工智能创新中心。',
      ],
    },
    {
      title: '《关于加快场景创新以人工智能高水平应用促进经济高质量发展的指导意见》',
      source: '科技部等六部门',
      link: 'https://www.gov.cn/zhengce/zhengceku/2022-08/12/content_5705154.htm',
      summary: '为落实《新一代人工智能发展规划》，系统指导各地方和各主体加快人工智能场景应用，推动经济高质量发展，由科技部、教育部、工业和信息化部等六部门于2022年7月29日印发。',
      keyPoints: [
        '鼓励在制造、农业、物流、金融、商务、家居等重点行业深入挖掘人工智能技术应用场景。',
        '围绕高端高效智能经济培育打造重大场景。',
        '推动人工智能更高水平应用，更好支撑高质量发展。',
      ],
    },
  ];

  return (
    <div className={`policy-interpretation-page`}>
      <Title level={2} className="page-title">
        国家人工智能政策解读
      </Title>
      <Paragraph className="page-description">
        此处展示了部分收集到的国家层面关于人工智能发展的政策文件，旨在为用户提供参考。
      </Paragraph>
      <Collapse accordion defaultActiveKey={['0']}>
        {policies.map((policy, index) => (
          <Panel header={policy.title} key={index}>
            <Card
              title={policy.title}
              extra={<a href={policy.link} target="_blank" rel="noopener noreferrer">查看原文</a>}
              className="policy-card"
            >
              <Paragraph>
                <Text strong>来源：</Text>
                {policy.source}
              </Paragraph>
              <Paragraph>
                <Text strong>简介：</Text>
                {policy.summary}
              </Paragraph>
              <Paragraph>
                <Text strong>主要目标：</Text>
              </Paragraph>
              <List
                size="small"
                bordered
                dataSource={policy.keyPoints}
                renderItem={(item) => <List.Item>{item}</List.Item>}
                className="policy-key-points"
              />
            </Card>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default PolicyInterpretationPage;