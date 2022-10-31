const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('<a href="https://fullstack.edu.vn/learning/nodejs?id=e15146f1-a7c1-425c-ac71-77680c268529">thien tran</a>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

