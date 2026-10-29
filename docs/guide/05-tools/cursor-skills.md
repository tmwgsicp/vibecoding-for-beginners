# Skills 使用指南

---

## 什么是 Skills?

Skills 可以让你定义结构化的 AI 工作流。它最早由 Anthropic 提出，现在是开放标准（agentskills.io），Claude Code、Codex、Cursor 都支持，同一份 Skill 几个工具都能用。

**本质:**
- 结构化的提示词
- 特定场景自动激活
- 把做过一次的好做法固定下来

**和普通对话的区别:**
- 普通对话: 每次都要重新描述
- Skills: 一次编写，自动触发

---

## 本项目的 Skills

项目包含了几个实用的 Skills，位于仓库的 `.cursor/skills/` 目录：

### 开发相关
- **development-workflow** - 开发流程引导
- **solution-design** - 方案设计和技术选型
- **requirement-breakdown** - 需求拆解
- **problem-diagnosis** - 问题诊断
- **performance-optimization** - 性能优化
- **ui-design-helper** - UI 设计指导

### 项目配套
- **tutorial-writer** - 教程写作助手（本项目专用）
- **skill-creator** - Skill 创建助手

---

## 如何使用

### 方式 1: 自动触发

正常对话，AI 会自动识别场景并激活对应 Skill：

```
你: "我想做一个项目，不知道用什么技术"
→ solution-design Skill 自动激活

你: "代码报错了，不知道怎么调试"
→ problem-diagnosis Skill 自动激活
```

### 方式 2: 手动指定

在对话里直接点名：

```
用 solution-design 帮我分析这个项目的技术方案
用 requirement-breakdown 拆解这个需求
```

Claude Code 里也可以输入 `/` 加 Skill 名字来调用。

---

## 如何创建自己的 Skill

### 基本结构

```
your-skill/
└── SKILL.md    # 核心指令文件
```

**放在哪里:** 不同工具读不同的目录，放在项目里就只对这个项目生效。

| 工具 | 项目里的目录 |
|------|------------|
| Claude Code | `.claude/skills/` |
| Codex | `.agents/skills/` |
| Cursor | `.cursor/skills/` 或 `.agents/skills/` |

同时用几个工具时，放在 `.agents/skills/`，Codex 和 Cursor 都能读到；Claude Code 再复制一份到 `.claude/skills/`。想用本项目的 Skills，把 `.cursor/skills/` 里的文件夹复制到你的工具对应的目录就行。

### SKILL.md 格式

````markdown
---
name: your-skill-name
description: 简短描述做什么、何时使用。包含触发关键词。
---

# Skill 标题

## 核心原则

[定义这个 Skill 的基本规则]

## 工作流程

1. 第一步
2. 第二步
3. ...

## 示例

[具体使用示例]
````

### 设计要点

1. **description 很重要** - AI 通过它判断何时激活
2. **步骤要具体** - 不要写抽象的指导
3. **提供示例** - 真实的输入输出示例效果最好
4. **控制长度** - SKILL.md 控制在 500 行以内

---

## 相关资源

- [Agent Skills 开放标准](https://agentskills.io)
- [Claude Code Skills 文档](https://code.claude.com/docs/en/skills)
- [Codex Skills 文档](https://learn.chatgpt.com/docs/build-skills)
- [Cursor Skills 文档](https://cursor.com/docs/context/skills)
- 项目 Skills 源码: `.cursor/skills/` 目录
- 创建指南: 让 AI 用 skill-creator 带你一步步创建

---

**下一步:** 试试使用项目中的 Skills，体验效果。
