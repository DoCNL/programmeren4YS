// API version 3.0
var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

router.get("*", function(req, res){
var conn = mysql.createConnection('mysql://moderator:banaan22@localhost:3306/programmeren4?debug=true');

    res.contentType('application/json');

	conn.connect(function(err){
		if(err) console.log('connection error:', err);
	});

    conn.query('select * from film', function(error, rows, fields){
        if (error) {
            res.status(401).json(error);
        } else {
            res.status(200).json({ result: rows });
        };
    });
	conn.end();
});

module.exports = router;