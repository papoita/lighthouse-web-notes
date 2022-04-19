# in cLI
bin/rails g migration add_discount_cents_to_products

# in last migration in db
def change
  add_column :products, :discounts_cents, :integer
  end
end

# in schema
revise that the tabe has not been updated with the last migrate file

# run migration
bin/rake db:migrate

# unroll migration because of a mistake
bin/rake db:rollback

# run migrate again
bin/rake db:migrate

