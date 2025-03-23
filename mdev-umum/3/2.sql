-- Menampilkan semua order beserta detail pelanggan dan item-item yang dibeli.
SELECT o.order_id, c.name AS customer_name, p.name AS product_name, oi.quantity, o.order_date
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;
