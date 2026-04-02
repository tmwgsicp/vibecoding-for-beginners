---
name: problem-diagnosis
description: Systematically diagnose development issues including errors, bugs, and deployment problems. Use when troubleshooting, debugging, or when user mentions "报错"、"不工作"、"bug"、"出问题了". Based on real troubleshooting experience.
---

# 问题诊断与解决 Skill

> **状态:** 规划中 | 对应课程第 12 章  
> **作者:** 基于真实踩坑和解决经验

---

## 核心原则

### 1. 系统性诊断,不要猜
- 收集完整信息(日志、环境、复现步骤)
- 分层定位(前端 → 后端 → 数据库 → 配置)
- 缩小范围,逐步排除

### 2. 先快速验证,再深入
- 先检查最常见的原因(80% 的问题是常见问题)
- 快速测试假设
- 确认后再深入修复

### 3. 教会用户,不是替他解决
- 引导用户提供关键信息
- 解释问题原因
- 给出解决思路和方法

---

## 工作流程

### Step 1: 问题信息收集

引导用户提供:

```markdown
## 基本信息
- 什么操作导致的问题?
- 期望行为 vs 实际行为?
- 是偶尔出现还是必现?

## 错误信息
- 完整的错误日志(不要截断)
- 浏览器控制台(F12)的错误
- 服务器日志

## 环境信息
- 操作系统
- Python/Node 版本
- 浏览器版本(如果是前端问题)
- 最近改了什么?(代码、配置、依赖)
```

### Step 2: 分层定位

根据现象判断问题层级:

```
页面空白 → 前端问题
├─ 控制台报错 → 前端代码错误
├─ Network 错误 → API 调用问题
└─ 白屏无报错 → 路由或打包问题

API 报错 → 后端问题
├─ 4xx 错误 → 请求参数问题
├─ 5xx 错误 → 服务器代码错误
└─ 超时 → 性能或网络问题

部署失败 → 环境问题
├─ 端口占用
├─ 依赖缺失
└─ 权限不足
```

### Step 3: 快速验证

提供快速测试方法:

```bash
# 前端问题
1. 检查浏览器控制台
2. 测试 API 是否可访问: curl http://localhost:8000/api/test
3. 检查前端环境变量

# 后端问题
1. 检查服务是否启动: docker ps
2. 查看日志: docker logs container_name
3. 测试数据库连接

# 部署问题
1. 检查端口: netstat -tlnp | grep 8000
2. 检查防火墙: ufw status
3. 检查 Nginx 配置: nginx -t
```

### Step 4: 给出解决方案

提供具体的修复步骤,不是模糊建议。

---

## 常见问题速查

### 前端常见问题

#### 1. CORS 错误
```
Access to XMLHttpRequest at 'http://api.example.com' 
has been blocked by CORS policy
```

**原因:** 后端没配置跨域

**解决:**
```python
# FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### 2. 打包后访问 404
**原因:** 路由模式问题

**解决:**
```javascript
// Vue Router
const router = createRouter({
  history: createWebHistory(), // 需要 Nginx 配置
  // 或
  history: createWebHashHistory(), // 不需要服务器配置
})
```

#### 3. 环境变量获取不到
**原因:** Vite 需要 `VITE_` 前缀

**解决:**
```bash
# .env
VITE_API_BASE_URL=http://localhost:8000
```

### 后端常见问题

#### 1. 数据库连接失败
```
could not connect to server: Connection refused
```

**检查清单:**
- [ ] 数据库服务是否启动? `docker ps`
- [ ] 连接字符串正确吗?
- [ ] 端口是否开放? `telnet localhost 5432`
- [ ] 防火墙拦截?

#### 2. 依赖安装失败
**常见原因:**
- 网络问题 → 换源或用代理
- 版本冲突 → 检查 requirements.txt
- 系统依赖缺失 → 安装系统包

#### 3. 内存占用过高
**排查:**
```python
# 检查内存泄漏
import tracemalloc
tracemalloc.start()
# ... 运行代码
snapshot = tracemalloc.take_snapshot()
```

### 部署常见问题

#### 1. Docker 容器启动失败
```bash
# 查看详细日志
docker logs container_name

# 常见原因
- 端口被占用
- 环境变量缺失
- 依赖安装失败
```

#### 2. HTTPS 证书问题
**常见原因:**
- DNS 解析未生效(需等待)
- 80 端口未开放
- Nginx 配置错误

#### 3. 性能问题
**排查顺序:**
1. 数据库查询(加索引)
2. 缓存未启用(加 Redis)
3. 静态资源未压缩(Nginx gzip)
4. 代码逻辑问题(优化算法)

---

## 诊断流程图

```
遇到问题
    ↓
收集完整信息
    ↓
分层定位(前端/后端/部署)
    ↓
查找常见原因(80% 是常见问题)
    ↓
快速验证假设
    ↓
    是常见问题? 
        ├─ 是 → 直接套用解决方案
        └─ 否 → 深入调试
                ↓
            使用调试工具
                ↓
            定位根本原因
                ↓
            修复并验证
                ↓
            记录经验(避免再犯)
```

---

## 与 AI 协作调试

### 好的调试对话

```
你: "API 调用报 500 错误"
AI: "请提供完整的错误日志"

你: [贴上完整日志]
AI: "看到是数据库连接失败,检查..."

你: "数据库服务已启动"
AI: "检查连接字符串和端口..."

👆 关键: 提供完整信息,逐步排查
```

### 不好的调试对话

```
你: "不工作了"
AI: "什么不工作?请描述具体现象"

你: "就是打不开"
AI: "是前端打不开还是后端?"

你: "都打不开"
❌ 问题: 信息太少,无法定位
```

---

## 待完善

**需要补充:**
- [ ] 更多真实问题案例
- [ ] 不同错误类型的快速诊断表
- [ ] 日志分析技巧
- [ ] 性能优化检查清单
- [ ] 常用调试工具使用方法

**欢迎贡献:**
分享你遇到的问题和解决方案!

---

## 参考资源

- [问题解决方法论](../../guide/01-methodology/12-problem-solving.md)
- [部署常见问题](../../guide/01-methodology/11-deployment-guide.md#常见问题)
- [AI 协作调试技巧](../../guide/01-methodology/07-ai-collaboration.md#调试技巧)
