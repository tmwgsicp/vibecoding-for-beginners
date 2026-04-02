# 快速参考: 8 个 Skills 使用指南

---

## 🚀 元工具(随时可用)

### tutorial-writer
**用途:** 把想法转成结构化教程  
**触发:** "帮我写教程"、"整理笔记"  
**快速开始:** [QUICKSTART](./tutorial-writer/QUICKSTART.md)

### skill-creator
**用途:** 交互式创建新 Skill  
**触发:** "创建 skill"、"做一个 skill"  
**快速开始:** [QUICKSTART](./skill-creator/QUICKSTART.md)

---

## 🎯 关键决策(项目开始时)

### requirement-breakdown
**用途:** 拆解需求,定义 MVP  
**触发:** "拆解需求"、"不知道先做什么"  
**适合:** 有想法但不知道怎么开始

### solution-design
**用途:** 架构设计 + 技术选型(一体)  
**触发:** "怎么设计"、"用什么技术"  
**适合:** 需求明确,不知道怎么实现

### development-workflow
**用途:** 开发流程引导  
**触发:** "开发步骤"、"怎么开始开发"  
**适合:** 新手需要流程指引

---

## 🔧 问题解决(遇到问题时)

### problem-diagnosis
**用途:** 系统性问题诊断  
**触发:** "出错了"、"报错"、"bug"  
**适合:** 遇到问题不知道怎么排查

### performance-optimization
**用途:** 全栈性能优化  
**触发:** "慢"、"卡顿"、"性能优化"  
**适合:** 性能问题(前端/后端/数据库)

### ui-design-helper
**用途:** UI 设计和交互  
**触发:** "不好看"、"界面设计"、"UI"  
**适合:** 想让页面更美观

---

## 💡 使用技巧

### 自动触发
正常对话,AI 会自动识别:
```
你: "我想做一个博客系统,不知道先做什么功能"
→ requirement-breakdown 自动激活
```

### 手动调用
明确指定:
```
@requirement-breakdown 帮我拆解博客系统的需求
```

### 查看详情
```
Read .cursor/skills/[skill-name]/SKILL.md
```

---

## 🎯 典型开发流程

```
想法
 ↓
requirement-breakdown    → MVP 清单
 ↓
solution-design         → 架构 + 技术栈
 ↓
(可选) development-workflow → 开发步骤
 ↓
开发中... (自由协作)
 ↓
problem-diagnosis       → 出错时
performance-optimization → 慢了时
ui-design-helper        → 不好看时
 ↓
完成!
```

---

## 📂 文件位置

```
.cursor/skills/
├── tutorial-writer/        ✅ 完成
├── skill-creator/          ✅ 完成
├── requirement-breakdown/  📋 框架
├── solution-design/        📋 框架
├── development-workflow/   📋 框架
├── problem-diagnosis/      📋 框架
├── performance-optimization/ 📋 框架
└── ui-design-helper/       📋 框架
```

---

**完整说明:** [README.md](./README.md)
