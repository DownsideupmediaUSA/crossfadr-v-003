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

ActiveRecord::Schema.define(version: 20170509230554) do

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
    t.string "email"
    t.string "authentication_token"
    t.string "password"
  end

  create_table "votes", force: :cascade do |t|
    t.string   "votable_type"
    t.integer  "votable_id"
    t.string   "voter_type"
    t.integer  "voter_id"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope"
    t.index ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope"
  end

end
