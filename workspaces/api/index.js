if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


app.listen(process.env.PORT || 80, () => {
  console.log(`app listening at ${process.env.PORT || 80}`)
})

app.use(express.static(path.join(__dirname, '../web-client/build')))

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../web-client/build', 'index.html'))
})

