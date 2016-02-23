#5. Exercise 5

## Routes on Routes

Now that we know how to model and build a database, we can now refactor our application to administrate our resources. 

1. Build a RESTful `/cheeses/` resource (follow the same pattern as we did before)
  1. Don't worry about the views yet, it's safe to just have it serve json for now.
  1. This resource should behave the same way `burgers` did (CRUD/Restful) 
  1. Use Postman to test.
1. As above, build a RESTful `/toppings/` resource.
1. As above, build a RESTful `/buns/` resource.
1. As above, build a RESTful `/meats/` resource.

###Bonus
1. Build a `Customer` table and RESTful resource.

## Tying it all together
Now that we have our resources, let's use them. 

1. Refactor the newBurger  and editBurger route. Your form should now be built dynamically and should include a drop-down for each additional resource (e.g. the cheese selection should be a live selection of cheeses from the `cheese` table; likewise for meats, temps, toppings)
1. Update the form to only submit the resource IDs, and not their names. These vals will be the Foreign Keys stored on the Burger table.
1. Additionally, for a one-to-many or many-to-many relationship, you'll need a sub-routine separately insert the data on the 'many' side.
  1. (e.g., What if the user selects multiple toppings? multiple cheeses?)

####Some things to consider
1. What happens if the user doesn't select something that's required? What should you do?
1. Not selecting a cheese is allowed, as is no bread. How will you represent that in the database?

###Bonus
1. Validate all input to make sure that the data


