
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


// Datatypes effect databases because they determin what kind of data is valid in a specific field. For example is a user is entering a year, the developer might want to
// use numbers to verify that the year is infact a year, and it can also help with sorting later beause numbers are much easier to sort vs figuring out what was typed 
// and sorting from there. I used serial primary key because every table should have an auto incrememting id to make sure there is a unique number asocianted with each
// row. .I used varchar because that can protect from someone typing way too much. and boolian for avaliable beacuse it is either true or false.