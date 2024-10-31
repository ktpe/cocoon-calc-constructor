class Field < ApplicationRecord
  belongs_to :calculator
  has_many :categories, dependent: :destroy

  accepts_nested_attributes_for :categories, reject_if: :all_blank, allow_destroy: true
end
