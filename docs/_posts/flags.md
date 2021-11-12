---
title: 整理 | Flags
date: '2021-11-12 23:20:37'
sidebar: 'false'
categories: 
    - dev
tags:
    - flags
publish: false
---

"technical info"

## 01
```csharp
if (flag4)
			{
				this.LabelSwapDescription.Text = "Team Details - Settings";
			}
			else
			{
				bool flag5 = text == "teamv";
				if (flag5)
				{
					this.LabelSwapDescription.Text = "Team Details - Team Respawn Vehicle";
				}
				else
				{
					bool flag6 = text == "tenms";
					if (flag6)
					{
						this.LabelSwapDescription.Text = "Team Details - Team Name";
					}
					else
					{
						bool flag7 = text == "tmt";
						if (flag7)
						{
							this.LabelSwapDescription.Text = "Details - Time Limit";
						}
						else
						{
							bool flag8 = text == "wchg";
							if (flag8)
							{
								this.LabelSwapDescription.Text = "Team Details - Wanted Level";
							}
							else
							{
								bool flag9 = text == "accu";
								if (flag9)
								{
									this.LabelSwapDescription.Text = "Actors - Accuracy";
								}
								else
								{
									bool flag10 = text == "dmv";
									if (flag10)
									{
										this.LabelSwapDescription.Text = "Actors - Variation";
									}
									else
									{
										bool flag11 = text == "drge";
										if (flag11)
										{
											this.LabelSwapDescription.Text = "Actors - Dialogue: Range";
										}
										else
										{
											bool flag12 = text == "flee";
											if (flag12)
											{
												this.LabelSwapDescription.Text = "Actors - Will Flee";
											}
											else
											{
												bool flag13 = text == "foll";
												if (flag13)
												{
													this.LabelSwapDescription.Text = "Actors - Follow Player";
												}
												else
												{
													bool flag14 = text == "group";
													if (flag14)
													{
														this.LabelSwapDescription.Text = "Actors - Relationships";
													}
													else
													{
														bool flag15 = text == "gun";
														if (flag15)
														{
															this.LabelSwapDescription.Text = "Actors - Weapon Model";
														}
														else
														{
															bool flag16 = text == "hlt" || text == "lghlt";
															if (flag16)
															{
																this.LabelSwapDescription.Text = "Actors - Health";
															}
															else
															{
																bool flag17 = text == "iaim";
																if (flag17)
																{
																	this.LabelSwapDescription.Text = "Actors - Idle Action";
																}
																else
																{
																	bool flag18 = text.Contains("pbs") && !text.Contains("prp");
																	if (flag18)
																	{
																		this.LabelSwapDescription.Text = "Actors - Settings";
																	}
																	else
																	{
																		bool flag19 = text == "pcash";
																		if (flag19)
																		{
																			this.LabelSwapDescription.Text = "Actors - Cash Owned";
																		}
																		else
																		{
																			bool flag20 = text == "pedbc";
																			if (flag20)
																			{
																				this.LabelSwapDescription.Text = "Actors - Blip Color";
																			}
																			else
																			{
																				bool flag21 = text == "pedcr";
																				if (flag21)
																				{
																					this.LabelSwapDescription.Text = "Actors - Associated Rule: Cleaned Up At Rule";
																				}
																				else
																				{
																					bool flag22 = text == "pedct";
																					if (flag22)
																					{
																						this.LabelSwapDescription.Text = "Actors - Associated Rule: Cleaned Up By Team";
																					}
																					else
																					{
																						bool flag23 = text == "spawn";
																						if (flag23)
																						{
																							this.LabelSwapDescription.Text = "Actors - Associated Rule: Team Settings - Spawn On";
																						}
																						else
																						{
																							bool flag24 = text == "whost";
																							if (flag24)
																							{
																								this.LabelSwapDescription.Text = "Actors - Weapon Holsetered";
																							}
																							else
																							{
																								bool flag25 = text.Contains("intop") || text == "iplop";
																								if (flag25)
																								{
																									this.LabelSwapDescription.Text = "Details - Load Interiors";
																								}
																								else
																								{
																									bool flag26 = text == "ivm";
																									if (flag26)
																									{
																										this.LabelSwapDescription.Text = "Details - Default Vehicle";
																									}
																									else
																									{
																										bool flag27 = text.Contains("menubs");
																										if (flag27)
																										{
																											this.LabelSwapDescription.Text = "Details - Settings";
																										}
																										else
																										{
																											bool flag28 = text == "minNu";
																											if (flag28)
																											{
																												this.LabelSwapDescription.Text = "Details - Minimum Players";
																											}
																											else
																											{
																												bool flag29 = text == "numRounds";
																												if (flag29)
																												{
																													this.LabelSwapDescription.Text = "Details - First to Win";
																												}
																												else
																												{
																													bool flag30 = text == "optbs";
																													if (flag30)
																													{
																														this.LabelSwapDescription.Text = "Details - Capture Type";
																													}
																													else
																													{
																														bool flag31 = text == "trel";
																														if (flag31)
																														{
																															this.LabelSwapDescription.Text = "Team Details - Settings";
																														}
																														else
																														{
																															bool flag32 = text == "vcpr";
																															if (flag32)
																															{
																																this.LabelSwapDescription.Text = "Lobby Camera - Rotation";
																															}
																															else
																															{
																																bool flag33 = text == "obb";
																																if (flag33)
																																{
																																	this.LabelSwapDescription.Text = "Objects - Blip Style";
																																}
																																else
																																{
																																	bool flag34 = text == "dprop";
																																	if (flag34)
																																	{
																																		this.LabelSwapDescription.Text = "Dynamic Props";
																																	}
																																	else
																																	{
																																		bool flag35 = text == "prcra";
																																		if (flag35)
																																		{
																																			this.LabelSwapDescription.Text = "Props - Associated Rule";
																																		}
																																		else
																																		{
																																			bool flag36 = text == "prpclr";
																																			if (flag36)
																																			{
																																				this.LabelSwapDescription.Text = "Props - Color";
																																			}
																																			else
																																			{
																																				bool flag37 = text.Contains("prpbs");
																																				if (flag37)
																																				{
																																					this.LabelSwapDescription.Text = "Props - Settings";
																																				}
																																				else
																																				{
																																					bool flag38 = text == "prpcr";
																																					if (flag38)
																																					{
																																						this.LabelSwapDescription.Text = "Props - Associated Rule: Cleaned Up At Rule";
																																					}
																																					else
																																					{
																																						bool flag39 = text == "prpct";
																																						if (flag39)
																																						{
																																							this.LabelSwapDescription.Text = "Props - Associated Rule: Cleaned Up By Team";
																																						}
																																						else
																																						{
																																							bool flag40 = text == "prpsba";
																																							if (flag40)
																																							{
																																								this.LabelSwapDescription.Text = "Props - Speed Pad Intensity";
																																							}
																																							else
																																							{
																																								bool flag41 = text == "adlc" || text == "aveh" || text == "clbs";
																																								if (flag41)
																																								{
																																									this.LabelSwapDescription.Text = "Race Details - Available Vehicles";
																																								}
																																								else
																																								{
																																									bool flag42 = text == "gtar";
																																									if (flag42)
																																									{
																																										this.LabelSwapDescription.Text = "Race Details - Race Type";
																																									}
																																									else
																																									{
																																										bool flag43 = text == "icv";
																																										if (flag43)
																																										{
																																											this.LabelSwapDescription.Text = "Race Details - Default Class";
																																										}
																																										else
																																										{
																																											bool flag44 = text == "ptp";
																																											if (flag44)
																																											{
																																												this.LabelSwapDescription.Text = "Race Details - Route Type";
																																											}
																																											else
																																											{
																																												bool flag45 = text == "rdis";
																																												if (flag45)
																																												{
																																													this.LabelSwapDescription.Text = "Race Details - Route Length";
																																												}
																																												else
																																												{
																																													bool flag46 = text == "trfmvm";
																																													if (flag46)
																																													{
																																														this.LabelSwapDescription.Text = "Race Details - Transform Vehicle List";
																																													}
																																													else
																																													{
																																														bool flag47 = text == "burst";
																																														if (flag47)
																																														{
																																															this.LabelSwapDescription.Text = "Vehicles - Tire Type";
																																														}
																																														else
																																														{
																																															bool flag48 = text == "col";
																																															if (flag48)
																																															{
																																																this.LabelSwapDescription.Text = "Vehicles - Primary Color";
																																															}
																																															else
																																															{
																																																bool flag49 = text == "col2";
																																																if (flag49)
																																																{
																																																	this.LabelSwapDescription.Text = "Vehicles - Secondary Color";
																																																}
																																																else
																																																{
																																																	bool flag50 = text == "colc";
																																																	if (flag50)
																																																	{
																																																		this.LabelSwapDescription.Text = "Vehicles - Pearlescent Color";
																																																	}
																																																	else
																																																	{
																																																		bool flag51 = text == "drbs" || text == "vbs" || text.Contains("vebs");
																																																		if (flag51)
																																																		{
																																																			this.LabelSwapDescription.Text = "Vehicles - Settings";
																																																		}
																																																		else
																																																		{
																																																			bool flag52 = text == "liv";
																																																			if (flag52)
																																																			{
																																																				this.LabelSwapDescription.Text = "Vehicles - Livery";
																																																			}
																																																			else
																																																			{
																																																				bool flag53 = text == "vhcra";
																																																				if (flag53)
																																																				{
																																																					this.LabelSwapDescription.Text = "Vehicles - Associated Rule";
																																																				}
																																																				else
																																																				{
																																																					bool flag54 = text == "vehbc";
																																																					if (flag54)
																																																					{
																																																						this.LabelSwapDescription.Text = "Vehicles - Blip Color";
																																																					}
																																																					else
																																																					{
																																																						bool flag55 = text == "vehcr";
																																																						if (flag55)
																																																						{
																																																							this.LabelSwapDescription.Text = "Vehicles - Associated Rule: Cleaned Up At Rule";
																																																						}
																																																						else
																																																						{
																																																							bool flag56 = text == "vehct";
																																																							if (flag56)
																																																							{
																																																								this.LabelSwapDescription.Text = "Vehicles - Associated Rule: Cleaned Up  By Team";
																																																							}
																																																							else
																																																							{
																																																								bool flag57 = text == "vmodairc";
																																																								if (flag57)
																																																								{
																																																									this.LabelSwapDescription.Text = "Vehicles - Weaponized Vehicle Mods: Air Counter Measure";
																																																								}
																																																								else
																																																								{
																																																									bool flag58 = text == "vmodarm";
																																																									if (flag58)
																																																									{
																																																										this.LabelSwapDescription.Text = "Vehicles - Weaponized Vehicle Mods: Item 2";
																																																									}
																																																									else
																																																									{
																																																										bool flag59 = text == "vmodBomb";
																																																										if (flag59)
																																																										{
																																																											this.LabelSwapDescription.Text = "Vehicles - Weaponized Vehicle Mods: Bomb Bay";
																																																										}
																																																										else
																																																										{
																																																											bool flag60 = text == "vmodtur";
																																																											if (flag60)
																																																											{
																																																												this.LabelSwapDescription.Text = "Vehicles - Weaponized Vehicle Mods: Item 1";
																																																											}
																																																											else
																																																											{
																																																												bool flag61 = text == "col3";
																																																												if (flag61)
																																																												{
																																																													this.LabelSwapDescription.Text = "Vehicles - Weaponized Vehicle Mods Exhaust";
																																																												}
																																																												else
																																																												{
																																																													bool flag62 = text == "clip";
																																																													if (flag62)
																																																													{
																																																														this.LabelSwapDescription.Text = "Weapons - Ammo";
																																																													}
																																																													else
																																																													{
																																																														bool flag63 = text == "pal";
																																																														if (flag63)
																																																														{
																																																															this.LabelSwapDescription.Text = "Details - Forced Weapon";
																																																														}
																																																														else
																																																														{
																																																															bool flag64 = text == "sub";
																																																															if (flag64)
																																																															{
																																																																this.LabelSwapDescription.Text = "Weapons - Subtype";
																																																															}
																																																															else
																																																															{
																																																																bool flag65 = text == "vput";
																																																																if (flag65)
																																																																{
																																																																	this.LabelSwapDescription.Text = "Weapons - Vehicle Weapon Pickup Type";
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
```

## 02
```csharp
private void AddItems(int index)
		{
			bool flag = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString().Contains("irbs4") && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
			if (flag)
			{
				bool flag2 = !this.ListDetailsTeamSettings.Items.Contains("Player Can Drop the Object");
				if (flag2)
				{
					this.ListDetailsTeamSettings.Items.Add("Player Can Drop the Object");
					this.ListDetailsTeamSettings.Items.Add("Disable Handbrake");
					this.ListDetailsTeamSettings.Items.Add("Disable All Weapons");
					this.ListDetailsTeamSettings.Items.Add("Freeze Vehicle When Player Is Inside It");
				}
			}
			else
			{
				bool flag3 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString().Contains("irbs5") && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
				if (flag3)
				{
					bool flag4 = !this.ListDetailsTeamSettings.Items.Contains("Thermal Vision");
					if (flag4)
					{
						this.ListDetailsTeamSettings.Items.Add("Thermal Vision");
						this.ListDetailsTeamSettings.Items.Add("Beast");
					}
				}
				else
				{
					bool flag5 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString().Contains("irbs7") && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
					if (flag5)
					{
						bool flag6 = !this.ListDetailsTeamSettings.Items.Contains("Fast Time");
						if (flag6)
						{
							this.ListDetailsTeamSettings.Items.Add("Fast Time");
						}
					}
					else
					{
						bool flag7 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString().Contains("irbs10") && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
						if (flag7)
						{
							bool flag8 = !this.ListDetailsTeamSettings.Items.Contains("Disable Bike Jump");
							if (flag8)
							{
								this.ListDetailsTeamSettings.Items.Add("Disable Bike Jump");
								this.ListDetailsTeamSettings.Items.Add("Reverse Only (Vehicle)");
							}
						}
						else
						{
							bool flag9 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString().Contains("irbs11") && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
							if (flag9)
							{
								bool flag10 = !this.ListDetailsTeamSettings.Items.Contains("Can't Exit a Vehicle");
								if (flag10)
								{
									this.ListDetailsTeamSettings.Items.Add("Can't Exit a Vehicle");
									this.ListDetailsTeamSettings.Items.Add("Teleport Into Nearest Vehicle");
								}
							}
							else
							{
								bool flag11 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "menubs5" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
								if (flag11)
								{
									this.ListDetailsMoreSettings.Items.Add("Deadline");
								}
								else
								{
									bool flag12 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "menubs6" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
									if (flag12)
									{
										this.ListDetailsMoreSettings.Items.Add("Start Round With a Klaxon");
									}
									else
									{
										bool flag13 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "menubs7" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
										if (flag13)
										{
											this.ListDetailsMoreSettings.Items.Add("Klaxon When a Team Scores a Point and When Round Winner");
										}
										else
										{
											bool flag14 = (this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "prpclr" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString())) || (this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "prpsba" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString()));
											if (flag14)
											{
												this.ListStaticPropList_SelectedIndexChanged(this.ListStaticPropList, null);
											}
											else
											{
												bool flag15 = (this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "trfmvm" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString())) || (this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "prpsba" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString()));
												if (flag15)
												{
													this.GroupDetailsTransformVehicleList.Visible = true;
												}
												else
												{
													bool flag16 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString().Contains("pbs8") && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
													if (flag16)
													{
														bool flag17 = !this.ListActorMoreSettings.Items.Contains("Boat Blip");
														if (flag17)
														{
															this.ListActorMoreSettings.Items.Add("Boat Blip");
														}
													}
													else
													{
														bool flag18 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString().Contains("pbs9") && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
														if (flag18)
														{
															bool flag19 = !this.ListActorMoreSettings.Items.Contains("Stealth Mode");
															if (flag19)
															{
																this.ListActorMoreSettings.Items.Add("Stealth Mode");
															}
														}
														else
														{
															bool flag20 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vbs4" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
															if (flag20)
															{
																this.ListVehicleMoreSettings.Items.Add("Arrow Above");
																this.ListVehicleMoreSettings.Items.Add("Lock Front Left Door");
																this.ListVehicleMoreSettings.Items.Add("Lock Front Right Door");
																this.ListVehicleMoreSettings.Items.Add("Indestructible");
																this.ListVehicleMoreSettings.Items.Add("Freeze");
															}
															else
															{
																bool flag21 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vbs5" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																if (flag21)
																{
																	this.ListVehicleMoreSettings.Items.Add("Handbrake Pulled");
																	this.ListVehicleMoreSettings.Items.Add("Running Engine That Stops");
																	this.ListVehicleMoreSettings.Items.Add("Rear-Firing Mortar (Weaponized Tampa)");
																	this.ListVehicleMoreSettings.Items.Add("Missile Launcher (Weaponized Tampa)");
																}
																else
																{
																	bool flag22 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vbs6" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																	if (flag22)
																	{
																		this.ListVehicleMoreSettings.Items.Add("Bomb Bay");
																		this.ListVehicleMoreSettings.Items.Add("Disable Weapon Selection");
																		this.ListVehicleMoreSettings.Items.Add("Disable Vehicle Access (Y)");
																		this.ListVehicleMoreSettings.Items.Add("Indestructible (Except Collision)");
																		this.ListVehicleMoreSettings.Items.Add("Indestructible (Except Collision & Fire)");
																		this.ListVehicleMoreSettings.Items.Add("Transparent Like When Respawning (Only When Player Is on Foot)");
																	}
																	else
																	{
																		bool flag23 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vbs7" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																		if (flag23)
																		{
																			this.ListVehicleMoreSettings.Items.Add("Explodes After 15 Seconds (If Nobody Inside)");
																			this.ListVehicleMoreSettings.Items.Add("On Fire");
																			this.ListVehicleMoreSettings.Items.Add("Add Object: Green Crate");
																			this.ListVehicleMoreSettings.Items.Add("Enable Hover (Deluxo)");
																		}
																		else
																		{
																			bool flag24 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vmodtur" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																			if (flag24)
																			{
																				this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Item 1: Level 1");
																				this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Item 1: Level 2");
																				this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Item 1: Level 3");
																			}
																			else
																			{
																				bool flag25 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vmodarm" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																				if (flag25)
																				{
																					this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Item 2: Level 1");
																					this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Item 2: Level 2");
																					this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Item 2: Level 3");
																				}
																				else
																				{
																					bool flag26 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vmodBomb" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																					if (flag26)
																					{
																						this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Bomb Bay: Standard Bombs");
																						this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Bomb Bay: Incendiary Bombs");
																						this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Bomb Bay: Gas Bombs");
																						this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Bomb Bay: Cluster Bombs");
																					}
																					else
																					{
																						bool flag27 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vmodairc" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																						if (flag27)
																						{
																							this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Air Counter Measure: Chaff");
																							this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Air Counter Measure: Decoy Flares");
																						}
																						else
																						{
																							bool flag28 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "col3" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																							if (flag28)
																							{
																								this.ListVehicleMoreSettings.Items.Add("Weaponized Vehicle Mods - Exhaust: Afterburner");
																							}
																							else
																							{
																								bool flag29 = this.GridSwapVariablesResults.Rows[index].Cells[2].Value.ToString() == "vput" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[index].Cells[0].Value.ToString());
																								if (flag29)
																								{
																									this.TabWeaponModel.TabPages.Add(this.PageWeaponModelVehicleWeaponPickup);
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
```

## 03
```csharp
bool flag = (string)this.ListOutfit.SelectedItem == "Custom";
			if (flag)
			{
				this.i = (int)this.NumericOutfit.Value;
			}
			else
			{
				bool flag2 = (string)this.ListOutfit.SelectedItem == "Default";
				if (flag2)
				{
					this.i = 0;
				}
				else
				{
					bool flag3 = (string)this.ListOutfit.SelectedItem == "Cop 1";
					if (flag3)
					{
						this.i = 99;
					}
					else
					{
						bool flag4 = (string)this.ListOutfit.SelectedItem == "Cop 2";
						if (flag4)
						{
							this.i = 198;
						}
						else
						{
							bool flag5 = (string)this.ListOutfit.SelectedItem == "Deadline Purple";
							if (flag5)
							{
								this.i = 898;
							}
							else
							{
								bool flag6 = (string)this.ListOutfit.SelectedItem == "Deadline Orange";
								if (flag6)
								{
									this.i = 899;
								}
								else
								{
									bool flag7 = (string)this.ListOutfit.SelectedItem == "Deadline Green";
									if (flag7)
									{
										this.i = 900;
									}
									else
									{
										bool flag8 = (string)this.ListOutfit.SelectedItem == "Deadline Pink";
										if (flag8)
										{
											this.i = 901;
										}
										else
										{
											bool flag9 = (string)this.ListOutfit.SelectedItem == "Paramemic Blue";
											if (flag9)
											{
												this.i = 1195;
											}
											else
											{
												bool flag10 = (string)this.ListOutfit.SelectedItem == "Paramemic Blue 2";
												if (flag10)
												{
													this.i = 1196;
												}
												else
												{
													bool flag11 = (string)this.ListOutfit.SelectedItem == "Paramemic Green";
													if (flag11)
													{
														this.i = 1197;
													}
													else
													{
														bool flag12 = (string)this.ListOutfit.SelectedItem == "Paramemic Green 2";
														if (flag12)
														{
															this.i = 1198;
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
```

## 04
```csharp
bool flag = (string)this.ListTeamName.SelectedItem == "Default";
			if (flag)
			{
				this.byteSingle = 0;
			}
			else
			{
				bool flag2 = (string)this.ListTeamName.SelectedItem == "Snipers";
				if (flag2)
				{
					this.byteSingle = 1;
				}
				else
				{
					bool flag3 = (string)this.ListTeamName.SelectedItem == "Transporters";
					if (flag3)
					{
						this.byteSingle = 2;
					}
					else
					{
						bool flag4 = (string)this.ListTeamName.SelectedItem == "Lookouts";
						if (flag4)
						{
							this.byteSingle = 3;
						}
						else
						{
							bool flag5 = (string)this.ListTeamName.SelectedItem == "Defenders";
							if (flag5)
							{
								this.byteSingle = 4;
							}
							else
							{
								bool flag6 = (string)this.ListTeamName.SelectedItem == "Attackers";
								if (flag6)
								{
									this.byteSingle = 5;
								}
								else
								{
									bool flag7 = (string)this.ListTeamName.SelectedItem == "Hackers";
									if (flag7)
									{
										this.byteSingle = 6;
									}
									else
									{
										bool flag8 = (string)this.ListTeamName.SelectedItem == "Demolition";
										if (flag8)
										{
											this.byteSingle = 7;
										}
										else
										{
											bool flag9 = (string)this.ListTeamName.SelectedItem == "Runner";
											if (flag9)
											{
												this.byteSingle = 8;
											}
											else
											{
												bool flag10 = (string)this.ListTeamName.SelectedItem == "Gunmen";
												if (flag10)
												{
													this.byteSingle = 9;
												}
												else
												{
													bool flag11 = (string)this.ListTeamName.SelectedItem == "Bodyguards";
													if (flag11)
													{
														this.byteSingle = 10;
													}
													else
													{
														bool flag12 = (string)this.ListTeamName.SelectedItem == "Pilots";
														if (flag12)
														{
															this.byteSingle = 11;
														}
														else
														{
															bool flag13 = (string)this.ListTeamName.SelectedItem == "Drivers";
															if (flag13)
															{
																this.byteSingle = 12;
															}
															else
															{
																bool flag14 = (string)this.ListTeamName.SelectedItem == "Hunters";
																if (flag14)
																{
																	this.byteSingle = 13;
																}
																else
																{
																	bool flag15 = (string)this.ListTeamName.SelectedItem == "Runners";
																	if (flag15)
																	{
																		this.byteSingle = 14;
																	}
																	else
																	{
																		bool flag16 = (string)this.ListTeamName.SelectedItem == "Crims";
																		if (flag16)
																		{
																			this.byteSingle = 15;
																		}
																		else
																		{
																			bool flag17 = (string)this.ListTeamName.SelectedItem == "Goons";
																			if (flag17)
																			{
																				this.byteSingle = 16;
																			}
																			else
																			{
																				bool flag18 = (string)this.ListTeamName.SelectedItem == "Outlaws";
																				if (flag18)
																				{
																					this.byteSingle = 17;
																				}
																				else
																				{
																					bool flag19 = (string)this.ListTeamName.SelectedItem == "Thugs";
																					if (flag19)
																					{
																						this.byteSingle = 18;
																					}
																					else
																					{
																						bool flag20 = (string)this.ListTeamName.SelectedItem == "Negotiator";
																						if (flag20)
																						{
																							this.byteSingle = 19;
																						}
																						else
																						{
																							bool flag21 = (string)this.ListTeamName.SelectedItem == "Lookout (North)";
																							if (flag21)
																							{
																								this.byteSingle = 20;
																							}
																							else
																							{
																								bool flag22 = (string)this.ListTeamName.SelectedItem == "Lookout (South)";
																								if (flag22)
																								{
																									this.byteSingle = 21;
																								}
																								else
																								{
																									bool flag23 = (string)this.ListTeamName.SelectedItem == "Bodyguard";
																									if (flag23)
																									{
																										this.byteSingle = 22;
																									}
																									else
																									{
																										bool flag24 = (string)this.ListTeamName.SelectedItem == "Aerial Gunner";
																										if (flag24)
																										{
																											this.byteSingle = 23;
																										}
																										else
																										{
																											bool flag25 = (string)this.ListTeamName.SelectedItem == "Ground Team";
																											if (flag25)
																											{
																												this.byteSingle = 24;
																											}
																											else
																											{
																												bool flag26 = (string)this.ListTeamName.SelectedItem == "Casanova";
																												if (flag26)
																												{
																													this.byteSingle = 25;
																												}
																												else
																												{
																													bool flag27 = (string)this.ListTeamName.SelectedItem == "Wingmen";
																													if (flag27)
																													{
																														this.byteSingle = 26;
																													}
																													else
																													{
																														bool flag28 = (string)this.ListTeamName.SelectedItem == "Crowd Control";
																														if (flag28)
																														{
																															this.byteSingle = 27;
																														}
																														else
																														{
																															bool flag29 = (string)this.ListTeamName.SelectedItem == "Explosives";
																															if (flag29)
																															{
																																this.byteSingle = 28;
																															}
																															else
																															{
																																bool flag30 = (string)this.ListTeamName.SelectedItem == "Carrier";
																																if (flag30)
																																{
																																	this.byteSingle = 29;
																																}
																																else
																																{
																																	bool flag31 = (string)this.ListTeamName.SelectedItem == "Blocker";
																																	if (flag31)
																																	{
																																		this.byteSingle = 30;
																																	}
																																	else
																																	{
																																		bool flag32 = (string)this.ListTeamName.SelectedItem == "Pilot";
																																		if (flag32)
																																		{
																																			this.byteSingle = 31;
																																		}
																																		else
																																		{
																																			bool flag33 = (string)this.ListTeamName.SelectedItem == "Driver";
																																			if (flag33)
																																			{
																																				this.byteSingle = 32;
																																			}
																																			else
																																			{
																																				bool flag34 = (string)this.ListTeamName.SelectedItem == "Sniper";
																																				if (flag34)
																																				{
																																					this.byteSingle = 33;
																																				}
																																				else
																																				{
																																					bool flag35 = (string)this.ListTeamName.SelectedItem == "Transporter";
																																					if (flag35)
																																					{
																																						this.byteSingle = 34;
																																					}
																																					else
																																					{
																																						bool flag36 = (string)this.ListTeamName.SelectedItem == "Surveillance";
																																						if (flag36)
																																						{
																																							this.byteSingle = 35;
																																						}
																																						else
																																						{
																																							bool flag37 = (string)this.ListTeamName.SelectedItem == "Blue Coats";
																																							if (flag37)
																																							{
																																								this.byteSingle = 36;
																																							}
																																							else
																																							{
																																								bool flag38 = (string)this.ListTeamName.SelectedItem == "Red Coats";
																																								if (flag38)
																																								{
																																									this.byteSingle = 37;
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
```

## 05
```csharp
byte b = 0;
				byte b2 = 0;
				byte b3 = 0;
				byte b4 = 0;
				byte b5 = 0;
				byte b6 = 0;
				byte b7 = 0;
				byte b8 = 0;
				byte b9 = 0;
				byte b10 = 0;
				byte b11 = 0;
				byte b12 = 0;
				byte b13 = 0;
				byte b14 = 0;
				foreach (object obj in this.ListDetailsTeamSettings.SelectedItems)
				{
					string a = (string)obj;
					bool flag = a == "HUD - Remove Time + Informations";
					if (flag)
					{
						b2 += 1;
					}
					bool flag2 = a == "Night Vision When Round Starts";
					if (flag2)
					{
						b2 += 64;
					}
					bool flag3 = a == "Night Vision When Objective Is Captured";
					if (flag3)
					{
						b2 += 128;
					}
					bool flag4 = a == "Can't Move";
					if (flag4)
					{
						b += 1;
					}
					bool flag5 = a == "HUD - Remove Minimap";
					if (flag5)
					{
						b += 128;
					}
					bool flag6 = a == "Player Can Drop the Object";
					if (flag6)
					{
						b7 += 32;
					}
					bool flag7 = a == "Disable Handbrake";
					if (flag7)
					{
						b6 += 1;
					}
					bool flag8 = a == "Disable All Weapons";
					if (flag8)
					{
						b5 += 128;
					}
					bool flag9 = a == "Freeze Vehicle When Player Is Inside It";
					if (flag9)
					{
						b4 += 128;
					}
					bool flag10 = a == "Thermal Vision";
					if (flag10)
					{
						b9 += 2;
					}
					bool flag11 = a == "Beast";
					if (flag11)
					{
						b8 += 8;
						b9 += 121;
						b10 += 128;
					}
					bool flag12 = a == "Fast Time";
					if (flag12)
					{
						b11 += 16;
					}
					bool flag13 = a == "Disable Bike Jump";
					if (flag13)
					{
						b12 += 12;
					}
					bool flag14 = a == "Reverse Only (Vehicle)";
					if (flag14)
					{
						b13 += 48;
					}
					bool flag15 = a == "Can't Exit a Vehicle";
					if (flag15)
					{
						b14 += 16;
					}
					bool flag16 = a == "Teleport Into Nearest Vehicle";
					if (flag16)
					{
						b14 += 64;
					}
				}
```

## 06
```csharp
byte b = 16;
			byte b2 = 0;
			byte b3 = 5;
			byte b4 = 0;
			byte b5 = 0;
			byte b6 = 0;
			byte b7 = 0;
			byte b8 = 0;
			byte b9 = 0;
			byte b10 = 0;
			foreach (object obj in this.ListActorMoreSettings.SelectedItems)
			{
				string a = (string)obj;
				bool flag = a == "Stationnary until combat";
				if (flag)
				{
					b3 -= 1;
				}
				bool flag2 = a == "Free Movement During Combat";
				if (flag2)
				{
					b3 += 2;
				}
				bool flag3 = a == "Rockets Only Against Vehicles";
				if (flag3)
				{
					b3 -= 4;
				}
				bool flag4 = a == "Don't Flee Drop Offs";
				if (flag4)
				{
					b3 += 8;
				}
				bool flag5 = a == "Walk Until Combat";
				if (flag5)
				{
					b2 += 2;
				}
				bool flag6 = a == "Hover At Destination";
				if (flag6)
				{
					b2 += 32;
				}
				bool flag7 = a == "Insult the Player";
				if (flag7)
				{
					b += 2;
				}
				bool flag8 = a == "Use Combat Goto";
				if (flag8)
				{
					b += 4;
				}
				bool flag9 = a == "Dies in Water";
				if (flag9)
				{
					b -= 16;
				}
				bool flag10 = a == "Solid Blip";
				if (flag10)
				{
					b6 += 128;
				}
				bool flag11 = a == "Stop Dropped Weapon Firing";
				if (flag11)
				{
					b5 += 64;
				}
				bool flag12 = a == "Strange Ragdoll";
				if (flag12)
				{
					b5 += 4;
				}
				bool flag13 = a == "Invincible";
				if (flag13)
				{
					b4 += 2;
				}
				bool flag14 = a == "Disappearance";
				if (flag14)
				{
					b8 += 64;
				}
				bool flag15 = a == "Dead";
				if (flag15)
				{
					b7 += 32;
				}
				bool flag16 = this.CheckXboxOneSwap.Checked && this.GroupXboxOneSwap.Text == "Swap Variables";
				if (flag16)
				{
					bool flag17 = a == "Boat Blip";
					if (flag17)
					{
						b9 += 128;
					}
					bool flag18 = a == "Stealth Mode";
					if (flag18)
					{
						b10 += 16;
					}
				}
```

## 07
```csharp
try
			{
				this.Working();
				byte b = 0;
				byte b2 = 0;
				byte b3 = 0;
				byte b4 = 0;
				byte b5 = 0;
				byte b6 = 0;
				byte b7 = 0;
				byte b8 = 0;
				byte b9 = 0;
				byte b10 = 0;
				byte b11 = 0;
				byte b12 = 0;
				byte b13 = 0;
				byte b14 = 0;
				byte b15 = 0;
				byte b16 = 0;
				byte b17 = 0;
				byte b18 = 0;
				string value = "FFFFFFFF";
				string value2 = "FFFFFFFF";
				string value3 = "FFFFFFFF";
				string value4 = "FFFFFFFF";
				string value5 = "FFFFFFFF";
				foreach (object obj in this.ListVehicleMoreSettings.SelectedItems)
				{
					string a2 = (string)obj;
					bool flag3 = a2 == "Front Left Door Open";
					if (flag3)
					{
						b3 += 1;
					}
					bool flag4 = a2 == "Front Right Door Open";
					if (flag4)
					{
						b3 += 2;
					}
					bool flag5 = a2 == "Rear Left Door Open";
					if (flag5)
					{
						b3 += 4;
					}
					bool flag6 = a2 == "Rear Right Door Open";
					if (flag6)
					{
						b3 += 8;
					}
					bool flag7 = a2 == "Hood Open";
					if (flag7)
					{
						b3 += 16;
					}
					bool flag8 = a2 == "Trunk Open";
					if (flag8)
					{
						b3 += 32;
					}
					bool flag9 = a2 == "Headlights";
					if (flag9)
					{
						b3 += 64;
					}
					bool flag10 = a2 == "All Doors Locked";
					if (flag10)
					{
						b3 += 128;
					}
					bool flag11 = a2 == "Add Object: Weed Pile";
					if (flag11)
					{
						b4 += 1;
					}
					bool flag12 = a2 == "Add Object: Wooden Box Pile 2";
					if (flag12)
					{
						b4 += 2;
					}
					bool flag13 = a2 == "Add Object: Rack Server";
					if (flag13)
					{
						b4 += 8;
					}
					bool flag14 = a2 == "Add Object: Explosive Crate Pile";
					if (flag14)
					{
						b2 = 2;
					}
					bool flag15 = a2 == "Add Object: Wooden Box Pile 1";
					if (flag15)
					{
						b2 = 4;
					}
					bool flag16 = a2 == "Add Object: Cargo Pile";
					if (flag16)
					{
						b2 = 8;
					}
					bool flag17 = a2 == "Add Object: 2 Explosive Crates";
					if (flag17)
					{
						b5 += 16;
					}
					bool flag18 = a2 == "Add Object: Rack Server (Full)";
					if (flag18)
					{
						b6 += 1;
					}
					bool flag19 = a2 == "Add Object: Blue Crate Pile";
					if (flag19)
					{
						b6 += 8;
					}
					bool flag20 = this.CheckXboxOneSwap.Checked && this.GroupXboxOneSwap.Text == "Swap Variables";
					if (flag20)
					{
						bool flag21 = a2 == "Freeze";
						if (flag21)
						{
							b7 += 1;
						}
						bool flag22 = a2 == "Arrow Above";
						if (flag22)
						{
							b7 += 2;
						}
						bool flag23 = a2 == "Lock Front Left Door";
						if (flag23)
						{
							b8 += 2;
						}
						bool flag24 = a2 == "Lock Front Right Door";
						if (flag24)
						{
							b8 += 4;
						}
						bool flag25 = a2 == "Indestructible";
						if (flag25)
						{
							b9 += 32;
						}
						bool flag26 = a2 == "Rear-Firing Mortar (Weaponized Tampa)";
						if (flag26)
						{
							b10 += 16;
						}
						bool flag27 = a2 == "Missile Launcher (Weaponized Tampa)";
						if (flag27)
						{
							b10 += 32;
						}
						bool flag28 = a2 == "Handbrake Pulled";
						if (flag28)
						{
							b11 += 2;
						}
						bool flag29 = a2 == "Running Engine That Stops";
						if (flag29)
						{
							b12 += 1;
						}
						bool flag30 = a2 == "Disable Weapon Selection";
						if (flag30)
						{
							b13 += 8;
						}
						bool flag31 = a2 == "Bomb Bay";
						if (flag31)
						{
							b13 += 32;
						}
						bool flag32 = a2 == "Indestructible (Except Collision)";
						if (flag32)
						{
							b13 += 128;
						}
						bool flag33 = a2 == "Transparent Like When Respawning (Only When Player Is on Foot)";
						if (flag33)
						{
							b14 += 32;
						}
						bool flag34 = a2 == "Disable Vehicle Access (Y)";
						if (flag34)
						{
							b15 += 16;
						}
						bool flag35 = a2 == "Indestructible (Except Collision & Fire)";
						if (flag35)
						{
							b15 += 64;
						}
						bool flag36 = a2 == "Add Object: Green Crate";
						if (flag36)
						{
							b16 += 1;
						}
						bool flag37 = a2 == "Enable Hover (Deluxo)";
						if (flag37)
						{
							b17 += 16;
						}
						bool flag38 = a2 == "Explodes After 15 Seconds (If Nobody Inside)";
						if (flag38)
						{
							b17 += 64;
						}
						bool flag39 = a2 == "On Fire";
						if (flag39)
						{
							b18 += 32;
						}
						bool flag40 = a2 == "Weaponized Vehicle Mods - Item 1: Level 1";
						if (flag40)
						{
							value = "00000000";
						}
						bool flag41 = a2 == "Weaponized Vehicle Mods - Item 1: Level 2";
						if (flag41)
						{
							value = "00000001";
						}
						bool flag42 = a2 == "Weaponized Vehicle Mods - Item 1: Level 3";
						if (flag42)
						{
							value = "00000002";
						}
						bool flag43 = a2 == "Weaponized Vehicle Mods - Item 2: Level 1";
						if (flag43)
						{
							value2 = "00000000";
						}
						bool flag44 = a2 == "Weaponized Vehicle Mods - Item 2: Level 2";
						if (flag44)
						{
							value2 = "00000001";
						}
						bool flag45 = a2 == "Weaponized Vehicle Mods - Item 2: Level 3";
						if (flag45)
						{
							value2 = "00000002";
						}
						bool flag46 = a2 == "Weaponized Vehicle Mods - Bomb Bay: Standard Bombs";
						if (flag46)
						{
							value3 = "00000000";
						}
						bool flag47 = a2 == "Weaponized Vehicle Mods - Bomb Bay: Incendiary Bombs";
						if (flag47)
						{
							value3 = "00000001";
						}
						bool flag48 = a2 == "Weaponized Vehicle Mods - Bomb Bay: Gas Bombs";
						if (flag48)
						{
							value3 = "00000002";
						}
						bool flag49 = a2 == "Weaponized Vehicle Mods - Bomb Bay: Cluster Bombs";
						if (flag49)
						{
							value3 = "00000003";
						}
						bool flag50 = a2 == "Weaponized Vehicle Mods - Air Counter Measure: Chaff";
						if (flag50)
						{
							value4 = "00000000";
						}
						bool flag51 = a2 == "Weaponized Vehicle Mods - Air Counter Measure: Decoy Flares";
						if (flag51)
						{
							value4 = "00000001";
						}
						bool flag52 = a2 == "Weaponized Vehicle Mods - Exhaust: Afterburner";
						if (flag52)
						{
							value5 = "00000000";
						}
					}
				}
				this.current = 169200U;
				this.current2 = 169424U;
				this.j = 0;
				string arg = "Vehicle ";
				string[] array = new string[100];
				foreach (object obj2 in this.ListVehicleList.SelectedItems)
				{
					string text = (string)obj2;
					array[this.j] = text;
					this.j++;
				}
				this.n = 1;
				while (this.n <= 30)
				{
					bool flag53 = array.Contains(arg + this.n);
					if (flag53)
					{
						this.Xbox.Send((this.startOffset + this.current).ToString("X"), "00" + b.ToString("X").PadLeft(2, '0') + b2.ToString("X").PadLeft(2, '0') + b3.ToString("X").PadLeft(2, '0'));
						this.Xbox.Send((this.startOffset + this.current2).ToString("X"), b4.ToString("X").PadLeft(2, '0') + b5.ToString("X").PadLeft(2, '0') + b6.ToString("X").PadLeft(2, '0') + "00");
					}
					this.current += 416U;
					this.current2 += 416U;
					this.n++;
				}
				bool flag54 = this.CheckXboxOneSwap.Checked && this.GroupXboxOneSwap.Text == "Swap Variables";
				if (flag54)
				{
					for (int i = 0; i < this.GridSwapVariablesResults.Rows.Count; i++)
					{
						bool flag55 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vbs4" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag55)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag56 = array.Contains(arg + this.n);
								if (flag56)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), b7.ToString("X").PadLeft(2, '0') + "00" + b8.ToString("X").PadLeft(2, '0') + b9.ToString("X").PadLeft(2, '0'));
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag57 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vbs5" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag57)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag58 = array.Contains(arg + this.n);
								if (flag58)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), b10.ToString("X").PadLeft(2, '0') + "00" + b11.ToString("X").PadLeft(2, '0') + b12.ToString("X").PadLeft(2, '0'));
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag59 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vbs6" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag59)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag60 = array.Contains(arg + this.n);
								if (flag60)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), b13.ToString("X").PadLeft(2, '0') + b14.ToString("X").PadLeft(2, '0') + "00" + b15.ToString("X").PadLeft(2, '0'));
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag61 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vbs7" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag61)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag62 = array.Contains(arg + this.n);
								if (flag62)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), b16.ToString("X").PadLeft(2, '0') + "00" + b17.ToString("X").PadLeft(2, '0') + b18.ToString("X").PadLeft(2, '0'));
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag63 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vmodtur" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag63)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag64 = array.Contains(arg + this.n);
								if (flag64)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), value);
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag65 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vmodarm" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag65)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag66 = array.Contains(arg + this.n);
								if (flag66)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), value2);
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag67 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vmodBomb" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag67)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag68 = array.Contains(arg + this.n);
								if (flag68)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), value3);
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag69 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "vmodairc" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag69)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag70 = array.Contains(arg + this.n);
								if (flag70)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), value4);
								}
								this.current += 416U;
								this.n++;
							}
						}
						bool flag71 = this.GridSwapVariablesResults.Rows[i].Cells[2].Value.ToString() == "col3" && -1 != this.ListSwapCustom1.FindStringExact(this.GridSwapVariablesResults.Rows[i].Cells[0].Value.ToString());
						if (flag71)
						{
							this.current = (uint)this.GridSwapVariablesResults.Rows[i].Cells[3].Value;
							this.n = 1;
							while (this.n <= 30)
							{
								bool flag72 = array.Contains(arg + this.n);
								if (flag72)
								{
									this.Xbox.Send((this.startOffset + this.current).ToString("X"), value5);
								}
								this.current += 416U;
								this.n++;
							}
						}
					}
				}
			}
```

## 08
```csharp
byte b = 0;
			byte b2 = 0;
			foreach (object obj in this.ListMoreSettings.SelectedItems)
			{
				string a = (string)obj;
				bool flag = a == "Progress Time Of Day";
				if (flag)
				{
					b += 16;
				}
				bool flag2 = a == "Specific Time Of Day";
				if (flag2)
				{
					b2 += 128;
				}
			}
```

## 99