# WebApiRestApi
#Backend Mysql Database
#
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
  `Link` VARCHAR(60) NULL,
  PRIMARY KEY (`idRecipes`));
  #
  #
  #
  CREATE TABLE `recipes`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `pw` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `user_UNIQUE` (`user` ASC) VISIBLE
  );
#
#
#
