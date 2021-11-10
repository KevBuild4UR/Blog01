---
title: 游戏模式
sidebar: 'true'
publish: false
---

该页面以表格和游戏内源代码的形式列举了部分已知的游戏模式。它们可以通过使用 Neptune 修改差事的 Sub Game Type 和 Alt Game Type 得到。

**部分由玩家制作的非制作器所支持的游戏模式不能被下载。**

## 部分游戏模式列表

| 游戏类型 | 游戏子类型 | 描述                                               |
|------|-------|--------------------------------------------------|
| 0    | 0     | 标准任务，可通过触发点触发。                                   |
| 0    | 1     | 抢劫准备任务，通常为终章前所需的准备工作。                            |
| 0    | 2     | 联系人任务，只能从差事列表或由特定的联系人触发。                         |
| 0    | 3     | 随机任务，触发点将在一天中特定的时间间隔显示。如"我是程咬金"                  |
| 0    | 4     | 对战任务，以两个或更多团队进行的对战主题任务，玩家将身着特定的对战套装进行。对抗模式基于此模式。 |
| 0    | 5     | 团队生存游戏，只有一条生命的团队生存游戏。                            |
| 0    | 6     | 夺取，包含四种夺取类型和三种游戏结束方式。                            |
| 0    | 7     | 抢劫任务终章。                                          |
| 0    | 10    | 任务，但可设置的道具都是"芝士汉堡"。                              |
| 0    | 12    | 疑似为"自由模式任务"，含商战任务等在自由模式进行的任务。                    |
| 1    | 0     | 死斗游戏，可选"标准"或"团队"方式进行。                            |
| 2    | 0     | 竞速，含多种子类型。                                       |
| 3    | 0     | 生存战，玩家需挺过一波又一波的攻击，争取活到最后。                        |
| 6    | 0     | 帮派攻击，只能在自由模式中触发和进行。                              |
| 8    | 0     | 跳伞竞速。                                            |
| 254  | 0     | 时间挑战赛。（待查证）                                           |
| 255  | 0     | RC 匪徒时间挑战赛。（待查证）                                      |

## 部分相关代码

```c
char* func_759(int iParam0, int iParam1)
{
	switch (iParam0)
	{
		case 0:
			switch (iParam1)
			{
				case 0:
					return "CUSTOM_MISSION";
					break;
				
				case 1:
					return "CUSTOM_MISSION";
					break;
				
				case 2:
					return "CUSTOM_MISSION";
					break;
				
				case 3:
					return "CUSTOM_MISSION";
					break;
				
				case 4:
					return "CUSTOM_MISSION";
					break;
				
				case 5:
					return "LAST_TEAM_STANDING";
					break;
				
				case 6:
					return "CAPTURE_THE_FLAG";
					break;
				
				case 7:
					return "CUSTOM_MISSION";
					break;
			}
			break;
		
		case 7:
			return "LAST_TEAM_STANDING";
			break;
		
		case 3:
			return "SURVIVAL";
			break;
		
		case 8:
			return "BASE_JUMPING";
			break;
		
		case 6:
			return "GANG_ATTACK";
			break;
		
		case 2:
			switch (iParam1)
			{
				case 0:
					return "RACE_LAND";
					break;
				
				case 1:
					return "RACE_LAND";
					break;
				
				case 6:
					return "STUNT_RACE";
					break;
				
				case 7:
					return "STUNT_RACE";
					break;
				
				case 18:
					return "STUNT_RACE";
					break;
				
				case 19:
					return "STUNT_RACE";
					break;
				
				case 2:
					return "RACE_WATER";
					break;
				
				case 3:
					return "RACE_WATER";
					break;
				
				case 4:
					return "RACE_AIR";
					break;
				
				case 5:
					return "RACE_AIR";
					break;
				
				case 12:
					return "RACE_BICYCLE";
					break;
				
				case 13:
					return "RACE_BICYCLE";
					break;
				
				case 20:
					return "STUNT_RACE";
					break;
				
				case 21:
					return "STUNT_RACE";
					break;
				
				case 22:
					return "STUNT_RACE";
					break;
				
				case 23:
					return "STUNT_RACE";
					break;
				
				case 24:
					return "OPEN_WHEEL_RACE";
					break;
				
				case 25:
					return "OPEN_WHEEL_RACE";
					break;
				
				case 26:
					return "PURSUIT_RACE";
				
				case 27:
					return "STREET_RACE";
			}
			break;
		
		case 1:
			switch (iParam1)
			{
				case 0:
					return "DEATHMATCH";
					break;
				
				case 1:
					return "TEAM_DEATHMATCH";
					break;
				
				case 2:
					return "VEHICLE_DEATHMATCH";
					break;
				
				case 3:
					return "KING_OF_THE_HILL";
					break;
				
				case 4:
					return "KING_OF_THE_HILL_TEAMS";
					break;
			}
			break;
	}
	return "";
}

```