-- migrate:up
CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(30),
  `email` varchar(300)  NOT NULL,
  `password` varchar(200)  NOT NULL,
  `created_at` timestamp  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `user_address` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `address` varchar(3000) NOT NULL,
  `user_id` int NOT NULL,
  CONSTRAINT `address_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) 
);
ALTER TABLE users ADD CONSTRAINT constraint_users_unique UNIQUE (email);
-- migrate:down
DROP TABLE users;
DROP TABLE user_address;