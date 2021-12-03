---
title: 其它 | 杂项
date: '2021-12-01 00:00:00'
categories: 
    - dev
tags:
    - decompiled scripts
publish: true
---

## 云服务器上的 UGC 目录
```c
switch (iParam0)
	{
		case 0:
			return "gta5mission";
		
		case 1:
			return "playlist";
		
		case 2:
			return "lifeinvaderpost";
		
		case 3:
			return "photo";
		
		case 4:
			return "challenge";
		
		default:
	}
	return "gta5mission";
```

## 奇怪的像cid一样的东西
```c
if ((((((((((((((((MISC::ARE_STRINGS_EQUAL(sParam0, "QwBYuaosIk-ZB9sAs4T6vQ") || MISC::ARE_STRINGS_EQUAL(sParam0, "O8SUrTkPW0G7NVh-c95lPQ")) || MISC::ARE_STRINGS_EQUAL(sParam0, "Cdgvsa-E8katW71P6VWhQg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "W3U0oyo5okGvED-f7CPzhg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "7CpnaZYqMEKxxbW2rbp33A")) || MISC::ARE_STRINGS_EQUAL(sParam0, "d_cLbuKs0kyVu6VWc3tfQg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "hCC18F4SuU254v5vlgPRmA")) || MISC::ARE_STRINGS_EQUAL(sParam0, "tSm64WIuK0yqti6Po8oQCg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "5mwusUtO5E6AVvnUrgFZcg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "_dFdLIICm0OaNP3ewdkmqA")) || MISC::ARE_STRINGS_EQUAL(sParam0, "cfWCTF0bH0W0JmM3kP3TPg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "JVlkjgsbUk6pHcrN43FPgQ")) || MISC::ARE_STRINGS_EQUAL(sParam0, "AdOvPsvI30yZ6h9HpjzcwA")) || MISC::ARE_STRINGS_EQUAL(sParam0, "te4f3O-vVUOkF3YAbnzD2A")) || MISC::ARE_STRINGS_EQUAL(sParam0, "8jRfzi-oHEGHiJEQLkbZ_w")) || MISC::ARE_STRINGS_EQUAL(sParam0, "gYOgjaTS7EedRGFuBasioQ")) || MISC::ARE_STRINGS_EQUAL(sParam0, "OGuQ53X7G0qx-jteU3gBkg"))
	{
		return 1;
	}
	return 0;
```
