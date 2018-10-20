module Days
  class DayPage < Jekyll::Page
    def initialize(site, base, dir, date, day, cday)
      @site = site
      @base = base
      @dir = dir
      @name = "#{date}.html"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'day.html')
      self.data['date'] = date
      self.data['day'] = day
      self.data['calendar_day'] = cday
      self.data['category'] = 'days'
    end
  end

  class Generator < Jekyll::Generator
    safe true

    def generate(site)
      require 'date'
      @site = site
      start_date = site.data['course']['start_date']
      class_days = site.data['course']['days'] - 1
      total_days = (class_days / 5).floor * 7 + (class_days % 5)
      # TODO: Uncomment below to generate day pages
      # (0..total_days).each do |cday|
      #   date = Date.parse(start_date) + cday
      #   Jekyll.logger.info "Days:", "Generating page for #{date}"
      #   dir = site.config['days_dir'] || ''
      #   if cday % 7 < 5
      #     day = (cday / 7).floor * 5 + (cday % 7) + 1
      #   else
      #     day = nil
      #   end
      #   site.pages << DayPage.new(site, site.source, dir, date, day, cday)
      # end
    end
  end
end
