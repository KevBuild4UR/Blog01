---
title: Game modes
sidebar: 'true'
publish: false
---

This page lists some known game modes in the form of tables and source code. They can be obtained by using Neptune to modify the Sub Game Type and Alt Game Type of the job.

**Some game modes made by players that are not supported by the creator cannot be downloaded. **

## Game modes

| Type | Subtype | Description                                               |
|------|-------|--------------------------------------------------|
| 0    | 0     | Mission                                   |
| 0    | 1     | Heist Prep                            |
| 0    | 2     | Contact Missions                         |
| 0    | 3     | Random Missions                 |
| 0    | 4     | Versus Missions (Adversary Mode) |
| 0    | 5     | Last Team Standing                            |
| 0    | 6     | Capture                            |
| 0    | 7     | Heist Finale                                          |
| 0    | 10    | Unknown                              |
| 0    | 12    | Freemode Missions                    |
| 1    | 0     | Deathmatch                            |
| 2    | 0     | Race                                       |
| 3    | 0     | Survival                        |
| 6    | 0     | Gang Attack                              |
| 8    | 0     | Parachuting                                            |
| 254  | 0     | Time Trial                                           |
| 255  | 0     | RC Bandito Time Trial                                      |

## Code

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