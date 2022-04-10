lectures
https://vimeo.com/662480132/29c69f9a2f

https://www.youtube.com/watch?v=rc5M7SqXsI4

https://vimeo.com/674602678/56b34f4ec0

# formatting setup
Hi

For the code formatter this is what I used
In the settings, I added: (you don't have to remove other extension settings
 "ruby.codeCompletion": "rcodetools",
    "ruby.intellisense": "rubyLocate",
    "ruby.format": "rubocop",
    "ruby.useBundler": true,
    "ruby.lint": {
        "rubocop": {
        "useBundler": true
        }
    },
    "ruby.useLanguageServer": true,

Then install rubocop  gem install rubocop
if you are using ruby 2.3, you could be prompted to manually install parallel before installing rubocop. You would also need a downgraded version of rubocop if using ruby 2.3.
To install parallel gem install parallel -v 1.19.2
Then gem install rubocop -v 0.81

Try formatting afterwards
f ruby version
gem install parallel -v 1.19.2

# Object Relational Mapping (ORM)
 is the technique of accessing a relational database using an object-oriented programming language. Object Relational Mapping is a way for our Ruby programs to manage database data by "mapping" database tables to classes and instances of classes to rows in those tables.

# Active record (AR)
https://edgeguides.rubyonrails.org/active_record_basics.html

https://web-crunch.com/posts/understanding-ruby-on-rails-activerecord-validations

define database models for app tp work with SQL database using classes

each AR class (model) corrresponds to an existing table in the dataset 
provides attributes that map each column field in the table
CRUD records that table using Class and its instances

```ruby
# Executes the following SELECT and returns an instance attributes for that record:
#   SELECT * FROM users WHERE email = 'bob@loblaw.com' LIMIT 1;
user = User.find_by(email: 'bob@loblaw.com')

# Reads an attribute (like an attr_reader)
user.id # => 5

# These are just like an attr_writers, performing changes in memory (no UPDATE sql)
user.name  = 'Bob'
user.email = 'bob@loblaw.org'

# Executes the following UPDATE statement:
#   UPDATE users SET name = 'Bob', email = 'bob@loblaw.org' WHERE id = 1;
# (Assuming id of record was 1)
user.save
```

