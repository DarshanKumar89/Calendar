
'use strict';

//Setting up route
angular.module('pdata.main').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.state('initial', {
            url: '/initial',
            templateUrl: '/modules/main/views/main.html',
            controller: 'mainController'
        });
    
    }  
]);
