# Skills 体系总览

Vibe Coding 配套的 8 个 AI Skills,把方法论转化为可执行工具。

---

## 🎯 设计理念

### AI 时代的开发方式

**传统软件工程:**
```
严格流程 → 角色分工 → 文档驱动
(为团队协作设计)
```

**Vibe Coding + Skills:**
```
快速试错 → 一人包圆 → 关键决策有支持
(为个人 + AI 设计)
```

**核心差异:**
- 不是"流程约束",是"决策支持"
- 不是"角色划分",是"节点引导"
- 保持灵活性,在关键点提供帮助

---

## 📊 Skills 体系结构

### 层级 1: 元工具(2 个)

#### ✅ tutorial-writer
**作用:** 写作助手,把想法转换成结构化文档  
**状态:** 已完成  
**适合:** 写教程、整理笔记、输出经验

#### ✅ skill-creator
**作用:** 创建 Skills 的 Skill(元工具)  
**状态:** 已完成  
**适合:** 想创建自己的 Skill 但不知如何开始

---

### 层级 2: 关键决策(3 个)

#### 📋 requirement-breakdown
**作用:** 需求拆解 + MVP 定义  
**状态:** 规划中  
**对应课程:** 第 2、3 章  
**触发时机:** 有想法但不知道怎么拆解

#### 📋 solution-design
**作用:** 架构设计 + 技术选型(合一)  
**状态:** 规划中  
**对应课程:** 第 4、5 章  
**触发时机:** 需求明确了,不知道怎么做、用什么技术

#### 📋 development-workflow
**作用:** 开发流程引导(新手向)  
**状态:** 规划中  
**对应课程:** 第 7-11 章  
**触发时机:** 新手需要开发步骤指引

---

### 层级 3: 问题解决(3 个)

#### 📋 problem-diagnosis
**作用:** 系统性问题诊断和排查  
**状态:** 规划中  
**对应课程:** 第 12 章  
**触发时机:** 出错了、bug、报错

#### 📋 performance-optimization
**作用:** 全栈性能优化(前端+后端+数据库+部署)  
**状态:** 规划中  
**对应课程:** 第 14 章  
**触发时机:** 慢、卡顿、性能问题

#### 📋 ui-design-helper
**作用:** UI 设计和交互指导  
**状态:** 规划中  
**对应课程:** 第 9、10 章  
**触发时机:** 前端设计、界面、怎么更好看

---

## 🌊 使用流程示例

### 完整开发流程

```
项目想法
    ↓
【决策节点 1】做什么? 
→ requirement-breakdown (拆解需求、定义 MVP)

    ↓
【决策节点 2】怎么做?用什么?
→ solution-design (架构 + 技术一起决策)

    ↓
【可选引导】不知道怎么开发?
→ development-workflow (新手用,老手跳过)

    ↓
开发中... (你 + AI 自由协作)

    ↓ 遇到问题时
【按需调用】出错了?
→ problem-diagnosis

【按需调用】慢了?
→ performance-optimization

【按需调用】不好看?
→ ui-design-helper

    ↓
完成迭代!
```

### 特点

- ✅ **关键决策有支持** - 不是凭感觉,是系统性分析
- ✅ **开发过程保持灵活** - 不强制流程
- ✅ **小白有抓手** - 跟着 Skill 走
- ✅ **高手不受限** - 可以跳过任何 Skill

---

## 💡 Skills vs 课程章节

| Skill | 对应章节 | 核心价值 | 完成度 |
|-------|---------|---------|--------|
| tutorial-writer | 全部章节 | 结构化写作 | ✅ 100% |
| skill-creator | 第 6 章 | 创建 Skills | ✅ 100% |
| requirement-breakdown | 第 2、3 章 | 需求拆解 | 📋 40% |
| solution-design | 第 4、5 章 | 方案设计 | 📋 40% |
| development-workflow | 第 7-11 章 | 流程引导 | 📋 40% |
| problem-diagnosis | 第 12 章 | 问题诊断 | 📋 40% |
| performance-optimization | 第 14 章 | 性能优化 | 📋 40% |
| ui-design-helper | 第 9、10 章 | UI 设计 | 📋 40% |

---

## 🎯 核心价值

### 对作者
- 沉淀经验为可复用工具
- 降低重复劳动
- 提升输出质量

### 对学员
- 方法论可执行
- 降低实践门槛
- 可以定制和扩展

### 对课程
- 方法论具体化
- 提供实践工具
- 增强可复制性

---

## 🔄 Skills vs 传统角色

### 为什么不按传统角色设计?

**传统角色(不适合):**
```
产品经理 → 架构师 → 技术选型 → 开发 → 测试 → 运维
(太多环节,个人开发不需要)
```

**Skills 设计(适合个人开发):**
```
关键决策点有引导 + 开发过程保持灵活
(效率高,可复制)
```

**核心差异:**
- 不是"角色分工",是"决策节点"
- 不是"强制流程",是"可选引导"
- 符合实际工作方式

---

## 📂 文件结构

```
.cursor/skills/
├── README.md                       # 快速开始
├── OVERVIEW.md                     # 本文件,体系总览
├── ROADMAP.md                      # 开发路线图
├── QUICKSTART.md                   # 快速测试
│
├── tutorial-writer/                # ✅ 教程写作助手
│   ├── SKILL.md
│   ├── reference.md
│   ├── examples.md
│   ├── QUICKSTART.md
│   ├── TEST.md
│   └── GUIDE_FOR_AUTHOR.md
│
├── skill-creator/                  # ✅ Skill 创建助手
│   ├── SKILL.md
│   ├── examples.md
│   └── QUICKSTART.md
│
├── requirement-breakdown/          # 📋 需求拆解
│   └── SKILL.md
│
├── solution-design/                # 📋 方案设计
│   └── SKILL.md
│
├── development-workflow/           # 📋 开发流程
│   └── SKILL.md
│
├── problem-diagnosis/              # 📋 问题诊断
│   └── SKILL.md
│
├── performance-optimization/       # 📋 性能优化
│   └── SKILL.md
│
└── ui-design-helper/               # 📋 UI 设计
    └── SKILL.md
```

---

## 🚀 使用方式

### 在 Cursor 中(推荐)

**自动触发:**
- AI 会根据对话内容自动识别合适的 Skill
- 在 `description` 中定义了触发关键词

**手动调用:**
- 使用 `@skill-name` 明确调用
- 或直接说"用 XXX Skill"

### 在其他 AI 工具中

虽然为 Cursor 设计,但本质是提示词:
1. 复制 `SKILL.md` 内容
2. 粘贴到对话中
3. 告诉 AI "按这个流程执行"

---

## 🎨 特殊设计考虑

### UI 设计助手的平衡

**作者理念:** 功能 > 设计,够用就行

**Skill 处理:**
- 提供最简方案(30 分钟搞定)
- 明确表达作者理念
- 但不排斥其他取舍
- 开放社区贡献

**结果:** 适配不同人的需求

---

### 性能优化的扩展

**原:** 只有前端优化  
**现:** 全栈性能优化

**覆盖:**
- 前端(打包、资源、运行时)
- 后端(查询、缓存、异步)
- 数据库(索引、慢查询)
- 部署(Nginx、HTTP/2)

**理由:** 性能问题往往是跨层级的

---

## 📋 完善计划

### 近期(1-2 周)
- 补充真实案例(从作者项目提取)
- 完善 6 个规划中的 Skills
- 测试自动触发准确度

### 中期(1-3 个月)
- 收集学员使用反馈
- 迭代优化到 v2.0
- 补充更多场景

### 长期
- 社区贡献新 Skills
- 扩展到更多技术栈
- 持续优化

---

## 🤝 贡献方式

### 欢迎贡献

**补充现有 Skills:**
- 真实使用案例
- 改进提示词质量
- 修正技术细节
- 优化触发准确度

**创建新 Skills:**
基于课程方法论:
- 代码审查 Skill
- 测试策略 Skill
- 部署检查 Skill
- API 设计 Skill
- 更多...

### 提交流程
1. Fork 项目
2. 修改 `.cursor/skills/`
3. 测试效果
4. 提交 Pull Request

---

## 📚 相关文档

- [快速开始](./README.md)
- [使用教程](../../docs/guide/05-tools/skills-guide.md)
- [开发路线图](./ROADMAP.md)
- [快速测试](./QUICKSTART.md)

---

## 更新日志

### 2026-03-28 v1.0
- ✅ 创建 2 个核心 Skill(tutorial-writer, skill-creator)
- 📋 规划 6 个配套 Skill
- ⭐ 确定最终体系: 8 个 Skills
- ⭐ 调整: 性能优化扩展到全栈 + 新增 UI 设计助手
- 🗑️ 删除: tech-selection(合并到 solution-design)

---

**开始使用:** [快速开始指南](./QUICKSTART.md)
