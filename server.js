// ============================================
// 👉 Students must implement all routes except
// "POST /api/seed", which is already provided.
// ============================================

// import statements

// Middleware

// Connect MongoDB

// ===============================
//  ROUTES
// ===============================

// 🧩 POST: /api/seed
// This route adds some sample products to the database.
// Students can run this route once to populate data.
app.post("/api/seed", async (req, res) => {
  const sampleProducts = [
    { name: "Apple", cost: 50, brand: "Apple", category: "Fruits", image: "images/apple.jpg" },
    { name: "Banana", cost: 20, brand: "Banana", category: "Fruits", image: "images/banana.jpg" },
    { name: "Mango", cost: 70, brand: "Mango", category: "Fruits", image: "images/mango.jpg" },
    { name: "iPhone", cost: 50000, brand: "Apple", category: "Electronics", image: "images/iphone.jpg" },
    { name: "Samsung TV", cost: 40000, brand: "Samsung", category: "Electronics", image: "images/tv.jpg" },
    { name: "T-Shirt", cost: 500, brand: "Nike", category: "Clothing", image: "images/tshirt.jpg" }
  ];

  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  await CartItem.deleteMany({});
  res.json({ message: "✅ Product data seeded successfully, 🧹 Cart cleared successfully" });
});

// Implement the rest of the methods.

// ===============================
//  START SERVER use the port 3000 only.
// ===============================
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
