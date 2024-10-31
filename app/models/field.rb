class Field < ApplicationRecord
  belongs_to :calculator
  has_many :categories, dependent: :destroy
end
