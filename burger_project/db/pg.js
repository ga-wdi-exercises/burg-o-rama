var pg = require('pg');
var connectionString = "postgres://eminekoc:1297@localhost/burgers";


function showAllBurgers(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    var query = client.query("SELECT * FROM activeMovies;", function(err, result) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.rows = result.rows
      next()
    });
  });
}



modele.export.showAllBurgers = showAllBurgers
