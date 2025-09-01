import React, { useState } from 'react';

const PolicyInterpretationPage = () => {
  const [policyText, setPolicyText] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState('');
  const [interpretationType, setInterpretationType] = useState('keyPoints'); // keyPoints, detailed, comparison
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');

  // 预设政策文档
  const presetPolicies = {
    aiDevelopment: {
      title: '《新一代人工智能发展规划》',
      content: '为抢抓人工智能发展的重大战略机遇，构筑我国人工智能发展的先发优势，加快建设创新型国家和世界科技强国，按照党中央、国务院部署要求，制定本规划。\n\n战略目标：\n第一步，到2020年人工智能总体技术和应用与世界先进水平同步，人工智能产业成为新的重要经济增长点，人工智能技术应用成为改善民生的新途径，有力支撑进入创新型国家行列和实现全面建成小康社会的奋斗目标。\n\n第二步，到2025年人工智能基础理论实现重大突破，部分技术与应用达到世界领先水平，人工智能成为带动我国产业升级和经济转型的主要动力，智能社会建设取得积极进展。\n\n第三步，到2030年人工智能理论、技术与应用总体达到世界领先水平，成为世界主要人工智能创新中心，智能经济、智能社会取得明显成效，为跻身创新型国家前列和经济强国奠定重要基础。\n\n重点任务：\n1. 构建开放协同的人工智能科技创新体系\n2. 培育高端高效的智能经济\n3. 建设安全便捷的智能社会\n4. 加强人工智能领域军民融合\n5. 构建泛在安全高效的智能化基础设施体系\n6. 前瞻布局新一代人工智能重大科技项目',
      source: '国务院'
    },
    digitalEconomy: {
      title: '《"十四五"数字经济发展规划》',
      content: '发展数字经济是把握新一轮科技革命和产业变革新机遇的战略选择。数字经济已成为重构经济发展与治理模式的重要力量，推动生产方式、生活方式和治理方式深刻变革，对世界经济、政治和科技格局产生深远影响。\n\n发展目标：\n到2025年，数字经济迈向全面扩展期，数字经济核心产业增加值占GDP比重达到10%，数字化创新引领发展能力大幅提升，智能化水平明显增强，数字技术与实体经济融合取得显著成效，数字经济治理体系更加完善，我国数字经济竞争力和影响力稳步提升。\n\n主要任务：\n1. 优化升级数字基础设施\n2. 充分发挥数据要素作用\n3. 大力推进产业数字化转型\n4. 加快推动数字产业化\n5. 持续提升公共服务数字化水平\n6. 健全完善数字经济治理体系\n7. 着力强化数字经济安全体系\n8. 有效拓展数字经济国际合作',
      source: '国家发改委、中央网信办'
    },
    dataSecurity: {
      title: '《数据安全法》',
      content: '为了规范数据处理活动，保障数据安全，促进数据开发利用，保护个人、组织的合法权益，维护国家主权、安全和发展利益，制定本法。\n\n本法所称数据，是指任何以电子或者其他方式对信息的记录。数据处理，包括数据的收集、存储、使用、加工、传输、提供、公开等。数据安全，是指通过采取必要措施，确保数据处于有效保护和合法利用的状态，以及具备保障持续安全状态的能力。\n\n数据安全工作坚持总体国家安全观，以人民利益为根本，以数据开发利用和产业发展促进数据安全，保障数据依法有序自由流动。\n\n重要数据的处理者应当按照规定对其数据处理活动定期开展风险评估，并向有关主管部门报送风险评估报告。\n\n国家建立数据安全应急处置机制。发生数据安全事件，有关主管部门应当依法启动应急预案，采取相应的应急处置措施，防止危害扩大，消除安全隐患，并及时向社会发布与公众有关的警示信息。',
      source: '全国人民代表大会常务委员会'
    }
  };

  // 模拟政策解读结果
  const mockResults = {
    aiDevelopment: {
      keyPoints: `# 《新一代人工智能发展规划》要点解读\n\n## 战略定位\n\n将人工智能作为提升国家竞争力的战略抓手，明确其对建设创新型国家和世界科技强国的重要支撑作用。\n\n## 核心目标（三步走）\n\n1. **2020年目标**：总体技术与世界先进水平同步，产业成为重要经济增长点\n2. **2025年目标**：理论实现重大突破，部分技术世界领先，成为产业升级主要动力\n3. **2030年目标**：总体达到世界领先水平，成为世界主要人工智能创新中心\n\n## 六大重点任务\n\n- 构建开放协同的人工智能科技创新体系\n- 培育高端高效的智能经济\n- 建设安全便捷的智能社会\n- 加强人工智能领域军民融合\n- 构建泛在安全高效的智能化基础设施体系\n- 前瞻布局新一代人工智能重大科技项目\n\n## 关键领域\n\n重点支持基础理论研究、关键共性技术突破、智能化基础设施、智能经济发展和智能社会建设等五大领域。\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
      detailed: `# 《新一代人工智能发展规划》详细解读\n\n## 一、规划背景与战略意义\n\n随着互联网、大数据、云计算等新一代信息技术的快速提升，人工智能正引发链式突破，推动经济社会各领域从数字化、网络化向智能化加速跃升。抓住人工智能发展的重大战略机遇，对我国实现创新驱动发展、建设世界科技强国具有重要意义。\n\n## 二、核心目标解析\n\n### 2.1 近期目标（2020年）\n\n- **技术层面**：人工智能总体技术和应用与世界先进水平同步\n- **产业层面**：人工智能产业成为新的重要经济增长点\n- **民生层面**：人工智能技术应用成为改善民生的新途径\n- **国家层面**：有力支撑进入创新型国家行列\n\n### 2.2 中期目标（2025年）\n\n- **理论突破**：人工智能基础理论实现重大突破\n- **技术领先**：部分技术与应用达到世界领先水平\n- **产业动力**：人工智能成为带动我国产业升级和经济转型的主要动力\n- **社会应用**：智能社会建设取得积极进展\n\n### 2.3 远期目标（2030年）\n\n- **全球引领**：人工智能理论、技术与应用总体达到世界领先水平\n- **创新中心**：成为世界主要人工智能创新中心\n- **经济社会变革**：智能经济、智能社会取得明显成效\n- **强国基础**：为跻身创新型国家前列和经济强国奠定重要基础\n\n## 三、重点任务详解\n\n### 3.1 构建开放协同的人工智能科技创新体系\n\n- 建立新一代人工智能基础理论体系\n- 打造人工智能创新平台和基础设施\n- 加快培养聚集人工智能高端人才\n- 构建开放协同的创新生态\n\n### 3.2 培育高端高效的智能经济\n\n- 发展人工智能新兴产业\n- 推进产业智能化升级\n- 打造人工智能创新高地\n\n### 3.3 建设安全便捷的智能社会\n\n- 发展便捷高效的智能服务\n- 推进社会治理智能化\n- 利用人工智能提升公共安全保障能力\n- 促进社会交往的智能化和便捷化\n\n### 3.4 加强人工智能领域军民融合\n\n- 推动人工智能技术军民双向转化\n- 促进军民人工智能技术共享共用\n\n### 3.5 构建泛在安全高效的智能化基础设施体系\n\n- 建设高速、移动、安全、泛在的新一代信息基础设施\n- 加快推动智能化信息基础设施\n\n### 3.6 前瞻布局新一代人工智能重大科技项目\n\n- 设立人工智能重大项目\n- 统筹布局人工智能领域重大科技项目\n\n## 四、政策保障措施\n\n- 建立人工智能法律法规体系\n- 完善支持人工智能发展的财税金融政策\n- 建立人工智能技术标准和伦理规范\n- 加强人工智能领域国际合作\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
      comparison: `# 《新一代人工智能发展规划》与国内外同类政策比较分析\n\n## 一、与国内相关政策的对比\n\n### 1.1 与《"十四五"数字经济发展规划》的对比\n\n- **相同点**：两者均强调数字技术创新、产业数字化转型和数据要素价值挖掘\n- **不同点**：本规划更聚焦人工智能领域的技术突破和产业发展，而数字经济规划覆盖面更广，包括数字基础设施、数字产业化等多个方面\n\n### 1.2 与《国家新一代人工智能创新发展试验区建设工作指引》的对比\n\n- **相同点**：均强调人工智能创新发展和区域示范\n- **不同点**：本规划是国家级顶层设计，而试验区创建工作指引更侧重于具体的区域试点和落地实施\n\n## 二、与国际主要国家人工智能战略的对比\n\n### 2.1 与美国《人工智能倡议》的对比\n\n- **相同点**：均将人工智能视为国家战略重点，强调基础研究和人才培养\n- **不同点**：美国更强调保持技术领先和国家安全，中国更注重产业应用和社会民生\n\n### 2.2 与欧盟《人工智能白皮书》的对比\n\n- **相同点**：均关注人工智能伦理和监管框架\n- **不同点**：欧盟更强调"以人为本"的人工智能和严格的监管标准，中国更注重创新发展和产业应用\n\n## 三、政策特色与优势\n\n1. **战略定位高**：将人工智能提升至国家战略层面，作为建设创新型国家和世界科技强国的重要支撑\n2. **目标明确具体**：提出分三步走的战略目标，时间节点清晰，可衡量性强\n3. **任务全面系统**：涵盖基础研究、技术创新、产业发展、社会应用、基础设施等多个方面\n4. **强调开放协同**：注重产学研用协同创新，推动形成开放合作的创新生态\n\n## 四、政策影响与实施建议\n\n- **对产业的影响**：将推动人工智能产业快速发展，形成新的经济增长点\n- **对社会的影响**：将深刻改变人们的生产生活方式，提升社会治理水平\n- **实施建议**：加强政策协同，加大资金投入，强化人才培养，完善监管体系\n\n---\n\n生成时间：${new Date().toLocaleString()}`
    },
    digitalEconomy: {
      keyPoints: `# 《"十四五"数字经济发展规划》要点解读\n\n## 战略定位\n\n将数字经济作为把握新一轮科技革命和产业变革新机遇的战略选择，推动经济社会全方位变革。\n\n## 核心目标\n\n到2025年，数字经济核心产业增加值占GDP比重达到10%，数字化创新引领发展能力大幅提升，智能化水平明显增强。\n\n## 八大重点任务\n\n- 优化升级数字基础设施\n- 充分发挥数据要素作用\n- 大力推进产业数字化转型\n- 加快推动数字产业化\n- 持续提升公共服务数字化水平\n- 健全完善数字经济治理体系\n- 着力强化数字经济安全体系\n- 有效拓展数字经济国际合作\n\n## 关键领域\n\n数据要素、数字基础设施、产业数字化、数字产业化、数字政府、数字安全是六大关键领域。\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
      detailed: `# 《"十四五"数字经济发展规划》详细解读\n\n## 一、规划背景与重要性\n\n数字经济已成为重构经济发展与治理模式的重要力量，对世界经济、政治和科技格局产生深远影响。我国数字经济发展正进入深化应用、规范发展、普惠共享的新阶段。\n\n## 二、发展目标解析\n\n到2025年，数字经济迈向全面扩展期，具体目标包括：\n\n- **产业规模**：数字经济核心产业增加值占GDP比重达到10%\n- **创新能力**：数字化创新引领发展能力大幅提升\n- **智能化水平**：智能化水平明显增强\n- **融合成效**：数字技术与实体经济融合取得显著成效\n- **治理体系**：数字经济治理体系更加完善\n- **国际竞争力**：我国数字经济竞争力和影响力稳步提升\n\n## 三、重点任务详解\n\n### 3.1 优化升级数字基础设施\n\n- 加快建设信息网络基础设施\n- 推进云网协同和算网深化转型\n- 有序推进基础设施智能升级\n\n### 3.2 充分发挥数据要素作用\n\n- 强化数据要素高质量供给\n- 加快数据要素市场化流通\n- 创新数据要素开发利用机制\n\n### 3.3 大力推进产业数字化转型\n\n- 加快企业数字化转型\n- 全面深化重点行业、产业园区和集群数字化转型\n- 培育转型支撑服务生态\n\n### 3.4 加快推动数字产业化\n\n- 增强关键技术创新能力\n- 提升核心产业竞争力\n- 培育新业态新模式\n\n### 3.5 持续提升公共服务数字化水平\n\n- 提高"互联网+政务服务"效能\n- 提升社会服务数字化普惠水平\n- 推动数字城乡融合发展\n\n### 3.6 健全完善数字经济治理体系\n\n- 完善数字经济治理框架\n- 健全法律法规制度\n- 提升监管水平\n\n### 3.7 着力强化数字经济安全体系\n\n- 增强网络安全防护能力\n- 提升数据安全保障水平\n- 有效防范各类风险\n\n### 3.8 有效拓展数字经济国际合作\n\n- 加快贸易数字化发展\n- 推动"数字丝绸之路"深入发展\n- 构建国际合作新格局\n\n## 四、保障措施\n\n- 加强统筹协调和组织实施\n- 加大资金支持力度\n- 强化人才队伍建设\n- 开展试点示范\n- 加强监测评估\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
      comparison: `# 《"十四五"数字经济发展规划》与国内外同类政策比较分析\n\n## 一、与国内相关政策的对比\n\n### 1.1 与《新一代人工智能发展规划》的对比\n\n- **相同点**：两者均强调数字技术创新和产业发展\n- **不同点**：本规划覆盖面更广，包括数字基础设施、数据要素、数字产业化等多个方面，而人工智能规划更聚焦于人工智能领域的技术突破和应用\n\n### 1.2 与《"十四五"信息化和工业化深度融合发展规划》的对比\n\n- **相同点**：均强调产业数字化转型\n- **不同点**：本规划更注重数字经济的全面发展，而两化融合规划更侧重于工业领域的数字化转型\n\n## 二、与国际主要经济体数字经济战略的对比\n\n### 2.1 与美国《国家人工智能研发战略计划》的对比\n\n- **相同点**：均将数字技术和人工智能视为国家战略重点\n- **不同点**：美国更强调保持技术领先和国家安全，中国更注重产业应用和数字经济整体发展\n\n### 2.2 与欧盟《数字欧洲计划》的对比\n\n- **相同点**：均关注数字基础设施建设和数字技能培养\n- **不同点**：欧盟更强调数字主权和公平竞争，中国更注重数字经济的创新发展和国际合作\n\n## 三、政策特色与优势\n\n1. **系统性强**：涵盖数字经济的各个方面，形成完整的政策体系\n2. **目标明确**：提出具体的量化指标，如数字经济核心产业增加值占GDP比重达到10%\n3. **突出数据要素**：首次将数据要素作为独立的重点任务进行部署\n4. **注重安全发展**：强调安全与发展并重，提出健全数字经济安全体系\n\n## 四、政策影响与实施建议\n\n- **对经济的影响**：将推动经济结构优化升级，形成新的经济增长点\n- **对社会的影响**：将提升公共服务水平，改善人民生活质量\n- **实施建议**：加强部门协同，完善政策配套，强化监督评估，注重国际合作\n\n---\n\n生成时间：${new Date().toLocaleString()}`
    },
    dataSecurity: {
      keyPoints: `# 《数据安全法》要点解读\n\n## 立法目的\n\n规范数据处理活动，保障数据安全，促进数据开发利用，保护个人、组织的合法权益，维护国家主权、安全和发展利益。\n\n## 核心概念\n\n- **数据**：任何以电子或者其他方式对信息的记录\n- **数据处理**：包括收集、存储、使用、加工、传输、提供、公开等活动\n- **数据安全**：通过采取必要措施，确保数据处于有效保护和合法利用的状态\n\n## 基本原则\n\n坚持总体国家安全观，以人民利益为根本，以数据开发利用和产业发展促进数据安全，保障数据依法有序自由流动。\n\n## 关键制度\n\n- 数据安全风险评估制度\n- 数据安全应急处置机制\n- 数据安全审查制度\n- 重要数据出境安全管理\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
      detailed: `# 《数据安全法》详细解读\n\n## 一、立法背景与重要意义\n\n随着数字经济的快速发展，数据已经成为国家重要的战略资源。制定《数据安全法》是维护国家主权、安全和发展利益的必然要求，是促进数据开发利用、保护个人和组织合法权益的重要保障。\n\n## 二、核心概念解析\n\n### 2.1 数据\n\n本法所称数据，是指任何以电子或者其他方式对信息的记录。这一概念涵盖了所有形式的数据，包括结构化数据和非结构化数据。\n\n### 2.2 数据处理\n\n数据处理，包括数据的收集、存储、使用、加工、传输、提供、公开等活动。这一概念明确了数据生命周期的各个环节。\n\n### 2.3 数据安全\n\n数据安全，是指通过采取必要措施，确保数据处于有效保护和合法利用的状态，以及具备保障持续安全状态的能力。这一定义表达了数据安全的动态性和综合性。\n\n## 三、主要制度详解\n\n### 3.1 数据安全风险评估制度\n\n重要数据的处理者应当按照规定对其数据处理活动定期开展风险评估，并向有关主管部门报送风险评估报告。风险评估报告应当包括处理的重要数据的种类、数量，开展数据处理活动的情况，面临的数据安全风险及其应对措施等。\n\n### 3.2 数据安全应急处置机制\n\n国家建立数据安全应急处置机制。发生数据安全事件，有关主管部门应当依法启动应急预案，采取相应的应急处置措施，防止危害扩大，消除安全隐患，并及时向社会发布与公众有关的警示信息。\n\n### 3.3 数据安全审查制度\n\n国家建立数据安全审查制度，对影响或者可能影响国家安全的数据处理活动进行国家安全审查。依法作出的安全审查决定为最终决定。\n\n### 3.4 重要数据出境安全管理\n\n关键信息基础设施的运营者在中华人民共和国境内运营中收集和产生的重要数据的出境安全管理，适用《中华人民共和国网络安全法》的规定；其他数据处理者在中华人民共和国境内运营中收集和产生的重要数据的出境安全管理办法，由国家网信部门会同国务院有关部门制定。\n\n### 3.5 数据安全监督检查制度\n\n有关主管部门在履行数据安全监管职责中，发现数据处理活动存在较大安全风险的，可以按照规定的权限和程序对有关组织、个人进行约谈，并要求有关组织、个人采取措施进行整改，消除隐患。\n\n## 四、法律责任\n\n违反本法规定的，将依法追究法律责任，包括警告、罚款、暂停相关业务、停业整顿、吊销相关业务许可证或者吊销营业执照等。构成犯罪的，依法追究刑事责任。\n\n---\n\n生成时间：${new Date().toLocaleString()}`,
      comparison: `# 《数据安全法》与国内外同类立法比较分析\n\n## 一、与国内相关立法的对比\n\n### 1.1 与《网络安全法》的对比\n\n- **相同点**：两者属于网络空间安全领域的基础性法律，都强调国家安全和公共利益保护\n- **不同点**：《网络安全法》主要聚焦于网络空间的安全保护，而《数据安全法》更专注于数据本身的安全和管理\n\n### 1.2 与《个人信息保护法》的对比\n\n- **相同点**：两者都涉及数据和个人信息的保护\n- **不同点**：《个人信息保护法》侧重于保护个人信息权益，而《数据安全法》更注重维护国家主权、安全和发展利益\n\n## 二、与国际主要数据安全立法的对比\n\n### 2.1 与欧盟《通用数据保护条例》(GDPR)的对比\n\n- **相同点**：均强调数据保护和数据安全\n- **不同点**：GDPR更注重个人数据保护和隐私权利，而《数据安全法》更强调国家安全和公共利益\n\n### 2.2 与美国《加州消费者隐私法案》(CCPA)的对比\n\n- **相同点**：均涉及数据隐私和安全保护\n- **不同点**：CCPA主要保护消费者的个人信息权利，而《数据安全法》涵盖范围更广，包括重要数据和国家数据安全\n\n## 三、立法特色与优势\n\n1. **体现总体国家安全观**：将数据安全纳入国家安全体系，强调维护国家主权、安全和社会发展的利益\n2. **平衡安全与发展**：在保障数据安全的同时，促进数据开发利用和产业发展\n3. **明确责任主体**：明确了数据处理者、主管部门等各方的责任和义务\n4. **建立完善制度体系**：建立了风险评估、应急处置、安全审查等多项重要制度\n\n## 四、实施影响与建议\n\n- **对企业的影响**：将提高企业的数据安全合规成本，但也有助于提升企业的数据治理水平\n- **对产业的影响**：将推动数据安全产业的发展，形成新的经济增长点\n- **实施建议**：加强法律宣传和培训，制定配套实施细则，加强国际合作与交流\n\n---\n\n生成时间：${new Date().toLocaleString()}`
    }
  };

  // 加载预设政策
  const loadPresetPolicy = (policyKey) => {
    setSelectedPolicy(policyKey);
    const policy = presetPolicies[policyKey];
    setPolicyText(policy.content);
    setResult('');
  };

  // 格式化输出内容
  const formatOutput = (content) => {
    return content
      .replace(/#{1,6}\s(.*?)(\n|$)/g, (match, text, end) => `<h${match.match(/#/g).length}>${text}</h${match.match(/#/g).length}>${end}`)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>')
      .replace(/---/g, '<hr/>')
      .replace(/^-\s(.*?)$/gm, '<li>$1</li>')
      .replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>')
      .replace(/^\d+\.\s(.*?)$/gm, '<li>$1</li>')
      .replace(/(<li>.*?<\/li>)/gs, '<ol>$1</ol>');
  };

  // 提交解读请求
  const handleSubmit = () => {
    if (!policyText.trim()) {
      alert('请选择或输入政策文本');
      return;
    }
    
    setIsProcessing(true);
    setResult('');
    
    // 模拟处理过程
    setTimeout(() => {
      // 如果选择了预设政策，则使用对应的解读结果
      if (selectedPolicy && mockResults[selectedPolicy]) {
        setResult(mockResults[selectedPolicy][interpretationType]);
      } else {
        // 否则使用默认的解读结果模板
        setResult(`# 政策解读结果\n\n## 政策要点\n\n- 政策目标：推动相关领域发展，提升治理水平\n- 主要措施：包括加强统筹协调、完善政策支持、强化监督管理等\n- 预期效果：促进经济社会发展，提高公共服务水平\n\n## 政策影响\n\n- 对行业的影响：将推动相关行业转型升级，促进行业健康发展\n- 对企业的影响：企业需要适应政策变化，调整发展战略\n- 对个人的影响：将为个人提供更好的服务和保障\n\n---\n\n生成时间：${new Date().toLocaleString()}`);
      }
      setIsProcessing(false);
    }, 2500);
  };

  // 重置所有输入
  const handleReset = () => {
    setPolicyText('');
    setSelectedPolicy('');
    setResult('');
    setInterpretationType('keyPoints');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">政策解读</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
          智能分析政策文件，提取关键信息，提供深度解读和对比分析，帮助您快速理解政策内涵和影响。
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 输入区域 */}
          <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">政策输入</h2>
            
            {/* 预设政策选择 */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">选择预设政策</h3>
              <div className="space-y-3">
                {Object.entries(presetPolicies).map(([key, policy]) => (
                  <div 
                    key={key} 
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedPolicy === key ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => loadPresetPolicy(key)}
                  >
                    <h4 className="font-medium mb-1">{policy.title}</h4>
                    <p className="text-sm text-gray-500">来源：{policy.source}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 自定义政策输入 */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">政策文本</h3>
              <textarea
                value={policyText}
                onChange={(e) => {
                  setPolicyText(e.target.value);
                  setSelectedPolicy(''); // 清除预设选择
                }}
                placeholder="请输入政策文本内容..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="8"
                disabled={isProcessing}
              ></textarea>
            </div>
            
            {/* 解读类型选择 */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">解读类型</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  className={`p-3 border rounded-lg transition-colors ${interpretationType === 'keyPoints' ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  onClick={() => setInterpretationType('keyPoints')}
                  disabled={isProcessing}
                >
                  <h4 className="font-medium mb-1">要点提取</h4>
                  <p className="text-sm text-gray-500">提取政策核心要点</p>
                </button>
                <button
                  className={`p-3 border rounded-lg transition-colors ${interpretationType === 'detailed' ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  onClick={() => setInterpretationType('detailed')}
                  disabled={isProcessing}
                >
                  <h4 className="font-medium mb-1">详细解读</h4>
                  <p className="text-sm text-gray-500">深入解析政策内容</p>
                </button>
                <button
                  className={`p-3 border rounded-lg transition-colors ${interpretationType === 'comparison' ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  onClick={() => setInterpretationType('comparison')}
                  disabled={isProcessing}
                >
                  <h4 className="font-medium mb-1">对比分析</h4>
                  <p className="text-sm text-gray-500">与同类政策比较</p>
                </button>
              </div>
            </div>
            
            {/* 操作按钮 */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
                disabled={isProcessing || !policyText.trim()}
              >
                {isProcessing ? '解读中...' : '开始解读'}
              </button>
              <button
                onClick={handleReset}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-lg"
                disabled={isProcessing}
              >
                重置
              </button>
            </div>
          </div>

          {/* 输出区域 */}
          <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">解读结果</h2>
            <div className="h-[600px] border rounded-lg p-4 overflow-y-auto">
              {isProcessing ? (
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                  <p className="text-lg">正在解读政策，请稍候...</p>
                  <p className="text-sm text-gray-500 mt-2">系统正在分析政策文本，提取关键信息</p>
                </div>
              ) : result ? (
                <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: formatOutput(result) }}></div>
              ) : (
                <div className="flex flex-col justify-center items-center h-full text-gray-400">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-lg">请选择或输入政策文本</p>
                  <p className="text-sm mt-2">然后点击"开始解读"按钮获取结果</p>
                </div>
              )}
            </div>
            
            {result && (
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  复制结果
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 技术特点 */}
        <div className="mt-8 bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">政策解读技术特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">RAG检索增强</h3>
              <p>基于检索增强生成技术，结合大规模知识库，提供准确、全面的政策解读。</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">语义理解</h3>
              <p>采用先进的自然语言处理技术，深入理解政策文本的语义和上下文，准确提取关键信息。</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">多维度分析</h3>
              <p>支持要点提取、详细解读和政策对比等多种分析方式，满足不同场景需求。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyInterpretationPage;