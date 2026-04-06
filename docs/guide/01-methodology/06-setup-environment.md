# 环境搭建

---

## 这一节要解决什么?

**核心问题:** 小白被"环境搭建"吓到,不敢开始

**这一节告诉你:**
1. 环境搭建就是装 3 个软件,不难
2. 出错了让 AI 帮你,1 分钟解决
3. 装好了就能开始做项目

---

## 装什么?

**3 个工具:**
- **Python 3.11+** - https://www.python.org/
- **Node.js 18+** - https://nodejs.org/
- **Cursor** - https://cursor.com/home/

---

## 详细安装步骤

### Python 安装

**Windows:**
1. 下载 Python 3.11 安装包
2. 双击运行
3. **重要:** 勾选"Add Python to PATH"
4. 点击"Install Now"
5. 完成

**验证:**
```bash
python --version
```
显示版本号就成功了

---

**Mac:**
```bash
# 推荐用 Homebrew 安装
brew install python@3.11
```

**Linux:**
```bash
sudo apt update
sudo apt install python3.11
```

---

### Node.js 安装

**所有系统:**
1. 下载 LTS 版本(长期支持版)
2. 一路默认安装
3. 完成

**验证:**
```bash
node --version
npm --version
```
都显示版本号就成功

---

### Cursor 安装

1. 下载安装包
2. 安装
3. 第一次打开会要求登录(可以用 GitHub 账号)
4. 完成

**如果没有 Cursor:**
- 可以用 VSCode + AI 插件(通义灵码/GitHub Copilot)
- 但推荐 Cursor,效率更高

---

## 虚拟环境(重要!)

### 什么是虚拟环境?

**问题:** 不同项目可能需要不同版本的包

**示例:**
- 项目 A 需要 requests 2.28
- 项目 B 需要 requests 2.31
- 怎么办?

**解决:** 每个项目用独立的虚拟环境

---

### 怎么用?

**创建虚拟环境:**
```bash
# 在项目文件夹下
python -m venv venv
```

**激活虚拟环境:**
```bash
# Windows
venv\Scripts\activate

# Mac/Linux  
source venv/bin/activate
```

**激活后:**
- 命令行前面会显示 `(venv)`
- 这时候装的包只在这个项目里有效

**退出虚拟环境:**
```bash
deactivate
```

---

### 实战建议

**每个新项目:**
1. 创建项目文件夹
2. 创建虚拟环境
3. 激活虚拟环境
4. 安装依赖

**标准流程:**
```bash
mkdir my-project
cd my-project
python -m venv venv
venv\Scripts\activate  # Windows
pip install fastapi uvicorn
```

**不懂? 让 AI 帮你:**
```
我要开始一个新的 Python 项目,
怎么创建和使用虚拟环境?
一步步告诉我。
```

---

## 常见问题和解决

### 问题 1: Python 找不到命令

**症状:**
```bash
python
'python' 不是内部或外部命令
```

**原因:** 没配置环境变量

**解决方法 1(推荐):**
- 重新安装 Python
- 勾选"Add Python to PATH"

**解决方法 2:**
- 问 AI: "Python 找不到命令,Windows 系统,怎么配置环境变量?"
- AI 会给详细步骤

---

### 问题 2: pip 安装包失败

**症状:**
```bash
pip install requests
ERROR: Could not find a version...
```

**常见原因:**
1. 网络问题(连不上 PyPI)
2. 包名错了
3. Python 版本太低

**解决:**
```
我在安装 requests 时报错:
[复制完整错误]

我的 Python 版本是 [版本号]
帮我解决。
```

**国内加速(可选):**
```bash
# 使用清华镜像源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple requests
```

---

### 问题 3: 依赖版本冲突

**症状:**
```
ERROR: package-a 2.0 requires numpy==1.20
ERROR: package-b 3.0 requires numpy==1.25
```

**解决:**
1. 用虚拟环境(最佳方案)
2. 让 AI 找兼容版本
3. 或者升级/降级某个包

**问 AI:**
```
我的依赖包冲突了:
[复制完整错误]

requirements.txt 内容:
[复制文件内容]

帮我解决。
```

---

### 问题 4: Node.js 包安装慢

**症状:** `npm install` 很慢,或者失败

**解决:** 换国内源
```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com
```

**或者用 pnpm(更快):**
```bash
npm install -g pnpm
pnpm install  # 代替 npm install
```

---

### 问题 5: 权限问题

**症状(Mac/Linux):**
```bash
pip install xxx
Permission denied
```

**解决:**
```bash
# 不要用 sudo
# 应该用虚拟环境
python -m venv venv
source venv/bin/activate
pip install xxx
```

---

## 我的第一次成功

**项目:** 微信语音转文字(付费)

**背景:**
- 客户需求: 把微信语音转成文字
- 我不会语音识别
- 但知道 AI 能帮我

**开发过程:**

**我问 AI(通义灵码):**
```
用 Python 实现微信语音转文字功能。

输入: 微信语音文件
输出: 文字内容

给出完整代码和说明。
```

**AI 给了:**
- 完整的 Python 代码
- 调用语音识别 API 的方法
- 如何处理微信的语音格式

**我:**
1. 复制代码,保存为 `voice_to_text.py`
2. 运行 `python voice_to_text.py`
3. 报错了
4. 把错误发给 AI: "报错了: [完整错误信息]"
5. AI 帮我改
6. 再运行,成功了!

**结果:**
- 功能跑通
- 交付给客户
- 收到钱

---

### 这个经历告诉我什么?

**3 个关键认知:**

1. **不懂也能做**
   - 我不懂语音识别
   - 但 AI 懂
   - 我负责提需求,AI 负责实现

2. **免费 AI 也够用**
   - 当时用的通义灵码(免费)
   - 不是 Claude Sonnet 4.6(最强)
   - 工具不是瓶颈

3. **能挣钱才是硬道理**
   - 做出来的东西有价值
   - 客户愿意付钱
   - 技术不重要,解决问题才重要

---

## 给新手的行动指南

### 今天就做(时间预算)

**上午(1-2 小时):**
1. 装 Python(30 分钟)
2. 装 Node.js(20 分钟)
3. 装 Cursor(10 分钟)
4. 验证安装成功(10 分钟)

**下午(30 分钟):**
1. 创建第一个 Python 文件
2. 写 `print("Hello World")`
3. 运行,看到输出

**晚上(1 小时):**
1. 做第一个有用的东西:

**Python 网页抓取示例:**
```python
import requests

url = "https://example.com"
response = requests.get(url)
print(response.text)
```

2. 或者跟着教程做第一个项目

**一天搞定,不要拖。**

---

### 遇到问题的标准流程

**步骤:**
1. **复制完整错误信息** (不要只复制一部分)
2. **问 AI:**
   ```
   我在[做什么]时遇到错误:
   [完整错误信息]
   
   我的系统: [Windows/Mac/Linux]
   我的 Python 版本: [版本号]
   
   帮我解决。
   ```
3. **按 AI 的方案操作**
4. **还不行? 再问 AI,提供更多信息**

**大部分问题 1-2 轮就能解决。**

---

## 核心原则

> **环境是起点,不是终点**

1. **快速搞定** - 1-2 小时,不要拖
2. **遇到问题问 AI** - 不要自己死磕
3. **装好就开始做** - 不要纠结配置
4. **能跑就行** - 不追求完美

**记住: 很多人卡在环境搭建就放弃了。不要做这种人,快速搞定,开始做项目。**
