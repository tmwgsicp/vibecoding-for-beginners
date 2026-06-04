# 真实案例拆解

---

## 为什么需要案例？

方法论告诉你"应该怎么做"，案例告诉你"实际怎么做的"。

**看完真实案例，你会明白：**
- 每个决策背后的真实原因
- 遇到问题时的排查和解决过程
- 开源版和 SaaS 版的巨大差异
- 踩过的坑和积累的经验

---

## AI News RSS 项目

一个 AI 新闻聚合项目，从开源 MVP 做到 SaaS 商业化的完整过程。

**项目特点：**
- 自身需求驱动，不是"做着玩"
- 开源版 + SaaS 版双轨运行
- 涵盖支付、防薅、部署等真实 SaaS 工程
- 数据诚实 — 2 个付费用户，不是成功学

---

### 目录

**Part 1：开源版（从 0 到能用）**

| 章节 | 内容 |
|------|------|
| [00 项目概览](/guide/03-case-study/ainews-rss/00-overview) | 项目全貌、演进路径、关键数据 |
| [01 为什么做](/guide/03-case-study/ainews-rss/01-why) | 需求来源、验证过程 |
| [02 需求分析](/guide/03-case-study/ainews-rss/02-requirements) | MVP 定义、信息源选择 |
| [03 技术选型](/guide/03-case-study/ainews-rss/03-tech-decisions) | Python/FastAPI/SQLite 的决策逻辑 |
| [04 架构设计](/guide/03-case-study/ainews-rss/04-architecture) | 数据流、模块划分、架构图 |
| [05 核心实现](/guide/03-case-study/ainews-rss/05-implementation) | 爬虫、AI 分析、聚合调度、RSS 输出 |
| [06 测试调试](/guide/03-case-study/ainews-rss/06-testing) | 非科班怎么测 AI 系统 |
| [07 部署开源](/guide/03-case-study/ainews-rss/07-deployment) | Docker 部署、开源策略 |

**Part 2：SaaS 版（从能用到能卖）**

| 章节 | 内容 |
|------|------|
| [08 SaaS 概览](/guide/03-case-study/ainews-rss/08-saas-overview) | 多了什么、复杂度对比 |
| [09 用户体系](/guide/03-case-study/ainews-rss/09-user-system) | 注册/登录/JWT/套餐权限 |
| [10 支付逻辑](/guide/03-case-study/ainews-rss/10-payment) | 支付宝当面付、订单状态机 |
| [11 防薅羊毛](/guide/03-case-study/ainews-rss/11-anti-abuse) | 真实攻击案例和多层防护 |
| [12 SaaS 部署](/guide/03-case-study/ainews-rss/12-deployment-saas) | 1Panel + Nginx + 多服务编排 |
| [13 经验总结](/guide/03-case-study/ainews-rss/13-lessons-learned) | 开源 vs SaaS 的认知差距 |

---

## 为什么只讲一个案例？

**一个案例讲透 > 多个案例讲浅。**

这一个案例涵盖了：从需求发现到 MVP、从开源到商业化、从单机部署到多服务运维。足够说明方法论的实际应用。

---

## 怎么看？

- **完整阅读（2-3 小时）** — 通读 13 章，了解项目全貌
- **重点阅读（1 小时）** — 只看 03 技术选型 + 04 架构 + 08 SaaS 概览 + 13 经验总结
- **问题导向** — 遇到具体问题时翻对应章节

---

[← 返回指南](/guide/) | [开始阅读案例 →](/guide/03-case-study/ainews-rss/00-overview)
