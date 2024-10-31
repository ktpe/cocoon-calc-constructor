class Calculator < ApplicationRecord
  has_many :fields, dependent: :destroy
  has_one :formula, dependent: :destroy
end
