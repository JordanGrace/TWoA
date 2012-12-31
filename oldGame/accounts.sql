DROP DATABASE IF EXISTS jordangr_aldoun_db;
CREATE DATABASE IF NOT EXISTS jordangr_aldoun_db;
USE jordangr_aldoun_db;

CREATE TABLE account_table(
id int PRIMARY KEY auto_increment,
username CHAR(50),
password CHAR(50),
email_address CHAR(50),
userType ENUM('guest','account','admin')
);

SHOW COLUMNS FROM account_table;

CREATE TABLE account_save(
id int PRIMARY KEY auto_increment,
username CHAR(50),
timeSaved TIMESTAMP,
location CHAR(20),
charType ENUM('Mage','Warrior','Archer'),
charLvl SMALLINT,
charHp SMALLINT,
charArmor SMALLINT,
charAttack SMALLINT,
charRangeAttack SMALLINT,
charMag SMALLINT,
charSneak SMALLINT,
charSneaksave SMALLINT,
charLp SMALLINT,
charLpSave SMALLINT,
charCrit SMALLINT,
charCritSave SMALLINT,
charLuck SMALLINT,
charLuckSave SMALLINT,
charStatpoints SMALLINT,
charStatstop SMALLINT,
charSkillPoints SMALLINT,
charSkillStop SMALLINT,
charCon SMALLINT,
charStr SMALLINT,
charDex SMALLINT,
charMagic SMALLINT,
charGold SMALLINT,
charGoldgain SMALLINT,
charHppotions SMALLINT,
charLockpicks SMALLINT,
charDmg SMALLINT,
charDmghp SMALLINT,
charCritchance SMALLINT,
charDmgpercent SMALLINT,
charGotacrit SMALLINT,
charKey SMALLINT,
charRope SMALLINT,
charHpbar SMALLINT,
charHptest SMALLINT,
charXp SMALLINT,
charSneaktest SMALLINT,
charCrafted ENUM('Sword','Staff','Bow'),
item1 TINYINT,
item2 TINYINT,
item3 TINYINT,
item4 TINYINT,
item5 TINYINT,
item6 TINYINT,
item7 TINYINT,
item8 TINYINT,
item9 TINYINT,
item10 TINYINT,
item11 TINYINT,
item12 TINYINT,
item13 TINYINT,
item14 TINYINT,
item15 TINYINT,
item16 TINYINT,
item17 TINYINT,
item18 TINYINT,
path1Asearch TINYINT,
path1Csearch TINYINT,
path2search  TINYINT,
path2attack TINYINT,
path1Aattack TINYINT,
path1Cattack TINYINT,
path3Dattack TINYINT,
path3Dsearch TINYINT,
path2Cattack TINYINT,
path2Copen TINYINT,
gypsyTalked ENUM('yes','no'),
dwarfTalked ENUM('yes','no')
);


SHOW COLUMNS FROM account_save;

INSERT INTO account_table
VALUES
(NULL,'jordangr_admin','abc123','email@address.com','admin');


SELECT * FROM account_table;

INSERT INTO account_save
VALUES
(NULL,'jordangr_admin',NULL,'path1A','Mage',1,120,7,10,10,120,5,5,5,5,7,2,6,5,0,10,0,0,0,0,200,0,1,1,0,0,0,120,0,0,1,0,0,100,0,0,0,'Staff',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'no','no');

SELECT * FROM account_save;



