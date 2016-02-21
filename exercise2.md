#2. Exercise 2

## Let's do this.
Your server.js currently contains more stuff than it should. Let's move anything related to the burgers into its own router. 

1. Create a folder called `routes` to hold all of our routes. 
1. Inside `routes`, touch a file called `burgers.js`
1. Again, require express and create a `Router()`
1. Move all of the burger routes into this file (_remember to use module.exports!_).
1. From server.js, `app.use` this new file, referencing it as `/burgers` 

Your application should now run exactly as it did in step #1. If it doesn't, **stop here and fix it**.

As of now, we've only tested our routes to see if they function properly. Now, let's make it do something. _Your server should NOT be serving any HTML at this point, only json_

##Get some data
Currently, your server is only able to read `GET` requests. Let's make it able to read other HTTP methods with body-parser and method-override. Body-parser allows us to read the body of `POST` requests, and method-override allows us to simulate the remainder of the methods not supported in HTML (e.g. `PUT`,`DELETE`)

1. `npm install body-parser method-override --save`
1. Inside `server.js`, require these two packages.
1. Add the following block to activate them each:
```javascript
// parse incoming forms
/* we'll be reading the form body, 
but not accepting files, or anything more than text*/
app.use( bodyParser.urlencoded({ extended: false })); 
/* we'll convert everything we receive into json, 
for our convenience */
app.use( bodyParser.json()); 

// override with POST having ?_method=XXXX
/* e.g. If we need to make a PUT, 
we'll POST to a url appended with ?_method=put */
app.use(methodOverride('_method'))
```

## Use This Data
Inside `burgers.js`, initialize a new array called `burgerData`. This will be our (semi-)persistent storage while we're developing. _**Note**: this data will be destroyed each time the server is restarted— we'll fix that in exercise 4._

###Create
1. Update your routes such that a `POST` to `/burgers` takes some data and pushes it into `burgerData`
	1. Use Postman's POST:body feature to create a data body to post to the server.
1. use `res.redirect(_some route_)` to send the user to the newly created burger (`/burgers/{newid}`)


###Read
1. `GET`: `/burgers` should show the entire array of burgers.
1. `GET`: `/burgers/:id` should show a single burger at that position. 
	1. Trying to access a burger's ID that doesn't exist should return a 404 and nothing else. 

###Update
1. `PUT` should ONLY be allowed on a single burgerID. This should update the burger at that position, or throw a 404 if the number is invalid. 
	1. Redirect to `/burgers/:id` when done.

###Delete
1. `DELETE` should delete a single burger when issued on `/burgers/:id`. If a burger isn't found to delete, fail silently
	1. Redirect to `/burgers` when done.

