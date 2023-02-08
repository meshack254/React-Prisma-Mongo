const express = require("express");
const cors = require("cors");
const acios = require("axios")
//Prisma
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express();
require("dotenv").config()

app.use(cors());
app.use(express.json());

async function main() {
    await prisma.$connect();
}

const server = app.listen(process.env.PORT, ()=> {
    console.log("Server running");
    app.get("")
})


// https://8080-meshack254-reactprisma-h4ku1st3dri.ws-eu85.gitpod.io