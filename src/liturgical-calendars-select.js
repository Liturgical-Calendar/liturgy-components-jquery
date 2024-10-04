/**
 * Calendars Select Plugin
 * @author [John Romano D'Orazio](https://github.com/JohnRDOrazio)
 * @license Apache-2.0
 * @version 1.0.0
 * @see https://github.com/Liturgical-Calendar/liturgy-components-jquery
 *
 * Description: Creates a select menu populated with available liturgical calendars from the Liturgical Calendar API
 * Usage: $('.calendars-select').liturgicalCalendarsSelect();
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD
      define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS
      module.exports = factory(require('jquery'));
    } else {
      // Browser globals
      factory(jQuery);
    }
}
( function ( $ ) {
    let apiResults = null;

    class CalendarSelect {
        static #nationalCalendars             = [];
        static #diocesanCalendars             = [];
        static #nationalCalendarsWithDioceses = [];
        #nationOptions                        = [];
        #dioceseOptions                       = {};
        #dioceseOptionsGrouped                = [];
        #countryNames                         = null;
        optionsBuilt                          = false;

        constructor(locale = 'en') {
            this.#countryNames = new Intl.DisplayNames( [ locale ], { type: 'region' } );
        }

        static hasNationalCalendarWithDioceses( nation ) {
            return CalendarSelect.#nationalCalendarsWithDioceses.filter(item => item?.calendar_id === nation).length > 0;
        }
        static addNationalCalendarWithDioceses( nation ) {
            const nationalCalendar = CalendarSelect.#nationalCalendars.find(item => item.calendar_id === nation);
            CalendarSelect.#nationalCalendarsWithDioceses.push( nationalCalendar );
        }

        static setNationalCalendars( national_calendars ) {
            CalendarSelect.#nationalCalendars = national_calendars;
        }

        static setDiocesanCalendars( diocesan_calendars ) {
            CalendarSelect.#diocesanCalendars = diocesan_calendars;
        }

        addNationOption( nationalCalendar, selected = false ) {
            let option = `<option data-calendartype="national" value="${nationalCalendar.calendar_id}"${selected ? ' selected' : ''}>${this.#countryNames.of( nationalCalendar.calendar_id )}</option>`;
            this.#nationOptions.push( option );
        }
        addDioceseOption( item ) {
            let option = `<option data-calendartype="diocesan" value="${item.calendar_id}">${item.diocese}</option>`;
            this.#dioceseOptions[ item.nation ].push( option );
        }
        buildAllOptions() {
            this.optionsBuilt = true;
            CalendarSelect.#diocesanCalendars.forEach( diocesanCalendarObj => {
                if ( false === CalendarSelect.hasNationalCalendarWithDioceses( diocesanCalendarObj.nation ) ) {
                    // we add all nations with dioceses to the nations list
                    CalendarSelect.addNationalCalendarWithDioceses( diocesanCalendarObj.nation );
                }
                if ( false === this.#dioceseOptions.hasOwnProperty( diocesanCalendarObj.nation ) ) {
                    this.#dioceseOptions[ diocesanCalendarObj.nation ] = [];
                }
                this.addDioceseOption( diocesanCalendarObj );
            } );

            CalendarSelect.#nationalCalendars.sort( ( a, b ) => this.#countryNames.of( a.calendar_id ).localeCompare( this.#countryNames.of( b.calendar_id ) ) );
            CalendarSelect.#nationalCalendars.forEach( nationalCalendar => {
                if ( false === CalendarSelect.hasNationalCalendarWithDioceses( nationalCalendar.calendar_id ) ) {
                    // This is the first time we call CalendarSelect.addNationOption().
                    // This will ensure that the VATICAN (a nation without any diocese) will be added as the first option.
                    // In theory any other nation for whom no dioceses are defined will be added here too,
                    // so we will ensure that the VATICAN is always the default selected option
                    if ( 'VA' === nationalCalendar.calendar_id ) {
                        this.addNationOption( nationalCalendar, true );
                    } else {
                        this.addNationOption( nationalCalendar );
                    }
                }
            } );

            // now we can add the options for the nations in the #calendarNationsWithDiocese list
            // that is to say, nations that have dioceses
            CalendarSelect.#nationalCalendarsWithDioceses.sort( ( a, b ) => this.#countryNames.of( a.calendar_id ).localeCompare( this.#countryNames.of( b.calendar_id ) ) );
            CalendarSelect.#nationalCalendarsWithDioceses.forEach( nationalCalendar => {
                this.addNationOption( nationalCalendar );
                let optGroup = `<optgroup label="${this.#countryNames.of( nationalCalendar.calendar_id )}">${this.#dioceseOptions[ nationalCalendar.calendar_id ].join( '' )}</optgroup>`;
                this.#dioceseOptionsGrouped.push( optGroup );
            } );
        }

        get nationsInnerHtml() {
            return this.#nationOptions.join( '' );
        }

        get diocesesInnerHtml() {
            return this.#dioceseOptionsGrouped.join( '' );
        }
    }

    $.fn.liturgicalCalendarsSelect = function ( options ) {
        const defaults = {
            apiVersion: 'dev',
            selectClass: '',
            filter: 'none', //dioceses, none
            locale: 'en'
        };

        const calendarSelect = {};

        return this.each( function () {
            console.log( this.id );
            const $element = $( this );
            const settings = $.extend({}, defaults, options, $element.data());
            console.log(`Settings: ${JSON.stringify(settings)}`);
            let $select = $( '<select/>' );
            if (this.classList.length) {
                $select.addClass( this.className );
            }
            if (false === calendarSelect.hasOwnProperty(settings.locale)) {
                calendarSelect[settings.locale] = new CalendarSelect(settings.locale);
            }

            // Add class to select element if specified
            if ( settings.selectClass ) {
                $select.addClass( settings.selectClass );
            }

            if ( null === apiResults ) {
                $.ajax( {
                    type: 'GET',
                    url: `https://litcal.johnromanodorazio.com/api/${settings.apiVersion}/calendars`,
                    async: false,
                    success: function ( data ) {
                        apiResults = data;
                        const { litcal_metadata } = apiResults;
                        const { national_calendars, diocesan_calendars } = litcal_metadata;
                        CalendarSelect.setNationalCalendars( national_calendars );
                        CalendarSelect.setDiocesanCalendars( diocesan_calendars );
                        if( false === calendarSelect[settings.locale].optionsBuilt ) {
                            calendarSelect[settings.locale].buildAllOptions();
                        }
                        populateSelect();
                    }
                } );
            } else {
                if( false === calendarSelect[settings.locale].optionsBuilt ) {
                    calendarSelect[settings.locale].buildAllOptions();
                }
                populateSelect();
            }

            function populateSelect() {
                console.log( `current settings: ${JSON.stringify( settings )}` );
                if ( settings.filter === 'nations' ) {
                    $select.html( calendarSelect[settings.locale].nationsInnerHtml );
                } else if ( settings.filter === 'dioceses' ) {
                    $select.html( calendarSelect[settings.locale].diocesesInnerHtml );
                } else {
                    $select.html( calendarSelect[settings.locale].nationsInnerHtml + calendarSelect[settings.locale].diocesesInnerHtml );
                }

                $element.replaceWith( $select );
            }
        } );
    }
    return $;
}));
