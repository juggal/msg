const express = require('express');
const controller = require('./controller/controller');
const app = express();

//initializing all static files
app.use(express.static('./public'));

//starting the controllers
controller(app);

//listen at port 3000
app.listen(3000);
