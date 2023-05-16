const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
      },
    });
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = app;
