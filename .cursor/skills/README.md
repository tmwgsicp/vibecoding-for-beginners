# Vibe Coding Skills 集合

本项目配套的 AI Skills,帮助你把方法论转化为可执行的工作流。

---

## 什么是 Skills?

Skills 是 Claude 提出的结构化提示词机制,通过定义明确的触发条件和执行步骤,让 AI 在特定场景下自动激活并执行专业化工作流。

**简单理解:**
- 普通对话: 每次都要重新描述需求
- 使用 Skills: 自动识别场景,按最佳实践执行

---

## 可用 Skills

### ✅ 教程写作助手 (tutorial-writer)
**状态:** 已完成  
**作用:** 把原始想法转换成结构化教程文档  
**适合:** 写教程、整理笔记、输出经验分享

[查看详情](./tutorial-writer/QUICKSTART.md)

---

### ✅ Skill 创建助手 (skill-creator)
**状态:** 已完成  
**作用:** 交互式引导创建高质量 Skill  
**适合:** 想创建自己的 Skill 但不知道如何开始

[查看详情](./skill-creator/QUICKSTART.md)

---

### 📋 需求拆解 (requirement-breakdown)
**状态:** 规划中  
**作用:** 拆解需求为 MVP 和优先级任务  
**对应课程:** 第 2、3 章

[查看规划](./requirement-breakdown/SKILL.md)

---

### 📋 方案设计 (solution-design)
**状态:** 框架完成(40%)  
**作用:** 架构设计 + 技术选型(合一决策)  
**对应课程:** 第 4、5 章

[查看规划](./solution-design/SKILL.md)

---

### 📋 开发流程 (development-workflow)
**状态:** 框架完成(40%)  
**作用:** AI 时代的快速迭代开发流程  
**对应课程:** 第 7-11 章

[查看规划](./development-workflow/SKILL.md)

---

### 🔍 问题诊断 (problem-diagnosis)
**状态:** 规划中  
**作用:** 系统性诊断开发和部署问题  
**对应课程:** 第 12 章

[查看规划](./problem-diagnosis/SKILL.md)

---

### ⚡ 性能优化 (performance-optimization)
**状态:** 框架完成(40%)  
**作用:** 全栈性能优化(前端 + 后端 + 数据库 + 部署)  
**对应课程:** 第 14 章

[查看规划](./performance-optimization/SKILL.md)

---

### 🎨 UI 设计助手 (ui-design-helper)
**状态:** 框架完成(40%)  
**作用:** 前端 UI 设计和交互指导  
**对应课程:** 第 9、10 章

[查看规划](./ui-design-helper/SKILL.md)

---

## 🌊 典型使用流程

```
项目想法
    ↓
requirement-breakdown    → 拆解需求,定义 MVP
    ↓
solution-design         → 架构 + 技术方案
    ↓
development-workflow    → 开发步骤(新手可选)
    ↓
开发中... (你 + AI 自由协作)
    ↓ 遇到问题
problem-diagnosis       → 出错时
performance-optimization → 慢了时
ui-design-helper        → 不好看时
    ↓
完成!
```

**说明:** 2 个元工具(tutorial-writer, skill-creator)为作者私人工具,不包含在开源版本中。

---

## 如何使用

### 开源 Skills 使用(6 个)

这些 Skills 的框架已开源,欢迎贡献:

1. **自动触发** - 当你的对话符合触发条件时
2. **手动调用** - 在对话中 `@skill-name`
3. **无需配置** - 放在 `.cursor/skills/` 目录即可

**在其他 AI 工具中使用:**

框架 Skills 本质是提示词,也可以:
- 复制 SKILL.md 内容到对话中
- 告诉 AI "按照这个流程执行"
- 手动引导 AI 完成步骤

---

## 为什么开源这些 Skills?

### 1. 方法论的具体化
课程讲方法论,Skills 让方法论可执行。

### 2. 降低学习门槛
不用每次都从零思考"怎么做",直接用 Skill 引导。

### 3. 沉淀最佳实践
把作者的经验固化成可复用的工作流。

### 4. 社区协作
开源后大家可以:
- 使用和反馈
- 贡献改进
- 定制自己的版本

---

## 自定义 Skills

### 修改现有 Skill

```bash
# 1. 找到 Skill 目录
cd .cursor/skills/skill-name

# 2. 编辑 SKILL.md
# 修改触发条件、工作流程、示例

# 3. 保存后立即生效
```

### 创建新的 Skill

```bash
# 1. 创建目录
mkdir -p .cursor/skills/your-skill

# 2. 创建 SKILL.md
# 包含 YAML frontmatter 和 markdown 正文

# 3. 测试使用
```

参考: [创建 Skill 指南](../../docs/guide/05-tools/skills-guide.md#如何创建自己的-skill)

---

## 贡献指南

**欢迎贡献:**
- ✅ 改进现有 Skill 的提示词
- ✅ 补充真实使用案例
- ✅ 报告问题和建议
- ✅ 分享你的自定义 Skill

**提交方式:**
1. Fork 本项目
2. 修改或创建 Skill
3. 提交 Pull Request
4. 说明改进内容

---

## Skills vs 课程章节对照

| Skill | 对应课程章节 | 核心能力 |
|-------|-------------|---------|
| tutorial-writer | 全部章节 | 输出结构化文档 |
| skill-creator | 第 6 章 | 创建新 Skill |
| requirement-breakdown | 第 2、3 章 | 需求拆解和 MVP 定义 |
| solution-design | 第 4、5 章 | 方案设计(架构 + 技术) |
| development-workflow | 第 7-11 章 | 开发流程引导 |
| problem-diagnosis | 第 12 章 | 问题诊断和解决 |
| performance-optimization | 第 14 章 | 全栈性能优化 |
| ui-design-helper | 第 9、10 章 | UI 设计和交互 |

**使用建议:**
- 学习课程时理解方法论
- 实践时使用 Skills 加速执行

---

## 常见问题

### Q: Skills 在哪些 AI 工具中可用?
A: 
- ✅ Cursor (原生支持,自动识别)
- ✅ Claude (可以复制内容使用)
- ⚠️ 其他工具 (需要手动粘贴提示词)

### Q: Skill 没有自动触发?
A:
- 检查文件路径: `.cursor/skills/skill-name/SKILL.md`
- 检查 YAML frontmatter 格式
- 尝试明确提到触发关键词
- 或手动 `@skill-name` 调用

### Q: 可以修改 Skill 吗?
A: 当然可以!
- 这些 Skills 是开源的
- 你可以根据项目定制
- 欢迎分享改进

### Q: Skill 会和 Rules 冲突吗?
A: 不会
- Rules: 全局规范(始终生效)
- Skills: 特定任务工作流(按需激活)
- 它们互补,不冲突

---

## 更新日志

### 2026-03-28 v1.0
- ✅ 创建 2 个核心 Skill(完整版)
- ✅ 创建 6 个框架 Skill(40% 完成度)
- ✅ 确定 8 个 Skills 最终体系
- ✅ 体系调整: 删除 tech-selection,新增 solution-design/development-workflow/ui-design-helper
- ✅ 性能优化扩展到全栈
- 🗑️ 清理废弃文件和目录

### 待更新
- 完善 6 个框架 Skills(补充真实案例)
- 收集学员使用反馈
- 基于反馈迭代到 v1.5

---

## 📚 相关文档

- [快速参考](./QUICK_REFERENCE.md) - 一页纸速查
- [体系总览](./OVERVIEW.md) - 设计理念
- [开发路线图](./ROADMAP.md) - 完善计划
- [快速测试](./QUICKSTART.md) - 立即体验
- [课程指南](../../docs/guide/05-tools/skills-guide.md) - 详细教程

---

**开始使用:** [快速参考](./QUICK_REFERENCE.md) | [立即测试](./QUICKSTART.md)
