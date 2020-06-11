var app = angular.module('mainnav', ['ngSanitize', 'ui.bootstrap', 'ui.router', 'ngMap']);
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
            "name": "N1 Puppies",
            "user_id": "1",
            "latitude": "36.37425202630263",
            "longitude": "127.36579723271618",
            "date": "2020-06-13",
            "time": "14:30",
            "people": 3,
            "distance": "406",
            "joined": false,
        },
        {
            "name": "E3 Frisbee",
            "user_id": "1",
            "latitude": "36.368031596219836",
            "longitude": "127.36540920346589",
            "date": "2020-06-14",
            "time": "19:30",
            "people": 2,
            "distance": "30",
            "joined": false,
        },
        {
            "name": "N5 Come and play!",
            "user_id": "1",
            "latitude": "36.373313437423235",
            "longitude": "127.3644810196351",
            "date": "2020-06-17",
            "time": "10:30",
            "people": 2,
            "distance": "160",
            "joined": false,
        },
    ]

    $scope.formTime = new Date();
    $scope.formDate = new Date();
    $scope.hstep = 1;
    $scope.mstep = 10;

    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.formTime);
        var tempTime = document.getElementById("tempTime");
        tempTime.value = $scope.formTime;
    };

    $scope.today = function () {
        $scope.formDate = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.formDate = null;
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
        $scope.formDate = new Date(year, month, day);
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

    $scope.submit = function () {
        var name = document.getElementById('name').value;
        var formDate = document.getElementById("formDate");
        var tempTime = document.getElementById("tempTime");
        if (name != "" && createMarker != undefined) {
            var new_event = {
                "name": name,
                "user_id": "1",
                "latitude": createMarker.position.lat(),
                "longitude": createMarker.position.lng(),
                "date": formDate.value,
                "time": String(tempTime.value).substring(16, 21),
                "people": "1",
                "distance": String(latLngToDistance(createMarker.position.lat(), createMarker.position.lng())),
                "joined": true,
            }
            $scope.meetings.push(new_event);
            $log.log($scope.meetings)
            var newMarker = new google.maps.Marker({ position: createMarker.position, map: showMap });
            newMarker.addListener('click')
        }
    }

    function latLngToDistance(lat, lng) {
        var n1_lat = 36.368031596219836
        var n1_lng = 127.36540920346589
        return Math.round(Math.sqrt((n1_lat - lat) ** 2 + (n1_lng - lng) ** 2) * 111000)
    }

    var createMap, showMap, listMap, createMarker, listMarker;
    $scope.$on('mapInitialized', function (event, evtMap) {
        if (evtMap.id == "create-map") {
            createMap = evtMap;
            google.maps.event.addListener(createMap, 'click', function (event) {
                refreshMarker(event.latLng);
            })
        } else if (evtMap.id == "show-map") {
            showMap = evtMap;
            $scope.meetings.forEach(placeMarker);
        } else if (evtMap.id == "list-map") {
            listMap = evtMap;
        }
    })

    function refreshMarker(location) {
        if (createMarker != undefined) {
            createMarker.setMap(null);
        }
        createMarker = new google.maps.Marker({
            position: location,
            map: createMap,
            animation: google.maps.Animation.BOUNCE,
        });
        window.setTimeout(function () {
            createMarker.setAnimation(null);
        }, 3000);
        // var infowindow = new google.maps.InfoWindow({
        //     content: 'Here?'
        // });
        // infowindow.open(createMap, createMarker);
    }

    function placeMarker(meeting, index, array) {
        var latLng = new google.maps.LatLng(Number(meeting.latitude), Number(meeting.longitude));
        var mapMarker = new google.maps.Marker({ position: latLng, map: showMap });
        var infowindow = new google.maps.InfoWindow({
            content: 'Meeting Name: ' + meeting.name + '<br>Date: ' + meeting.date + '<br>Time: ' + meeting.time
        });
        mapMarker.addListener('click', function () {
            infowindow.open(showMap, mapMarker);
        });
    }

    $scope.detailMeetingName = "E3 Frisbee";
    $scope.detailMeetingDate = "2020-06-13";
    $scope.detailMeetingTime = "14:30";
    $scope.detailMeetingJoined = false;
    $scope.detailMeetingPeople = 1;

    var gMeeting;
    $scope.showMeeting = function (meeting) {
        gMeeting = meeting;

        $scope.detailMeetingName = meeting.name;
        $scope.detailMeetingDate = meeting.date;
        $scope.detailMeetingTime = meeting.time;
        if (listMarker != undefined) {
            listMarker.setMap(null);
        }
        var latLng = new google.maps.LatLng(Number(meeting.latitude), Number(meeting.longitude));
        listMap.setCenter(latLng);
        listMarker = new google.maps.Marker({
            position: latLng,
            map: listMap,
            animation: google.maps.Animation.DROP,
        });
        $scope.detailMeetingJoined = meeting.joined;
        $scope.detailMeetingPeople = meeting.people;
        renderJoinBtn(meeting);
    }

    $scope.toggleJoin = function () {
        gMeeting.joined = !gMeeting.joined;
        renderJoinBtn(gMeeting);
        if (gMeeting.joined) {
            gMeeting.people += 1;
        } else {
            gMeeting.people -= 1;
        }
    }

    function renderJoinBtn(meeting) {
        var joinBtn = document.getElementById("toggleJoin");
        if (meeting.joined) {
            joinBtn.innerHTML = '<label class="btn btn-success"> <input type="checkbox" ng-checked="detailMeetingJoined" autocomplete="off"> Joined</label>'
        } else {
            joinBtn.innerHTML = '<label class="btn btn-info"> <input type="checkbox" ng-checked="detailMeetingJoined" autocomplete="off"> Join  </label>'
        }
    }
});