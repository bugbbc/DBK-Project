import React, { useState } from 'react';
import { FileTextOutlined, TableOutlined, FileWordOutlined, FileImageOutlined, FilePdfOutlined, LoadingOutlined } from '@ant-design/icons';

const DocumentAnalysisPage = () => {
  const [selectedFileType, setSelectedFileType] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [fileName, setFileName] = useState('');

  // 文件类型配置
  const fileTypes = [
    {
      key: 'excel',
      name: 'Excel文件',
      icon: <TableOutlined className="text-green-500" />,
      extensions: '.xls, .xlsx',
      maxSize: '25MB',
      examples: ['财务报表', '销售数据', '调研结果']
    },
    {
      key: 'word',
      name: 'Word文档',
      icon: <FileWordOutlined className="text-blue-500" />,
      extensions: '.doc, .docx',
      maxSize: '25MB',
      examples: ['报告文档', '会议纪要', '合同协议']
    },
    {
      key: 'pdf',
      name: 'PDF文档',
      icon: <FilePdfOutlined className="text-red-500" />,
      extensions: '.pdf',
      maxSize: '25MB',
      examples: ['学术论文', '政策文件', '产品手册']
    },
    {
      key: 'image',
      name: '图片文件',
      icon: <FileImageOutlined className="text-purple-500" />,
      extensions: '.jpg, .jpeg, .png, .gif',
      maxSize: '10MB',
      examples: ['会议白板', '数据图表', '合同扫描件']
    }
  ];

  // 模拟解析结果数据
  const mockResults = {
    excel: {
      fileName: '销售数据分析表.xlsx',
      summary: '这是一份2023年第三季度的销售数据分析表，包含了各地区、各产品类别的销售数据。',
      structure: {
        sheets: [
          { name: '销售总览', rows: 24, columns: 8 },
          { name: '地区分布', rows: 18, columns: 6 },
          { name: '产品明细', rows: 45, columns: 12 }
        ],
        keyColumns: ['日期', '地区', '产品类别', '销售额', '同比增长']
      },
      insights: [
        '华东地区销售额占比最高，达到42%',
        '电子产品类别同比增长最快，达到18.5%',
        '第三季度总销售额较上季度增长9.2%'
      ],
      keyData: {
        '总销售额': '¥2,458,900',
        '同比增长': '12.3%',
        '地区覆盖': '7个',
        '产品类别': '12个'
      },
      chartData: {
        title: '各地区销售额占比',
        type: 'pie',
        data: [
          { name: '华东', value: 42 },
          { name: '华南', value: 23 },
          { name: '华北', value: 18 },
          { name: '西南', value: 10 },
          { name: '其他', value: 7 }
        ]
      }
    },
    word: {
      fileName: '2023年工作总结报告.docx',
      summary: '这是一份2023年度部门工作总结报告，包含了工作成果、经验教训和下一年度工作计划。',
      structure: {
        sections: [
          { name: '前言', pageCount: 1 },
          { name: '年度工作成果', pageCount: 4 },
          { name: '存在的问题', pageCount: 2 },
          { name: '2024年工作计划', pageCount: 3 }
        ],
        wordCount: 5280,
        tableCount: 3,
        imageCount: 4
      },
      keyPoints: [
        '全年完成项目18个，超额完成年度目标的120%',
        '团队规模从12人扩展到18人，专业能力显著提升',
        '建立了规范化的项目管理流程，效率提升30%',
        '2024年计划拓展3个新业务领域，实现业绩增长40%'
      ],
      keywordAnalysis: {
        '项目管理': 28,
        '团队建设': 16,
        '流程优化': 14,
        '业务拓展': 12,
        '技术创新': 9
      }
    },
    pdf: {
      fileName: '新一代人工智能发展规划政策文件.pdf',
      summary: '这是一份关于新一代人工智能发展规划的政策文件，明确了未来几年人工智能发展的战略目标、重点任务和保障措施。',
      structure: {
        sections: [
          { name: '规划背景与战略意义', pageCount: 3 },
          { name: '战略目标', pageCount: 2 },
          { name: '重点任务', pageCount: 6 },
          { name: '保障措施', pageCount: 3 }
        ],
        pageCount: 14,
        wordCount: 8760
      },
      policyHighlights: [
        '到2025年，人工智能基础理论实现重大突破，部分技术与应用达到世界领先水平',
        '构建开放协同的人工智能科技创新体系',
        '培育高端高效的智能经济',
        '建设安全便捷的智能社会',
        '加强人工智能领域军民融合'
      ],
      keyTerms: [
        { term: '人工智能', count: 128 },
        { term: '创新体系', count: 32 },
        { term: '智能经济', count: 28 },
        { term: '智能社会', count: 24 },
        { term: '基础理论', count: 22 }
      ]
    },
    image: {
      fileName: '项目进度甘特图.png',
      summary: '这是一张项目进度甘特图，展示了某软件开发项目的各阶段时间安排和完成情况。',
      detectedElements: [
        { type: '图表', description: '甘特图，展示项目时间线和任务进度' },
        { type: '文字', description: '项目阶段标签：需求分析、设计、开发、测试、上线' },
        { type: '数字', description: '时间节点：2023年9月-2024年3月' },
        { type: '进度条', description: '各任务完成状态可视化' }
      ],
      contentSummary: [
        '项目总周期：2023年9月1日至2024年3月31日',
        '主要阶段：需求分析(3周)、设计(4周)、开发(12周)、测试(4周)、上线(2周)',
        '当前状态：设计阶段已完成，开发阶段进行中',
        '关键里程碑：2024年1月15日完成核心功能开发，2024年3月15日完成用户测试'
      ],
      ocrText: '项目进度计划\n周期：2023.09-2024.03\n阶段\t开始时间\t结束时间\t负责人\n需求分析\t2023.09.01\t2023.09.22\t张三\n设计\t2023.09.25\t2023.10.20\t李四\n开发\t2023.10.23\t2024.01.12\t王五\n测试\t2024.01.15\t2024.02.09\t赵六\n上线\t2024.02.12\t2024.02.23\t孙七\n运维\t2024.02.26\t2024.03.31\t周八'
    }
  };

  // 处理文件类型选择
  const handleFileTypeSelect = (type) => {
    setSelectedFileType(type);
    setFileName('');
    setResult(null);
    // 触发文件选择对话框
    document.getElementById(`${type}-input`).click();
  };

  // 处理文件选择
  const handleFileSelect = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      // 模拟文件上传和解析过程
      simulateFileAnalysis(type, file.name);
    }
    // 重置文件输入，允许重复选择同一个文件
    e.target.value = '';
  };

  // 模拟文件分析过程
  const simulateFileAnalysis = (type, name) => {
    setIsProcessing(true);
    setResult(null);
    
    // 模拟网络延迟
    setTimeout(() => {
      // 获取对应类型的模拟结果
      const analysisResult = mockResults[type];
      // 更新文件名
      analysisResult.fileName = name;
      setResult(analysisResult);
      setIsProcessing(false);
    }, 3000);
  };

  // 重置所有选择
  const handleReset = () => {
    setSelectedFileType('');
    setFileName('');
    setResult(null);
    setIsProcessing(false);
  };

  // 渲染解析结果
  const renderResult = () => {
    if (!result) return null;
    
    return (
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">解析结果</h3>
        
        {/* 文件名和摘要 */}
        <div className="mb-6">
          <p className="font-medium">文件名：{result.fileName}</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{result.summary}</p>
        </div>
        
        {/* 结构信息 */}
        {result.structure && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">文档结构</h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              {result.structure.sheets && (
                <div>
                  <p className="font-medium mb-2">工作表：</p>
                  <ul className="list-disc list-inside space-y-1">
                    {result.structure.sheets.map((sheet, index) => (
                      <li key={index}>{sheet.name} ({sheet.rows}行 × {sheet.columns}列)</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.structure.sections && (
                <div>
                  <p className="font-medium mb-2">章节：</p>
                  <ul className="list-disc list-inside space-y-1">
                    {result.structure.sections.map((section, index) => (
                      <li key={index}>{section.name} ({section.pageCount}页)</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.structure.wordCount && (
                <p className="mt-2">总字数：{result.structure.wordCount}</p>
              )}
              {result.structure.keyColumns && (
                <p className="mt-2">关键列：{result.structure.keyColumns.join(', ')}</p>
              )}
            </div>
          </div>
        )}
        
        {/* 检测到的元素（图片解析） */}
        {result.detectedElements && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">检测到的元素</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.detectedElements.map((element, index) => (
                <div key={index} className="border p-3 rounded">
                  <p className="font-medium">{element.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{element.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 关键信息 */}
        {(result.keyPoints || result.insights || result.policyHighlights || result.contentSummary) && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">关键信息</h4>
            <ul className="list-disc list-inside space-y-2 bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
              {result.keyPoints && result.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              {result.insights && result.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
              {result.policyHighlights && result.policyHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
              {result.contentSummary && result.contentSummary.map((summary, index) => (
                <li key={index}>{summary}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* 关键数据（Excel） */}
        {result.keyData && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">关键数据</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(result.keyData).map(([key, value]) => (
                <div key={key} className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">{key}</p>
                  <p className="text-xl font-bold mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 关键词分析（Word） */}
        {result.keywordAnalysis && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">关键词分析</h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              {Object.entries(result.keywordAnalysis).map(([keyword, count]) => (
                <div key={keyword} className="flex justify-between items-center mb-2">
                  <span>{keyword}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${Math.min(count * 3, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{count}次</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 关键术语（PDF） */}
        {result.keyTerms && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">关键术语</h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                {result.keyTerms.map((termInfo, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{termInfo.term}</span>
                    <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-sm">{termInfo.count}次</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* OCR文本（图片） */}
        {result.ocrText && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">提取的文本</h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded font-mono text-sm whitespace-pre-wrap">
              {result.ocrText}
            </div>
          </div>
        )}
        
        {/* 操作按钮 */}
        <div className="flex justify-end gap-3">
          <button 
            onClick={() => navigator.clipboard.writeText(JSON.stringify(result, null, 2))}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            复制结果
          </button>
          <button 
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            重新解析
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">文档解析</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          智能解析各类文档，提取关键信息，支持Excel、Word、PDF和图片文件的内容识别与结构化处理。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* 上传区域 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">选择文件类型</h2>
          
          {/* 文件类型选择卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {fileTypes.map((type) => (
              <div
                key={type.key}
                className={`border rounded-lg p-6 cursor-pointer transition-all ${selectedFileType === type.key ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'}`}
                onClick={() => handleFileTypeSelect(type.key)}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">支持 {type.extensions}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">最大 {type.maxSize}</p>
                <div className="mt-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">适用场景：</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 文件上传提示 */}
          {selectedFileType && (
            <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <p className="flex items-center text-yellow-800 dark:text-yellow-200">
                <span className="mr-2">⚠️</span>
                请选择要解析的 {fileTypes.find(t => t.key === selectedFileType)?.name} 文件
              </p>
            </div>
          )}

          {/* 已选文件显示 */}
          {fileName && !isProcessing && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
              <p className="flex items-center text-green-800 dark:text-green-200">
                <span className="mr-2">✓</span>
                已选择文件：{fileName}
              </p>
            </div>
          )}

          {/* 处理中状态 */}
          {isProcessing && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
              <p className="text-lg font-medium">正在解析文件...</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                正在提取文件内容并进行智能分析，请稍候...
              </p>
            </div>
          )}

          {/* 隐藏的文件输入 */}
          {fileTypes.map((type) => (
            <input
              key={type.key}
              type="file"
              id={`${type.key}-input`}
              className="hidden"
              accept={type.extensions.split(', ').map(ext => `*${ext}`).join(',')}
              onChange={(e) => handleFileSelect(e, type.key)}
            />
          ))}
        </div>

        {/* 结果展示区域 */}
        {renderResult()}

        {/* 技术特点 */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">文档解析技术特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">多格式支持</h3>
              <p>支持Excel、Word、PDF和图片等多种文件格式的智能解析，满足不同场景需求。</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">内容智能提取</h3>
              <p>采用OCR、表格识别和文本分析技术，准确提取文件中的结构化和非结构化信息。</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">深度内容理解</h3>
              <p>基于大语言模型的语义理解能力，提供文档摘要、关键信息提取和数据洞察。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalysisPage;