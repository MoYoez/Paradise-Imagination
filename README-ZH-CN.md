[English](README.md) | **中文**

> 什么是 Paradise？我也不知道——也许在彩虹之上？


<p align="center">
<h2 align="center">Paradise Imagination</h2>

  <img src=".github/preview.png" alt="预览" />
</p>

基于 **Next.js**、**React** 和 **Tailwind CSS** 搭建的个人简介。以主题分区（日落、森林、紫藤等），布局简洁、富有想象。

> 枫叶、日落、沙、森林、溪流、蓝铃、紫藤，即彩虹七色。

---

## 技术栈

- **Next.js 16**
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

---

## 快速开始

### 环境要求

- Node.js 18+
- npm / pnpm / yarn

### 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。


> 如需集成 Steam，请在使用前在环境变量中添加 STEAM_WEB_API_KEY 和 STEAM_USER_ID_64。

### 构建

```bash
npm run build
npm start
```

---

## 部署

### Vercel（推荐）

1. 将仓库推送到 GitHub。
2. 打开 [vercel.com](https://vercel.com)，使用 GitHub 登录。
3. **导入**本仓库。
4. 保持默认配置（框架：Next.js，构建命令：`next build`，输出目录：默认）。
5. 若使用环境变量，在 **Settings → Environment Variables** 中添加（可参考 `.env`）。
6. 点击 **Deploy**。Vercel 会构建并托管站点并给出访问地址。

### 其他平台

- **构建命令：** `npm run build` 或 `next build`
- **输出目录：** `.next`（使用 `npm start` 或平台提供的 Node.js 启动命令；不要直接以静态文件方式托管 `.next`）
- **Node 版本：** 18 或 20（在平台配置或 `package.json` 的 `engines` 中设置）

`package.json` 中 Node 版本示例：

```json
"engines": {
  "node": ">=18"
}
```

---

## 项目结构

- `app/` — Next.js App Router（页面、布局、全局样式）
- `content/` — 各区块内容（紫藤、日落、森林等）
- `components/` — 可复用 UI（Stage、AppShell、主题组件等）
- `contexts/` — React 上下文（如主题）
- `lib/` — 工具与配置

---

## 联系

更多联系方式（邮箱、Discord 等）请见站点中的 **紫藤 / 联系** 区块或仓库作者资料中的链接。


## 相关

- 背景使用了 https://www.pixiv.net/artworks/76371065
-  MIT