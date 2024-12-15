import $ from 'jquery';
import LitCalApiClient from './litcal-api-client';
// Import the jQuery plugin to ensure it's built into the bundle
import './liturgical-calendars-select';

// Ensure jQuery is globally available if it’s not already
if (!window.jQuery) {
    window.jQuery = $;
    window.$ = $;
}

export { $ as default, LitCalApiClient };
