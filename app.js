const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.port || 3000

const public_path = path.join(__dirname,("public"))
const partials_path = path.join(__dirname,("template/partials"))
const template_path = path.join(__dirname,("template/views"))

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path)


app.use(express.static(public_path))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/html', (req, res) => {
    res.render('html')
  })
  app.get('/css', (req, res) => {
    res.render('css')
  })
  app.get('/javascript', (req, res) => {
    res.render('javascript')
  })
  app.get('/backend', (req, res) => {
    res.render('backend')
  })
  app.get('*', (req, res) => {
    res.render('error')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})