require_relative '../lib/hobbies_module'
require_relative '../lib/images_module'

extend HobbiesModule
extend ImagesModule

puts "🎖️ Seeding..."

10.times do
    LoginPageSlide.create!(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.sentences,
        image_url: Faker::Image.unique.nature
    )
end

5.times do
    AboutU.create!(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.sentences,
        image_url: Faker::Image.unique.people
    )
end

5.times do
    CommunityImpact.create!(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.sentences,
        image_url: Faker::Image.unique.animals
    )
end

army_careers =  [
    "Immaterial & Personnel Special Reporting Codes",
    "Infantry Branch (IN)",
    "Corps of Engineers Branch (EN)",
    "Field Artillery Branch (FA)",
    "Air Defense Artillery Branch (ADA)",
    "Aviation Branch (AV)",
    "Cyber Branch (CY)",
    "Special Forces (SF)",
    "Armor Branch (AR)",
    "Signal Corps Branch (SC)",
    "Information Network Engineering Functional Area (FA 26)",
    "Judge Advocate General Branch (JA)",
    "Information Operations Functional Area (FA 30)",
    "Military Police Branch (MP)",
    "Strategic Intelligence Functional Area (FA 34)",
    "Military Intelligence Branch (MI)",
    "Finance & Comptroller Branch (FC)",
    "Psychological Operations Branch (PO)",
    "Civil Affairs Branch (CA)",
    "Space Operations Functional Area (FA 40)",
    "Adjutant General Corps (AG)",
    "Public Affairs Functional Area (FA and CMF 46)",
    "Academy Professor Functional Area (FA 47)",
    "Foreign Area Officer Functional Area (FA 48)",
    "Operations Research/Systems Analysis (ORSA) Functional Area (FA 49)",
    "Force Management Functional Area (FA 50)",
    "Army Acquisition Corps (FA and CMF 51)",
    "Nuclear and Counter WMD Functional Area (FA 52)",
    "Chaplain Branch (CH)",
    "Simulation Operations Functional Area (FA 57)",
    "Army Marketing Functional Area (FA 58)",
    "Strategic Plans and Policy Functional Area (FA 59)",
    "Medical Department Branches",
    "Chemical Corps (CM)",
    "Logistics Corps"
]

army_careers.map do |career|

    35.times do

        MilitarySpecialization.create!(
            title: career,
            description: Faker::Lorem.sentences,
            sphere: ["lithosphere", "hydrosphere", "atmosphere"].sample,
            financial_investment: rand(130000000..190000000),
            commander_in_charge: Faker::Name.unique.name,
            commander_image_url: Faker::Avatar.image,
            image_url: Faker::Image.unique.animals
        )
    
    end
end

50.times do
    MajorGeneral.create!(
        name: Faker::Name.unique.name,
        image_url: Faker::Avatar.image,
        bio: Faker::Lorem.sentences,
        gender: ["Male", "Female"].sample,
        interests: HOBBIES.sample,
        favourite_foot: ["Left", "Right"].sample,
        age: rand(35..50)
    )
end

300.times do
    Platoon.create!(
        name: [Faker::Ancient.unique.god, Faker::Ancient.unique.primordial, Faker::Ancient.unique.titan, Faker::Ancient.unique.hero].sample,
        sphere_assigned: ["lithosphere", "hydrosphere", "atmosphere"].sample,
        skill_lvl: ["Bronze", "Silver", "Masters", "GrandMasters", "Epics", "Legends", "Mythics", "Mythical Glories"].sample,
        ranking: rand(1..300)
    )
end

1000.times do
    Memorial.create!(
        name: Faker::Name.unique.name,
        title: [Faker::Military.army_rank, Faker::Military.marines_rank, Faker::Military.navy_rank, Faker::Military.air_force_rank, Faker::Military.space_force_rank, Faker::Military.coast_guard_rank].sample,
        image_url: Faker::Avatar.image,
        age: rand(20..60),
        description: Faker::Lorem.sentences
    )
end

50.times do
    Technology.create!(
        title: Faker::Lorem.sentence,
        author: Faker::Name.unique.name,
        image_url: IMAGES_MODS.sample,
        description: Faker::Lorem.sentences Faker::Lorem.sentences Faker::Lorem.sentences,
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
        description: Faker::Lorem.sentences Faker::Lorem.sentences,
        duration_in_hours: rand(2..7),
        instructor_name: Faker::Name.unique.name
    )
end

3000.times do
    soldier = Soldier.create!(
        name: Faker::Name.unique.name,
        image_url: Faker::Image.unique.people,
        age: rand(18..60),
        gender: ["Male", "Female"].sample,
        military_specialization_id: rand(1..35),
        platoon_id: rand(1..300),
        major_general_id: rand(1..50)
    )
    SoldierProfile.create!(
        name: soldier.name,
        platoon_id: soldier.platoon_id,
        gender: soldier.gender,
        bio: Faker::Lorem.sentences,
        interests: HOBBIES.sample,
        image_url: PERSONAL_IMAGES.sample,
        image_url_2: PERSONAL_IMAGES.sample,
        favourite_foot: ["Left", "Right"].sample,
        skills: ["Bronze", "Silver", "Masters", "GrandMasters", "Epics", "Legends", "Mythics", "Mythical Glories"].sample,
        soldier_id: soldier.id
    )
    SoldierTraining.create!(
        soldier_id: soldier.id,
        training_id: rand(1..5)
    )
end

10.times do
    user = User.create!(
        full_name: Faker::Name.unique.name,
        email: Faker::Internet.unique.email,
        password: Faker::Internet.password,
        password_confirmation: user.password,
        is_admin?: false
    )
    UserProfile.create!(
        full_name: user.full_name,
        email: user.email,
        age: rand(13..45),
        gender: ["Male", "Female"].sample,
        bio: Faker::Lorem.sentences Faker::Lorem.sentences,
        interests: HOBBIES.sample,
        image_upload: nil,
        favourite_military_branch: [
            "Infantry",
            "Air Defense Artillery",
            "Armor",
            "Aviation",
            "Corps of Engineers",
            "Field Artillery",
            "Special Forces",
            "Chemical Corps",
            "Signal Corps",
            "Military Intelligence Corps",
            "Military Police Corps",
            "Adjutant General's Corps",
            "Finance Corps",
            "Ordnance Corps",
            "Quartermaster Corps",
            "Transportation Corps",
            "Judge Advocate Generals Corps",
            "Chaplain Corps",
            "Medical Corps",
            "Medical Service Corps",
            "Dental Corps",
            "Veterinary Corps",
            "Army Medical Specialist Corps",
            "Army Nurse Corps"
        ].sample
    )
    UserComment.create!(
        user_comment: Faker::Lorem.sentences,
        user_id: user.id
    )
end

puts "🪖 Done Seeding"