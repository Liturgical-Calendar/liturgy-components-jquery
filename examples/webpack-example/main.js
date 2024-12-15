import { LitcalApiClient } from 'liturgy-components-jquery';
import 'liturgy-components-jquery';

(function($) {
  LitcalApiClient.apiUrl = 'http://localhost:8000';
  $(document).ready(function() {
    $('.litcal-calendars-select').liturgicalCalendarsSelect({
      selectClass: 'my-select'
    });
  });
})(jQuery);
