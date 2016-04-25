# Petsy

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Petsy is a web application inspired by (you guessed it!) Etsy that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login for regular users and stores
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Etsy-inspired site: product posting and editing, shopping cart management, item favoriting and tagging, and possibly construction of wishlists and store/user profiles.
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

Petsy will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create user account (MVP)
- [ ] Apply for a marketplace account
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create/edit/delete item postings (if sales account) (MVP)
- [ ] Add/remove items to shopping cart (MVP)
- [ ] Add/remove items from wishlist (expected feature, but not MVP)
- [ ] Tag items with multiple tags (expected feature, but not MVP)
- [ ] Favorite items (expected feature, but not MVP)
- [ ] Review transactions/orders (expected feature, but not MVP)
- [ ] Run promotions on sales accounts, with discounts and coupons (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Items Model, API, and basic APIUtil (1.5 days)

**Objective:** Items can be created, read, edited and destroyed through
the API.

- [ ] create `Item` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Items (`ItemsController`)
- [ ] jBuilder views for Items
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Items can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each Item component, building out the flux loop as needed.
  - [ ] `ItemsIndex`
  - [ ] `ItemIndexElement`
  - [ ] `ItemForm`
- [ ] save Items to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Stores (1 day)

**Objective:** Items belong to Stores, and can be viewed by Store.

- [ ] create `Store` model
- build out API, Flux loop, and components for:
  - [ ] Store CRUD
  - [ ] adding Items requires a Store
  - [ ] moving Items to a different Store
  - [ ] viewing Items by Store
- Use CSS to style new views

Phase 3 adds organization to the Items. Items belong to a Itembook,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Items can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for item
  - [ ] adding tags to item
  - [ ] creating tags while adding to items
  - [ ] searching items by tag
- [ ] Style new elements

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search through Items
- [ ] Pagination / infinite scroll for Items Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
