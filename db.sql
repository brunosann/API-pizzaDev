-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.11-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para pizzadev
CREATE DATABASE IF NOT EXISTS `pizzadev` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `pizzadev`;

-- Copiando estrutura para tabela pizzadev.pizzas
CREATE TABLE IF NOT EXISTS `pizzas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `img` varchar(100) NOT NULL DEFAULT '0',
  `size_p` float NOT NULL DEFAULT 0,
  `size_m` float NOT NULL DEFAULT 0,
  `size_g` float NOT NULL DEFAULT 0,
  `description` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela pizzadev.pizzas: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `pizzas` DISABLE KEYS */;
INSERT INTO `pizzas` (`id`, `name`, `img`, `size_p`, `size_m`, `size_g`, `description`) VALUES
	(1, 'Mussarela', 'pizza.png', 20.29, 25.99, 32, 'Pizza muito saborosa e deliciosa de se comer slc'),
	(2, 'Calabresa', 'pizza2.png', 20.82, 26.7, 33.65, 'Top demais essa pizza de calabresa em slc'),
	(3, 'Frango', 'pizza4.png', 20.5, 25.45, 33.59, 'Pizza muito boa de comer a toda hora'),
	(4, 'Legumes', 'pizza3.png', 19, 22, 28, 'Essa ganha pela apresentação: é uma das pizzas mais bonitas que temos! '),
	(5, 'Bacon', 'pizza5.png', 21, 24, 30, 'Pizza muito saborosa'),
	(6, 'Cheddar ', 'pizza6.png', 22, 25, 32, 'Todas as nossas pizzas são preparadas com massas frescas, produzidas artesanalmente na própria loja');
/*!40000 ALTER TABLE `pizzas` ENABLE KEYS */;

-- Copiando estrutura para tabela pizzadev.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL DEFAULT '0',
  `password` varchar(200) NOT NULL DEFAULT '0',
  `address` varchar(100) NOT NULL DEFAULT '0',
  `tel` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela pizzadev.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`, `tel`) VALUES
	(6, 'Bruno', 'teste@teste', '$2b$10$lggrFLsW58lYtPQyyFvvZONJd8QqaTLrO3Fpt54xL20hhRO0AXuv.', 'rua nova', '9999999');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
