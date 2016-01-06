angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
    $scope.homeslider = [
        {
            img:"img/home-slider/banner.jpg",
          title: "The calorie meter",
          descp: "Count Your Calories with our index customised to Indian food"
        },

        {
            img:"img/home-slider/banner.jpg",
          title: "The calorie meter",
          descp: "Count Your Calories with our index customised to Indian food"
        },

        {
            img:"img/home-slider/banner.jpg",
          title: "The calorie meter",
          descp: "Count Your Calories with our index customised to Indian food"
        },

        {
            img:"img/home-slider/banner.jpg",
          title: "The calorie meter",
          descp: "Count Your Calories with our index customised to Indian food"
        }
    ];
  $scope.homestory = [
    {
      name: "Rishabh Maniktala",
      location: "Mumbai, India",
      weight: "25",
      descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat"
    },
    {
      name: "Rishabh",
      location: "Mumbai, India",
      weight: "25",
      descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat"
    }
  ];

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }

})
.controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("aboutus");
  $scope.menutitle = NavigationService.makeactive("About Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  // Corousel
  $scope.sliderInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.aboutSlides = [{
    title: "Individualize",
    text: "intelligent food plans",
    desc: "We believe that each of our clients is unique. Which is why we design personalized diet and exercise routines to suit your needs."
  },
  {
    title: "Individualize",
    text: "intelligent food plans",
    desc: "We believe that each of our clients is unique. Which is why we design personalized diet and exercise routines to suit your needs."
  }];
})
.controller('HealthProductsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("healthproducts");
  $scope.menutitle = NavigationService.makeactive("Health Products");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('HealthPackagesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("healthpackages");
  $scope.menutitle = NavigationService.makeactive("Health Packages");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('HealthManagementCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("healthmanagement");
  $scope.menutitle = NavigationService.makeactive("Health Management");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('HealthManagementDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("healthmanagementdetail");
  $scope.menutitle = NavigationService.makeactive("Health Management Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('WeightManagementCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("weightmanagement");
  $scope.menutitle = NavigationService.makeactive("Weight Management");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('ImageConsultingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("imageconsulting");
  $scope.menutitle = NavigationService.makeactive("Image Consulting");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('ProductCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("productcategory");
  $scope.menutitle = NavigationService.makeactive("Product Category");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('ProductDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("productdetail");
  $scope.menutitle = NavigationService.makeactive("Product Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('FaqCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("faq");
  $scope.menutitle = NavigationService.makeactive("FAQ");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.oneAtATime = true;
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
})
.controller('MeetCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("meet");
  $scope.menutitle = NavigationService.makeactive("Meet Suman Agarwal");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('NewsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("news");
  $scope.menutitle = NavigationService.makeactive("News");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('SuccessStoriesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("successstories");
  $scope.menutitle = NavigationService.makeactive("Success Stories");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('CartCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("cart");
  $scope.menutitle = NavigationService.makeactive("My Cart");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.cart = [{
    img: "",
    name: "Baked Potato Chips",
    quantity: "1",
    amount: "225.00",
    totalamount:"225.00"
  },
  {
    img: "",
    name: "Chana Jor",
    quantity: "1",
    amount: "150.00",
    totalamount:"150.00"
  }];
})
.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("checkout");
  $scope.menutitle = NavigationService.makeactive("Checkout");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('TeamCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("team");
  $scope.menutitle = NavigationService.makeactive("Team");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("contactus");
  $scope.menutitle = NavigationService.makeactive("Contact Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("login");
  $scope.menutitle = NavigationService.makeactive("Login");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
