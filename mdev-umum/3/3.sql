-- Menampilkan total penjualan per pelanggan.
SELECT c.customer_id, c.name, SUM(o.total) AS total_sales
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.customer_id, c.name;
