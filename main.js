var app = angular.module('DP4',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state({
        name: 'home',
        url: '/',
        views: {
            'mainbody': {
                templateUrl: 'home.html'
            }
        }
    })
    .state({
        name: 'friends',
        url: '/friends',
        template: '<h3>friend list</h3>'
    })
    .state({
        name: 'meetings',
        url: '/meetings',
        template: '<h3>meetings</h3>'
    })
    .state({
        name: 'messages',
        url: '/messages',
        templateUrl: 'message.html'
    })
    .state({
        name: 'mypage',
        url: '/mypage',
        template: '<h3>show profile</h3>'
    })
    .state({
        name: 'notification',
        url: '/',
        template: '<h3>notifications in dropdown form</h3>'
    })
    .state({
        name: 'setting',
        url: '/setting',
        template: '<h3>setting</h3>'
    })
    .state({
        name: 'help',
        url: '/',
        template: '<h3>help popup on homepage</h3>'
    })

});