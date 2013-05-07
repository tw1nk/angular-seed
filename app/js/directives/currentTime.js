"use strict";

angular.module("myApp.directives")
    .directive("currentTime", function($timeout, $log) {
        return function(scope, element, attrs) {
            var format,  // date format
                timeoutId,
                times = 0; // timeoutId, so that we can cancel the time updates

            // used to update the UI
            function updateTime() {
                $log.log("update time called: " +  times++);
                element.text(new Date());
            }

            // watch the expression, and update the UI on change.
            scope.$watch(attrs.myCurrentTime, function(value) {
                format = value;
                updateTime();
            });

            // schedule update in one second
            function updateLater() {
                // save the timeoutId for canceling
                timeoutId = $timeout(function() {
                    updateTime(); // update DOM
                    updateLater(); // schedule another update
                }, 1000);
            }

            /*
            // listen on DOM destroy (removal) event, and cancel the next UI update
            // to prevent updating time after the DOM element was removed.
            element.bind('$destroy', function() {
                $timeout.cancel(timeoutId);
            });
            */

            updateLater(); // kick off the UI update process.
        }
    });
