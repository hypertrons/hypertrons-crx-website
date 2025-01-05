# 开发案例
> HyperCRX 的特性注入机制在论文中有详细介绍：[HyperCRX: A Browser Extension for Insights into GitHub Projects and Developers](https://github.com/hypertrons/hypertrons-crx/files/14752551/HyperCRX__A_Browser_Extension_for_Insights_into_GitHub_Projects_and_Developers.Camera.ready.pdf)

## 案例介绍

在这篇教程中，你将通过一个教学案例学会如何为 HyperCRX 开发一个叫做`colorful-calendar`的新特性。这个特性用于改变 GitHub 用户 Profile 页面的日历图格子的颜色，例如从绿色改成紫色：

<div align="center">
  <img width="750" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/c9ee474a-89ab-46e5-b51c-54f9469dbff0"/>
</div>


## 步骤0. 准备工作
- 准备好开发环境[Node.js](https://nodejs.org/en)、Yarn（`npm install --global yarn`）、配置 Yarn 源（`yarn config set registry https://registry.npm.taobao.org/`）；
- Fork 仓库到自己的账号下并 clone 到本地；
- 运行项目；
- 使用 Chrome 多账户加载开发版 HyperCRX 或禁用商店版 HyperCRX；
- 以上两个步骤可查看[开发者指南](intro.md)；
- 开发前先创建 Git 分支 `git checkout -b feat/colorful-calendar`

## 步骤1. 为新特性创建一个目录和一个index.tsx文件
在 HyperCRX 的项目目录中，`src/pages/ContentScripts/features`目录包含了所有特性的源码。在该目录下，每个特性都对应着一个目录，并且目录名就是特性的名称。因此，我们要为`colorful-calendar`这个特性创建一个同名的新目录。

<div align="center">
  <img width="763" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/bca1010a-7445-45cc-a348-01a70f1b044a"/> 
</div>


创建目录后，我们要在特性目录中创建一个名为`index.tsx`的新文件，所有特性的目录下都有`index.tsx`文件，这个文件是特性的入口文件。我们将下面代码填入文件中（对此段代码的解释会在后文中展开）：

```typescript
import features from '../../../../feature-manager';
import isGithub from '../../../../helpers/is-github';
import * as pageDetect from 'github-url-detection';

const featureId = features.getFeatureID(import.meta.url);

const init = async (): Promise<void> => {
  console.log('init colorful-calendar');
};

const restore = async () => {
  console.log('restore colorful-calendar');
};

features.add(featureId, {
  asLongAs: [isGithub, pageDetect.isUserProfile],
  awaitDomReady: false,
  init,
  restore,
});
```

在创建了特性目录和`index.tsx`文件后，我们在`src/pages/ContentScript/index.ts`中引入该特性，如下所示：

```typescript
// 省略其他已有特性的 import
// ...
import './features/colorful-calendar';
```

在此文件中引入新特性后，需要杀掉开发进程并重新运行`yarn run start`来生成新的特性列表，因为 [feature-loader.cjs](https://github.com/hypertrons/hypertrons-crx/blob/master/utils/features-loader.cjs) 只会在项目初次构建时运行一次。之后，在浏览器`chrome://extensions/`页面中点击按钮重载 HyperCRX 扩展程序，然后打开 HyperCRX 的选项页面，你将发现`colorful-calendar`已经出现在特性列表中并处于启用状态：

<div align="center">
  <img width="700" alt="image" src="https://github.com/user-attachments/assets/34da9104-dd82-439e-883b-5ee0ea45b9ea"/>
</div>

请再访问你的GitHub主页，并打开 Chrome DevTools，如果你发现控制台中输出了`init colorful-calendar`，那么恭喜你成功迈出了第一步！

<div align="center">
  <img width="800" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/3d4b1039-1016-4dc0-96a6-161e304980d6"/>
</div>

> 温馨提示：刚刚你已经收获了初步的成功，请及时打一个 Commit，细粒度的 Commit 对软件开发是大有裨益的。

## 步骤2. 对 GitHub 用户 Profile 页面的日历元素进行逆向工程
HyperCRX 是一款为 GitHub 量身打造的浏览器扩展，所谓量身打造，就是通过分析 GitHub 页面 DOM 元素，寻找突破口，然后通过浏览器扩展 Content Script 能力操纵宿主DOM达到目的。为了改变日历格子的颜色，我们先要了解日历格子对应的 DOM 元素。如下图所示，点击 Chrome DevTools 的 Inspect 按钮检视日历格子，定位其在 DOM 树中的位置，发现它是用 div 元素实现的。在右侧属性面板中，我们可以轻易发现和颜色有关的 CSS 样式属性，通过与属性面板进行交互，可以确定`var(--color-calendar-graph-day-L1/2/3/4-bg)`是控制格子颜色的 [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)。没错，我们已经找到了突破口。

<div align="center">
  <img width="800" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/589b1682-60a7-4e27-89ed-d570d0fde4e4"/>
</div>

## 步骤3. 在 index.tsx 文件中操作 DOM 改变日历格子颜色
在步骤1中，我们在新建的 index.tsx 中写了一些代码，现在我通过代码注释的方式对这段代码做些解释：

```typescript
import features from '../../../../feature-manager'; // 导入特性管理器模块
import isGithub from '../../../../helpers/is-github';// 导入Github平台判断模块
import * as pageDetect from 'github-url-detection'; // 导入第三方的GitHub页面检测模块

const featureId = features.getFeatureID(import.meta.url); // 通过特性管理器的getFeatureID方法获取当前特性的ID

const init = async (): Promise<void> => { // 该特性的初始化工作都在这里进行
  console.log('init colorful-calendar');
};

const restore = async () => { // 在GitHub的restoration visit后运行，对于此特性可以不需要在该函数中写内容，详见论文
  console.log('restore colorful-calendar');
};

features.add(featureId, {  // 调用特性管理器的add方法添加特性，第一个参数是ID，第二个参数是meta信息配置对象
  asLongAs: [isGithub, pageDetect.isUserProfile], // 表示“只有在Github平台且当前页面是用户Profile页面时才运行该特性”
  awaitDomReady: false, // 是否等待DOM加载完毕，如无特殊情况，都置为false
  init, // 指明初始化函数，"init,"是"init: init,"的简写，这是ES6的特性
  restore,
});
```

所以，init 函数是我们要写代码的地方。浏览器扩展赋予我们 [Content Script](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts) 的能力，该能力允许我们直接访问宿主页面的 DOM 并进行操作。下面代码通过改变我们在步骤2中确认的相关 CSS Variables 的值实现了改变日历格子颜色的目的：

```typescript
const init = async (): Promise<void> => {
  const root = document.documentElement;
  root.style.setProperty('--color-calendar-graph-day-L1-bg', '#ffedf9');
  root.style.setProperty('--color-calendar-graph-day-L2-bg', '#ffc3eb');
  root.style.setProperty('--color-calendar-graph-day-L3-bg', '#ff3ebf');
  root.style.setProperty('--color-calendar-graph-day-L4-bg', '#c70085');
};
```

保存代码，Webpack增量编译，页面刷新后，我们就可以看到日历格子的颜色被改变了：

<div align="center">
  <img width="800" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/1bc4c75b-e443-4975-9a78-a92859f53b10"/>
</div>


## 步骤4. 结合GitHub界面设计颜色自定义功能
该步骤属于功能设计环节。对于复杂功能，可以尝试使用专业工具如[Figma](https://figma.com/)进行设计；对于如color-calendar 这样的简单功能，语雀画板甚至是截图后涂鸦进行表达都是合适的。关键是能正确表达出你的设计，并且和其他人在 Issue 中交流达成一致后再开始用代码实现。

HyperCRX 是为 GitHub 量身打造的浏览器扩展，因此设计功能时，需要考虑和 GitHub 原生界面自然融洽。通过什么方式让用户自定义格子颜色呢？我脑子里很快就有了主意，于是我利用截图软件和涂鸦功能表达了我的设计，如下图所示：

<div align="center">
  <img width="800" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/6a68c960-04f3-4675-b642-016e4ad9fc26"/>
</div>

一图胜千言，我相信不需要额外的文字解释，大家都能 get 到这个功能设计。

## 步骤5. 实现颜色自定义功能
`antd`的[ColorPicker](https://ant-design.antgroup.com/components/color-picker-cn)让我们无需从头实现颜色选择器组件，而只需要关注如何让5个`ColorPicker`替换掉日历右下角代表5个`level`的格子。

“替换”意味着要操作DOM，那么先要利用`Inspect`工具检索5个格子对应的`DOM`元素。如下图所示，5个格子对应着5个`div`元素，每个`div`都有`id`，因此可以轻松利用`id`进行元素定位。

<div align="center">
  <img width="800" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/6ff25da5-a945-458c-a9c5-4a5ea2635fc9"/>
</div>

下面是`index.tsx`代码（包含了必要的注释）：

```typescript
import features from '../../../../feature-manager';
import waitFor from '../../../../helpers/wait-for';
import isGithub from '../../../../helpers/is-github';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ColorPicker } from 'antd';
import $ from 'jquery';
import * as pageDetect from 'github-url-detection';


const featureId = features.getFeatureID(import.meta.url);

const CALENDAR_LEVEL_COLORS = [ '#ebedf0', '#ffedf9', '#ffc3eb', '#ff3ebf', '#c70085' ];

const changeLevelColor = (level: number, color: string) => {
  const root = document.documentElement;
  if (level === 0) {
    root.style.setProperty(`--color-calendar-graph-day-bg`, color);
  } else {
    root.style.setProperty(`--color-calendar-graph-day-L${level}-bg`, color);
  }
};

const replaceLegendToColorPicker = async (level: number, defaultColor: string) => {
  const legendSelector = `#contribution-graph-legend-level-${level}`; // 选择器selector是用于定位DOM元素的字符串
  await waitFor(() => $(legendSelector).length > 0); // init函数运行的时候，页面中某些元素不一定已经加载完毕，经过测试，日历图加载时机比较靠后，因此需要waitFor一下，不然后面的操作都是无用的
  const $legend = $(legendSelector);
  const container = $('<div></div>');
   createRoot(container[0]).render(
    <ColorPicker defaultValue={defaultColor} size="small" onChange={(color, hex) => changeLevelColor(level, hex)} />// 选择新颜色后会调用changeLevelColor改变格子颜色
  ); // 将React组件渲染为真实的DOM元素
  $legend.replaceWith(container); // 使用jQuery的replaceWith方法将图例格子替换为ColorPicker
};

const init = async (): Promise<void> => {
  for (let i = 0; i < CALENDAR_LEVEL_COLORS.length; i++) {
    changeLevelColor(i, CALENDAR_LEVEL_COLORS[i]); // 初始化时就按照给定的颜色改变日历格子的颜色
    await replaceLegendToColorPicker(i, CALENDAR_LEVEL_COLORS[i]);
  }
};

const restore = async () => {
  console.log('restore colorful-calendar');
};

features.add(featureId, {
asLongAs: [isGithub, pageDetect.isUserProfile],
  awaitDomReady: false,
  init,
  restore,
});
```

上面的代码保存后会得到如下图左边所示的结果：每个`ColorPicker`都很大，和GitHub原生的小格子风格迥异，总之看着不美观。这是因为`antd`是一套设计，它有自己的一套设计理念和风格，其暴露给开发者用于调整样式的API是有限的，所以无法通过`API`达到让`ColorPicker`变得很小的目的。

<div align="center">
  <img width="529" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/f9f1a33d-43ca-466e-b774-c53a1e0f9d04"/>
</div>

只能用点黑科技，即`CSS`样式覆盖：使用`DevTools Inspect`工具检查`antd ColorPicker DOM`树上各级元素的样式信息，然后引入自定义的`CSS`样式覆盖掉需要修改的样式。下面的`index.scss`文件中的覆盖样式：

```scss
.ant-color-picker-trigger {
  min-width: 10px !important;
  padding: 0 !important;
  margin-right: 4px;
  border: none !important;
}

.ant-color-picker-color-block {
  width: 10px !important;
  min-width: 10px !important;
  height: 10px !important;
}

.ant-color-picker-color-block-inner {
  width: 10px !important;
  min-width: 10px !important;
  height: 10px !important;
  border-radius: 3px !important;
}
```
样式优化后的效果如上图右边所示。最终效果如下：

<div align="center">
  <img width="800" alt="image" src="https://github.com/hypertrons/hypertrons-crx/assets/32434520/40701749-f7c0-47b9-b28c-e8e9c5efe8ff"/>
</div>

## 步骤6. 记住用户上次选择的颜色
刚刚，我们实现了利用颜色选择器改变日历格子颜色，但是自定义的颜色会在页面刷新后失效。因此，我们要利用 [chrome.storage.local](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API 对用户的设置进行持久化。API的使用较为简单，唯一需要注意的是，`storage.local`的各个方法都是异步的。我们利用该 API 增加两个操作：在初始化时读取颜色配置、在改变颜色时更新颜色配置。代码做如下更新：

```typescript
let colors = ['#ebedf0', '#ffedf9', '#ffc3eb', '#ff3ebf', '#c70085'];

const changeLevelColor = async (level: number, color: string) => {
  const root = document.documentElement;
  if (level === 0) {
    root.style.setProperty(`--color-calendar-graph-day-bg`, color);
  } else {
    root.style.setProperty(`--color-calendar-graph-day-L${level}-bg`, color);
  }
  // Save to storage
  const newColors = [...colors];
  newColors[level] = color;
  await chrome.storage.local.set({
    calendar_level_colors: newColors,
  });
};

const init = async (): Promise<void> => {
  // Load colors from storage
  colors =
    (await chrome.storage.local.get('calendar_level_colors'))[
      'calendar_level_colors'
    ] || colors;

  for (let i = 0; i < colors.length; i++) {
    changeLevelColor(i, colors[i]);
    replaceLegendToColorPicker(i, colors[i]);
  }
};
```

## 步骤7. 提交 PR
>在提交PR前，我们需要确保代码已经过测试，没有bug，并且代码结构清晰、易读性强。并记得将代码中的非必要的注释以及调试语句删掉，最好使用英文进行代码注释。

将代码保存，并运行`yarn prettier`，进行代码格式化。
推送分支到`origin`；向`upstream`提PR；描述好截图录屏等；等待`reviewer`意见；成功合入后及时将本地`master`与`upstream`的`master`同步。

## 总结
在这篇`Tutorial`中，我们通过渐进式地完成一个`demo`特性`colorful-calendar`来熟悉HyperCRX的开发流程。