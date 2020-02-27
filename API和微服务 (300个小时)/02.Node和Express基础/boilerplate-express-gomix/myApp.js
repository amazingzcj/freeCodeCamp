var express = require("express");
var app = express();
// --> 7)  Mount the Logger middleware here

// --> 11)  Mount the body-parser middleware  here
var bodyParser = require("body-parser");

/** 1) Meet the node console. */
// console.log("Hello World");

/** 2) A first working Express Server */
// app.get("/",function (req, res) {
//     res.send("Hello Express")
// })

/** 3) Serve an HTML file */
// app.get("/",function(req,res) {
// res.sendFile(__dirname + "/views/index.html")
// })

/** 4) Serve static assets  */
// app.use(express.static(__dirname + "/public"))

/** 5) serve JSON on a specific route */
// app.get("/json",function (req,res) {
//     res.json({"message": "Hello json"})
// })

/** 6) Use the .env file to configure the app */
// var response = "Hello World".toUpperCase();
// if (process.env.MESSAGE_STYLE === "uppercase") {
//   resonse = "Hello World".toUpperCase();
// } else {
//   resonse = "Hello World";
// }
// app.get("/json", function(req, res) {
//   res.json({ message: response });
// });

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
// app.use(function middleware(req, res, next) {
//   const string = `${req.method} ${req.path} - ${req.id}`
//   console.log(string)
//   console.log(req)
//   next();
// });

/** 8) Chaining middleware. A Time server */
// app.get(
//   "/now",
//   function middleware(req, res, next) {
//     req.string = "example"
//     next();
//   },
//   function(req, res) {
//     console.log("req.string:", req.string);
//     res.send(req.string);
//   }
// );

/** 9)  Get input from client - Route parameters */
// app.get("/:word/echo",function(req, res){
//   const word = req.params.word;
//   console.log({echo: word})
//   res.send({echo: word})
// })

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
// app.get("/params",function(req, res){
//   console.log(req.query)
//   const first = req.query.first;
//   const last = req.query.last;
//   console.log({value: `${first} ${last}`})
//   res.send({value: `${first} ${last}`})
// })

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
// app.use("/index", bodyParser.urlencoded({ extended: false }), function(
//   req,
//   res,
//   next
// ) {
//   console.log(req.body);
//   res.send(req.body);
// });

/** 12) Get data form POST  */
// app.post("/name", bodyParser.urlencoded({ extended: false }), function(req, res) {
// console.log(req.body);
// res.send(req);
// });



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
