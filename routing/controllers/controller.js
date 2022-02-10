
module.exports = class {
    constructor (name, model) {
        this.element_name = name;
        this._MODEL = model;
        console.log(this.element_name)
    };

    test_working = function() {
        console.log(`Working`);
    };

    add_one = async (req, res, next, entry) => {
        /*
            Still some heavy confusion over extending functions
            So changed the name so instead of extending
            Im calling a seprate function
        */
        console.log(`Adding New ${this.element_name}`);
        
        entry.save((err, doc) => {
            if (err) {
                console.log(`Failed to add a ${this.element_name}\n` +err)
                res.json({msg: `Failed to add ${this.element_name}\n` +err});
            } else {
                res.json({msg: `${this.element_name} added`})
            }
        });
    };

    get = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}, function(err, item) {
            console.log(`Getting specfic ${element_name}`);
            res.json(item);
        })
    };

    getAll = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.find(function(err, item) {
            console.log(this);
            console.log(`Getting all ${element_name}`);
            res.json(item);
        })
    };

    del = (req, res, next) => {
        this._MODEL.remove({_id: req.params.id}, function(err, result) {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    };
};



