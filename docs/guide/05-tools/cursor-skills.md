# Cursor Skills 使用指南

> **内容状态:** 规划中，基于真实使用经验重写

---

## 什么是 Skills?

Cursor 的 Skills 功能可以让你定义结构化的 AI 工作流。

**本质:**
- 结构化的提示词
- 特定场景自动激活
- 沉淀最佳实践

**和普通对话的区别:**
- 普通对话: 每次都要重新描述
- Skills: 一次编写，自动触发

---

## 本项目的 Skills

项目包含了几个实用的 Skills，位于 `.cursor/skills/` 目录：

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

使用 `@` 明确调用：

```
@solution-design 帮我分析这个项目的技术方案
@requirement-breakdown 拆解这个需求
```

---

## 如何创建自己的 Skill

### 基本结构

```
.cursor/skills/your-skill/
└── SKILL.md    # 核心指令文件
```

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

- [Cursor Skills 官方文档](https://docs.cursor.com/features/skills)
- 项目 Skills 源码: `.cursor/skills/` 目录
- 创建指南: 使用 `@skill-creator` 交互式创建

---

**下一步:** 试试使用项目中的 Skills，体验效果。

::: tip 文档完善中
这份文档会根据实际使用经验持续更新，补充更多真实案例和踩坑经验。
:::
