#5. Exercise 6

## Users

We will now implement user authentication in our application.

### Step 1

Modify your schema. You will need to make a few design choices
here.
1. Decide what type of information to hold for a specific
   user. At minimum you should have an email and password. 
2. Decide how a user is going to be associated with orders. Are users
   going to have their own orders? Are you going to allow many users
   to have the same order? This will be reflected in the way you setup
   your associations

### Step 2

Implement an interface for users to sign up, log in and log off. A typical
way to achieve this is with a nav bar which deals with user auth. You
can write an ejs partial and simply include it in all (or part) of
your views.

### Step 3

Implement the routes used for authentication we covered in class
(`login`, `logout`, `signup`, etc). Make sure that they create the expected
entries in your database, before you continue.

### Step 4

Build a middleware in your routers, which checks for user
authentication and does not allow the user to see specific routes if
they are not authenticated.

### Bonus

Implement specific roles, such as a customer and admin, who can see
different parts of your website. A customer should only be able to
create orders with the currently available products. An admin is
allowed to actually CRUD all of your resources. 
