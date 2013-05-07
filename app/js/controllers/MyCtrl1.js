"use strict";

function MyCtrl1($scope, $log, SimpleService) {

    $scope.echoAnswer="havn't echoed yet!";

    function callEcho() {
        $log.log("called echo in controller");
        $scope.echoAnswer = SimpleService.echo($scope.echoInput);
    }

    $scope.callEcho = callEcho;

    $scope.echoHistory = SimpleService.history;

    $scope.echoCalled = SimpleService.called;

    $scope.$on("echoCalled", function(event, times) {
        $scope.echoCalled = times;
    });

}