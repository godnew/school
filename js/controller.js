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
animateApp.controller('CController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-c';
    $scope.jump = {
        cEmploy:function(){anchorScroll.toView('#cEmploy', true)},
        cAdvantage:function(){anchorScroll.toView('#cAdvantage', true)},
        cProject:function(){anchorScroll.toView('#cProject', true)},
        cCooperative:function(){anchorScroll.toView("#cCooperative",true)}
    };
    (function(){
        $(".cProcess li").eq(0).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat 2px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat 2px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(1).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -178px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -178px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(2).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -357px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -357px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(3).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -537px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -537px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(4).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -716px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -716px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(5).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -897px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -897px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(6).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1076px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1076px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(7).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1256px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1256px 2px");
            $(this).find(".cShow").hide(200);
        });
    })();
});

// contact page controller
animateApp.controller('JavaController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-java';
});