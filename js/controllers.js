angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getSlide(function(data) {
      $scope.homeslider = data;
    });
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
      title: "Preventive Health",
      text: "clinical food plans",
      desc: "Our health plan studies you, understands your genetic predisposition to various ailments—which could be anything from diabetes, heart ailment to kidney disorders and cancer—and helps you to prevent or reverse the onset."
    }, {
      title: "Technology",
      text: "contemporary plans",
      desc: "We use technology and research to an advantage, providing our clients with innovative, safe and effective ways to be healthy and stay fit."
    }, {
      title: "Online",
      text: "cultural diet plans",
      desc: "We are an online programme too, so no matter where you are, we will can still tailor your diet to suit your locale and circumstances."
    }, {
      title: "Unjunk",
      text: "eat, drink, UNJUNK",
      desc: "Our dedicated teams of experts constantly work on developing wholesome food recipes, which take the junk out of junk food."
    }, {
      title: "Travel Tips",
      text: "diet on the go",
      desc: "We provide guidance and hints to identify what to eat while traveling . These travel and holiday survival tips will ensure you have an enjoyable yet healthy holiday."
    }, {
      title: "Children",
      text: "super kids",
      desc: "We are experts at solving child obesity and even at helping young children gain height or weight."
    }];
  })
  .controller('HealthProductsCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("healthproducts");
    $scope.menutitle = NavigationService.makeactive("Health Products");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.categoryid = $stateParams.id;
    $scope.categories = [];
    $scope.subCategories = [];
    $scope.products = [];
    NavigationService.getCategoryById($scope.categoryid, function(data) {
      $scope.productCategory = data;
      console.log($scope.productCategory);
    });
    NavigationService.getCategory(function(data) {
      $scope.categories = data;
        $scope.categories = $filter('orderBy')($scope.categories, "order");
      console.log(_.findIndex($scope.categories, {
        'id': $scope.categoryid
      }));
      console.log($scope.categories);
      $scope.categories.splice(_.findIndex($scope.categories, {
        'id': $scope.categoryid
      }), 1);
    })
    $scope.refreshProducts = function(subcategoryarr) {
      NavigationService.getProductsByCategory({
        categoryid: $scope.categoryid,
        subcategories: subcategoryarr
      }, function(data) {
        if (data.value = false) {
          $scope.products = [];
        } else {
          console.log(data);
          $scope.products = data.data.queryresult;
          console.log($scope.products);
          // $scope.products = data;
        }
      })
    }
    $scope.refreshProducts([]);
    $scope.cardAdd = function(productid) {
      console.log(productid);
    };
    NavigationService.getSubCategory($scope.categoryid, function(data) {

      $scope.subCategories = data;
      $scope.subCategories = $filter('orderBy')($scope.subCategories, "order");
    });
    $scope.filterBy = [];
    $scope.filterIt = function(index) {
      console.log(index);
      if (_.findIndex($scope.filterBy, function(key) {
          return key == index;
        }) == -1) {
        $scope.filterBy.push(index);
      } else {
        $scope.filterBy.splice(_.findIndex($scope.filterBy, function(key) {
          return key == index;
        }), 1);
      }
      $scope.refreshProducts($scope.filterBy);
    }
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
    }, {
      img: "../img/health/loss.png",
      caption: "inch loss"
    }, {
      img: "../img/health/pregnancy.png",
      caption: "pregnancy"
    }];
    $scope.healthdetail = _.chunk($scope.healthdetail, 3);
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
  .controller('ProductCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("productcategory");
    $scope.menutitle = NavigationService.makeactive("Product Category");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.categories = [];
    NavigationService.getCategory(function(data) {
      $scope.categories = data;
      $scope.categories = $filter('orderBy')($scope.categories, "order"); //order by order field done
      $scope.categories = _.chunk($scope.categories, 2);
    })
  })
  .controller('ProductDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("productdetail");
    $scope.menutitle = NavigationService.makeactive("Product Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.productid = $stateParams.id;
    $scope.product = {};
    $scope.outofstock=false;
    NavigationService.getProductDetail($scope.productid,function(data) {
      console.log(data);
      $scope.product = data;
        // $scope.product = data[0];
    });
    $scope.cartAdd = function(id){
      console.log(id);
    }
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
      year: "2015",
      news: [{
        title: "Feb - Hindustan Times Mint, Mumbai",
        image: "img/news/2015/India Today.jpg"
      }]
    }, {
      year: "2014",
      news : [{
        title: "Jan - Absolute India, Mumbai",
        image: "img/news/2014/Suman Agarwal-Absolute Inia-Mum-Pg08-Organic food is the new-11.01.14.jpg"
      }, {
        title: "Feb - articleapi.com",
        image: "img/news/2014/Suman Agarwal-articleapi.com-Benefits of almonds for skin, hair and health-11.02.14.jpg"
      }, {
        title: "Feb - bubblews.com",
        image: "img/news/2014/Suman Agarwal-bubblews.com-Benefits of almonds for skin, hair and health-13.02.14.jpg"
      }, {
        title: "Feb - caravanalive.com",
        image: "img/news/2014/Suman Agarwal-caravanalive.com-Designer Diets from Selfcare-25.02.14.jpg"
      }, {
        title: "Feb - Dna After Hrs, Mumbai",
        image: "img/news/2014/Suman agarwal-Dna After Hrs-Mum-Pg04-Age Gracefully!-20.02.2014.jpg"
      }, {
        title: "Feb - dnaindia.com",
        image: "img/news/2014/Suman Agarwal-dnaindia.com-Anti-ageing foods to stay young-14.02.14.jpg"
      }, {
        title: "Feb - healthmeup.com",
        image: "img/news/2014/Suman Agarwal-healthmeup.com-Foods that Burn Fat Fast  Weight Loss-25.02.14.jpg"
      }, {
        title: "Feb - idiva.com",
        image: "img/news/2014/Suman Agarwal-idiva.com-All About Fats- The Good and the Bad-20.02.14.jpg"
      }, {
        title: "Feb - idiva.com",
        image: "img/news/2014/Suman Agarwal-idiva.com-Weight Loss Plan for Diabetics-13.02.14.jpg"
      }, {
        title: "Feb - in.lifestyle.yahoo.com",
        image: "img/news/2014/Suman Agarwal-in.lifestyle.yahoo.com-Weight Loss Plan for Diabetics-21.02.14.jpg"
      }, {
        title: "Jan - Midday, Mumbai",
        image: "img/news/2014/Suman Agarwal-Midday-Mum-Pg07-The Pregnant working woman's guide-07.01.14.jpg"
      }, {
        title: "Feb - mumbai.burrp.com",
        image: "img/news/2014/Suman Agarwal-mumbai.burrp.com-Timeless Radiance-14.02.14.jpg"
      }, {
        title: "Feb - mumbaimag.com",
        image: "img/news/2014/Suman Agarwal-mumbaimag.com-Timeless Radiance, A Skincare And Fitness Panel Discussion At Serafina-18.02.14.jpg"
      }, {
        title: "Feb - Sharir O Sasthya, Kolkata",
        image: "img/news/2014/Suman Agarwal-Sharir O Sasthya-Kol-Pg 64- 65-Let you grow old  but have a balanced diet and be young says Neutritionist   Suman Agarwal-15.02.14.jpg"
      }, {
        title: "Feb - Women's Health National",
        image: "img/news/2014/Suman Agarwal-Women's Health-National-Pg94-95-Control Your Cravings-Jan-Feb'14 .jpg"
      }, {
        title: "Feb - Women's Health National",
        image: "img/news/2014/Suman Agarwal-Women's Health-National-Pg96-Control Your Cravings-Jan-Feb'14.jpg"
      }]
    }];

    $scope.activeTab = function(data) {
      $scope.activeYear = data;
    };

    $scope.activeTab($scope.yearslide[0]);
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
  .controller('CoolSculptingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coolsculpting");
    $scope.menutitle = NavigationService.makeactive("Cool Sculpting");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("bloglising");
    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('BlogDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("blogdetail");
    $scope.menutitle = NavigationService.makeactive("Blog Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('RecipesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("recipes");
    $scope.menutitle = NavigationService.makeactive("Recipes");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('NutrigenomicsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("nutrigenomics");
    $scope.menutitle = NavigationService.makeactive("Nutrigenomics");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('StatsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("knowyourstats");
    $scope.menutitle = NavigationService.makeactive("Stats");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contactus");
    $scope.menutitle = NavigationService.makeactive("Contact Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.footermenu = "";
    $scope.contactUs = function(input,formValidate){
        console.log(input);
        console.log(formValidate);
        NavigationService.contactSubmit(input,function(data){
            if(data.value == true){
              console.log(data);
            }
        });
    }
  })
  .controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })

.controller('headerctrl', function($scope,NavigationService, TemplateService, $uibModal) {
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
  $scope.doSignup = function(accept,input,formValidate){
    $scope.acceptValidate=false;
    if(!accept){
      $scope.acceptValidate=true;
    }else{
      if(formValidate.$valid){
        NavigationService.signup(input,function(data){
          if(data.value == false){
            console.log("already exists");
          }else{
            $.jStorage.get("user",data);
            window.location.reload();
          }
        })
      }
    }
  }
  $scope.doLogin = function(input,formValidate){
    if(formValidate.$valid){
      NavigationService.userlogin(input,function(data){
        if(data.value== false){

        }else{
          $.jStorage.set("user",data);
          window.location.reload();
        }
      });
    }
  };
});
