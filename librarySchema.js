const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// --------------------------------------------------------
// 🔗 Connect to MongoDB
// --------------------------------------------------------
mongoose.connect("mongodb://localhost:27017/librarydb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// --------------------------------------------------------
// 📚 LibraryBook Schema + Model
// --------------------------------------------------------
const LibraryBookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  issued: Boolean
});

const LibraryBook = mongoose.model("LibraryBook", LibraryBookSchema);

// --------------------------------------------------------
// ✔ PATCH — Partial Update of Book
// --------------------------------------------------------
app.patch("/books/:id", async (req, res) => {
  const { id } = req.params;

  const updatedBook = await LibraryBook.findByIdAndUpdate(
    id,
    { $set: req.body }, // Only update sent fields
    { new: true }
  );

  res.json({
    message: "Book partially updated",
    updatedBook
  });
});

// --------------------------------------------------------
// ✔ HEAD — Only Headers (Check API or Resource Exists)
// --------------------------------------------------------
app.head("/books", (req, res) => {
  res.set("API-Name", "Library Management API");
  res.status(200).end();
});

// --------------------------------------------------------
// ✔ OPTIONS — Allowed Methods for /books
// --------------------------------------------------------
app.options("/books", (req, res) => {
  res.set("Allow", "PATCH, HEAD, OPTIONS, TRACE, CONNECT");
  res.sendStatus(200);
});

// --------------------------------------------------------
// ✔ TRACE — Echo back the request (Debugging)
// --------------------------------------------------------
app.trace("/debug", (req, res) => {
  res.status(200).send({
    message: "TRACE request data",
    method: req.method,
    headers: req.headers,
    body: req.body
  });
});

// --------------------------------------------------------
// ✔ CONNECT — Rare method (Tunnel Simulation)
// --------------------------------------------------------
app.connect("/proxy", (req, res) => {
  res.send("CONNECT request received: tunnel simulation active");
});

// --------------------------------------------------------
// Start Server
// --------------------------------------------------------
app.listen(5000, () => console.log("Server running on port 5000"));
