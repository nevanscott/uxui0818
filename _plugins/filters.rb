module Jekyll
  module DateFilter
    require 'date'
    def date_sort(collection, property = 'date')
      collection.sort_by do |el|
        Date.parse(el.data[property], '%Y-%m-%d')
      end
    end
    def class_date(day, start)
      # Assuming start is a Monday, and no holidays are included
      if (day.to_s == day.to_i.to_s)
        week_count = ((day - 1) / 5).floor
        day_count = (day - 1) % 5
        days_since_start = week_count * 7 + day_count
        return Date.parse(start) + days_since_start
      else
        return day
      end
    end
  end
end
Liquid::Template.register_filter(Jekyll::DateFilter)
