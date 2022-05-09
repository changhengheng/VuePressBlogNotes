# 官方博客主题@vuepress/theme-blog快速入门

这个主题没有主页的功能，可以继承 @vuepress/theme-blog来自定义主题。

## 网站

- [文档](https://vuepress-theme-blog.billyyyyy3320.com/)

## 安装

```bash
yarn add @vuepress/theme-blog -D
# OR npm install @vuepress/theme-blog -D
```

## 使用

```js
// .vuepress/config.js
module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
  }
}
```

### 文件夹结构

这是推荐的项目结构：

```bash
├── blog
│   ├── _posts
│   │   ├── 2018-11-7-frontmatter-in-vuepress.md #example
│   │   ├── 2019-2-26-markdown-slot.md #example
│   │   └── 2019-5-6-writing-a-vuepress-theme.md #example
│   └── .vuepress
│       ├── `components` _(**Optional**)_
│       ├── `public` _(**Optional**)_
│       ├── `styles` _(**Optional**)_
│       │   ├── index.styl
│       │   └── palette.styl
│       ├── config.js
│       └── `enhanceApp.js` _(**Optional**)_
└── package.json
```

**必需**：

- `blog/.vuepress/config.js`：配置的入口文件，也可以是`yml`或`toml`。
- `blog/_posts`：存储您的帖子内容。

**可选**：

如果你想配置下面的文件，你需要一些[VuePress的知识](https://vuepress.vuejs.org/).

- `blog/.vuepress/components`: 该目录下的 Vue 组件会自动注册为全局组件。
- `blog/.vuepress/styles`：存储与样式相关的文件。
- `blog/.vuepress/styles/index.styl`：在 CSS 文件末尾生成的自动应用的全局样式文件，其优先级高于默认样式。
- `blog/.vuepress/styles/palette.styl`: 调色板用于覆盖默认颜色常数和设置 Stylus 的颜色常数。
- `blog/.vuepress/public`：静态资源目录。
- `blog/.vuepress/enhanceApp.js`：应用级别增强。

### 使用@vuepress/theme-blog

必须在 `.vuepress/config.js` 中添加 `@vuepress/theme-blog` 作为主题。`@vuepress/theme-blog`是可配置的，但我们现在将使用默认值。

```js
// .vuepress/config.js
module.exports = {
  title: 'VuePress Blog Example', // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // Please keep looking down to see the available options.
  }
}
```

将脚本添加到 package.json 文件：

```json
// package.json
{
  ...
  "scripts": {
    ...
    "dev": "vuepress dev blog", // starts a development server with automatic reload.
    "build": "vuepress build blog" // builds your website.
  }
  ...
}
```

从现在开始，您可以跑步`yarn dev`或`npm run dev`前往`localhost:8080`查看您的博客！

### 生成内容

所有博客帖子文件都可以从 front matter 开始，只有 `title` 是必须的，但建议定义如下所有 frontmatter 变量，它们将用于设置相应的布局：

```forntmatter
---
title: Hello World
date: 2020-01-11
author: Billyyyyy3320
location: Taipei  
---

> This is official blog theme.

My content.
```

**提示**
查看[frontmatter](https://vuepress-theme-blog.billyyyyy3320.com/config/front-matter)了解更多详情。

帖子文件可以任意命名，但建议加上日期，从而方便组织并默认用作永久链接，例如：

```text
2018-11-7-frontmatter-in-vuepress.md 
2019-2-26-markdown-slot.md 
2019-5-6-writing-a-vuepress-theme.md 
```

### 博客标签

默认情况下，导航到 `/tag/` 时，您将看到标签条目页面。您可以在前面设置自己的标签，它们会自动分类：

```yaml
---
title: Hello World
date: 2020-01-11
tags: 
  - JavaScript
  - Vue
author: Billyyyyy3320
location: Taipei  
---
```

### 摘要

默认情况下，摘要会从 markdown 资源文件中提取，如果想要覆盖它，可以使用以下两种方法：

1. 在 frontmatter 中手动编写摘要
2. [<!--more-->通过在要提取为摘要的内容下方写评论来设置摘录分隔符](https://vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt)

## 快速开始

为了更容易上手，你可以使用[create-vuepress](https://github.com/vuepressjs/create-vuepress)。这确实是一个 npm 包，但这并不意味着您需要先手动安装它。这是一个例子：

第 1 步：搭建一个 VuePress 博客

```bash
yarn create vuepress [blogName]

# And answer the following questions in CLI, for instance:

# ? Select the boilerplate type blog

# ? What's the name of your project? blog

# ? What's the description of your project? Billyyyyy3320's personal website

# ? What's your email? newsbielt703@gmail.com

# ? What's your name? Billy Chin

# ? What's the repo of your project. https://github.com/newsbielt703/Billy

cd [blogName] && yarn
```

第 2 步：开发和构建

```bash
# Run localhost
yarn dev

# Build your VP blog
yarn build
```

默认情况下，VuePress 开发服务器正在侦听`http://localhost:8080/`，而构建的文件将在`.vuepress/dist`.

## 最终的

现在，查看您的博客 `localhost:8080`，如果一切正常，您可能会对以下主题感兴趣：

- 配置这个主题：我们将在[下一节讨论](https://vuepress-theme-blog.billyyyyy3320.com/config/)
- 部署你的博客：阅读[VuePress 文档中的部署部分（打开新窗口）](https://vuepress.vuejs.org/guide/deploy.html)
- 深入探索：
  - [VuePress的文档](https://vuepress.vuejs.org/)
  - [官方博客插件文档](https://vuepress-plugin-blog.billyyyyy3320.com/)
