# WebApiRestApi
#Backend Mysql Database
#
#
CREATE TABLE `recipes`.`rezepte` (
  `idRecipes` INT NOT NULL AUTO_INCREMENT,
  `Foodtyp` VARCHAR(20) NULL DEFAULT 'AllyouCanEat',
  `Duration` INT NULL DEFAULT -1,
  `Name` VARCHAR(45) NOT NULL,
  `Varianten` JSON NULL,
  `Ingredients` JSON NOT NULL,
  `Category` VARCHAR(20) NOT NULL,
  'suess' TINYINT NULL,
  `Link` VARCHAR(60) NULL,
  PRIMARY KEY (`idRecipes`));
  #
  CREATE TABLE `recipes`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `pw` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `user_UNIQUE` (`user` ASC) VISIBLE
  );
#
CREATE TABLE `recipes`.`zutaten` (
  `idzutaten` INT NOT NULL,
  `name` INT NOT NULL,
  `einheit` VARCHAR(45) NOT NULL,
  `haltbarkeit` TIME NULL,
  `typ` VARCHAR(45) NOT NULL,
  `preis` INT NULL,
  PRIMARY KEY (`idzutaten`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);
  #
  CREATE TABLE `recipes`.`inventory` (
  `idinventory` INT NOT NULL,
  `menge` INT NOT NULL,
  `Ablaufdatum` DATE NULL,
  `accId` INT NOT NULL,
  `zutId` INT NOT NULL,
  PRIMARY KEY (`idinventory`),
  INDEX `accid_idx` (`accId` ASC) VISIBLE,
  INDEX `zutId_idx` (`zutId` ASC) VISIBLE,
  CONSTRAINT `accId`
    FOREIGN KEY (`accId`)
    REFERENCES `recipes`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `zutId`
    FOREIGN KEY (`zutId`)
    REFERENCES `recipes`.`zutaten` (`idzutaten`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    #
    CREATE TABLE `recipes`.`webai` (
  `idwebAi` INT NOT NULL,
  `accId` INT NULL,
  `recipeId` INT NULL,
  `neu` TINYINT NULL,
  `bewertung` INT NULL,
  `lastCooked` DATE NULL,
  `missing` JSON NULL,
  `possesing` JSON NULL,
  `Score` INT NULL,
  PRIMARY KEY (`idwebAi`),
  INDEX `accId_idx` (`accId` ASC) VISIBLE,
  CONSTRAINT `accId`
    FOREIGN KEY (`accId`)
    REFERENCES `recipes`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `recipeId`
    FOREIGN KEY ()
    REFERENCES `recipes`.`inventory` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    
