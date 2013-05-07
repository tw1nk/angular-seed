
"use strict";

angular.module("myApp.directives")
    .directive("simpleDirective", function(SimpleService) {
         var definition = {
            restrict: 'E', // attribute
            template: "<div></div>",
            link: function(scope, element, attrs) {
                 element.text("Echo history length: " + SimpleService.history.length);
            }
         };

        return definition;
    })
