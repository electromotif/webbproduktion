# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Värd: 127.0.0.1 (MySQL 5.6.20)
# Databas: pantopia
# Genereringstid: 2015-02-22 23:38:32 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Tabelldump images
# ------------------------------------------------------------

CREATE TABLE `images` (
  `iid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `description` text,
  `user_id` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`iid`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;

INSERT INTO `images` (`iid`, `title`, `path`, `alt`, `description`, `user_id`, `uploaded`)
VALUES
	(1,'Scirocco bridge','img/bridge.jpg','Scirocco bridge, Umpalompo march 2012','Scirocco bridge, Umpalompo march 2012',1,'2015-02-20 16:07:39'),
	(2,'Climber','img/climber.jpg','Unknown explorer climbing a radio installation outside Moscow. June 2014.','Unknown explorer climbing a radio installation outside Moscow. June 2014.',1,'2015-02-20 16:09:21'),
	(3,'Processing plant interior','img/factory.jpg','Processing plant interior. Stockholm 2015.','Processing plant interior. Stockholm 2015.',1,'2015-02-20 16:11:25'),
	(4,'Steelworks interior','img/steelworks.jpg','Steelworks interior. Chicago 2013.','Steelworks interior. Chicago 2013.',1,'2015-02-20 16:11:38'),
	(5,'Nara Dreamland','img/nara-dreamland.jpg','Nara Dreamland. Abandoned amusement park. Nara, Japan 2014.','Nara Dreamland. Abandoned amusement park. Nara, Japan 2014.',1,'2015-02-20 16:13:37');

/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump menu_links
# ------------------------------------------------------------

CREATE TABLE `menu_links` (
  `mlid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `menu` varchar(255) NOT NULL,
  `plid` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT '0',
  PRIMARY KEY (`mlid`),
  KEY `menu` (`menu`),
  KEY `plid` (`plid`),
  CONSTRAINT `menu_links_ibfk_1` FOREIGN KEY (`menu`) REFERENCES `menus` (`machine_name`),
  CONSTRAINT `menu_links_ibfk_2` FOREIGN KEY (`plid`) REFERENCES `menu_links` (`mlid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Tabelldump menus
# ------------------------------------------------------------

CREATE TABLE `menus` (
  `menu_name` varchar(255) NOT NULL,
  `machine_name` varchar(255) NOT NULL,
  PRIMARY KEY (`machine_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;

INSERT INTO `menus` (`menu_name`, `machine_name`)
VALUES
	('First','menu-main-menu');

/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump pages
# ------------------------------------------------------------

CREATE TABLE `pages` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `img_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pid`),
  KEY `img_id` (`img_id`),
  KEY `user_id` (`user_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`img_id`) REFERENCES `images` (`iid`),
  CONSTRAINT `pages_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`),
  CONSTRAINT `pages_ibfk_3` FOREIGN KEY (`video_id`) REFERENCES `videos` (`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;

INSERT INTO `pages` (`pid`, `title`, `body`, `img_id`, `user_id`, `video_id`, `created`)
VALUES
	(1,'Footer','<p class=\"ftrhead\">The Concrete Island Explorer<img src=\"img/cielogo.svg\"></p><p>cie@urbanites.net | Place de Sade 4812 Toronto | tel. 666-827364 all hours</p><p>Copyright Concrete Island Explorer 2015 - All rights reserved</p>',4,1,NULL,'2015-02-19 15:04:46');

/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump url_alias
# ------------------------------------------------------------

CREATE TABLE `url_alias` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `pid` int(1) NOT NULL,
  PRIMARY KEY (`aid`),
  KEY `pid` (`pid`),
  CONSTRAINT `url_alias_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `pages` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Tabelldump users
# ------------------------------------------------------------

CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `description` text,
  `joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`uid`, `fname`, `lname`, `email`, `pass`, `description`, `joined`)
VALUES
	(1,'Perko','Erpok','erkop@net.net','',NULL,'2015-01-21 22:53:07');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump videos
# ------------------------------------------------------------

CREATE TABLE `videos` (
  `vid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `description` text,
  `user_id` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`vid`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
