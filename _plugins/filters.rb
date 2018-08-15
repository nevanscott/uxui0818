module Jekyll
  module DateFilter
    require 'date'
    def date_sort(collection, property = 'date')
      collection.sort_by do |el|
        Date.parse(el.data[property], '%Y-%m-%d')
      end
    end
  end
end
Liquid::Template.register_filter(Jekyll::DateFilter)
