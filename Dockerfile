# Stage 1: Build
FROM node:20-alpine AS builder

# 安装 Git (VitePress 构建需要)
RUN apk add --no-cache git

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json pnpm-lock.yaml ./

# 配置 npm 和 pnpm 使用国内镜像源
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    pnpm config set registry https://registry.npmmirror.com && \
    pnpm install --frozen-lockfile

# 复制所有文件
COPY . .

# 构建 VitePress 站点
RUN pnpm docs:build

# Stage 2: Production
FROM nginx:alpine

# 复制构建产物到 nginx
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 使用 nginx 默认配置
CMD ["nginx", "-g", "daemon off;"]
