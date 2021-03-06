# Ruby
dynamically typed
class based OOP

## version managers
nvm list -node
https://github.com/tj/n

rvm - ruby
https://rvm.io/
https://github.com/rbenv/rbenv

asdf
multiple languages
https://github.com/asdf-vm/asdf

rbenv
to insrall seversal versions

# in CLI
irb
quit

### run file
ruby <filename>

# Gems
In Node we have module "Packages" that npm lets us install globally or as a dependency for a given project.

In Ruby these "3rd party libraries" are referred to as "Gems", which is managed by the gem command:
gem
gem list


# resources
https://learnxinyminutes.com/docs/ruby/

#comment
=begin
=end

"Hello".class

"Hello".method(:class).class 
nil => null
true
false
nil.class
true.class
false.class

#{stringinterpolation}

puts " "
print

also shows the type
p 

variable_names

# conditionals
if()
elsif()
else
end
## unless
positive
unless username == paola
puts "you are not the right user"

sunny = true
puts "what a nice day" if sunny == true

# ternary operator
puts sunny ? 'super sunny out' : 'not so sunny'

# type of class
my_var.class


# convert class
my_var.to_s
my_var.to_i

# print all methods
puts.my_var.methods

# constants
Upper case constants
underscore
double equals (there is no cohersion)

# loops
i = 0 
loop do
  i += 1
  puts "hello " + i.to_s
end

break if i > 10

# template literals
" " is `` of js

# loops

names.each_with_index do |name|
 puts "Hello #{name}, how are you? #{index}

 # generate numbers
 (1...10).each do
  puts "yay!!"
end

or

1000.times do
  puts "all done!"
end

# You might prefer %w instead of quotes
```ruby
%w[foo bar baz] #=> ["foo", "bar", "baz"]

array.last
array.first

array.push

array.include?(1)

# Hashes are Ruby's primary dictionary with key/value pairs.
# Hashes are denoted with curly braces.
hash = { 'color' => 'green', 'number' => 5 }

hash.keys #=> ['color', 'number']

# Hashes can be quickly looked up by key.
hash['color'] #=> "green"
hash['number'] #=> 5


 When using symbols for keys in a hash, you can use an alternate syntax.

hash = { :defcon => 3, :action => true }
hash.keys #=> [:defcon, :action]

hash = { defcon: 3, action: true }
hash.keys #=> [:defcon, :action]

# Check existence of keys and values in hash
hash.key?(:defcon) #=> true
hash.value?(3) #=> true

# Tip: Both Arrays and Hashes are Enumerable!
# They share a lot of useful methods such as each, map, count, and more.

# Control structures

# Conditionals
if true
  'if statement'
elsif false
  'else if, optional'
else
  'else, also optional'
end

# Rephrase condition if `unless` sounds better than `if`
puts("Some warnings occurred:\n" + warnings.join("\n"))  unless warnings.empty?

(1..5).each do |counter|
  puts "iteration #{counter}"
end

# The contents of data structures can also be iterated using each.
array.each do |element|
  puts "#{element} is part of the array"
end
hash.each do |key, value|
  puts "#{key} is #{value}"
end

# If you still need an index you can use 'each_with_index' and define an index
# variable.
array.each_with_index do |element, index|
  puts "#{element} is number #{index} in the array"
end

array = [1,2,3,4,5]
doubled = array.map do |element|
  element * 2
end
puts doubled
#=> [2,4,6,8,10]
puts array
#=> [1,2,3,4,5]

# another useful syntax is .map(&:method)
a = ["FOO", "BAR", "BAZ"]
a.map { |s| s.downcase } #=> ["foo", "bar", "baz"]
a.map(&:downcase) #=> ["foo", "bar", "baz"]


# Case construct
grade = 'B'

case grade
when 'A'
  puts 'Way to go kiddo'
when 'B'
  puts 'Better luck next time'
when 'C'
  puts 'You can do better'
when 'D'
  puts 'Scraping through'
when 'F'
  puts 'You failed!'
else
  puts 'Alternative grading system, eh?'
end
#=> "Better luck next time"

# Cases can also use ranges
grade = 82
case grade
when 90..100
  puts 'Hooray!'
when 80...90
  puts 'OK job'
else
  puts 'You failed!'
end

first, second, third = ARGV

puts "Your first variable is: #{first}"
puts "Your second variable is: #{second}"
puts "Your third variable is: #{third}"
```
What's the difference between ARGV and gets.chomp?
The difference has to do with where the user is required to give input. If they give your script inputs on the command line, then you use ARGV. If you want them to input using the keyboard while the script is running, then use gets.chomp.

https://learnrubythehardway.org/book/ex18.html
Functions do three things:

They name pieces of code the way variables name strings and numbers.
They take arguments the way your scripts take ARGV.
Using 1 and 2, they let you make your own "mini-scripts" or "tiny commands."

Why does "test" && "test" return "test" or 1 && 1 return 1 instead of true?
Ruby and many languages like to return one of the operands to their Boolean expressions rather than just true or false. This means that if you did false && 1 you get the first operand (false), but if you do true && 1 you get the second (1). Play with this a bit.

# conditionals
```ruby
if
end
```


```ruby
if door == 1
puts "something"
elsif door == 2
else
puts "something else"
end
```

```ruby
first_name = Paola
unless (first_name = Paola)
puts pick a different name"
end
```
# loops
an_array = ["Hello", "nurse", "and", "world"]

an_array.each { |word| puts word}

# exercise enumeratiing candidates
33 dif betwwen puts and pp
The difference is that puts uses to_s to convert the argument to a String, and p uses inspect . This means p is often more useful for debugging than puts . pp is "pretty print"; it uses pretty_inspect to obtain a String representation of an object.

# hashes

## hash rocket

user = {
  "first_name" => "paola"
  "last_name" => "perez"
}

puts user
puts user["first_name"]

very slow beacuse both key and values are object

# symbols for keys

user = {
  :first_name => "ada"
  :last_name => "hello"
}

puts user
p user[:last_name]

# lambdas and blocks

my_lambda = lambda do |name|
  puts "hello there #{name}"
end

names.each &my_lambda

# classes

class Car
  def initialize make, model, year
  @make = make
  @model = model
  @year = year
  end
end

attr_reader :model
attr_write :model
attr_accessor :year

car = Car.new

p car
puts car.make
puts car.year
puts.car

## for several attributes
attr_accessor :year, :make, :model