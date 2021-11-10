---
title: IPLs
sidebar: 'true'
publish: false
---

## INTs

```c
void func_3062(int* iParam0)
{
	struct<2> Var0;
	
	func_2077(iParam0);
	func_97("FMMC_INT_MENUT");
	func_96(1, 1, 0, 0, 0);
	func_95(1, 2, 1, 1, 1);
	func_2076(0, 1, 0, 0, 0);
	Global_22669 = 0.28f;
	if (func_813(iParam0) == 10)
	{
		func_2076(0, 0, 0, 0, 0);
	}
	if (func_14())
	{
		iParam0->f_258 = 425;
	}
	else
	{
		iParam0->f_258 = 3;
	}
	iParam0->f_526 = 43;
	func_2328(0, Global_4456448.f_23, 28, "FMMC_LOC_ASII", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(1, Global_4456448.f_36, 9, "FMMC_LOC_ASPII", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(2, Global_4456448.f_37, 23, "FMMC_LOC_INSPC", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2391(iParam0, 2, "FMMC_LOC_INSPC", 1);
	func_2323(iParam0, 3, 571, "FMMC_INTD_SBM", 0, 1);
	func_2391(iParam0, 3, "MC_H_INTD_SBM", 0);
	func_91(4, "FMMC_WRP_LOC1", 0, 1, 0, 0, 0);
	if (MISC::IS_BIT_SET(Global_4456448.f_127829, 0))
	{
		StringCopy(&Var0, "FMMC_SEL_YES", 16);
	}
	else
	{
		StringCopy(&Var0, "FMMC_SEL_NO", 16);
	}
	func_91(4, &Var0, 0, 1, 0, 0, 0);
	func_91(5, "FMMC_WRP_LOC2", 0, 1, 0, 0, 0);
	if (MISC::IS_BIT_SET(Global_4456448.f_127829, 1))
	{
		StringCopy(&Var0, "FMMC_SEL_YES", 16);
	}
	else
	{
		StringCopy(&Var0, "FMMC_SEL_NO", 16);
	}
	func_91(5, &Var0, 0, 1, 0, 0, 0);
	func_91(6, "FMMC_WRP_LOC3", 0, 1, 0, 0, 0);
	if (MISC::IS_BIT_SET(Global_4456448.f_127829, 2))
	{
		StringCopy(&Var0, "FMMC_SEL_YES", 16);
	}
	else
	{
		StringCopy(&Var0, "FMMC_SEL_NO", 16);
	}
	func_91(6, &Var0, 0, 1, 0, 0, 0);
	func_91(7, "FMMC_WRP_LOC4", 0, 1, 0, 0, 0);
	if (MISC::IS_BIT_SET(Global_4456448.f_127829, 3))
	{
		StringCopy(&Var0, "FMMC_SEL_YES", 16);
	}
	else
	{
		StringCopy(&Var0, "FMMC_SEL_NO", 16);
	}
	func_91(7, &Var0, 0, 1, 0, 0, 0);
	func_91(8, "FMMC_WRP_CORD", 0, MISC::IS_BIT_SET(Global_4456448.f_127829, 0), 0, 0, 0);
	if (MISC::IS_BIT_SET(Global_4456448.f_127829, 4))
	{
		StringCopy(&Var0, "FMMC_SEL_YES", 16);
	}
	else
	{
		StringCopy(&Var0, "FMMC_SEL_NO", 16);
	}
	func_91(8, &Var0, 0, MISC::IS_BIT_SET(Global_4456448.f_127829, 0), 0, 0, 0);
	func_91(9, "FMMC_WRP_LOC5", 0, 1, 0, 0, 0);
	if (MISC::IS_BIT_SET(Global_4456448.f_127829, 5))
	{
		StringCopy(&Var0, "FMMC_SEL_YES", 16);
	}
	else
	{
		StringCopy(&Var0, "FMMC_SEL_NO", 16);
	}
	func_91(9, &Var0, 0, 1, 0, 0, 0);
	func_91(10, "FMMC_LOC_BUNK", 0, 1, 0, 0, 0);
	iParam0->f_2[10] = 572;
	func_91(11, "FMMC_LOC_MOC", 0, 1, 0, 0, 0);
	iParam0->f_2[11] = 573;
	iParam0->f_526++;
	func_2323(iParam0, 12, 574, "FMMC_LOC_CMOC", 0, 1);
	func_91(13, "FMMC_LOC_SUB", 0, 1, 0, 0, 0);
	iParam0->f_2[13] = 575;
	func_91(14, "FMMC_LOC_IAAF", 0, 1, 0, 0, 0);
	iParam0->f_2[14] = 576;
	func_91(15, "FMMC_LOC_H2OF", 0, 1, 0, 0, 0);
	iParam0->f_2[15] = 577;
	func_2328(16, Global_4456448.f_127829, 9, "FMMC_LOC_LIN", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(17, Global_4456448.f_127829, 10, "FMMC_LOC_FOU", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(18, Global_4456448.f_127829, 20, "FMMC_LOC_HANGR", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(19, Global_4456448.f_127829, 21, "FMMC_LOC_IMPWR", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(20, Global_4456448.f_127829, 22, "FMMC_LOC_WUFAC", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(21, Global_4456448.f_127829, 23, "FMMC_LOC_SPCWS", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(22, Global_4456448.f_127829, 24, "FMMC_LOC_SPCWM", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(23, Global_4456448.f_127829, 25, "FMMC_LOC_SPCWL", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(24, Global_4456448.f_127829, 26, "FMMC_LOC_SAPRT", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(25, Global_4456448.f_127829, 27, "FMMC_LOC_HAPRT", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(26, Global_4456448.f_127829, 28, "FMMC_LOC_MAPRT", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(27, Global_4456448.f_127829, 29, "FMMC_LOC_LAPRT", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(28, Global_4456448.f_127829, 30, "FMMC_LOC_FBOFF", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(29, Global_4456448.f_127829, 31, "FMMC_LOC_FBOFF2", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(30, Global_4456448.f_127830, 0, "FMMC_LOC_FBLOB", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(31, Global_4456448.f_127830, 1, "FMMC_LOC_HEGAR", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(32, Global_4456448.f_127830, 2, "FMMC_LOC_MGAR", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(33, Global_4456448.f_127830, 3, "FMMC_LOC_SGAR", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(34, Global_4456448.f_27, 25, "FMMC_LOC_AAIU", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_91(35, "FMMC_LOC_ARENA", 0, 1, 0, 0, 0);
	iParam0->f_2[35] = 581;
	func_2328(36, Global_4456448.f_127830, 13, "FMMC_LOC_WDFM", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2328(37, Global_4456448.f_127830, 14, "FMMC_LOC_CKFM", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2323(iParam0, 38, 580, "FMMC_LOC_MTHM", 0, 1);
	func_91(39, "FMMC_LOC_CSNO", 0, 1, 0, 0, 0);
	iParam0->f_2[39] = 590;
	func_91(40, "FMMC_LOC_NTCB", 0, 1, 0, 0, 0);
	iParam0->f_2[40] = 593;
	func_2328(41, Global_4456448.f_127831, 9, "FMMC_LOC_TNCM", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2391(iParam0, 41, "MC_H_LOC_TNCM", 0);
	func_2328(42, Global_4456448.f_127831, 10, "FMMC_LOC_TNMG", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	func_2391(iParam0, 42, "MC_H_LOC_TNMG", 0);
}
```

## IPLs

```c
void func_3063(int* iParam0)
{
	func_2077(iParam0);
	func_97("FMMC_IPL_MENUT");
	func_96(1, 1, 0, 0, 0);
	func_95(1, 2, 1, 1, 1);
	func_2076(0, 1, 0, 0, 0);
	if (func_14())
	{
		iParam0->f_258 = 425;
	}
	else
	{
		iParam0->f_258 = 3;
	}
	iParam0->f_526 = 0;
	func_2328(0, Global_4456448.f_127828, 0, "FMMC_IPL_YCT", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(1, Global_4456448.f_127828, 11, "FMMC_IPL_YCTA", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(2, Global_4456448.f_127828, 12, "FMMC_IPL_YCTP", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(3, Global_4456448.f_127828, 2, "FMMC_IPL_YTP", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(4, Global_4456448.f_127828, 4, "FMMC_IPL_YNC", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(5, Global_4456448.f_127828, 1, "FMMC_IPL_ACR", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(6, Global_4456448.f_127828, 3, "FMMC_IPL_FZG", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(7, Global_4456448.f_127828, 5, "FMMC_IPL_MSH", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(8, Global_4456448.f_127828, 6, "FMMC_IPL_FSH", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(9, Global_4456448.f_127828, 7, "FMMC_IPL_GRV", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(10, Global_4456448.f_127828, 8, "FMMC_IPL_TEQ", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(11, Global_4456448.f_127828, 9, "FMMC_IPL_SC3", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(12, Global_4456448.f_127828, 10, "FMMC_IPL_CHF", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(13, Global_4456448.f_127828, 13, "FMMC_IPL_SILO", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(14, Global_4456448.f_127828, 14, "FMMC_IPL_IAADR", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(15, Global_4456448.f_127828, 15, "FMMC_IPL_CASAI", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2328(16, Global_4456448.f_127828, 18, "FMMC_IPL_CSEC", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
	func_2323(iParam0, 17, 578, "FMMC_IPL_ISLD", 0, 1);
	func_2391(iParam0, 17, "MC_H_IPL_ISLD", 1);
	iParam0->f_526++;
	func_2328(18, Global_4456448.f_127828, 20, "FMMC_IPL_BNKRD", "FMMC_SEL_YES", "FMMC_SEL_NO", 1);
	iParam0->f_526++;
}
```