 

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// -------------------------------------
// 1. MongoDB Connection
// -------------------------------------
mongoose
  .connect("mongodb://127.0.0.1:27017/libraryDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// -------------------------------------
// 2. Schema + Model
// -------------------------------------
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});

const Book = mongoose.model("Book", bookSchema);

// -------------------------------------
// 3. Routes (CRUD)
// -------------------------------------

// GET all books
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// POST create a new book
app.post("/books", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json({ message: "Book added", book });
});

// PATCH update (partial update)
app.patch("/books/:id", async (req, res) => {
  const updated = await Book.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },   // partial update
    { new: true }
  );
  res.json({ message: "Book updated", updated });
});

// DELETE remove book
app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

// -------------------------------------
// 4. Start Server
// -------------------------------------
app.listen(3000, () => console.log("Server running on port 3000"));
