# Multi-Table Queries

**Foreign Keys** are a type of table field used to create links between tables. Like primary keys, they are most often integers that identify data. However, whereas primary key is used to id rows in a table, foreign keys are used to connect a record in one table to a record in another table.

Consider the following **farms** and **ranchers** table:

## Farms:

| id | farm_name|
|1   | Beech Ranch |
|2  | Morton Farms |

## Ranchers

| id | rancher_name | farm_id |
| 1  | John Doe     |  1      |
| 2  | Jane Doe     | 1       |
| 3  | Jim Done     | 2       |
| 4  | Jay Dow      | 2       |
| 5  | Jen  Dunn    | 1       |  
