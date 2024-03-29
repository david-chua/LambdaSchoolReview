const express = require('express'); // importing a CommonJS module
const morgan = require('morgan');
const cors = require('cors');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

function addLambdaHeader(req,res,next){
  res.set('X-Lambda', 'rocks');
  next();
}

server.use((req,res,next) => {
  req.foo = 'iron maiden';
  console.log('iron maiden');
  next();
})

server.use((req,res,next) => {
  req.foo = 'lady gaga';
  console.log('the path is', req.path);
  next();
})

server.use('/api/hubs', hubsRouter);

server.get('/', addLambdaHeader, (req, res) => {
  // throw new Error('argh!! disaster');
  console.log(res.header);
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${req.foo} to the Lambda Hubs API</p>
  `);
});



server.use((err, req, res, next) => {
   res.status(500).json({
     message: err.messasge, // DEV
     stack: err.stack, // DEV
     custom: "Something went terrible" // Production
   })
})

module.exports = server;
