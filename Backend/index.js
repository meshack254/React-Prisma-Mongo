const express = require("express");
const cors = require("cors");
const acios = require("axios");
//Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());


//Create request


//Read request
app.get("/user", (req, res) => {
  async function main() {
    await prisma.$connect();
    const users = await prisma.user.findMany();
    res.send(users)
    console.log(users);
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.log(e);
      await prisma.$disconnect();
      process.exit();
    });
});

//Update request

//Delete request


const server = app.listen(process.env.PORT, () => {
  console.log("Server running");
});

