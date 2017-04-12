import './vendors';
require('./assets/styles/main.css');

angular.module('to-do-app', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                constroller: 'HomeController',
                template: require('./controllers/home-template.html')
            })
            .state('profile', {
                url: '/profile',
                controller: 'ProfileController',
                template: require('./controllers/profile-template.html')
            })
        $urlRouterProvider.otherwise('/home');
    });

require('./controllers');
require('./directives');
require('./factories');
require('./services');
