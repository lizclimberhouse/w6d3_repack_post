10.times do
  Note.create(
    title: Faker::Name.title,
    color: Faker::Commerce.color,
    body: Faker::Hacker.say_something_smart,
    image: Faker::Company.logo,
    due: Faker::Date.backward(14),
  )
end

5.times do
  name = Faker::Name.name
  Friend.create(
    name: name,
    pic: Faker::Avatar.image(name, '50x50', 'png', 'set1'),
    desc: Faker::Hacker.say_something_smart,
  )
end
