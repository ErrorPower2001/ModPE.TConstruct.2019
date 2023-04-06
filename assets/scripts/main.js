/*Variable*/
Minecraft_ID = [];
TinkersConstructPE_ID = [[] , [] , [] , [] , [] , [] , [] , [] , []];
//Destroy_Speed = [];
Tools = [[] , [] , [] , []];
ToolsDestroySpeed_Tool = [[] , [] , [] , []];
ToolsDestroySpeed_Speed = [];
PickToolLevel = [[] , [] , [] , []];
Minecraft_Tool = [[270 , 274 , 257 , 278 , 285] , [271 , 275 , 258 , 279 , 286] , [269 , 273 , 256 , 277 , 284] , [268 , 272 , 267 , 276 , 283]];
for(Tool_ID = 0; Tool_ID < 5; Tool_ID ++){
	Minecraft_Tool[Minecraft_Tool[0][Tool_ID]] = Minecraft_Tool[0][Tool_ID];
	Minecraft_Tool[Minecraft_Tool[1][Tool_ID]] = Minecraft_Tool[1][Tool_ID];
	Minecraft_Tool[Minecraft_Tool[2][Tool_ID]] = Minecraft_Tool[2][Tool_ID];
	Minecraft_Tool[Minecraft_Tool[3][Tool_ID]] = Minecraft_Tool[3][Tool_ID];
}
Block_ = [];

var ItemType_Item; // = 0;
var ItemType_Tool; // = 1;

DefineTool_ID = null;

/*---------------------------------------------*/
/*---------------------------------------------*/

//define function
RunTexturePackFile = function(_Tinkers0ConstructPE_ , _Tinkers1ConstructPE_){
	if(_Tinkers1ConstructPE_ == 0){
		eval(new java["lang"]["String"](ModPE["getBytesFromTexturePack"](_Tinkers0ConstructPE_), "UTF-8") + "");
	}
	if(_Tinkers1ConstructPE_ == 1){
		eval(new java["lang"]["String"](ModPE["getBytesFromTexturePack"](_Tinkers0ConstructPE_), "UTF-8") + "");
	}
}
RunTexturePackFile("Function", 0);
RunTexturePackFile("Function_", 0);

/*---------------------------------------------*/
/*---------------------------------------------*/

//function
/*can use preventDefault()*/
attackHook = function(attacker , victim){
	attackHook_(attacker , victim);
}

/*can use preventDefault()*/
//chatHook = function(str){}

/*can use preventDefault()*/
//continueDestroyBlock = function(x , y , z , side , progress){}

/*can use preventDefault()*/
destroyBlock = function(x , y , z , side){
	destroyBlock_(x , y , z , side);
	/*if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(x , y , z) == 17 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(x , y , z) == 162){
  if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 0 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 4 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 8){
   Block_["push"]([x , y , z , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(x , y , z) , 0]);
  }
  if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 1 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 5 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 9){
   Block_["push"]([x , y , z , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(x , y , z) , 1]);
  }
  if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 2 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 6 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 10){
   Block_["push"]([x , y , z , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(x , y , z) , 2]);
  }
  if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 3 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 7 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(x , y , z) == 11){
   Block_["push"]([x , y , z , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(x , y , z) , 3]);
  }
  if(Block_){
   for(i = 0; i < 9; i ++){
    if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 17 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 162){
     if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 0 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 4 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 8){
      Block_["push"]([Block_[i][0] , Block_[i][1] + 1 , Block_[i][2] , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) , 0]);
     }
     if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 1 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 5 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 9){
      Block_["push"]([Block_[i][0] , Block_[i][1] + 1 , Block_[i][2] , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) , 1]);
     }
     if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 2 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 6 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 10){
      Block_["push"]([Block_[i][0] , Block_[i][1] + 1 , Block_[i][2] , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) , 2]);
     }
     if(TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 3 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 7 || TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getData")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) == 11){
      Block_["push"]([Block_[i][0] , Block_[i][1] + 1 , Block_[i][2] , TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "getTile")(Block_[i][0] , Block_[i][1] + 1 , Block_[i][2]) , 3]);
     }
     TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "destroyBlock")(x , y , z , false);
     TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "setTile")(Block_[i][0] , Block_[i][1] , Block_[i][2] , 0 , 0);
     TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "destroyBlock")(Block_[i][0] , Block_[i][1] , Block_[i][2] , false);
     TinkersConstructPE(BloodWolf[_TinkersConstructPE2Function_] , "dropItem")(Block_[i][0] + 0.5 , Block_[i][1] + 0.5 , Block_[i][2] + 0.5 , 0 , Block_[i][3] , 1 , Block_[i][4]);
    }
   }
  }
  Block_ = [];
 }*/
}

//projectileHitEntityHook = function(projectile , targetEntity){}

//eatHook = function(hearts , saturationRatio){}

//entityAddedHook = function(entity){}

/*can use preventDefault()*/
//entityHurtHook = function(attacker , victim , halfhearts){}

//entityRemovedHook = function(entity){}

/*can use preventDefault()*/
//explodeHook = function(entity , x , y , z , power , onFire){}

/*can use preventDefault()*/
//serverMessageReceiveHook = function(str){}

/*can use preventDefault()*/
//deathHook = function(attacker , victim){}

/*can use preventDefault()*/
//playerAddExpHook = function(player , experienceAdded){}

/*can use preventDefault()*/
//playerExpLevelChangeHook = function(player , levelsAdded){}

//redstoneUpdateHook = function(x , y , z , newCurrent , someBooleanIDontKnow , blockId , blockData){}

//newLevel = function(){}

/*can use preventDefault()*/
startDestroyBlock = function(x , y , z , side){
	startDestroyBlock_(x , y , z , side);
}

//projectileHitBlockHook = function(projectile , blockX , blockY , blockZ , side){}

modTick = function(){
	modTick_();
}

/*can use preventDefault()*/
//useItem = function(x , y , z , itemid , blockid , side , itemDamage , blockDamage){}

/*---------------------------------------------*/
/*---------------------------------------------*/

TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1000 , 0) , ["镐子_0" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [0 , 2.0]] , 59);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1010 , 1) , ["镐子_1" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [2 , 5.25]] , 171);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1020 , 2) , ["镐子_2" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [0 , 2.0]] , 30);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1030 , 3) , ["镐子_3" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [1 , 4.0]] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1040 , 4) , ["镐子_4" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [1 , 4.0]] , 200);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1050 , 5) , ["镐子_5" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [3 , 7.0]] , 389);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1060 , 6) , ["镐子_6" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [1 , 4.0]] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1070 , 7) , ["镐子_7" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [2 , 6.0]] , 250);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1080 , 8) , ["镐子_8" , 0] , "镐 | Pick" , [[ItemType_Tool , 0] , [0 , 5.0]] , 150);

TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1100 , 0) , ["手斧_0" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 2.0] , 59);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1110 , 1) , ["手斧_1" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 5.25] , 171);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1120 , 2) , ["手斧_2" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 2.0] , 30);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1130 , 3) , ["手斧_3" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 4.0] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1140 , 4) , ["手斧_4" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 4.0] , 200);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1150 , 5) , ["手斧_5" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 7.0] , 389);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1160 , 6) , ["手斧_6" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 4.0] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1170 , 7) , ["手斧_7" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 6.0] , 250);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1180 , 8) , ["手斧_8" , 0] , "手斧 | HandAxe" , [[ItemType_Tool , 1] , 5.0] , 150);

TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1200 , 0) , ["铲子_0" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 2.0] , 59);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1210 , 1) , ["铲子_1" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 5.25] , 171);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1220 , 2) , ["铲子_2" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 2.0] , 30);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1230 , 3) , ["铲子_3" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 4.0] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1240 , 4) , ["铲子_4" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 4.0] , 200);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1250 , 5) , ["铲子_5" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 7.0] , 389);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1260 , 6) , ["铲子_6" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 4.0] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1270 , 7) , ["铲子_7" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 6.0] , 250);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1280 , 8) , ["铲子_8" , 0] , "铲 | Shovel" , [[ItemType_Tool , 2] , 5.0] , 150);

TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1300 , 0) , ["大剑_0" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 2.0] , 59);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1310 , 1) , ["大剑_1" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 5.25] , 171);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1320 , 2) , ["大剑_2" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 2.0] , 30);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1330 , 3) , ["大剑_3" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 4.0] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1340 , 4) , ["大剑_4" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 4.0] , 200);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1350 , 5) , ["大剑_5" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 7.0] , 389);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1360 , 6) , ["大剑_6" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 4.0] , 131);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1370 , 7) , ["大剑_7" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 6.0] , 250);
TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "setItem")(TinkersConstructPE(BloodWolf[_TinkersConstructPE0Function_] , "ItemID")(1380 , 8) , ["大剑_8" , 0] , "剑 | Sword" , [[ItemType_Tool , 3] , 5.0] , 150);
