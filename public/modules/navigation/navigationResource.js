"use strict";

angular.module('pdata.navigation').factory('navigationResource', ['$resource', 'atlasConfig', function($resource, atlasConfig) {
    return $resource(atlasConfig.API_ENDPOINTS.TRAITS_LIST, {}, {
        get: {
             
        }
    });
}]);
