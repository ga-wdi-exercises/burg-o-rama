drop table if exists meats CASCADE;
drop table if exists breads CASCADE;
drop table if exists cheeses CASCADE;
drop table if exists toppings CASCADE;
drop table if exists orders CASCADE;
drop table if exists ordersJoinCheeses;
drop table if exists ordersJoinMeats;
drop table if exists ordersJoinToppings;

drop sequence if exists breads_id_seq;
drop sequence if exists cheeses_id_seq;
drop sequence if exists meats_id_seq;
drop sequence if exists orders_id_seq;
drop sequence if exists toppings_id_seq;



create table meats(
  id serial primary key,
  name text NOT NULL,
  available boolean NOT NULL
  -- CONSTRAINT
);



create table breads(
  id serial primary key,
  name text NOT NULL,
  available boolean NOT NULL
  -- CONSTRAINT
);


create table cheeses(
  id serial primary key,
  name text NOT NULL,
  available boolean NOT NULL
  -- CONSTRAINT
);



create table toppings(
  id serial primary key,
  name text NOT NULL,
  available boolean NOT NULL
  -- CONSTRAINT
);

create table orders(
  id serial primary key,
  name text NOT NULL,
  meat INT REFERENCES meats,
  done text NOT NULL,
  bread INT REFERENCES breads,
  -- cheese INT REFERENCES ordersJoinCheeses,
  -- topping INT REFERENCES ordersJoinToppings,
  CONSTRAINT done_check CHECK ( ( (done = 'rare'::text) OR (done = 'medium-rare'::text)) OR (done = 'medium'::text))
  -- any other doneness and you're doing it wrong
);

create table ordersJoinMeats(
  order_id INT references orders,
  meat_id INT references meats,
  primary key (meat_id, order_id)
);

create table ordersJoinCheeses(
  order_id INT references orders,
  cheese_id INT references cheeses,
  PRIMARY KEY (order_id, cheese_id)
);

create table ordersJoinToppings(
  order_id INT references orders,
  topping_id INT references toppings,
  PRIMARY KEY (order_id, topping_id)
);
