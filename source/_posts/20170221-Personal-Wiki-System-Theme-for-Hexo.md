---
title: Hexo 的个人 Wiki 主题 - Wikitten
date: 2017-02-21 21:35:06
banner:
tags: [Hexo, 博客, Wiki]
categories:
  - 编程开发
  - 服务器
  - Hexo
---

## 起始

一直希望寻找一种相对优雅、我比较喜欢的方式来做**知识管理**，经过**手写笔记本、OneNote、Evernote、为知笔记**等之后，选择用 **个人 Wiki 系统** 来做自己的知识管理。但是天下 Wiki 千千万，到底选哪一种呢？

我试了时下好几个流行的、推荐的比较多的 Wiki 系统，但是多少都有些小细节让我不是很满意。在我的 [Wiki 首页](http://wiki.zthxxx.top/wiki/index/) 可以看到我对知识管理和这几个 Wiki 系统的一些简单的看法，以及为此自己开坑了个 Wiki 的[轮子](https://github.com/zthxxx/hexo-theme-Wikitten)。

## 轮子

先放上上我经过了这些使用之后，整理的自己对 个人 Wiki 系统的需求：

- 界面简洁，排版整齐，有些留白，不要太满
- 部署简单，不需要后台与数据库
- 支持多级分类
- 分类目录可展开和收缩
- 展开分类时可直接看到该分类下所有条目
- 支持全文搜索
- 使用 Markdown 书写
- 适合单人的修改与更新内容
- 最好支持查看历史版本

嗯，所以以上这些也是我自己 Wiki 系统的特性了吧~~

借用 [Hexo 博客系统](https://hexo.io/)的框架，仿照 [Wikitten](https://wikitten.vizuina.com/) 的样式，写了一个符合个人 Wiki 的主题 **【[hexo-theme-Wikitten](https://github.com/zthxxx/hexo-theme-Wikitten)】**。

先放上两个链接：

**我的个人 Wiki 地址：[http://wiki.zthxxx.top/](http://wiki.zthxxx.top/)**

**Wikitten 主题地址：[https://github.com/zthxxx/hexo-theme-Wikitten](https://github.com/zthxxx/hexo-theme-Wikitten)**

再放一个预览的截图：

![Wikitten preview](./preview.jpg)

嘛，样式是跟 victorstanciu 的 [Wikitten](https://wikitten.vizuina.com/) 一样的（人家有 MIT LICENSE 的，并且我提到时也都有注明出处），之所以选择 Wikitten，是因为我觉得这个 Wiki 系统最接近我自己对个人 Wiki 的需求，并且样式也很简洁。不过代码就完全不一样了；人家是 PHP，我这是 Hexo 的主题，不需要后台，可以直接挂在 Github Pages 上，省去了服务器；原本只支持搜索标题的，我也给改到支持全文搜索了。



## 汇总

顺便也说一下我用过的一些 Wiki 系统特点与跟我自己需求的差异吧。



### **[Wikitten](https://wikitten.vizuina.com/)**

- 双栏

- 界面简洁

- 侧边可展开显示所有条目标题

- 支持 Markdown 书写，支持多种语言

- 支持切换到查看源码

- *不可全文搜索，只能搜索标题*

- *需要后台加数据库，部署繁琐*

  ![Wikitten Preview](./WikittenPreview.jpg)



### **[TiddlyWiki](http://tiddlywiki.com/)** 

- 双栏
- 侧边可展开显示所有条目标题
- 全文可搜索
- 功能丰富
- *不支持 Markdown，而是 WikiText*
- *单文件系统*


![TiddlyWiki Preview](./TiddlyWikiPreview.jpg)

### **[MediaWiki](https://www.mediawiki.org/wiki/MediaWiki)**

- 全文可搜索
- 功能丰富，定制程度高
- 重量级，Wiki 系统中最强大
- 支持查看历史版本
- 适合大型项目，多人编辑
- *不支持 Markdown*
- *侧边不可展开显示所有条目标题*
- *界面复杂、臃肿*
- *需要后台与数据库，部署繁琐*

![MediaWiki Preview](./MediaWikiPreview.jpg)



### **[Wiko](http://wzpan.github.io/hexo-theme-wixo/)**

- 同为 Hexo 主题
- 全文可搜索
- 界面简洁
- 支持 Markdown 书写
- *不支持二级分类*
- *侧边不可展开显示所有条目标题*
- *搜索也只可以在首页进行搜索*
- *配色不是很让我喜欢*

![Wixo Preview](./WixoPreview.jpg)



### **[MDwiki](www.mdwiki.net)**

- 界面简洁

- 部署简单

- 支持 Markdown 书写

- *无搜索功能*

- *不支持二级分类*

- *添加分类需手动修改主页顶栏*

- *不可展开显示所有条目标题*

- *纯静态，通过 AJAX 显示不同页面*

  ![MDwiki Preview](./MDWikiPreview.jpg)



### **[VimWiki](http://vimwiki.github.io/)**

- *无搜索功能*
- *不支持 Markdown 语法（但有插件支持）*
- *不习惯 Vim 的人很难适应*

![VimWiki Preview](./VimWikiPreview.jpg)



### **[DokuWiki](https://www.dokuwiki.org/dokuwiki#)**

- 类似 MediaWiki，但没那么强大

![DokuWiki Preview](./DokuWikiPreview.jpg)



### **[Simiki](http://simiki.org/)**

- 单栏
- 界面简洁
- *不支持二级分类*
- *不支持搜索*
- *侧边不可展开显示所有条目标题*
- *搜索也只可以在首页进行搜索*
- 类似 Wixo

![Simiki Preview](SimikiPreview.jpg)

---

## 后续

嘛，看了这么多，总的来说，**[hexo-theme-Wikitten](https://github.com/zthxxx/hexo-theme-Wikitten)** 的轮子还是很符合我自己的使用习惯，希望在用 Hexo 的有需要个人 Wiki 系统的也来使用下这个主题，后续一堆 Bug 和 TODO List 正在维护，欢迎有兴趣的来提提 Pull request。





