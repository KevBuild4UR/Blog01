---
title: 记录 | Decompile Scripts
date: '2020-12-30 22:12:36'
sidebar: 'false'
categories: 
    - dev
tags:
    - 解包
publish: true
---
## 方法
使用 OpenIV 导航到 update/update.rpf/x64/levels/gta5/script/script_rel.rpf。
按 Ctrl+A 然后右键单击并选择“Save Content/Export”以将所有脚本导出，并使用[GTA V 脚本反编译器](https://github.com/njames93/GTA-V-Script-Decompiler)。

## 对于 BgScripts
从 [BgScript](http://prod.ros.rockstargames.com/cloud/11/cloudservices/titles/gta5/pcros/bgscripts/bg_ng_xxxx_y.rpf)（这是R星云服务器的地址，其中“11”代表游戏的rosTitleId，详情参见[title_metadata.json](https://gamedownloads-rockstargames-com.akamaized.net/public/title_metadata.json)） 下载 BgScript，其中“xxxx_y”等于游戏版本号，例如bg_ng_2372_0.rpf用于 Build 2372，并通过 OpenIV 提取“valentinerpreward2.ysc.full”。