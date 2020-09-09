# JS frontend, Rails backend API

This is a Flatiron School project.

# Installation

After checking out the repo, run `bundle install` to install dependencies.

To view app on your local host, cd into `backend/stock_api`

run `rails db:migrate`

next `rails db:seed`

then `rails s` to run the rails backend api.

finally, open `frontend/index.html` on your browser.

# What is it?
This Single Page Application (SPA) is designed for tracking the 24-hour top gainers of the US stock market. The backend scrapes Yahoo Finance, then stores the data into my own database. The rails backend then generates its own API for the frontend JavaScript to fetch. A user can then post a comment for the day's current top stock gainers. The data is refreshed and deleted daily.

At this time, the narrative of the frontend is memetic. In the future, the skills I've used to make this MVP can scrape multiple data to generate a more useful stock trading insights.

## MIT License
The code is available as open source under the terms of the MIT License.

# Specs

JavaScript
- [x] Use classes and functions to organize your code into reusable pieces.
- [x] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
- [x] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).
- [x] Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD).
- [x] Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

Rails
- [x] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
- [x] The domain model served by the Rails backend must include a resource with at least one has-many relationship
- [x] Well-named variables and methods
- [x] Short, single-purpose methods