/*            Configuration            */
require('./config/config');
require('./config/db.config');

/*    Dependency Installation    */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

/*                Express Setup                */
const app = new express();
    app.set('view-engine', 'ejs');
    app.use(cors()); //Something about Cors is fucking things up
    app.use(express.json());
    app.use(express.urlencoded({extended: false}) );//URL encoded

/*               STATIC folder access                */
app.use('/res', express.static(path.join(__dirname, "/res/")));
app.use('/styles', express.static(path.join(__dirname, "/res/styles/")));
app.use('/scripts', express.static(path.join(__dirname, "/res/scripts/")));
app.set('views', path.join(__dirname, "/res/","views"));
app.use('/media', express.static(path.join(__dirname, "/res/media/")));
//console.log(app.settings)

/*                Requests                */
            /*      GET     */ 
app.get('/', function(req, res) {
    res.render('index.ejs');
}); 
            /*      POST     */
            /*      PUT     */
            /*      DELETE     */

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });