var app = angular.module('mainnav', ['ngSanitize', 'ui.bootstrap', 'ui.router', 'ngMap','slickCarousel']);
app.config(function ($stateProvider, $urlRouterProvider) {
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
            views: {
                'mainbody': {
                    templateUrl: 'friends.html'
                }
            }
        })
        .state({
            name: 'friendprofile',
            url: '/{id}',
            views: {
                'mainbody' : {
                    templateUrl: 'friendprofile.html'
                }
            }
        })
        .state({
            name: 'friendprofile-meeting',
            url: '/{id}',
            views: {
                'meetingbody' : {
                    templateUrl: 'friendprofile.html'
                }
            }
        })
        .state({
            name: 'meeting-list',
            url: '/meeting-list',
            views: {
                'meetingbody': {
                    templateUrl: 'meeting-list.html'
                }
            }
        })
        .state({
            name: 'meeting-map',
            url: '/meeting-map',
            views: {
                'meetingbody': {
                    templateUrl: 'meeting-map.html'
                }
            }
        })
        .state({
            name: 'meeting-create',
            url: '/meeting-create',
            views: {
                'meetingbody': {
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
                    templateUrl: 'myprofile.html'
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
app.run(['$transitions', function ($transitions) {
    $transitions.onSuccess({}, function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
}]);
app.controller('notifyCtrl', function($scope,$rootScope) {
    $scope.noticelist = [
        {
            title: "Welcome to Puddies!",
            content: "Make new friends, and join some meetings!"
        }
    ]
    $scope.newnotice = {
        title: "Congratulations!",
        content: "You've finished all tasks successfully!"
    }
    $scope.removenot = function (n) {
        $scope.noticelist.splice(n,1);
    }
    $scope.checked = 0;
    $scope.read = 0;
    $rootScope.$on('taskfinished', function(){
        $scope.noticelist.unshift($scope.newnotice);
    });
    //$rootScope.$emit('taskfinished'); when task finished

})