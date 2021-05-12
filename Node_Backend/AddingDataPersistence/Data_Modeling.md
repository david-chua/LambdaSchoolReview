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

| animal_id         |   animal         |  farm_name            |  ann_revenue  |
|-------------------|------------------|-----------------------|---------------|
|   1               |   pig            |  Beech Ranch          |  65000        |
|   2               |   chicken        |  Beech Ranch          |  65000        |
|   3               |   goat           |  Beech Ranch          |  65000        |

Now we've solved the multiple fields issue, but we created repeating data (the farm field), which is also an example of denormalization. As well, we can see that if we were tracking additional ranch information (such as annual revenue), that field is only vaguely related to the animal information.

**When these issues begin arising in your schema design, it means that you should separate information into two or more tables.**

## Anomalies

Obeying the above guidelines prevent **anomalies** in your database when inserting, updating, or deleting. For example, imagine if the revenue of Beech Ranch changed. With your de-normalized schema, it may get updated in some records but not others.

| animal_id         |   animal         |  farm_name            |  ann_revenue  |
|-------------------|------------------|-----------------------|---------------|
|   1               |   pig            |  Beech Ranch          |  45000        |
|   2               |   chicken        |  Beech Ranch          |  65000        |
|   3               |   goat           |  Beech Ranch          |  65000        |

Similarly, if Beech Ranch shut down, there would be three (if not more) records that needed to be deleted to remove a single farm.

Thus de-normalized table opens the door for contradictory, confusing, and unusable data.

## Overview - Relationships

There are three types of relationships:

* One to One
* One to Many
* Many to Many

Determining how data is related can provide a set of guidelines for table representation and guides the use of foreign keys to connect said tables.

## Follow Along

## One to One Relationships

Imagine we are storing the financial projects for a series of farms

We may wish to attach fields like file name, address, description, projected revenue, and projected expenses. We could divide these fields into two categories: information related to the farm directly (name, address, description) and information related to the financial projections (revenue, expenses).

We would say that farms and projections have a one to one relationship. This is to say that every farm has exactly one projection. and every project corresponds to exactly one farm.

| id   |  farm_name    |
|------|---------------|
| 1    |  Beech Ranch  |
| 2    |  Morton Farms |


| id    |  farm_id   |  revenue   |
|-------|------------|------------|
|  1    |   1        |   65000    |
| 2     |   2        |  105000    |

the farm_id is the foreign key that links the farms and projections together.

Notes above one-to-one relationship:

* The foreign key should always have a unique constraint to prevent duplicate entries. In the example above, we wouldn't want to allow multiple projections records for one farm.

* The foreign key can be in either table. For example, we may have had a project_id in the farms table instead. A good rule of thumb is to put the foreign key in which ever table is more auxiliary to the other.

* You can represent one-to-one data in a single table without creating anomalies. However, it is sometimes prudent to use two tables as shown above to keep separate concerns in separate tables.

## One to Many Relationships

Now imagine, we are storing the full-time ranchers employed at each farm. In this case, each rancher would only work at one farm however, each farm may have multiple ranchers.

This is called a one-to-many relationship

This is the most common type of relationship between entities. Some examples:

* One customer can have many orders
* One user can have many posts
* One post can have many comments.

Manage this type of relationship by adding a foreign key on the "many" table of the relationship that points to the primary key on the "one" table. Consider the farms and ranchers table.

| id   |  farm_name    |
|------|---------------|
| 1    |  Beech Ranch  |
| 2    |  Morton Farms |


|  id    |    rancher_name    |   farm_id   |
|--------|--------------------|-------------|
| 1      |  John Doe          |     1       |
| 2      |  Jane Doe          |     1       |
| 3      |  Jim Done          |     2       |
| 4      |  Jay Dow           |     2       |
| 5      |  Jen  Dunn         |     1       |

In a many-to-many relationship, the foreign keys should not be unique.

## Many to Many Relationships

If we want to keep track of animals on a farm as well, we must explore the many to many relationship. A farm has multiple animals, and multiple of each type of anomals is present at multiple different farms.

Some examples:

* an order can have many products and the same product will appear in many orders.
* a book can have more than one author, and an author can write more than one book.

To model this relationship, we need to introduce an **intermediary table** that holds foreign keys that reference the primary key on the related tables. We now have a farms, animals, and farm_animals table.

| id   |  farm_name    |
|------|---------------|
| 1    |  Beech Ranch  |
| 2    |  Morton Farms |


| id   |  animal       |
|------|---------------|
| 1    |  pig          |
| 2    |  chicken      |
| 3    |  goat         |


| farm_id     |  animal_id   |
|-------------|--------------|
|   1         |     1        |
|   1         |     2        |
|   1         |     3        |
|   2         |     2        |

While each foreign key on the intermediary table is not unique, the combination of keys should be unique.

## Knex for multi-table schemas.

Knex query builder library also allows us to create multi-table schemas include foreign keys. However there are a few extra things to keep in mind when designing a multi-table schema, such as using the correct order when creating tables, dropping tables, seeding data, and removing data.

## Foreign Key Setup

In Knex, foreign key restrictions don't automatically work. Whenever using foreign keys in your schema, add the following code to your knexfile. This will prevent users from entering bad data into a foreign key column.  

```
development: {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/database.db3',
  },
  // needed when using foreign keys
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on the FK enforcement
    }
  }
}
```

## Migrations

Let's look at how we might track our farms and ranchers using Knex. In our migration file's up function, we would want to create the two tables.

```
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('farms', tbl => {
      tbl.increments();
      tbl.string('farm_name', 128)
        .notNullable();
    })
    .createTable('ranchers', tbl =>{
      tbl.increments
      tbl.string('rancher_name', 128)
      tbl.integer('farm_id')
        //force integers to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('farms')
    })
};
```

Note that the foreign keys can only be created after the reference table.

In the down function, the opposite is true. We always want to drop a table with a foreign key before dropping the table it references.

```
exports.down = function(knex, Promise) {
  // drop in the opposite order
  return knex.schemas
    .dropTableIfExists('ranchers')
    .dropTableIfExists('farms')
}
```

In the case of many-to-many relationship, the syntax for creating an intermediary table is identical, except for the one additional piece. We need a way to make sure our combination of foreign keys is unique.

```
.createTable('farm_animals', tbl => {
  tbl.integer('farm_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must already exist
    .inTable('farms')
  tbl.integer('animal_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must already exist
    .inTable('animals')

  // the combination of the two keys becomes our primary key
  // will enforce unique combinations of ids
  tbl.primary(['farm_id', 'animal_id']);
});
```

## Seeds

Order is also a concern when seeding. We want to create in the same order we created our tables. In other words, don't create a seed with a foreign key, until that reference record exists.

In our example, make sure to write the 01-farms seed file and then the 02-ranchers seed file.

However, we run into a problem with truncating our seeds, because we want to truncate 02-ranchers before 01-farms. A library called knex-cleaner provides an easy solution for us.

Run knex seed:make 00-cleanup and npm install knex-cleaner. Inside the cleanup seed, use the following code

```
const cleaner = require('knex-cleaner');

exports.seed = function(knex){
  return cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['knex_migrations', 'knex_migartions_lock'], // don't empty migration tables
  });
};
```

This removes all tables (excluding the two tables that track migrations) in the correct order before any seed files run.

## Cascading

If a user attempt to delete a record that is referenced by another record (such as attempting to delete **Morton Ranch** when entries in our ranchers table reference that record), by default, the database will block the action. The same thing can happen when updating a record with a foreign key reference.

If we want to override this default, we can delete or update with cascade. With cascade, deleting a record also deletes all referencing records. We can set that up in our schema.

```
.createTable('ranchers', tbl => {
    tbl.increments()
    tbl.string('rancher_name', 128);
    tbl.integer('farm_id')
      .unsigned()
      .notNullable()
      .inTable('farms')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
})
```
