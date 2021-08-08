const express = require('express')
const app = express()
const port = 4000

app.get('/hcz', (request, response) => {
    response.send('test')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})