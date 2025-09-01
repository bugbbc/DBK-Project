import React, { useState } from 'react';

const MultimodalCreationPage = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');

  // 专业公文格式的模拟处理结果数据
  const mockResults = {
    product: `# 智能手表产品描述\n\n## 产品概述\n\n根据提供的图片和文档资料，我司新推出的智能手表（型号：SW-2024）采用圆形表盘设计，金属表壳搭配真皮表带，兼具时尚感和商务风格，是一款融合健康监测与智能互联的高端智能穿戴设备。\n\n## 外观特点\n\n- **材质**: 采用316L精钢表壳，配备蓝宝石玻璃镜面，耐磨抗刮\n- **表带**: 意大利头层小牛皮表带，采用蝴蝶扣设计，佩戴舒适便捷\n- **尺寸**: 42mm标准表盘尺寸，表壳厚度11.8mm，适合亚洲用户佩戴\n- **颜色**: 银色表壳搭配深蓝色表盘，指针采用Super-LumiNova夜光材质\n- **防水**: 支持5ATM防水等级，可在游泳和日常淋浴时佩戴\n\n## 核心功能\n\n- **健康监测**: 支持24小时心率监测、血氧饱和度(SpO₂)检测、睡眠质量分析、压力监测\n- **运动追踪**: 内置GPS模块，支持100+种运动模式，包括跑步、游泳、骑行、瑜伽等\n- **智能提醒**: 来电、短信、应用通知实时提醒，支持自定义提醒事项\n- **支付功能**: 支持NFC支付，兼容主流移动支付平台\n- **续航能力**: 正常使用模式下可持续续航7天，省电模式可达14天\n- **数据同步**: 支持与iOS及Android系统深度适配，数据云端同步\n\n## 使用场景\n\n本产品适用于商务人士、运动爱好者和注重健康管理的用户群体。在商务会议、日常办公、户外运动和休闲生活等多种场景中，均可提供专业的数据监测和智能服务。\n\n## 产品优势\n\n1. **设计工艺**: 采用瑞士精密制造工艺，金属质感与简约设计完美融合\n2. **功能集成**: 全面整合健康监测、运动追踪、智能互联等多种功能\n3. **续航表现**: 领先行业的电池续航能力，有效解决智能手表续航焦虑问题\n4. **交互体验**: 触控屏幕搭配实体按键，操作流畅便捷，支持语音助手\n5. **数据安全**: 采用端到端加密技术，保障用户健康数据和个人信息安全\n\n---\n\n**生成时间**: ${new Date().toLocaleString()}\n**生成单位**: 智能文档处理系统\n**文档编号**: SW-PD-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
    report: `# 2023年智能硬件市场趋势分析报告\n\n## 一、市场概况\n\n根据国家统计局、工信部及行业协会提供的数据，结合市场调研分析，2023年我国智能硬件市场呈现持续增长态势。全年市场规模达到${Math.floor(Math.random() * 500) + 1000}亿美元，同比增长${(Math.random() * 10 + 10).toFixed(2)}%，高于全球平均增速2.3个百分点。\n\n## 二、主要产品类别分析\n\n### 2.1 智能手表市场\n\n智能手表市场保持快速增长，2023年全球出货量达到${Math.floor(Math.random() * 50) + 150}百万台，同比增长${(Math.random() * 15 + 5).toFixed(2)}%。国内市场方面，华为、小米、苹果占据市场前三位，合计市场份额达68.5%。产品功能日益丰富，健康监测、运动追踪成为标配，部分高端产品已具备医疗级健康监测能力。\n\n### 2.2 智能音箱市场\n\n智能音箱市场趋于成熟，2023年全球出货量达到${Math.floor(Math.random() * 30) + 80}百万台，同比增长${(Math.random() * 8 + 2).toFixed(2)}%。国内市场竞争加剧，百度、阿里、小米凭借语音助手和生态优势占据主导地位。语音交互技术不断进步，多设备联动成为新趋势，智能家居控制中心的定位日益凸显。\n\n### 2.3 智能手环市场\n\n智能手环市场竞争激烈，2023年全球出货量达到${Math.floor(Math.random() * 40) + 120}百万台，同比增长${(Math.random() * 12 + 3).toFixed(2)}%。价格亲民、续航持久是其主要优势，主要面向大众消费市场和健康监测需求用户。产品同质化严重，差异化竞争成为厂商突破的关键。\n\n## 三、区域市场分布\n\n- **北美市场**: 占全球市场份额的${(Math.random() * 10 + 30).toFixed(2)}%，是最大的智能硬件消费市场\n- **欧洲市场**: 占全球市场份额的${(Math.random() * 10 + 20).toFixed(2)}%，增长稳健\n- **亚太市场**: 占全球市场份额的${(Math.random() * 15 + 35).toFixed(2)}%，增长最快的区域市场\n- **其他市场**: 占全球市场份额的${(Math.random() * 5 + 5).toFixed(2)}%\n\n## 四、技术发展趋势\n\n1. **AI技术融合**: 人工智能技术在智能硬件中的应用日益广泛，机器学习算法优化、自然语言处理能力提升成为技术发展重点\n2. **多模态交互**: 语音、触控、手势等多种交互方式融合，用户体验持续优化\n3. **健康监测精度提升**: 医疗级健康监测功能成为新的竞争点，部分产品已获得医疗器械认证\n4. **低功耗技术进步**: 新型电池技术和低功耗芯片研发取得突破，续航能力不断提升\n5. **5G技术应用**: 随着5G网络的普及，支持5G连接的智能硬件产品开始涌现\n\n## 五、政策环境分析\n\n国家高度重视智能硬件产业发展，先后出台《"十四五"智能制造发展规划》《关于促进"互联网+医疗健康"发展的意见》等政策文件，从技术创新、标准制定、应用推广等方面给予支持，为行业发展创造了良好的政策环境。\n\n## 六、未来展望\n\n预计2024年全球智能硬件市场规模将达到${Math.floor(Math.random() * 600) + 1500}亿美元，同比增长${(Math.random() * 12 + 12).toFixed(2)}%。随着5G技术的普及和AI技术的发展，智能硬件将迎来新的发展机遇。健康医疗、智能家居、工业物联网等领域将成为智能硬件应用的重要增长点。\n\n---\n\n**生成时间**: ${new Date().toLocaleString()}\n**生成单位**: 智能经济研究中心\n**报告编号**: IHM-AN-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
    travel: `# 关于2024年员工团建旅行方案的报告\n\n## 一、旅行目的地概述\n\n根据公司团建需求和员工反馈，拟选择XX海滨度假区作为2024年员工团建旅行目的地。该度假区位于我国东南沿海，拥有"国家AAAA级旅游景区"资质，具备完善的旅游设施和丰富的自然景观资源，是开展团队建设活动的理想场所。\n\n## 二、行程安排建议\n\n### 第一天: 抵达与团队建设\n- **上午**: 公司集合，乘坐大巴统一前往目的地（预计车程3小时）\n- **中午**: 抵达后入住XX国际酒店，午餐（酒店宴会厅）\n- **下午**: 开展团队建设活动（由专业拓展教练指导）\n- **晚上**: 欢迎晚宴，团队破冰活动\n\n### 第二天: 景区游览与休闲活动\n- **上午**: 集体游览XX海滨国家森林公园（重点参观热带雨林、观景台）\n- **下午**: 自由活动时间（可选择海滩休闲、水上运动或温泉体验）\n- **晚上**: 篝火晚会，员工才艺表演\n\n### 第三天: 文化体验与返程\n- **上午**: 参观当地渔村文化博物馆，体验传统手工艺制作\n- **中午**: 特色海鲜午餐\n- **下午**: 总结会议，团队合影，返程\n\n## 三、服务保障方案\n\n### 交通安排\n- 往返交通: 租用45座豪华大巴2辆，配备经验丰富的司机\n- 当地交通: 安排景区接驳车，确保出行便捷安全\n\n### 住宿安排\n- 住宿标准: 全部安排双人标准间，确保舒适整洁\n- 酒店设施: 包含免费WiFi、早餐、健身房、游泳池等配套服务\n\n### 餐饮安排\n- 用餐标准: 正餐500元/桌（10人/桌），含特色海鲜和当地美食\n- 食品安全: 选择具有合法资质的餐饮场所，确保食品安全\n\n### 安全保障\n- 保险服务: 为每位员工购买旅行意外险\n- 医疗保障: 随团配备急救包，与当地医院建立联系\n- 安全预案: 制定详细的安全应急预案，确保旅行安全\n\n## 四、预算方案\n\n本次团建旅行预计费用为XX万元，具体如下：\n- 交通费用: XX万元\n- 住宿费用: XX万元\n- 餐饮费用: XX万元\n- 景区门票: XX万元\n- 拓展活动: XX万元\n- 保险及其他: XX万元\n\n## 五、注意事项\n\n1. **行前准备**: 请员工提前准备泳衣、防晒用品、舒适运动鞋等个人物品\n2. **行程纪律**: 请严格遵守团队行程安排，不得擅自离队\n3. **安全第一**: 注意人身和财产安全，贵重物品妥善保管\n4. **团队协作**: 发扬团队协作精神，积极参与各项活动\n5. **环境保护**: 注意保护环境，遵守景区规定，不随意丢弃垃圾\n\n---\n\n**生成时间**: ${new Date().toLocaleString()}\n**生成单位**: 人力资源部\n**文件编号**: HR-TR-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`
  };

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

  // 预填充示例数据
  const loadExample = (exampleType) => {
    setIsProcessing(false);
    setResult('');
    
    if (exampleType === 'product') {
      setText('请根据图片和文档，生成一份智能手表的产品描述，包括外观特点、核心功能和使用场景。');
      // 模拟上传图片和文档
      setImage({ name: '智能手表图片.jpg', type: 'image/jpeg', size: 2097152 });
      setFile({ name: '智能手表规格说明书.pdf', type: 'application/pdf', size: 5242880 });
    } else if (exampleType === 'report') {
      setText('请根据提供的市场数据文档，生成一份2023年智能硬件市场趋势分析报告。');
      setFile({ name: '2023年智能硬件市场数据.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', size: 3145728 });
      setImage(null);
    } else if (exampleType === 'travel') {
      setText('请根据提供的海滩图片，生成一份详细的旅行攻略，包括景点推荐、行程安排和实用信息。');
      setImage({ name: '海滩风景.jpg', type: 'image/jpeg', size: 1572864 });
      setFile(null);
    }
  };

  // 格式化输出内容（包含公文标准格式）
  const formatOutput = (content) => {
    // 添加公文样式的容器
    let formattedContent = `
      <div class="official-document">
        ${content
          .replace(/#{1}\s(.*?)(\n|$)/g, '<h1 class="doc-title">$1</h1>')
          .replace(/#{2}\s(.*?)(\n|$)/g, '<h2 class="doc-section">$1</h2>')
          .replace(/#{3}\s(.*?)(\n|$)/g, '<h3 class="doc-subsection">$1</h3>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/\n/g, '<br/>')
          .replace(/---/g, '<hr class="doc-divider"/>')
          .replace(/^-\s(.*?)$/gm, '<li>$1</li>')
          .replace(/(<li>.*?<\/li>)/gs, '<ul class="doc-list">$1</ul>')
          .replace(/^\d+\.\s(.*?)$/gm, '<li>$1</li>')
          .replace(/(<li>.*?<\/li>)/gs, '<ol class="doc-ordered-list">$1</ol>')
        }
      </div>
    `;

    // 添加内联样式实现公文标准化格式
    formattedContent = `
      <style>
        /* 公文标准字体和字号 */
        .official-document {
          font-family: 'SimSun', '宋体', serif;
          font-size: 16px;
          line-height: 1.8;
          color: #000000;
          text-align: justify;
        }
        
        /* 公文标题样式 */
        .doc-title {
          font-family: 'SimHei', '黑体', sans-serif;
          font-size: 24px;
          font-weight: bold;
          color: #000000;
          text-align: center;
          margin: 24px 0 32px 0;
          padding-bottom: 12px;
          border-bottom: 2px solid #000000;
        }
        
        /* 公文章节标题样式 */
        .doc-section {
          font-family: 'SimHei', '黑体', sans-serif;
          font-size: 20px;
          font-weight: bold;
          color: #000000;
          margin: 28px 0 16px 0;
          padding-left: 0;
        }
        
        /* 公文小节标题样式 */
        .doc-subsection {
          font-family: 'SimHei', '黑体', sans-serif;
          font-size: 18px;
          font-weight: bold;
          color: #000000;
          margin: 24px 0 12px 0;
        }
        
        /* 正文段落样式 */
        .official-document p {
          margin: 12px 0;
          text-indent: 2em;
        }
        
        /* 列表样式 */
        .doc-list, .doc-ordered-list {
          margin: 12px 0 12px 2em;
          padding-left: 0;
        }
        
        .doc-list li, .doc-ordered-list li {
          margin: 8px 0;
          text-align: justify;
        }
        
        /* 分隔线样式 */
        .doc-divider {
          border: none;
          height: 1px;
          background-color: #000000;
          margin: 24px 0;
        }
        
        /* 强调文字样式 */
        .official-document strong {
          font-weight: bold;
          color: #000000;
        }
        
        /* 斜体文字样式 */
        .official-document em {
          font-style: italic;
        }
        
        /* 日期和编号区域样式 */
        .official-document .doc-meta {
          text-align: right;
          font-size: 14px;
          margin-top: 32px;
        }
      </style>
      
      ${formattedContent}
    `;

    return formattedContent;
  };

  const handleSubmit = () => {
    if (!text.trim() && !image && !file) {
      alert('请至少提供一种输入方式');
      return;
    }
    
    setIsProcessing(true);
    setResult('');
    
    // 根据输入内容选择模拟响应
    let resultType = 'report';
    if (text.includes('产品') || text.includes('描述')) {
      resultType = 'product';
    } else if (text.includes('旅行') || text.includes('攻略')) {
      resultType = 'travel';
    }
    
    // 模拟处理过程
    setTimeout(() => {
      setResult(mockResults[resultType]);
      setIsProcessing(false);
    }, 3000);
  };

  // 重置所有输入
  const handleReset = () => {
    setText('');
    setImage(null);
    setFile(null);
    setResult('');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">多模态创作</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
          结合文本、图像和文件，释放您的创造力。我们的平台支持多种格式，助您轻松完成文件创作与修改。
        </p>
      </div>

      {/* 示例加载区域 */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">快速体验示例</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => loadExample('product')}
              className="border rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h4 className="font-medium mb-2">产品描述生成</h4>
              <p className="text-sm text-gray-500">基于图片和文档生成产品描述</p>
            </button>
            
            <button 
              onClick={() => loadExample('report')}
              className="border rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h4 className="font-medium mb-2">市场分析报告</h4>
              <p className="text-sm text-gray-500">基于数据文档生成市场分析报告</p>
            </button>
            
            <button 
              onClick={() => loadExample('travel')}
              className="border rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h4 className="font-medium mb-2">旅行攻略生成</h4>
              <p className="text-sm text-gray-500">基于图片生成旅行攻略</p>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 输入区域 */}
          <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg p-8">
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
                disabled={isProcessing}
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
                        <input id="image-upload" name="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} disabled={isProcessing} />
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
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} disabled={isProcessing} />
                      </label>
                    </div>
                    <p className="text-xs">{file ? '' : 'PDF, DOCX, XLSX, TXT up to 25MB'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
                disabled={isProcessing || (!text.trim() && !image && !file)}
              >
                {isProcessing ? '处理中...' : '提交创作'}
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
            <h2 className="text-2xl font-semibold mb-4">输出结果</h2>
            <div className="h-[500px] border rounded-lg p-4 overflow-y-auto">
              {isProcessing ? (
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                  <p className="text-lg">正在处理您的请求，请稍候...</p>
                  <p className="text-sm text-gray-500 mt-2">系统正在分析多模态输入并生成内容</p>
                </div>
              ) : result ? (
                <div className="bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700" dangerouslySetInnerHTML={{ __html: formatOutput(result) }}></div>
              ) : (
                <div className="flex flex-col justify-center items-center h-full text-gray-400">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-lg">请输入内容并点击"提交创作"按钮</p>
                  <p className="text-sm mt-2">或点击上方示例快速体验</p>
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
          <h2 className="text-2xl font-semibold mb-6">多模态创作技术特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">多模态融合</h3>
              <p>智能分析和整合文本、图像和文档等多种形式的信息，生成综合的输出内容。</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">语义理解</h3>
              <p>基于先进的大语言模型，深入理解输入内容的语义和上下文，确保生成内容的准确性和连贯性。</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">灵活应用</h3>
              <p>适用于产品描述、市场分析、旅行攻略等多种场景，满足不同用户的多样化需求。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultimodalCreationPage;