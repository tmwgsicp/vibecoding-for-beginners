# 关于作者

---

## 👋 我是谁

"野生"独立开发者 / Vibe Coding 实践者 / 开源爱好者。**所在地：** 江西 · 南昌。

从传统财务出发，经历财务数字化转型，到 AI 自动化开发，一路跨界。靠 AI 重度协作 + 自创的 14 步 Vibe Coding 方法论，独立构建了多个 SaaS 产品并稳定运营。目前为外企提供全栈 AI 自动化开发服务，同时持续经营个人 SaaS 产品矩阵。

这本教程里的方法论 —— **14 步流程、7 大陷阱** —— 全部是我自己做项目时**踩过坑后总结**出来的，不是先有理论再凑案例。GitHub 累计获得 600+ Stars。

---

## 🎯 这套方法论是怎么来的（重要）

时间顺序是这样的：

1. **2024 ~ 2025 上半年**：先做项目。AI 工具刚成熟时我就开始重度协作，先用 n8n 这类工具帮企业做自动化，后来直接 vibecoding 出一套完整平台
2. **被一家企业看到**，他们让我做全职 AI 自动化专家 — **我的职业转型就这么发生了**（财务出身 → 转技术岗）。这个转型不是因为我去考了证、读了 CS，是因为 AI 把我的执行力放大到能交付真实工作成果的程度
3. **2026 年初**：跟很多想用 AI 做产品的小白聊过，发现他们卡的不是"AI 怎么用"，**而是"做什么、怎么验证、怎么不死在半路"**
4. **2026 年 3-4 月**：把我自己做项目时反复用到的判断框架沉淀成 14 步 + 7 大陷阱
5. **2026 年 5 月**：开源教程 + 配套 vibe-tutor 工具，希望让更多人少走弯路

**所以这本教程不是"先看再做"的教科书，是"先做出过、然后告诉你哪些坑别再踩"的实战回放。**

如果你看了之后觉得某些章节"废话太多" — 那部分可能是为零基础的人写的，你可以跳。
如果你看了之后觉得某些章节"还想要更深" — 那部分可能我还没遇到过你的具体场景，欢迎给我提 issue。

---

## 🧪 一条不让步的纪律：测试

教程里关于测试的内容比一般编程书都重，**这是有意的**，原因是：

> 科班开发者通过**逐行读代码**判断 AI 写的对不对。
> 非科班开发者**做不到这一点**。所以测试就是你唯一的现实检验。

我自己的实际工作流：

1. **让 AI 先做 mock + 测试数据** — 这样我能独立跑一遍，不依赖 AI 自己的"我觉得没问题"
2. **手动测试真实路径** — 哪怕只测 3 个用例，也胜过 0 个
3. **发现偏差立刻纠偏** — 不积累，不"等做完再统一处理"
4. **每完成一个 must_have 测一次** — 错误叠加后定位太困难

我**不用**那种"让 AI 跑一晚上 + 第二天验收"的模式。看起来高效，但 AI 偏 1° 你 8 小时后才发现已经偏 30°。

并行多个项目是另一个我用的技巧：单项目等 AI 跑的间隙切去看另一个项目，把"等待时间"全部利用上 — 一个人可以同时推进 3-5 个项目的关键节点。

---

---

## 💡 关于"非技术背景"这个标签

很多人问我："你真的没编程背景就能做这些？"

实话讲：

- 我**没读过 CS 专业**，没系统学过算法和数据结构
- 但**多年看代码 + 改 prompt + 调试日志**积累了一些"工程直觉" —— 看一段代码大概能猜出有没有 bug，但让我从头写完整业务逻辑还是会卡
- **AI 是巨大的杠杆**，但它放大的是你的判断力，不是凭空创造能力。`0 × 10 = 0`，你得有那个"1 倍底"
- 这套方法论的作用，就是帮想做产品的非科班人士**把那个"1 倍底"快速建起来**

所以与其说"零基础也能做"，不如说："只要你有产品判断 + 愿意学，AI + 这套方法论能让你的执行能力放大 10 倍"。

---

## 🚀 我做过的真实项目（这套方法论的活证据）

下面这些都是用同一套方法论做的，先看它们存在了再说方法论。

### 已商业化产品矩阵

| 产品 | 定位 | 链接 |
|------|------|------|
| **WeChat RSS** | 微信公众号 RSS 订阅服务，700+ 活跃用户，将公众号文章变成标准 RSS 源 | [体验](https://wechatrss.waytomaster.com/) · [GitHub](https://github.com/tmwgsicp/wechat-download-api) |
| **AI NewsRSS** | AI 新闻智能聚合订阅，每天 10 分钟掌握全球 AI 领域最新动态（本教程核心案例）| [体验](https://ainewsrss.waytomaster.com/) |
| **InvestorRSS** | 投资信息 RSS 聚合，覆盖 A 股/美股/港股 10 个平台，支持 AI 摘要和 PDF 提取 | [体验](https://investorrss.waytomaster.com) |
| **Vibe Tutor** | AI 编程实时教练，基于 14 步方法论，支持 Cursor/Claude Code/Codex/Qwen | [官网](https://vibetutor.waytomaster.com) |

### 开源项目

| 项目 | 说明 | Stars |
|------|------|-------|
| **[ForgeRSS](https://github.com/tmwgsicp/ForgeRSS)** | 将任意网站转换为 RSS 订阅源，多引擎抓取、反爬突破，支持 20+ 平台 | ![stars](https://img.shields.io/github/stars/tmwgsicp/ForgeRSS?style=flat-square) |
| **[im-cli-bridge](https://github.com/tmwgsicp/im-cli-bridge)** | Bridge any IM to AI coding CLIs — 6 IM x 6 CLI，用手机远程操控 AI 编程 | ![stars](https://img.shields.io/github/stars/tmwgsicp/im-cli-bridge?style=flat-square) |
| **[wechat-download-api](https://github.com/tmwgsicp/wechat-download-api)** | 微信公众号文章获取 & RSS 订阅 API 服务，支持 IP 代理池反风控 | ![stars](https://img.shields.io/github/stars/tmwgsicp/wechat-download-api?style=flat-square) |
| **[vibecoding-for-beginners](https://github.com/tmwgsicp/vibecoding-for-beginners)** | 本项目 - Vibe Coding 新手实战指南 | ![stars](https://img.shields.io/github/stars/tmwgsicp/vibecoding-for-beginners?style=flat-square) |
| **[voicetype](https://github.com/tmwgsicp/voicetype)** | 场景自适应 AI 语音输入，自动识别应用切换场景，支持语音唤醒 | ![stars](https://img.shields.io/github/stars/tmwgsicp/voicetype?style=flat-square) |
| **[content-distiller](https://github.com/tmwgsicp/content-distiller)** | 内容蒸馏器 — 从任意网页/文档中智能提取核心内容，去噪去重 | ![stars](https://img.shields.io/github/stars/tmwgsicp/content-distiller?style=flat-square) |

_...更多项目开发中_

---

## 💬 联系方式

### 付费咨询(微信)

::: danger 🔴 重要声明
- **仅提供付费咨询服务**
- **添加时必须备注说明来意**,否则不通过
- 教程已全部开源,请先自学
- 不提供免费答疑
:::

<div align="center">

![微信二维码](https://raw.githubusercontent.com/tmwgsicp/vibecoding-for-beginners/master/docs/public/images/contact/wechat.jpg)

*扫码添加微信(付费咨询)*

</div>

**备注示例:** "付费咨询 - 项目技术选型" / "商务合作 - XXX"

---

### 其他方式

- 📧 **邮箱:** creator@waytomaster.com (1-2 工作日回复)
- 🐙 **GitHub:** [@tmwgsicp](https://github.com/tmwgsicp) (Issues/Discussions)

---

## 🎯 服务范围

### 免费(永久)
- ✅ 完整教程文档
- ✅ 真实案例分析
- ✅ 6 个开源 AI Skills
- ✅ 项目源码
- ✅ GitHub Issues 答疑

### 付费(可选)
- 💼 一对一指导
- 💼 项目 Review 和优化
- 💼 AI 工作流自动化咨询

邮件咨询: creator@waytomaster.com

---

## 🌟 支持我

### 免费支持
- ⭐ Star 本项目
- 🔄 分享给朋友
- 📝 提 Issue/PR

### 付费支持

<div align="center">

![打赏二维码](https://raw.githubusercontent.com/tmwgsicp/vibecoding-for-beginners/master/docs/public/images/contact/sponsor.jpg)

*☕ 请我喝咖啡*

</div>

- 💰 付费咨询
- 🎁 商务合作

### 最好的支持
- 🚀 **做出你自己的项目**
- 📢 **分享你的成功故事**
- 🤝 **帮助其他学习者**

---

## 💡 FAQ

**Q: 可以转载吗?**  
A: 可以,但请注明出处,不用于商业。详见 [版权声明](/community/copyright)

**Q: 可以约线下吗?**  
A: 看情况,南昌可以约咖啡,建议先线上沟通

**Q: 接外包吗?**  
A: 看项目,有趣的可以考虑,邮件详聊

---

[教程首页](/guide/) | [常见问题](/community/faq) | [作品展示](/showcase/)
