// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('aboutus', {
        url: "/aboutus",
        templateUrl: "views/template.html",
        controller: 'AboutUsCtrl'
    })

    .state('healthproducts', {
        url: "/healthproducts",
        templateUrl: "views/template.html",
        controller: 'HealthProductsCtrl'
    })

    .state('healthpackages', {
        url: "/healthpackages",
        templateUrl: "views/template.html",
        controller: 'HealthPackagesCtrl'
    })

    .state('healthmanagement', {
        url: "/healthmanagement",
        templateUrl: "views/template.html",
        controller: 'HealthManagementCtrl'
    })
    .state('healthmanagementdetail', {
        url: "/healthmanagementdetail",
        templateUrl: "views/template.html",
        controller: 'HealthManagementDetailCtrl'
    })

    .state('weightloss', {
        url: "/weightloss",
        templateUrl: "views/template.html",
        controller: 'WeightLossCtrl'
    })

    .state('imageconsulting', {
        url: "/imageconsulting",
        templateUrl: "views/template.html",
        controller: 'ImageConsultingCtrl'
    })

    .state('productcategory', {
        url: "/productcategory",
        templateUrl: "views/template.html",
        controller: 'ProductCategoryCtrl'
    })

    .state('productdetail', {
        url: "/productdetail",
        templateUrl: "views/template.html",
        controller: 'ProductDetailCtrl'
    })

    .state('faq', {
        url: "/faq",
        templateUrl: "views/template.html",
        controller: 'FaqCtrl'
    })

    .state('meet', {
        url: "/meet",
        templateUrl: "views/template.html",
        controller: 'MeetCtrl'
    })

    .state('news', {
        url: "/news",
        templateUrl: "views/template.html",
        controller: 'NewsCtrl'
    })

    .state('successstories', {
        url: "/successstories",
        templateUrl: "views/template.html",
        controller: 'SuccessStoriesCtrl'
    })

    .state('cart', {
        url: "/cart",
        templateUrl: "views/template.html",
        controller: 'CartCtrl'
    })

    .state('checkout', {
        url: "/checkout",
        templateUrl: "views/template.html",
        controller: 'CheckoutCtrl'
    })

    .state('team', {
        url: "/team",
        templateUrl: "views/template.html",
        controller: 'TeamCtrl'
    })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
