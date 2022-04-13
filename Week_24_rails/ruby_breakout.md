April 12
# for debugging

gem install pry
 
then in .rb fil

binding.pry

or byebyebug


# add ons

"dash" for chrome


# namespacing
https://stackoverflow.com/questions/3009477/what-is-rubys-double-colon

```ruby
module SomeModule
    module InnerModule
        class MyClass
            CONSTANT = 4
        end
    end
end
```

You could access CONSTANT from outside the module as SomeModule::InnerModule::MyClass::CONSTANT.

# session token
tutorial
https://stevepolito.design/blog/rails-authentication-from-scratch/

for user logged in


bin/rails g model User email:string

## migrate
bin/rails db:migrate

## to check if it worked
bin/rails c

User.all

## install bcrypt in the main gem 
then run 'bundle' in CLI

## 
rails g controller Users

# version control
asdf install ruby 3.0.3 for the tutorial
other option rbenv

# to end a running app
ps aux | grep ruby

# puma.rb
to change the port where is running