-- migrate:up
CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(30) NOT NULL
);
CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` decimal(14,2) NOT NULL,
  `detail` varchar(3000),
  `thumbnail_image_url` varchar(2048) NOT NULL,
  `stock` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp,
  `category_id` int NOT NULL,
  CONSTRAINT `products_category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);
CREATE TABLE `product_images` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `image_url` varchar(2048) NOT NULL,
  `product_id` int NOT NULL,
  CONSTRAINT `product_images_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);
-- migrate:down
DROP TABLE category;
DROP TABLE products;
DROP TABLE product_images;