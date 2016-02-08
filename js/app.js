// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);
var countries = [{
        "value": "Please Select"
    }, {
        "value": "Afganistan"
    }, {
        "value": "Albania"
    }, {
        "value": "Algeria"
    }, {
        "value": "American Samoa"
    }, {
        "value": "Andorra"
    }, {
        "value": "Angola"
    }, {
        "value": "Anguilla"
    }, {
        "value": "Antigua &amp; Ba"
    }, {
        "value": "Argentina"
    }, {
        "value": "Armenia"
    }, {
        "value": "Aruba"
    }, {
        "value": "Australia"
    }, {
        "value": "Austria"
    }, {
        "value": "Azerbaijan"
    }, {
        "value": "Bahamas"
    }, {
        "value": "Bahrain"
    }, {
        "value": "Bangladesh"
    }, {
        "value": "Barbados"
    }, {
        "value": "Belarus"
    }, {
        "value": "Belgium"
    }, {
        "value": "Belize"
    }, {
        "value": "Benin"
    }, {
        "value": "Bermuda"
    }, {
        "value": "Bhutan"
    }, {
        "value": "Bolivia"
    }, {
        "value": "Bonaire"
    }, {
        "value": "Bosnia &amp; Herzegovina"
    }, {
        "value": "Botswana"
    }, {
        "value": "Brazil"
    }, {
        "value": "British Indian Ocean Ter"
    }, {
        "value": "Brunei"
    }, {
        "value": "Bulgaria"
    }, {
        "value": "Burkina Faso"
    }, {
        "value": "Burundi"
    }, {
        "value": "Cambodia"
    }, {
        "value": "Cameroon"
    }, {
        "value": "Canada"
    }, {
        "value": "Canary Islands"
    }, {
        "value": "Cape Verde"
    }, {
        "value": "Cayman Islands"
    }, {
        "value": "Central African Republic"
    }, {
        "value": "Chad"
    }, {
        "value": "Channel Islands"
    }, {
        "value": "Chile"
    }, {
        "value": "China"
    }, {
        "value": "Christmas Island"
    }, {
        "value": "Cocos Island"
    }, {
        "value": "Colombia"
    }, {
        "value": "Comoros"
    }, {
        "value": "Congo"
    }, {
        "value": "Cook Islands"
    }, {
        "value": "Costa Rica"
    }, {
        "value": "Cote DIvoire"
    }, {
        "value": "Croatia"
    }, {
        "value": "Cuba"
    }, {
        "value": "Curacao"
    }, {
        "value": "Cyprus"
    }, {
        "value": "Czech Republic"
    }, {
        "value": "Denmark"
    }, {
        "value": "Djibouti"
    }, {
        "value": "Dominica"
    }, {
        "value": "Dominican Republic"
    }, {
        "value": "East Timor"
    }, {
        "value": "Ecuador"
    }, {
        "value": "Egypt"
    }, {
        "value": "El Salvador"
    }, {
        "value": "Equatorial Guinea"
    }, {
        "value": "Eritrea"
    }, {
        "value": "Estonia"
    }, {
        "value": "Ethiopia"
    }, {
        "value": "Falkland Islands"
    }, {
        "value": "Faroe Islands"
    }, {
        "value": "Fiji"
    }, {
        "value": "Finland"
    }, {
        "value": "France"
    }, {
        "value": "French Guiana"
    }, {
        "value": "French Polynesia"
    }, {
        "value": "French Southern Ter"
    }, {
        "value": "Gabon"
    }, {
        "value": "Gambia"
    }, {
        "value": "Georgia"
    }, {
        "value": "Germany"
    }, {
        "value": "Ghana"
    }, {
        "value": "Gibraltar"
    }, {
        "value": "Great Britain"
    }, {
        "value": "Greece"
    }, {
        "value": "Greenland"
    }, {
        "value": "Grenada"
    }, {
        "value": "Guadeloupe"
    }, {
        "value": "Guam"
    }, {
        "value": "Guatemala"
    }, {
        "value": "Guinea"
    }, {
        "value": "Guyana"
    }, {
        "value": "Haiti"
    }, {
        "value": "Hawaii"
    }, {
        "value": "Honduras"
    }, {
        "value": "Hong Kong"
    }, {
        "value": "Hungary"
    }, {
        "value": "Iceland"
    }, {
        "value": "India"
    }, {
        "value": "Indonesia"
    }, {
        "value": "Iran"
    }, {
        "value": "Iraq"
    }, {
        "value": "Ireland"
    }, {
        "value": "Isle of Man"
    }, {
        "value": "Israel"
    }, {
        "value": "Italy"
    }, {
        "value": "Jamaica"
    }, {
        "value": "Japan"
    }, {
        "value": "Jordan"
    }, {
        "value": "Kazakhstan"
    }, {
        "value": "Kenya"
    }, {
        "value": "Kiribati"
    }, {
        "value": "Korea North"
    }, {
        "value": "Korea South"
    }, {
        "value": "Kuwait"
    }, {
        "value": "Kyrgyzstan"
    }, {
        "value": "Laos"
    }, {
        "value": "Latvia"
    }, {
        "value": "Lebanon"
    }, {
        "value": "Lesotho"
    }, {
        "value": "Liberia"
    }, {
        "value": "Libya"
    }, {
        "value": "Liechtenstein"
    }, {
        "value": "Lithuania"
    }, {
        "value": "Luxembourg"
    }, {
        "value": "Macau"
    }, {
        "value": "Macedonia"
    }, {
        "value": "Madagascar"
    }, {
        "value": "Malaysia"
    }, {
        "value": "Malawi"
    }, {
        "value": "Maldives"
    }, {
        "value": "Mali"
    }, {
        "value": "Malta"
    }, {
        "value": "Marshall Islands"
    }, {
        "value": "Martinique"
    }, {
        "value": "Mauritania"
    }, {
        "value": "Mauritius"
    }, {
        "value": "Mayotte"
    }, {
        "value": "Mexico"
    }, {
        "value": "Midway Islands"
    }, {
        "value": "Moldova"
    }, {
        "value": "Monaco"
    }, {
        "value": "Mongolia"
    }, {
        "value": "Montserrat"
    }, {
        "value": "Morocco"
    }, {
        "value": "Mozambique"
    }, {
        "value": "Myanmar"
    }, {
        "value": "Nambia"
    }, {
        "value": "Nauru"
    }, {
        "value": "Nepal"
    }, {
        "value": "Netherland Antilles"
    }, {
        "value": "Netherlands (Holland, Europe)"
    }, {
        "value": "Nevis"
    }, {
        "value": "New Caledonia"
    }, {
        "value": "New Zealand"
    }, {
        "value": "Nicaragua"
    }, {
        "value": "Niger"
    }, {
        "value": "Nigeria"
    }, {
        "value": "Niue"
    }, {
        "value": "Norfolk Island"
    }, {
        "value": "Norway"
    }, {
        "value": "Oman"
    }, {
        "value": "Pakistan"
    }, {
        "value": "Palau Island"
    }, {
        "value": "Palestine"
    }, {
        "value": "Panama"
    }, {
        "value": "Papua New Guinea"
    }, {
        "value": "Paraguay"
    }, {
        "value": "Peru"
    }, {
        "value": "Philippines"
    }, {
        "value": "Pitcairn Island"
    }, {
        "value": "Poland"
    }, {
        "value": "Portugal"
    }, {
        "value": "Puerto Rico"
    }, {
        "value": "Qatar"
    }, {
        "value": "Republic of Montenegro"
    }, {
        "value": "Republic of Serbia"
    }, {
        "value": "Reunion"
    }, {
        "value": "Romania"
    }, {
        "value": "Russia"
    }, {
        "value": "Rwanda"
    }, {
        "value": "St Barthelemy"
    }, {
        "value": "St Eustatius"
    }, {
        "value": "St Helena"
    }, {
        "value": "St Kitts-Nevis"
    }, {
        "value": "St Lucia"
    }, {
        "value": "St Maarten"
    }, {
        "value": "St Pierre &amp; Miquelon"
    }, {
        "value": "St Vincent &amp; Grenadines"
    }, {
        "value": "Saipan"
    }, {
        "value": "Samoa"
    }, {
        "value": "Samoa American"
    }, {
        "value": "San Marino"
    }, {
        "value": "Sao Tome &amp; Principe"
    }, {
        "value": "Saudi Arabia"
    }, {
        "value": "Senegal"
    }, {
        "value": "Serbia"
    }, {
        "value": "Seychelles"
    }, {
        "value": "Sierra Leone"
    }, {
        "value": "Singapore"
    }, {
        "value": "Slovakia"
    }, {
        "value": "Slovenia"
    }, {
        "value": "Solomon Islands"
    }, {
        "value": "Somalia"
    }, {
        "value": "South Africa"
    }, {
        "value": "Spain"
    }, {
        "value": "Sri Lanka"
    }, {
        "value": "Sudan"
    }, {
        "value": "Suriname"
    }, {
        "value": "Swaziland"
    }, {
        "value": "Sweden"
    }, {
        "value": "Switzerland"
    }, {
        "value": "Syria"
    }, {
        "value": "Tahiti"
    }, {
        "value": "Taiwan"
    }, {
        "value": "Tajikistan"
    }, {
        "value": "Tanzania"
    }, {
        "value": "Thailand"
    }, {
        "value": "Togo"
    }, {
        "value": "Tokelau"
    }, {
        "value": "Tonga"
    }, {
        "value": "Trinidad &amp; Tobago"
    }, {
        "value": "Tunisia"
    }, {
        "value": "Turkey"
    }, {
        "value": "Turkmenistan"
    }, {
        "value": "Turks &amp; Caicos Is"
    }, {
        "value": "Tuvalu"
    }, {
        "value": "Uganda"
    }, {
        "value": "Ukraine"
    }, {
        "value": "United Arab Emirates"
    }, {
        "value": "United Kingdom"
    }, {
        "value": "United States of America"
    }, {
        "value": "Uruguay"
    }, {
        "value": "Uzbekistan"
    }, {
        "value": "Vanuatu"
    }, {
        "value": "Vatican City State"
    }, {
        "value": "Venezuela"
    }, {
        "value": "Vietnam"
    }, {
        "value": "Virgin Islands (Brit)"
    }, {
        "value": "Virgin Islands (USA)"
    }, {
        "value": "Wake Island"
    }, {
        "value": "Wallis &amp; Futana Is"
    }, {
        "value": "Yemen"
    }, {
        "value": "Zaire"
    }, {
        "value": "Zambia"
    }, {
        "value": "Zimbabwe"
    }
];
firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider,cfpLoadingBarProvider) {

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
    .state('healthmanagementdetail', {
      url: "/healthmanagementdetail/:id",
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
        url: "/thankyou/:orderid",
        templateUrl: "views/template.html",
        controller: 'ThankyouCtrl'
    })
    .state('forgotpassword', {
        url: "/forgotpassword",
        templateUrl: "views/template.html",
        controller: 'ForgotpasswordCtrl'
    })
    .state('forgotpopup', {
        url: "/forgotpopup",
        templateUrl: "views/template.html",
        controller: 'ForgotpopupCtrl'
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
firstapp.filter('showplan', function(NavigationService) {
    return function(input) {
      console.log(input);
      console.log(cart);
        if (input) {
            if (cart!='') {
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
    if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
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
