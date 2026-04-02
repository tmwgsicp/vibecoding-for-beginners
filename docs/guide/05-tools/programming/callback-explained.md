# 回调(Callback)详解

---

## 什么是回调?

**简单理解:** 你给对方一个"通知地址",对方处理完后主动通知你。

**类比:**
- 你在餐厅点外卖,留下手机号
- 餐厅做好后,**打电话通知你**来取
- 你的手机号就是"回调地址"

在编程中:
- 你的服务器地址就是"手机号"
- 第三方平台处理完后,**主动请求你的地址**
- 你的服务器接收通知,处理结果

---

## 为什么需要回调?

### 场景 1: 第三方登录(OAuth)

**用户登录流程:**
1. 用户点击"微信登录"
2. 跳转到微信授权页面
3. 用户确认授权
4. **微信回调你的服务器**,带上用户信息
5. 你的服务器处理登录逻辑

**为什么不能直接返回?**
- 用户在微信的页面授权
- 微信不知道怎么"返回"你的前端
- 只能通过后端接口回调

---

### 场景 2: 支付回调

**支付流程:**
1. 用户发起支付
2. 跳转到支付宝/微信支付页面
3. 用户完成支付
4. **支付平台回调你的服务器**,告知支付结果
5. 你的服务器更新订单状态

**为什么需要回调?**
- 支付可能需要几分钟
- 用户可能中途关闭页面
- 前端无法可靠地知道支付是否成功
- **必须由支付平台主动通知后端**

---

## 回调 URL 的设计

### 基本格式

```
https://你的域名/api/callback/平台名称
```

**示例:**
- 微信登录: `https://yourdomain.com/api/callback/wechat`
- 支付宝支付: `https://yourdomain.com/api/callback/alipay`
- GitHub OAuth: `https://yourdomain.com/api/callback/github`

### 关键要求

1. **必须是 HTTPS** (安全)
2. **必须可以从外网访问** (不能是 localhost)
3. **路径要在第三方平台配置** (提前注册)

---

## 代码示例

### 微信登录回调

```python
from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/api/callback/wechat")
async def wechat_callback(request: Request):
    """
    微信登录回调接口
    微信授权后会请求这个地址,带上 code 参数
    """
    # 1. 获取微信返回的 code
    code = request.query_params.get("code")
    
    # 2. 用 code 换取用户信息
    user_info = await get_wechat_user_info(code)
    
    # 3. 创建或更新用户
    user = await create_or_update_user(user_info)
    
    # 4. 生成登录 token
    token = generate_jwt_token(user.id)
    
    # 5. 重定向到前端,带上 token
    return RedirectResponse(
        url=f"https://yourfrontend.com/login?token={token}"
    )
```

---

### 支付宝支付回调

```python
@app.post("/api/callback/alipay")
async def alipay_callback(request: Request):
    """
    支付宝支付回调接口
    支付完成后,支付宝会 POST 请求这个地址
    """
    # 1. 获取支付宝回调的数据
    body = await request.body()
    params = parse_alipay_callback(body)
    
    # 2. 验证签名(防止伪造)
    if not verify_alipay_signature(params):
        return {"code": "FAIL", "msg": "签名验证失败"}
    
    # 3. 获取订单号和支付状态
    order_id = params.get("out_trade_no")
    trade_status = params.get("trade_status")
    
    # 4. 更新订单状态
    if trade_status == "TRADE_SUCCESS":
        await update_order_status(order_id, "paid")
    
    # 5. 返回成功(告诉支付宝收到了)
    return {"code": "SUCCESS"}
```

---

## 常见问题

### Q: 回调地址怎么配置?

**步骤:**
1. 在第三方平台(微信开放平台、支付宝开放平台)注册应用
2. 填写回调地址(callback URL)
3. 平台会验证地址是否可访问
4. 验证通过后才能使用

**注意:**
- 开发时可以用测试回调地址
- 上线前必须改成正式域名

---

### Q: 本地开发怎么测试回调?

**问题:** 
- 回调地址必须是外网可访问的
- 但本地 `localhost` 外网访问不到

**解决方案:**

**方案 1: 使用内网穿透工具**
```bash
# 使用 ngrok (免费)
ngrok http 8000

# 会生成临时外网地址:
# https://abc123.ngrok.io
```

临时地址可以接收回调,适合开发测试。

**方案 2: 使用测试服务器**
- 租一个便宜的服务器
- 部署测试版代码
- 直接用服务器地址做回调

---

### Q: 回调失败怎么办?

**常见原因:**

1. **回调地址写错了**
   - 检查第三方平台配置
   - 检查代码中的地址

2. **服务器没启动**
   - 确认服务在运行
   - 检查端口是否开放

3. **签名验证失败**
   - 检查密钥是否正确
   - 检查签名算法

4. **回调超时**
   - 回调接口处理太慢
   - 需要优化性能
   - 先返回成功,再异步处理

**调试技巧:**
- 打印回调接收到的所有参数
- 记录日志
- 用第三方平台的调试工具

---

## 回调 vs 轮询

### 轮询(Polling)

```python
# 前端不断请求后端,询问支付是否完成
while True:
    status = await check_payment_status(order_id)
    if status == "paid":
        break
    await sleep(2)  # 等 2 秒再问
```

**缺点:**
- 浪费资源(不断请求)
- 延迟高(2 秒轮询一次)
- 不可靠(用户关闭页面就查不到了)

---

### 回调(Callback)

```python
# 支付平台支付完成后,主动通知你的后端
@app.post("/api/callback/alipay")
async def alipay_callback(request: Request):
    # 收到通知,立即更新订单
    await update_order_status(order_id, "paid")
```

**优点:**
- 实时通知
- 不浪费资源
- 可靠(即使用户关闭页面也能收到)

**结论: 第三方服务通常用回调,不用轮询。**

---

## 安全注意事项

### 1. 验证签名

**为什么需要?**
- 任何人都可以请求你的回调地址
- 必须验证是第三方平台发来的,不是攻击者伪造的

**怎么做?**
```python
# 第三方平台会提供签名验证函数
if not verify_signature(params, platform_public_key):
    return {"error": "签名验证失败"}
```

---

### 2. 幂等性处理

**问题:** 第三方可能重复发送回调

**解决:**
```python
# 检查订单是否已处理
order = await get_order(order_id)
if order.status == "paid":
    return {"code": "SUCCESS"}  # 已处理,直接返回成功
    
# 未处理,继续处理逻辑
await update_order_status(order_id, "paid")
```

---

### 3. 异步处理

**问题:** 回调处理可能很慢(发邮件、更新多个系统)

**解决:**
```python
@app.post("/api/callback/alipay")
async def alipay_callback(request: Request):
    # 1. 验证签名
    if not verify_signature(params):
        return {"code": "FAIL"}
    
    # 2. 立即返回成功(告诉支付宝收到了)
    background_tasks.add_task(process_payment, order_id)
    return {"code": "SUCCESS"}

async def process_payment(order_id: str):
    """异步处理支付后续逻辑"""
    await update_order_status(order_id, "paid")
    await send_email_notification(order_id)
    await update_user_vip_status(order_id)
```

---

## 实战建议

### 开发阶段

1. **先用内网穿透测试** (ngrok)
2. **打印所有回调参数** (方便调试)
3. **记录详细日志**

### 上线阶段

1. **配置正式回调地址**
2. **监控回调成功率**
3. **设置告警**(回调失败时通知)

### 遇到问题

1. **查看第三方平台的回调日志** (通常有管理后台)
2. **检查你的服务器日志**
3. **让 AI 分析回调参数**

---

## 相关章节

- [案例拆解](../../03-case-study/) - 真实项目案例（持续更新）
- [方法论](../../01-methodology/) - 完整开发流程

---

**记住:** 回调的本质是"你告诉别人一个地址,别人处理完主动通知你"。理解这个核心概念,具体实现让 AI 帮你写。
