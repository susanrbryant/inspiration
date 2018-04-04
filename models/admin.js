/** 
 * models | admin.js
 * 
 * Data types avaliable in Sequelize
 * http://docs.sequelizejs.com/manual/tutorial/models-definition.html
 * MySQL - https://dev.mysql.com/doc/refman/5.7/en/blob.html
 * 
 * Inside the Inspiration Database 
 * Define & create the admin Table & columns
 * (Admin object)
 * id is automatically generated 
 */
module.exports = function (sequelize, Sequelize) {

    var Admin = sequelize.define(
        "admin", {
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            subheading: {
                type: Sequelize.STRING
            },
            preferredname: {
                type: Sequelize.STRING
            },
            userphone: {
                type: Sequelize.STRING
            },
            useremail: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            pwd: {
                type: Sequelize.STRING
            },
            userverified: {
                type: Sequelize.BOOLEAN
            },
            changepwd: {
                type: Sequelize.BOOLEAN
            },
            changepwddate: {
                type: Sequelize.DATE
            },
            securitygroup: {
                type: Sequelize.BOOLEAN
            },
            addedBy: {
                type: Sequelize.STRING
            },
            addedDate: {
                type: Sequelize.DATE
            },
            modifiedBy: {
                type: Sequelize.STRING
            },
            modifiedDate: {
                type: Sequelize.DATE
            },
            devComments: {
                type: Sequelize.STRING
            },
        }, {
            timestamps: false
        }
    );
    return Contents;
}

// Syncs with DB
// Admin.sync();
/**
 * Makes the Admin Model available for other files (and will also create a table)
 * // module.exports = Admin; 
 */