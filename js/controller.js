/**
 * Created by nhy on 2016/8/22.
 */
// CONTROLLERS ============================================
// home page controller
animateApp.controller('HomeController', function($scope,anchorScroll) {
    (function() {
        var bannerSlider = new Slider($('#banner_tabs'), {
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $('#bannerCtrl'),
            activeControllerCls: 'active'
        });
        $('#banner_tabs .flex-prev').click(function() {
            bannerSlider.prev()
        });
        $('#banner_tabs .flex-next').click(function() {
            bannerSlider.next()
        });
    })();
    $scope.pageClass = 'page-home';
    $scope.active=false;
    $scope.topActive=false;
    $scope.jump = {
        homeClass:function(){anchorScroll.toView('#homeClass', true)},
        homeTeacher:function(){anchorScroll.toView('#homeTeacher', true)},
        homeLearn:function(){anchorScroll.toView('#homeLearn', true)},
        homeAbout:function(){anchorScroll.toView("#homeAbout",true)}
    }

});

// about page controller
animateApp.controller('AboutController', function($scope) {
    $scope.pageClass = 'page-about';
    $scope.message = "<这里是关于页>";
});

// contact page controller
animateApp.controller('ContactController', function($scope) {
    $scope.pageClass = 'page-contact';
    $scope.message = "<这里是联系页>";
});