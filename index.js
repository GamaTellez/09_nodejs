const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 8000;
var math = require('./functions');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/main_view', function(request, response) {
    response.render('main_view');
});
//listen to form from .ejs template with action = "/calc_function"
app.get('/calc_function', math.shipping_math);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

