var app = angular.module('mainnav',['ui.router']);
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
        name: 'morefriends',
        url: '/',
        views: {
            'mainbody': {
                templateUrl: 'home.html'
            },
            'addfriends@morefriends': {
                templateUrl: 'profiles/morefriends.html'
            }
        }
    })
    .state({
        name: 'filterfriends',
        url: '/f',
        views: {
            'mainbody': {
                templateUrl: 'home.html'
            },
            'addfriends@filterfriends': {
                templateUrl: 'profiles/filterprofiles.html'
            }
        }
    })
    .state({
        name: 'friends',
        url: '/friends',
        views: {
            'mainbody': {
                template: '<h3>friends list</h3>'
            }
        }
    })
    .state({
        name: 'meetings',
        url: '/meetings',
        views: {
            'mainbody': {
                templateUrl: 'meeting.html'
            }
        }
    })
    .state({
        name: 'messages',
        url: '/messages',
        views: {
            'mainbody': {
                templateUrl: 'messages.html'
            }
        }
    })
    .state({
        name: 'mypage',
        url: '/mypage',
        views: {
            'mainbody': {
                templateUrl: 'mypage.html'
            }
        }
    })
    .state({
        name: 'othersprofile',
        url: '/mandoojuho',
        views: {
            'mainbody': {
                templateUrl: 'friendpage.html'
            }
        }
    })
    .state({
        name: 'notification',
        url: '/',
                views: {
            'mainbody': {
                template: '<h3>notifications placed in dropdown form</h3>'
            }
        }
    })
    .state({
        name: 'setting',
        url: '/setting',
        views: {
            'mainbody': {
                template: '<h3>settings</h3>'
            }
        }
    })
    .state({
        name: 'help',
        url: '/',
        views: {
            'mainbody': {
                template: '<h3>help popup on homepage</h3>'
            }
        }
    })

});