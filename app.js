const express = require('express')
const app = express()
const port = 3000
let tasks = []

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