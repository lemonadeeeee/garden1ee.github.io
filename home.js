app.controller('homeCtrl', function($scope, $state) {
    $scope.slickConfig = {
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,
        method: {}
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
        }
    ]

    function remember() {
        r=window.localStorage.getItem('v');
        if (r != null) return r;
        else return 'all';
    }
    $scope.dofilter = function() {
        window.localStorage.setItem('v', $scope.opt.breed);
        $scope.filprofiles=[];
        if ($scope.opt.breed==="all") $scope.filprofiles=$scope.profiles;
        else {
            $scope.profiles.forEach(function(profile) {
                for (var i=0;i<profile.breed.length;i++) {
                    if (profile.breed[i]===$scope.opt.breed) {
                        $scope.filprofiles.push(profile);
                    }
                }
            });
        }
    }
    $scope.opt = {
        breed: remember()
    }
    $scope.ind = 0;
    $scope.createInd = function(n) {
        $scope.ind = n;
    }
    $scope.pinfo = {}
    $scope.putpinfo = function(p) {
        $scope.pinfo = p;
    }
    $scope.seeprofile = function(d) {
        $state.go('friendprofile',{id:d})
    }
    $scope.reqlist = [
        {
            "pic": "img/jindo.jpg",
            "color": "#987F7E",
            "dog_name": "Baekho",
            "owner_name": "Yungmi",
            "dog_basicinfo": "3/M",
            "dog_breed": "Jindo dog",
            "dog_message": "Let's meet and play!",
            "dog_agengender": "3 year and eight months old, Male",
            "dog_intro": ["good at fetching frisbee","always energetic"],
            "owner_agengender": "28 years old, Female",
            "interests": ["activity with baekho","dog training"],
            "walkingtime": "Mon~Fri 6pm",
            "photos": ["img/jindo/moment1.jpg","img/jindo/moment2.jpg","img/jindo/moment3.jpg"],
            "breed": ["friendly"]
        }
    ]
    $scope.sentreqlist = [];
    $scope.friendlist = [];
    $scope.starlist = [];

    $scope.rind= -1;
    $scope.fstate = "";
    $scope.buttonclass = "btn btn-info p_friendreq";
    $scope.buttonfn = function(){};
    $scope.reqState = function(prof) {
        var scheck = $scope.sentreqlist.indexOf(prof);
        var rcheck = $scope.reqlist.indexOf(prof);
        var fcheck = $scope.friendlist.indexOf(prof);
        var stcheck = $scope.starlist.indexOf(prof);
        if (scheck!=-1) {
            $scope.rind = scheck;
            $scope.fstate = "s";
            $scope.buttonclass = "btn btn-secondary p_friendreq";
            $scope.buttonfn = function(){cancelreq(rind)};
        }
        else if (rcheck!=-1) {
            $scope.rind = rcheck;
            $scope.fstate = "r";
            $scope.buttonclass = "btn btn-info p_friendreq";
            $scope.buttonfn = function(){addfriend(rind)};
        }
        else if (fcheck!=-1 | stcheck !=-1) {
            $scope.fstate = "f";
            $scope.buttonclass = "btn btn-success p_fbtn";
        }    
        else {
            $scope.fstate = "n";    
            $scope.buttonclass = "btn btn-info p_friendreq";
            $scope.buttonfn = function(){sendreq(pinfo)};
        } 
    }
    $scope.addfriend = function(n) {
        $scope.friendlist.push($scope.reqlist[n]);
        $scope.reqlist.splice(n,1);
        $scope.fstate = "f";
        $scope.buttonclass = "btn btn-success p_fbtn";
    }
    $scope.declinereq = function(n) {
        $scope.reqlist.splice(n,1);
    }
    $scope.cancelreq = function(n) {
        $scope.sentreqlist.splice(n,1);
        $scope.fstate = "n";   
        $scope.buttonclass = "btn btn-info p_friendreq";
    }
    $scope.sendreq = function(prof) {
        $scope.sentreqlist.push(prof);
        $scope.fstate = "s";
        $scope.buttonclass = "btn btn-secondary p_friendreq";
    }
    $scope.buttonfon = function() {
        if ($scope.fstate==="s") $scope.cancelreq($scope.rind);
        else if ($scope.fstate==="r") $scope.addfriend($scope.rind);
        else if ($scope.fstate==="n") $scope.sendreq($scope.pinfo); 
    }
    $scope.starfriend = function(n) {
        $scope.starlist.push($scope.friendlist[n]);
        $scope.friendlist.splice(n,1);
    }
    $scope.unstarfriend = function(n) {
        $scope.friendlist.push($scope.starlist[n]);
        $scope.starlist.splice(n,1);
    }
    $scope.unsfriend = function(n) {
        $scope.starlist.splice(n,1);
    }
    $scope.unfriend = function(n) {
        $scope.friendlist.splice(n,1);
    }
})

