// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'angulartics',
  'angulartics.google.analytics'
]);
var countries = [{
  "value": "Please Select"
}, {
  "value": "India"
}];


var states = [{

}];
firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider,$locationProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.spinnerTemplate = '<div class="loadingcfp"><div class="in-box"><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>Please wait...</div></div>';
  cfpLoadingBarProvider.includeBar = false;

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

  .state('weightmanagement', {
    url: "/weightmanagement",
    templateUrl: "views/template.html",
    controller: 'HealthManagementDetailCtrl'
  })

  .state('healthmanagementdetail', {
    url: "/healthmanagementdetail/:id",
    templateUrl: "views/template.html",
    controller: 'HealthManagementDetailCtrl'
  })

  // .state('weightmanagement', {
  //   url: "/weightmanagement",
  //   templateUrl: "views/template.html",
  //   controller: 'WeightManagementCtrl'
  // })

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

  .state('blogTag', {
      url: "/tag/:tagname",
      templateUrl: "views/template.html",
      controller: 'BlogCtrl'
    })
    .state('searchBlog', {
      url: "/searchBlog/:search",
      templateUrl: "views/template.html",
      controller: 'BlogCtrl'
    })


  .state('blogdetail', {
      url: "/blogdetail/:id",
      templateUrl: "views/template.html",
      controller: 'BlogDetailCtrl'
    })
    .state('recipes', {
      url: "/recipes",
      templateUrl: "views/template.html",
      controller: 'RecipesCtrl'
    })

  .state('recipedetail', {
    url: "/recipedetail/:id",
    templateUrl: "views/template.html",
    controller: 'RecipedetailCtrl'
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
    .state('careersSubmit', {
      url: "/careers/:id",
      templateUrl: "views/template.html",
      controller: 'CareersCtrl'
    })
    .state('plans', {
      url: "/plans",
      templateUrl: "views/template.html",
      controller: 'PlansCtrl'
    })
    .state('orderlist', {
      url: "/orderlist",
      templateUrl: "views/template.html",
      controller: 'OrderlistCtrl'
    })
    .state('account', {
      url: "/account",
      templateUrl: "views/template.html",
      controller: 'AccountCtrl'
    })
    .state('error', {
      url: "/error",
      templateUrl: "views/template.html",
      controller: 'ErrorCtrl'
    })
    .state('wentwrong', {
      url: "/wentwrong/:orderid",
      templateUrl: "views/template.html",
      controller: 'WentwrongCtrl'
    })
    .state('thankyou', {
      url: "/thankyou/:orderid/:amount",
      templateUrl: "views/template.html",
      controller: 'ThankyouCtrl'
    })
    .state('forgotpassword', {
      url: "/forgotpassword/:hash",
      templateUrl: "views/template.html",
      controller: 'ForgotpasswordCtrl'
    })
    .state('forgotpopup', {
      url: "/forgotpopup",
      templateUrl: "views/template.html",
      controller: 'ForgotpopupCtrl'
    })
    .state('how-works', {
      url: "/howitworks",
      templateUrl: "views/template.html",
      controller: 'HowWorksCtrl'
    });
  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(isproduction);

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
firstapp.filter('loginame', function() {
  return function(value) {
    if(value){
      return value.split(' ')[0];
    }else{
      return null;
    }
  };
});

firstapp.filter('cut', function() {
  return function(value, wordwise, max, tail) {
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        value = value.substr(0, lastspace);
      }
    }

    return value + (tail || ' …');
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
firstapp.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  });

var isSlide = false;
var SlideFunc = {};

firstapp.directive('slideMenu', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      function OnBodyClick() {
        console.log("INSIDE ON BODY");
            $element.trigger("click");
      }
      $element.click(function() {
        console.log("DING CLICK");
        isSlide = !isSlide;
        if (isSlide) {
          $(".hamburger").addClass("green-bar");
          $(".slide-menu").addClass("slide-in");
          $(".that-slides").addClass("slide-body");
          setTimeout(function() {
            $(".that-slides.slide-body").bind("click",OnBodyClick);
          },100);
        } else {
          $( ".that-slides.slide-body").unbind( "click",OnBodyClick );
          $(".hamburger").removeClass("green-bar");
          $(".slide-menu").removeClass("slide-in");
          $(".that-slides").removeClass("slide-body");
        }
      });
    }
  };
});
firstapp.filter('showplan', function(NavigationService) {
  return function(input) {
    if (input) {
      if (cart !== '') {
        var ispresent = _.findIndex(cart, 'id', input);
        if (ispresent != -1) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  };
});

var formvalidation = function(allvalidation) {
  var isvalid2 = true;
  for (var i = 0; i < allvalidation.length; i++) {
    console.log("checking");
    if (allvalidation[i].field === "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
      allvalidation[i].validation = "ng-invalid";
      isvalid2 = false;
    }
  }
  return isvalid2;
};



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
