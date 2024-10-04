import 'liturgical-calendars-select';

(function($) {
  $(document).ready(function() {
    $('.litcal').liturgicalCalendarsSelect({
      apiVersion: 'dev',
      selectClass: 'my-select'
    });
  });
})(jQuery);

