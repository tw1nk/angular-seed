/**
 * SimpleService.js
 *
 * Provides a simple service.
 */
"use strict";

angular.module("myApp.services.simpleservice", [])
    .factory("SimpleService", function($log, $rootScope) {

        var times = 0;

        var history = [];

        function echo(arg) {
            times ++;
            $log.log("simpleservice called", times);
            $rootScope.$broadcast("echoCalled", times);
            history.unshift({text:arg});
            return ">>> " + arg + " <<<";
        }

        return {
            echo: echo,
            called: times,
            history: history
        }

    });

