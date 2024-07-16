const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
   // res.send('Hello Home!')
    res.sendFile(__dirname+'/home.html')
  })

  app.get('/about', (req, res) => {
    //res.send('Hello About!')
    res.sendFile(__dirname+'/about.html')
  })

  app.get('/contact', (req, res) => {
    //res.send('Hello Contact!')
    res.sendFile(__dirname+'/contact.html')
  })


  app.get('/cake', (req, res) => {
    //res.send('Hello Cake!')
    res.sendFile(__dirname+'/home.html')
  })

  app.get('/cake/valsad', (req, res) => {
    res.send('Hello Valsad!')
  })
app.get('*', (req, res) => {
    res.send('SORRYYYYYYYYYYYYYYY!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})