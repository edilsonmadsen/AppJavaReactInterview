DROP TABLE IF EXISTS `ProductsList`;
CREATE TABLE `ProductsList` (
                          `id` int NOT NULL AUTO_INCREMENT,
                          `name` varchar(50) DEFAULT NULL,
                          `category` varchar(50) DEFAULT NULL,
                          `preco` double DEFAULT NULL,
                          `descricao` varchar(1250) DEFAULT NULL,
                          PRIMARY KEY (`id`)
);