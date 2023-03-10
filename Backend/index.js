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
app.post("/newuser", (req, res) => {
  const body = req.body;
  async function createUser() {
    await prisma.$connect();
    await prisma.user.upsert({
      where: { email: body.email },
      create: {
        name: body.name,
        email: body.email,
        Posts: {
          create: {
            imageURL: body.imageURL,
            title: body.title,
            body: body.body,
          },
        },
      },

      update: {
        name: body.name,
        email: body.email,
        Posts: {
          create: {
            imageURL: body.imageURL,
            title: body.title,
            body: body.body,
          },
        },
      },
    });
  }

  createUser()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.log(e);
      await prisma.$disconnect();
      process.exit();
    });
});

//Read request
app.get("/posts", (req, res) => {
  async function main() {
    await prisma.$connect();
    const posts = await prisma.post.findMany({
      include: {
        user: true
      }
    });
    res.send(posts);
    console.log(posts);
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

