const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// parse data from url
app.use(bodyParser.urlencoded({ extended: true }));

// load static files such as image
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./routes/index'));
app.use('/tags', require('./routes/tags'));
app.use('/categories', require('./routes/categories'));  // 👈 เพิ่มบรรทัดนี้

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});