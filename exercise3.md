#3. Exercise #3

##Gussy it up! Let's start serving some HTML! 
We'll be using ejs to build our dynamic views on the server.

1. Install the ejs template engine: `npm install ejs --save`
1. Create a new folder at the root called `views`
	1. Create two subfolders: `views/partials` and `views/pages`
1. Note that we don't have to require ejs as a package, we just need to `app.use` it in server.js. Also, ejs will automatically look for a folder called `views` for the templates:

```javascript
/*Views*/
app.set('view engine', 'ejs');
```

###Wait!! Let's get organized
Before we can create any HTML or views, we need to describe which view should be served for which method/route combination. 

At this point, it will be incredibly helpful to stop and create a table to keep all this straight while we're developing:

||Friendly Name| Method | Route Name | View Served | 
|---|---|---|---|---|
|1|Show Burger List| GET  | `/burgers` | `burger_list.ejs` | 
|2|Add a new burger| POST | `/burgers` | _none_, redirects to view 3s|
|3|Show One Burger||||
|4|Update One Burger ||||
|5|Delete One Burger ||||
|6|Show Create Burger Form||||
|7|Show Edit Burger Form||||

###Build those views
Use the `example_resources/example_template.html` to build your ejs templates. 

1. Touch `views/pages/home.ejs`, and copy/paste the file contents of the `example_template.html` into this new file.
1. Update your `/` route to serve this file 
```javascript
// home route
app.get('/', (req,res)=>res.render('pages/home'))

```




