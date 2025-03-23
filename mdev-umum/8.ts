async function checkout(product_id: number, qty: number, price: number) {
  // Validasi input
  if (!product_id || qty <= 0 || price < 0) {
    return {
      status: 400,
      message: 'Invalid input data',
    };
  }

  try {
    // Insert order ke database
    const order = await Order.query().insert({
      product_id,
      qty,
      price,
    });

    return {
      status: 201,
      message: 'Success crested order',
      order,
    };
  } catch (error) {
    // Unhandled error
    return {
      status: 500,
      message: 'Failed to create order',
      error: error.message,
    };
  }
}
