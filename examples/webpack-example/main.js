import 'liturgical-calendars-select';

(function($) {
  $(document).ready(function() {
    $('.litcal-calendars-select').liturgicalCalendarsSelect({
      apiUrl: 'http://localhost:8000',
      selectClass: 'my-select'
    });
  });
})(jQuery);

