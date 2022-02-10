const http = require('http');

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
const options = {
    host: hostname, port: port,
    path: '/api/',
    method: 'GET'
};

getAll = async function(path) {
    let json = '';

    Object.assign(custom_options, options)
    custom_options.path += path;
    callback = function(response) {
        response.on('data', function (chunk) {
            json += chunk;
        });
        response.on('end', () => {
            /* for each workout part retrieve it */
            console.log(json)
            return JSON.parse(json)
        });
    }
    var req = http.request(custom_options, callback);
    req.end();
}
getOne = async function(path, id) {
    let json = '';

    Object.assign(custom_options, options)
    custom_options.path += path + '/' + id;
    callback = function(response) {
        response.on('data', function (chunk) {
            json += chunk;
        });
        response.on('end', () => {
            /* for each workout part retrieve it */
            return JSON.parse(json)
        });
    }
    var req = http.request(custom_options, callback);
    req.end();
}

module.exports = async function(req, resp) {
    custom_options = {};
    let json = '';
    let ext = req.params.ext
    
    var data = 
    {
        page: 'workout',
        title: 'Options',
        workout_list: [],
    }

    /*    Retrieve Specfic Workout    */
    paths = [['workouts'], ['workout-section/'], ['exercise']]
    
    getAll("workouts")
    .then(
        value => {
            console.log("Sucess " + value)
        }
    )
    .catch(
        console.log("Failure")
    )

    
    resp.render('index.ejs', {data: data});

    /* Retrieve Workout Part */
    //Object.assign(custom_options, options)
    //custom_options.path += 'workout-section/' //+ id;
    //var req = http.request(custom_options, callback);
    //req.end();

    /* Retrieve Workout Part */
    //Object.assign(custom_options, options)
    //custom_options.path += 'exercise/' //+ id;
    //var req = http.request(custom_options, callback);
    //req.end();
    
    /* FOR EACH child */
        /* Retrieve Workout Part */
        /* Retrieve all Excercises */

    
    /*    Render    */    
    /*
    render_page = function () {
        list = JSON.parse(json)
        list.forEach(element => {
            if (element.name == ext) {
                console.log(element)
                data.title = element.name;
            }
        });
        data.workout_list = list;
        var data = {
            page: 'workout',
            title: 'Options',
            workout_list: []
        }
        console.log(data);
        resp.render('index.ejs');
    }
    */

    /*    Retrieve    */
    /*
    workout_options = {};
    Object.assign(workout_options, options)
    workout_options.path += 'workouts';
    callback = function(response) {
        response.on('data', function (chunk) {
          json += chunk;
        });
        response.on('end', render_page);
      }
    var req = http.request(workout_options, callback);
    req.end();*/
}; 

