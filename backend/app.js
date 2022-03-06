const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/book.rotes");
require("./database/mongoose");

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:6000/books

app.listen(6000, () => console.log("server is listening !"));
