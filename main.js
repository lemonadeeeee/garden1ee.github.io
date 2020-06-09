var app = angular.module('mainnav',['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router', 'ngMap']);
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
        url: '/',
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

app.controller('meetingCtrl', function ($scope, $log) {
    $scope.meetings = [
        {
            "name": "E3 Frisbee",
            "user_id": "1",
            "latitude": "36.37425202630263",
            "longitude": "127.36579723271618",
            "date": "2020-06-13",
            "time": "2:30 pm",
            "people": "3",
            "distance": "406m",
        },
        {
            "name": "N1 Puppies",
            "user_id": "1",
            "latitude": "36.368031596219836",
            "longitude": "127.36540920346589",
            "date": "2020-06-14",
            "time": "7:30 pm",
            "people": "2",
            "distance": "30m",
        },
        {
            "name": "N5 Come and play!",
            "user_id": "1",
            "latitude": "36.373313437423235",
            "longitude": "127.3644810196351",
            "date": "2020-06-17",
            "time": "10:30 am",
            "people": "2",
            "distance": "160m",
        },
    ]

    $scope.time = new Date();
    $scope.hstep = 1;
    $scope.mstep = 10;

    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        minDate: new Date(),
        showWeeks: false
    };

    $scope.dateOptions = {
        // dateDisabled: disabled,
        formatYear: 'yy',
        minDate: new Date(2020, 6, 6),
        startingDay: 1
    };

    function disabled(data) {
        var date = data.date, today = new Date();
        return (date.getDate() < today.getDate() && date.getMonth() < today.getMonth());
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };
    $scope.toggleMin();

    $scope.open = function () {
        $scope.popup.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    $scope.dynMarkers = [];

    var map, marker;
    $scope.$on('mapInitialized', function (event, evtMap) {
        map = evtMap
        if (map.id == "create-map") {
            google.maps.event.addListener(map, 'click', function (event) {
                refreshMarker(event.latLng);
            })
        } else if (map.id == "show-map") {
            $scope.meetings.forEach(placeMarker);
        }
    })

    function refreshMarker(location) {
        if (marker != undefined) {
            marker.setMap(null);
        }
        console.log('Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng())
        marker = new google.maps.Marker({
            position: location,
            map: map,
        });
        var infowindow = new google.maps.InfoWindow({
            content: 'Here?'
        });
        infowindow.open(map, marker);
    }

    function placeMarker(meeting, index, array) {
        var latLng = new google.maps.LatLng(Number(meeting["latitude"]), Number(meeting["longitude"]));
        new google.maps.Marker({ position: latLng, map: map });
    }
});