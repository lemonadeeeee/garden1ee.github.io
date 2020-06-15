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
            "dog_name": "Hyuji",
            "owner_name": "Jungwon",
            "dog_basicinfo": "2/F Maltese",
            "dog_message": "I love walking!",
            "dog_agengender": "2 and half years old, Female",
            "dog_intro": ["likes walking","looking for walk friends"],
            "owner_agengender": "21 years old, Female",
            "owner_intro": ["interested in hand-made dog snacks","frequent walking time: Mon~Fri 5pm"],
            "url": "#",
            "breed": ["same", "friendly", "size"]
        },
        {
            "pic": "img/retriever.png",
            "dog_name": "Toro",
            "owner_name": "May",
            "dog_basicinfo": "7/M Labrador Retriever",
            "dog_message": "Mild, large doggy",
            "dog_agengender": "7 years old, Male",
            "dog_intro": ["likes watching people","also likes caring small dogs"],
            "owner_agengender": "9 years old, Female",
            "owner_intro": ["interested in walking with Toro","frequent walking time: Mon~Fri 4pm"],
            "url": "#",
            "breed": []
        },
        {
            "pic": "img/pomeranian.png",
            "dog_name": "Mango",
            "owner_name": "Sunghoon",
            "dog_basicinfo": "6/M Pomeranian",
            "dog_message": "finding friends who also loves sunbathing",
            "dog_agengender": "6 years old, Male",
            "dog_intro": ["likes sunbathe","lot of curiosity, but bit shy"],
            "owner_agengender": "25 years old, Male",
            "owner_intro": ["interested in frisbee","frequent walking time: Sat~Sun 3pm"],
            "url": "#",
            "breed": ["friendly"]
        },
        {
            "pic": "img/poodle.png",
            "dog_name": "Caramel",
            "owner_name": "Ryu",
            "dog_basicinfo": "10/M Poodle",
            "dog_message": "cute and polite poodle",
            "dog_agengender": "10 years old, Male",
            "dog_intro": ["very polite","need time to get friendly"],
            "owner_agengender": "20 years old, Male",
            "owner_intro": ["interested in letting dogs have fun","frequent walking time: Mon~Fri 7pm"],
            "url": "#",
            "breed": []
        },
        {
            "pic": "img/bishon-frise.png",
            "dog_name": "Jockey",
            "owner_name": "Joomin",
            "dog_basicinfo": "1/F Bishon Frise",
            "dog_message": "My dog is super friendly!",
            "dog_agengender": "1 year and three months old, Female",
            "dog_intro": ["likes running around","looking for friend to enjoy long time activity"],
            "owner_agengender": "24 years old, Female",
            "owner_intro": ["interested in freedom from dog","frequent walking time: Mon~Fri 7pm"],
            "url": "#",
            "breed": ["friendly"]
        },
        {
            "pic": "img/maltese3.png",
            "dog_name": "Maru",
            "owner_name": "Hasung",
            "dog_basicinfo": "4/M Maltese",
            "dog_message": "Let's be friend!",
            "dog_agengender": "4 years old, Male",
            "dog_intro": ["friendly to small dogs","afraid of big dogs"],
            "owner_agengender": "27 years old, Male",
            "owner_intro": ["interested in making friend who love dogs","frequent walking time: Mon~Fri 6pm"],
            "url": "#",
            "breed": ["same", "friendly", "size"]
        },
        {
            "pic": "img/pug.png",
            "dog_name": "Mona",
            "owner_name": "Hansoo",
            "dog_basicinfo": "1/F Pug",
            "dog_message": "Mona is kind to everybody",
            "dog_agengender": "1 years old, Female",
            "dog_intro": ["likes people except Hansoo","also kind to other dogs"],
            "owner_agengender": "33 years old, Male",
            "owner_intro": ["interested in fooling Mona","frequent walking time: Mon~Fri 3pm, 8pm"],
            "url": "#",
            "breed": ["friendly", "size"]
        },
        {
            "pic": "img/stitch.png",
            "dog_name": "Stitch",
            "owner_name": "Lilo",
            "dog_basicinfo": "5/M Pug..?",
            "dog_message": "want to make friend!",
            "dog_agengender": "5 years old, Male",
            "dog_intro": ["Have many charms","Little bit peculiar.."],
            "owner_agengender": "16 years old, Female",
            "owner_intro": ["interested in making friend to stitch","frequent walking time: Mon~Fri 7pm"],
            "url": "#",
            "breed": ["size"]
        },
        {
            "pic": "img/maltese2.png",
            "dog_name": "Mandoo",
            "owner_name": "Juho",
            "dog_basicinfo": "3/M Maltese",
            "dog_message": "Maltese forever!",
            "dog_agengender": "3 years old, Male",
            "dog_intro": ["likes sunbathe","lot of curiosity, but bit shy"],
            "owner_agengender": "25 years old, Male",
            "owner_intro": ["interested in frisbee","frequent walking time: Sat~Sun 3pm"],
            "url": "friendpage.html",
            "breed": ["same", "friendly", "size"]
        },
        {
            "pic": "img/maltese4.png",
            "dog_name": "Somsom",
            "owner_name": "Jimin",
            "dog_basicinfo": "7/F Maltese",
            "dog_message": "My dog is super friendly!",
            "dog_agengender": "7 year and three months old, Female",
            "dog_intro": ["likes running around","looking for friend to enjoy long time activity"],
            "owner_agengender": "24 years old, Female",
            "owner_intro": ["interested in freedom from dog","frequent walking time: Mon~Fri 7pm"],
            "url": "#",
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
})
