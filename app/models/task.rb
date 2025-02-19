class Task < ApplicationRecord
  validates :destination, presence: true
  validates :date, presence: true
  validates :time, presence: true
end