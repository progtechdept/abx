const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const userRoutes = require('./server/routes/itemRoutes');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/items', userRoutes);

app.listen(3000, (req, res) => {
  console.log(`Serving up on 3000`);
});
