
const json_server = require("json-server");    // to create a json-server
const cors = require("cors");                // to connect frontend with the server

//creating json-server on to the videoserver(json-server is a function just like useState(). if we need to manipulate it, we need to store it in a variable)
const videoServer = json_server.create();

const middleware = json_server.defaults();      // creating middleware for converting json-js

const router = json_server.router("db.json")


videoServer.use(cors());                 // applying cors

videoServer.use(middleware);                  //applying middleware

videoServer.use(router)

const PORT = 8000;

videoServer.listen(PORT, ()=>{
  console.log("_____ videoServer is running on port :" + PORT + "___________");
})
