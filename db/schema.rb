# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_10_155010) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "about_us", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "client_messages", force: :cascade do |t|
    t.string "full_name"
    t.string "professional_email"
    t.string "their_message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "community_impacts", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fan_messages", force: :cascade do |t|
    t.string "message"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fan_messages_on_user_id"
  end

  create_table "login_page_slides", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "major_generals", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "bio"
    t.string "gender"
    t.string "interests"
    t.string "favourite_foot"
    t.integer "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "memorials", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.string "image_url"
    t.integer "age"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "military_specializations", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "sphere"
    t.integer "financial_investment"
    t.string "commander_in_charge"
    t.string "commander_image_url"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "platoons", force: :cascade do |t|
    t.string "name"
    t.string "sphere_assigned"
    t.string "skill_lvl"
    t.integer "ranking"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "soldier_profiles", force: :cascade do |t|
    t.string "name"
    t.integer "platoon_id"
    t.string "gender"
    t.string "bio"
    t.string "interests"
    t.string "image_url"
    t.string "image_url_2"
    t.string "image_url_3"
    t.string "favourite_foot"
    t.string "skills"
    t.bigint "soldier_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["soldier_id"], name: "index_soldier_profiles_on_soldier_id", unique: true
  end

  create_table "soldier_trainings", force: :cascade do |t|
    t.bigint "soldier_id"
    t.bigint "training_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["soldier_id"], name: "index_soldier_trainings_on_soldier_id"
    t.index ["training_id"], name: "index_soldier_trainings_on_training_id"
  end

  create_table "soldiers", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.integer "age"
    t.string "gender"
    t.bigint "military_specialization_id"
    t.bigint "platoon_id"
    t.bigint "major_general_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["major_general_id"], name: "index_soldiers_on_major_general_id"
    t.index ["military_specialization_id"], name: "index_soldiers_on_military_specialization_id"
    t.index ["platoon_id"], name: "index_soldiers_on_platoon_id"
  end

  create_table "technologies", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "image_url"
    t.string "description"
    t.date "date_written"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trainings", force: :cascade do |t|
    t.string "title"
    t.string "image_url"
    t.string "description"
    t.integer "duration_in_hours"
    t.string "instructor_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_comments", force: :cascade do |t|
    t.string "full_name"
    t.string "image_upload"
    t.string "user_comment"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_comments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin?"
    t.integer "age"
    t.string "gender"
    t.string "bio"
    t.string "interests"
    t.string "image_upload"
    t.string "favourite_military_branch"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "fan_messages", "users"
  add_foreign_key "soldier_profiles", "soldiers"
  add_foreign_key "soldier_trainings", "soldiers"
  add_foreign_key "soldier_trainings", "trainings"
  add_foreign_key "user_comments", "users"
end
