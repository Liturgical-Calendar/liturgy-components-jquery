# liturgy-components-jquery
jQuery plugins for liturgical calendar components


# Example usages

## Using a local copy of the plugin script

If you save the plugin script to your project folder, you can include it after including jquery via `<script>` tags:

```html
<!-- myPage.html -->
<select id="mySelect"></select>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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

## Installing with yarn

You can also install the plugin with yarn:

```console
yarn install liturgical-components-jquery
```

If your project is using `node-modules` as the `nodeLinker`, you can include the minified plugin script from the `dist` folder:

```html
<!-- myPage.html -->
<select id="mySelect"></select>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="node_modules/liturgical-components-jquery/dist/liturgical-calendars-select.min.js"></script>
<script>
  $(document).ready(function() {
    $('#mySelect').liturgicalCalendarsSelect({
      apiVersion: 'dev',
      selectClass: 'my-select'
    });
  });
</script>
```

Alternatively, if your project has a build step such as with `webpack`, you can include the plugin at the top of your script:

```js
import 'liturgical-calendars-select';

(function($) {
  $(document).ready(function() {
    $('.litcal').liturgicalCalendarsSelect({
      apiVersion: 'dev',
      selectClass: 'my-select'
    });
  });
})(jQuery);
```
