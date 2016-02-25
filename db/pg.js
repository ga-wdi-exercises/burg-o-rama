var pg = require('pg');

var connectionString ='postgres://Cthulu:' + process.env.DB_PASSWORD + '@localhost/burgorama';

module.exports.allBurgers(req, res, next){
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
	    }); //may need to select from cheeses/toppings to get this to show correctly.
      // console.log(query);
      // console.log('above was query');
      // console.log(client.query()); //seems to break the program
      // console.log('above was client.query()');
	  });

	  console.log('allBurgers ran');
	}

//param names:
// burgName, meat, done, bread, cheeses, toppings

  function editBurger(req, res, next){
      console.log('editBurger called');
  	  pg.connect(connectionString, function(err, client, done) {
  	    if(err) {
  	      done()
  	      console.log(err)
  	      return res.status(500).json({success: false, data: err})
  	    }
        console.log(req.body);
        console.log('was req.body at non-error editBurger call');
        //peter seems to have an update SQL call here, going to try and skip that until it becomes obvious why it's actually super necessary.
  	    var queryOrders = client.query('INSERT INTO orders (name, meat, done, bread) VALUES ($1,$2,$3,$4)' [req.body.burgName, req.body.meat, req.body.done, req.body.bread], //insert orders
         function(err, result) {
  	      done()
  	      if (err) {
  	        return console.error('error running insert queryOrders', err);
  	      }
  	      next()
  	    });
  	    // var queryMeats = client.query('INSERT INTO meats (STUFF) VALUES (MONEY)' [req.body.STUFF], //insert meats should this be orders join meats?
        //  function(err, result) {
  	    //   done()
  	    //   if (err) {
  	    //     return console.error('error running insert queryMeats', err);
  	    //   }
  	    //   next()
  	    // });
        console.log(req.params.id);
        console.log('that was req.params.id just before queryCheeses');

        client.query('DELETE FROM ordersJoinCheeses WHERE order_id = $1', [req.params.id], (err, result) => { //so that you don't have 2x cheeses if they are present both before and after edit. not entirely sure that req.params.id will return what i think it does. CONSOLE LOG // UPDATE?
        req.body.cheeses.forEach( (cheeses, index) => {
          var queryCheeses = client.query('INSERT INTO ordersJoinCheeses (order_id, cheese_id) VALUES ($1, $2)' [req.params.id, req.body.cheeses],
          //insert ordersJoinCheeses.
           function(err, result) {
    	      done()
    	      if (err) {
    	        return console.error('error running insert queryCheeses', err);
    	      }
    	      next()
    	    });
        })
        })

        var queryToppings = client.query('INSERT INTO ordersJoinToppings (order_id, topping_id) VALUES (MONEY)' [req.body.STUFF],
        //insert toppings should this be orders join toppings?
        function(err, result) {
  	      done()
  	      if (err) {
  	        return console.error('error running insert queryToppings', err);
  	      }
  	      next()
  	    });
  	  });
      console.log('editBurger ran');
  	}
