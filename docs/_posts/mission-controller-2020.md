---
title: 记录 | 独特的“dlcrel”
date: '2021-11-01 01:22:08'
sidebar: 'false'
categories: 
    - dev
tags:
    - mission creator
publish: true
---

R星大概是在2019年《名钻赌场豪劫》更新后才加入这项功能的。杰拉德的“最后一搏”任务中也启用了这个功能，但是，对于值为“0”和“1”的两种情况来说，它们似乎并不会使得新的任务控制器（“2020版”）被启用。这似乎是因为它们还要兼顾旧版本任务制作器的部分脚本。

从2020年7月的《洛圣都夏日特辑》开始，该项的值被设置为“2”及以上的差事将启用新的任务控制器，同时新的任务制作器组件也将在对应差事的制作器中被启用。

::: warning 注意
每个"dlcrel"都对应一个更新版本的相关内容，修改这个内容可能会导致差事不稳定。
:::

以下是Tez2关于这一内容的一些解释：

::: tip
*Tez2:*

Worth mentioning that the recent update separated the mission controller script into two parts, the old one and the "2020" one.

A friend believes it's an attempt to overcome fixed limitations, but I looked into it a bit more, and it seems like which script type is loaded or requested entirely depends on a single variable called "dlcrel", that was added with the Casino update of last year, which shows how far Rockstar was thinking ahead, implying a clear roadmap of the way ahead into the following year was already established, albeit the virus was unforeseen, which ended up disturbing all their plans. Anyway, it seems like Rockstar would be using the new controller script moving forward with any sort of new missions/jobs. In fact, the yacht missions introduced with this update already use the new script. Interesting enough, the Casino Heist is handled by the old script, which is mainly kept to handle old content.

Overall, this asserts us once again that Rockstar is planning more content on the way forward. I honestly think that a great cause of this move is to save enough space for the upcoming heist that shall take place on entirely new location.
:::

## Code

```c
//07202021
        case 0:
			return "DPAD_GBC_VC";
		
		case 1:
			return "MC_DLC_CH"; // Casino Heist
		
		case 2:
			return "MC_DLC_2020"; // Summer 2020
		
		case 3:
			return "MC_DLC_IH"; // Island Heist
		
		case 4:
			return "MC_DLC_TNR"; // Tuners
		
		default:
```