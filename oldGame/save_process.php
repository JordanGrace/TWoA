<?php
session_start();
include("include/function_con.inc");

$cName = $_SESSION['username'];
$newPath = $_POST['location']; 
$newType = $_POST['type']; 
$newLvl = $_POST['lvl']; 
$newHp = $_POST['hp']; 
$newArmor = $_POST['armor']; 
$newAttack = $_POST['attack']; 
$newRange = $_POST['range']; 
$newMag = $_POST['mag']; 
$newSneak = $_POST['sneak']; 
$newSneakSave = $_POST['sneakSave']; 
$newLp = $_POST['lp']; 
$newLpSave = $_POST['lpSave']; 
$newCrit = $_POST['crit']; 
$newCritSave = $_POST['critSave']; 
$newLuck = $_POST['luck']; 
$newLuckSave = $_POST['luckSave']; 
$newStatPoints = $_POST['statPoints']; 
$newStatStop = $_POST['statStop']; 
$newSkillPoints = $_POST['skillPoints']; 
$newSkillStop = $_POST['skillStop']; 
$newCon = $_POST['con']; 
$newStr = $_POST['str']; 
$newDex = $_POST['dex']; 
$newMagic = $_POST['magic']; 
$newGold = $_POST['gold']; 
$newGoldGain = $_POST['goldGain']; 
$newPotions = $_POST['potions']; 
$newLockpicks = $_POST['lockpicks']; 
$newDmg = $_POST['dmg']; 
$newDmgHp = $_POST['dmgHp']; 
$newCritChance = $_POST['critChance']; 
$newDmgPercent = $_POST['dmgPercent']; 
$newGotaCrit = $_POST['gotaCrit']; 
$newKey = $_POST['key']; 
$newRope = $_POST['rope']; 
$newHpBar = $_POST['hpBar']; 
$newHpTest = $_POST['hpTest']; 
$newXp = $_POST['xp']; 
$newSneakTest = $_POST['sneakTest']; 
$newCrafted = $_POST['crafted'];
$i1 = $_POST['item1'];
$i2 = $_POST['item2'];
$i3 = $_POST['item3'];
$i4 = $_POST['item4'];
$i5 = $_POST['item5'];
$i6 = $_POST['item6'];
$i7 = $_POST['item7'];
$i8 = $_POST['item8'];
$i9 = $_POST['item9'];
$i10 = $_POST['item10'];
$i11 = $_POST['item11'];
$i12 = $_POST['item12'];
$i13 = $_POST['item13'];
$i14 = $_POST['item14'];
$i15 = $_POST['item15'];
$i16 = $_POST['item16'];
$i17 = $_POST['item17'];
$i18 = $_POST['item18'];
$path1As = $_POST['p1As'];
$path1Cs = $_POST['p1Cs'];
$path2s = $_POST['p2s'];
$path2a = $_POST['p2a'];
$path1Aa = $_POST['p1Aa'];
$path1Ca = $_POST['p1Ca'];
$path3Da = $_POST['p3Da'];
$path3Ds = $_POST['p3Ds'];
$path2Ca = $_POST['p2Ca'];
$path2Co = $_POST['p2Co'];
$gTalked = $_POST['gTalk'];
$dTalked = $_POST['dTalk'];

$results = connect_to_query("SELECT * FROM account_save WHERE username= '$cName'");

if($row = mysql_fetch_array($results)){
	echo'true';
$results = connect_to_query("UPDATE account_save
SET location = '$newPath', 
charType = '$newType', 
charLvl = '$newLvl', 
charHp = '$newHp', 
charArmor = '$newArmor', 
charAttack = '$newAttack',
charRangeAttack ='$newRange', 
charMag ='$newMag',
charSneak ='$newSneak',
charSneaksave ='$newSneakSave',
charLp ='$newLp',
charLpSave ='$newLpSave',
charCrit ='$newCrit',
charCritSave ='$newCritSave',
charLuck ='$newLuck',
charLuckSave ='$newLuckSave',
charStatpoints ='$newStatPoints',
charStatstop ='$newStatStop',
charSkillPoints ='$newSkillPoints',
charSkillStop ='$newSkillStop',
charCon ='$newCon',
charStr ='$newStr',
charDex ='$newDex',
charMagic ='$newMagic',
charGold ='$newGold',
charGoldgain ='$newGoldGain',
charHppotions ='$newPotions',
charLockpicks ='$newLockpicks',
charDmg ='$newDmg',
charDmghp ='$newDmgHp',
charCritchance ='$newCritChance',
charDmgpercent ='$newDmgPercent',
charGotacrit ='$newGotaCrit',
charKey ='$newKey',
charRope ='$newRope',
charHpbar ='$newHpBar',
charHptest ='$newHpTest',
charXp ='$newXp',
charSneaktest ='$newSneakTest',
charCrafted ='$newCrafted',
item1 ='$i1',
item2 ='$i2',
item3 ='$i3',
item4 ='$i4',
item5 ='$i5',
item6 ='$i6',
item7 ='$i7',
item8 ='$i8',
item9 ='$i9',
item10 ='$i10',
item11 ='$i11',
item12 ='$i12',
item13 ='$i13',
item14 ='$i14',
item15 ='$i15',
item16 ='$i16',
item17 ='$i17',
item18 ='$i18',
path1Asearch ='$path1As',
path1Csearch ='$path1Cs',
path2search  ='$path2s',
path2attack ='$path2a',
path1Aattack ='$path1Aa',
path1Cattack ='$path1Ca',
path3Dattack ='$path3Da',
path3Dsearch ='$path3Ds',
path2Cattack ='$path2Ca',
path2Copen ='$path2Co',
gypsyTalked ='$gTalked',
dwarfTalked ='$dTalked'
	WHERE username = '$cName'"
	);}
else{
	echo'false';
$results = connect_to_query("INSERT INTO account_save

VALUES
(NULL,
'$cName',
NULL,
'$newPath', 
'$newType', 
'$newLvl', 
'$newHp', 
'$newArmor', 
'$newAttack',
'$newRange', 
'$newMag',
'$newSneak',
'$newSneakSave',
'$newLp',
'$newLpSave',
'$newCrit',
'$newCritSave',
'$newLuck',
'$newLuckSave',
'$newStatPoints',
'$newStatStop',
'$newSkillPoints',
'$newSkillStop',
'$newCon',
'$newStr',
'$newDex',
'$newMagic',
'$newGold',
'$newGoldGain',
'$newPotions',
'$newLockpicks',
'$newDmg',
'$newDmgHp',
'$newCritChance',
'$newDmgPercent',
'$newGotaCrit',
'$newKey',
'$newRope',
'$newHpBar',
'$newHpTest',
'$newXp',
'$newSneakTest',
'$newCrafted',
'$i1',
'$i2',
'$i3',
'$i4',
'$i5',
'$i6',
'$i7',
'$i8',
'$i9',
'$i10',
'$i11',
'$i12',
'$i13',
'$i14',
'$i15',
'$i16',
'$i17',
'$i18',
'$path1As',
'$path1Cs',
'$path2s',
'$path2a',
'$path1Aa',
'$path1Ca',
'$path3Da',
'$path3Ds',
'$path2Ca',
'$path2Co',
'$gTalked',
'$dTalked')"
	);}
//header('Location:game.html');
?>