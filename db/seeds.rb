# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' },
#   Mayor.create(name: 'Emanuel', city: cities.first)

40.times do |i|
  User.create!(username: "pet_lover_#{i}", password: "123123")
end

User.create!(username: "pet_lover_demo", password: "meowmeow", profile_pic_url: "http://res.cloudinary.com/petsy/image/upload/v1462347568/uwmwa8ebrha75ef5oacn.jpg")

random_pet_types = [
  "Dog ",
  "Cat ",
  "Hamster ",
  "Turtle ",
  "Bunny ",
  "Pet "
]

random_store_words = [
  "Toy Emporium",
  "Palace",
  "Fun Store",
  "Entertainment Center",
  "Shoppe",
  "Toy Store"
]

random_store_sentences = [
  "We love your pets, and we want them to experience the greatest! ",
  "Browse our fine collection of toys. ",
  "Watch your pet's eyes light up when they see their new toy! ",
  "Let your pets know how much you care. ",
  "Keep your animals active and healthy with our products! "
]

stores_urls = [
  "http://res.cloudinary.com/petsy/image/upload/v1462344054/stores_production/1-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/10-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/11-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/12-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/13-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/14-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/15-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/16-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/17-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/18-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/19-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344054/stores_production/2-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/20-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344054/stores_production/21-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/22-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/23-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/24-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/25-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/26-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/27-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/28-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/29-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344054/stores_production/3-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/30-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/31-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/32-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/33-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/34-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/35-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/36-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/37-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/38-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/39-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/4-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/40-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/41-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/42-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/43-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344057/stores_production/44-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/45-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/46-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/47-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/48-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/49-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/5-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344058/stores_production/50-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344055/stores_production/6-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/7-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/8-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462344056/stores_production/9-animal-logo-design-inspiration.png",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_1.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_2.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_3.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_4.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_5.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_54.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_55.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_56.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_57.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_58.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_59.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343402/stores_production/true_6.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343403/stores_production/true_60.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343403/stores_production/true_7.jpg"
]

stores_urls.shuffle!
num_store_pics = stores_urls.length

50.times do |i|
  Store.create!(
    store_name: "The #{random_pet_types.sample}#{random_store_words.sample} #{i}",
    description: random_store_sentences.sample + random_store_sentences.sample + random_store_sentences.sample,
    user_id: rand(1..40),
    main_pic_url: stores_urls[i % num_store_pics]
  )
end

items_urls = [
  "http://res.cloudinary.com/petsy/image/upload/v1462343347/items_production/true.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_1.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_10.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_11.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_12.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_13.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_14.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_15.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_16.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_17.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_18.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_19.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_2.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_20.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_21.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_22.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_23.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_24.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_25.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_26.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343343/items_production/true_27.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_28.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_29.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_3.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_30.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_31.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343344/items_production/true_32.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_33.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_34.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_35.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_36.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_37.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_38.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_39.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_4.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_40.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_41.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343345/items_production/true_42.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_43.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_44.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_45.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_46.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_47.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_48.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_49.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_5.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_50.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_51.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_52.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343346/items_production/true_53.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343347/items_production/true_6.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343347/items_production/true_7.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343347/items_production/true_8.jpg",
  "http://res.cloudinary.com/petsy/image/upload/v1462343347/items_production/true_9.jpg"
]

items_urls.shuffle!
num_item_pics = items_urls.length

random_pet_toys = [
  "Squeaky Toy",
  "Scratching Post",
  "Ball",
  "Frisbee",
  "Wheel",
  "Toy"
]

random_item_sentences = [
  "Pets love this toy! ",
  "This is the greatest pet toy ever! ",
  "Pets will get years and years of use from this product. ",
  "Treat your pets with this fantastic item! ",
  "Search no more for fun new toys for your pet. This is definitely the toy for your little buddies! "
]

500.times do |i|
  Item.create!(
    title: random_pet_types.sample + random_pet_toys.sample + " #{i}",
    description: random_item_sentences.sample + random_item_sentences.sample + random_item_sentences.sample,
    price: rand(1..15).round(2),
    store_id: rand(1..50),
    product_pic_url: items_urls[i % num_item_pics]
  )
end

40.times do |i|
  store_ids = []
  10.times do
    store_ids << rand(1..50)
  end
  store_ids.uniq!

  store_ids.each do |store_id|
    Favorite.create!(
      user_id: i + 1,
      favoritable_id: store_id,
      favoritable_type: "Store"
    )
  end

  item_ids = []
  30.times do
    item_ids << rand(1..500)
  end
  item_ids.uniq!

  item_ids.each do |item_id|
    Favorite.create!(
      user_id: i + 1,
      favoritable_id: item_id,
      favoritable_type: "Item"
    )
  end
end
