# Petsy

[Heroku link][heroku]

[heroku]: https://petsyapp.herokuapp.com/

Petsy is a full-stack web application inspired by (you guessed it!) Etsy. Petsy was built using Ruby on Rails, a PostgreSQL database, and React.js with Flux architecture.

## Product Features and Implementation

### Optimized Frontend and Backend Interplay

Petsy has been built to balance a React frontend model with a Rails backend API for simple database requests for optimal UX. The React frontend is responsible for not only rendering the basic HTML for the website, but also for handling the user's interactions with the SQL database via AJAX requests, allowing the user to remain on a single page without redirecting. The Rails backend, in turn, is structured to send back all necessary JSON content, including error messages. Even error-handling occurs frontend so that users are not punished for a tiny misstep with a full redirect.

### Store and Product Creation

Petsy allows its users to create stores to sell their many pet products to others. Store and product creation require users to be signed in to their accounts, and for them to be the owners of the account. There is both front- and backend verification to prevent malicious users from editing others' stores.

### Shopping Cart

Petsy users are able to add desired items to a shopping cart to allow later purchase. These carts are stored as orders on the database side, and can be managed and cleared via the navbar.

### Search

Petsy implements a search feature, which enables users to filter stores and products by title and description, as well as order the results of these searches by number of favorites.

## Future Features and Optimizations

### Wishlists

Wishlists are an important special feature of many of the best online shopping sites, so they would certainly be a great feature for Petsy.

### Shopping Cart Persistence

Current shopping carts do not persist when users refresh, but with a simple usage of either the user-side cookie or an additional database column, a user's current cart could be persisted. This is certainly an important feature that I would like to have on Petsy.

### Product Ordering by Department

Petsy could also get good use from product ordering by department, as this would help users find items even if they do not have a specific idea of what kind of pet toy/product they would like to order yet.
