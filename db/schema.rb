# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170325165419) do

  create_table "djs", force: :cascade do |t|
    t.string   "dj_name"
    t.string   "dj_image_file_name"
    t.string   "dj_image_content_type"
    t.integer  "dj_image_file_size"
    t.datetime "dj_image_updated_at"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string   "genre_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "liked_mixes", force: :cascade do |t|
    t.integer  "mix_id"
    t.integer  "user_id"
    t.integer  "dj_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mixes", force: :cascade do |t|
    t.string   "mix_title"
    t.integer  "dj_id"
    t.integer  "genre_id"
    t.string   "mp3_url"
    t.string   "mix_mp3_file_name"
    t.string   "mix_mp3_content_type"
    t.integer  "mix_mp3_file_size"
    t.datetime "mix_mp3_updated_at"
    t.string   "mix_image_file_name"
    t.string   "mix_image_content_type"
    t.integer  "mix_image_file_size"
    t.datetime "mix_image_updated_at"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "shared_mixes", force: :cascade do |t|
    t.integer  "mix_id"
    t.integer  "user_id"
    t.integer  "dj_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
