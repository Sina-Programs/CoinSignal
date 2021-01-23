const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compress = require('compression')
const parser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(compress({'level': 9}));
app.use(express.static(path.join(__dirname, '/dist')));


app.listen(80, () => console.log('Listening on port 80...'));