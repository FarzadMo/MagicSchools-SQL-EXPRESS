var express = require ("express");
var mysql = require ("mysql");

var app = express ();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    port: 3306,
    database: "wizards_schools_db",
    user: "root",
    password: "",
    host: "localhost"
});

connection.connect(function(err){
    if (err) throw err;

    console.log("We are connected as"+ connection.threadId);

});

app.get("/", function(req, res){

    connection.query("SELECT * FROM schooles", function(request, result){

        console.log("-----------I am here ---------------");
        var html = "<ul>"

        html+= "<h1> This is our table content:</h1>";

        html+="<h3> The name and id of the magic schooles: </h3>";

        for (var i=0; i< result.length; i++){
            html+= "<li><p>"+ result[i].id + " "+ result[i].name+ "</p></li>"
        }

        html+="</ul>"
        
        res.send(html);
    });
});

app.listen(PORT, function(err){
    if(err) throw err;

    console.log ("app is listening");
});