---
title: 记录 | 分支任务机制 & 新规则
date: '2021-11-17 00:10:03'
sidebar: 'false'
categories: 
    - dev
tags:
    - mission creator
publish: true
---

许多官方任务中都有分支任务（同一组差事通过某种方式无缝衔接）或者新规则（同一个差事多个阶段）的机制。比如“太平洋标准差事”离开银行后的桥段、“名钻赌场豪劫”和“佩里科岛抢劫任务”的多样化行动方案，以及“末日将至”等差事前、后两个阶段的无缝对接，都依靠“分支任务”的机制实现。

**这项功能仍然需要研究。**

## 01

```c
void func_3285(int* iParam0)
{
	iParam0->f_4003 = iParam0->f_2378[(iParam0->f_2423 - 1)];
	func_2103(iParam0);
	func_75("FMMC_NEXT_MT");
	func_2170(iParam0->f_4003 + 1);
	func_74(1, 1, 0, 0, 0);
	func_73(1, 2, 1, 1, 1);
	func_2102(0, 1, 0, 0, 0);
	Global_22669 = 0.425f;
	iParam0->f_258 = 557;
	iParam0->f_526 = 2;
	func_69(0, "FMMC_NEXT_MCID", 0, 1, 0, 0, 0);
	func_69(0, "STRING", 1, 1, 0, 0, 0);
	func_2238(&(Global_4456448.f_85852[iParam0->f_4003 /*6*/]), 0, 0, 0);
	iParam0->f_130[0] = 83;
	func_69(1, "FMMC_NEXT_MBT", 0, 1, 0, 0, 0);
	func_69(1, "STRING", 1, 1, 0, 0, 0);
	func_2238(func_3286(Global_4456448.f_85889[iParam0->f_4003]), 0, 0, 0);
}

char* func_3286(int iParam0)
{
	switch (iParam0)
	{
		case 0:
			return "Mocap";
		
		case 1:
			return "Fade Out";
		
		case 2:
			return "Airlock";
		
		default:
	}
	return "INVALID FMMC_BRANCHING_MISSION_TRANSITION_TYPE";
}

void func_3287(int* iParam0)
{
	int iVar0;
	
	func_2103(iParam0);
	func_75("FMMC_NEXTT");
	func_74(1, 0, 0, 0, 0);
	func_73(1, 1, 1, 1, 1);
	func_2102(0, 0, 0, 0, 0);
	iParam0->f_258 = 268;
	iParam0->f_526 = 0;
	iVar0 = 0;
	while (iVar0 <= 5)
	{
		func_3288(iVar0, iVar0, 0);
		iParam0->f_2[iVar0] = 558;
		iParam0->f_526++;
		iVar0++;
	}
}

void func_3288(int iParam0, int iParam1, bool bParam2)
{
	struct<2> Var0;
	
	if (iParam1 >= 6 || iParam1 < 0)
	{
		return;
	}
	if (MISC::IS_STRING_NULL_OR_EMPTY(&(Global_4456448.f_85852[iParam1 /*6*/])))
	{
		func_69(iParam0, "FMMC_NM_MIS_E", 1, 1, 0, 0, 0);
		func_2099(iParam1 + 1, 0);
	}
	else
	{
		func_69(iParam0, "FMMC_NM_MIS", 3, 1, 0, 0, 0);
		func_2099(iParam1 + 1, 0);
		if (bParam2)
		{
			StringCopy(&Var0, HUD::_0x98C3CF913D895111(&(Global_4456448.f_85852[iParam1 /*6*/]), 10), 16);
			StringConCat(&Var0, "...", 16);
			func_2238(&Var0, 0, 0, 0);
		}
		else
		{
			func_2238(&(Global_4456448.f_85852[iParam1 /*6*/]), 0, 0, 0);
		}
		func_2238(func_3286(Global_4456448.f_85889[iParam1]), 0, 0, 0);
	}
}
```

## 02

```c
case 9:
			if (func_3611(uParam0, 0, bParam3, 0))
			{
				func_654(uParam0, 0);
				func_524();
				if ((((func_3605(Global_4456448.f_85535) && func_507(1)) && !bParam9) && !MISC::IS_STRING_NULL_OR_EMPTY(&(Global_4456448.f_85852[0 /*6*/]))) && (func_278() || (func_101() && !func_3604())))
				{
					uParam0->f_8 = 0;
					func_654(uParam0, 19);
					return 0;
				}
				if ((iParam5 || bParam7) && !bParam13)
				{
					if (bParam7 || iParam5)
					{
						uParam0->f_23 = func_3629(0);
						uParam0->f_21 = NETWORK::UGC_GET_CONTENT_FILE_VERSION(0, uParam0->f_23);
					}
					func_3603(&(uParam0->f_42), 0);
					func_654(uParam0, 18);
				}
				else
				{
					uParam0->f_42.f_3 = 1;
					func_653(uParam0, 1, 0);
					func_3685();
					return 1;
				}
			}
			break;
		
		case 19:
			if (NETWORK::UGC_QUERY_BY_CONTENT_ID(&(Global_4456448.f_85852[0 /*6*/]), true, func_531(iParam2)))
			{
				func_654(uParam0, 21);
			}
			break;
		
		case 21:
			if (NETWORK::UGC_HAS_GET_FINISHED())
			{
				uParam0->f_41 = NETWORK::UGC_GET_QUERY_RESULT();
				if (NETWORK::UGC_DID_GET_SUCCEED())
				{
				}
				else
				{
					func_653(uParam0, 1, 1);
					uParam0->f_41 = NETWORK::UGC_GET_QUERY_RESULT();
					*uParam0 = 0;
					func_3685();
					return 1;
				}
				if (NETWORK::UGC_GET_CONTENT_NUM() > 0)
				{
					uParam0->f_5 = NETWORK::UGC_REQUEST_CONTENT_DATA_FROM_INDEX(0, 0);
					DATAFILE::DATAFILE_WATCH_REQUEST_ID(uParam0->f_5);
					func_654(uParam0, 22);
				}
				else
				{
					func_653(uParam0, 1, 1);
					*uParam0 = 0;
					func_3685();
					return 1;
				}
			}
			break;
```

## 03
```c
switch (iParam0)
	{
		case -1:
			return "MC_VAROPT_E_0";
		
		case 0:
			return "MC_VAROPT_E_1";
		
		default:
	}
	return "INVALID";
```