
"use strict";

angular.module('pdata.home').controller('headerController', ['$scope', function($scope) {

    $scope.menu = [{
        title: "Tags",
        state: "tags"
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = function() {
        return true;
    };

}]);
