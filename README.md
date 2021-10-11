## Hypercrx Website

Content of https://hypertrons.github.io/hypertrons-crx-website/ website.

## What is Hypercrx?

`Hypercrx` project aims at tracing, digging and gaining insight into the projects and developers you're interested in. We do this by inserting useful dashboards into `GitHub` pages. `Hypertrons-crx` provides an effective way for digital operations and analysis of open source community.

## Dashboards 🔥

You can find these dashboards in:

<table>
	<tr>
		<th width="50%">
			<p>Entrance 1: GitHub User's Profile Page
			<p><img src="https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-perceptor-entrance-1.png">
		<th width="50%">
			<p>Entrance 2: GitHub Repository Page
			<p><img src="https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-perceptor-entrance-2.png">
</table>


### Project Releated

<table>
	<tr>
		<th width="50%">
			<p> Project Correlation Network
			<p><img src="https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-prn.gif">
		<th width="50%">
			<p>Developer Collabration Network within project
			<p><img src="https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-dcnp.gif">
</table>

- **Project Correlation Network**: Project Correlation Network shows the correlation between projects for a given time period. From this graph you can find the projects that are related to the given project.

- **Developer Collabration Network within project**: Developer Collabration Network within project shows the collaboration between active developers within the project for a given time period. From this graph you can find the active developers in the given project. What's more, you can find the collaborative relationships between these developers.

### Developer Releated

<table>
	<tr>
		<th width="50%">
			<p>Developer Collabration Network
			<p><img src="https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-dcn.gif">
		<th width="50%">
			<p>Developer's Most Participated Repos
			<p><img src="https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-dmpr.gif">
</table>


- **Developer Collabration Network**: Developer Collaboration Network shows the collaboration between developers for a given time period. From this graph you can find other developers who are closet to a given developer.
- **Developer's Most Participated Repos**: Developer's Most Participated Repos shows the active projects of developers in a given time period. From this graph you can find out the most active repositories for a given developer.

## How to Contribute

### Quickstart

```bash
git clone https://github.com/hypertrons/hypertrons-crx
cd hypertrons-crx
npm install
npm run watch
npm run web-ext
```

[web-ext](https://github.com/mozilla/web-ext) would open `Chrome` and load `Hypertrons-crx` into the browser automatically. And the default configuration of `web-ext` can be found in [package.json](https://github.com/hypertrons/hypertrons-crx/blob/master/package.json):

```json
{
  "webExt": {
    "sourceDir": "distribution",
    "run": {
      "keepProfileChanges": true,
      "chromiumProfile": "./test/web-ext-profile",
      "startUrl": ["https://github.com/hypertrons/hypertrons-crx"]
    }
  }
}
```

### Q&A

Any type of contribution is welcome, you can submit [Issue](https://github.com/hypertrons/hypertrons-crx/issues) to report bugs or ask question。

For more information please refer to [Contributing Guide](CONTRIBUTING.md).



### Website Maintainers

* [@zhuxiangning](https://github.com/zhuxiangning)
