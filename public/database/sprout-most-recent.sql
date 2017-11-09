CREATE TABLE IF NOT EXISTS `access_rights` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `object_id` int(11) NOT NULL COMMENT 'referances to alias_model table',
  `read` bit(1) NOT NULL,
  `write` bit(1) NOT NULL,
  `create` bit(1) NOT NULL,
  `delete` bit(1) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `object_id` (`object_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;