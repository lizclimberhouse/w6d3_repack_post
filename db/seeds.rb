10.times do
  Note.create(
    title: Faker::Name.title,
    color: Faker::Commerce.color,
    body: Faker::Hacker.say_something_smart,
    image: Faker::Company.logo,
    due: Faker::Date.backward(14),
  )
end