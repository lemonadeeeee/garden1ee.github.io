app.controller('homeCtrl', function($scope, $state) {
    $scope.slickConfig = {
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,
        method: {}
    }
    $scope.dofilter = function() {
        if ($scope.same) {
            $state.go('filterfriends');
        }
        else {
            $state.go('home');
        }
    }
})
