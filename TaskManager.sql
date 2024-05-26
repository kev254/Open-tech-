-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 26, 2024 at 09:47 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TaskManager`
--

-- --------------------------------------------------------

--
-- Table structure for table `Issues`
--

CREATE TABLE `Issues` (
  `id` int(11) NOT NULL,
  `issue` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `assigned_to` varchar(50) DEFAULT NULL,
  `complainant_email` varchar(255) DEFAULT NULL,
  `complainant_phone` varchar(20) DEFAULT NULL,
  `tracking_number` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Issues`
--

INSERT INTO `Issues` (`id`, `issue`, `category`, `assigned_to`, `complainant_email`, `complainant_phone`, `tracking_number`, `status`, `created_at`) VALUES
(8, 'Proident dolore arc', 'Quaerat ut minim cup', 'Ullamco blanditiis f', 'zuqa@mailinator.com', 'Mollit consectetur d', 'ig5r0zw1bw', 'Open', '2024-05-23 13:42:43'),
(9, 'Proident dolore arc', 'Quaerat ut minim cup', 'Ullamco blanditiis f', 'okombakevin@gmail.com', 'Mollit consectetur d', '1e948maur8q', 'Open', '2024-05-23 13:48:53'),
(10, 'Dolor rem ad volupta', 'Perferendis sint aut', 'Inventore saepe ipsu', 'jilomoryr@mailinator.com', 'Consectetur voluptat', 'ef85jwch969', 'Open', '2024-05-23 14:04:30'),
(11, 'Elit reprehenderit', 'Est amet esse nemo', 'Sequi ea aspernatur ', 'zyhuvupuvo@mailinator.com', 'Velit qui eveniet q', 'u9diijdmf3', 'Open', '2024-05-23 14:04:42'),
(12, 'Tets', 'Test', 'Test', 'okombakevin@gmail.com', '070867536', '1r9qh3x1zkl', 'Open', '2024-05-23 14:15:28'),
(13, 'Test', 'Hello', 'Kiambu', 'okombakevin@gmail.com', '0701451519', 'rfbyjjcy7qd', 'Open', '2024-05-23 14:30:25'),
(14, 'Test', 'Hello', 'Kiambu', 'okombakevin@gmail.com', '080625262', 'f84yyfo4sgh', 'Open', '2024-05-23 14:32:43'),
(15, 'Test Complaint', 'Test', 'Hr', 'okombakevin@gmail.com', '0786535636', '87bq02zwpot', 'Open', '2024-05-23 14:41:54'),
(16, 'Test', 'Category 1', 'Assignee 2', 'okombakevin@gmail.com', '0701451519', '1vfm8on57ul', 'Open', '2024-05-23 14:51:39'),
(17, 'Test', 'Category 1', 'Assignee 2', 'okombakevin@gmail.com', '0701451519', 'xlpp8riol5o', 'Open', '2024-05-23 14:51:41'),
(18, 'Hello', 'Category 2', 'Assignee 1', 'okombakevin@gmail.com', '0701451519', '8ydw7nkinrv', 'Open', '2024-05-23 14:53:10'),
(19, 'test', 'Category 2', 'Assignee 1', 'okombakevin@gmail.com', '0701451519', 'slj94cb5s3', 'Open', '2024-05-23 14:58:08'),
(20, 'Test', 'Category 1', 'Assignee 1', 'okombakevin@gmail.com', '0701451519', 'qrj1h4qnv2p', 'Open', '2024-05-23 15:02:32'),
(21, 'Test', 'Category 1', 'Assignee 1', 'okombakevin@gmail.com', '07014151515', 'jl5syavm0ee', 'Open', '2024-05-23 15:03:47'),
(22, 'Test', 'Category 1', 'Assignee 1', 'okombakevin@gmail.com', '07014151515', '5xtjrsvpvd', 'Open', '2024-05-23 15:03:49'),
(23, 'Test', 'Category 1', 'Assignee 1', 'okombakevin@gmail.com', '07014151515', 'zqb0pd96jh', 'Open', '2024-05-23 15:03:50'),
(24, 'Test', 'Category 1', 'Assignee 1', 'okombakevin@gmail.com', '07014151515', '6bjee78dzd5', 'Open', '2024-05-23 15:03:50'),
(25, 'Doloremque laboriosa', 'Category 2', 'Assignee 1', 'babefe@mailinator.com', '57', 'vdo227ecg8a', 'Open', '2024-05-24 10:06:38'),
(26, 'Nulla voluptatem Es', 'Category 2', 'Assignee 1', 'kywyju@mailinator.com', '29', 'lrq2hz9zcx', 'Open', '2024-05-24 10:21:16'),
(27, 'Culpa nisi laborum ', 'Category 2', 'Assignee 1', 'cucaj@mailinator.com', '82', 'c3yt2woc42v', 'Open', '2024-05-24 10:21:52'),
(28, '4568', 'Category 2', 'Assignee 2', 'werty@mail.com', '368', 'yqutpjw6cef', 'Open', '2024-05-25 18:36:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Issues`
--
ALTER TABLE `Issues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Issues`
--
ALTER TABLE `Issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
