const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
let tasks = []

// フロント側のローカルサーバーのポートは3001の前提
app.use((cors({
    origin: 'http://localhost:3001'
})));

app.use(express.json())

app.post('/task/add', (req, res) => {
    const task = req.body
    if (!(task.title && task.detail)) {
        return res.json({
            "ok": false,
            "error": "invalid paramater"
        })
    }
    
    res.json({
        "ok": true,
        "task": task
    })
    tasks.push(task)
})

app.get("/task/list", (req, res) => {
    res.json({
        "ok": true,
        "tasks": tasks
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})