# 创建你的第一个 Skill - 完整教程

本教程手把手教你创建一个实用的 Skill。

---

## 教程目标

**学完后你能:**
- 理解 Skill 的文件结构
- 创建一个可用的 Skill
- 测试和迭代优化
- 分享给其他人使用

**预计时间:** 1-2 小时

---

## 实战案例: 创建"Git Commit 助手"

我们要创建一个帮助写 Git 提交信息的 Skill。

### 为什么选这个案例?

- 实用性强(每次提交都要写 commit message)
- 逻辑简单(适合第一个 Skill)
- 效果明显(对比手写 vs Skill 生成)

---

## Phase 1: 需求分析(5 分钟)

### 问自己三个问题

**1. 这个 Skill 要解决什么问题?**
```
问题: 不知道怎么写好的 commit message
- 写得太简单: "update"、"fix bug"
- 写得太啰嗦: 描述了所有改动细节
- 格式不统一: 没有规范
```

**2. 什么时候应该触发?**
```
触发场景:
- 准备提交代码时
- 用户说"帮我写 commit message"
- 用户说"这个提交信息怎么写"
```

**3. 输出应该是什么样的?**
```
期望输出:
- 符合约定式提交(Conventional Commits)
- 简洁有力(50 字以内)
- 说明改动的"为什么"而非"是什么"
```

---

## Phase 2: 设计 Skill(10 分钟)

### 2.1 定义 name 和 description

**name 规则:**
- 小写字母、数字、连字符
- 描述性命名
- 最长 64 字符

```yaml
name: git-commit-helper
```

**description 规则:**
- 说明做什么(WHAT)
- 说明何时用(WHEN)
- 包含触发关键词
- 第三人称

```yaml
description: Generate clear and concise git commit messages following Conventional Commits format. Use when committing code, writing commit messages, or when user mentions "commit"、"提交信息"、"git message".
```

### 2.2 设计工作流程

```markdown
## Instructions

When helping with commit messages:

### 1. Analyze changes
- Run `git diff --staged` to see staged changes
- Identify the type of change (feat/fix/docs/refactor)
- Understand the purpose of changes

### 2. Generate message

Use this format:
\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

**Types:**
- feat: New feature
- fix: Bug fix
- docs: Documentation
- refactor: Code refactoring
- test: Adding tests
- chore: Build/tooling changes

**Rules:**
- Subject: Max 50 chars, imperative mood
- Body: Optional, explain WHY not WHAT
- Footer: Reference issues if applicable

### 3. Provide options

Suggest 2-3 variations with different detail levels
```

---

## Phase 3: 实现 Skill(15 分钟)

### 3.1 创建目录结构

```bash
# 在项目根目录执行
mkdir -p .cursor/skills/git-commit-helper
cd .cursor/skills/git-commit-helper
```

### 3.2 创建 SKILL.md

```bash
# 创建文件
touch SKILL.md
```

### 3.3 编写完整内容

```markdown
---
name: git-commit-helper
description: Generate clear and concise git commit messages following Conventional Commits format. Use when committing code, writing commit messages, or when user mentions "commit"、"提交信息"、"git message".
---

# Git Commit Message Helper

Generate standardized commit messages following best practices.

## Instructions

### 1. Analyze changes

First, check what was changed:
\`\`\`bash
git diff --staged
\`\`\`

Identify:
- Type of change (new feature, bug fix, refactor, etc.)
- Affected components/modules
- Purpose of the change

### 2. Generate message format

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

### 3. Type selection

| Type | When to use |
|------|-------------|
| feat | New feature or functionality |
| fix | Bug fix |
| docs | Documentation only |
| style | Formatting, no code change |
| refactor | Code restructuring |
| test | Adding/updating tests |
| chore | Build, dependencies, configs |

### 4. Writing rules

**Subject line:**
- Max 50 characters
- Imperative mood ("add" not "added")
- No period at the end
- Lowercase after colon

**Body (optional):**
- Explain WHY, not WHAT
- Wrap at 72 characters
- Separate from subject with blank line

**Footer (optional):**
- Reference issues: "Closes #123"
- Breaking changes: "BREAKING CHANGE: ..."

### 5. Provide options

Suggest 2-3 variations:
1. **Concise** - Subject only
2. **Standard** - Subject + brief body
3. **Detailed** - Subject + body + footer

## Examples

### Example 1: New feature

**Changes:** Added user authentication with JWT

**Suggested messages:**

**Concise:**
\`\`\`
feat(auth): add JWT authentication
\`\`\`

**Standard:**
\`\`\`
feat(auth): add JWT authentication

Implement login endpoint and token validation middleware
\`\`\`

**Detailed:**
\`\`\`
feat(auth): add JWT authentication

Implement login endpoint and token validation middleware
for secure user authentication. Tokens expire after 24h.

Closes #45
\`\`\`

### Example 2: Bug fix

**Changes:** Fixed date formatting issue in reports

**Suggested messages:**

**Concise:**
\`\`\`
fix(reports): correct date formatting
\`\`\`

**Standard:**
\`\`\`
fix(reports): correct date formatting in timezone conversion

Use UTC consistently across report generation
\`\`\`

### Example 3: Refactoring

**Changes:** Extracted database logic into separate module

**Suggested messages:**

**Concise:**
\`\`\`
refactor(db): extract database logic
\`\`\`

**Standard:**
\`\`\`
refactor(db): extract database logic into separate module

Improve code organization and testability
\`\`\`

## Quality checklist

Before suggesting, verify:
- [ ] Type is correct
- [ ] Scope is clear (if applicable)
- [ ] Subject is concise (<50 chars)
- [ ] Body explains WHY (not WHAT)
- [ ] Format follows standard
```

---

## Phase 4: 测试 Skill(10 分钟)

### 4.1 准备测试场景

```bash
# 创建测试提交
echo "test" > test.txt
git add test.txt
```

### 4.2 在 Cursor 中测试

```
你: "帮我写这次提交的 commit message"

AI: [应该自动激活 git-commit-helper]
    [分析 git diff]
    [提供 2-3 个选项]
```

### 4.3 检查输出质量

- [ ] 自动分析了 git diff
- [ ] 识别了正确的 type
- [ ] 提供了多个选项
- [ ] 格式符合规范
- [ ] 信息简洁有力

---

## Phase 5: 迭代优化(按需)

### 如果触发不准确

**问题:** 说"提交代码"时没触发

**解决:** 补充 description
```yaml
description: ... Use when committing code, writing commit messages, preparing to commit, or when user mentions "commit"、"提交"、"push".
```

### 如果输出太长

**问题:** 建议的 message 超过 50 字

**解决:** 强化规则
```markdown
### Subject line rules

**CRITICAL:** Subject must be under 50 characters

If the change is complex:
- Keep subject concise
- Put details in body
```

### 如果格式不对

**问题:** 没有按 Conventional Commits 格式

**解决:** 提供更明确的模板
```markdown
## Required format

ALWAYS use this exact format:
\`\`\`
<type>(<scope>): <subject>
\`\`\`

Example: feat(auth): add login endpoint
NOT: Add login endpoint feature
```

---

## Phase 6: 分享(可选)

### 分享到本项目

1. 提交 Pull Request
2. 说明这个 Skill 的用途
3. 提供使用示例
4. 其他人可以使用和改进

### 分享到个人博客

写一篇文章:
- 为什么创建这个 Skill
- 创建过程
- 使用效果
- SKILL.md 内容

---

## 进阶话题

### 1. 多文件 Skill

当 Skill 复杂时,拆分文件:

```
git-commit-helper/
├── SKILL.md           # 核心流程
├── reference.md       # Conventional Commits 详细规范
├── examples.md        # 更多示例
└── TEMPLATE.md        # 消息模板
```

在 SKILL.md 中引用:
```markdown
## Additional resources
- For complete format spec, see [reference.md](reference.md)
- For more examples, see [examples.md](examples.md)
```

### 2. 条件分支

复杂 Skill 可能需要条件判断:

```markdown
## Workflow

1. Analyze changes

2. Determine commit type:
   - **New files added?** → type: feat
   - **Fixing a bug?** → type: fix
   - **Only docs changed?** → type: docs
   - **Code restructure?** → type: refactor

3. Based on type, follow corresponding template
```

### 3. 工具集成

Skill 可以调用外部工具:

```markdown
## Analysis step

Run analysis script:
\`\`\`bash
python scripts/analyze_changes.py
\`\`\`

The script outputs:
- Changed files count
- Lines added/removed
- Suggested commit type
```

---

## 常见错误

### 错误 1: Skill 太复杂

**症状:** SKILL.md 超过 1000 行

**解决:**
- 拆分到 reference.md
- 删除冗余内容
- 只保留核心流程

### 错误 2: 触发太频繁

**症状:** 不相关的对话也触发

**解决:**
- 缩小 description 范围
- 明确限定触发场景
- 添加具体关键词

### 错误 3: 指令太抽象

**症状:** AI 输出不稳定

**解决:**
- 用具体步骤替代抽象指导
- 提供明确的示例
- 加入质量检查清单

### 错误 4: 没有示例

**症状:** AI 不知道期望输出格式

**解决:**
- 补充 2-3 个真实示例
- 展示输入输出对应关系
- 覆盖不同场景

---

## 总结检查清单

创建 Skill 前检查:
- [ ] 明确了要解决的问题
- [ ] 定义了触发场景
- [ ] 设计了工作流程
- [ ] 准备了示例

创建 Skill 后检查:
- [ ] name 符合命名规范
- [ ] description 包含 WHAT 和 WHEN
- [ ] Instructions 步骤清晰
- [ ] 提供了具体示例
- [ ] SKILL.md 长度合理(< 500 行)
- [ ] 测试效果符合预期

---

## 下一步

**完成这个教程后:**
1. 创建你的第一个 Skill
2. 在实际项目中使用
3. 根据效果迭代优化
4. 分享你的 Skill 和经验

**更多资源:**
- [Cursor Skills 使用指南](./cursor-skills.md)
- [社区 Skills 分享](https://github.com/topics/cursor-skills)

---

**准备好了吗?** 开始创建你的第一个 Skill 吧!
