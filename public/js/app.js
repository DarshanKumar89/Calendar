
"use strict";

angular.module('pdata', ['ngCookies',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'pdata.system',
    'pdata.home',
    'pdata.navigation',
    'pdata.main' 
 ]);

angular.module('pdata.system', ['pdata.system.notification']);

angular.module('pdata').factory('lodash', ['$window',
    function($window) {
        return $window._;
    }
]).factory('global', ['$window', 
    function($window) {
        return { 
            authenticated: !!$window.user,
            renderErrors: $window.renderErrors
        };
    }
]).run(['$rootScope', 'global', 'notificationService', 'lodash', function($rootScope, global, notificationService, lodash) {
    var errors = global.renderErrors;
    if (angular.isArray(errors) || angular.isObject(errors)) {
        lodash.forEach(errors, function(err) {
            err = angular.isObject(err) ? err : {
                message: err
            };
            err.timeout = false;
            notificationService.error(err);
        });
    } else {
        if (errors) {
            errors.timeout = false;
            notificationService.error(errors);
        }
    }

}]);
