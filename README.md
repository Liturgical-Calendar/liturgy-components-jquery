# liturgy-components-jquery
jQuery plugins for liturgical calendar components


Example usage:
```html
<!-- myPage.html -->
<select id="mySelect"></select>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="liturgical-calendars-select.js"></script>
<script>
  $(document).ready(function() {
    $('#mySelect').liturgicalCalendarsSelect({
      apiVersion: 'dev',
      selectClass: 'my-select'
    });
  });
</script>
```
