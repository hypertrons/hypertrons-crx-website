# 开发者指南
如果你初来乍到或对 Git/GitHub 的基本操作不熟悉，请阅读[CONTRIBUTING](https://github.com/hypertrons/hypertrons-crx/blob/master/CONTRIBUTING.md)。

### 环境需求

1. node >= 16.14

2. yarn

### 快速开始

1. git clone https://github.com/hypertrons/hypertrons-crx

2. cd hypertrons-crx

3. yarn install

4. yarn run start

5. 在 chrome 中加载新鲜出炉的插件:

   1. 在浏览器地址栏访问 chrome://extensions/

   2. 勾选“开发者模式”

   3. 点击“加载已解压的扩展程序”

   4. 选择项目根目录下的“build”目录

   5. 保持“Service Worker”的 DevTools 页面为打开状态 ([why?](https://github.com/hypertrons/hypertrons-crx/pull/274#discussion_r811878203))

      ![](/img/keep-service-worker-devtools-open.jpeg)

6. Happy hacking!

### HMR & auto-reload

如果你开发的是 Options 页面或 Popup 页面，每次保存文件都可以让页面进行热模块替换而不需要刷新页面，这意味着你能立马看到改动后的效果。

但是，如果你开发的是 Background 或 ContentScripts，每次保存文件后，service worker 会自动重新加载插件。除此之外，若你开发的是 ContentScripts，那么那些被注入 ContentScripts 的页面还会自动刷新从而运行最新的 ContentScripts。

### 问题交流

我们非常欢迎您的贡献，您可以通过 [Issue](https://github.com/hypertrons/hypertrons-crx/issues) 提出问题或交流。

更多信息请参考 [贡献指南](https://github.com/hypertrons/hypertrons-crx/blob/master/CONTRIBUTING.md)。