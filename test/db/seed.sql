
CREATE TABLE IF NOT EXISTS products (
    id serial primary key,
    item varchar(255),
    description varchar(255),
    price varchar(255),
    avaliable bool
);

insert into products(
item, description, price, avaliable
)
values(
'tshirt', 'really cool tshirt', '29.22', true
),
(
'pants', 'really cool pants', '39.22', true
)
(
'shoes', 'really cool shoes', '92.99', true
),
(
'hat', 'really cool hat', '2.99', true
),
(
'socks', 'really cool socks', '2.22', true
);
