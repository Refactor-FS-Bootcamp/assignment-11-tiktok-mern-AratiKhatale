import express from 'express';
import mongoose from "mongoose";
import Cors from 'cors'
import Videos from './dbModel.js'

const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://AratiKhatale:Shani@123@cluster0.omegg8b.mongodb.net/?retryWrites=true&w=majority'

//middlewares
app.use(express.json())
app.use(Cors())

//Db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
app.get('/', (req, res) => res.status(200).send("TikTok mern clone -- TheWebDev"))

app.post('/V2/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if(err)
        res.status(500).send(err)
        else
        res.status(201).send(data)
    })
})

app.get('/V2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err)
        res.status(500).send(err)
        else
        res.status(200).send(data)
    })
})

app.listen(port, () => console.log(`Listening on localhost: ${port}`))