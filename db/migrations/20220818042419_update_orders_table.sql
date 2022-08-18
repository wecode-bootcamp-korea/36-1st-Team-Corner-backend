-- migrate:up
ALTER TABLE `orders` MODIFY order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;
ALTER TABLE `orders` MODIFY updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE order_product_status DROP FOREIGN KEY order_product_status_order_product_id_fk;
ALTER TABLE order_product ADD COLUMN order_product_status_id int NOT NULL;
ALTER TABLE order_product ADD CONSTRAINT order_product_order_product_status_id_fk FOREIGN KEY(order_product_status_id) REFERENCES order_product_status(id);

ALTER TABLE orders_status DROP FOREIGN KEY orders_status_order_id_fk;
ALTER TABLE orders ADD COLUMN orders_status_id int NOT NULL;
ALTER TABLE orders ADD CONSTRAINT orders_order_orders_status_id_fk FOREIGN KEY(orders_status_id) REFERENCES orders_status(id);

-- migrate:down

