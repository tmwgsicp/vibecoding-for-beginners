# AI News RSS — 项目概览

---

## 这个项目做了什么

AI News RSS 是一个 AI 新闻聚合服务：每天自动从 arXiv、GitHub、HackerNews、Reddit 等信息源抓取 AI 领域内容，用大模型自动评分筛选，生成结构化日报 + RSS 订阅。

**开源版：** 纯后端服务，SQLite 存储，Docker 一键部署，任何人都能私有化跑起来。

**SaaS 版：** 完整的商业化产品 — 用户注册登录、套餐体系（免费/基础/专业）、支付宝付款、邮件推送、语音播报、防薅羊毛、管理后台。

---

## 为什么做

AI 领域信息获取有几个痛点：

- **信息零散** — 大多数人靠刷小红书看别人转的二手内容，质量参差不齐
- **没有筛选** — 每天几百条新闻，哪些值得看？人工筛选不现实
- **源头散落** — arXiv 论文、GitHub 项目、HN 讨论、Reddit 帖子分布在不同平台

我自己就是这个状态：想跟踪 AI 动态，但每天花在"找信息"上的时间太多。

后来看到一个开源项目在做类似的事，参考了它的产品设计思路（数据源分类、AI 评分筛选），然后基于自身需求从头实现了全部代码，加上之前 WeChat RSS 项目积累的 SaaS 底座，最终做成了现在这个形态。

---

## 项目演进路径

```
WeChat RSS (SaaS 底座积累)
       ↓ 复用用户/支付/部署架构
某开源项目 (参考产品设计思路)
       ↓ 启发数据源分类和评分机制
AI News RSS 开源版 (从头实现核心功能)
       ↓ 基于 WeChat RSS 底座扩展
AI News RSS SaaS 版 (完整商业化)
```

这个路径本身就是方法论的体现 — **不是从零开始，是站在已有项目的肩膀上**。

---

## 真实运营数据

上线后在小红书和 B 站各宣传过一次，之后没有持续推广：

| 指标 | 数据 |
|------|------|
| 总用户数 | 87 |
| 实际付费用户 | 2（含 1 位包年用户）|
| 累计收入 | 128.8 元 |
| 信息源数量 | 18（RSS + Reddit + GitHub）|
| 累计聚合新闻 | 1346 条 |
| AI Token 消耗 | 13.05M |

**注意这几个数字：**

- **2 个真实付费用户** — 含 1 位包年用户，几乎没推广的情况下有人愿意掏钱
- **128.8 元收入** — 不多，但证明了从 0 到 1 的商业闭环
- **87 个注册用户** — 只宣传过一次就有这个量，说明需求真实存在

---

## 技术栈一览

### 开源版

| 层级 | 选型 |
|------|------|
| Web 框架 | FastAPI |
| 数据库 | SQLite（轻量，单机足够）|
| AI 模型 | 智谱 GLM（国产、便宜、够用）|
| 语音合成 | MiniMax TTS（可选）|
| 部署 | Docker |
| 协议 | AGPL-3.0 |

### SaaS 版新增

| 层级 | 选型 |
|------|------|
| 前端框架 | Nuxt 3 + TailwindCSS |
| 数据库 | PostgreSQL（多用户并发）|
| 缓存/限流 | Redis |
| 支付 | 支付宝当面付 |
| 人机验证 | Cloudflare Turnstile |
| 邮件服务 | SMTP |
| 部署 | 1Panel + Nginx 反代 |

---

## 开源版 vs SaaS 版的差距

这是很多人低估的事情 — "我把开源项目加个登录不就行了？"

实际差距：

| 维度 | 开源版 | SaaS 版 |
|------|--------|---------|
| 用户系统 | 无 | 注册/登录/JWT/邮箱验证 |
| 权限控制 | 无 | 套餐分级、内容比例控制 |
| 支付 | 无 | 支付宝当面付 + 订单生命周期 |
| 安全 | 基本无 | 防薅(临时邮箱黑名单/IP限流/Turnstile) |
| 数据库 | SQLite | PostgreSQL + Redis |
| 前端 | 静态 HTML | Nuxt 3 全套 SPA |
| 运维 | 手动 | 数据库清理/健康检查/Webhook 通知 |
| 复杂度 | 约 1500 行 Python | 约 5000+ 行 Python + 3000+ 行 Vue |

**核心功能（AI 新闻聚合）只占 SaaS 版代码的约 30%，剩下 70% 都是"非功能需求"。**

---

## 本案例会讲什么

分两部分：

### Part 1: 开源版 MVP

从发现需求到上线一个能用的产品，对应方法论的 1-8 步：

1. [发现问题和需求验证](/guide/03-case-study/ainews-rss/01-why)
2. [定义 MVP 和功能拆分](/guide/03-case-study/ainews-rss/02-requirements)
3. [技术选型决策](/guide/03-case-study/ainews-rss/03-tech-decisions)
4. [架构设计](/guide/03-case-study/ainews-rss/04-architecture)
5. [核心功能实现](/guide/03-case-study/ainews-rss/05-implementation)
6. [测试和调试](/guide/03-case-study/ainews-rss/06-testing)
7. [部署上线 + 开源](/guide/03-case-study/ainews-rss/07-deployment)

### Part 2: SaaS 版扩展

从开源到商业化，要多做什么、多踩哪些坑：

8. [SaaS 版要多做什么](/guide/03-case-study/ainews-rss/08-saas-overview)
9. [用户体系](/guide/03-case-study/ainews-rss/09-user-system)
10. [支付逻辑](/guide/03-case-study/ainews-rss/10-payment)
11. [防薅羊毛](/guide/03-case-study/ainews-rss/11-anti-abuse)
12. [SaaS 部署上线](/guide/03-case-study/ainews-rss/12-deployment-saas)
13. [经验总结](/guide/03-case-study/ainews-rss/13-lessons-learned)

---

## 怎么读这个案例

**如果你还没做过项目：** 从头读，跟着思路走一遍，重点看"为什么这么做"而不是具体代码。

**如果你已经做过 MVP：** 直接跳到 Part 2，看 SaaS 版多了什么。支付和防薅两章最有参考价值。

**如果你只想快速翻翻：** 看本章概览 + 第 13 章经验总结就够了。

---

[← 返回案例介绍](/guide/03-case-study/) | [第 1 章：发现问题和需求验证 →](/guide/03-case-study/ainews-rss/01-why)
