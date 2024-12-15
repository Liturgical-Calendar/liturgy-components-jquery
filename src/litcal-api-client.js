(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS
      module.exports = factory();
    } else {
      // Browser globals
      root.LitCalApiClient = factory();
    }
}(this, function () {
  class LitCalApiClient {
    static apiUrl = 'https://litcal.johnromanodorazio.com/api/dev';
    static paths = Object.freeze({
        calendars: '/calendars',
        calendar:  '/calendar',
        events:    '/events',
        easter:    '/easter',
        decrees:   '/decrees',
        data:      '/data',
        missals:   '/missals',
        tests:     '/tests',
        schemas:   '/schemas'
    });
    static metadata = null;
    //static litcal_missals = null;
    //static litcal_events = null;

    static getCalendars() {
      return fetch( `${this.apiUrl}${this.paths.calendars}` ).then( response => {
        if ( response.ok ) {
          return response.json();
        }
      }).then( data => {
        const { litcal_metadata } = data;
        this.metadata = litcal_metadata;
        return this.metadata;
      }).catch( error => {
        console.error( error );
        return false;
      });
    }

    static getCalendar( year = null ) {
      return fetch( `${this.apiUrl}${this.paths.calendar}${year ? `/${year}` : ''}` );
    }

    static getNationalCalendar( calendar_id, year = null ) {
      return fetch( `${this.apiUrl}${this.paths.calendar}/nation/${calendar_id}${year ? `/${year}` : ''}` );
    }

    static getDiocesanCalendar( calendar_id, year = null ) {
      return fetch( `${this.apiUrl}${this.paths.calendar}/diocese/${calendar_id}${year ? `/${year}` : ''}` );
    }

    static init() {
      return this.getCalendars();
    }
  }

  return LitCalApiClient;
}));

