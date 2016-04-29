# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

400.times do |i|
  User.create!(username: "petlover#{i}", password: "123123")
end

100.times do |i|
  Store.create!(store_name: "Petland Mark #{i}", description: Faker::Commerce.department(5), user_id: rand(1..400))
end

1000.times do |i|
  Item.create!(
    title: "#{Faker::Commerce.product_name} #{i}",
    description: Faker::Hipster.paragraph,
    price: Faker::Commerce.price,
    store_id: rand(1..100)
  )
end
