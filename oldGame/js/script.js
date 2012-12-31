// JavaScript Document

var storyBox;
var backLayout;
var aBtn;
var dBtn;



var speech="";
var speechold="";

onload = init;

//var items = new Array();
//items.monster1 = 0;
//items.monster2 = 0;
//items.monster3 = 0; 
//items.container1 = 0;
//items.container2 = 0; 
//items.container3 = 0;
//items.random1 = 0;
//items.random2 = 0;
//items.random3 = 0;
//items.contis1 = "";
//items.contis2 = "";
//items.contis3 = "";
//items.inside1 = "";
//items.inside2 = "";
//items.inside3 = "";
//items.location = "town";
///array 




//enemys arrays
var forestMerch = new Array();
forestMerch.hp = 200;
forestMerch.armor = 20;
forestMerch.attack = 40;
forestMerch.dmg = 0;
forestMerch.income = 100;

var streetRat = new Array();
streetRat.hp = 200;
streetRat.armor = 20;
streetRat.attack = 40;
streetRat.dmg = 0;
streetRat.income = 100;

var rat = new Array();
rat.type = "Rat";
rat.id = 1;
rat.lvl = 1;
rat.hp = 100;
rat.armor = 1;
rat.attack = 10;
rat.rangeattack = 10;
rat.mag = 10;
rat.hplvl = 10;
rat.armorlvl = 1;
rat.attacklvl = 1;
rat.rangeattacklvl = 1;
rat.maglvl = 1;

var goblin = new Array();
goblin.type = "Goblin";
goblin.id = 1;
goblin.lvl = 1;
goblin.hp = 135;
goblin.armor = 5;
goblin.attack = 15;
goblin.rangeattack = 10;
goblin.mag = 10;
goblin.hplvl = 14;
goblin.armorlvl = 2;
goblin.attacklvl = 2;
goblin.rangeattacklvl = 1;
goblin.maglvl = 1;

var sabertooth = new Array();
sabertooth.type = "Saber Tooth Tiger";
sabertooth.id = 2;
sabertooth.lvl = 1;
sabertooth.hp = 145;
sabertooth.armor = 2;
sabertooth.attack = 20;
sabertooth.rangeattack = 10;
sabertooth.mag = 10;
sabertooth.hplvl = 15;
sabertooth.armorlvl = 1;
sabertooth.attacklvl = 2;
sabertooth.rangeattacklvl = 1;
sabertooth.maglvl = 1;

var ghoul = new Array();
ghoul.type = "Ghoul";
ghoul.id = 3;
ghoul.lvl = 1;
ghoul.hp = 110;
ghoul.armor = 3;
ghoul.attack = 35;
ghoul.rangeattack = 10;
ghoul.mag = 10;
ghoul.hplvl = 11;
ghoul.armorlvl = 1;
ghoul.attacklvl = 4;
ghoul.rangeattacklvl = 1;
ghoul.maglvl = 1;

var wolf = new Array();
wolf.type = "Wolf";
wolf.id = 4;
wolf.lvl = 1;
wolf.hp = 165;
wolf.armor = 2;
wolf.attack = 25;
wolf.rangeattack = 10;
wolf.mag = 10;
wolf.hplvl = 17;
wolf.armorlvl = 1;
wolf.attacklvl = 3;
wolf.rangeattacklvl = 1;
wolf.maglvl = 1;

var bandit = new Array();
bandit.type = "Bandit";
bandit.id = 5;
bandit.lvl = 1;
bandit.hp = 175;
bandit.armor = 5;
bandit.attack = 30;
bandit.rangeattack = 10;
bandit.mag = 10;
bandit.hplvl = 18;
bandit.armorlvl = 2;
bandit.attacklvl = 3;
bandit.rangeattacklvl = 1;
bandit.maglvl = 1;

var mammoth = new Array();
mammoth.type = "Mammoth";
mammoth.id = 6;
mammoth.lvl = 1;
mammoth.hp = 300;
mammoth.armor = 7;
mammoth.attack = 60;
mammoth.rangeattack = 10;
mammoth.mag = 10;
mammoth.hplvl = 30;
mammoth.armorlvl = 2;
mammoth.attacklvl = 3;
mammoth.rangeattacklvl = 1;
mammoth.maglvl = 1;

var orc = new Array();
orc.type = "Orc";
orc.id = 7;
orc.lvl = 1;
orc.hp = 250;
orc.armor = 2;
orc.attack = 45;
orc.rangeattack = 10;
orc.mag = 10;
orc.hplvl = 25;
orc.armorlvl = 1;
orc.attacklvl = 5;
orc.rangeattacklvl = 1;
orc.maglvl = 1;

var spider = new Array();
spider.type = "Spider";
spider.id = 8;
spider.lvl = 1;
spider.hp = 145;
spider.armor = 2;
spider.attack = 10;
spider.rangeattack = 30;
spider.mag = 10;
spider.hplvl = 15;
spider.armorlvl = 1;
spider.attacklvl = 1;
spider.rangeattacklvl = 2;
spider.maglvl = 1;

var dwarf = new Array();
dwarf.type = "Anger Dwarf";
dwarf.id = 9;
dwarf.lvl = 1;
dwarf.hp = 185;
dwarf.armor = 6;
dwarf.attack = 10;
dwarf.rangeattack = 35;
dwarf.mag = 10;
dwarf.hplvl = 19;
dwarf.armorlvl = 3;
dwarf.attacklvl = 1;
dwarf.rangeattacklvl = 3;
dwarf.maglvl = 1;

var troll = new Array();
troll.type = "Troll";
troll.id = 10;
troll.lvl = 1;
troll.hp = 230;
troll.armor = 3;
troll.attack = 10;
troll.rangeattack = 35;
troll.mag = 10;
troll.hplvl = 23;
troll.armorlvl = 2;
troll.attacklvl = 1;
troll.rangeattacklvl = 4;
troll.maglvl = 1;

var warlock = new Array();
warlock.type = "Warlock";
warlock.id = 11;
warlock.lvl = 1;
warlock.hp = 80;
warlock.armor = 1;
warlock.attack = 10;
warlock.rangeattack = 10;
warlock.mag = 65;
warlock.hplvl = 8;
warlock.armorlvl = 1;
warlock.attacklvl = 1;
warlock.rangeattacklvl = 1;
warlock.maglvl = 7;

var skel = new Array();
skel.type = "Skel";
skel.id = 12;
skel.lvl = 1;
skel.hp = 70;
skel.armor = 1;
skel.attack = 10;
skel.rangeattack = 10;
skel.mag = 55;
skel.hplvl = 7;
skel.armorlvl = 1;
skel.attacklvl = 1;
skel.rangeattacklvl = 1;
skel.maglvl = 6;


var ogre = new Array();
ogre.type = "ogre";
ogre.id = 13;
ogre.lvl = 1;
ogre.hp = 500;
ogre.armor = 8;
ogre.attack = 60;
ogre.rangeattack = 10;
ogre.mag = 10;
ogre.hplvl = 50;
ogre.armorlvl = 4;
ogre.attacklvl = 6;
ogre.rangeattacklvl = 1;
ogre.maglvl = 1;

var dragon = new Array();
dragon.type = "Ice Dragon";
dragon.id = 14;
dragon.lvl = 1;
dragon.hp = 1000;
dragon.armor = 10;
dragon.attack = 65;
dragon.rangeattack = 75;
dragon.mag = 10;
dragon.hplvl = 100;
dragon.armorlvl = 5;
dragon.attacklvl = 7;
dragon.rangeattacklvl = 8;
dragon.maglvl = 1;

var kitten = new Array();
kitten.type = "Kitten";
kitten.id = 1;
kitten.lvl = 1;
kitten.hp = 1;
kitten.armor = 1;
kitten.attack = 1;
kitten.rangeattack = 1;
kitten.mag = 1;
kitten.hplvl = 1;
kitten.armorlvl = 1;
kitten.attacklvl = 1;
kitten.rangeattacklvl = 1;
kitten.maglvl = 1;

var Monster1 = new Array();
Monster1.id = "";
Monster1.type = "";
Monster1.lvl = 1;
Monster1.hp = 0;
Monster1.armor = 0;
Monster1.attack = 0;
Monster1.rangeattack = 0;
Monster1.mag = 0;
Monster1.dmg = 0;

var Monster2 = new Array();
Monster2.type = "";
Monster2.id = "";
Monster2.lvl = 1;
Monster2.hp = 0;
Monster2.armor = 0;
Monster2.attack = 0;
Monster2.rangeattack = 0;
Monster2.mag = 0;


var Monster3= new Array();
Monster3.type = "";
Monster3.id = "";
Monster3.lvl = 1;
Monster3.hp = 0;
Monster3.armor = 0;
Monster3.attack = 0;
Monster3.rangeattack = 0;
Monster3.mag = 0;

///arrays end
var http = false;

function init(){
	storyBox = document.getElementById('textBox');
	backLayout = document.getElementById("backWrap");
	aBtn = document.getElementById("actionBtn");
	dBtn = document.getElementById("directBtn");
	if(Char.path == 'init'){
	aBtn.innerHTML = '<form><input id="Warrior" type="button" value="Warrior" class="button"/><input id="Archer" type="button" value="Archer" class="button" /><input id="Mage" type="button" value="Mage" class="button" /></form>';
	storyBox.innerHTML = "Choose a class.";
	document.getElementById("Warrior").onclick = Warrior;
	document.getElementById("Archer").onclick = Archer;
	document.getElementById("Mage").onclick = Mage;}
}

function levelup(){
	if (Char.type = "Warrior"){Warriorlvl();}
	else if(Char.type = "Archer"){Archerlvl();}
	else if(Char.type = "Mage"){Mage();}
}
	//warrior
function Warrior(){	
	Char.type = "Warrior"
	Char.hp = 200;
	Char.armor = 10;
	Char.attack = 30;
	Char.rangeattack = 10;
	Char.mag = 10;
	Char.sneak = 5;
	Char.sneaksave = 5;
	Char.lp = 5;
	Char.lpsave = 5;
	Char.crit = 2;
	Char.critsave = 2;
	Char.luck = 5;
	Char.lucksave = 5;
	Char.statpoints = 10;
	Char.statstop = 10;
	Char.skillpoints = 6;
	Char.skillstop = 6;
	Char.hppotions = 1;
	Char.crafted = "Sword";
	
speech = "Con: Adds 20 Hp and 5 Armor<br />Str: Adds 10 Hp and 5 Attack<br />Dex: Adds 2 Armor and 5 Range Attack<br />Magic: Adds 10 Magic<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsdistribute();
}
	//War lvl up	
function Warriorlvl(){	
	Char.lvl ++;
	Char.hp = 20 + Char.hp;
	Char.armor = 3 + Char.armor ;
	Char.attack = 3 + Char.attack;
	Char.rangeattack = 1 + Char.rangeattack;
	Char.mag = 1 + Char.mag;
	Char.statpoints = 5;
	Char.statstop = 5;
	Char.skillpoints = 3;
	Char.skillstop = 3;
	
	statsdistribute();
}
	//Archer	
function Archer(){
	Char.type = "Archer"	
	Char.hp = 150;
	Char.armor = 5;
	Char.attack = 10;
	Char.rangeattack = 35;
	Char.mag = 10;
	Char.sneak = 5;
	Char.sneaksave = 5;
	Char.lp = 5;
	Char.lpsave = 5;
	Char.crit = 2;
	Char.critsave = 2;
	Char.luck = 5;
	Char.lucksave = 5;
	Char.statpoints = 10;
	Char.statstop = 10;
	Char.skillpoints = 6;
	Char.skillstop = 6;
	Char.hppotions = 1;
	Char.crafted = "Bow";
	
	speech = "Con: Adds 20 Hp and 5 Armor<br />Str: Adds 10 Hp and 5 Attack<br />Dex: Adds 2 Armor and 5 Range Attack<br />Magic: Adds 10 Magic<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsdistribute();
}
	//Acher lvl up			
function Archerlvl(){
	Char.lvl ++;	
	Char.hp = 15 + Char.hp;
	Char.armor = 2 + Char.armor;
	Char.attack = 1 + Char.attack;
	Char.rangeattack = 4 + Char.rangeattack;
	Char.mag = 1 + Char.mag;
	Char.statpoints = 5;
	Char.statstop = 5;
	Char.skillpoints = 3;
	Char.skillstop = 3;
	
	statsdistribute();
}
	//Mage		
function Mage(){	
	Char.type = "Mage"
	Char.hp = 100;
	Char.armor = 2;
	Char.attack = 10;
	Char.rangeattack = 10;
	Char.mag = 30;
	Char.sneak = 5;
	Char.sneaksave = 5;
	Char.lp = 5;
	Char.lpsave = 5;
	Char.crit = 2;
	Char.critsave = 2;
	Char.luck = 5;
	Char.lucksave = 5;
	Char.statpoints = 10;
	Char.statstop = 10;
	Char.skillpoints = 6;
	Char.skillstop = 6;
	Char.hppotions = 1;
	Char.crafted = "Staff";
	
	speech = "Con: Adds 20 Hp and 5 Armor<br />Str: Adds 10 Hp and 5 Attack<br />Dex: Adds 2 Armor and 5 Range Attack<br />Magic: Adds 10 Magic<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsdistribute();
}
	//Mage lvl up		
function Magelvl(){	
	Char.lvl ++;
	Char.hp = 10 + Char.hp;
	Char.armor = 1 + Char.armor;
	Char.attack = 1 + Char.attack;
	Char.rangeattack = 1 + Char.rangeattack;
	Char.mag = 4 + Char.mag;
	Char.statpoints = 5;
	Char.statstop = 5;
	Char.skillpoints = 3;
	Char.skillstop = 3;
	
	statsdistribute();
}

function statsdistribute(){
			aBtn.innerHTML = "";
			backLayout.innerHTML = '<div id="item"></div><div id="char"></div><div id="hpbar"> <p>Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="hppotion"><div id="hpwrapper"><form><input id="hppotionbtn" type="button" value="Health potion: '+ Char.hppotions +'" class="button"</form></div>';
			backLayout.innerHTML += '<div id="chargold">COINS ' + Char.gold + 'g</div>';
			document.getElementById("hpwrapper").innerHTML = '<form><input id="hppotionbtn" type="button" value="Health potion: '+ Char.hppotions +'" class="button"</form>';
			Char.dmghp = Char.hp;
			hpBar();
			
			if(Char.statpoints == 0){document.getElementById("item").innerHTML = "<h1>Stat points: " + Char.statpoints + "</h1><table><tr><td>Con: " + Char.con + "</td><td><forms><input id='pluscon' type='button' value='+'class='stats3'/></td><td><input id='subcon' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Str: " + Char.str + "</td><td><forms><input id='plusstr' type='button' value='+'class='stats3'/></td><td><input id='substr' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Dex: " + Char.dex + "</td><td><forms><input id='plusdex' type='button' value='+'class='stats3'/></td><td><input id='subdex' type='button' value='-'class='stats3'/></td></tr><tr></td><td>" + "Magic: " + Char.magic + "</td><td><forms><input id='plusmagic' type='button' value='+'class='stats3'/></td><td><input id='submagic' type='button' value='-'class='stats3'/></td></tr><tr><td></td><td colspan='2'><input id='confirmbtn' type='button' value='Confirm'class='confirmstats'/></forms></td></tr></table>";
			 document.getElementById("stats2").innerHTML = "<ul><li>Health: " + Char.hp + "</li><li>Armor: " + Char.armor + "</li><li>Attack: " + Char.attack + "</li><li>Range Attack: " + Char.rangeattack + "</li><li>Magic: " + Char.mag + "</li><li>Sneak: " + Char.sneak + "</li><li>Lockpicking: " + Char.lp + "</li><li>Luck: " + Char.luck + "</li><li>Crit: " + Char.crit + "</li><li>Lockpicks: " + Char.lockpicks + "</ul>";
	 			document.getElementById("subcon").onclick = subcon;
				document.getElementById("substr").onclick = substr;
	 			document.getElementById("subdex").onclick = subdex;
	 			document.getElementById("submagic").onclick = submagic;
				document.getElementById("confirmbtn").onclick = skillssave;}
			else{document.getElementById("item").innerHTML = "<h1>Stat points: " + Char.statpoints + "</h1><table><tr><td>Con: " + Char.con + "</td><td><forms><input id='pluscon' type='button' value='+'class='stats3'/></td><td><input id='subcon' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Str: " + Char.str + "</td><td><forms><input id='plusstr' type='button' value='+'class='stats3'/></td><td><input id='substr' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Dex: " + Char.dex + "</td><td><forms><input id='plusdex' type='button' value='+'class='stats3'/></td><td><input id='subdex' type='button' value='-'class='stats3'/></td></tr><tr></td><td>" + "Magic: " + Char.magic + "</td><td><forms><input id='plusmagic' type='button' value='+'class='stats3'/></td><td><input id='submagic' type='button' value='-'class='stats3'/></forms></td></tr></table>";
				document.getElementById("stats2").innerHTML = "<ul><li>Health: " + Char.hp + "</li><li>Armor: " + Char.armor + "</li><li>Attack: " + Char.attack + "</li><li>Range Attack: " + Char.rangeattack + "</li><li>Magic: " + Char.mag + "</li><li>Sneak: " + Char.sneak + "</li><li>Lockpicking: " + Char.lp + "</li><li>Luck: " + Char.luck + "</li><li>Crit: " + Char.crit + "</li><li>Lockpicks: " + Char.lockpicks + "</ul>";
        		document.getElementById("pluscon").onclick = pluscon;
				document.getElementById("subcon").onclick = subcon;
				document.getElementById("plusstr").onclick = plusstr;
				document.getElementById("substr").onclick = substr;
				document.getElementById("plusdex").onclick = plusdex;
				document.getElementById("subdex").onclick = subdex;
				document.getElementById("plusmagic").onclick = plusmagic;
				document.getElementById("submagic").onclick = submagic;}
	}		


function pluscon(){
			Char.statpoints --;
			Char.hp = 20 + Char.hp;
			Char.armor = 5 + Char.armor;
			Char.con ++;
			
			statsdistribute();
}
	
function subcon(){
			if(Char.statpoints < Char.statstop){
				if (Char.con > 0){
				Char.statpoints ++;
				Char.hp = Char.hp - 20;
				Char.armor = Char.armor - 5;
				Char.con --;
				
				statsdistribute();}else{statsdistribute()}}
			else{statsdistribute()}
}

function plusstr(){
			Char.statpoints --;
			Char.hp = 10 + Char.hp;
			Char.attack = 5 + Char.attack;
			Char.str ++;
			
			statsdistribute();
}
	
function substr(){
			if(Char.statpoints < Char.statstop){
				if(Char.str > 0){
					Char.statpoints ++;
					Char.hp = Char.hp - 10;
					Char.attack = Char.attack - 5;
					Char.str --;
					
					statsdistribute();}else{statsdistribute()}}
			else{statsdistribute()}
}

function plusdex(){
			Char.statpoints --;
			Char.armor = 2 + Char.armor;
			Char.rangeattack = 5 + Char.rangeattack;
			Char.dex ++;
			
			statsdistribute();
}
	
function subdex(){
			if(Char.statpoints < Char.statstop){
				if(Char.dex > 0){
					Char.statpoints ++;
					Char.armor = Char.armor - 2;
					Char.rangeattack = Char.rangeattack - 5;
					Char.dex --;
					
					statsdistribute();}else{statsdistribute()}}
			else{statsdistribute()}
}

function plusmagic(){
			Char.statpoints --;
			Char.mag = 10 + Char.mag;
			Char.magic ++;
			
			statsdistribute();
}
	
function submagic(){
			if(Char.statpoints < Char.statstop){
				if(Char.magic > 0){
					Char.statpoints ++;
					Char.mag = Char.mag - 10;
					Char.magic --;
					
					statsdistribute();}else{statsdistribute()}}
			else{statsdistribute()}
}

function skillssave(){
			Char.dmghp = Char.hp;
			Char.con = 0;
			Char.str = 0;
			Char.dex = 0;
			Char.magic = 0;
			Char.sneaksave = Char.sneak;
			Char.lpsave = Char.lp;
			Char.critsave = Char.crit;
			Char.lucksave = Char.luck;
			speech = "Sneak: Increases the chance to sneak past an enemy.<br />Lockpicking: Decreases the chance that your lockpick will break.<br />Crit: Increases the chance that your attack does double damage.<br />Luck: Increases the amount of money found.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			skillsdistribute();	
}

function skillsdistribute(){
			refreshstats();
			if(Char.skillpoints == 0){document.getElementById("item").innerHTML = "<h1>Skill points: " + Char.skillpoints + "</h1><table><tr><td>Sneak: " + Char.sneak + "</td><td><forms><input id='plussneak' type='button' value='+'class='stats3'/></td><td><input id='subsneak' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Lockpicking: " + Char.lp + "</td><td><forms><input id='pluslp' type='button' value='+'class='stats3'/></td><td><input id='sublp' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Crit: " + Char.crit + "</td><td><forms><input id='pluscrit' type='button' value='+'class='stats3'/></td><td><input id='subcrit' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Luck: " + Char.luck + "</td><td><forms><input id='plusluck' type='button' value='+'class='stats3'/></td><td><input id='subluck' type='button' value='-'class='stats3'/></td></tr><tr></td><td><td colspan='2'><input id='confirmbtn2' type='button' value='Confirm' class='confirmstats'/></forms></span></td></tr>";
	 			document.getElementById("subsneak").onclick = subsneak;
				document.getElementById("sublp").onclick = sublp;
	 			document.getElementById("subcrit").onclick = subcrit;
	 			document.getElementById("subluck").onclick = subluck;
				document.getElementById("confirmbtn2").onclick = storyStart;}
			else{document.getElementById("item").innerHTML = "<h1>Skill points: " + Char.skillpoints + "</h1><table><tr><td>Sneak: " + Char.sneak + "</td><td><forms><input id='plussneak' type='button' value='+'class='stats3'/></td><td><input id='subsneak' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Lockpicking: " + Char.lp + "</td><td><forms><input id='pluslp' type='button' value='+'class='stats3'/></td><td><input id='sublp' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Crit: " + Char.crit + "</td><td><forms><input id='pluscrit' type='button' value='+'class='stats3'/></td><td><input id='subcrit' type='button' value='-'class='stats3'/></td></tr><tr><td>" + "Luck: " + Char.luck + "</td><td><forms><input id='plusluck' type='button' value='+'class='stats3'/></td><td><input id='subluck' type='button' value='-'class='stats3'/></td></tr></forms>";
        		document.getElementById("plussneak").onclick = plussneak;
				document.getElementById("subsneak").onclick = subsneak;
				document.getElementById("pluslp").onclick = pluslp;
				document.getElementById("sublp").onclick = sublp;
				document.getElementById("pluscrit").onclick = pluscrit;
				document.getElementById("subcrit").onclick = subcrit;
				document.getElementById("plusluck").onclick = plusluck;
				document.getElementById("subluck").onclick = subluck;}
}

function plussneak(){
			Char.skillpoints --;
			Char.sneak ++;			
			skillsdistribute();
}
	
function subsneak(){
			if(Char.skillpoints < Char.skillstop){
				if (Char.sneak > Char.sneaksave){
				Char.skillpoints ++;
				Char.sneak --
				skillsdistribute();}else{skillsdistribute()}}
			else{skillsdistribute()}
}

function pluslp(){
			Char.skillpoints --;
			Char.lp ++;
			skillsdistribute();
}
	
function sublp(){
			if(Char.skillpoints < Char.skillstop){
				if(Char.lp > Char.lpsave){
					Char.skillpoints ++;
					Char.lp --;
					skillsdistribute();}else{skillsdistribute()}}
			else{skillsdistribute()}
}

function pluscrit(){
			Char.skillpoints --;
			Char.crit ++;
			skillsdistribute();
}
	
function subcrit(){
			if(Char.skillpoints < Char.skillstop){
				if(Char.crit > Char.critsave){
					Char.skillpoints ++;
					Char.crit --;
					skillsdistribute();}else{skillsdistribute()}}
			else{skillsdistribute()}
}

function plusluck(){
			Char.skillpoints --;
			Char.luck ++;
			skillsdistribute();
}
	
function subluck(){
			if(Char.skillpoints < Char.skillstop){
				if(Char.luck > Char.lucksave){
					Char.skillpoints ++;
					Char.luck --;
					skillsdistribute();}else{skillsdistribute()}}
			else{skillsdistribute()}
}

function storyStart(){	
	Char.path = 'storyStart';
	backLayout.className = "backgroundroom";
	document.getElementById("item").innerHTML = "";
	speech = "Welcome Adventurer to the world of Aldoun, for centuries there has been a war going on between the orcs and the humans.  You have been sent out on a quest, to slay the frost dragon of raydale peaks and craft a frozen " + Char.crafted + " from the heart of the dragon to end the war between the humans and orcs.  Now your adventure starts here in the bootleg tavern.";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='godownstairs' type='button' value='Go Downstairs' class='button' /></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='roomSearch' type='button' value='Search Room' class='button' /></form></span>";
	document.getElementById("godownstairs").onclick = goDownStairs;
	document.getElementById("roomSearch").onclick = roomSearch;
	}
	
function roomSearch(){
	//speechold = storyBox.value;
	speech = "You found a chest in the room!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='roomRandomGold' type='button' value='Open chest' class='button' /></form></span>";
	document.getElementById("roomRandomGold").onclick = roomRandomGold;
	}	
	
function roomRandomGold(){
	aBtn.innerHTML = "";
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You gain " + Char.goldgain + " gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	}
	
function goDownStairs(){
	Char.path = 'goDownStairs';
	backLayout.className = "backgroundtavern";
	aBtn.innerHTML ="";
	speech = "You head downstairs into the bar<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sitAtBar' type='button' value='Sit at the Bar' class='button' /></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='leaveTavern' type='button' value='Leave Tavern' class='button' /></form></span>";
	document.getElementById("leaveTavern").onclick = insideTown;
	document.getElementById("sitAtBar").onclick = sitAtBar;
	}
	
function sitAtBar(){
	Char.path = 'sitAtBar';
	speech = "You walk over to the bar and take a seat between a dwarf and gypsy.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='talkDwarf' type='button' value='Talk to Dwarf' class='button' /></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='talkGypsy' type='button' value='Talk to Gypsy' class='button' /></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='leaveTavern' type='button' value='Leave Tavern' class='button' /></form></span>";
	document.getElementById("talkDwarf").onclick = talkDwarf1;
	document.getElementById("talkGypsy").onclick = talkGypsy;
	document.getElementById("leaveTavern").onclick = insideTown;
	}
	
function talkDwarf1(){
	document.getElementById("char").className = "dwarf_char";
	speech = "You decided to talk to the dwarf, he informs you, about how him and his brother were coming to the tavern on the cobblestone trail after a long day of slaying monsters.  But his brother started to drink on the way back and just ran off with all the loot they have gotten earlier that day.  When you start to stand up getting ready to leave he asks you if you see him out in the forest to point him in the right direction to the town.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dwarfTalked= "yes";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='leaveTavern' type='button' value='Leave Tavern' class='button' /></form></span>";
	document.getElementById("leaveTavern").onclick = insideTown;
}

function talkGypsy(){	
document.getElementById("char").className = "gypsy_char";
	speech = "You have decided to talk to the gypsy, she has heard about how you are here to slay the dragon and end the war with the orcs.  She looks around and then leans in towards you and whispers to you that there is a street rat in the alley way that can help you on your travels to the peaks.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	gypsyTalked = "yes";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='leaveTavern' type='button' value='Leave Tavern' class='button' /></form></span>";
	document.getElementById("leaveTavern").onclick = insideTown;
}


function insideTown(){
	Char.path = 'insideTown';
	backLayout.className = "backgroundcity";
	document.getElementById("char").className = "";
	speech = "You head outside into the town<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		aBtn.innerHTML = "";
	if(gypsyTalked == "yes"){
		dBtn.innerHTML = "<span class='actionBtns'><form><input id='leaveTown' type='button' value='Leave Town' class='button' /></form></span>";
		dBtn.innerHTML += "<span class='actionBtns'><form><input id='blackSmith' type='button' value='Go to Blacksmith' class='button' /></form></span>";
		dBtn.innerHTML += "<span class='actionBtns'><form><input id='streetRat2' type='button' value='Go to Street Rat' class='button' /></form></span>";
		document.getElementById("leaveTown").onclick = leaveTown;
		document.getElementById("blackSmith").onclick = blackSmith;
		document.getElementById("streetRat2").onclick = streetRat2;
		}
	else{
		dBtn.innerHTML = "<span class='actionBtns'><form><input id='leaveTown' type='button' value='Leave Town' class='button' /></form></span>";
		dBtn.innerHTML += "<span class='actionBtns'><form><input id='blackSmith' type='button' value='Go to Blacksmith' class='button' /></form></span>";
		document.getElementById("leaveTown").onclick = leaveTown;
		document.getElementById("blackSmith").onclick = blackSmith;
	}
}
	
function blackSmith(){
	Char.path = 'blackSmith';
	backLayout.className = "backgroundbs";
	speech = "You walk into the blacksmith's shop<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='buyBlacksmith' type='button' value='Buy items' class='button' /></form></span>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='leave' type='button' value='Leave Blacksmith' class='button' /></form></span>";
	document.getElementById("leave").onclick = insideTown;
	document.getElementById("buyBlacksmith").onclick = buyBlacksmith;
	}

function buyBlacksmith(){
	refreshstats();
	speech = "What are you buying?<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "";
	if(Buy.item1 == 1){aBtn.innerHTML = "<span class='actionBtns'><form><input id='buyLockpick' type='button' value='Lockpick - 25g' class='button' /></form></span>";}else{}
	if(Buy.item2 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyHpPotion' type='button' value='HP potion - 50g' class='button' /></form></span>";}else{}
	if(Buy.item3 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyHCharm' type='button' value='Health Charm - 100g' class='button' /></form></span>";}else{}
	if(Char.type == "Warrior"){if(Buy.item4 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyWarmor2' type='button' value='Steel Armor - 100g'class='button' /></form></span>";}else{}}
	else if(Char.type == "Archer"){if(Buy.item4 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyAarmor2' type='button' value='Studded Armor - 100g'class='button' /></form></span>";}else{}}
	else if(Char.type == "Mage"){if(Buy.item4 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyMarmor2' type='button' value='Silk Armor - 100g'class='button' /></form></span>";}else{}}	
	if(Buy.item1 == 1){document.getElementById("buyLockpick").onclick = buyLockpick;}else{}
	if(Buy.item2 == 1){document.getElementById("buyHpPotion").onclick = buyHpPotion;}else{}
	if(Buy.item3 == 1){document.getElementById("buyHCharm").onclick = buyHCharm;}else{}
	if(Buy.item4 == 1){if(Char.type == "Warrior"){document.getElementById("buyWarmor2").onclick = buyWarmor2;}
		else if(Char.type == "Archer"){document.getElementById("buyAarmor2").onclick = buyAarmor2;}
		else if(Char.type == "Mage"){document.getElementById("buyMarmor2").onclick = buyMarmor2;}}else{}
	}
	
function buyLockpick(){
	if(Char.gold >= 25){
		speech = "You put the lockpick in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item1 = 0;
		Char.gold = Char.gold - 25;
		Char.lockpicks ++;
		buyBlacksmith();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}

function buyHpPotion(){
	if(Char.gold >= 50){
		speech = "You put the Health Potion in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item2 = 0;
		Char.gold = Char.gold - 50;
		Char.hppotions ++;
		buyBlacksmith();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}

function buyHCharm(){
	if(Char.gold >= 100){
		speech = "You put the Health Charm in your bag<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item3 = 0;
		Char.gold = Char.gold - 100;
		Char.hp = Char.hp + 50;
		Char.dmghp = Char.dmghp + 50;
		hpBar();
		buyBlacksmith();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}

function buyWarmor2(){
	if(Char.gold >= 100){
		speech = "You put the steel armor on<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item4 = 0;
		Char.gold = Char.gold - 100;
		Char.armor = Char.armor + 30;
		hpBar();
		buyBlacksmith();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}
	
function buyAarmor2(){
	if(Char.gold >= 100){
		speech = "You put the armor on<br /><div class='speech1'>"+speech+"</div>";
		Buy.item4 = 0;
		Char.gold = Char.gold - 100;
		Char.armor = Char.armor + 15;
		buyBlacksmith();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}
	
function buyMarmor2(){
	if(Char.gold >= 100){
		speech = "You put the silk armor on<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item4 = 0;
		Char.gold = Char.gold - 100;
		Char.armor = Char.armor + 3;
		buyBlacksmith();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}

function streetRat2(){
	Char.path = 'streetRat2';
	backLayout.className = "backgroundalley";
	speech = "You walk into the alley way looking for the street rat the gypsy was talking about and then in the darkest part of the alley way stands a dirty man with a little shop.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='leave' type='button' value='Leave Alley' class='button' /></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='buyStreet' type='button' value='Buy items' class='button' /></form></span>";
	aBtn.innerHTML += "<span class='actionBtns'><form><input id='attackStreet' type='button' value='Attack street rat' class='button' /></form></span>";
	document.getElementById("leave").onclick = insideTown;
	document.getElementById("buyStreet").onclick = buyStreet;
	document.getElementById("attackStreet").onclick = attackStreet;
	}
	
function attackStreet(){
	refreshstats();
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackingTheRat' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("attackingTheRat").onclick = attackingTheRat;
	}
	
function attackingTheRat(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the Street Rat.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - streetRat.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	streetRat.hp = streetRat.hp - Char.dmg;
		if(streetRat.hp >= 0){	
				speech = "You did " + Char.dmg + " to the Street Rat." + "He still has " + streetRat.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				streetRat.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * streetRat.attack).toFixed(0); 
				if(streetRat.dmg <= 0){streetRat.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - streetRat.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The Street Rat did " + streetRat.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackStreet();}}
		else{	streetratdead();}
	}

function streetratdead(){
	
	aBtn.innerHTML = ""; 
	speech = "You killed the Street Rat. You gain 100xp. You steal all of his gold but you loose 2 luck.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.luck --; Char.luck --;
	Char.xp = Char.xp + 100;
	Char.gold = Char.gold + streetRat.income;
	gypsyTalked = "no";
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='leave' type='button' value='Leave Alley' class='button' /></form></span>";
	document.getElementById("leave").onclick = insideTown;
		}
	
function buyStreet(){
	refreshstats();
	
	speech = "What are you buying?<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "";
	if(Buy.item5 == 1){aBtn.innerHTML = "<span class='actionBtns'><form><input id='buyLockpick2' type='button' value='Lockpick - 20g' class='button' /></form></span>";}else{}
	if(Buy.item6 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyHpPotion2' type='button' value='HP potion - 45g' class='button' /></form></span>";}else{}
	if(Buy.item7 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyKey' type='button' value='Key - 60g' class='button' /></form></span>";}else{}
	if(Buy.item8 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyRope' type='button' value='Rope - 45g' class='button' /></form></span>";}else{}
	if(Buy.item9 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyCCharm' type='button' value='Crit Charm - 75g' class='button' /></form></span>";}else{}
	if(Buy.item10 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buySCharm' type='button' value='Sneak Charm - 75g' class='button' /></form></span>";}else{}
	if(Char.type == "Warrior"){if(Buy.item11 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyShield2' type='button' value='Steel shield - 75g' class='button' /></form></span>";}else{}}
	else if(Char.type == "Archer"){if(Buy.item11 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyArrow2' type='button' value='Steel arrows - 75g' class='button' /></form></span>";}else{}}
	else if(Char.type == "Mage"){if(Buy.item11 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyStaff2' type='button' value='Oak Staff - 75g' class='button' /></form></span>";}else{}}	
	if(Buy.item5 == 1){document.getElementById("buyLockpick2").onclick = buyLockpick2;}else{}
	if(Buy.item6 == 1){document.getElementById("buyHpPotion2").onclick = buyHpPotion2}else{}
	if(Buy.item7 == 1){document.getElementById("buyKey").onclick = buyKey;}else{}
	if(Buy.item8 == 1){document.getElementById("buyRope").onclick = buyRope;}else{}
	if(Buy.item9 == 1){document.getElementById("buyCCharm").onclick = buyCCharm;}else{}
	if(Buy.item10 == 1){document.getElementById("buySCharm").onclick = buySCharm;}else{}
	if(Buy.item11 == 1){if(Char.type == "Warrior"){document.getElementById("buyShield2").onclick = buyShield2;}
		else if(Char.type == "Archer"){document.getElementById("buyArrow2").onclick = buyArrow2;}
		else if(Char.type == "Mage"){document.getElementById("buyStaff2").onclick = buyStaff2;}}else{}
	}

function buyLockpick2(){
	if(Char.gold >= 20){
		speech = "You put the lockpick in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item5 = 0;
		Char.gold = Char.gold - 20;
		streetRat.income = streetRat.income + 20;
		Char.lockpicks ++;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}

function buyHpPotion2(){
	if(Char.gold >= 45){
		speech = "You put the Health Potion in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item6 = 0;
		Char.gold = Char.gold - 45;
		streetRat.income = streetRat.income + 45;
		Char.hppotions ++;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buyKey(){
	if(Char.gold >= 60){
		speech = "You put the Key on your ring<br /><div class='speech1'>"+speech+"</div>";
		Buy.item7 = 0;
		Char.gold = Char.gold - 60;
		streetRat.income = streetRat.income + 60;
		Char.key ++;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}	
	
function buyRope(){
	if(Char.gold >= 45){
		speech = "You put the rope in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item8 = 0;
		Char.gold = Char.gold - 45;
		streetRat.income = streetRat.income + 45;
		Char.rope ++;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}

function buyCCharm(){
	if(Char.gold >= 75){
		speech = "You put the Crit Charm in your bag<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item9 = 0;
		Char.gold = Char.gold - 75;
		streetRat.income = streetRat.income + 75;
		Char.crit ++;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buySCharm(){
	if(Char.gold >= 75){
		speech = "You put the Sneak Charm in your bag<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item10 = 0;
		Char.gold = Char.gold - 75;
		streetRat.income = streetRat.income + 75;
		Char.sneak ++;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}	
	
function buyShield2(){
	if(Char.gold >= 75){
		speech = "You equip your new shield<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item11 = 0;
		Char.gold = Char.gold - 75;
		streetRat.income = streetRat.income + 75;
		Char.hp = Char.hp + 150;
		Char.dmghp = Char.dmghp + 150;
		Char.armor = Char.armor + 15;
		hpBar();
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buyArrow2(){
	if(Char.gold >= 75){
		speech = "You now have steel arrows<br /><div class='speech1'>"+speech+"</div>";
		Buy.item11 = 0;
		Char.gold = Char.gold - 75;
		streetRat.income = streetRat.income + 75;
		Char.rangeattack = Char.rangeattack + 5;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buyStaff2(){
	if(Char.gold >= 75){
		speech = "You wield your new staff<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item11 = 0;
		Char.gold = Char.gold - 75;
		streetRat.income = streetRat.income + 75;
		Char.mag = Char.mag + 20;
		buyStreet();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}

/* - - - - - - - - - -	F	O	R	E	S	T	- - - - - - - - - - */
	
function leaveTown(){
	Char.path = 'leaveTown';
	backLayout.className = "backgroundswamp";
	speech = "You have decided on leaving the town to start your adventure in to the forest.  Once you head out of the gates of the town you notice that there are three different roads that you can go travel on.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path1' type='button' value='Travel down the dirt path'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='path2' type='button' value='Travel Down the swampy trail'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='path3' type='button' value='Travel Down the cobblestone trail'class='button'/></form></span>";
	document.getElementById("path1").onclick = path1;
	document.getElementById("path2").onclick = path2;
	document.getElementById("path3").onclick = path3;
	}
	
/* - - - - - - - - - -	P	A	T	H		O	N	E	- - - - - - - - - - */

function path1(){
	Char.path = 'path1';
	backLayout.className = "backgrounddirt";
	Char.path = "path1";
	document.getElementById("char").className = "goblin_char";
	speech = "You've decided to go down the dirt pathway, as you start walking you see a goblin in the distance.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakGoblinP1' type='button' value='Sneak past Goblin'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='attackGoblinP1' type='button' value='Encounter Goblin'class='button'/></form></span>";
	document.getElementById("sneakGoblinP1").onclick = sneakGoblinP1;
	document.getElementById("attackGoblinP1").onclick = statsGoblinP1;
	}

function sneakGoblinP1(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackGoblinP1' type='button' value='Encounter Goblin'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollGoblinP1' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("sneakRollGoblinP1").onclick = sneakRollGoblinP1;
	document.getElementById("attackGoblinP1").onclick = statsGoblinP1;}
	
function sneakRollGoblinP1(){
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest >= Char.sneak){
	speech = "You have successfully sneaked pass the Goblin and you gain 50xp<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	path1A();}
	else{speech = "The goblin saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsGoblinP1();}
	//document.getElementById("attackGoblinP1").onclick = statsGoblinP1;	
	}

function statsGoblinP1(){
		Monster1.type = "Goblin";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (goblin.hplvl * Char.lvl) + goblin.hp;
		Monster1.armor = (goblin.armorlvl * Char.lvl) + goblin.armor;
		Monster1.attack = (goblin.attacklvl * Char.lvl) + goblin.attack;
		Monster1.rangeattack = (goblin.rangeattacklvl  * Char.lvl) + goblin.rangeattack ;
		Monster1.mag = (goblin.maglvl * Char.lvl) + goblin.mag;	
		attackMonsterGoblinP1();
}

function attackMonsterGoblinP1(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "goblin_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleGoblinP1' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleGoblinP1").onclick = battleGoblinP1;
	}
	
function battleGoblinP1(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER"; 
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	hpBar();
	attackMonsterGoblinP1();}}
		else{	GoblinP1dead();}
	
	
	}

function GoblinP1dead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path1A' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path1A").onclick = path1A;
		}
function path1A(){
	Char.path = "path1A";
	backLayout.className = "backgrounddirt";
	document.getElementById("char").className = "wolf_char";
	speech = "You continue your adventure down the dirt path, as you walk you start to hear some howling that sounds like a wolf.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakWolfP1A' type='button' value='Sneak past Wolf'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='statsWolfP1A' type='button' value='Encounter Wolf'class='button'/></form></span>";
	if(path1Asearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1A' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1A").onclick = searchGrass1A;}else{aBtn.innerHTML = ""}
	document.getElementById("sneakWolfP1A").onclick = sneakWolfP1A;
	document.getElementById("statsWolfP1A").onclick = statsWolfP1A;
	}

function searchGrass1A(){
	path1Asearch = 0;
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	Char.sneaktest = Math.floor(Math.random()*25);
	Char.hppotions ++;
	if(path1Aattack == 0){speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";path1B();}
	else{if(Char.sneaktest <= Char.sneak){
			speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			path1A();}	
		else{speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold but the wolf notices you and comes over to attack you.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			statsWolfP1A();}}
	
	}

function sneakWolfP1A(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='statsWolfP1A' type='button' value='Encounter Wolf'class='button'/></form></span>";
	
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollWolfP1A' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("statsWolfP1A").onclick = statsWolfP1A;
	document.getElementById("sneakRollWolfP1A").onclick = sneakRollWolfP1A;}
	
function sneakRollWolfP1A(){
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackWolfP1A' type='button' value='Encounter Wolf'class='button'/></form></span>";
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest <= Char.sneak){
	speech = "You have successfully sneaked pass the Wolf and you gain 50xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	if(path1Asearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1A' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1A").onclick = searchGrass1A;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path1B' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path1B").onclick = path1B;}
	else{speech = "The wolf saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsWolfP1A();}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackWolfP1A' type='button' value='Encounter Wolf'class='button'/></form></span>";	
	document.getElementById("attackWolfP1A").onclick = statsWolfP1A;	
	}

function statsWolfP1A(){
		path1Aattack = 0;
		Monster1.type = "wolf";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (wolf.hplvl * Char.lvl) + wolf.hp;
		Monster1.armor = (wolf.armorlvl * Char.lvl) + wolf.armor;
		Monster1.attack = (wolf.attacklvl * Char.lvl) + wolf.attack;
		Monster1.rangeattack = (wolf.rangeattacklvl  * Char.lvl) + wolf.rangeattack ;
		Monster1.mag = (wolf.maglvl * Char.lvl) + wolf.mag;	
		attackMonsterWolfP1A();
}

function attackMonsterWolfP1A(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "wolf_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleWolfP1A' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleWolfP1A").onclick = battleWolfP1A;
	}
	
function battleWolfP1A(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER"; 
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackMonsterWolfP1A();}}
		else{	WolfP1Adead();}
		
	
	}

function WolfP1Adead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	if(path1Asearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1A' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1A").onclick = searchGrass1A;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path1B' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path1B").onclick = path1B;
		}

function path1B(){
	Char.path = 'path1B';
	backLayout.className = "backgrounddirt";
	document.getElementById("char").className = "kitten_char";
	speech = "As you keep adventuring down the dirt path, the area starts to get very dark and then you stumble upon a small white kitten.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='pet1B' type='button' value='Pet the kitten'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='kill'><form><input id='kill' type='button' value='KILL!!!'class='button'/></form></span>";
	document.getElementById("pet1B").onclick = pet1B;
	document.getElementById("kill").onclick = encPath1B;
	}
	
function encPath1B(){
	speech = "As you start pull out your "+Char.crafted+" a wizard jumps out of a tree and yells at you 'FOOL!!! HOW DARE YOU TRY TO KILL A SMALL WHITE KITTEN!!! BEGONE WITH YOU!!! GAMEOVER....<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
	dBtn.innerHTML = "";
	
	}
	
function pet1B(){
	aBtn.innerHTML = "";
	speech = "As you pet the kitten the kitten gives you a piece of yawn. Isnt he so cute ^^<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path1C' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path1C").onclick = path1C;
	}
	
function path1C(){
	backLayout.className = "backgrounddirt";
	document.getElementById("char").className = "";
	Char.path = "path1C";
	speech = "You continue your adventure farther down the dirt path, you start to feel the ground shake as something massive is approaching you.  All you see is this small figure in the distance is getting bigger every second and you have to decide on whether to hide and sneak past it or encounter it and kill it.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakPath1C' type='button' value='Sneak past Monster'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='statsMammoth1C' type='button' value='Encounter the monster'class='button'/></form></span>";
	if(path1Csearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1C' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1C").onclick = searchGrass1C;}else{aBtn.innerHTML = "";}
	document.getElementById("sneakPath1C").onclick = sneakPath1C;
	document.getElementById("statsMammoth1C").onclick = statsMammoth1C;
	}
	
function searchGrass1C(){
	path1Csearch = 0;
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	Char.sneaktest = Math.floor(Math.random()*25);
	if(path1Cattack == 0){speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";path1D();}
	else{if(Char.sneaktest <= Char.sneak){
			speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			path1C();}	
		else{speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold but the massive monster starts to catch up to you and starts to attack.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			statsMammoth1C();}}
	
	}

function sneakPath1C(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='statsMammoth1C' type='button' value='Encounter the monster'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollPath1C' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("sneakRollPath1C").onclick = sneakRollPath1C;
	document.getElementById("statsMammoth1C").onclick = statsMammoth1C;}
	
function sneakRollPath1C(){
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackWolfP1A' type='button' value='Encounter Wolf'class='button'/></form></span>";
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest <= Char.sneak){
		speech = "You have successfully sneaked pass the Monster and you gain 50xp. ";
		Char.xp = Char.xp + 50;
	if(path1Csearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1C' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1C").onclick = searchGrass1C;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path1D' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path1D").onclick = path1D;}
	else{speech = "The Mammoth saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		statsMammoth1C();}
		dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackMammoth1C' type='button' value='Encounter Mammoth'class='button'/></form></span>";	
		document.getElementById("attackMammoth1C").onclick = statsMammoth1C;	
}


function statsMammoth1C(){
		path1Cattack = 0;
		Monster1.type = "Mammoth";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (mammoth.hplvl * Char.lvl) + mammoth.hp;
		Monster1.armor = (mammoth.armorlvl * Char.lvl) + mammoth.armor;
		Monster1.attack = (mammoth.attacklvl * Char.lvl) + mammoth.attack;
		Monster1.rangeattack = (mammoth.rangeattacklvl  * Char.lvl) + mammoth.rangeattack ;
		Monster1.mag = (mammoth.maglvl * Char.lvl) + mammoth.mag;	
		attackMammoth1C();
}

function attackMammoth1C(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for. <br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "mammoth_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleMammoth1C' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleMammoth1C").onclick = battleMammoth1C;
	}
	
function battleMammoth1C(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER";
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The " + Monster1.type + " did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackMammoth1C();}}
		else{	Mammoth1Cdead();}
		
	
	}

function Mammoth1Cdead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	  
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
	Char.xp = Char.xp + 250;
	speech = "You killed the "+ Monster1.type +". You gain 250xp, "+Char.goldgain+" gold and a new weapon.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	//didILevel();
	if(path1Csearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1C' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1C").onclick = searchGrass1C;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path1D' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path1D").onclick = path1D;
		}
	

	
function path1D(){
	backLayout.className = "backgrounddirt";
	document.getElementById("char").className = "trap_item";
	Char.path = "path1D";
	speech = "You start to see the peaks, and decide to start running towards the mountain.  As your running you here a click and notice that you have triggered a trap.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "";
	
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='jump1D' type='button' value='Jump over'class='button'/></form></span>";
	document.getElementById("jump1D").onclick = jump1D;
	if(Char.rope > 0){dBtn.innerHTML += "<span class='actionBtns'><form><input id='ropeUse1D' type='button' value='Use your rope'class='button'/></form></span>";
	document.getElementById("ropeUse1D").onclick = ropeUse1D;}else{};
}
	
function jump1D(){
	Char.lucktest = Math.floor(Math.random()*(50 - Char.luck)) ;
	
	if(Char.lucktest <= (25+Char.luck)){
	speech = "You jump as high as mickael jordan and live to see another day.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2D' type='button' value='Continue on the trail'class='button'/></form></span>";
	document.getElementById("path2D").onclick = path2D;}
	else{speech = "You jump but get hit by a bird and knocked into the trap and die.. GAMEOVER...<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;}
}

function ropeUse1D(){
	speech = "You reach into your bag and take out the rope you have. You fling the rope over a tree and swing to safty.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2D' type='button' value='Continue on the trail'class='button'/></form></span>";
	document.getElementById("path2D").onclick = path2D;
}

	
/* - - - - - - - - - -	P	A	T	H		T	W	O	- - - - - - - - - - */

function path2(){
	backLayout.className = "backgroundswamp";
	Char.path = "path2";
	document.getElementById("char").className = "rat_char";
	if(path2search == 1){
	speech = "You've decided to go down swampy trail, as you start to walk down it you see a giant rat in the middle of the trail.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRatP2' type='button' value='Sneak past the Rat'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='statsRatP2' type='button' value='Encounter the Rat'class='button'/></form></span>";
	if(path2search == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrassP2' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrassP2").onclick = searchGrassP2;}else{aBtn.innerHTML = ""}
	document.getElementById("sneakRatP2").onclick = sneakRatP2;
	document.getElementById("statsRatP2").onclick = statsRatP2;
	}

function searchGrassP2(){
	path2search = 0;
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	Char.sneaktest = Math.floor(Math.random()*25);
	Char.hppotions ++;
	if(path2attack == 0){speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";path2A();}
	else{if(Char.sneaktest <= Char.sneak){
			speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			path2();}	
		else{speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold but the rat notices you and comes over to attack you.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			statsRatP2();}}
	
	}

function sneakRatP2(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='statsRatP2' type='button' value='Encounter Rat'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollRatP2' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("statsRatP2").onclick = statsRatP2;
	document.getElementById("sneakRollRatP2").onclick = sneakRollRatP2;}
	
function sneakRollRatP2(){
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackRatP2' type='button' value='Encounter Rat'class='button'/></form></span>";
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest <= Char.sneak){
	speech = "You have successfully sneaked pass the rat and you gain 50xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	if(path2search == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrassP2' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrassP2").onclick = searchGrassP2;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2A' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path2A").onclick = path2A;}
	else{speech = "The rat saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsRatP2();}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackRatP2' type='button' value='Encounter Rat'class='button'/></form></span>";	
	document.getElementById("attackRatP2").onclick = statsRatP2;	
	}

function statsRatP2(){
		path2attack = 0;
		Monster1.type = "rat";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (rat.hplvl * Char.lvl) + rat.hp;
		Monster1.armor = (rat.armorlvl * Char.lvl) + rat.armor;
		Monster1.attack = (rat.attacklvl * Char.lvl) + rat.attack;
		Monster1.rangeattack = (rat.rangeattacklvl  * rat.lvl) + rat.rangeattack ;
		Monster1.mag = (rat.maglvl * Char.lvl) + rat.mag;	
		attackRatP2();
}

function attackRatP2(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "rat_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleRatP2' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleRatP2").onclick = battleRatP2;
	}
	
function battleRatP2(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER";
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackRatP2();}}
		else{	RatP2dead();}
		
	
	}

function RatP2dead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	if(path2search == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrassP2' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrassP2").onclick = searchGrassP2;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2A' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path2A").onclick = path2A;
		}


	
function path2A(){
	backLayout.className = "backgroundswamp";
	Char.path = "path2A";
	speech = "As you continue walking on the swampy trail, you start to see a lot of trees covered in cob webs.  As you keep walking you start to see 8 red eyes glowing from above you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakSpider2A' type='button' value='Sneak past Spider'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='attackSpider2A' type='button' value='Encounter Spider'class='button'/></form></span>";
	document.getElementById("sneakSpider2A").onclick = sneakSpider2A;
	document.getElementById("attackSpider2A").onclick = statsSpider2A;
	}

function sneakSpider2A(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackSpider2A' type='button' value='Encounter Spider'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollSpider2A' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("sneakRollSpider2A").onclick = sneakRollSpider2A;
	document.getElementById("attackSpider2A").onclick = statsSpider2A;}
	
function sneakRollSpider2A(){
	
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest >= Char.sneak){
	speech = "You have successfully sneaked pass the Spider and you gain 50xp<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	path2B();}
	else{speech = "The spider saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsSpider2A();}
	//document.getElementById("attackGoblinP1").onclick = statsGoblinP1;	
	}

function statsSpider2A(){
		Monster1.type = "spider";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (spider.hplvl * Char.lvl) + spider.hp;
		Monster1.armor = (spider.armorlvl * Char.lvl) + spider.armor;
		Monster1.attack = (spider.attacklvl * Char.lvl) + spider.attack;
		Monster1.rangeattack = (spider.rangeattacklvl  * Char.lvl) + spider.rangeattack ;
		Monster1.mag = (spider.maglvl * Char.lvl) + spider.mag;	
		attackSpider2A();
}

function attackSpider2A(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "spider_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleSpider2A' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleSpider2A").onclick = battleSpider2A;
	}
	
function battleSpider2A(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.rangeattack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER"; 
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	hpBar();
	attackSpider2A();}}
		else{	Spider2Adead();}
	
	
	}

function Spider2Adead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2B' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path2B").onclick = path2B;
		}		
	
function path2B(){
	backLayout.className = "backgroundswamp";
	Char.path = "path2B";
	speech = "You approach a small wooden bridge, as you start walking towards the bridge a angry looking troll jumps out from under it and starts to head towards you.<br /><div class='speech1'>"+speech+"</div>";storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	document.getElementById("char").className = "troll_char";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='escLeftChance2B' type='button' value='Escape to the left'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='decisionTroll2B' type='button' value='Encounter troll'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='escRightChance2B' type='button' value='Escape to the right'class='button'/></form></span>";
	document.getElementById("decisionTroll2B").onclick = decisionTroll2B;
	aBtn.innerHTML = "";
	document.getElementById("escRightChance2B").onclick = escRightChance2B;
	document.getElementById("escLeftChance2B").onclick = escLeftChance2B;
	
	}
	
	
function decisionTroll2B(){
		speech = "You walk up to the troll. What do you want to do?<br /><div class='speech1'>"+speech+"</div>";storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackTroll2B' type='button' value='Attack the troll'class='button'/></form></span>";
	aBtn.innerHTML += "<span class='actionBtns'><form><input id='talkTroll2B' type='button' value='Talk to the troll'class='button'/></form></span>";
	document.getElementById("talkTroll2B").onclick = talkTroll2B;
	document.getElementById("attackTroll2B").onclick = statsTroll2B;
	}
	
function talkTroll2B(){
		speech = "Hey you im the bridge troll of dooom u must pay me 50 gold to pass over my lovely land or you die here!<br /><div class='speech1'>"+speech+"</div>";storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackTroll2B' type='button' value='Attack the troll'class='button'/></form></span>";
	aBtn.innerHTML += "<span class='actionBtns'><form><input id='payTroll2B' type='button' value='Pay the troll'class='button'/></form></span>";
	document.getElementById("payTroll2B").onclick = payTroll2B;
	document.getElementById("attackTroll2B").onclick = statsTroll2B;
}

function payTroll2B(){
	if(Char.gold >= 50){Char.gold = Char.gold - 50;
	speech = "Thank you good sir and may the light bring you long life.<br /><div class='speech1'>"+speech+"</div>";storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2C' type='button' value='Continue on swamp path' class='button' /></form></span>";
	document.getElementById("path2C").onclick = path2C;}
	else{speech = "You do not have enough gold and the troll get furious and attacks you.<br /><div class='speech1'>"+speech+"</div>";storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsTroll2B();}
	}

function escRightChance2B(){
	speech = "Roll to see if can escape from the troll.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackTroll2B' type='button' value='Encounter troll'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollTroll2B' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("sneakRollTroll2B").onclick = sneakRight2B;
	document.getElementById("attackTroll2B").onclick = statsTroll2B;}
	
function sneakRight2B(){
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest >= Char.sneak){
	speech = "You have successfully escaped and gained 50xp<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	path1B();}
	else{speech = "The troll caught you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsTroll2B();}	
	}
	
function escLeftChance2B(){
	speech = "Roll to see if can escape from the troll.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackTroll2B' type='button' value='Encounter troll'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollTroll2B' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("sneakRollTroll2B").onclick = sneakLeft2B;
	document.getElementById("attackTroll2B").onclick = statsTroll2B;}
	
function sneakLeft2B(){
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest >= Char.sneak){
	speech = "You have successfully escaped and gained 50xp<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	path3C();}
	else{speech = "The troll caught you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsTroll2B();}	
	}

function statsTroll2B(){
		Monster1.type = "troll";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (troll.hplvl * Char.lvl) + troll.hp;
		Monster1.armor = (troll.armorlvl * Char.lvl) + troll.armor;
		Monster1.attack = (troll.attacklvl * Char.lvl) + troll.attack;
		Monster1.rangeattack = (troll.rangeattacklvl  * Char.lvl) + troll.rangeattack ;
		Monster1.mag = (troll.maglvl * Char.lvl) + troll.mag;	
		attackMonsterTroll2B();
}

function attackMonsterTroll2B(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "troll_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleTroll2B' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleTroll2B").onclick = battleTroll2B;
	}
	
function battleTroll2B(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.rangeattack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER"; 
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	hpBar();
	attackMonsterTroll2B();}}
		else{	Troll2Bdead();}
	
	
	}

function Troll2Bdead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2C' type='button' value='Continue on swamp path' class='button' /></form></span>";
	document.getElementById("path2C").onclick = path2C;
		}
	
function path2C(){
	backLayout.className = "backgroundswamp";
	Char.path = "path2C";
	document.getElementById("char").className = "sabertooth_char";
	speech = "The temperature of the area that you were in starts to drop and you start to relize that the area around you is starting to be covered in snow.  After surveying the strange area you relize right in front of you is a sabertooth tiger that is looking for something to eat.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(path2Copen == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='openChest2C' type='button' value='Open Chest'class='button'/></form></span>";
		document.getElementById("openChest2C").onclick = openChest2C;}
		else if(path2Copen == 0){aBtn.innerHTML = "";}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakSabertooth2C' type='button' value='Sneak past Sabertooth'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='statsSabertooth2C' type='button' value='Encounter Sabertooth'class='button'/></form></span>";
	document.getElementById("sneakSabertooth2C").onclick = sneakSabertooth2C;
	document.getElementById("statsSabertooth2C").onclick = statsSabertooth2C;
	}
function openChest2C(){
	aBtn.innerHTML = "";
	path2Copen = 0;
	chestNum = Math.floor(Math.random()*9);
	if(chestNum == 0||chestNum == 1){
		Char.hppotions ++;
		speech = "You found a health potion inside the chest<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		refreshstats();
		}
	else if(chestNum == 2||chestNum == 3){
		speech = "You found a finger inside the chest<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		refreshstats();
		}
	else if(chestNum == 4||chestNum == 5){
		Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
		Char.gold = Char.gold + Char.goldgain;
		speech = "You found some coins inside the chest<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		refreshstats();
		}

	else if(chestNum == 6){
		if(Char.type == "Warrior"){
			Char.attack = Char.attack + 10;
			speech = "You found a Attack Charm inside the chest<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		refreshstats();
			}
		else if(Char.type == "Archer"){
			Char.crit = Char.crit + 1;
			speech = "You found a Crit Charm inside the chest<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		refreshstats();
			}
		else if(Char.type == "Mage"){
			Char.mag = Char.mag + 10;
			speech = "You found a Magkia Charm inside the chest<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		refreshstats();
			}
		}
	else {
		speech = "You didn't find anything inside the chest<br /><div class='speech1'>"+speech+"</div>";
		storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		}}
	

function sneakSabertooth2C(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='statsSabertooth2C' type='button' value='Encounter Sabertooth'class='button'/></form></span>";
	
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollSabertooth2C' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("statsSabertooth2C").onclick = statsSabertooth2C;
	document.getElementById("sneakRollSabertooth2C").onclick = sneakRollSabertooth2C;}
	
function sneakRollSabertooth2C(){
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackSabertooth2C' type='button' value='Encounter Sabertooth'class='button'/></form></span>";
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest <= Char.sneak){
	speech = "You have successfully sneaked pass the Sabertooth and you gain 50xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	if(path2Copen == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1A' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1A").onclick = searchGrass1A;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='forest' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path2D").onclick = path2D;}
	else{speech = "The sabertooth saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsSabertooth2C();}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackSabertooth2C' type='button' value='Encounter Sabertooth'class='button'/></form></span>";	
	document.getElementById("attackSabertooth2C").onclick = statsSabertooth2C;	
	}

function statsSabertooth2C(){
		path2Cattack = 0;
		Monster1.type = "sabertooth";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (sabertooth.hplvl * Char.lvl) + sabertooth.hp;
		Monster1.armor = (sabertooth.armorlvl * Char.lvl) + sabertooth.armor;
		Monster1.attack = (sabertooth.attacklvl * Char.lvl) + sabertooth.attack;
		Monster1.rangeattack = (sabertooth.rangeattacklvl  * Char.lvl) + sabertooth.rangeattack ;
		Monster1.mag = (sabertooth.maglvl * Char.lvl) + sabertooth.mag;	
		attackSabertooth2C();
}

function attackSabertooth2C(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "sabertooth_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleSabertooth2C' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleSabertooth2C").onclick = battleSabertooth2C;
	}
	
function battleSabertooth2C(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER"; 
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackSabertooth2C();}}
		else{	Sabertooth2Cdead();}
		
	
	}

function Sabertooth2Cdead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	if(path2Copen == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='openChest2C' type='button' value='Open Chest'class='button'/></form></span>";
		document.getElementById("openChest2C").onclick = openChest2C;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path2D' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("path2D").onclick = path2D;
		}
	
function path2D(){
	backLayout.className = "backgroundswamp";
	Char.path = "path2D";
	document.getElementById("char").className = "bandit_char";
	speech = "The area around you starts to become a rocky terrain and you start to see the raydale peaks.  You start to adventure towards it and then from the bushes a bandit jumps out trying to mug you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakBandit2D' type='button' value='Sneak past Bandit'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='attackBandit2D' type='button' value='Encounter Bandit'class='button'/></form></span>";
	document.getElementById("sneakBandit2D").onclick = sneakBandit2D;
	document.getElementById("attackBandit2D").onclick = statsBandit2D;
	}

function sneakBandit2D(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackBandit2D' type='button' value='Encounter Bandit'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollBandit2D' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("sneakRollBandit2D").onclick = sneakRollBandit2D;
	document.getElementById("attackBandit2D").onclick = statsBandit2D;}
	
function sneakRollBandit2D(){
	
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest >= Char.sneak){
	speech = "You have successfully sneaked pass the Bandit and you gain 50xp<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	forestTrade();}
	else{speech = "The Bandit saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsBandit2D();}	
	}

function statsBandit2D(){
		Monster1.type = "bandit";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (bandit.hplvl * Char.lvl) + bandit.hp;
		Monster1.armor = (bandit.armorlvl * Char.lvl) + bandit.armor;
		Monster1.attack = (bandit.attacklvl * Char.lvl) + bandit.attack;
		Monster1.rangeattack = (bandit.rangeattacklvl  * Char.lvl) + bandit.rangeattack ;
		Monster1.mag = (bandit.maglvl * Char.lvl) + bandit.mag;	
		attackBandit2D();
}

function attackBandit2D(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "bandit_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleBandit2D' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleBandit2D").onclick = battleBandit2D;
	}
	
function battleBandit2D(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER";
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	hpBar();
	attackBandit2D();}}
		else{	Bandit2Ddead();}
	
	
	}

function Bandit2Ddead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='forestTrade' type='button' value='Continue on trail' class='button' /></form></span>";
	document.getElementById("forestTrade").onclick = forestTrade;
		}
		
/* - - - - - - - - - -	P	A	T	H		T	H	R	E	E	- - - - - - - - - - */

function path3(){
	backLayout.className = "backgroundcobblestone";
	Char.path = "path3";
	document.getElementById("char").className = "bandit_char";
	speech = "You've decided to go down cobblestone trial, and as your walking the down the trail a bandit jumps out a tree and trys to kill you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakBanditP3' type='button' value='Sneak past Bandit'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='attackBanditP3' type='button' value='Encounter Bandit'class='button'/></form></span>";
	document.getElementById("sneakBanditP3").onclick = sneakBanditP3;
	document.getElementById("attackBanditP3").onclick = statsBanditP3;
	}

function sneakBanditP3(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackBanditP3' type='button' value='Encounter Bandit'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollBanditP3' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("sneakRollBanditP3").onclick = sneakRollBanditP3;
	document.getElementById("attackBanditP3").onclick = statsBanditP3;}
	
function sneakRollBanditP3(){
	
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest >= Char.sneak){
	speech = "You have successfully sneaked pass the Bandit and you gain 50xp<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	path3A();}
	else{speech = "The Bandit saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsBanditP3();}
	//document.getElementById("attackGoblinP1").onclick = statsGoblinP1;	
	}

function statsBanditP3(){
		Monster1.type = "bandit";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (bandit.hplvl * Char.lvl) + bandit.hp;
		Monster1.armor = (bandit.armorlvl * Char.lvl) + bandit.armor;
		Monster1.attack = (bandit.attacklvl * Char.lvl) + bandit.attack;
		Monster1.rangeattack = (bandit.rangeattacklvl  * Char.lvl) + bandit.rangeattack ;
		Monster1.mag = (bandit.maglvl * Char.lvl) + bandit.mag;	
		attackBanditP3();
}

function attackBanditP3(){
	
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "bandit_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleBanditP3' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleBanditP3").onclick = battleBanditP3;
	}
	
function battleBanditP3(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER";
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	hpBar();
	attackBanditP3();}}
		else{	BanditP3dead();}
	
	
	}

function BanditP3dead(){
	
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='forestTrade' type='button' value='Continue on trail' class='button' /></form></span>";
	document.getElementById("forestTrade").onclick = path3A;
}

function path3A(){
	backLayout.className = "backgroundcobblestone";
	Char.path = "path3A";
	document.getElementById("char").className = "chest_item";
	speech = "As your walking down the trail you see a giant chest beside a tree surrounded by tall grass.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='continuePath' type='button' value='Continue on the path'class='button'/></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='path3aChest' type='button' value='Try to open locked chest'class='button'/></form></span>";
	aBtn.innerHTML += "<span class='actionBtns'><form><input id='searchGrass' type='button' value='Search tall grass'class='button'/></form></span>";
	document.getElementById("searchGrass").onclick = searchGrass;
	document.getElementById("path3aChest").onclick = path3aChest;
	document.getElementById("continuePath").onclick = path3B;
	}
	
function path3B(){
	backLayout.className = "backgroundcobblestone";
	Char.path = "path3B";
	document.getElementById("char").className = "dwarf_char";
	speech = "You continue on your adventure and start to notice that there is broken glass mugs all over the ground and you notice a dwarf sitting agaisnt a tree taking a nap.  As you star walking by him he wakes up and jumps towards you in a angry rage.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='encounter' type='button' value='Encounter the Drunk Dwarf'class='button'/></form></span>";
	aBtn.innerHTML = "";
	document.getElementById("encounter").onclick = encPath3B;
	}
	
function encPath3B(){
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='talk' type='button' value='Talk to Dwarf'class='button'/></form></span>";
	aBtn.innerHTML += "<span class='actionBtns'><form><input id='attackDwarfP3B' type='button' value='Roll to attack'class='button'/></form></span>";
	document.getElementById("talk").onclick = talkDwarf;
	document.getElementById("attackDwarfP3B").onclick = attackDwarfP3B;
	}
	
	
function attackDwarfP3B(){
	path3C();
	speech = "You start to pull out your "+ Char.crafted +" and the dwarf runs away in fear.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	}	
function talkDwarf(){
	if(dwarfTalked == "yes"){
		speech = "You start to think back and see that this is the brother of the dwarf from the tavern.  You do your best at stopping the dwarf and inform him that his brother in in the tavern waiting on him and you point towards the town to show him the way to go.  After helping the dwarf, he decides to be genrious by giving you items plus showing you a safer way to go.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackDwarfP3B' type='button' value='Roll to attack'class='button'/></form></span>";
		dBtn.innerHTML = "<span class='actionBtns'><form><input id='follow' type='button' value='Follow the dwarf'class='button'/></form></span>";
		document.getElementById("follow").onclick = path2B;
		document.getElementById("attackDwarfP3B").onclick = attackDwarfP3B;
	}else{
		speech = "You try your best to stop him from attacking you but he is to drunk to relize what was going on and he thinks that you are trying to steal his things.  So he attacks you by throwing beer mugs at you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackDwarfP3B' type='button' value='Roll to attack'class='button'/></form></span>";
		document.getElementById("attackDwarfP3B").onclick = attackDwarfP3B;
	}}
	
	
function path3C(){
	backLayout.className = "backgroundcobblestone";
	document.getElementById("char").className = "orc_char";
	Char.path = "path3C";
	speech = "Orc<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='statsOrc2B' type='button' value='Encounter Orc'class='button'/></form></span>";
	aBtn.innerHTML = "";
	document.getElementById("statsOrc2B").onclick = statsOrc2B;
	}
		
function statsOrc3C(){
		Monster1.type = "orc";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (orc.hplvl * Char.lvl) + orc.hp;
		Monster1.armor = (orc.armorlvl * Char.lvl) + orc.armor;
		Monster1.attack = (orc.attacklvl * Char.lvl) + orc.attack;
		Monster1.rangeattack = (orc.rangeattacklvl  * Char.lvl) + orc.rangeattack ;
		Monster1.mag = (orc.maglvl * Char.lvl) + orc.mag;	
		attackMonsterOrc2B();
}

function attackMonsterOrc3C(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "orc_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleOrc2B' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleOrc2B").onclick = battleOrc2B;
	}
	
function battleOrc3C(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.rangeattack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER"; 
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	hpBar();
	attackMonsterOrc3C();}}
		else{	Orc2Bdead();}
	
	
	}

function Orc3Cdead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='path3D' type='button' value='Continue on swamp path' class='button' /></form></span>";
	document.getElementById("path3D").onclick = path3D;
}
	
function path3D(){
	backLayout.className = "backgroundcobblestone";
	Char.path = "path3D";
	document.getElementById("char").className = "wolf_char";
	speech = "Wolf<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
		dBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakWolf3D' type='button' value='Sneak past Wolf'class='button'/></form></span>";
	dBtn.innerHTML += "<span class='actionBtns'><form><input id='statsWolf3D' type='button' value='Encounter Wolf'class='button'/></form></span>";
	if(path1Asearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass3D' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass3D").onclick = searchGrass3D;}else{aBtn.innerHTML = ""}
	document.getElementById("sneakWolf3D").onclick = sneakWolf3D;
	document.getElementById("statsWolf3D").onclick = statsWolf3D;
	}

function searchGrass3D(){
	path3Dsearch = 0;
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	Char.sneaktest = Math.floor(Math.random()*25);
	Char.hppotions ++;
	if(path3Dattack == 0){speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";path1B();}
	else{if(Char.sneaktest <= Char.sneak){
			speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			forestTrade();}	
		else{speech = "You search the grass and find a Health potion and " + Char.goldgain + " gold but the wolf notices you and comes over to attack you.<br /><div class='speech1'>"+speech+"</div>";
			storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
			statsWolf3D();}}
	
	}

function sneakWolf3D(){
	speech = "Roll to see if your sneak will succeed.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='statsWolf3D' type='button' value='Encounter Wolf'class='button'/></form></span>";
	
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='sneakRollWolf3D' type='button' value='Roll' class='button' /></form></span>";
	document.getElementById("statsWolf3D").onclick = statsWolf3D;
	document.getElementById("sneakRollWolf3D").onclick = sneakRollWolf3D;}
	
function sneakRollWolf3D(){
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackWolf3D' type='button' value='Encounter Wolf'class='button'/></form></span>";
	Char.sneaktest = Math.floor(Math.random()*(25 - Char.sneak)) ; 
	if(Char.sneaktest <= Char.sneak){
	speech = "You have successfully sneaked pass the Wolf and you gain 50xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.xp = Char.xp + 50;
	if(path3Dsearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1A' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1A").onclick = searchGrass1A;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='forest' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("forestTrade").onclick = forestTrade;}
	else{speech = "The wolf saw you and is now coming to attack you!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	statsWolf3D();}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='attackWolf3D' type='button' value='Encounter Wolf'class='button'/></form></span>";	
	document.getElementById("attackWolf3D").onclick = statsWolf3D;	
	}

function statsWolf3D(){
		path3Dattack = 0;
		Monster1.type = "wolf";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (wolf.hplvl * Char.lvl) + wolf.hp;
		Monster1.armor = (wolf.armorlvl * Char.lvl) + wolf.armor;
		Monster1.attack = (wolf.attacklvl * Char.lvl) + wolf.attack;
		Monster1.rangeattack = (wolf.rangeattacklvl  * Char.lvl) + wolf.rangeattack ;
		Monster1.mag = (wolf.maglvl * Char.lvl) + wolf.mag;	
		attackWolf3D();
}

function attackWolf3D(){
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleWolf3D' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleWolf3D").onclick = battleWolf3D;
	}
	
function battleWolf3D(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
				Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER"; 
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The "+ Monster1.type +" did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackMonsterWolf3D();}}
		else{	Wolf3Ddead();}
		
	
	}

function Wolf3Ddead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	speech = "You killed the "+ Monster1.type +". You gain 100xp.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
	Char.xp = Char.xp + 100;
	refreshstats();
	//didILevel();
	if(path3Dsearch == 1){
		aBtn.innerHTML = "<span class='actionBtns'><form><input id='searchGrass1A' type='button' value='Search tall grass'class='button'/></form></span>";
		document.getElementById("searchGrass1A").onclick = searchGrass1A;}else{}
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='forestTrade' type='button' value='Continue on dirt path' class='button' /></form></span>";
	document.getElementById("forestTrade").onclick = forestTrade;
		}
		

function forestTrade(){
	Char.path = "forestTrade";
	backLayout.className = "backgroundmnt";
	speech = "You walk into the alley way looking for the Forest Merchant the gypsy was talking about and then in the darkest part of the alley way stands a dirty man with a little shop.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='leave' type='button' value='Head towards Mountain' class='button' /></form></span>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='buyMerch' type='button' value='Buy items' class='button' /></form></span>";
	aBtn.innerHTML += "<span class='actionBtns'><form><input id='attackMerch' type='button' value='Attack Forest Merchant' class='button' /></form></span>";
	document.getElementById("leave").onclick = finalP;
	document.getElementById("buyMerch").onclick = buyMerch;
	document.getElementById("attackMerch").onclick = attackMerch;
	}
	
function attackMerch(){
	refreshstats();
	document.getElementById("hppotionbtn").onclick = drinkUp;
	dBtn.innerHTML = "";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackingTheMerch' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("attackingTheMerch").onclick = attackingTheMerch;
	}
	
function attackingTheMerch(){
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the Forest Merchant.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Archer"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - forestMerch.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	forestMerch.hp = forestMerch.hp - Char.dmg;
		if(forestMerch.hp >= 0){	
				speech = "You did " + Char.dmg + " to the Forest Merchant." + "He still has " + forestMerch.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				forestMerch.dmg = (Math.floor(Math.random()*6) / 5) * forestMerch.attack; 
				if(forestMerch.dmg <= 0){forestMerch.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - forestMerch.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The Forest Merchant did " + forestMerch.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackMerch();}}
		else{	forestMerchdead();}
	
	}

function forestMerchdead(){
	
	aBtn.innerHTML = ""; 
	speech = "You killed the Forest Merchant. You gain 100xp. You steal all of his gold but you loose 2 luck.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Char.luck --; Char.luck --;
	Char.xp = Char.xp + 100;
	Char.gold = Char.gold + forestMerch.income;
	refreshstats();
	//didILevel();
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='leave' type='button' value='Head towards Mountain' class='button' /></form></span>";
	document.getElementById("leave").onclick = finalP;
		}
	
function buyMerch(){
	refreshstats();
	speech = "What are you buying?<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "";
	if(Buy.item5 == 1){aBtn.innerHTML = "<span class='actionBtns'><form><input id='buyLockpick2' type='button' value='Lockpick - 20g' class='button' /></form></span>";}else{}
	if(Buy.item6 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyHpPotion2' type='button' value='HP potion - 45g' class='button' /></form></span>";}else{}
	if(Buy.item7 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyKey' type='button' value='Key - 60g' class='button' /></form></span>";}else{}
	if(Buy.item8 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyRope' type='button' value='Rope - 45g' class='button' /></form></span>";}else{}
	if(Buy.item9 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyCCharm' type='button' value='Crit Charm - 75g' class='button' /></form></span>";}else{}
	if(Buy.item10 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buySCharm' type='button' value='Sneak Charm - 75g' class='button' /></form></span>";}else{}
	if(Char.type == "Warrior"){if(Buy.item11 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyShield2' type='button' value='Steel sword - 175g' class='button' /></form></span>";}else{}}
	else if(Char.type == "Archer"){if(Buy.item11 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyArrow2' type='button' value='Steel Bow - 175g' class='button' /></form></span>";}else{}}
	else if(Char.type == "Mage"){if(Buy.item11 == 1){aBtn.innerHTML += "<span class='actionBtns'><form><input id='buyStaff2' type='button' value='Spellbook - 175g' class='button' /></form></span>";}else{}}	
	if(Buy.item5 == 1){document.getElementById("buyLockpick2").onclick = buyLockpick2;}else{}
	if(Buy.item6 == 1){document.getElementById("buyHpPotion2").onclick = buyHpPotion2}else{}
	if(Buy.item7 == 1){document.getElementById("buyKey").onclick = buyKey;}else{}
	if(Buy.item8 == 1){document.getElementById("buyRope").onclick = buyRope;}else{}
	if(Buy.item9 == 1){document.getElementById("buyCCharm").onclick = buyCCharm;}else{}
	if(Buy.item10 == 1){document.getElementById("buySCharm").onclick = buySCharm;}else{}
	if(Buy.item11 == 1){if(Char.type == "Warrior"){document.getElementById("buyShield2").onclick = buyShield3;}
		else if(Char.type == "Archer"){document.getElementById("buyArrow2").onclick = buyArrow3;}
		else if(Char.type == "Mage"){document.getElementById("buyStaff2").onclick = buyStaff3;}}else{}
	}

function buyLockpick2(){
	if(Char.gold >= 20){
		speech = "You put the lockpick in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item5 = 0;
		Char.gold = Char.gold - 20;
		forestMerch.income = forestMerch.income + 20;
		Char.lockpicks ++;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
}

function buyHpPotion2(){
	if(Char.gold >= 45){
		speech = "You put the Health Potion in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item6 = 0;
		Char.gold = Char.gold - 45;
		forestMerch.income = forestMerch.income + 45;
		Char.hppotions ++;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buyKey(){
	if(Char.gold >= 60){
		speech = "You put the Key on your ring<br /><div class='speech1'>"+speech+"</div>";
		Buy.item7 = 0;
		Char.gold = Char.gold - 60;
		forestMerch.income = forestMerch.income + 60;
		Char.key ++;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}	
	
function buyRope(){
	if(Char.gold >= 45){
		speech = "You put the rope in your bag<br /><div class='speech1'>"+speech+"</div>";
		Buy.item8 = 0;
		Char.gold = Char.gold - 45;
		forestMerch.income = forestMerch.income + 45;
		Char.rope ++;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}

function buyCCharm(){
	if(Char.gold >= 75){
		speech = "You put the Crit Charm in your bag<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item9 = 0;
		Char.gold = Char.gold - 75;
		forestMerch.income = forestMerch.income + 75;
		Char.crit ++;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buySCharm(){
	if(Char.gold >= 75){
		speech = "You put the Sneak Charm in your bag<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item10 = 0;
		Char.gold = Char.gold - 75;
		forestMerch.income = forestMerch.income + 75;
		Char.sneak ++;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}	
	
function buySword3(){
	if(Char.gold >= 175){
		speech = "You equip your new sword<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item11 = 0;
		Char.gold = Char.gold - 175;
		forestMerch.income = forestMerch.income + 175;
		Char.hp = Char.hp + 150;
		Char.dmghp = Char.attack + 15;
		hpBar();
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buyArrow3(){
	if(Char.gold >= 175){
		speech = "You now have a new bow<br /><div class='speech1'>"+speech+"</div>";
		Buy.item11 = 0;
		Char.gold = Char.gold - 175;
		forestMerch.income = forestMerch.income + 175;
		Char.rangeattack = Char.rangeattack + 15;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	
function buyStaff3(){
	if(Char.gold >= 175){
		speech = "Your spells grow stronger<br /><div class='speech1'>"+speech+"</div>";	
		Buy.item11 = 0;
		Char.gold = Char.gold - 175;
		forestMerch.income = forestMerch.income + 175;
		Char.mag = Char.mag + 20;
		buyMerch();}
	else{speech = "You do not have enough gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	}
	

	

	
function nothing(){
	}
	
function path2cChest(){
	}
	
function path3aChest(){
	}
	
	
function searchGrass(){
	aBtn.innerHTML = "";
	Char.goldgain = Math.floor(Math.random()*30) + 1;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You gain " + Char.goldgain + " gold!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	
	if(path == "path1A"){
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackWolfP1A' type='button' value='Roll to attack'class='button'/></form></span>";
	document.getElementById("attackWolfP1A").onclick = attackWolfP1A;
	dBtn.innerHTML = "";}
	
	else if(path == "path1C"){
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackMysteryP1C' type='button' value='Roll to attack'class='button'/></form></span>";
	document.getElementById("attackMysteryP1C").onclick = attackMysteryP1C;
	dBtn.innerHTML = "";}
	
	else if(path == "path2"){
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='attackRatP2' type='button' value='Roll to attack'class='button'/></form></span>";
	document.getElementById("attackRatP2").onclick = attackRatP2;
	dBtn.innerHTML = "";
	}}
	
function talkTroll(){
	path2C();
	}	




/*--------  screen refresh ------------- */
	
function refreshstats(){
	document.getElementById("stats2").innerHTML = "<ul><li>Health: " + Char.hp + "</li><li>Armor: " + Char.armor + "</li><li>Attack: " + Char.attack + "</li><li>Range Attack: " + Char.rangeattack + "</li><li>Magic: " + Char.mag + "</li><li>Sneak: " + Char.sneak + "</li><li>Lockpicking: " + Char.lp + "</li><li>Luck: " + Char.luck + "</li><li>Crit: " + Char.crit + "</li><li>Lockpicks: " + Char.lockpicks + "</ul>";
	backLayout.innerHTML = '<div id="item"></div><div id="char"></div><div id="hpbar"> <p>Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="hppotion"><div id="hpwrapper"><form><input id="hppotionbtn" type="button" value="Health potion: '+ Char.hppotions +'" class="button"/></form></div>';
	backLayout.innerHTML += '<div id="chargold">COINS ' + Char.gold + 'g</div>';
	document.getElementById("hpwrapper").innerHTML = '<form><input id="hppotionbtn" type="button" value="Health potion: '+ Char.hppotions +'" class="button"</form>';
	}

function hpBar(){
		Char.hpbar = (Char.dmghp / Char.hp) * 100;
		document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>';
}

function drinkUp(){
	if(Char.hppotions == 0){
		speech = "You dont have any Health potions left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";}
	else if(Char.dmghp == Char.hp){speech = "Your health is full.";}
	else{
		Char.hppotions --;
		Char.hptest = Char.hp - Char.dmghp;
		if(Char.hptest < 100){
			Char.dmghp = Char.hp;}
		else{ 
			Char.dmghp = Char.dmghp + 100;
		}
	}
	Char.hpbar = (Char.dmghp / Char.hp) * 100;
	document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>';
	document.getElementById("hpwrapper").innerHTML = '<form><input id="hppotionbtn" type="button" value="Health potion: '+ Char.hppotions +'" class="button"</form>'
}

function restartGame(){
	Char.path = 'init';
	Char.path;
	}

function didILevel(){
	if(Char.xp >= 100 && Char.lvl == 1){levelup();}
	
	}
function tryAgain(){location.reload(true);}

/*--------  Final Boss Fight ------------- */

function finalP(){	
aBtn.innerHTML = "";
	Char.path = "finalP";
	backLayout.className = "backgroundmnt";
	document.getElementById("char").className = "ogre_char";
	speech = "Your right outside the mountain. Then out of no where you hear something huge running towards you. When you look you realize that the monster is a giant ogre.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	dBtn.innerHTML = "<span class='actionBtns'><form><input id='statsOgre' type='button' value='Encounter Ogre'class='button'/></form></span>";
	document.getElementById("statsOgre").onclick = statsOgre;
	}

function statsOgre(){
		path1Cattack = 0;
		Monster1.type = "Ogre";
		Monster1.form = 1;
		Monster1.lvl = Char.lvl;
		Monster1.hp = (ogre.hplvl * Char.lvl) + ogre.hp;
		Monster1.armor = (ogre.armorlvl * Char.lvl) + ogre.armor;
		Monster1.attack = (ogre.attacklvl * Char.lvl) + ogre.attack;
		Monster1.rangeattack = (ogre.rangeattacklvl  * Char.lvl) + ogre.rangeattack ;
		Monster1.mag = (ogre.maglvl * Char.lvl) + ogre.mag;	
		attackOgreF();}
		
function attackOgreF(){
	dBtn.innerHTML = "";
	speech = "Roll to see how much dmg you hit the " + Monster1.type + " for. <br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	document.getElementById("char").className = "ogre_char";
	document.getElementById("hppotionbtn").onclick = drinkUp;
	
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='battleOgre' type='button' value='Roll to attack' class='button' /></form></span>";
	document.getElementById("battleOgre").onclick = battleOgre;
	}
	
function battleOgre(){
	aBtn.innerHTML = "";
	Char.critchance = Math.floor(Math.random()*101);
	if(Char.critchance <= Char.crit){Char.gotacrit = 2;}
	else{Char.gotacrit = 1;}
	speech = "You attack the " + Monster1.type + ".<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	if(Char.type == "Warrior"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.attack) * Char.gotacrit).toFixed(0); }
	else if(Char.type == "Archer"){Char.dmg =parseFloat(((Math.floor(Math.random()*11) / 10) * Char.rangeattack) * Char.gotacrit).toFixed(0);}
	else if(Char.type == "Mage"){Char.dmg = parseFloat(((Math.floor(Math.random()*11) / 10) * Char.mag) * Char.gotacrit).toFixed(0);}
	Char.dmg = Char.dmg - Monster1.armor;
	if(Char.dmg <= 0){Char.dmg = 0;}else{}
	
	Monster1.hp = Monster1.hp - Char.dmg;
		if(Monster1.hp >= 0){	
				speech = "You did " + Char.dmg + " to the " + Monster1.type +"." + "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; 
			getOut();
			}else{	Ogredead();}}
			
			
function getOut(){		
speech = "The Ogre swings his club and trys to hit you!.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
dBtn.innerHTML = "<span class='actionBtns'><form><input id='rollLeft' type='button' value='Roll to the Left' class='button' /></form></span>";
dBtn.innerHTML += "<span class='actionBtns'><form><input id='rollRight' type='button' value='Roll to the Right' class='button' /></form></span>";
document.getElementById("rollRight").onclick = rollRight;
document.getElementById("rollLeft").onclick = rollLeft;
}

function rollRight(){
	rollChance = Math.floor(Math.random()*100);
	if(rollChance >= 20){
		dBtn.innerHTML = "";
		speech = "The Ogre misses and you counter attack him and he takes 50 damage.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Monster1.hp = Monster1.hp - 50;
	speech = "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; attackOgreF();
		}
	else{
		dBtn.innerHTML = "";
		speech = "You rolled into some trees and the ogre hits you with his club.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	ogreSwing();
	}
	}

function rollLeft(){
	rollChance = Math.floor(Math.random()*100);
	if(rollChance >= 20){
		dBtn.innerHTML = "";
		speech = "The Ogre misses and you counter attack him and he takes 50 damage..<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	Monster1.hp = Monster1.hp - 50;
	speech = "He still has " + Monster1.hp +" health left.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; attackOgreF();
		}
	else{dBtn.innerHTML = "";
		speech = "You rolled into some rocks and the ogre hits you with his club.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	ogreSwing();
	}
	}


function ogreSwing(){			
			Monster1.dmg = parseFloat((Math.floor(Math.random()*6) / 5) * Monster1.attack).toFixed(0); 
				if(Monster1.dmg <= 0){Monster1.dmg = 0;}else{}
				Char.dmghp = Char.dmghp - Monster1.dmg; 
				if(Char.dmghp <= 0){speech = "You died... GAMEOVER";
				storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
				aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Revert to Last Save' class='button' /><input id='restart' type='button' value='Restart Game' class='button' /></form></span>"; 
document.getElementById("tryAgain").onclick = tryAgain;document.getElementById("restart").onclick = restartGame;
				Char.dmghp = 0;
				Char.hpbar = (Char.dmghp / Char.hp) * 100;
				document.getElementById("hpbar").innerHTML = '<p> Health: '+ Char.dmghp +'</p><div id="hpbarwrapper" style="width:'+ Char.hpbar +'%";></div></div><div id="gold"></div>'; }
				else{speech = "The " + Monster1.type + " did " + Monster1.dmg + " to you.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>"; hpBar(); attackOgreF();}}
	
function Ogredead(){
	document.getElementById("char").className = "";
	aBtn.innerHTML = ""; 
	  
	Char.goldgain = Math.floor(Math.random()*(30 + Char.luck)) + Char.luck;
	Char.gold = Char.gold + Char.goldgain;
	speech = "You loot "+ Char.goldgain + " gold.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";  
	Char.xp = Char.xp + 250;
	speech = "You killed the "+ Monster1.type +". You gain 550xp, "+Char.goldgain+" gold and a new weapon.<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	refreshstats();
	continueScreen();
		}

function continueScreen(){
	speech = "You killed the "+ Monster1.type +". Which means that you beat the start of this game and if you would like to you could play again!<br /><div class='speech1'>"+speech+"</div>";
	storyBox.innerHTML = "<div class='jordanStack'>"+speech+"</div>";
	aBtn.innerHTML = "<span class='actionBtns'><form><input id='tryAgain' type='button' value='Replay?' class='button' /></form></span>"; 
	document.getElementById("tryAgain").onclick = restartGame();
	
	}
