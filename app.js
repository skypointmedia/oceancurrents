const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }


app.use(express.static(path.join(__dirname, 'build')),requireHTTPS);

app.listen(port, () => console.log(`App is live on port ${port}!`))