(function($, document) {
    // globals
    var touchDev = Modernizr.touch;

    var waitForFinalEvent = (function () {

        var timers = {};

        return function(callback, ms, uniqueId) {
            if(!uniqueId) {
                // don't call this twice without a uniqueID
                uniqueId = Math.random()*1000;
            }
            if(timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    $(document).ready(function() {

        // Plugin

        // App
        app.camelCase();

    });

    $(window).load(function() {


    });

    $(window).scroll(function() {


    });

    $(window).resize(function() {

        waitForFinalEvent(function() {



        }, 300, 'init');

    });

    // App Functions

    var app = {

        camelCase : function() {

        }

    }

    // Helper Functions

    var helper = {

    }

    // Plugin Functions

    var init = {

        foundation : function() {

            // $(document).foundation();

        }

    }

}(jQuery, document));