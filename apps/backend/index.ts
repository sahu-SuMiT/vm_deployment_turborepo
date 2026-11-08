import express from "express";
import { prisma } from "@repo/db"
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method);
    next();
})

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "next backend running"
    });
})
app.post("/users", async (req, res) => {
    console.log(req.body)
    await prisma.user.create({
        data: {
            username: req.body.username,
            password: req.body.password
        }
    })

    res.json({
        "success": "true",
        "message": "loaded to db"
    })
})

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany()
    res.json({
        success: true,
        message: users
    })
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`backend running on port ${port}`)
})