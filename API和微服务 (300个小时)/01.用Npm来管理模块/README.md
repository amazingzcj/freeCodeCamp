# 通过 npm 管理包的关卡介绍

Node 包管理（npm）是一个是开发者共享和管理模块（或者包）的命令行工具, 它由 JavaScript 代码编写，广泛应用于 Node.js。

当开始一个新的项目时，npm 会生成一个`package.json`文件。这个文件列出了你项目的包依赖。由于 npm 的包更新很频繁，`package.json`文件允许你指定依赖的版本。这样就能保证包的升级不会破坏你的项目。

npm 把包保存在一个名为`node*modules*`*文件夹里。这些包可以通过两种方式安装：

1. *安装在全局的 root `node`*`modules`文件夹下，可以被所有的项目访问。
2. 安装在项目自己的`node_modules`文件夹下，只能被自己访问。

大部分开发者会倾向于后者，这样每一个项目都有一个完整的依赖库。接下来的这些挑战要求你在 Glitch 里完成，而且要在下面提供的初始化项目的基础上编写代码。在完成一个挑战后你需要复制你的 Glitch 链接（你的 app 链接）到挑战页面来通过关卡。另外，你也可以选择其他平台来编写你的项目，不过要确保它是公开的，以便我们测试。
在 Glitch 上使用[这个链接](https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-npm)开始项目，或者克隆 Github 上的[这个仓库](https://github.com/freeCodeCamp/boilerplate-npm/)。如果你使用 Glitch，别忘了把你项目链接备份到一个可靠的地方。