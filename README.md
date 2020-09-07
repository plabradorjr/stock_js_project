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
This Minimum Viable Product is designed for tracking the top gainers of the US stock market. The backend scrapes Yahoo Finance, then stores the data into my own database. The rails then generates its own API for the frontend JavaScript to fetch. At this time, the narrative of the frontend is memetic, but its only skin level deep. In the future, the skills I've used to make this MVP can scrape multiple data to generate a more useful insight for better trading purposes.

## MIT License
The code is available as open source under the terms of the MIT License.

