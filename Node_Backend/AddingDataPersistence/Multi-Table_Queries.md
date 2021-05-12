# Multi-Table Queries

**Foreign Keys** are a type of table field used to create links between tables. Like primary keys, they are most often integers that identify data. However, whereas primary key is used to id rows in a table, foreign keys are used to connect a record in one table to a record in another table.

Consider the following **farms** and **ranchers** table:

## Farms:

| id | farm_name    |
|----|--------------|
|1   | Beech Ranch  |
|2   | Morton Farms |

## Ranchers

| id | rancher_name | farm_id |
|----|--------------|---------|
| 1  | John Doe     |  1      |
| 2  | Jane Doe     | 1       |
| 3  | Jim Done     | 2       |
| 4  | Jay Dow      | 2       |
| 5  | Jen  Dunn    | 1       |  

The **farm_id** in the **ranchers** table is an example of a **foreign key**. Each entry in the farm_id(foreign key) column corresponds to an id(primary key) in the farms table. This allows us to track which farm each rancher belongs to while keeping the table normalize.

## Overview - Join

We can use a **JOIN** to combine query data from multiple tables using a single select statement.

There are different types of joins like:

* inner joins
* outer joins
* left joins
* right joins
* cross joins
* non-equality joins
* self joins

Using **join** requires that the two table of interest contains at least one field with shared information. For example, if a departments table has an id field, and an employee table has a department_id field, we can use those field to join both tables like so:

```
select * from employees
join departments on employees.department_id = department.id
```

This query will return the data from both tables for every instances where the **ON** condition is true. If there are employees with no value for department id or where the values stored in the field does not correspond to an existing id in the departments table, then that record will NOT be returned. In a similar fashion, any records from departments table that don't have an employee associated with them will also be omitted from the results.

We can shorten the condition by giving the table names an alias. This is common practice. Below is using the same using aliases, picking which fields to return and sorting the results:

```
select d.id, d.name, e.id, e.first_name, e.last_name, e.salary
from employees as e
join departments as d
  on e.department_id = d.id
order by d.name, e.last_name
```

Notice that we can take advantage of white spaces and indentation to make queries more readable.

There are several ways of writing joins, but the one shown here should work on all database management systems and avoid some pitfalls.

The syntax for performing a similar join using Knex is as follows.

```
db('employees as e')
  .join('departments as d', 'e.department_id', 'd.id')
  .select('d.id', 'd.name', 'e.first_name', 'e.last_name', 'e.ssalary');
```

To handle CRUD operations for a single resource, we would want to create a model cointaining the following methods:

```
function find() {
}

function findById(id) {
}

function add(user) {
}

function update(changes, id) {
}

function remove(id) {
}
```

Each of this function would use Knex logic to perform the necessary database operations

```
function find(){
  return db('users')
}
```

```
function findById(id){
  return db('users').where({id}).first();
}
```

We can also use existing methods like findById() to help add() return the new users (instead of just the id).

```
function add(user){
  db('users').insert(user)
    .then(ids => {
      return findById(id[0]);
    });
}
```

Once all methods are written as desired, we can export them like so:

```
module.exports = {
  find,
  findById,
  add,
  update,
  delete
}
```

...and use the helper methods in our endpoint

```
const User = require('./user-model.js');

router.get('/', (req,res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {console.log(err)})
})
