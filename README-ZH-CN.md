[English](README.md) | **中文**

> 什么是 Paradise？我也不知道——也许在彩虹之上？


<p align="center">
<h2 align="center">Paradise Imagination</h2>

  <img src=".github/preview.png" alt="预览" />
</p>

✨ 大概是随意的想象为灵感，将页面分类为彩虹色，像舞台一样展示内容

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
# requirement install.
pnpm install

# Let's roll with magic~
pnpm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。


> 如需集成 Steam，请在使用前在环境变量中添加 STEAM_WEB_API_KEY 和 STEAM_USER_ID_64。

> 头像需通过环境变量 "AVATAR_SOURCE_URL" 设置

### 构建

```bash
npm run build
npm start
```

---

## 部署

### Vercel（推荐）

[![Deploy with Vercel](https://vercel.com/button)](
https://vercel.com/new/clone?repository-url=https://github.com/MoYoez/Paradise-Imagination&branch=template&env=STEAM_WEB_API_KEY&envDescription=Steam%20Web%20API%20Key&env=STEAM_USER_ID_64&envDescription=Steam%20User%20ID%20%2864-bit%29
)

> 注: 你可能需要填写 STEAM_WEB_API_KEY 和 STEAM_USER_ID_64

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
-  AGPL - V3