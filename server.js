const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 8080;
const articlesRouter = require('./routes/articles');
const productsRouter = require('./routes/products');
const bodyParser = require('body-parser');

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
 // productsDir: path.join(__dirname, 'views/products'),
//  articlesDir: path.join(__dirname, 'views/articles')
}));

app.set('view engine', '.hbs');
//app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', productsRouter);





app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
