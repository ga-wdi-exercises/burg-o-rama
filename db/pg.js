var pg = require('pg');

var connectionString ='postgres://Cthulu:' + process.env.DB_PASSWORD + '@localhost/burgorama';

  function allOrders(req, res, next){
    console.log('allBurgers called');
	  pg.connect(connectionString, function(err, client, done) {
	    if(err) {
	      done()
	      console.log(err)
	      return res.status(500).json({success: false, data: err})
	    }
	    var query = client.query('SELECT * FROM orders', function(err, result) {
	      done()
	      if (err) {
	        return console.error('error running select query', err);
	      }
	      res.rows = result.rows;
	      next()
	    });
      // console.log(query);
      // console.log('above was query');
      // console.log(client.query()); //seems to break the program
      // console.log('above was client.query()');
	  });

	  console.log('allBurgers ran');
	}

  function addBurger(req, res, next){
      console.log('addBurger called');
  	  pg.connect(connectionString, function(err, client, done) {
  	    if(err) {
  	      done()
  	      console.log(err)
  	      return res.status(500).json({success: false, data: err})
  	    }
  	    var queryOrders = client.query('INSERT INTO orders (STUFF) VALUES (MONEY)' [req.body.STUFF], //insert orders
         function(err, result) {
  	      done()
  	      if (err) {
  	        return console.error('error running insert queryOrders', err);
  	      }
  	      next()
  	    });
  	    var queryMeats = client.query('INSERT INTO meats (STUFF) VALUES (MONEY)' [req.body.STUFF], //insert meats should this be orders join meats?
         function(err, result) {
  	      done()
  	      if (err) {
  	        return console.error('error running insert queryMeats', err);
  	      }
  	      next()
  	    });
        var queryCheeses = client.query('INSERT INTO cheeses (STUFF) VALUES (MONEY)' [req.body.STUFF],
        //insert cheeses should this be orders join cheeses?
         function(err, result) {
  	      done()
  	      if (err) {
  	        return console.error('error running insert queryCheeses', err);
  	      }
  	      next()
  	    });
        var queryToppings = client.query('INSERT INTO toppings (STUFF) VALUES (MONEY)' [req.body.STUFF],
        //insert toppings should this be orders join toppings?
        function(err, result) {
  	      done()
  	      if (err) {
  	        return console.error('error running insert queryToppings', err);
  	      }
  	      next()
  	    });
  	  });
      console.log('addBurger ran');
  	}
