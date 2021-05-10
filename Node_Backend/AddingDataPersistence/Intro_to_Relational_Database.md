Databases are everywhere. They drive all businesses and our own lives - from your mobile device's contact list to the appointments on your calendar.

A database is a collection of data organized for easy retrieval and manipulation. We're concerned only with digital databases, those that run on computers or other electronic devices.

Digital databases have been around since the 1960s. Relational databases, those which store "related" data, are the oldest and most common type of databases in use today.

## Data Persistence

A database is often necessary because our application or code requires data persistence. This term refers to data that is infrequently accessed and not likely to be modified. In less technical terms, the information will be safely stored and remain untouched unless intentionally modified.

A familiar example of non-persistent data would be JavaScript arrays and objects, which reset each time the code runs.

## Relational Databases

In relational databases, the data is stored in tabular format grouped into rows and columns (similar to spreadsheets). A collection of rows is called a table. Each row represents a single record in the table and is made up of one or more columns.

These kinds of databases are relational because a relation is a mathematical idea equivalent to a table. So relational databases are databases that store their data in tables.

## Table Facts

* Tables organize data in rows and columns
* Each row in a table represent one distinct record.
* Each column represents a field or attribute that is common to all the records.
* Fields should have a descriptive name and a data type appropriate for the attribute it represents
* Tables usually have more rows than columns
* Tables have primary keys that uniquely identify each row
* Foreign keys represent the relationships with other tables

## Overview of SQL

SQL is a standard language, which means that it almost certainly will be supported, no matter how your database is managed. That said, be aware that the SQL language can vary depending on database management tools. This lesson focuses on a set of core commands that can never change. Learning the standard commands is an excellent introduction since the knowledge transfer between database products.

## Follow Along

The syntax for SQL is English-like and requires fewer symbols than programming languages like C, Java, and JavaScript. It is declarative and concise, which means there is a lot less to learn to use it effectively.

When learning SQL, it is helpful to understand that each command is designed for a different purpose. If we classify the command by purpose, we'll end up with the following sub-categories of SQL.

* **Data Definition Language (DLL)** used to modify database objects. Some examples are **CREATE TABLE, ALTER TABLE, DROP TABLE**.
* **Data Manipulation Language (DML)** used to manipulate the data stored in database. Some examples are **INSERT, UPDATE, DELETE**.
* **Data Query Language (DQL)** used to ask questions about the data stored in the database. The most commonly used SQL command is **SELECT** and it falls in this category.
* **Data Control Language (DCL)** is used to manage database security and user's access to data. These commands fall into the realm of database administrator. Some examples are **GRANT** and **REVOKE**
* **Transaction Control Commands** used for managing group of statements that must execute as a unit or not execute at all. Examples are **COMMIT** and **ROLLBACK**.

As a developer, you need to get familiar with DDL and become proficient using DML and DQL.


## Query

A **query** is a SQL statement used to retrieve data from a database. The command used to write queries is **SELECT**, and it is one of the most commonly used SQL commands.

The basic syntax for a **SELECT** statement is this:

```
select <selection> from <table name>;
```

To see all the fields on a table, we can use a ***** as the selection.

```
select * from employees
```

The preceding statement would show all the records and all the columns for each record in the employees table.

to pick the fields we want to see, we use a comma-separated list:

```
select first_name, last_name, salary from employees;
```

The return of that statement would hold all records from the listed fields.

We can extend the **SELECT** command's capabilities using clauses for things like filtering, sorting, pagination, and more.

It is possible to query multiple tables in a single query.

## Insert

To **insert** new data into a tables, we'll be using the **INSERT** command. The basic syntax for an **INSERT** statement is this:

```
insert into <table name> (<selection>) values (<values>)
```

Using this formula, we can specify which values will be inserted into which fields like so:

```
insert into Customers (Country, CustomerName, ContactName, Address, City, PostalCode) values ('USA', 'Lambda School', 'Austen Allred', '1 Lambda Court', 'Provo', '84601');
```

## Modify

**Modifying** a database consists of updating and removing records. For these, we'll  use **UPDATE** and **DELETE** commands respectively.

The basic syntax for an **UPDATE** statement is:

```
update <table name> set <field> = <value> where <condition>;
```

The basic syntax for a **DELETE** statement is:

```
delete from <table name> where <condition>;
```


## Follow Along

### Filtering results using WHERE clauses

When querying databases, the default result will be every entry in the given table. However, often, we are looking for a specific record or set or records that meet that certain criteria.

A **WHERE** clause can help in both cases.

Here is an example where we might only want to find customers living in Berlin.

```
select City, CustomerName, ContactName
from Customers
where City = 'Berlin';
```

We can also chain together **WHERE** clauses using **OR** and **AND** to limit our results further.

The following query includes only records that match both criteria:

```
select City, CustomerName, ContactName
from Customers
where Country = 'France' and City = 'Paris'
```

And this query includes records that match either criteria:

```
select City, CustomerName, ContactName
from Customers
where Country = 'France' or City = 'Paris';
```

These operators can be combined and group with parenthesis to add complex selection logic. They behave similarly to what you're used to in programming languages.

To select a single record, we can use a **WHERE** statement with a uniquely identifying field, like an id.

```
select * from Customers
wehre CustomerId = 3;
```

Other comparison operators also work in **WHERE** conditions such as **>,<,<= and >=**.

### Ordering results by using the ORDER BY clause

Query results are shown in the same order the data was inserted. To control how data is sorted, we can use the **ORDER BY** clause.

```
-- sorts the result first by salary in descending order, then by lastname in ascending order.

select * from employees
order by salary desc, last_name;
```

We can pass a list of field names to order by and optionally choose asc or desc for the sort direction. The default is asc, so it doesn't need to be specified.

Some SQL engine support using field abbreviations when sorting.

```
select name, salary, department
from employees
order by 3,2 desc;
```

In this case, the results are sorted by the department in ascending order first and then by salary in descending order. The numbers refer to the fields' position in the selection portion of the query so 1 would be name, and 2 would be salary and so on.

Note that **WHERE** clauses should come after the **FROM** clauss. The **ORDER BY** always goes last:

```
select * from employes
where salary > 50000
order by last_name;
```

## Limiting Results using the LIMIT clause

When we wish to see only a limited number of records, we can use the **LIMIT** clause

The following returns the first 10 records in the products table:

```
select * from products
limit 10
```

**LIMIT** clauses are often used in conjunctions with **ORDER BY**. The following shows us the 5 cheapest products.

```
select * from products
order by price desc
limit 5
```

### Inserting data using INSERT

An insert statement adds a new record to the database. All non-null fields must be listed out in the same order as their values. Some fields, like ids and timestamps, may be autogenerated and do not need to be included in an **INSERT** statement

-- we can add fields in any order; the values need to be in the same ordinal positions
-- the id will be assigned automatically

```
insert into Customers (Countr, CustomerName, ContactName, Address, City, PostalCode)
values ('USA", 'Lambda School', 'Austen Allred', '1 Lambda Court', 'Provo', '84601');
```

The values in an insert statement must not violate any restrictions and constraints that the database has in place, such as expected datatype. We will learn more about constraints and schema design in a later section.

### Modifying Recording using UPDATE

when modifying a record, we identify a single record or a set of records to update using a **WEHRE** clauses. Then we can set the new value(s) in place.

```
update Customers
set City = 'Silicon Valley', Country = 'USA'
where CustomerName = 'Lambda School'
```

Technically the **WEHRE** clause is not required, but leaving it off would result in every record within the table receiving the updated.

### Removing records using DELETE

When removing a record or set of records, we need only identify which record(s) to remove using a WHERE clauses

```
delete from Customers
where CustomerName = 'Lambda School';
```

Once again, where is not required but this would remove all the record in the table.

## KNEX

Raw SQL is a critical baseline skill. However, Node developers generally use an **Object Relatinoal Mapper (ORM)** or a **query builder** to write database commands in a backend codebase. Both **ORMS** and **query builders** are JavaScript libraries that allow us to interface with the database using a JavaScript version of the language.

For example instead of a raw SQL select:

```
SELECT * FROM users;
```

We could use a query  builder to write the same logic in JavaScript

```
db.select('*').from('users');
```

**Query Builders** are lightweight and easy to get off the ground, whereas **ORMS** use an object oriented model and provide more heavy lifting within their rigin structure.

We will use a query builder called **knex.js**

## Follow Along - KNEX setup.

To use Knex in a repository, we'll need two libraries:

```
npm install knex sqlite3
```

**knex** is our query builder library and **sqlite3** allows us to interface with a sqlite database. We'll learn more about sqlite and other database management systems in the following module. For now, know that you need both libraries.

Next, we use Knex to set up a config file.

```
const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/posts.db3',
  },
  useNullAsDefault: true,
};

module.exports = knex(config);
```

To use the query builder elsewhere in our code, we need to call knex and pass in a config object. We'll be discussing knex configuration more in a future module. Still, we only need the client, connection, and useNullAsDefault keys as shown above. The filename should point towards the pre-existing database file, which can be recognized by the .db3 extension.

**Gotcha** The file path to the database should be with respect to the root of the repo, not the configuration file itself.

Once Knex is configured, we can import the above config file anywhere in our codebase to access the database.

```
const db = require('../data/db-config.js');
```

The **db** object provides methods that allow us to begin building queries.

### SELECT using Knex

In Knex, the equivalent of SELECT * FROM users is:

```
db.select('*').from('users');
```

There's a simplere way to write the same command:

```
db('users');
```

Using this, we could write a **GET** endpoint

```
router.get('/api/users', (req,res) => {
    db('users')
      .then(users => {
          res.json(users)
      })
      .catch(err => {
        res.status(500).json({message: 'Failed ot get users' });
      })
})
```

NOTE: All knex queries return promises.

Knex also allows for a where clause. In Knex, we could write **SELECT * FROM users WHERE id=1** as:

db('users').where({id: 1 });

This method will resolve to an array containing a single entry like so: **[{id: 1, name: 'bill'}]

Using this we might add a **GET** endpoint where a specific user is grabbed.

```
server.get('/api/users/:id', (req,res)  => {
    const { id } = req.params;

    db('users').where({id})
      .then(users => {
        // we must check the length to find if our user exists
        if (users.length){
          res.json(users);
        } else {
          res.status(404).json({message: 'Could not find user with given id.'})
        }
      })
      .catch(err => {
        res.status(500).json({message: 'Failed to get user'})
      })
})
```

### INSERT using Knex

In Knex, the equivalent of **INSERT INTO users (name, age) VALUES ('Eva', 32) is:

```
db('users').insert({ name: 'Eva', age: 32 })
```

The insert method in Knex will resolve to an array containing the newly created id for that users like so: [3]

### UPDATE using Knex

In knex, the equivalent of **UPDATE users SET name='Ava', age=33 WHERE id=3; is:

```
db('users').where({id: 3})
.update({name: 'Ava': age: 33});
```

Note that the **where** method comes before update, unlike in SQL.

Update will resolve to a count of rows updated.

### DELETE using Knex

In Knex, the equivalent of **DELETE FROM users WHERE age =33;** is:

```
db('users').where({age: 33}).del();
```

Once again, the **where** must come before the **del**. This method will resolve to the count of records remove. 
