-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-04-2022 a las 01:06:56
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  `title` varchar(124) DEFAULT NULL,
  `body` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `userid`, `title`, `body`) VALUES
(1, 31, 'Este es el primer artículo', 'acá dice lo importante... ponele'),
(2, 31, 'Este es el segundo artículo', 'sarasa varias importante... ponele'),
(5, 31, 'JavaScript no es primo hermano de Java', 'Aunque parezca lo contrario, no tienen un pomo que ver entre sí ????'),
(6, 31, 'JSON means JavaScript Object Notation', 'Chocolate por la noticia, man'),
(7, 28, 'BSON es un superset de JSON', 'MongoDB lo utiliza porque, al ser binario, es más rápido para procesar grandes volúmenes de datos'),
(8, 28, 'este es un nuevo texto', 'MongoDB lo utiliza porque, al ser binario, es más rápido para procesar grandes volúmenes de datos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(90) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`) VALUES
(28, 'Lorena Laura Lumiere', 'triplel@mail.com', '$2b$10$j9e9VEUN3BzNdWo086Nqa.kFtwwd/FWSmgI1uAaPBzck4/zLbxGNe', 'http://localhost:3030/img-1649710790117.jpg'),
(30, 'Malena Macarena Macaron', 'triplem@mail.com', '$2b$10$UeSA2Ycuv.jrmkjKv6yeKe7uKS1MEiwBT4B/Frwzh4.k8do7CZIl6', 'http://localhost:3030/img-1649710964257.jpg'),
(31, 'Nefatlí Nazarena Naomi', 'triplen@mail.com', '$2b$10$Zhy5i0D7mgU6bGl9TWU0vuQSZO0kamP82qeJEz8FXvRtsKFfGMRwC', 'http://localhost:3030/img-1649711197391.jpg'),
(32, 'Paula Peque Paretto', 'triplep@mail.com', '$2b$10$/gOsBW.c0WGoUO91/8Ay6.K6R71T3mkHlkA5BgBtM.0vOQ41oGLwO', 'http://localhost:3030/img-1650286744834.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
