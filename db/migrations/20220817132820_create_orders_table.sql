-- migrate:up
CREATE TABLE `orders` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `order_date` timestamp NOT NULL,
  `updated_at` timestamp,
  `user_id` int NOT NULL,
  `address_id` int NOT NULL,
  CONSTRAINT `orders_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_address_id_fk` FOREIGN KEY (`address_id`) REFERENCES `user_address` (`id`)
);

CREATE TABLE `order_product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  CONSTRAINT `order_product_order_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_product_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);

CREATE TABLE `orders_status` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `order_id` int NOT NULL,
  CONSTRAINT `orders_status_order_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
);

CREATE TABLE `order_product_status` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `order_product_id` int NOT NULL,
  CONSTRAINT `order_product_status_order_product_id_fk` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`id`)
);

-- migrate:down
DROP TABLE orders;
DROP TABLE order_product;
DROP TABLE orders_status;
DROP TABLE order_product_status;