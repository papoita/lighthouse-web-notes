# intro to RSPEC and TDD


# ruby
https://blog.teamtreehouse.com/an-introduction-to-rspec


Testing library based on behavior not in methods

gem install rspec

file called hash_spec.rb

# ex
run 
$ rspec hash_spec.rb


describe Hash do
  it "should return a blank instance" do
    Hash.new.should == {}
  end
end


describe Hash do
  before do
    @hash = Hash.new({:hello => 'world'})
  end

  it "should return a blank instance" do
    Hash.new.should == {}
  end

  it "hash the correct information in a key" do
    @hash[:hello].should == 'world'
  end
end

# ex
class vs instance methods
“.” will signify that you’re testing a class method, and using “#” will signify that it’s an instance method.

# mocks and stubs
not live API for testing api calls

