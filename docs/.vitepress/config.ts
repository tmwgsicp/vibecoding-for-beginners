import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vibe Coding 新手指南',
  description: 'AI编程从入门到完整产品 | 完全开源',
  
  lang: 'zh-CN',
  
  // 忽略死链检查(开发中的文档可能有未完成的链接)
  ignoreDeadLinks: true,
  
  // 网站图标和元信息
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Vibe Coding 新手指南 - AI编程实战' }],
    ['meta', { property: 'og:description', content: '用AI做出完整产品的方法论' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  
  // 主题配置
  themeConfig: {
    // 网站Logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/' },
      { text: '关于作者', link: '/author/about' },
      { text: '常见问题', link: '/community/faq' },
      { 
        text: '更多', 
        items: [
          { text: '作品展示', link: '/showcase/' },
          { text: '版权声明', link: '/community/copyright' }
        ]
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        },
        {
          text: '方法论 (40% - 核心)',
          collapsed: false,
          items: [
            { text: '📖 方法论介绍', link: '/guide/01-methodology/' },
            { text: '发现值得做的问题', link: '/guide/01-methodology/01-finding-problems' },
            { text: '需求验证', link: '/guide/01-methodology/02-validating-needs' },
            { text: '定义MVP', link: '/guide/01-methodology/03-defining-mvp' },
            { text: '技术栈科普', link: '/guide/01-methodology/04-tech-stack-intro' },
            { text: '技术决策', link: '/guide/01-methodology/05-tech-decisions' },
            { text: '环境搭建', link: '/guide/01-methodology/06-setup-environment' },
            { text: 'AI协作技巧', link: '/guide/01-methodology/07-ai-collaboration' },
            { text: '理解AI写的代码', link: '/guide/01-methodology/08-understanding-code' },
            { text: '测试策略', link: '/guide/01-methodology/09-testing-strategy' },
            { text: '架构设计', link: '/guide/01-methodology/10-architecture-design' },
            { text: '部署上线完整指南', link: '/guide/01-methodology/11-deployment-guide' },
            { text: '问题解决', link: '/guide/01-methodology/12-problem-solving' },
            { text: 'Git和开源', link: '/guide/01-methodology/13-git-and-opensource' },
            { text: '迭代方式', link: '/guide/01-methodology/14-iterating' }
          ]
        },
        {
          text: '常见错误 (10%)',
          collapsed: true,
          items: [
            { text: '📖 常见错误介绍', link: '/guide/02-pitfalls/' },
            { text: '追求完美', link: '/guide/02-pitfalls/01-perfectionism' },
            { text: '过度依赖AI', link: '/guide/02-pitfalls/02-over-relying-on-ai' },
            { text: '不重视测试', link: '/guide/02-pitfalls/03-ignoring-testing' },
            { text: '技术选型错误', link: '/guide/02-pitfalls/04-wrong-tech-choice' },
            { text: '闭门造车', link: '/guide/02-pitfalls/05-building-behind-doors' },
            { text: '开源协议问题', link: '/guide/02-pitfalls/06-license-issues' }
          ]
        },
        {
          text: '真实案例 (35%)',
          collapsed: true,
          items: [
            { text: '📖 案例介绍', link: '/guide/03-case-study/' },
            { 
              text: 'AI News RSS 项目',
              link: '/guide/03-case-study/ainews-rss/',
              items: [
                { text: '项目概览', link: '/guide/03-case-study/ainews-rss/00-overview' },
                { text: '为什么做这个项目', link: '/guide/03-case-study/ainews-rss/01-why' },
                { text: '需求分析和MVP定义', link: '/guide/03-case-study/ainews-rss/02-requirements' },
                { text: '技术选型', link: '/guide/03-case-study/ainews-rss/03-tech-stack' },
                { text: '架构设计', link: '/guide/03-case-study/ainews-rss/04-architecture' },
                { text: '开发过程 - 爬虫模块', link: '/guide/03-case-study/ainews-rss/05-crawler' },
                { text: '开发过程 - AI摘要', link: '/guide/03-case-study/ainews-rss/06-ai-summary' },
                { text: '开发过程 - RSS生成', link: '/guide/03-case-study/ainews-rss/07-rss' },
                { text: 'AI对话实录', link: '/guide/03-case-study/ainews-rss/08-ai-dialogue' },
                { text: '测试和调试', link: '/guide/03-case-study/ainews-rss/09-testing' },
                { text: '部署上线', link: '/guide/03-case-study/ainews-rss/10-deployment' },
                { text: '商业化探索', link: '/guide/03-case-study/ainews-rss/11-commercialization' },
                { text: '经验总结', link: '/guide/03-case-study/ainews-rss/12-lessons' }
              ]
            }
          ]
        },
        {
          text: '动手实践 (10%)',
          collapsed: true,
          items: [
            { text: '📖 实践介绍', link: '/guide/04-practice/' },
            { 
              text: 'AI对话助手(带工具调用)',
              link: '/guide/04-practice/ai-chat/',
              items: [
                { text: '项目介绍', link: '/guide/04-practice/ai-chat/00-intro' },
                { text: 'Week 1: 基础对话', link: '/guide/04-practice/ai-chat/week1-mvp/' },
                { text: 'Week 2: 用户系统', link: '/guide/04-practice/ai-chat/week2-user/' },
                { text: 'Week 3: 工具调用', link: '/guide/04-practice/ai-chat/week3-tools/' },
                { text: 'Week 4: 上线运营', link: '/guide/04-practice/ai-chat/week4-deploy/' }
              ]
            },
            { text: '做自己的项目', link: '/guide/04-practice/your-own-project' }
          ]
        },
        {
          text: '工具和概念 (查阅)',
          collapsed: true,
          items: [
            { text: '📖 工具概览', link: '/guide/05-tools/' },
            { text: 'AI工具', link: '/guide/05-tools/ai-tools/' },
            { text: '编程概念', link: '/guide/05-tools/programming/' },
            { text: '开源相关', link: '/guide/05-tools/opensource/' },
            { text: '部署工具', link: '/guide/05-tools/deployment/' }
          ]
        }
      ],
      
      '/community/': [
        {
          text: '常见问题',
          items: [
            { text: '常见问题', link: '/community/faq' }
          ]
        }
      ],
      
      '/showcase/': [
        {
          text: '作品展示',
          items: [
            { text: '所有作品', link: '/showcase/' },
            { text: '提交作品', link: '/showcase/TEMPLATE' }
          ]
        }
      ],
      
      '/author/': [
        {
          text: '关于作者',
          items: [
            { text: '个人介绍', link: '/author/about' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tmwgsicp/vibecoding-for-beginners' }
    ],
    
  // 页脚
  footer: {
    message: '内容采用 <a href="https://github.com/tmwgsicp/vibecoding-for-beginners/blob/main/LICENSE" target="_blank">AGPL-3.0 License</a> 开源 | <a href="/community/copyright">版权声明</a>',
    copyright: 'Copyright © 2026-present tmwgsicp | 仅在 <a href="https://github.com/tmwgsicp/vibecoding-for-beginners" target="_blank">GitHub</a> 发布'
  },
    
    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    
    // 文档页脚的上一页/下一页链接
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 外链图标
    externalLinkIcon: true,
    
    // 大纲显示级别
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    
    // 返回顶部
    returnToTopLabel: '返回顶部',
    
    // 浅色/深色模式切换
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    
    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',
  },
  
  // Markdown配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
    
    // 代码块主题
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  // 站点地图
  sitemap: {
    hostname: 'https://github.com/tmwgsicp/vibecoding-for-beginners'
  }
})
