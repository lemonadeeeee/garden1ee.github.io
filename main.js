var app = angular.module('mainnav', ['ngSanitize', 'ui.bootstrap', 'ui.router', 'ngMap','slickCarousel']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state({
            name: 'home',
            url: '/',
            views: {
                'mainbody': {
                    templateUrl: 'home.html',
                    controller: 'homeCtrl'
                }
            }
        })
        .state({
            name: 'morefriends',
            url: '/',
            views: {
                'mainbody': {
                    templateUrl: 'home.html',
                    controller: 'homeCtrl'
                },
                'addfriends@morefriends': {
                    templateUrl: 'profiles/morefriends.html'
                }
            }
        })
        .state({
            name: 'filterfriends',
            url: '/',
            views: {
                'mainbody': {
                    templateUrl: 'home.html',
                    controller: 'homeCtrl'
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
            name: 'meeting-list',
            url: '/meeting-list',
            views: {
                'mainbody': {
                    templateUrl: 'meeting-list.html'
                }
            }
        })
        .state({
            name: 'meeting-map',
            url: '/meeting-map',
            views: {
                'mainbody': {
                    templateUrl: 'meeting-map.html'
                }
            }
        })
        .state({
            name: 'meeting-create',
            url: '/meeting-create',
            views: {
                'mainbody': {
                    templateUrl: 'meeting-create.html'
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

