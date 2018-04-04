/** *******
 * Set of controllers for displaying and saving data to db inspiration
 * ../models gets models to find contents.js where
 * I defined the contents table and to find admin.js where I 
 * defined the admin table
 * 
 * Defining methods for the controller
 * inspirationController
 */

// Dependencies
const db = require("../models");

// TESTING
// console.log("db",db);
// console.dir(req.body);


/**
* GET route for getting all of the contents
* View http://localhost:8080/api/all
* Use sequelize findAll({}) with no options
* Returns all entries for the contents table  
*/
module.exports = {
    /**
    * GET route for getting all of the contents
    * SELECT * 
    * FROM inspiration.contents;
    * ORDER BY section, desc
    */
    findAll: function(req, res) {
        console.log("find all contents");
        db.Contents
            .findAll({
                order: [['section', 'DESC']]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    /**
     * GET route for getting one specific contents by its id
     * SELECT * 
     * FROM inspiration.contents;
     * WHERE id = id
    */
    findById: function(req, res) {
        console.log("found by ID");
        db.Contents
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    /**
     * GET route for getting one specific contents by its id
     * SELECT * 
     * FROM inspiration.Admin;
     * WHERE id = id
    */
    findById: function(req, res) {
        console.log("found by ID");
        db.Admin
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    /**
     * GET route for getting all admin by there id
     * SELECT * 
     * FROM inspiration.admin;
    */
    findAll: function(req, res) {
        console.log("find all Admin Users");
        db.Admin
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    /**
     * GET route for getting one specific admin by its id
     * SELECT * 
     * FROM inspiration.admin;
     * WHERE id = id
    */
    create: function(req, res) {
        db.Admin
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },


    /**
     * GET route for getting one specific admin by its id
     * SELECT * 
     * FROM inspiration.admin;
     * WHERE id = id
    */
    create: function(req, res) {
        db.Contents
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Contents,
            { where: {
                id: req.body.id
            }}
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};


