var express = require('express');
var sql = require('mssql');

var favRouter = express.Router();

favRouter.route('/')
  .get(function(req, res) {

    var userName, admin;

    if (req.query.userName && req.query.admin) {
      userName = req.query.userName;
      admin = req.query.admin;
    }
          
    var request = new sql.Request();
    request.query("SELECT blah FROM blah INNER JOIN (blah INNER JOIN blah ON blah=blah) ON blah=blah WHERE blah'" + userName + "' AND blah" + admin, function(err, recordset) {
      if (err) {
        res.send(err);
      } else {
        if (recordset.length ===0) {
          res.end();
          res.status(404).end();
        } else {
          res.jsonp(recordset);
        }
      }
    });
  });

module.exports = favRouter;