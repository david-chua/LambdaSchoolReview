# Data Modeling

**Normalization** is the process of designing or refactoring database tables for maximum consistency and minimum redundancy.

With objects, we're used to denormalized data, stored with ease of use and speed in mind. Non-normalized tables are considered ineffective in relational database.

## Follow Along - Data normalization

Data normalization is a deep topic in database design. To begin thinking about it, we'll explore a few basic guidelines and some data examples that violate these rules.

## Normalization Guidelines

* Each record has a primary key
* No fields are repeated
* All fields relate directly to the key data
* Each field contains a single data point
* There are no redundant entries

## Denormalized Data

| farm_name    | animal1   | animal 2    | animal 3 |
| -------------|-----------|-------------|----------|
| Beech Ranch  | pigs      |  chickens   | goats    |
| Morton Farms | horses    |  chickens   | cows     |

This table has two issues. There is no proper id field (as multiple farms may have the same name), and multiple fields are representing the same type of data: animals.

| farm_id     | farm_name        | animals   |
|-------------|------------------|-----------|
|  1          |  Beech Ranch     |  pigs, chickens, goats  |
|  2          | Morton Farms     | horses, chickens, cows  |

While we now have eliminated the first two issues, we now have multiple entries in one field, separated by commas. This isn't good either, as its another example of denormalization. There is no "array" data type in a relational databases, so each field must contain only one data point. 
