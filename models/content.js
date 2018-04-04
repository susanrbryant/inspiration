/** 
 * models | contents.js
 * 
 * Data types avaliable in Sequelize
 * http://docs.sequelizejs.com/manual/tutorial/models-definition.html
 * MySQL - https://dev.mysql.com/doc/refman/5.7/en/blob.html
 * 
 * Inside the Inspiration Database 
 * Define & create the contents table & columns
 * (Contents object)
 * id is automatically generated 
 */
module.exports = function (sequelize, Sequelize) {

    var Contents = sequelize.define(
        "contents", {
            section: {
                type: Sequelize.STRING
            },
            heading: {
                type: Sequelize.STRING
            },
            subheading: {
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.TEXT('long')
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
            live: {
                type: Sequelize.BOOLEAN
            },
        }, {
            timestamps: false
        }
    );
    return Contents;
}

// Syncs with DB
// Contents.sync();

/**
 * Makes the Contents Model available for other files (and will also create a table)
 * // module.exports = Contents; 
*/
