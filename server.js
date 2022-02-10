/*            Configuration            */
require('./config/config');
require('./config/db.config');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

/*    Dependency Installation    */
const express = require('express');
const router = express.Router();
const route = require('./routing/routes/index.route')
const wo = require('./workout-page')
const http = require('http');
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
app.use('/api', route);
app.set('views', path.join(__dirname, "/res/","views"));
app.use('/res', express.static(path.join(__dirname, "/res/")));
app.use('/styles', express.static(path.join(__dirname, "/res/styles/")));
app.use('/scripts', express.static(path.join(__dirname, "/res/scripts/")));
app.use('/media', express.static(path.join(__dirname, "/res/media/")));
//console.log(app.settings)

/*                Requests                */
//Note: Not sure on the best way to perform API calls so using the HTTP library
            /*      GET     */ 
const options = {
    host: hostname, port: port,
    path: '/api/',
    method: 'GET'
};
app.get('/', function(req, res) {
    res.redirect('/workouts');
}); 
app.get('/workout', function(req, res) {
    res.redirect('/workout/empty');
}); 
app.get('/workout/:ext', wo); 
app.get('/exercises', function(req, res) {
    let json = '';
    /* Loading Render */
    
    /* Retrieve all Exercises */
    http.get(`http://${hostname}:${port}/api/exercises`, (resp) => {

        resp.on('data', (chunk) => {
            json += chunk;
        })
        resp.on('end', () => { 
            /* Return all Workouts */
            console.log(JSON.parse(json))
            res.render('index.ejs', {data: 
                {
                    page: 'list-of',
                    title: 'Exercises',
                    list: JSON.parse(json)
                }
            });
            /* ------------------ */
        })
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}); 
app.get('/workout-sections', function(req, res) {
    let json = '';
    /* Loading Render */

    /* Retrieve all Workout Sections */
    http.get(`http://${hostname}:${port}/api/workout-sections`, (resp) => {

        resp.on('data', (chunk) => {
            json += chunk;
        })
        resp.on('end', () => { 
            /* Return all Workouts */
            console.log(JSON.parse(json))
            res.render('index.ejs', {data: 
                {
                    page: 'list-of',
                    title: 'Workout Sections',
                    list: JSON.parse(json)
                }
            });
            /* ------------------ */
        })
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});
app.get('/workouts', function(req, res) {
    let json = '';
    /* Loading Render */

    /* Retrieve all Workouts */
    http.get(`http://${hostname}:${port}/api/workouts`, (resp) => {

        resp.on('data', (chunk) => {
            json += chunk;
        })
        resp.on('end', () => { 
            /* Return all Workouts */
            console.log(JSON.parse(json))
            res.render('index.ejs', {data: 
                {
                    page: 'list-of',
                    title: 'Workouts',
                    list: JSON.parse(json)
                }
            });
            /* ------------------ */
        })
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}); 
            /*      POST     */
            /*      PUT     */
            /*      DELETE     */
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });