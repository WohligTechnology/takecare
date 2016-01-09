angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.homeslider = [{
        img: "img/home-slider/banner.jpg",
        title: "The calorie meter",
        descp: "Count Your Calories with our index customised to Indian food"
      },

      {
        img: "img/home-slider/banner.jpg",
        title: "The calorie meter",
        descp: "Count Your Calories with our index customised to Indian food"
      },

      {
        img: "img/home-slider/banner.jpg",
        title: "The calorie meter",
        descp: "Count Your Calories with our index customised to Indian food"
      },

      {
        img: "img/home-slider/banner.jpg",
        title: "The calorie meter",
        descp: "Count Your Calories with our index customised to Indian food"
      }
    ];
    $scope.homestory = [{
      name: "Rishabh Maniktala",
      location: "Mumbai, India",
      weight: "25",
      descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat"
    }, {
      name: "Rishabh",
      location: "Mumbai, India",
      weight: "25",
      descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat"
    }];

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: '//placekitten.com/' + newWidth + '/300',
        text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i = 0; i < 4; i++) {
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
    }, {
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
    $scope.healthdetail = [{
      img: "../img/health/ailment.png",
      caption: "ailment control"
    }, {
      img: "../img/health/ageing.png",
      caption: "healthy ageing"
    }, {
      img: "../img/health/cancer.png",
      caption: "lactation"
    }, {
      img: "../img/health/kids.png",
      caption: "superkids"
    },
  {
    img: "../img/health/loss.png",
    caption: "inch loss"
  },
{
img:"../img/health/pregnancy.png",
caption: "pregnancy"
}];
  })
  .controller('WeightManagementCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("weightmanagement");
    $scope.menutitle = NavigationService.makeactive("Weight Management");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.weightinfo = [{
      name: "Pramila Seth",
      location: "Mumbai, India",
      weight: "5",
      descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat"
    }, {
      name: "Rishabh",
      location: "Mumbai, India",
      weight: "25",
      descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat"
    }];
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
    $scope.like = [{
      image: "img/cart/1.jpg",
      name: "Oat Meal Cookies",
      price: "225"
    }, {
      image: "img/cart/2.jpg",
      name: "Limbu Chana",
      price: "125"
    }, {
      image: "img/cart/1.jpg",
      name: "Oat Meal Cookies",
      price: "222"
    }, {
      image: "img/cart/2.jpg",
      name: "Limbu Chana",
      price: "122"
    }, {
      image: "img/cart/1.jpg",
      name: "Oat Meal Cookies",
      price: "205"
    }, {
      image: "img/cart/2.jpg",
      name: "Limbu Chana",
      price: "025"
    }];

    console.log($scope.like);

    $scope.like = _.chunk($scope.like, 3);
    console.log($scope.like);

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
    $scope.yearslide = [{
      year: "2013"
    }, {
      year: "2012"
    }, {
      year: "2011"
    }, {
      year: "2010"
    }, {
      year: "2009"
    }, {
      year: "2008"
    }, {
      year: "2007"
    }, {
      year: "2006"
    }, {
      year: "2005"
    }, {
      year: "2004"
    }];
    $scope.news = [{
      title1: "Feb - Hindustan Times Mint, Mumbai",
      title2: "Mar - The Hindu, Banglore",
      title3: "Mar - The New Indian Express, Banglore",
      image1: "img/news/news1.jpg",
      image2: "img/news/news2.jpg",
      image3: "img/news/news3.jpg"
    }, {
      title1: "Feb - Hindustan Times Mint, Mumbai",
      title2: "Mar - The Hindu, Banglore",
      title3: "Mar - The New Indian Express, Banglore",
      image1: "img/news/news1.jpg",
      image2: "img/news/news2.jpg",
      image3: "img/news/news3.jpg"
    }, {
      title1: "Feb - Hindustan Times Mint, Mumbai",
      title2: "Mar - The Hindu, Banglore",
      title3: "Mar - The New Indian Express, Banglore",
      image1: "img/news/news1.jpg",
      image2: "img/news/news2.jpg",
      image3: "img/news/news3.jpg"
    }, {
      title1: "Feb - Hindustan Times Mint, Mumbai",
      title2: "Mar - The Hindu, Banglore",
      title3: "Mar - The New Indian Express, Banglore",
      image1: "img/news/news1.jpg",
      image2: "img/news/news2.jpg",
      image3: "img/news/news3.jpg"
    }];
  })
  .controller('SuccessStoriesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("successstories");
    $scope.menutitle = NavigationService.makeactive("Success Stories");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.reads = [{
      title: "My cousins are still shocked that without coming to Mumbai, I have managed to lose weight.",
      name: "Hetal Kothari",
      location: "Bangalore, India",
      desc: "I have completely enjoyed the diet. I could not believe how fast I lost weight with eating all meals and in between too. I feel so good that my old jeans have begun to fit me and when people are noticing that I have lost weight.<br>A big thank you to Dipti for always being there for me! I have literally eaten her head up with all sorts of questions and she has always very patiently answered it all.<br>Dipti has always been prompt in her replies and has encouraged me loads.<br>My cousins are still shocked that without coming to Mumbai, I have managed to lose weight. So the entire credit goes to SelfCare.<br>There is so much to eat that you never feel hungry.<br>The thing I really want to share is that my sons have become such a big part of my losing weight, it’s amazing. They keep telling me that I look thin now and that makes me feel like I’m on top of the world",
      image: "img/stories/1.jpg",
      weight: "11"
    }, {
      title: "I have actually enjoyed losing weight.",
      name: "Bela Zaveri",
      location: "Mumbai, India",
      desc: "Feeling more energetic, light and increase in capacity.<br>I have actually enjoyed losing weight. Have never felt deprived about my food intake of course credit goes to my mentor Meloni Shah & above all Sumanji. Especially for extending my program when I was physically not doing well I would love to continue once i am back from my holiday. Thanks to all and of course heartiest thanks to my Gurdev to showing his grace and making me believe in myself and making me lead the target.",
      image: "img/stories/2.jpg",
      weight: "14"
    }, {
      title: "I never starved myself and I was always full at all times.",
      name: "Kiran Mandawewala",
      location: "Jamnagar, India",
      desc: "The weight loss program was very systematic. After losing 17 kgs i feel energetic, confident and I have received so many compliments that it has added to my energy level. Everybody in Jamnagar has found a tremendous change in me, people here can’t believe that there can be so many significant changes in my body measurements with systematic diet control. Nobody would believe that I have lost so much weight and that too with proper eating. I never starved myself and I was always full at all times.",
      image: "img/stories/3.jpg",
      weight: "17"
    }];
    $scope.views = [{
      title: "I am very satisfied with the diet given. Sumanji herself is a great motivation. I am very happy with the program and the weight loss achieved. Thank you.",
      name: "Pramila Seth",
      location: "Punjab, India",
      weight: "5"
    }, {
      title: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat.",
      name: "Rishabh Maniktala",
      location: "Mumbai, India",
      weight: "14"
    }, {
      title: "Everyone was teasing me.",
      name: "Nikesh Shah",
      location: "Mumbai, India",
      weight: "17"
    }];
  })
  .controller('CartCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("My Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.cart = [{
      img: "img/cart/1.jpg",
      name: "Baked Potato Chips",
      quantity: "1",
      amount: "225.00",
      totalamount: "225.00"
    }, {
      img: "img/cart/1.jpg",
      name: "Chana Jor",
      quantity: "1",
      amount: "150.00",
      totalamount: "150.00"
    }];
  })
  .controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("checkout");
    $scope.menutitle = NavigationService.makeactive("Checkout");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.Checkoutcart = [{
      img: "img/cart/1.jpg",
      name: "Baked Potato Chips",
      quantity: "1",
      amount: "225.00",
      totalamount: "225.00"
    }, {
      img: "img/cart/1.jpg",
      name: "Chana Jor",
      quantity: "1",
      amount: "150.00",
      totalamount: "150.00"
    }];
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

.controller('headerctrl', function($scope, TemplateService, $uibModal) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });

  $scope.openLogin = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/login.html',
      controller: 'headerctrl'
    })
  };

})

;
