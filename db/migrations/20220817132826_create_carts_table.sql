-- migrate:up
CREATE TABLE `carts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  CONSTRAINT `carts_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);
-- migrate:down
DROP TABLE carts;
