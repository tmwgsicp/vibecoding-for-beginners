---
name: performance-optimization
description: Optimize application performance including frontend, backend, database, and deployment. Use when discussing performance issues, slow response, high resource usage, or when user mentions "性能优化"、"慢"、"卡顿"、"优化". Provides progressive optimization for full-stack applications.
---

# 性能优化 Skill (全栈)

> **定位:** 个人开发者的全栈性能优化指南  
> **范围:** 前端 + 后端 + 数据库 + 部署

---

## 核心原则

### 1. 先测量,再优化
- 不要凭感觉
- 用工具找瓶颈
- 针对性优化

### 2. 80/20 原则
- 20% 的优化带来 80% 的提升
- 先做高优先级的
- 避免过度优化

### 3. 够用就行
- 用户体验 > 性能指标
- 个人项目不需要极致性能
- 时间投入 vs 收益

---

## 工作流程

### Step 1: 定位性能瓶颈

**用户反馈什么?**
- "加载慢" → 可能是前端
- "接口响应慢" → 可能是后端或数据库
- "服务器卡" → 可能是资源不足

**使用工具测量:**

```markdown
## 前端性能
- Chrome DevTools → Lighthouse
- Network 标签 → 查看资源加载时间
- Performance 标签 → 查看渲染时间

## 后端性能
- 接口响应时间(Postman/curl)
- 服务器 CPU/内存(top/htop)
- 日志分析(慢查询)

## 数据库性能
- 查询耗时(EXPLAIN ANALYZE)
- 索引使用情况
- 连接池状态
```

### Step 2: 分层优化

根据瓶颈所在层级优化:

---

## 🎨 前端性能优化

### 快速见效(1 小时)

```javascript
// 1. 路由懒加载
const routes = [
  { path: '/about', component: () => import('./views/About.vue') }
]

// 2. 组件按需引入
import { ElButton } from 'element-plus'

// 3. 图片懒加载
<img loading="lazy" src="image.jpg" />
```

```nginx
# 4. Nginx Gzip
gzip on;
gzip_types text/css application/javascript application/json;
```

**预期提升:** 首屏加载减少 30-50%

### 体验优化(半天)

```javascript
// 5. 防抖节流
const handleSearch = debounce((query) => {
  searchAPI(query)
}, 300)

// 6. 缓存 API 响应
const cache = new Map()
if (cache.has(key)) return cache.get(key)

// 7. 骨架屏(Loading 体验)
<el-skeleton :loading="loading" :rows="5">
  <template #default>
    [实际内容]
  </template>
</el-skeleton>
```

---

## ⚡ 后端性能优化

### 快速见效(1-2 小时)

**1. 数据库查询优化**
```python
# ❌ N+1 查询问题
for user in users:
    user.posts = db.query(Post).filter(Post.user_id == user.id).all()

# ✅ 关联查询
users = db.query(User).options(joinedload(User.posts)).all()
```

**2. 添加缓存**
```python
# Redis 缓存热点数据
@app.get("/hot-data")
async def get_hot_data():
    cache_key = "hot_data"
    cached = redis.get(cache_key)
    if cached:
        return json.loads(cached)
    
    data = expensive_query()
    redis.setex(cache_key, 300, json.dumps(data))  # 5 分钟
    return data
```

**3. 异步处理**
```python
# ❌ 同步阻塞
def process_data():
    result1 = slow_api_1()  # 等 2 秒
    result2 = slow_api_2()  # 等 2 秒
    return result1, result2  # 总耗时 4 秒

# ✅ 异步并发
async def process_data():
    result1, result2 = await asyncio.gather(
        slow_api_1(),
        slow_api_2()
    )
    return result1, result2  # 总耗时 2 秒
```

**预期提升:** 接口响应时间减少 40-60%

---

## 💾 数据库性能优化

### 必做优化(30 分钟)

**1. 添加索引**
```sql
-- 慢查询
SELECT * FROM posts WHERE user_id = 123 AND created_at > '2026-01-01';

-- 添加索引
CREATE INDEX idx_user_created ON posts(user_id, created_at);

-- 效果: 查询从 2s → 50ms
```

**2. 优化查询**
```sql
-- ❌ 查询所有字段
SELECT * FROM posts;

-- ✅ 只查需要的
SELECT id, title, summary FROM posts;

-- 效果: 数据传输减少 70%
```

**3. 连接池配置**
```python
# SQLAlchemy
engine = create_engine(
    DATABASE_URL,
    pool_size=5,          # 连接池大小
    max_overflow=10,      # 最大溢出连接
    pool_pre_ping=True    # 检查连接有效性
)
```

---

## 🚀 部署和服务器优化

### 快速优化(30 分钟)

**1. 静态资源优化**
```nginx
# Nginx 配置
location /static/ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}

location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 7d;
}
```

**2. HTTP/2 启用**
```nginx
listen 443 ssl http2;
```

**3. 进程管理**
```ini
# Gunicorn (Python)
workers = (CPU 核心数 * 2) + 1
worker_class = uvicorn.workers.UvicornWorker
keepalive = 5
```

---

## 🎯 优化优先级矩阵(全栈)

| 优化项 | 层级 | 投入时间 | 效果 | 优先级 |
|--------|------|---------|------|--------|
| Nginx Gzip | 部署 | 5 分钟 | ⭐⭐⭐⭐⭐ | 🔥 |
| 数据库索引 | 数据库 | 30 分钟 | ⭐⭐⭐⭐⭐ | 🔥 |
| 路由懒加载 | 前端 | 10 分钟 | ⭐⭐⭐⭐ | 🔥 |
| Redis 缓存 | 后端 | 1 小时 | ⭐⭐⭐⭐ | ✅ |
| 异步处理 | 后端 | 2 小时 | ⭐⭐⭐ | ✅ |
| CDN 加速 | 部署 | 配置复杂 | ⭐⭐⭐ | ⏳ |
| 读写分离 | 数据库 | 半天 | ⭐⭐ | ⏳ |

**原则:** 先做跨层级的快速优化(Gzip、索引),再做单层深度优化

---

## 📊 真实案例: AI News RSS 全栈优化

### 初始性能
- 首页加载: 4.2s
- API 响应: 1.5s
- 数据库查询: 800ms

### 优化过程

**第一轮: 快速优化(2 小时)**

1. **Nginx Gzip**
   - 传输体积: 850KB → 180KB (↓ 79%)
   
2. **数据库索引**
   - 查询时间: 800ms → 80ms (↓ 90%)

3. **前端懒加载**
   - 首页加载: 4.2s → 2.1s (↓ 50%)

**第二轮: 深度优化(1 天)**

4. **Redis 缓存热点数据**
   - API 响应: 1.5s → 200ms (↓ 87%)

5. **异步处理 AI 调用**
   - 处理时间: 10s → 3s (↓ 70%)

### 最终结果
- 首页加载: 1.8s (↓ 57%)
- API 响应: 180ms (↓ 88%)
- 用户体验: 显著提升

**投入:** 1 天  
**效果:** 明显

---

## 常见场景处理

### 场景 1: 不知道哪里慢

```
用户: "网站感觉有点慢"

Skill 引导:
1. 具体哪里慢?
   - 打开页面慢? → 前端问题
   - 点击按钮后慢? → 后端/数据库问题
   - 整体卡顿? → 服务器资源问题

2. 测量具体指标
   - 前端: Lighthouse
   - 后端: 接口耗时
   - 数据库: 慢查询日志

3. 针对性优化
```

### 场景 2: 追求极致性能

```
用户: "已经优化了很多,还能再优化吗?"

Skill 回应:
先看当前指标:
- 首页 < 2s? 够用了
- API < 500ms? 够用了
- Lighthouse > 90? 很好了

继续优化的收益:
- 时间投入大
- 效果递减
- 可能引入新问题

建议: 把时间用在做功能上,或改善用户体验
```

---

## 性能目标参考

### 个人项目的合格线

```markdown
## 前端
- 首页加载: < 3s (好: < 2s)
- Lighthouse: > 80 (好: > 90)
- 打包体积: < 1MB (好: < 500KB)

## 后端
- API 响应: < 1s (好: < 500ms)
- 并发支持: 50+ (好: 100+)

## 数据库
- 查询时间: < 500ms (好: < 100ms)
- 索引覆盖: 核心查询都有索引

## 服务器
- CPU: < 70% (日常)
- 内存: < 80%
- 磁盘 I/O: 正常
```

**记住:** 这是个人项目,不是企业级,够用就行!

---

## 待完善

**需要补充:**
- [ ] 更多真实优化案例
- [ ] 不同规模的优化策略
- [ ] 性能监控方案
- [ ] 常见性能陷阱

---

## 参考资源

- [迭代优化方法论](../../guide/01-methodology/14-iterating.md)
- [前端优化最佳实践](https://web.dev/fast/)
- [Python 性能优化](https://docs.python.org/3/howto/perf.html)
