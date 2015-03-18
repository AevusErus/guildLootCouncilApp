'use strict';

angular.module('informer.services', []);
angular.module('informer.filters', []);
angular.module('informer.directives', []);
angular.module('informer.controllers', []);
var informerApp = angular.module('informerApp', [
    'informer.services',
    'informer.directives',
    'informer.filters',
    'informer.controllers',
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate',
    'ui.ace',
    'alertModal.html',
    'ui.date'
]);

informerApp.config(['$routeProvider',
    function($routeProvider) {
        var route, routeConfig;


        routeConfig = {
            lootView: {
                templateUrl: 'views/lootView.html'
                controller: 'LootViewCtrl'
            }
        };

        $routeProvider.when('/', {
            templateUrl: 'views/index.html',
            controller: 'homeCtrl',
        }).otherwise({
            redirectTo: '/'
        });
        for (route in routeConfig) {
            $routeProvider.when("/" + route, routeConfig[route]);
        }

    }
]);