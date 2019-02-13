const bodyParser = require('body-parser');
const reply_from = require('./reply_from');

module.exports = function (app){

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  //landing page is send to front end
  app.get('/', function(req, res){
  res.sendFile('/home/cipherxo1/work/web-dev/assignment/msg/views/index.html')
  });

  //when message from front end is send to server
  app.post('/send', function(req, res){
    console.log(req.body.msg);
    //stores the keys from the json reply file
    keys = Object.keys(reply_from);
    //checks whether the Q asked is present in the file or not
    if(keys.includes(req.body.msg.toLowerCase())){
      //if Q is present then reply is generated and send back to frontend
      res.json({message: reply_from[req.body.msg.toLowerCase()], state: true});
    }
    //else a error message is displayed
    else {
      res.json({state: false});
    }
  });
};
