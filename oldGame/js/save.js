/*---------------S A V E   F U N C T I O N- -- -- -- -- ------*/
jQuery(document).ready(function(){
    jQuery('.ajaxform').submit( function() {
		document.getElementById('cPath').value = Char.path;
document.getElementById("cType").value = Char.type;
document.getElementById("cLvl").value = Char.lvl;
document.getElementById("cHp").value = Char.hp;
document.getElementById("cArmor").value = Char.armor;
document.getElementById("cAttack").value = Char.attack;
document.getElementById("cRange").value = Char.rangeattack;
document.getElementById("cMag").value = Char.mag;
document.getElementById("cSneak").value = Char.sneak;
document.getElementById("cSneakSave").value = Char.sneaksave;
document.getElementById("cLp").value = Char.lp;
document.getElementById("cLpSave").value = Char.lpsave;
document.getElementById("cCrit").value = Char.crit;
document.getElementById("cCritSave").value = Char.critsave;
document.getElementById("cLuck").value = Char.luck;
document.getElementById("cLuckSave").value = Char.lucksave;
document.getElementById("cStatPoints").value = Char.statpoints;
document.getElementById("cStatStop").value = Char.statstop;
document.getElementById("cSkillPoints").value = Char.skillpoints;
document.getElementById("cSkillStop").value = Char.skillstop;
document.getElementById("cCon").value = Char.con;
document.getElementById("cStr").value = Char.str;
document.getElementById("cDex").value = Char.dex;
document.getElementById("cMagic").value = Char.magic;
document.getElementById("cGold").value = Char.gold;
document.getElementById("cGoldGain").value = Char.goldgain;
document.getElementById("cHpPotions").value = Char.hppotions;
document.getElementById("cLockpicks").value = Char.lockpicks;
document.getElementById("cDmg").value = Char.dmg;
document.getElementById("cDmgHp").value = Char.dmghp;
document.getElementById("cCritChance").value = Char.critchance;
document.getElementById("cDmgPercent").value = Char.dmgpercent;
document.getElementById("cGotaCrit").value = Char.gotacrit;
document.getElementById("cKey").value = Char.key;
document.getElementById("cRope").value = Char.rope;
document.getElementById("cHpBar").value = Char.hpbar;
document.getElementById("cHpTest").value = Char.hptest;
document.getElementById("cXp").value = Char.xp;
document.getElementById("cSneakTest").value = Char.sneaktest;
document.getElementById("cCrafted").value = Char.crafted;
document.getElementById("cItem1").value = Buy.item1;
document.getElementById("cItem2").value = Buy.item2;
document.getElementById("cItem3").value = Buy.item3;
document.getElementById("cItem4").value = Buy.item4;
document.getElementById("cItem5").value = Buy.item5;
document.getElementById("cItem6").value = Buy.item6;
document.getElementById("cItem7").value = Buy.item7;
document.getElementById("cItem8").value = Buy.item8;
document.getElementById("cItem9").value = Buy.item9;
document.getElementById("cItem10").value = Buy.item10;
document.getElementById("cItem11").value = Buy.item11;
document.getElementById("cItem12").value = Buy.item12;
document.getElementById("cItem13").value = Buy.item13;
document.getElementById("cItem14").value = Buy.item14;
document.getElementById("cItem15").value = Buy.item15;
document.getElementById("cItem16").value = Buy.item16;
document.getElementById("cItem17").value = Buy.item17;
document.getElementById("cItem18").value = Buy.item18;
document.getElementById("path1As").value = path1Asearch;
document.getElementById("path1Cs").value = path1Csearch;
document.getElementById("path2s").value = path2search;
document.getElementById("path2a").value = path2attack;
document.getElementById("path1Aa").value = path1Aattack;
document.getElementById("path1Ca").value = path1Cattack;
document.getElementById("path3Da").value = path3Dattack;
document.getElementById("path3Ds").value = path3Dsearch;
document.getElementById("path2Ca").value = path2Cattack;
document.getElementById("path2Co").value = path2Copen;
document.getElementById("gTalked").value = gypsyTalked;
document.getElementById("dTalked").value = dwarfTalked;
console.log('Placed');
        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            dataType: 'json',
            data    : $(this).serialize(),
            success : function( data ) {
            	for(var id in data) {
            		jQuery('#' + id).html( data[id] );
				}
			}
        });
		console.log('Sent');
        return false;
    });
});