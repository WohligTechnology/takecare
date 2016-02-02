// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

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
    url: "/healthproducts/:id",
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

  .state('weightmanagement', {
    url: "/weightmanagement",
    templateUrl: "views/template.html",
    controller: 'WeightManagementCtrl'
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
    url: "/productdetail/:id",
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

  .state('coolsculpting', {
    url: "/coolsculpting",
    templateUrl: "views/template.html",
    controller: 'CoolSculptingCtrl'
  })

  .state('blog', {
    url: "/blog",
    templateUrl: "views/template.html",
    controller: 'BlogCtrl'
  })

  .state('blogdetail', {
    url: "/blogdetail",
    templateUrl: "views/template.html",
    controller: 'BlogDetailCtrl'
  })

  .state('recipes', {
    url: "/recipes",
    templateUrl: "views/template.html",
    controller: 'RecipesCtrl'
  })

  .state('nutrigenomics', {
    url: "/nutrigenomics",
    templateUrl: "views/template.html",
    controller: 'NutrigenomicsCtrl'
  })

  .state('knowyourstats', {
    url: "/knowyourstats",
    templateUrl: "views/template.html",
    controller: 'StatsCtrl'
  })

  .state('contactus', {
      url: "/contactus",
      templateUrl: "views/template.html",
      controller: 'ContactUsCtrl'
    })
  .state('pregnancy', {
      url: "/pregnancy",
      templateUrl: "views/template.html",
      controller: 'PregnancyCtrl'
    })
  .state('weightlossforkids', {
      url: "/weightlossforkids",
      templateUrl: "views/template.html",
      controller: 'WeightLossForKidsCtrl'
    })
  .state('weightlosswithhealthgain', {
      url: "/weightlosswithhealthgain",
      templateUrl: "views/template.html",
      controller: 'WeightLossWithHealthGainCtrl'
    })
  .state('postpregnancy', {
      url: "/postpregnancy",
      templateUrl: "views/template.html",
      controller: 'PostPregnancyCtrl'
    })
  .state('weightlosswithpcos', {
      url: "/weightlosswithpcos",
      templateUrl: "views/template.html",
      controller: 'WeightLossWithPcosCtrl'
    })
  .state('healthyaging', {
      url: "/healthyaging",
      templateUrl: "views/template.html",
      controller: 'HealthyAgingCtrl'
    })
  .state('weightgain', {
      url: "/weightgain",
      templateUrl: "views/template.html",
      controller: 'WeightGainCtrl'
    })
  .state('ailmentcontrol', {
      url: "/ailmentcontrol",
      templateUrl: "views/template.html",
      controller: 'AilmentControlCtrl'
    })
  .state('cancersupport', {
      url: "/cancersupport",
      templateUrl: "views/template.html",
      controller: 'CancerSupportCtrl'
    })
  .state('marathon', {
      url: "/marathon",
      templateUrl: "views/template.html",
      controller: 'MarathonCtrl'
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/template.html",
      controller: 'LoginCtrl'
    })
    .state('termsandcondition', {
        url: "/termsandcondition",
        templateUrl: "views/template.html",
        controller: 'TermsAndConditionCtrl'
    })
    .state('privacypolicy', {
        url: "/privacypolicy",
        templateUrl: "views/template.html",
        controller: 'PrivacyPolicyCtrl'
    })
    .state('selfcaretv', {
        url: "/selfcaretv",
        templateUrl: "views/template.html",
        controller: 'SelfcaretvCtrl'
    })
    .state('careers', {
        url: "/careers",
        templateUrl: "views/template.html",
        controller: 'CareersCtrl'
    })
    .state('account', {
        url: "/account",
        templateUrl: "views/template.html",
        controller: 'AccountCtrl'
    })

  $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});


firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var $target;
      if (attr.rel) {
        $target = $("[rel='" + attr.rel + "']");
      } else {
        $target = element;
      }

      $target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: true,
        helpers: {
          media: {},
          title: {
            type: 'outside'
          },
          thumbs: {
            width: 50,
            height: 50
          }
        }
      });

    }
  };
});
firstapp.filter('nospace', function() {
  return function(value) {
    return (!value) ? '' : value.replace(/ /g, '');
  };
});
firstapp.filter('serverimage', function() {
  return function(input) {
    if (input) {
      return imgurl + input;
    } else {
      return "";
    }
  };
});
firstapp.directive('slideMenu', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      $(element).click(function() {
        $(".hamburger").toggleClass("green-bar");
        $(".slide-menu").toggleClass("slide-in");
        $(".that-slides").toggleClass("slide-body");
      });

    }
  }
});
firstapp.directive('fancybox', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      $element = $(element);
      console.log("Checking Fancybox");
      setTimeout(function() {
        $(".various").fancybox({
          maxWidth: 800,
          maxHeight: 600,
          fitToView: false,
          width: '70%',
          height: '70%',
          autoSize: false,
          closeClick: false,
          openEffect: 'none',
          closeEffect: 'none'
        });
      }, 100);
    }
  };
});
