-- migrate:up
ALTER TABLE orders_status DROP COLUMN order_id;
ALTER TABLE order_product_status DROP COLUMN order_product_id;

-- migrate:down

