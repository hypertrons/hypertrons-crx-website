# FastPR 使用流程

FastPR 是一项旨在简化开源项目贡献流程的功能。用户可以直接在插件提供的文档页面上修改内容，插件会在完成后自动生成并提交 PR，从而简化了贡献的流程。此功能不仅支持 GitHub，还可以扩展至其他指定的文档站点。

## 目前配置网站

以下网站已经配置支持 FastPR 功能，用户可以直接在这些页面上编辑内容并提交 PR：

- **[开源软件通识](https://www.x-lab.info/oss101-bok/)**
  为开源领域的从业者、研究者和爱好者提供全面的开源知识体系。

- **[OpenDigger](https://open-digger.cn/)**
  开源数据分析平台，提供丰富的开源生态和数据分析功能。

- **[开源书籍](https://kaiyuanshe.github.io/oss-book)**
  由开源社编写的开源知识普及书籍，内容涵盖开源的基本概念、实践指南和案例分析。

- **[KaiwuDB 文档](https://www.kaiwudb.com/kaiwudb_docs/#/oss_dev)**
  KaiwuDB 的开发文档，提供数据库使用和开发相关的指导和说明。

---

**需要配置的网站**

如有需要配置的文档项目，欢迎访问 [HyperCRX 项目](https://github.com/hypertrons/hypertrons-crx) 提交 Issue 留言，非盈利项目我们将提供免费支持。

## 用户指南

1. 第一步：找到插件图标并点击进入设置页面。在 GitHub 账户绑定部分，点击“绑定账户”按钮，跳转到 GitHub 授权页面。在该页面登录您的 GitHub 账号并授权 HyperCRX 访问所需权限。同样的流程适用于绑定 Gitee 账户。
   绑定成功后，状态会从“未绑定账户”变更为显示已绑定的账户信息，表明绑定流程已完成。
   ![FastPR 示例图片](/img/fastpr-example1.png "FastPR 图片示例1")
2. 第二步：在文档页面上找到插件对应的图标并点击。此时可以看到文档的原始内容。
   ![FastPR 示例图片](/img/fastpr-example2.png "FastPR 图片示例2")

3. 第三步：编辑文档。在页面左侧输入需要修改的内容，完成编辑后点击 ✅ 图标保存更改。
   ![FastPR 示例图片](/img/fastpr-example3.png "FastPR 图片示例3")

4. 第四步：页面会弹出 FastPR 提示。点击 "提交" 按钮提交更改。当页面出现 "PR 创建成功" 消息时，说明 PR 已成功提交至对应的仓库。
