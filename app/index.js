require('./vendors');
require('./assets/styles/main.css');

angular.module('to-do-app', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        template: require('./controllers/home-template.html')
      })
      .state('project', {
        url: '/project',
        controller: 'ProjectController',
        params: {
          projectobj: null
        },
        template: require('./controllers/project-template.html')
      })
    $urlRouterProvider.otherwise('/home');
  });

require('./controllers');
require('./directives');
require('./factories');
require('./services');
