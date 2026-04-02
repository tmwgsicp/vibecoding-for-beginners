---
name: ui-design-helper
description: Guide frontend UI design and interaction following modern design principles and accessibility standards. Use when discussing UI design, page layout, user experience, or when user mentions "前端设计"、"界面"、"好看"、"交互"、"UI"、"设计". Balances aesthetics with pragmatism for solo developers.
---

# UI 设计助手 Skill

> **定位:** 个人开发者的实用 UI 设计指南  
> **理念:** 简洁、规范、够用就行

---

## 核心原则

### 1. 优先使用成熟 UI 框架
不要从零手写组件:
- ✅ Element Plus (Vue)
- ✅ Ant Design (React)
- ✅ Material UI (React)

**理由:**
- 组件开箱即用
- 设计规范统一
- 节省大量时间

### 2. 遵循设计系统
使用项目的设计规范(如有):
- 读取 `.cursor/rules/UI_DESIGN_GUIDE.mdc`
- 使用 CSS 变量
- 8 点网格系统
- 统一的颜色和间距

### 3. 功能优先,设计其次
**对个人开发者:**
- 先做出来(基础 UI)
- 再优化(渐进式美化)
- 不死磕设计细节

---

## 工作流程

### Step 1: 理解设计需求

**询问关键信息:**
```markdown
1. 页面类型?
   - 数据展示(列表、表格)
   - 表单录入
   - 仪表板
   - 内容阅读

2. 设计要求?
   - 简洁实用(推荐)
   - 现代时尚
   - 专业商务
   - 其他风格

3. 参考案例?
   - 有喜欢的网站吗?
   - 想要什么感觉?
```

### Step 2: 提供设计方案

**基于页面类型推荐布局:**

#### 数据展示页
```vue
<template>
  <div class="page-container">
    <!-- 头部: 标题 + 操作 -->
    <div class="page-header">
      <h1>数据列表</h1>
      <el-button type="primary">新增</el-button>
    </div>

    <!-- 筛选区 -->
    <el-card class="filter-card">
      <el-form inline>
        <el-form-item label="搜索">
          <el-input v-model="keyword" placeholder="输入关键词" />
        </el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form>
    </el-card>

    <!-- 数据表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="date" label="日期" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      :total="total"
    />
  </div>
</template>

<style scoped>
.page-container {
  padding: var(--space-lg);
  max-width: var(--width-wide);
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.filter-card {
  margin-bottom: var(--space-lg);
}
</style>
```

#### 表单录入页
```vue
<template>
  <div class="form-container">
    <el-card class="form-card">
      <template #header>
        <span class="card-title">表单标题</span>
      </template>

      <el-form :model="form" label-width="120px">
        <el-form-item label="字段 1">
          <el-input v-model="form.field1" />
        </el-form-item>

        <el-form-item label="字段 2">
          <el-select v-model="form.field2">
            <el-option label="选项 1" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.form-container {
  padding: var(--space-lg);
  max-width: 800px;
  margin: 0 auto;
}

.form-card {
  border-radius: var(--radius-large);
  box-shadow: var(--shadow-light);
}
</style>
```

### Step 3: 提供设计规范建议

**如果项目没有设计规范:**

```markdown
## 建议的基础设计规范

### 颜色
- 主色: #1890ff (蓝色,通用)
- 成功: #52c41a (绿色)
- 警告: #fa8c16 (橙色)
- 错误: #ff4d4f (红色)

### 间距(8 点网格)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px

### 圆角
- small: 4px
- base: 8px
- large: 12px

**原则:** 
- 使用 CSS 变量,不要硬编码
- 间距必须是 8 的倍数
```

**如果项目有设计规范:**
- 读取并遵循 `.cursor/rules/UI_DESIGN_GUIDE.mdc`

---

## 🎨 设计建议(基于作者理念)

### 作者的设计哲学

**核心:** 功能 > 设计,简洁实用

**具体体现:**
1. **使用成熟 UI 库** - 不要手写组件
2. **遵循设计规范** - 统一的颜色、间距
3. **简洁风格** - 不追求花哨效果
4. **看得顺眼就行** - 不死磕像素级

### 给不擅长设计的开发者

**最简方案(30 分钟搞定 UI):**

```markdown
1. 选择一个 UI 框架
   - Vue → Element Plus
   - React → Ant Design

2. 直接用默认主题
   - 不要自定义太多
   - 默认的就很好看

3. 遵循 3 个基本原则
   - 间距一致(用框架的间距变量)
   - 颜色统一(用框架的颜色系统)
   - 对齐整齐(用框架的布局组件)

4. 效果
   - 不丑
   - 统一
   - 专业
```

**够用了!** 不需要设计师水平。

---

## 实用设计技巧

### 技巧 1: 白色 + 一个主色

```css
背景: 白色
主色: 蓝色(按钮、链接)
文字: 黑色/灰色
边框: 浅灰色

效果: 简洁、干净、专业
```

### 技巧 2: 卡片式布局

```vue
<!-- 用卡片包裹内容 -->
<el-card>内容</el-card>

效果: 
- 有层次感
- 不会显得空
- 看起来有设计感
```

### 技巧 3: 统一间距

```css
/* 使用 8 的倍数 */
padding: 16px;
margin-bottom: 24px;
gap: 8px;

效果: 视觉和谐
```

### 技巧 4: 合理留白

```css
/* 不要挤在一起 */
.content {
  max-width: 1200px;  /* 限制宽度 */
  margin: 0 auto;     /* 居中 */
  padding: 24px;      /* 内边距 */
}

效果: 呼吸感,不拥挤
```

---

## 交互设计建议

### 1. 状态反馈

**用户操作要有反馈:**
```javascript
// 加载状态
<el-button :loading="isLoading">提交</el-button>

// 操作成功
ElMessage.success('保存成功')

// 操作失败
ElMessage.error('保存失败,请重试')
```

### 2. 防误操作

**危险操作要确认:**
```javascript
// 删除前确认
ElMessageBox.confirm('确定删除吗?', '警告', {
  type: 'warning'
}).then(() => {
  deleteItem()
})
```

### 3. 空状态

**没有数据时的提示:**
```vue
<el-empty v-if="list.length === 0" description="暂无数据" />
```

### 4. 错误处理

**网络错误、加载失败的提示:**
```vue
<el-result
  v-if="error"
  icon="error"
  title="加载失败"
  sub-title="请检查网络后重试"
>
  <template #extra>
    <el-button type="primary" @click="retry">重试</el-button>
  </template>
</el-result>
```

---

## 常见场景

### 场景 1: 完全不懂设计

```
用户: "我不懂设计,怎么让页面好看?"

Skill 建议:
**3 步搞定:**
1. 用 Element Plus
2. 参考官方示例(直接抄)
3. 调整文字和间距

不需要设计能力,照着做就好看。
```

### 场景 2: 想要现代感

```
用户: "怎么让页面看起来更现代?"

Skill 建议:
**现代设计的特征:**
1. 大量留白
2. 圆角(8-12px)
3. 柔和的阴影
4. 简洁的配色(白 + 主色)

**实现:**
- 用 Element Plus 默认主题
- 卡片式布局
- 统一圆角和间距

10 分钟见效!
```

### 场景 3: 参考其他网站

```
用户: "我喜欢 XX 网站的风格,能做成那样吗?"

Skill 引导:
1. 分析那个网站的设计特点
   - 配色方案
   - 布局方式
   - 组件风格

2. 找到对应的 UI 框架实现
   - Element Plus 有类似组件吗?
   - 需要自定义主题吗?

3. 给出实现方案
   [具体代码]
```

---

## 设计检查清单

### 基础检查
- [ ] 颜色统一(使用 CSS 变量)
- [ ] 间距统一(8 的倍数)
- [ ] 字体统一(使用系统字体栈)
- [ ] 圆角统一(4/8/12px)

### 交互检查
- [ ] 按钮有 hover 效果
- [ ] 加载有 loading 状态
- [ ] 操作有成功/失败反馈
- [ ] 危险操作有确认

### 体验检查
- [ ] 空状态有提示
- [ ] 错误有友好提示
- [ ] 移动端基本可用(响应式)
- [ ] 关键路径顺畅

---

## 平衡设计和效率

### 作者的理念(推荐给学员)

**"功能实现比死磕前端有意义得多"**

**具体建议:**

```markdown
## 时间分配建议

MVP 阶段(Week 1):
- 设计时间: 10% (用 UI 框架默认)
- 功能时间: 90% (核心功能实现)

优化阶段(Week 2):
- 设计时间: 20% (改善交互体验)
- 功能时间: 80% (完善功能)

如果要上线(Week 3):
- 设计时间: 30% (视觉优化)
- 功能时间: 70%

**关键:** 不要在 MVP 阶段死磕设计!
```

### 不同人的取舍

**如果你像作者一样:**
- 功能 > 设计
- 用 UI 框架默认主题
- 遵循基础规范
- 够用就行

**如果你重视设计:**
- 可以花更多时间在 UI 上
- 自定义主题
- 细节打磨

**但记住:** 先验证需求,再优化设计!

---

## 快速美化技巧

### 技巧 1: 使用 UI 框架主题

**Element Plus 主题:**
```bash
# 安装
npm install element-plus

# 使用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
```

**效果:** 开箱即用,已经很好看

### 技巧 2: 一键换主题色

```css
/* 只需要改一个颜色 */
:root {
  --el-color-primary: #1890ff;  /* 改这里 */
}
```

**效果:** 全局主题色统一变化

### 技巧 3: 卡片式布局

```vue
<!-- 所有内容都用卡片包裹 -->
<el-card>
  <template #header>标题</template>
  内容
</el-card>
```

**效果:** 立即有层次感和设计感

### 技巧 4: 使用图标

```vue
<el-button :icon="Plus">新增</el-button>
<el-button :icon="Delete">删除</el-button>
```

**效果:** 更专业,国际化

### 技巧 5: 合理间距

```css
/* 使用 UI 框架的间距变量 */
.section {
  margin-bottom: 24px;
}

.card + .card {
  margin-top: 16px;
}
```

**效果:** 视觉和谐

---

## 实战案例

### 案例 1: 简洁风格(推荐)

**特点:**
- 白色背景
- 蓝色主色
- 卡片布局
- 统一间距

**实现:**
```vue
<div class="app">
  <!-- 顶部导航 -->
  <el-menu mode="horizontal">
    <el-menu-item>首页</el-menu-item>
    <el-menu-item>功能</el-menu-item>
  </el-menu>

  <!-- 内容区 -->
  <div class="content">
    <el-card>
      <h2>欢迎使用</h2>
      <p>简洁的描述</p>
      <el-button type="primary">开始使用</el-button>
    </el-card>
  </div>
</div>

<style scoped>
.content {
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 16px;
}
</style>
```

**效果:** 简洁、专业、够用

**用时:** 30 分钟

---

### 案例 2: 数据密集型

**特点:**
- 表格 + 筛选
- 紧凑布局
- 功能优先

**参考:** Element Plus 的 Admin 模板

---

## 常见问题处理

### Q: 我完全不懂设计,能做好看吗?

**A: 可以!**

**最简方案:**
1. 使用 Element Plus
2. 参考官方示例(直接抄布局)
3. 改改文字和颜色
4. 完成!

**效果:** 不会丑,看着专业

---

### Q: 如何选择配色?

**A: 用工具**

**推荐:**
- [Coolors](https://coolors.co/) - 配色生成器
- [中国传统色](http://zhongguose.com/) - 有文化感的配色

**最简单:**
- 用 UI 框架默认色
- 或参考大厂网站(支付宝蓝、微信绿)

---

### Q: 移动端适配?

**A: 基础响应式**

```vue
<style scoped>
.container {
  padding: 24px;
}

/* 移动端 */
@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
}
</style>
```

**Element Plus 自带响应式,基本够用**

---

### Q: 要不要学 Figma 设计?

**A: 看情况**

**个人项目(作者理念):**
- ❌ 不需要学 Figma
- ✅ 直接写代码,边看边调
- 节省时间

**团队项目或重视设计:**
- ✅ 可以学 Figma
- 先设计再开发

---

## 给学员的建议

### 如果你不擅长设计(像作者)

**采用"够用就行"策略:**
1. 使用 UI 框架
2. 参考官方示例
3. 遵循基础规范
4. 不死磕细节

**时间分配:**
- MVP: 10% 设计,90% 功能
- 优化: 20% 设计,80% 功能

---

### 如果你想要好看的界面

**可以投入更多时间:**
1. 学习基础设计原则
2. 参考优秀网站
3. 细节打磨

**但记住:**
- 先验证需求
- 再优化设计
- 功能能跑通最重要

---

### 如果你擅长设计

**可以成为你的优势:**
1. 做更好看的产品
2. 吸引更多用户
3. 在教程中分享你的经验

**欢迎贡献:**
- 分享你的设计 Skills
- 补充设计案例
- 帮助其他人

---

## 设计资源推荐

### 灵感参考
- [Dribbble](https://dribbble.com/) - 设计灵感
- [Behance](https://www.behance.net/) - 作品集
- [UI Movement](https://uimovement.com/) - 交互动画

### 组件参考
- [Element Plus 示例](https://element-plus.org/zh-CN/component/overview.html)
- [Ant Design 案例](https://ant.design/components/overview-cn)

### 设计系统
- [Material Design](https://material.io/design)
- [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/)

**记住:** 参考就好,不要照搬,更不要死磕!

---

## 待完善

**需要补充:**
- [ ] 更多真实项目的 UI 案例
- [ ] 不同风格的设计模板
- [ ] 交互动画的实现技巧
- [ ] 移动端优化详细指南

**欢迎贡献:**
如果你擅长 UI 设计,欢迎:
- 分享你的设计经验
- 提供好看的组件模板
- 补充设计案例

---

## 核心理念

**功能 > 设计** (对个人开发者)

**但:**
- 基础的设计规范要遵守
- 交互体验要友好
- 不能丑得离谱

**目标:**
- 看着顺眼(不丑)
- 用着方便(交互好)
- 专业感(统一规范)

**够用就行,不追求完美!**

---

## 参考资源

- [UI 设计规范](../../.cursor/rules/UI_DESIGN_GUIDE.mdc)
- [Element Plus 文档](https://element-plus.org/)
- [Web 设计最佳实践](https://web.dev/design/)
