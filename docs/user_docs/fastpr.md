# FastPR 使用流程

FastPR 是一项旨在简化开源项目贡献流程的功能。用户可以直接在插件提供的文档页面上修改内容，插件会在完成后自动生成并提交 PR，从而简化了贡献的流程。此功能不仅支持 GitHub，还可以扩展至其他指定的文档站点。

## 目前配置网站

- https://www.x-lab.info/oss101-bok/
- https://open-digger.cn/

## 用户指南

1. 第一步：找到插件图标并点击进入设置页面。在 GitHub 账户绑定部分，点击“绑定账户”按钮，跳转到 GitHub 授权页面。在该页面登录您的 GitHub 账号并授权 HyperCRX 访问所需权限。同样的流程适用于绑定 Gitee 账户。
   绑定成功后，状态会从“未绑定账户”变更为显示已绑定的账户信息，表明绑定流程已完成。
   ![FastPR 示例图片](/img/fastpr-example1.png "FastPR 图片示例1")
2. 第二步：在文档页面上找到插件对应的图标并点击。此时可以看到文档的原始内容。
   ![FastPR 示例图片](/img/fastpr-example2.png "FastPR 图片示例2")

3. 第三步：编辑文档。在页面左侧输入需要修改的内容，完成编辑后点击 ✅ 图标保存更改。
   ![FastPR 示例图片](/img/fastpr-example3.png "FastPR 图片示例3")

4. 第四步：页面会弹出 FastPR 提示。点击 "提交" 按钮提交更改。当页面出现 "PR 创建成功" 消息时，说明 PR 已成功提交至对应的仓库。