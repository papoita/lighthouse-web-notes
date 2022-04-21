# pair programming sales in jungle
Admin
-everything is 10% for backtoschool (Aug 10 to Sept 15)
everything is 30% off for christmas holidays(Dec15 - Jan 3)

Ability for admin to create sale recors

-name
-percent off
-starts_on
-ends_on

once a sale is active, display it on the products#index page (homepage) and affect the prices

EDD
So..

1. create routes
2. create route under admin using resources: :admin [:index]
2. check route created using
bin/rake routes
3.  create the controller
bin/rails g controller admin/sales
4. create imdex view
touch app/views/admin/sales/index.html.erb
5 add new route
6. new sales model
bin/rails g model sale name percent_off:integer starts_on:date ends_on:date
7. bin/rake db:migrate
8. enter rails c
enter typical activRecord create call, just one hash! not more than 1 argument!
Sale.create! name: "x-mas Sale!", starts_on: 'Dec 5, 2022', ends_on: 'Jan 3, 2023', percent_off: 50
9. add views html and add partial sale
10. create more sales hashes
Sale.create! name: "March Break", starts_on: 30.days.ago, ends_on: 20.days.ago, percent_off: 15
11. check with
Sale.count
should now be 2
12. create more sales hashes
Sale.create! name: "Spring", starts_on: 6.days.ago, ends_on: 10.days.from_now, percent_off: 25


# once any sale is active, display it on any page and affect the prices

1. start from front end alert sign in application.html.erb
