---
title: 其它 | 杂项
date: '2021-12-22 23:00:00'
categories: 
    - dev
tags:
    - decompiled scripts
publish: true
---

## 01
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

## 02
```c
if ((((((((((((((((MISC::ARE_STRINGS_EQUAL(sParam0, "QwBYuaosIk-ZB9sAs4T6vQ") || MISC::ARE_STRINGS_EQUAL(sParam0, "O8SUrTkPW0G7NVh-c95lPQ")) || MISC::ARE_STRINGS_EQUAL(sParam0, "Cdgvsa-E8katW71P6VWhQg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "W3U0oyo5okGvED-f7CPzhg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "7CpnaZYqMEKxxbW2rbp33A")) || MISC::ARE_STRINGS_EQUAL(sParam0, "d_cLbuKs0kyVu6VWc3tfQg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "hCC18F4SuU254v5vlgPRmA")) || MISC::ARE_STRINGS_EQUAL(sParam0, "tSm64WIuK0yqti6Po8oQCg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "5mwusUtO5E6AVvnUrgFZcg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "_dFdLIICm0OaNP3ewdkmqA")) || MISC::ARE_STRINGS_EQUAL(sParam0, "cfWCTF0bH0W0JmM3kP3TPg")) || MISC::ARE_STRINGS_EQUAL(sParam0, "JVlkjgsbUk6pHcrN43FPgQ")) || MISC::ARE_STRINGS_EQUAL(sParam0, "AdOvPsvI30yZ6h9HpjzcwA")) || MISC::ARE_STRINGS_EQUAL(sParam0, "te4f3O-vVUOkF3YAbnzD2A")) || MISC::ARE_STRINGS_EQUAL(sParam0, "8jRfzi-oHEGHiJEQLkbZ_w")) || MISC::ARE_STRINGS_EQUAL(sParam0, "gYOgjaTS7EedRGFuBasioQ")) || MISC::ARE_STRINGS_EQUAL(sParam0, "OGuQ53X7G0qx-jteU3gBkg"))
	{
		return 1;
	}
	return 0;
```

## 03
```c
void func_4165(int* iParam0, int iParam1, char* sParam2)
{
	int iVar0;
	struct<2> Var1;
	int iVar5;
	bool bVar6;
	int iVar7;
	int iVar8;
	int iVar19;
	int iVar20;
	bool bVar21;
	int iVar22;
	struct<2> Var23;
	
	func_2676(iParam0);
	func_2674(sParam2);
	Global_22829 = 0.375f;
	if (((func_1751() || func_1076()) || func_5412()) || func_598())
	{
		iParam0->f_267 = 3;
		iParam0->f_538 = 9;
	}
	else if (func_2793())
	{
		iParam0->f_267 = 3;
		iParam0->f_538 = 9;
	}
	else
	{
		iParam0->f_267 = 75;
		iParam0->f_535 = 0;
	}
	func_2675(0, 0, 0, 0, 0);
	func_2673(1, 4, 0, 0, 0);
	func_2672(1, 2, 1, 1, 1);
	iVar0 = 0;
	while (iVar0 <= (func_3455(Global_4718592.f_77711, iParam1) - 1))
	{
		iVar5 = func_3453(iParam1, iVar0, -1, 0);
		if (iVar5 == joaat("sanchez"))
		{
			StringCopy(&Var1, "SANCHEZ", 16);
		}
		else if (iVar5 == joaat("sanchez2"))
		{
			StringCopy(&Var1, "FMMC_VEH_SANCL", 16);
		}
		else if (iVar5 == joaat("speeder"))
		{
			StringCopy(&Var1, "FMMC_VEH_SPDR", 16);
		}
		else
		{
			StringCopy(&Var1, func_2482(iVar5), 16);
		}
		bVar6 = false;
		if ((iVar5 == joaat("hotknife") || iVar5 == joaat("carbonrs")) || iVar5 == joaat("khamelion"))
		{
			if (func_365())
			{
				func_2668(iVar0, "FMMC_AVAIL_CE", 1, 1, 0, 0, 0);
			}
			else
			{
				func_2668(iVar0, "FMMC_AVAIL_CE", 1, 0, 0, 0, 0);
			}
			func_3381(&Var1, 0);
			bVar6 = true;
		}
		else
		{
			func_2668(iVar0, &Var1, 0, 1, 0, 0, 0);
			bVar6 = true;
		}
		if (bVar6)
		{
			if (MISC::IS_BIT_SET(Global_4718592.f_77719[iParam1], iVar0))
			{
				func_3244(iVar0, 7, 0);
			}
			else
			{
				func_3244(iVar0, 5, 0);
			}
			if (func_4182(iParam0, iParam1, -1) && iVar0 == iParam0->f_536)
			{
				iParam0->f_139[iVar0] = 26;
				iParam0->f_3006 = 24;
			}
			else
			{
				iParam0->f_139[iVar0] = 24;
			}
			iParam0->f_535++;
		}
		iVar0++;
	}
	iVar7 = FILES::GET_NUM_DLC_VEHICLES();
	iVar0 = 0;
	while (iVar0 < func_4181(Global_4718592.f_77711, iParam1, 0, 0, 1))
	{
		iVar19 = func_3448(iParam1, iVar0, Global_4718592.f_77711, 0);
		if ((!func_343() && func_4180(iVar19)) && iVar19 != joaat("limo2"))
		{
			iVar19 = 0;
		}
		if (func_4179(iVar19))
		{
			if (func_342() || Global_262145.f_20079)
			{
				bVar21 = true;
			}
			func_2668(iParam0->f_535, VEHICLE::GET_DISPLAY_NAME_FROM_VEHICLE_MODEL(iVar19), 0, bVar21, 0, 0, 0);
			if (func_4182(iParam0, iParam1, iVar0) && iVar0 == iParam0->f_536)
			{
				iParam0->f_139[iParam0->f_535] = 26;
				iParam0->f_3006 = 25;
			}
			else
			{
				iParam0->f_139[iParam0->f_535] = 25;
			}
			if (MISC::IS_BIT_SET(Global_4718592.f_77743[iParam1 /*4*/][func_165(iVar0)], func_588(iVar0)))
			{
				func_3244(iParam0->f_535, 5, 0);
			}
			else
			{
				func_3244(iParam0->f_535, 7, 0);
			}
			iParam0->f_535++;
		}
		else if (iVar19 != 0 && STREAMING::IS_MODEL_A_VEHICLE(iVar19))
		{
			iVar20 = 0;
			while (iVar20 <= (iVar7 - 1))
			{
				if (func_4177(iVar19))
				{
					iVar22 = 1;
				}
				if (iVar19 == FILES::GET_DLC_VEHICLE_MODEL(iVar20) || iVar22)
				{
					if (FILES::GET_DLC_VEHICLE_DATA(iVar20, &iVar8))
					{
						StringCopy(&Var1, func_2482(iVar19), 16);
						if ((((LOCALIZATION::GET_CURRENT_LANGUAGE() == 7 || LOCALIZATION::GET_CURRENT_LANGUAGE() == 8) || LOCALIZATION::GET_CURRENT_LANGUAGE() == 9) || LOCALIZATION::GET_CURRENT_LANGUAGE() == 10) || LOCALIZATION::GET_CURRENT_LANGUAGE() == 12)
						{
							StringCopy(&Var23, "STRING", 16);
						}
						else if (((iVar19 == joaat("bifta") || iVar19 == joaat("kalahari")) || iVar19 == joaat("paradise")) || iVar19 == joaat("speeder"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_BB", 16);
						}
						else if (((iVar19 == joaat("turismor") || iVar19 == joaat("alpha")) || iVar19 == joaat("vestra")) || iVar19 == joaat("jester"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_BP", 16);
						}
						else if (((iVar19 == joaat("massacro") || iVar19 == joaat("zentorno")) || iVar19 == joaat("huntley")) || iVar19 == joaat("thrust"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_HL", 16);
						}
						else if (iVar19 == joaat("btype"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_VP", 16);
						}
						else if (((((iVar19 == joaat("rhapsody") || iVar19 == joaat("panto")) || iVar19 == joaat("glendale")) || iVar19 == joaat("warrener")) || iVar19 == joaat("blade")) || iVar19 == joaat("pigalle"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_HP", 16);
						}
						else if (((iVar19 == joaat("coquette2") || iVar19 == joaat("miljet")) || iVar19 == joaat("besra")) || iVar19 == joaat("swift"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_PS", 16);
						}
						else if (iVar19 == joaat("monster") || iVar19 == joaat("sovereign"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_ID", 16);
						}
						else if ((((((((((((iVar19 == joaat("gburrito2") || iVar19 == joaat("hydra")) || iVar19 == joaat("casco")) || iVar19 == joaat("valkyrie")) || iVar19 == joaat("guardian")) || iVar19 == joaat("insurgent2")) || iVar19 == joaat("savage")) || iVar19 == joaat("enduro")) || iVar19 == joaat("kuruma")) || iVar19 == joaat("kuruma2")) || iVar19 == joaat("lectro")) || iVar19 == joaat("technical")) || iVar19 == joaat("insurgent"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_FH", 16);
						}
						else if ((iVar19 == joaat("innovation") || iVar19 == joaat("hakuchou")) || iVar19 == joaat("furoregt"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_LT", 16);
						}
						else if (((iVar19 == joaat("jester2") || iVar19 == joaat("massacro2")) || iVar19 == joaat("ratloader2")) || iVar19 == joaat("slamvan"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_XM2", 16);
						}
						else if (((((iVar19 == joaat("swift2") || iVar19 == joaat("luxor2")) || iVar19 == joaat("feltzer3")) || iVar19 == joaat("osiris")) || iVar19 == joaat("virgo")) || iVar19 == joaat("windsor"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_LUX", 16);
						}
						else if (((((iVar19 == joaat("t20") || iVar19 == joaat("vindicator")) || iVar19 == joaat("chino")) || iVar19 == joaat("coquette3")) || iVar19 == joaat("toro")) || iVar19 == joaat("brawler"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_LUX2", 16);
						}
						else if ((((((iVar19 == joaat("faction") || iVar19 == joaat("faction2")) || iVar19 == joaat("moonbeam2")) || iVar19 == joaat("primo2")) || iVar19 == joaat("chino2")) || iVar19 == joaat("voodoo")) || iVar19 == joaat("buccaneer2"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_LOW", 16);
						}
						else if (iVar19 == joaat("btype2") || iVar19 == joaat("lurcher"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_HAL", 16);
						}
						else if (((((((((((((((((((iVar19 == joaat("nightshade") || iVar19 == joaat("mamba")) || iVar19 == joaat("verlierer2")) || iVar19 == joaat("schafter3")) || iVar19 == joaat("schafter4")) || iVar19 == joaat("schafter5")) || iVar19 == joaat("schafter6")) || iVar19 == joaat("baller3")) || iVar19 == joaat("baller4")) || iVar19 == joaat("baller5")) || iVar19 == joaat("baller6")) || iVar19 == joaat("speeder2")) || iVar19 == joaat("seashark3")) || iVar19 == joaat("supervolito")) || iVar19 == joaat("supervolito2")) || iVar19 == joaat("cog55")) || iVar19 == joaat("cog552")) || iVar19 == joaat("cognoscenti")) || iVar19 == joaat("cognoscenti2")) || iVar19 == joaat("limo2"))
						{
							if (GRAPHICS::GET_IS_WIDESCREEN())
							{
								StringCopy(&Var23, "FMMC_AVAIL_MGN8", 16);
							}
							else
							{
								StringCopy(&Var23, "MC_AVAIL_MGN8_S", 16);
							}
						}
						else if (iVar19 == joaat("banshee2") || iVar19 == joaat("sultanrs"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_JAN", 16);
						}
						else if ((((((iVar19 == joaat("sabregt2") || iVar19 == joaat("faction3")) || iVar19 == joaat("virgo2")) || iVar19 == joaat("virgo3")) || iVar19 == joaat("minivan2")) || iVar19 == joaat("tornado5")) || iVar19 == joaat("slamvan3"))
						{
							StringCopy(&Var23, "FMMC_AVAIL_LOW2", 16);
						}
						else if ((((((((((((iVar19 == joaat("prototipo") || iVar19 == joaat("seven70")) || iVar19 == joaat("pfister811")) || iVar19 == joaat("bestiagts")) || iVar19 == joaat("prototipo")) || iVar19 == joaat("rumpo3")) || iVar19 == joaat("volatus")) || iVar19 == joaat("fmj")) || iVar19 == joaat("windsor2")) || iVar19 == joaat("xls")) || iVar19 == joaat("xls2")) || iVar19 == joaat("nimbus")) || iVar19 == joaat("reaper"))
						{
							if (GRAPHICS::GET_IS_WIDESCREEN())
							{
								StringCopy(&Var23, "FMMC_AVAIL_EXEC", 16);
							}
							else
							{
								StringCopy(&Var23, "MC_AVAIL_EXEC_S", 16);
							}
						}
						else if ((((((((((((((((((iVar19 == joaat("trophytruck") || iVar19 == joaat("bf400")) || iVar19 == joaat("cliffhanger")) || iVar19 == joaat("contender")) || iVar19 == joaat("omnis")) || iVar19 == joaat("tropos")) || iVar19 == joaat("le7b")) || iVar19 == joaat("trophytruck2")) || iVar19 == joaat("rallytruck")) || iVar19 == joaat("brioso")) || iVar19 == joaat("tampa2")) || iVar19 == joaat("gauntlet2")) || iVar19 == joaat("stalion2")) || iVar19 == joaat("dominator2")) || iVar19 == joaat("buffalo3")) || iVar19 == joaat("tyrus")) || iVar19 == joaat("sheava")) || iVar19 == joaat("lynx")) || iVar19 == joaat("gargoyle"))
						{
							StringCopy(&Var23, "MC_AVAIL_STUNT", 16);
						}
						else if (((((((((((((((((((((iVar19 == joaat("esskey") || iVar19 == joaat("nightblade")) || iVar19 == joaat("defiler")) || iVar19 == joaat("avarus")) || iVar19 == joaat("zombiea")) || iVar19 == joaat("zombieb")) || iVar19 == joaat("ratbike")) || iVar19 == joaat("daemon2")) || iVar19 == joaat("shotaro")) || iVar19 == joaat("chimera")) || iVar19 == joaat("raptor")) || iVar19 == joaat("blazer4")) || iVar19 == joaat("manchez")) || iVar19 == joaat("sanctus")) || iVar19 == joaat("vortex")) || iVar19 == joaat("wolfsbane")) || iVar19 == joaat("hakuchou2")) || iVar19 == joaat("youga2")) || iVar19 == joaat("tornado6")) || iVar19 == joaat("hakuchou2")) || iVar19 == joaat("youga2")) || iVar19 == joaat("faggio"))
						{
							StringCopy(&Var23, "MC_AVAIL_BIKER", 16);
						}
						else if ((((((((((((((((((((((((iVar19 == joaat("wastelander") || iVar19 == joaat("ruiner2")) || iVar19 == joaat("elegy2")) || iVar19 == joaat("elegy")) || iVar19 == joaat("comet2")) || iVar19 == joaat("comet3")) || iVar19 == joaat("tempesta")) || iVar19 == joaat("italigtb")) || iVar19 == joaat("italigtb2")) || iVar19 == joaat("nero")) || iVar19 == joaat("nero2")) || iVar19 == joaat("specter")) || iVar19 == joaat("specter2")) || iVar19 == joaat("penetrator")) || iVar19 == joaat("voltic2")) || iVar19 == joaat("dune4")) || iVar19 == joaat("dune5")) || iVar19 == joaat("technical2")) || iVar19 == joaat("blazer5")) || iVar19 == joaat("diablous")) || iVar19 == joaat("diablous2")) || iVar19 == joaat("fcr")) || iVar19 == joaat("fcr2")) || iVar19 == joaat("boxville5")) || iVar19 == joaat("phantom2"))
						{
							StringCopy(&Var23, "MC_AVAIL_IMPEX", 16);
						}
						else if ((((iVar19 == joaat("gp1") || iVar19 == joaat("ruston")) || iVar19 == joaat("infernus2")) || iVar19 == joaat("turismo2")) || iVar19 == joaat("dukes2"))
						{
							if (GRAPHICS::GET_IS_WIDESCREEN())
							{
								StringCopy(&Var23, "MC_AVAIL_SPERAC", 16);
							}
							else
							{
								StringCopy(&Var23, "MC_AVAIL_SPR_S", 16);
							}
						}
						else if ((((((((((((((iVar19 == joaat("vagner") || iVar19 == joaat("xa21")) || iVar19 == joaat("cheetah2")) || iVar19 == joaat("torero")) || iVar19 == joaat("oppressor")) || iVar19 == joaat("technical2")) || iVar19 == joaat("technical3")) || iVar19 == joaat("dune3")) || iVar19 == joaat("dune4")) || iVar19 == joaat("halftrack")) || iVar19 == joaat("apc")) || iVar19 == joaat("insurgent2")) || iVar19 == joaat("insurgent3")) || iVar19 == joaat("nightshark")) || iVar19 == joaat("ardent"))
						{
							StringCopy(&Var23, "MC_AVAIL_GNRN", 16);
						}
						else if ((((((((((((((((((iVar19 == joaat("microlight") || iVar19 == joaat("mogul")) || iVar19 == joaat("rogue")) || iVar19 == joaat("seabreeze")) || iVar19 == joaat("starling")) || iVar19 == joaat("alphaz1")) || iVar19 == joaat("howard")) || iVar19 == joaat("molotok")) || iVar19 == joaat("nokota")) || iVar19 == joaat("pyro")) || iVar19 == joaat("tula")) || iVar19 == joaat("havok")) || iVar19 == joaat("hunter")) || iVar19 == joaat("bombushka")) || iVar19 == joaat("visione")) || iVar19 == joaat("retinue")) || iVar19 == joaat("cyclone")) || iVar19 == joaat("rapidgt3")) || iVar19 == joaat("vigilante"))
						{
							StringCopy(&Var23, "MC_AVAIL_SMUG", 16);
						}
						else if ((((((((((((((((((((((iVar19 == joaat("raiden") || iVar19 == joaat("yosemite")) || iVar19 == joaat("riata")) || iVar19 == joaat("pariah")) || iVar19 == joaat("sentinel3")) || iVar19 == joaat("streiter")) || iVar19 == joaat("hermes")) || iVar19 == joaat("autarch")) || iVar19 == joaat("gt500")) || iVar19 == joaat("neon")) || iVar19 == joaat("z190")) || iVar19 == joaat("hustler")) || iVar19 == joaat("comet5")) || iVar19 == joaat("kamacho")) || iVar19 == joaat("sc1")) || iVar19 == joaat("comet4")) || iVar19 == joaat("revolter")) || iVar19 == joaat("savestra")) || iVar19 == joaat("viseris")) || iVar19 == joaat("deluxo")) || iVar19 == joaat("stromberg")) || iVar19 == joaat("thruster")) || iVar19 == joaat("barrage"))
						{
							StringCopy(&Var23, "MC_AVAIL_NHP", 16);
						}
						else if (((((((((((iVar19 == joaat("issi3") || iVar19 == joaat("gb200")) || iVar19 == joaat("fagaloa")) || iVar19 == joaat("michelli")) || iVar19 == joaat("flashgt")) || iVar19 == joaat("ellie")) || iVar19 == joaat("hotring")) || iVar19 == joaat("tezeract")) || iVar19 == joaat("seasparrow")) || iVar19 == joaat("caracara")) || iVar19 == joaat("taipan")) || iVar19 == joaat("entity2"))
						{
							StringCopy(&Var23, "MC_AVAIL_AST", 16);
						}
						else if (((((((((((((iVar19 == joaat("speedo4") || iVar19 == joaat("mule4")) || iVar19 == joaat("pounder2")) || iVar19 == joaat("oppressor2")) || iVar19 == joaat("menacer")) || iVar19 == joaat("scramjet")) || iVar19 == joaat("patriot2")) || iVar19 == joaat("stafford")) || iVar19 == joaat("freecrawler")) || iVar19 == joaat("swinger")) || iVar19 == joaat("pbus2")) || iVar19 == joaat("blimp3")) || iVar19 == joaat("jester3")) || iVar19 == joaat("strikeforce"))
						{
							StringCopy(&Var23, "MC_AVAIL_AH", 16);
						}
						else if ((((((((((((((((((((iVar19 == joaat("deviant") || iVar19 == joaat("schlagen")) || iVar19 == joaat("vamos")) || iVar19 == joaat("toros")) || iVar19 == joaat("clique")) || iVar19 == joaat("deveste")) || iVar19 == joaat("impaler")) || iVar19 == joaat("scarab")) || iVar19 == joaat("italigto")) || iVar19 == joaat("rcbandito")) || func_4176(iVar19)) || func_4175(iVar19)) || func_4174(iVar19)) || func_4173(iVar19)) || func_4172(iVar19)) || func_4171(iVar19)) || func_4170(iVar19)) || func_4169(iVar19)) || func_4168(iVar19)) || func_4167(iVar19)) || func_4166(iVar19))
						{
							StringCopy(&Var23, "MC_AVAIL_AW", 16);
						}
						else if (((((((((((((((((iVar19 == joaat("thrax") || iVar19 == joaat("drafter")) || iVar19 == joaat("gauntlet3")) || iVar19 == joaat("issi7")) || iVar19 == joaat("zion3")) || iVar19 == joaat("nebula")) || iVar19 == joaat("hellion")) || iVar19 == joaat("dynasty")) || iVar19 == joaat("locust")) || iVar19 == joaat("novak")) || iVar19 == joaat("zorrusso")) || iVar19 == joaat("gauntlet4")) || iVar19 == joaat("caracara2")) || iVar19 == joaat("krieger")) || iVar19 == joaat("emerus")) || iVar19 == joaat("s80")) || iVar19 == joaat("rrocket")) || iVar19 == joaat("paragon2"))
						{
							StringCopy(&Var23, "MC_AVAIL_CS", 16);
						}
						else if (((((((((((((((((((iVar19 == joaat("formula") || iVar19 == joaat("rancherxl")) || iVar19 == joaat("asbo")) || iVar19 == joaat("imorgon")) || iVar19 == joaat("kanjo")) || iVar19 == joaat("rebla")) || iVar19 == joaat("sugoi")) || iVar19 == joaat("vstr")) || iVar19 == joaat("zhaba")) || iVar19 == joaat("komoda")) || iVar19 == joaat("retinue2")) || iVar19 == joaat("furia")) || iVar19 == joaat("yosemite2")) || iVar19 == joaat("everon")) || iVar19 == joaat("vagrant")) || iVar19 == joaat("outlaw")) || iVar19 == joaat("stryder")) || iVar19 == joaat("sultan2")) || iVar19 == joaat("zhaba")) || iVar19 == joaat("jb7002"))
						{
							StringCopy(&Var23, "MC_AVAIL_CH", 16);
						}
						else if (((((((((((((((iVar19 == joaat("gauntlet5") || iVar19 == joaat("dukes3")) || iVar19 == joaat("club")) || iVar19 == joaat("peyote3")) || iVar19 == joaat("yosemite3")) || iVar19 == joaat("rebel2")) || iVar19 == joaat("glendale2")) || iVar19 == joaat("landstalker2")) || iVar19 == joaat("manana2")) || iVar19 == joaat("penumbra2")) || iVar19 == joaat("seminole2")) || iVar19 == joaat("youga3")) || iVar19 == joaat("openwheel1")) || iVar19 == joaat("openwheel2")) || iVar19 == joaat("tigon")) || iVar19 == joaat("seashark3"))
						{
							StringCopy(&Var23, "MC_AVAIL_SM2", 16);
						}
						else if ((((((((((iVar19 == joaat("italirsx") || iVar19 == joaat("weevil")) || iVar19 == joaat("brioso2")) || iVar19 == joaat("slamtruck")) || iVar19 == joaat("longfin")) || iVar19 == joaat("winky")) || iVar19 == joaat("verus")) || iVar19 == joaat("manchez2")) || iVar19 == joaat("squaddie")) || iVar19 == joaat("veto")) || iVar19 == joaat("veto2"))
						{
							StringCopy(&Var23, "MC_AVAIL_IH", 16);
						}
						else if ((((((((((((((((iVar19 == joaat("calico") || iVar19 == joaat("jester4")) || iVar19 == joaat("zr350")) || iVar19 == joaat("remus")) || iVar19 == joaat("vectre")) || iVar19 == joaat("cypher")) || iVar19 == joaat("dominator7")) || iVar19 == joaat("comet6")) || iVar19 == joaat("warrener2")) || iVar19 == joaat("rt3000")) || iVar19 == joaat("tailgater2")) || iVar19 == joaat("sultan3")) || iVar19 == joaat("futo2")) || iVar19 == joaat("dominator8")) || iVar19 == joaat("previon")) || iVar19 == joaat("euros")) || iVar19 == joaat("growler"))
						{
							StringCopy(&Var23, "MC_AVAIL_TNR", 16);
						}
						else if ((((((((((((((iVar19 == joaat("granger2") || iVar19 == joaat("ignus")) || iVar19 == joaat("deity")) || iVar19 == joaat("buffalo4")) || iVar19 == joaat("astron")) || iVar19 == joaat("comet7")) || iVar19 == joaat("baller7")) || iVar19 == joaat("jubilee")) || iVar19 == joaat("cinquemila")) || iVar19 == joaat("iwagen")) || iVar19 == joaat("zeno")) || iVar19 == joaat("champion")) || iVar19 == joaat("patriot3")) || iVar19 == joaat("reever")) || iVar19 == joaat("shinobi"))
						{
							StringCopy(&Var23, "MC_AVAIL_FXR", 16);
						}
						if (iVar19 == joaat("speeder"))
						{
							func_2668(iParam0->f_535, &Var1, 1, 1, 0, 0, 0);
						}
						else if (FILES::IS_CONTENT_ITEM_LOCKED(iVar8))
						{
							func_2668(iParam0->f_535, &Var23, 1, 0, 0, 0, 0);
						}
						else
						{
							func_2668(iParam0->f_535, &Var23, 1, 1, 0, 0, 0);
						}
						func_3381(&Var1, 0);
						if (MISC::IS_BIT_SET(Global_4718592.f_77743[iParam1 /*4*/][func_165(iVar0)], func_588(iVar0)))
						{
							func_3244(iParam0->f_535, 5, 0);
						}
						else
						{
							func_3244(iParam0->f_535, 7, 0);
						}
						if (func_4182(iParam0, iParam1, iVar0) && iVar0 == iParam0->f_536)
						{
							iParam0->f_139[iParam0->f_535] = 26;
							iParam0->f_3006 = 25;
						}
						else
						{
							iParam0->f_139[iParam0->f_535] = 25;
						}
						iParam0->f_535++;
						iVar20 = iVar7;
					}
				}
				iVar20++;
			}
		}
		iVar0++;
	}
}
```
