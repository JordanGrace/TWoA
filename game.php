<?php
session_start();
include('include/function_con.inc');
$theUser = $_SESSION['username'];

$exist = connect_to_query("SELECT * FROM account_save WHERE username= '$theUser'");

if($row = mysql_fetch_array($exist)){
$results = connect_to_query("SELECT * FROM account_save WHERE username ='$theUser'");

while($row = mysql_fetch_array($results)){
		//store name columns calue in a variable
$cPath = $row['location']; 
$cType = $row['charType']; 
$cLvl = $row['charLvl']; 
$cHp = $row['charHp']; 
$cArmor = $row['charArmor']; 
$cAttack = $row['charAttack']; 
$cRange = $row['charRangeAttack']; 
$cMag = $row['charMag']; 
$cSneak = $row['charSneak']; 
$cSneakSave = $row['charSneaksave']; 
$cLp = $row['charLp']; 
$cLpSave = $row['charLpSave']; 
$cCrit = $row['charCrit']; 
$cCritSave = $row['charCritSave']; 
$cLuck = $row['charLuck']; 
$cLuckSave = $row['charLuckSave']; 
$cStatPoints = $row['charStatpoints']; 
$cStatStop = $row['charStatstop']; 
$cSkillPoints = $row['charSkillPoints']; 
$cSkillStop = $row['charSkillStop']; 
$cCon = $row['charCon']; 
$cStr = $row['charStr']; 
$cDex = $row['charDex']; 
$cMagic = $row['charMagic']; 
$cGold = $row['charGold']; 
$cGoldGain = $row['charGoldgain']; 
$cPotions = $row['charHppotions']; 
$cLockpicks = $row['charLockpicks']; 
$cDmg = $row['charDmg']; 
$cDmgHp = $row['charDmghp']; 
$cCritChance = $row['charCritchance']; 
$cDmgPercent = $row['charDmgpercent']; 
$cGotaCrit = $row['charGotacrit']; 
$cKey = $row['charKey']; 
$cRope = $row['charRope']; 
$cHpBar = $row['charHpbar']; 
$cHpTest = $row['charHptest']; 
$cXp = $row['charXp']; 
$cSneakTest = $row['charSneaktest']; 
$cCrafted = $row['charCrafted'];
$i1 = $row['item1'];
$i2 = $row['item2'];
$i3 = $row['item3'];
$i4 = $row['item4'];
$i5 = $row['item5'];
$i6 = $row['item6'];
$i7 = $row['item7'];
$i8 = $row['item8'];
$i9 = $row['item9'];
$i10 = $row['item10'];
$i11 = $row['item11'];
$i12 = $row['item12'];
$i13 = $row['item13'];
$i14 = $row['item14'];
$i15 = $row['item15'];
$i16 = $row['item16'];
$i17 = $row['item17'];
$i18 = $row['item18'];
$path1As = $row['path1Asearch'];
$path1Cs = $row['path1Csearch'];
$path2s = $row['path2search'];
$path2a = $row['path2attack'];
$path1Aa = $row['path1Aattack'];
$path1Ca = $row['path1Cattack'];
$path3Da = $row['path3Dattack'];
$path3Ds = $row['path3Dsearch'];
$path2Ca = $row['path2Cattack'];
$path2Co = $row['path2Copen'];
$gTalked = $row['gypsyTalked'];
$dTalked = $row['dwarfTalked'];
}//closes the While Loop
}
?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>JordanFinal</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.js"></script>
</head>

<body>
<div id="wrapper">
	<div id="backWrap">

	<!--	<div id="item"></div>
    	<div id="char"></div>
    	<div id="hpbar"></div>
    	<div id="hppotion">
        	<div id="hpwrapper">
            <form><input id='hppotionbtn' type='button' value='HP potion'</form>
            </div>
        </div>
    	<div id="gold"></div>
-->
	</div><!--Closes BackWrap-->
    
	<div id="actionWrap">
    	<div id="actionBtn"></div><!--Closes ActionBtn-->
	</div><!--Closes ActionWrap-->
    
	<div id="stats2">
    </div><!--Closes Stats2-->
    

    
	<div id="textBox"></div><!--Closes TextBox-->
    
	<div id="btnwrap">
		<div id="directBtn"></div><!--Closes JordanBtn-->
	</div><!--Closes BtnWrap-->
        <div id="playerBtn">
    <form action='save_process.php' method='post'  enctype="multipart/form-data" class='ajaxform'>
<input type="hidden"id="cPath"  name= "location" value="0"/>
<input type="hidden"id="cType"  name= "type" value="0"/>
<input type="hidden"id="cLvl"  name= "lvl" value="0"/>
<input type="hidden"id="cHp"  name= "hp" value="0"/>
<input type="hidden"id="cArmor"  name= "armor" value="0"/>
<input type="hidden"id="cAttack"  name= "attack" value="0"/>
<input type="hidden"id="cRange"  name= "range" value="0"/>
<input type="hidden"id="cMag"  name= "mag" value="0"/>
<input type="hidden"id="cSneak"  name= "sneak" value="0"/>
<input type="hidden"id="cSneakSave"  name= "sneakSave" value="0"/>
<input type="hidden"id="cLp"  name= "lp" value="0"/>
<input type="hidden"id="cLpSave"  name= "lpSave" value="0"/>
<input type="hidden"id="cCrit"  name= "crit" value="0"/>
<input type="hidden"id="cCritSave"  name= "critSave" value="0"/>
<input type="hidden"id="cLuck"  name= "luck" value="0"/>
<input type="hidden"id="cLuckSave"  name= "luckSave" value="0"/>
<input type="hidden"id="cStatPoints"  name= "statPoints" value="0"/>
<input type="hidden"id="cStatStop"  name= "statStop" value="0"/>
<input type="hidden"id="cSkillPoints"  name= "skillPoints" value="0"/>
<input type="hidden"id="cSkillStop"  name= "skillStop" value="0"/>
<input type="hidden"id="cCon"  name= "con" value="0"/>
<input type="hidden"id="cStr"  name= "str" value="0"/>
<input type="hidden"id="cDex"  name= "dex" value="0"/>
<input type="hidden"id="cMagic"  name= "magic" value="0"/>
<input type="hidden"id="cGold"  name= "gold" value="0"/>
<input type="hidden"id="cGoldGain"  name= "goldGain" value="0"/>
<input type="hidden"id="cHpPotions"  name= "potions" value="0"/>
<input type="hidden"id="cLockpicks"  name= "lockpicks" value="0"/>
<input type="hidden"id="cDmg"  name= "dmg" value="0"/>
<input type="hidden"id="cDmgHp"  name= "dmgHp" value="0"/>
<input type="hidden"id="cCritChance"  name= "critChance" value="0"/>
<input type="hidden"id="cDmgPercent"  name= "dmgPercent" value="0"/>
<input type="hidden"id="cGotaCrit"  name= "gotaCrit" value="0"/>
<input type="hidden"id="cKey"  name= "key" value="0"/>
<input type="hidden"id="cRope"  name= "rope" value="0"/>
<input type="hidden"id="cHpBar"  name= "hpBar" value="0"/>
<input type="hidden"id="cHpTest"  name= "hpTest" value="0"/>
<input type="hidden"id="cXp"  name= "xp" value="0"/>
<input type="hidden"id="cSneakTest"  name= "sneakTest" value="0"/>
<input type="hidden"id="cCrafted"  name= "crafted" value="0"/>
<input type="hidden"id="cItem1"name= "item1" value="0"/>
<input type="hidden"id="cItem2"name= "item2" value="0"/>
<input type="hidden"id="cItem3"name= "item3" value="0"/>
<input type="hidden"id="cItem4"name= "item4" value="0"/>
<input type="hidden"id="cItem5"name= "item5" value="0"/>
<input type="hidden"id="cItem6"name= "item6" value="0"/>
<input type="hidden"id="cItem7"name= "item7" value="0"/>
<input type="hidden"id="cItem8"name= "item8" value="0"/>
<input type="hidden"id="cItem9"name= "item9" value="0"/>
<input type="hidden"id="cItem10"name= "item10" value="0"/>
<input type="hidden"id="cItem11"name= "item11" value="0"/>
<input type="hidden"id="cItem12"name= "item12" value="0"/>
<input type="hidden"id="cItem13"name= "item13" value="0"/>
<input type="hidden"id="cItem14"name= "item14" value="0"/>
<input type="hidden"id="cItem15"name= "item15" value="0"/>
<input type="hidden"id="cItem16"name= "item16" value="0"/>
<input type="hidden"id="cItem17"name= "item17" value="0"/>
<input type="hidden"id="cItem18"name= "item18" value="0"/>
<input type="hidden"id="path1As"name= "p1As" value="0"/>
<input type="hidden"id="path1Cs"name= "p1Cs" value="0"/>
<input type="hidden"id="path2s"name= "p2s" value="0"/>
<input type="hidden"id="path2a"name= "p2a" value="0"/>
<input type="hidden"id="path1Aa"name= "p1Aa" value="0"/>
<input type="hidden"id="path1Ca"name= "p1Ca" value="0"/>
<input type="hidden"id="path3Da"name= "p3Da" value="0"/>
<input type="hidden"id="path3Ds"name= "p3Ds" value="0"/>
<input type="hidden"id="path2Ca"name= "p2Ca" value="0"/>
<input type="hidden"id="path2Co"name= "p2Co" value="0"/>
<input type="hidden"id="gTalked"name= "gTalk" value="no"/>
<input type="hidden"id="dTalked"name= "dTalk" value="no"/>

<input type='submit' id='saveBtn' value='Save'>
<input type='button' id='loadSave' value='Load' onClick="tryAgain();">
</form>
<form action='logout_process.php'enctype='multipart/form-data' method='post'>
<input type='submit' id='logoutBtn' value='Logout'>
</form>
    </div><!--Closes PlayerBtn-->
    
</div><!--Closes Wrapper-->
<script src="js/char.js"></script>
<script src="js/save.js"></script>
<?php $exist = connect_to_query("SELECT * FROM account_save WHERE username= '$theUser'");

if($row = mysql_fetch_array($exist)){ ?>
<script>
Char.type = <?php echo "'$cType';" ?>
Char.lvl = <?php echo "$cLvl;" ?>
Char.hp = <?php echo "$cHp;" ?>
Char.armor = <?php echo "$cArmor;" ?>
Char.attack = <?php echo "$cAttack;" ?>
Char.rangeattack = <?php echo "$cRange;" ?>
Char.mag = <?php echo "$cMag;" ?>
Char.sneak = <?php echo "$cSneak;" ?>
Char.sneaksave = <?php echo "$cSneakSave;" ?>
Char.lp = <?php echo "$cLp;" ?>
Char.lpsave = <?php echo "$cLpSave;" ?>
Char.crit = <?php echo "$cCrit;" ?>
Char.critsave = <?php echo "$cCritSave;" ?>
Char.luck = <?php echo "$cLuck;" ?>
Char.lucksave = <?php echo "$cLuckSave;" ?>
Char.statpoints = <?php echo "$cStatPoints;" ?>
Char.statstop = <?php echo "$cStatStop;" ?>
Char.skillpoints = <?php echo "$cSkillPoints;" ?>
Char.skillstop = <?php echo "$cSkillStop;" ?>
Char.con = <?php echo "$cCon;" ?>
Char.str = <?php echo "$cStr;" ?>
Char.dex = <?php echo "$cDex;" ?>
Char.magic = <?php echo "$cMagic;" ?>
Char.gold = <?php echo "$cGold;" ?>
Char.goldgain = <?php echo "$cGoldGain;" ?>
Char.hppotions = <?php echo "$cPotions;" ?>
Char.lockpicks = <?php echo "$cLockpicks;" ?>
Char.dmg = <?php echo "$cDmg;" ?>
Char.dmghp = <?php echo "$cDmgHp;" ?>
Char.critchance = <?php echo "$cCritChance;" ?>
Char.dmgpercent = <?php echo "$cDmgPercent;" ?>
Char.gotacrit = <?php echo "$cGotaCrit;" ?>
Char.key = <?php echo "$cKey;" ?>
Char.rope = <?php echo "$cRope;" ?>
Char.hpbar = <?php echo "$cHpBar;" ?>
Char.hptest = <?php echo "$cHpTest;" ?>
Char.xp = <?php echo "$cXp;" ?>
Char.sneaktest = <?php echo "$cSneakTest;" ?>
Char.crafted = <?php echo "'$cCrafted';" ?>
Char.path = <?php echo "'$cPath';" ?>
console.log('Loading Char info <?php echo "$cPath"; ?>');
Buy.item1 = <?php echo "'$i1';" ?>
Buy.item2 = <?php echo "'$i2';" ?>
Buy.item3 = <?php echo "'$i3';" ?>
Buy.item4 = <?php echo "'$i4';" ?>
Buy.item5 = <?php echo "'$i5';" ?>
Buy.item6 = <?php echo "'$i6';" ?>
Buy.item7 = <?php echo "'$i7';" ?>
Buy.item8 = <?php echo "'$i8';" ?>
Buy.item9 = <?php echo "'$i9';" ?>
Buy.item10 = <?php echo "'$i10';" ?>
Buy.item11 = <?php echo "'$i11';" ?>
Buy.item12 = <?php echo "'$i12';" ?>
Buy.item13 = <?php echo "'$i13';" ?>
Buy.item14 = <?php echo "'$i14';" ?>
Buy.item15 = <?php echo "'$i15';" ?>
Buy.item16 = <?php echo "'$i16';" ?>
Buy.item17 = <?php echo "'$i17';" ?>
Buy.item18 = <?php echo "'$i18';" ?>

path1Asearch = <?php echo "'$path1As';" ?>
path1Csearch = <?php echo "'$path1Cs';" ?>
path2search = <?php echo "'$path2s';" ?>
path2attack = <?php echo "'$path2a';" ?>
path1Aattack = <?php echo "'$path1Aa';" ?>
path1Cattack = <?php echo "'$path1Ca';" ?>
path3Dattack = <?php echo "'$path3Da';" ?>
path3Dsearch = <?php echo "'$path3Ds';" ?>
path2Cattack = <?php echo "'$path2Ca';" ?>
path2Copen = <?php echo "'$path2Co';" ?>

gypsyTalked= <?php echo "'$gTalked';" ?>
dwarfTalked= <?php echo "'$dTalked';" ?>
</script>
<?php } ?>
<script src="js/script.js"></script>
<?php $exist = connect_to_query("SELECT * FROM account_save WHERE username= '$theUser'");

if($row = mysql_fetch_array($exist)){ ?>
<script>
init();
refreshstats();
aBtn.innerHTML = "";
<?php echo "$cPath();"; ?>
</script>
<?php } ?>
</body>
</html>
