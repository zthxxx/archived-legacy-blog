---
title: "[译] 把 Cmder 装进你的 Hyperjs 终端里"
date: 2017-10-29 00:03:21
update: 2017-10-29 14:01:32
banner: /images/cover-banner/hyper-pokemon-pikachu.png
tags: [翻译, 折腾]
categories: 
  - 工具
---

> - 原文地址：[Using Cmder with Hyper](http://blog.bsinky.com/programming/tools/2017/06/11/using-cmder-with-hyper.html)
> - 原文作者：[Benjamin Sinkula](https://github.com/bsinky)
> - 译文出自：[zthxxx's blog](https://blog.zthxxx.me/posts/Using-Cmder-with-Hyper/)
> - 译者：[zthxxx](https://github.com/zthxxx)
> - 注：本译文基于 **CC BY-NC-ND 4.0** 发布

Today I'm writing about Hyper, a program that essentially wraps a terminal instance in a pretty UI. It might sound underwhelming, but it looks really good, and besides that has a number of plugins available to add features that you might not be able to get in a standard terminal.

今天我们来写写关于 Hyper 的事情，这本质上不过是一个装饰着漂亮 UI 的终端程序。虽然这样说可能留不下什么深刻印象，但它真的看起来很棒！此外，它还有很多插件能让你添加一些无法从标准的终端中获得的特性。

<!--more-->

![hyper-cmder](./hyper-cmder.png)

This is especially true on Windows. Terminal users are limited to either `cmd` or `powershell`, the latter of which is without a doubt more modern and useable, and yet for some reason I never find myself using `powershell` on Windows, and instead open up `cmd` without a thought when I need a terminal.

这在 Windows 上更是如此， 原本终端被限制只能使用 `cmd` 或 `powershell`，虽然后者毫无疑问要更具现代性和可用性，但因为一些原因，我从未发现我自己在 Windows 上使用过 `powershell`，而是只会在当我觉得需要终端时开启 `cmd`。

That brings us to [Cmder](http://cmder.net/). Cmder is self-described as a "terminal emulator for Windows," so it is along the same vein as Hyper. Cmder has some really nice features, like tab-autocomplete commands, which is something Windows `cmd` didn't have for a very long time, as far as I know[^1]. It has numerous other features, including tabs, there's a version that comes bundled with nice utilites like `ls` and `grep`, and so on. I highly recommend Cmder to anyone who uses the terminal frequently on Windows. You won't regret it!

这让我接触到了 [Cmder](http://cmder.net/)。Cmder 自我描述为一个 「为 Windows 打造的便携式模拟终端」，这貌似与 Hyper 一脉相承。Cmder 有一些挺不错的功能，比如 <kbd>Tab</kbd> 自动补全命令，就我所知[^1]，Windows `cmd` 在很长一段时间里都不支持。它还有许多特性，包括标签页、捆绑了一些好用的功能如 `ls` 和 `grep`，等等。我极度推荐 Cmder 给每个那些频繁在 Windows 下使用终端的人，你不会后悔的！

So Cmder offers a lot of nice features, and Hyper looks really cool…but what if I wanted to use a Cmder-style terminal within Hyper?

那么，Cmder 提供了许多很棒的功能，Hyper 看起来又真的很酷……但如果我像在 Hyper 中使用 Cmder 样式的终端呢？

As I found out earlier this week, it is indeed possible.

正如我本周早些时候的发现，这确实是可能实现的。

So, first off, it appears that Cmder accomplishes much of the magic is does by running a command like this:

首先，看起来 Cmder 变出许多魔法的关键是通过执行这条命令：

```bat
cmd /k "%ConEmuDir%\..\init.bat"  -new_console:d:%USERPROFILE%
```

The interesting bit to me was the argument passed with the `/k` switch. Whatever that `bat` file does could be easily called when launching Hyper as well, since Hyper's `.hyper.js` config file exposes startup arguments for the terminal it launches.

让我有点感兴趣的是传入参数中的 `/k` 开关。无论什么 `bat` 文件都能在 Hyper 启动时被轻松调用，因为 Hyper 的 `.hyper.js` 配置文件会暴露终端启动时的启动参数。

With that in mind, getting a Cmder-like terminal running within Hyper is basically just a few simple steps:

考虑到这点，让一个类似 Cmder 的终端运行在 Hyper 中仅仅只需要基于以下几个简单的步骤：

1. Figure out what your %ConEmuDir% directory is by runnning `echo %ConEmuDir%` **within Cmder** (I don't think that environment variable is set otherwise)
2. In `.hyper.js`, inside the value for `env`, add a key `ConEmuDir: 'Your/ConEmuDir/Path/Here'`
3. Again in `.hyper.js`, add to the `shellArgs` array 2 values - the `/k` switch, and `%ConEmuDir%\..\init.bat` as the second

4. 通过**在 Cmder 中**执行 `echo %ConEmuDir%` 命令找出你的 `%ConEmuDir%`  文件夹路径（我不认为这个环境变量会在 Cmder 以外的地方被建立）
5. 在 `.hyper.js` 中，在 `env` 的值下插入一个键 `ConEmuDir: 'Your/ConEmuDir/Path/Here'`
6. 同样是在 `.hyper.js` 中，在 `shellArgs` 数组中添加两个参数值 ——首先是 `/k` 开关，然后是作为第二个值的 `%ConEmuDir%\..\init.bat`

You should end up with something that looks similar to this[^2]:

你最终应该得到一些类似于如下的结果[^2]：

```javascript
shellArgs: ['--login', '/k', '%ConEmuDir%\..\init.bat'],
env: {
    'ConEmuDir': 'C:\Path\To\Your\ConEmuDir'
},
```

> 译者注： 这种写法必须限制于路径中没有空格，对于 Cmder 本身安装路径中有空格的情况，有更推荐的写法[^3]。

And that's it! If you launch Hyper, you should be greeted with a Cmder esque terminal experience, with the current working directory text colored, and (depending on if you installed this Cmder version) Unix commands like `ls` available.

就是这样！现在你再启动 Hyper，应该就能迎来 Cmder 式的终端体验，拥有彩色的当前工作路径文字，和 Unix 命令支持如 `ls` 等（依赖于你安装了带有这些的 Cmder 版本）。

You may notice that I ommitted the `-new_console:` argument that Cmder uses. I never attempted to use it in my own testing - it may or may not work/play nicely within Hyper, I do not know. Try it if you dare!

你可能注意到我省略了 Cmder 中使用的 `-new_console:` 参数，我从来没有尝试过测试它 —— 这个参数可能或不能在 Hyper 正常工作。如果你爱折腾的话，可以自行尝试它。

The question you may be asking is, "If Cmder on Windows is so good, why would I ever use Hyper?"

看到这儿你可能会问我了，「如果 Cmder 在 Windows 下用得挺好的，为什么我还要用 Hyper？」

I think the answer there is: try them both!

我认为答案应该是：尝试它们两个！

---

**译者补充：**

Hyper 2.0 及以上版本已经修复了[中文显示的问题](https://github.com/zeit/hyper/issues/2124)，但是截止本篇文章写作时，[Hyper.is](https://hyper.is/) 官网中直接下载到的还是 1.4.8 版本，我是直接在官方 GitHub 仓库的 Releases 中找到并 [Hyper 2.0.4 版](https://github.com/zeit/hyper/releases/tag/2.0.4) 的。

[^1]: I'm really not sure *when* `cmd` got tab completion, but it as only writing this post that I fired up `cmd` and noticed that is would autocomplete something like `expl` to `explorer` when I pressed tab. 
[^1]: 我并不是很确定 `cmd` 什么时候有了 <kbd>Tab</kbd> 自动补全功能，只是到了写这篇文章的时候我尝试启动 `cmd` 后才注意到，当我按下 <kbd>Tab</kbd> 时，某些单词能像 `expl` 到 `explorer` 这样自动补全了。
[^2]: Your `.hyper.js` config may not have the `--login` argument in shellArgs, mine did by default so I left it there. I am unsure if `--login` has any meaning in `cmd` or `powershell`… 
[^2]: 你的 `.hyper.js` 配置可能本来就没有 `--login` 参数在 `shellArgs` 的值中，我觉得它是默认的参数，所以把它留下来了。我不确定 `--login` 在 `cmd` 和 `powershell` 中代表什么含义……
[^3]: 直接找到 `init.bat` 的位置，而不再使用相对路径 `%ConEmuDir%\..\init.bat`，把整个 `init.bat` 的绝对路径作为一个环境变量，使用单引号包裹双引号的形式，再把整个环境变量作为参数传入 `shellArgs`。```javascript
shellArgs: ['--login', '/k', '%CmderInit%'],
env: {
  CmderInit: '"C:\\Program Files\\cmder\\vendor\\init.bat"'
},
```


```