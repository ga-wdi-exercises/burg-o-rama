# Build-A-Burger
![Bob's burgers](http://www.themarysue.com/wp-content/uploads/2014/10/bobsburgers.jpg)

*A multi-day code-a-long to build a fully-functional CRUD application.*


###Technologies used and concepts covered

- Node.js / Express.js
- RESTful routing
- BodyParser and form handling
- ejs / view partials
- persistent data
- relational database concepts (postgres)
- RDBMS relations (SQL joins)


##System Description
The application will allow the user to order a burger. 

The burger order form will allow the selection of bun, meat temperature, cheese, and toppings.

The application should include an Administration section, where the Administrator can update  burger orders, as well as all assets (toppings, cheese, etc) related to the burgers.Future versions may include a proper login and authentication model. 

Additionally, this application can be used as a starting point to build location-based services, such as sending the order to your favorite burger shop.


### User Stories
1. As a user, my homepage should be descriptive and inviting, and I expect to be able to complete most functions of this application from this homepage. 
1. As a user, I should be able to build and submit a burger to be created.
1. As a user, I should be able to see all the burgers previously created in the system. 
1. As an Admin, I should have a custom, 'administration' portal at `/admin`
1. As an Admin, I should be able to edit any burger in the system. 
1. As an Admin, I should be able to delete any burger in the system.
1. As an Admin, I should be able to edit the collection of cheese offerings.
1. As an Admin, I should be able to edit the collection of topping offerings.
1. As an Admin, I should be able to edit the meat temperature offerings.

###System Requirements
1. The application must be RESTful and follow REST-style standards. [REST on Wikipedia…](https://en.wikipedia.org/wiki/Representational_state_transfer)
1. The application must use EJS to render views. 
1. The system must be able to support mutliple user-types, however, v1 may simulate this feature by allowing all users to execute all functions. 
1. The system must be able to persist data in a RDBMS, such as Postgres.
	1. The data stored must be relational and held in multiple tables, accessed via a SQL join. 
	1. updates to collections must also save the proper data in the appropriate tables. 

#Code-Along
_See exercise1.md for instructions
