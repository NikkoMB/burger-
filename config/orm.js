// Requiring the connection.js in the same folder
var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
    
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }

var orm = {
    // Select All The Burgers in the database
    selectAll: function (table, cb) {
        // creating the queryString 
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    selectOne: function (table, condition, cb) {
        // creating the queryString 
        var queryString = "SELECT * FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    

    // Insert one burger
    insertOne: function (table, val, cb) {
        // creating the queryString 
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + val + "');";
        connection.query(queryString, function (err, result) {

            if (err) throw err;
            cb(result);
        });
    },

    // Update one burger
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }



}


// Export ORM
module.exports = orm;

