angular.module('mainnav').controller('meetingCtrl', function ($scope, $state, $log) {
    $scope.onlyMine = false;
    $scope.toggleFilter = function () {
        $scope.onlyMine = !$scope.onlyMine;
        var filterBtn = document.getElementById("toggleFilter");
        if ($scope.onlyMine) {
            filterBtn.innerHTML = 'View All Events';
        } else {
            filterBtn.innerHTML = 'View My Events';
        }
    }
    $scope.initFilter = function () {
        var filterBtn = document.getElementById("toggleFilter");
        if ($scope.onlyMine) {
            filterBtn.innerHTML = 'View All Events';
        } else {
            filterBtn.innerHTML = 'View My Events';
        }
    }

    $scope.meetings = [
        {
            "name": "N1 Puppies",
            "user_id": "1",
            "latitude": "36.37425202630263",
            "longitude": "127.36579723271618",
            "date": "2020-06-15",
            "time": "14:30",
            "distance": "30",
            "joined": false,
            "description": "Only small dogs are allowed!",
            "members": [
                {
                    "owner_name": "Jungwon",
                    "dog_name": "Hyuji",
                    "info": "2/F Maltese",
                },
                {
                    "owner_name": "Joomin",
                    "dog_name": "Jockey",
                    "info": "1/F Bishon Frise",
                },
                {
                    "owner_name": "Hansoo",
                    "dog_name": "Mona",
                    "info": "1/F Pug",
                },
            ]
        },
        {
            "name": "E3 Frisbee",
            "user_id": "1",
            "latitude": "36.368031596219836",
            "longitude": "127.36540920346589",
            "date": "2020-06-17",
            "time": "19:30",
            "distance": "406",
            "joined": false,
            "description": "Active dogs are always welcomed!",
            "members": [
                {
                    "owner_name": "May",
                    "dog_name": "Toro",
                    "info": "7/M Labrador Retriever",
                },
            ]
        },
        {
            "name": "N5 Come and play!",
            "user_id": "1",
            "latitude": "36.373313437423235",
            "longitude": "127.3644810196351",
            "date": "2020-06-24",
            "time": "10:30",
            "distance": "160",
            "joined": false,
            "description": "Any dogs are welcomed!",
            "members": [
                {
                    "owner_name": "May",
                    "dog_name": "Toro",
                    "info": "7/M Labrador Retriever",
                },
                {
                    "owner_name": "Hansoo",
                    "dog_name": "Mona",
                    "info": "1/F Pug",
                },
            ]
        },
        {
            "name": "Toy flea market",
            "user_id": "1",
            "latitude": "36.366010523893664",
            "longitude": "127.3662156573225",
            "date": "2020-06-10",
            "time": "10:30",
            "distance": "910",
            "joined": false,
            "description": "Let's buy and sell toys!",
            "members": [
                {
                    "owner_name": "Jungwon",
                    "dog_name": "Hyuji",
                    "info": "2/F Maltese",
                },
                {
                    "owner_name": "Hasung",
                    "dog_name": "Maru",
                    "info": "4/M Maltese",
                },
                {
                    "owner_name": "Ryu",
                    "dog_name": "Caramel",
                    "info": "10/M Poodle",
                },
                {
                    "owner_name": "Hansoo",
                    "dog_name": "Mona",
                    "info": "1/F Pug",
                },
                {
                    "owner_name": "Juho",
                    "dog_name": "Mandoo",
                    "info": "3/M Maltese",
                },
            ]
        },
        {
            "name": "Frisbee cup!",
            "user_id": "1",
            "latitude": "36.36405800652748",
            "longitude": "127.36250348004589",
            "date": "2020-06-10",
            "time": "10:30",
            "distance": "1171",
            "joined": false,
            "description": "Who's the best dog?",
            "members": [
                {
                    "owner_name": "Ryu",
                    "dog_name": "Caramel",
                    "info": "10/M Poodle",
                },
                {
                    "owner_name": "Hansoo",
                    "dog_name": "Mona",
                    "info": "1/F Pug",
                },
                {
                    "owner_name": "Sunghoon",
                    "dog_name": "Mango",
                    "info": "6/M Pomeranian",
                },
            ]
        },
        {
            "name": "Bishon time",
            "user_id": "1",
            "latitude": "36.36820159403265",
            "longitude": "127.36982906102523",
            "date": "2020-06-10",
            "time": "10:30",
            "distance": "800",
            "joined": false,
            "description": "Let's gather Bishon's!",
            "members": [
                {
                    "owner_name": "Joomin",
                    "dog_name": "Jockey",
                    "info": "1/F Bishon Frise",
                },
            ]
        },
        {
            "name": "Snack giveaway",
            "user_id": "1",
            "latitude": "36.36205013895425",
            "longitude": "127.35890225367937",
            "date": "2020-06-10",
            "time": "10:30",
            "distance": "1537",
            "joined": false,
            "description": "Share your snacks!",
            "members": [
                {
                    "owner_name": "Jungwon",
                    "dog_name": "Hyuji",
                    "info": "2/F Maltese",
                },
                {
                    "owner_name": "Juho",
                    "dog_name": "Mandoo",
                    "info": "3/M Maltese",
                },
                {
                    "owner_name": "Ryu",
                    "dog_name": "Caramel",
                    "info": "10/M Poodle",
                },
                {
                    "owner_name": "Hansoo",
                    "dog_name": "Mona",
                    "info": "1/F Pug",
                },
            ]
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
        var description = document.getElementById("description");
        if (name != "" && createMarker != undefined) {
            var new_event = {
                "name": name,
                "user_id": "1",
                "latitude": createMarker.position.lat(),
                "longitude": createMarker.position.lng(),
                "date": formDate.value,
                "time": String(tempTime.value).substring(16, 21),
                "distance": String(latLngToDistance(createMarker.position.lat(), createMarker.position.lng())),
                "joined": true,
                "description": description.value,
                "members": [
                    {
                        "owner_name": "Yuzu",
                        "dog_name": "Dubu",
                        "info": "1/M Maltese",
                    },
                ]
            }
            $scope.meetings.push(new_event);
            $log.log($scope.meetings)
            var newMarker = new google.maps.Marker({ position: createMarker.position, map: showMap });
            newMarker.addListener('click')
        }
    }

    function latLngToDistance(lat, lng) {
        var n1_lat = 36.37411039709942
        var n1_lng = 127.36570460924332
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
        $log.log(location.lat(), location.lng())
        $log.log("distance: ", latLngToDistance(location.lat(), location.lng()))
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
    $scope.detailMeetingDescription = "Only small dogs are allowed!";
    $scope.detailMeetingMembers = [];

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
        $scope.detailMeetingDescription = meeting.description;
        $scope.detailMeetingMembers = meeting.members;
        renderJoinBtn(meeting);
    }

    $scope.toggleJoin = function () {
        gMeeting.joined = !gMeeting.joined;
        renderJoinBtn(gMeeting);
        if (gMeeting.joined) {
            gMeeting.members.push({
                "owner_name": "Yuzu",
                "dog_name": "Dubu",
                "info": "1/M Maltese",
            });
        } else {
            gMeeting.members.splice(-1, 1);
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

    $scope.seeprofile = function(d) {
        $('#detailModal').modal('hide');
        for (var i = 0; i < $scope.profiles.length; i++) {
            if ($scope.profiles[i].dog_name == d) {
                $scope.pinfo = $scope.profiles[i];
                break;
            }
        }
        $state.go('friendprofile-meeting',{id:d})
    }

    $scope.profiles = [
        {
            "pic": "img/maltese.png",
            "color": "#9C9E77",
            "dog_name": "Hyuji",
            "owner_name": "Jungwon",
            "dog_basicinfo": "2/F",
            "dog_breed": "Maltese",
            "dog_message": "I love walking!",
            "dog_agengender": "2 and half years old, Female",
            "dog_intro": ["likes walking","looking for walk friends"],
            "owner_agengender": "21 years old, Female",
            "interests": ["hand-made dog snacks", "good walking spots"],
            "walkingtime":"Mon~Fri 5pm",
            "photos": ["img/maltese/moment1.jpg","img/maltese/moment2.jpg","img/maltese/moment3.png"],
            "breed": ["same", "friendly", "size"]
        },
        {
            "pic": "img/retriever.png",
            "color": "#CAC7C7",
            "dog_name": "Toro",
            "owner_name": "May",
            "dog_basicinfo": "7/M",
            "dog_breed": "Labrador Retriever",
            "dog_message": "Mild, large doggy",
            "dog_agengender": "7 years old, Male",
            "dog_intro": ["likes watching people","very gentle to small dogs"],
            "owner_agengender": "9 years old, Female",
            "interests": ["dog walking", "frisbee"],
            "walkingtime" : "Mon~Fri 4pm",
            "photos": ["img/retriever/moment1.jpg","img/retriever/moment2.jpg"],
            "breed": []
        },
        {
            "pic": "img/pomeranian.png",
            "color": "#C4A56E",
            "dog_name": "Mango",
            "owner_name": "Sunghoon",
            "dog_basicinfo": "6/M",
            "dog_breed": "Pomeranian",
            "dog_message": "finding friends who also loves sunbathing",
            "dog_agengender": "6 years old, Male",
            "dog_intro": ["likes sunbathe","bit shy, but has a lot of curiosity"],
            "owner_agengender": "25 years old, Male",
            "interests": ["frisbee","dog toys"],
            "walkingtime" : "Sat~Sun 3pm",
            "photos": ["img/pomeranian/moment1.jpg","img/pomeranian/moment2.jpg"],
            "breed": ["friendly"]
        },
        {
            "pic": "img/poodle.png",
            "color": "#CFB48A",
            "dog_name": "Caramel",
            "owner_name": "Ryu",
            "dog_basicinfo": "10/M",
            "dog_breed": "Poodle",
            "dog_message": "cute and polite poodle",
            "dog_agengender": "10 years old, Male",
            "dog_intro": ["need time to get friendly", "very polite"],
            "owner_agengender": "20 years old, Male",
            "interests": ["letting dogs have fun","training tips"],
            "walkingtime": "Mon~Fri 7pm",
            "photos": ["img/poodle/moment1.jpg","img/poodle/moment2.jpg"],
            "breed": []
        },
        {
            "pic": "img/bishon-frise.png",
            "color": "#F08E92",
            "dog_name": "Jockey",
            "owner_name": "Joomin",
            "dog_basicinfo": "1/F",
            "dog_breed": "Bishon Frise",
            "dog_message": "My dog is super friendly!",
            "dog_agengender": "1 year and three months old, Female",
            "dog_intro": ["likes running around","looking for friend to enjoy long time activity"],
            "owner_agengender": "24 years old, Female",
            "interests": ["freedom from dog"],
            "walkingtime": "Mon~Fri 7pm",
            "photos": ["img/bishon-frise/moment1.jpg","img/bishon-frise/moment2.jpg"],
            "breed": ["friendly"]
        },
        {
            "pic": "img/maltese3.png",
            "color": "#B5B6B8",
            "dog_name": "Maru",
            "owner_name": "Hasung",
            "dog_basicinfo": "4/M",
            "dog_breed": "Maltese",
            "dog_message": "Let's be friend!",
            "dog_agengender": "4 years old, Male",
            "dog_intro": ["get along well with small dogs","afraid of big dogs"],
            "owner_agengender": "27 years old, Male",
            "interests": ["making dog loving friends"],
            "walkingtime": "Mon~Fri 6pm",
            "photos": ["img/maltese3/moment1.jpg","img/maltese3/moment2.jpg"],
            "breed": ["same", "friendly", "size"]
        },
        {
            "pic": "img/pug.png",
            "color": "#A69F94",
            "dog_name": "Mona",
            "owner_name": "Hansoo",
            "dog_basicinfo": "1/F",
            "dog_breed": "Pug",
            "dog_message": "Mona is kind to everybody",
            "dog_agengender": "1 years old, Female",
            "dog_intro": ["likes people except Hansoo","also kind to other dogs"],
            "owner_agengender": "33 years old, Male",
            "interests": ["fooling Mona"],
            "walkingtime" : "Mon~Fri 3pm, 8pm",
            "photos": ["img/pug/moment1.jpg"],
            "breed": ["friendly", "size"]
        },
        {
            "pic": "img/stitch.png",
            "color": "#76BDDB",
            "dog_name": "Stitch",
            "owner_name": "Lilo",
            "dog_basicinfo": "5/M",
            "dog_breed": "Pug..?",
            "dog_message": "want to make friend!",
            "dog_agengender": "5 years old, Male",
            "dog_intro": ["has many charms","little bit peculiar.."],
            "owner_agengender": "16 years old, Female",
            "interests": ["making friend to stitch"],
            "walkingtime": "Mon~Fri 7pm",
            "breed": ["size"]
        },
        {
            "pic": "img/maltese2.png",
            "color": "#6F8A5D",
            "dog_name": "Mandoo",
            "owner_name": "Juho",
            "dog_basicinfo": "3/M",
            "dog_breed": "Maltese",
            "dog_message": "Maltese forever!",
            "dog_agengender": "3 years old, Male",
            "dog_intro": ["likes sunbathe","a snack lover"],
            "owner_agengender": "25 years old, Male",
            "interests": ["new snacks", "frisbee"],
            "walkingtime": "Sat~Sun 3pm",
            "photos": ["img/maltese2/moment1.jpg","img/maltese2/moment2.jpg","img/maltese2/moment3.jpg","img/maltese2/moment4.jpg"],
            "breed": ["same", "friendly", "size"]
        },
        {
            "pic": "img/maltese4.png",
            "color": "#987F7E",
            "dog_name": "Somsom",
            "owner_name": "Jimin",
            "dog_basicinfo": "7/F",
            "dog_breed": "Maltese",
            "dog_message": "My dog is super friendly!",
            "dog_agengender": "7 year and three months old, Female",
            "dog_intro": ["likes running around","looking for friend to enjoy long time activity"],
            "owner_agengender": "24 years old, Female",
            "interests": ["running with Somsom","dog activities"],
            "walkingtime": "Mon~Fri 7pm",
            "photos": ["img/maltese4/moment1.jpg","img/maltese4/moment2.jpg"],
            "breed": ["same", "friendly"]
        },
        {
            "pic": "img/dubu.jpg",
            "color": "#E8CFCE",
            "dog_name": "Dubu",
            "owner_name": "Yuzu",
            "dog_basicinfo": "1/M",
            "dog_breed": "Maltese",
            "dog_message": "I'd like to meet new friends :)",
            "dog_agengender": "5 months old, Male",
            "dog_intro": ["likes meeting other people","always happy and joyful"],
            "owner_agengender": "20 years old, Female",
            "interests": ["long walks","cute dog clothes"],
            "walkingtime": "Mon~Fri 5pm",
            "photos": ["img/dubu/moment1.jpg","img/dubu/moment2.jpg","img/dubu/moment3.jpg"],
        }
    ]
});