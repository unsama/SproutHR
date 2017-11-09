/**
 * Created by 4slashmac on 7/6/17.
 */
var mysql = require("mysql");

module.exports = {
    config: function(db_name){
        var connection = mysql.createConnection({
            host: "46.101.37.156",
            user: "sprout",
            password: "sprout12345",
            database: db_name
        });
        return connection;
    },

    connect: function(connection){
        connection.connect(function (err) {
            if(err){
                console.error('error connecting: ' + err.stack);
                return err;
            }
            else {
                console.log("connected db_conn.js as id " + connection.threadId);
                return connection;
            }
        });
        return connection;
    },

    close: function(connection){
        connection.end();
    },

    connection: function (db_name) {
        var connection  = mysql.createPool({
            connectionLimit : 100,
            host: "46.101.37.156",
            user: "sprout",
            password: "sprout12345",
            database: db_name
        });
        return connection;
    }
};
