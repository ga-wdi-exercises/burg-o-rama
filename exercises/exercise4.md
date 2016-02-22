# Burg-o-rama database

You need to design a database for the newest hipsteresque burger
place in Bushwick. It serves exclusively organic, grass-fed,
cage-free, gluten-free, non-gmo, locally grown burgers.

You will need to keep a record all burger orders. A burger order can
have

1. A type of meat
2. A type of doneness.
3. A type of bread
4. Many types of cheeses
5. Many types of toppings

You only deal with seasonal items, so you should be able to control
the types of toppings, cheeses, breads, meats which are available to
customers. 

## Part 1
Design and draw out your ERDs.

## Part 2
Create a `schema.sql` file which will be used to create all the tables
in your database.

## Part 3
Seed your database with an appropriate number of meats, breads,
cheeses, toppings. At minimum you should be able to create the orders
listed in the next part.

## Part 4
Create some burger orders:

1. A medium-rare bison burger on a brioche bun, with muenster cheese,
tomatoes, caramelized onions, Dijon mustard.
2. A well-done 28-day dry-aged ground brisket burger on a whole-wheat bun, with
swiss and blue cheese, lettuce, tomato, pickles.
3. An medium angus burger on a white sesame bun, with american cheese, bacon,
maple syrup, fried egg, grilled onions, ketchup.
4. A rare elk burger on a brioche bun, with swiss and cheddar cheese,
tomatoes, red onions, Dijon mustard.
2. A well-done 28-day dry-aged ground brisket burger on a plain white bun, with
cheddar cheese, lettuce, pickles.
3. An rare angus burger on a white sesame bun, with american cheese, bacon,
hash browns, fried egg, grilled onions, ketchup.
1. A medium-rare pork-belly burger on a brioche bun, with muenster cheese,
tomatoes, lettuce, Dijon mustard.
2. A rare pulled pork burger on a whole-wheat bun, with
queso blanco cheese, lettuce, tomato, fried egg.
3. An medium angus burger on a white sesame bun, with american cheese, bacon,
maple syrup, fried egg, grilled onions, ketchup.
4. A medium-rare bison burger on a focacchia bun, with emmentaler
cheese, a sunny side up egg, pickled jalapenos, roasted red peppers,
and massaged kale, Dijon mustard.

## Part 5

You need to design an efficient way to relate orders to the
cook and also analyze customer preferences. Implement the following queries:

1. Get the number of burgers per meat type.
2. Get the number of different buns per type currently in the works.
3. Get a list of all distinct cheeses.
4. What meats are paired with Dijon mustard.
5. What buns are ordered with angus burgers.
6. What meats are ordered with more than one cheese.
