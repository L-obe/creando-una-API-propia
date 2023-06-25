const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const apiGenresRoutes = require('./routes/api/genresRouter');
const apiMoviesRoutes = require('./routes/api/moviesRouter');

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(apiGenresRoutes);
app.use(apiMoviesRoutes);

app.listen('3030', () => console.log('Servidor corriendo en el puerto http://localhost:3030'));