# WebApiRestApi
#Backend Mysql Database
#
#
 CREATE TABLE `recipes`.`gerichte` (
  `idgerichte` INT NOT NULL AUTO_INCREMENT,
  `art` VARCHAR(20) NOT NULL,
  `dauer` TIME NULL,
  `name` VARCHAR(45) NOT NULL,
  `suess` TINYINT NULL,
  `zutaten` JSON NOT NULL,
  `kategorie` VARCHAR(45) NOT NULL,
  `link` VARCHAR(60) NULL,
  `varianten` INT NULL,
  PRIMARY KEY (`idgerichte`),
  CONSTRAINT `fk_varianten`
    FOREIGN KEY (`varianten`)
    REFERENCES `recipes`.`gerichte` (`idgerichte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
  );
  #
 CREATE TABLE `recipes`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `passwort` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);
#
CREATE TABLE `recipes`.`zutaten` (
  `idzutaten` INT NOT NULL AUTO_INCREMENT,
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
  `idwebai` INT NOT NULL AUTO_INCREMENT,
  `gerichteId` INT NULL,
  `accId` INT NULL,
  `neu` TINYINT NULL,
  `rating` INT NULL,
  `lasteaten` DATE NULL,
  `score` INT NULL,
  `missing` JSON NULL,
  `having` JSON NULL,
  PRIMARY KEY (`idwebai`),
  INDEX `accId_idx` (`accId` ASC) VISIBLE,
  INDEX `gerichteId_idx` (`gerichteId` ASC) VISIBLE,
  CONSTRAINT `fk_gerichteId`
    FOREIGN KEY (`gerichteIdgerichteId`)
    REFERENCES `recipes`.`gerichte` (`idgerichte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_accId`
    FOREIGN KEY (`accId`)
    REFERENCES `recipes`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    #
    CREATE TABLE `recipes`.`portionator` (
  `idportionator` INT NOT NULL AUTO_INCREMENT,
  `menge` INT NULL,
  `einheit` VARCHAR(45) NULL,
  `idrezepte` INT NULL,
  `idzutaten` INT NULL,
  PRIMARY KEY (`idportionator`),
  INDEX `fk_zutatId_idx` (`idzutaten` ASC) VISIBLE,
    INDEX `fk_rezeptIdx` (`idrezepte` ASC) VISIBLE,
  CONSTRAINT `fk_rezeptId`
    FOREIGN KEY (`idrezepte`)
    REFERENCES `recipes`.`gerichte` (`idgerichte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_zutatId`
    FOREIGN KEY (`idzutaten`)
    REFERENCES `recipes`.`zutaten` (`idzutaten`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
