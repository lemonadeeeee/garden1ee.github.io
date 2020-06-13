app.controller('homeCtrl', function($scope, $state) {
    $scope.slickConfig = {
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,
        method: {}
    }
    var remember = function() {
      if (!window.localStorage.getItem('v')) return 'friendly';
      else return window.localStorage.getItem('v');
    }
    $scope.breed = {
        opt: remember()
    }
    $scope.dofilter = function() {
        if ($scope.breed.opt=='same') {
            window.localStorage.setItem('v','same')
            $state.go('filterfriends');
        }
        else {
            window.localStorage.setItem('v', $scope.breed.opt)
            $state.go('home');
        }
    }
})
