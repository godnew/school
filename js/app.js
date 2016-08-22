/**
 * Created by nhy on 2016/8/22.
 */
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'template/home.html',
                controller: 'HomeController'
            }).
            when('/about', {
                templateUrl: 'template/java.html',
                controller: 'AboutController'
            }).
            when('/contact', {
                templateUrl: 'template/php.html',
                controller: 'ContactController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
