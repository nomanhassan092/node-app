const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('HELLO WORLD, IM WORKING')
})

app.listen(3000, () => {
    console.log('Application is listening on port: ', 3000)
})