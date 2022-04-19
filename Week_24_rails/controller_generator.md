# controller generator

in CLI
rails g controller admin/categories index new create

bin/rails generate controller <name>

# model generator

bin/rails generate model [fields]

for user authentication

First name
Last name
E-mail
Password

password_confirmation
password_digest (hashed password )

has_secure_password
bcrypt

## tutorial
https://gist.github.com/thebucknerlife/10090014

bin/rails generate model user new create
bin/rails generate controller model new create
bundle install
bin/rails generate controller session new create destroy

# issues solved using rails c in terminal
inside root folder
terminal in vs code

rails c => enter rails console

User.new(user_params)

reload!

User.attribute_names

Category.count
Category.first
Category.last
Order.last
Product.last
Product.count
User.new
ENV["ADMIN"]
ENV["PASSWORD"]

ctrl D => to escape rails console

1. drop the db making sure I have seeds file
rake db:drop
2. erase all user model files
3. rake db:setup
4. rails generate model user name email password_digest (last time only used password.. did not work) had to re do the model
5. rake db:migrate
6. bundle install
7. rails c to confirm database was working