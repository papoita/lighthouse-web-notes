Much like JavaScript, Ruby gives us the ability to pass around executable code as if it were data. Blocks are the simplest way to do this in Ruby.

```ruby

# filter elements in an array
 days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]  

 # Select those which start with 'T' 
 days.select do | item |
     item.match /^T/
 end

=> ["Tuesday", "Thursday"]

# sort by name length
days.sort do |x,y|
    x.size <=> y.size
 end

=> ["Monday", "Friday", "Tuesday", "Thursday", "Wednesday"]

# reverse name
reversed_name = ""

# Invoke the method passing a different block
person.do_with_name do |value| 
    reversed_name = value.reverse
end

puts reversed_name
```