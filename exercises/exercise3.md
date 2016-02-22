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

1. mkdir `public/css` to hold our public styles 
  1. copy `example_resources/css/styles.css` into this folder
1. Touch `views/pages/home.ejs`, and copy/paste the file contents of the `example_template.html` into this new file.
1. Update your `/` route to serve this file 
```javascript
// home route
app.get('/', (req,res)=>res.render('pages/home'))

```
1. Go to a browser and see if it renders correctly. Check the browser's console to verify. 
1. You should notice that the `css` folder is unreachable. Why is this?


###Build some Static
In the previous step, we set up our first html page and attempted to bring in our styles, but `css` was unreachable from the browser. This is because we have not set up a public folder for public assets. Luckily, Express.js already has that feature built in.

```javascript
// static route to public
// This sets a folder called public to be the destination from which any static assets (images,css,etc) will be served.
app.use( express.static( path.join( __dirname, 'public' )));
```

1. Now that we have a static folder serving our static assets, reload your server and hit the homepage. 
  1. Your site should work as expected. 

###Partials
Looking at the views table we built earlier, we can see that we still need the following views:

1. a form to create a burger
1. a form to edit a burger
1. an iterable view that will list our burgers
  1. this listing must also have an edit button and a delete button for each burger.
1. a single-burger view


####Slicing it up
In keeping to our <abbr title="Don't Repeat Yourself">DRY</abbr> principles, creating all these views means duplicating many things like the nav and the footer and many other things. We can fix this by making partials— slicing up the page into reusable parts and storing them in separate files. We'll do this by retaining the skeleton of the html, while slicing out the head, the nav, the footer. 

1. Cut out everything within the `<nav>` tag and paste it into a file called nav.ejs. Here's a shortcut in your terminal to create a new file with the contents of your clipboard:
    1. Cut out the nav so it's in the clipboard.
    1. Go to your terminal (you should be in the root of this project)
    1. `pbpaste > views/partials/nav.ejs`
1. Replace the newly missing contents with an ejs `include` directive `<%- include ../partials/nav %>`
1. Repeat the above process for the contents of the `<head>` and `<footer>` tags.
1. You should be left with a container tag, holding the unique contents of the current page. 


Reload the homepage. Nothing should have changed.

We'll use this homepage as your new template to make new pages. 

###Dynamic Data
Static data is boring. We can pass dynamic data to our views. For example, with the homepage, we can easily pass in a custom message.
```javascript
// home route
app.get('/', (req,res)=>res.render('pages/home', {data: pageTitle}))

```
and then in our actual view, we can esily display our dynamic data.
```HTML
<h1><%= data.pageTitle %></h1>
```

##Finishing up
Finish building your views from the worksheet table above.

1. Use dynamic data to display data for each route. 
1. Check the `example_resources` for snippets of helpful code.

