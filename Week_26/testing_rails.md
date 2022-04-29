# tests for rails
## capybara
Capybara helps you test web applications by simulating how a real user would interact with your app. It is agnostic about the driver running your tests and comes with Rack::Test and Selenium support built in. WebKit is supported through an external gem.
## poltergeist
Poltergeist is a driver for Capybara. It allows you to run your Capybara tests on a headless WebKit browser, provided by PhantomJS.
### phantomjs (npm)
https://phantomjs.org/
## DatabaseCleaner
Database Cleaner is a set of gems containing strategies for cleaning your database in Ruby.

The original use case was to ensure a clean state during tests. Each strategy is a small amount of code but is code that is usually needed in any ruby app that is testing with a database.

# for jungle project
npm install -g phantomjs-prebuilt

install gems
group :test do
  gem 'capybara'
  gem 'poltergeist'
  gem 'database_cleaner'
end

feature block => describe block
scenario block => it block
 # example
 bin/rails generate rspec:feature home_page

 add code in hompeage

 run test
 bin/rspec spec/features

 open screenshot generated

 expect(page).to have_css 'article.product'

In other words we are testing UX (User Experience) more than we are testing UI (User Interface).

# capybara cheat sheet
https://thoughtbot.com/upcase/test-driven-rails-resources/capybara.pdf


http://cheatrags.com/capybara