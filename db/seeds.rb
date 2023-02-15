require_relative '../lib/hobbies_module'
require_relative '../lib/images_module'

include HobbiesModule
include ImagesModule

DISABLE_DATABASE_ENVIRONMENT_CHECK=1

# LoginPageSlide.destroy_all
# AboutU.destroy_all
# CommunityImpact.destroy_all
# MilitarySpecialization.destroy_all
# MajorGeneral.destroy_all
# Platoon.destroy_all
# Memorial.destroy_all
# Technology.destroy_all
# Training.destroy_all
# Soldier.destroy_all
# SoldierProfile.destroy_all
# SoldierTraining.destroy_all

puts "🎖️ Seeding..."

7.times do
    LoginPageSlide.create!(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraphs * 2,
        image_url: military_images.sample
    )
end

10.times do
    AboutU.create!(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraphs * 3,
        image_url: nature_images.sample
    )
end

10.times do
    CommunityImpact.create!(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraphs * 4,
        image_url: nature_images.sample
    )
end

army_careers.map do |career|
    MilitarySpecialization.create!(
        title: career,
        description: Faker::Lorem.paragraphs,
        sphere: ["lithosphere", "hydrosphere", "atmosphere"].sample,
        financial_investment: rand(130000000..190000000),
        commander_in_charge: Faker::Name.unique.name,
        commander_image_url: Faker::Avatar.image,
        image_url: personal_images.sample
    )
end

10.times do
    MajorGeneral.create!(
        name: Faker::Name.unique.name,
        image_url: Faker::Avatar.image,
        bio: Faker::Lorem.paragraphs,
        gender: ["Male", "Female"].sample,
        interests: hobbies.sample + ', ' + hobbies.sample + ', ' + hobbies.sample,
        favourite_foot: ["Left", "Right"].sample,
        age: rand(35..50)
    )
end

20.times do
    Platoon.create!(
        name: Faker::Book.title + Faker::Ancient.god,
        sphere_assigned: ["lithosphere", "hydrosphere", "atmosphere"].sample,
        skill_lvl: ["Bronze", "Silver", "Masters", "GrandMasters", "Epics", "Legends", "Mythics", "Mythical Glories"].sample,
        ranking: rand(1..20)
    )
end

50.times do
    Memorial.create!(
        name: Faker::Name.unique.name,
        title: [Faker::Military.army_rank, Faker::Military.marines_rank, Faker::Military.navy_rank, Faker::Military.air_force_rank, Faker::Military.space_force_rank, Faker::Military.coast_guard_rank].sample,
        image_url: Faker::Avatar.image,
        age: rand(20..60),
        description: Faker::Lorem.paragraphs * 2
    )
end

10.times do
    Technology.create!(
        title: Faker::Lorem.sentence,
        author: Faker::Name.unique.name,
        image_url: images_mods.sample,
        description: Faker::Lorem.paragraphs * 7,
        date_written: Faker::Date.between(from: '2020-09-23', to: '2022-09-25')
    )
end

5.times do
    Training.create!(
        title: ["Basic Training",
            "Advanced Training",
            "Leadership Development Training",
            "Additional Skills Training",
            "Specialized Skills Training"].sample,
        image_url: [
            "https://p4.wallpaperbetter.com/wallpaper/587/571/734/hand-to-hand-combat-mirror-s-edge-wallpaper-preview.jpg",
            "https://p4.wallpaperbetter.com/wallpaper/802/900/43/anime-anime-girls-girls-with-guns-wallpaper-preview.jpg",
            "https://p4.wallpaperbetter.com/wallpaper/675/602/537/jet-fighters-dassault-rafale-aircraft-jet-fighter-wallpaper-preview.jpg",
            "https://p4.wallpaperbetter.com/wallpaper/964/1021/316/jet-fighter-airplane-contrails-f-22-raptor-wallpaper-preview.jpg",
            "https://p4.wallpaperbetter.com/wallpaper/1011/87/593/33rd-acrobatics-armored-btr-80-wallpaper-preview.jpg"
        ].sample,
        description: Faker::Lorem.paragraphs * 3,
        duration_in_hours: rand(2..7),
        instructor_name: Faker::Name.unique.name
    )
end

50.times do
    soldier = Soldier.create!(
        name: Faker::Name.unique.name,
        image_url: Faker::Avatar.image,
        age: rand(18..60),
        gender: ["Male", "Female"].sample,
        military_specialization_id: rand(1..35),
        platoon_id: rand(1..20),
        major_general_id: rand(1..10)
    )
    SoldierProfile.create!(
        name: soldier.name,
        platoon_id: soldier.platoon_id,
        gender: soldier.gender,
        bio: Faker::Lorem.paragraphs * 3,
        interests: hobbies.sample + ', ' + hobbies.sample + ', ' + hobbies.sample + ', ' + hobbies.sample,
        image_url: soldier.image_url,
        image_url_2: personal_images.sample,
        image_url_3: personal_images.sample,
        favourite_foot: ["Left", "Right"].sample,
        skills: ["Bronze", "Silver", "Masters", "GrandMasters", "Epics", "Legends", "Mythics", "Mythical Glories"].sample,
        soldier_id: soldier.id
    )
    SoldierTraining.create!(
        soldier_id: soldier.id,
        training_id: rand(1..5)
    )
end

puts "🪖 Done Seeding"