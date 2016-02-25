BEGIN;

INSERT INTO meats (name, available) VALUES
('bison', true),
('28 aged brisket', true),
('angus', true),
('elk', true),
('pork-belly', true),
('pulled pork', true);

INSERT INTO breads (name, available) VALUES
('brioche', true),
('whole_wheat', true),
('white_sesame', true),
('white', true),
('focacchia', true);

INSERT INTO cheeses (name, available) VALUES
('muenster', true),
('swiss', true),
('blue', true),
('american',true),
('cheddar', true),
('queso_blanco', true),
('emmentaler', true);

INSERT INTO toppings (name, available) VALUES
('tomato', true),
('caramelized_onions', true),
('dijon', true),
('lettuce', true),
('pickle', true),
('bacon', true),
('maple', true),
('fried_egg', true),
('grilled_onions', true),
('ketchup', true),
('red_onion', true),
('hash_brown', true),
('sunny_side_egg', true),
('pickled_jalapenos', true),
('roasted_red_peppers', true),
('massaged_kale', true);

INSERT INTO orders (name, meat, done, bread) VALUES
('wacly', 1, 'medium-rare', 1);
-- ('28 aged brisket', well-done, whole_wheat, swiss+blue, lettuce+tomato+pickle),
-- (angus, medium, white_sesame, american, bacon+maple+fried_egg+grilled_onions+ketchup),
-- (elk, rare, brioche, swiss+cheddar, tomato+red_onion+ketchup),
-- ('28 aged brisket', well-done, white, cheddar, lettuce+pickle),
-- (angus, rare, white_sesame, american, bacon+hash_brown+fried_egg+grilled_onions+ketchup),
-- (pork-belly, medium-rare, brioche, muenster, tomato+lettuce+dijon),
-- (pork, rare, whole_wheat, queso_blanco, lettuce+tomato+fried_egg),
-- (angus, medium, white_sesame, american, bacon+maple+fried_egg+grilled_onions+ketchup),
-- (bison, medium-rare, focacchia, emmentaler, sunny_side_egg+pickled_jalapenos+roasted_red_peppers+massaged_kale+dijon);

COMMIT;
