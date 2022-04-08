class Person
#attr_reader :name
#attr_writer :name
attr_accessor :name
    def initialize(name)
      @name = name
    end
 
    # reader method to manually define an instance variable or have the attribute reader to dynamically generate the method
    # def name
    #     @name
    # end

    # def name=(new_name)
    #   @name = new_name
    # end
end
  
  p = Person.new ('L. Ron')


  puts p.name

  p.name = "some new name"
  puts p.name