In Ruby:

Capitalized words can be used to define a constant
A constant can refer to a Module, a Class or simple data like Floats and Strings
Namespacing is used heavily to limit the exposure of constants defined in the global namespace
The :: Syntax is used to access constants (Modules, Classes, etc)
It is convention to only capitalize the first letter when defining Class and Module constants like Apple
It is convention to capitalize and underscore the entire name when defining value constants like FOUNDED_BY

```ruby

module Careers
  class Engineer
  end

  class Teacher
  end
end

# classes
https://launchschool.com/books/oo_ruby/read/the_object_model
# objects

value is an object: that includes numbers, strings, arrays, and even classes and modules. However, there are a few things that are not objects: methods, blocks, and variables are three that stand out.
```ruby
class MyClass
end

my_obj = MyClass.new


```
# modules
A module allows us to group reusable code into one place. We use modules in our classes by using the include method invocation, followed by the module name. Modules are also used as a namespace.

```ruby
module Study
end

class MyClass
  include Study
end

my_obj = MyClass.new
```

