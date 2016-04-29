# Schema Information

## items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
store_id    | integer   | not null, foreign key (references stores), indexed
title       | string    | not null
description | text      | not null
price       | float     | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
item_id     | integer   | not null, foreign key (references items), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
item_id     | integer   | not null, foreign key (references items), indexed, unique [tag_id]
user_id      | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## stores
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
store_name      | string    | not null, indexed, unique
description     | text      | not null
user_id         | integer   | not null, foreign key (references users), indexed
