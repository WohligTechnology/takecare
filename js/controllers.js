angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.asksuman = {};
        $scope.alerts=[];
        $scope.navigation = NavigationService.getnav();
        NavigationService.getSlide(function(data) {
            $scope.homeslider = data;
        });
        $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
        $scope.homestory = [{
            name: "Rishabh Maniktala",
            location: "Mumbai, India",
            weight: "25",
            descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat",
            image: "http://img.youtube.com/vi/dnmzOqhu62k/sddefault.jpg",
            link: "https://www.youtube.com/embed/dnmzOqhu62k?autoplay=1"
        }, {
            name: "Pramila Seth",
            location: "Punjab, India",
            weight: "5",
            descp: "I am very satisfied with the diet given. Sumanji herself is a great motivation. I am very happy with the program and the weight loss achieved. Thank you.",
            image: "http://img.youtube.com/vi/aMyOpVqyjYQ/sddefault.jpg",
            link: "https://www.youtube.com/embed/aMyOpVqyjYQ?autoplay=1"
        }, {
            descp: "Everyone was teasing me.",
            name: "Nikesh Shah",
            location: "Mumbai, India",
            weight: "17",
            image: "http://img.youtube.com/vi/RCfJBUulDBg/sddefault.jpg",
            link: "https://www.youtube.com/embed/RCfJBUulDBg?autoplay=1"
        }, {
            descp: "Its easy to loose weight by eating the foods that you like to eat also.",
            name: "Pranita Mittal",
            location: "Mumbai, India",
            weight: "10",
            image: "http://img.youtube.com/vi/0tLl00XTRQA/sddefault.jpg",
            link: "https://www.youtube.com/embed/0tLl00XTRQA?autoplay=1"
        }, {
            descp: "I had completely lost hope.",
            name: "Dr Ashish Sawkar",
            location: "Mumbai, India",
            weight: "20",
            image: "http://img.youtube.com/vi/nxs9qT6m8N4/sddefault.jpg",
            link: "https://www.youtube.com/embed/nxs9qT6m8N4?autoplay=1"
        }, {
            descp: "I looked forward to my weekly visits, because the team is very motivational.",
            name: "Khushcheher Dallas",
            location: "Mumbai, India",
            weight: "9",
            image: "http://img.youtube.com/vi/Cn2z-n0t51o/sddefault.jpg",
            link: "https://www.youtube.com/embed/Cn2z-n0t51o?autoplay=1"
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
        $scope.askSumanSubmit = function(input, formValidate) {
            console.log(input);
            if (formValidate.$valid) {
                NavigationService.askSumanSubmit(input, function(data) {
                    console.log(data);
                    if (data.value == true) {
                      $scope.alerts.push({
                        type:'success',
                        msg:'Your query has been sent'
                      });
                        $scope.asksuman = {};
                        formValidate.email.$touched= false;
                    }
                });
            }else{
              $scope.alerts.push({
                type:'danger',
                msg:'Please input all details'
              });
            }
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
        $scope.alerts=[];
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
        });
        $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
        $scope.cartAdd = function(item) {
            var input = {
                product: item,
                quantity: 1,
                status: "1"
            };
            console.log(input);
            NavigationService.addToCart(input, function(data) {
              console.log(data);
                if (data.value == true) {
                    $scope.alerts.push({
                      type:'success',
                      msg:'Added to cart'
                    });
                } else {
                  $scope.alerts.push({
                    type:'danger',
                    msg:'Already in cart'
                  });

                }
            });
        }
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
        $scope.categorylist=[{
          name:'weight loss for kids',
          id:1,
          image:'img/health/kids.png'
        },{
          name:'weightloss with health gain',
          id:2,
          image:'img/health/weightloss.png'
        },{
          name:'post pregnancy weight loss with lactation',
          id:3,
          image:'img/health/kids.png'
        },{
          name:'weightloss with pcos and insulin resistence',
          id:4,
          image:'img/health/kids.png'
        },{
          name:'healthy aging',
          id:5,
          image:'img/health/weightloss.png'
        },{
          name:'pregnancy',
          id:6,
          image:'img/health/kids.png'
        },{
          name:'weight gain',
          id:7,
          image:'img/health/kids.png'
        },{
          name:'ailment control',
          id:8,
          image:'img/health/weightloss.png'
        },{
          name:'cancer support',
          id:9,
          image:'img/health/kids.png'
        },{
          name:'marathon / sports nutrition',
          id:10,
          image:'img/health/kids.png'
        }];
    })
    .controller('HealthManagementDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("healthmanagementdetail");
        $scope.menutitle = NavigationService.makeactive("Health Management Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
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
            name: "Rishabh Maniktala",
            location: "Mumbai, India",
            weight: "25",
            descp: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat",
            image: "http://img.youtube.com/vi/dnmzOqhu62k/sddefault.jpg",
            link: "https://www.youtube.com/embed/dnmzOqhu62k?autoplay=1"
        }, {
            name: "Pramila Seth",
            location: "Punjab, India",
            weight: "5",
            descp: "I am very satisfied with the diet given. Sumanji herself is a great motivation. I am very happy with the program and the weight loss achieved. Thank you.",
            image: "http://img.youtube.com/vi/aMyOpVqyjYQ/sddefault.jpg",
            link: "https://www.youtube.com/embed/aMyOpVqyjYQ?autoplay=1"
        }, {
            descp: "Everyone was teasing me.",
            name: "Nikesh Shah",
            location: "Mumbai, India",
            weight: "17",
            image: "http://img.youtube.com/vi/RCfJBUulDBg/sddefault.jpg",
            link: "https://www.youtube.com/embed/RCfJBUulDBg?autoplay=1"
        }, {
            descp: "Its easy to loose weight by eating the foods that you like to eat also.",
            name: "Pranita Mittal",
            location: "Mumbai, India",
            weight: "10",
            image: "http://img.youtube.com/vi/0tLl00XTRQA/sddefault.jpg",
            link: "https://www.youtube.com/embed/0tLl00XTRQA?autoplay=1"
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
        $scope.alerts=[];
        $scope.outofstock = false;
        $scope.filter = {};
        $scope.filter.quantity = "01";
        $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
        NavigationService.getProductDetail($scope.productid, function(data) {
            console.log(data);
            $scope.product = data;
            // $scope.product = data[0];
            $scope.product.relatedproduct = _.chunk($scope.product.relatedproduct, 3);
        });
        $scope.cartAdd = function(id) {
            var input = {
                product: id,
                quantity: parseInt($scope.filter.quantity),
                status: "1"
            };
            console.log(input);
            NavigationService.addToCart(input, function(data) {
              if (data.value == true) {
                  $scope.alerts.push({
                    type:'success',
                    msg:'Added to cart'
                  });
              } else {
                $scope.alerts.push({
                  type:'danger',
                  msg:'Already in cart'
                });

              }
            });
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
            news: [{
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
            weight: "5",
            image: "http://img.youtube.com/vi/aMyOpVqyjYQ/sddefault.jpg",
            link: "https://www.youtube.com/embed/aMyOpVqyjYQ?autoplay=1"
        }, {
            title: "There was so much to eat and there were so many options, that most of the time it was difficult to pick and choose what to eat.",
            name: "Rishabh Maniktala",
            location: "Mumbai, India",
            weight: "14",
            image: "http://img.youtube.com/vi/dnmzOqhu62k/sddefault.jpg",
            link: "https://www.youtube.com/embed/dnmzOqhu62k?autoplay=1"
        }, {
            title: "Everyone was teasing me.",
            name: "Nikesh Shah",
            location: "Mumbai, India",
            weight: "17",
            image: "http://img.youtube.com/vi/RCfJBUulDBg/sddefault.jpg",
            link: "https://www.youtube.com/embed/RCfJBUulDBg?autoplay=1"
        }, {
            title: "Its easy to loose weight by eating the foods that you like to eat also.",
            name: "Pranita Mittal",
            location: "Mumbai, India",
            weight: "10",
            image: "http://img.youtube.com/vi/0tLl00XTRQA/sddefault.jpg",
            link: "https://www.youtube.com/embed/0tLl00XTRQA?autoplay=1"
        }, {
            title: "I had completely lost hope.",
            name: "Dr Ashish Sawkar",
            location: "Mumbai, India",
            weight: "20",
            image: "http://img.youtube.com/vi/nxs9qT6m8N4/sddefault.jpg",
            link: "https://www.youtube.com/embed/nxs9qT6m8N4?autoplay=1"
        }, {
            title: "I looked forward to my weekly visits, because the team is very motivational.",
            name: "Khushcheher Dallas",
            location: "Mumbai, India",
            weight: "9",
            image: "http://img.youtube.com/vi/Cn2z-n0t51o/sddefault.jpg",
            link: "https://www.youtube.com/embed/Cn2z-n0t51o?autoplay=1"
        }];
    })
    .controller('CartCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("cart");
        $scope.menutitle = NavigationService.makeactive("My Cart");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.allcart = [];
        $scope.alerts=[];
        $scope.getCart = function() {
            NavigationService.showCart(function(data) {
                $scope.allcart = data;
                $scope.totalcart = 0;
                _.each($scope.allcart, function(key) {
                    $scope.totalcart = $scope.totalcart + parseInt(key.subtotal);
                    key.qty = parseInt(key.qty);
                })
            })
        };
        $scope.getCart();
        $scope.updateQuantity = function(item) {
            NavigationService.addToCart({
                quantity: item.qty,
                product: item.id,
                status: "2"
            }, function(data) {
                $scope.getCart();
            });
        };
        $scope.addQuantity = function(item) {
            item.qty = parseInt(item.qty);
            item.qty++;
            $scope.updateQuantity(item);
        };
        $scope.subtractQuantity = function(item) {
            item.qty = parseInt(item.qty);
            item.qty--;
            $scope.updateQuantity(item);
        };
        $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
        $scope.removeCart = function(item) {
            NavigationService.removeFromCart({
                id: item.id
            }, function(data) {
                if (data.value == true) {
                  $scope.alerts.push({
                    type:'success',
                    msg:'Removed from cart'
                  });
                    $scope.getCart();
                } else {
                  $scope.alerts.push({
                    type:'danger',
                    msg:'Not removed from cart'
                  });
                }
            })
        }
    })
    .controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("checkout");
        $scope.menutitle = NavigationService.makeactive("Checkout");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.guest = "notguest";
        $scope.guestshow = true;
        $scope.allcart=[];
        $scope.checkout={};
        $scope.alerts=[];
        $scope.user={};
        $scope.shippingcharges = 0;
        $scope.login={};
        $scope.tabs = [{
            active: true,
            disabled: true
        }, {
            active: false,
            disabled: true
        }, {
            active: false,
            disabled: true
        }, {
            active: false,
            disabled: true
        }, ];
        if($.jStorage.get("user")){
            $scope.user=$.jStorage.get("user");
          $scope.tabs[1].active=true;
          console.log($scope.tabs);
        }
        $scope.closeAlert=function(index){
          $scope.alerts.splice(index, 1);
          };
        $scope.getCart = function() {
            NavigationService.showCart(function(data) {
                $scope.allcart = data;
                $scope.totalcart = 0;
                _.each($scope.allcart, function(key) {
                    $scope.totalcart = $scope.totalcart + parseInt(key.subtotal);
                    key.qty = parseInt(key.qty);
                })
                $scope.totalcart=$scope.totalcart+$scope.shippingcharges;
            })
        };
        $scope.getCart();
        $scope.selectGuest = function(input) {
            console.log(input);
            $scope.guestshow = true;
            if (input == "notguest") {
                $scope.guestshow = true;
            } else {
                $scope.guestshow = false;
            }
        };
        $scope.proceedToPayment= function(){
          if($scope.allcart.length >0 ){
            $scope.checkout.cart=$scope.allcart;
            NavigationService.placeOrder($scope.checkout,function(data){
              $scope.alerts.push({
                type:'success',
                msg:'Order Placed. Order ID : '+data
              })
            })
          }

        };
        $scope.proceedToShipping = function(input,status,formValidate) {
          if(!status){
            if(formValidate.email.$valid){
              $scope.checkout.email=input.email;
              console.log($scope.checkout);
              $scope.tabs[1].active=true;
            }
          }else{
            if(formValidate.email.$valid && formValidate.password.$valid){
              NavigationService.loginuser(input, function(data) {
                  if (data.value == false) {
                  } else {
                      $.jStorage.set("user", data);
                      $scope.user=$.jStorage.get("user");
                      window.location.reload();
                  }
              });
            }
          }
        }
        $scope.proceedToSummary= function(input,formValidate){
          console.log(input);
          if(formValidate.$valid){
            if(!$scope.guestshow){
              $scope.checkout=$scope.user;
              $scope.checkout.email=$scope.login.email;
              console.log($scope.guestshow);
            }else{
              $scope.checkout=$scope.user;
              console.log($scope.guestshow);
            }
            console.log($scope.checkout);
            $scope.tabs[2].active=true;
            $scope.getCart();
          }else{

          }

        }
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
    .controller('PregnancyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("pregnancy");
        $scope.menutitle = NavigationService.makeactive("Pregnancy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('WeightLossForKidsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("weightlossforkids");
        $scope.menutitle = NavigationService.makeactive("Weight Loss For Kids");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('WeightLossWithHealthGainCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("weightlosswithhealthgain");
        $scope.menutitle = NavigationService.makeactive("Weight Loss With Health Gain");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('PostPregnancyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("postpregnancy");
        $scope.menutitle = NavigationService.makeactive("Post Pregnancy Weight Loss With Lactation");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('WeightLossWithPcosCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("weightlosswithpcos");
        $scope.menutitle = NavigationService.makeactive("Weight Loss With PCOS and Insulin Resistence");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('HealthyAgingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("healthyaging");
        $scope.menutitle = NavigationService.makeactive("Healthy Aging");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('WeightGainCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("weightgain");
        $scope.menutitle = NavigationService.makeactive("Weight Gain");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('AilmentControlCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ailmentcontrol");
        $scope.menutitle = NavigationService.makeactive("Ailment Control");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('CancerSupportCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("cancersupport");
        $scope.menutitle = NavigationService.makeactive("Cancer Support");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
    })
    .controller('MarathonCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("marathon");
        $scope.menutitle = NavigationService.makeactive("Marathon");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.healthdetail = [{
            img: "img/health/ailment.png",
            caption: "ailment control"
        }, {
            img: "img/health/ageing.png",
            caption: "healthy ageing"
        }, {
            img: "img/health/cancer.png",
            caption: "lactation"
        }, {
            img: "img/health/kids.png",
            caption: "superkids"
        }, {
            img: "img/health/loss.png",
            caption: "inch loss"
        }, {
            img: "img/health/pregnancy.png",
            caption: "pregnancy"
        }];
        $scope.healthdetail = _.chunk($scope.healthdetail, 3);
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
        $scope.nutrigenomics = [
       {
         qts: "What Will This Analysis Do For Me?",
         ans: "You will know where your potential genetic weaknesses are, so you can put preventative strategies into place"
       },
       {
         qts: "What Will This Analysis Do For Me?",
         ans: "You will know where your potential genetic weaknesses are, so you can put preventative strategies into place"
       }
     ];
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
        $scope.alerts=[];
        $scope.contact={};

        $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
        $scope.contactUs = function(input, formValidate) {
            console.log(input);
            console.log(formValidate);
            if(formValidate.$valid){
              NavigationService.contactSubmit(input, function(data) {
                  if (data.value == true) {
                    $scope.alerts.push({
                      type:'success',
                      msg:'Your enquiry has been sent'
                    });
                    $scope.contact={};
                    formValidate.firstname.$touched=false;
                  }else{
                    $scope.alerts.push({
                      type:'danger',
                      msg:'Unable to send enquiry'
                    });
                  }
              });
            }else{
              $scope.alerts.push({
                type:'danger',
                msg:'Please input all details'
              });
            }

        }
    })
    .controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("login");
        $scope.menutitle = NavigationService.makeactive("Login");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('TermsAndConditionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("termsandcondition");
        $scope.menutitle = NavigationService.makeactive("termsandcondition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('PrivacyPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("privacypolicy");
        $scope.menutitle = NavigationService.makeactive("privacypolicy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

.controller('footerctrl', function($scope, NavigationService, TemplateService, $uibModal) {
        $scope.template = TemplateService;
        $scope.subsresponse = false;
        $scope.msg = "";
        $scope.subscribe = function(input, formValidate) {
            $scope.subsresponse = false;
            if (formValidate.$valid) {
                NavigationService.subscribe(input, function(data) {
                    if (data.value == true) {
                        $scope.subsresponse = true;
                        $scope.msg = "Thank you for subscribing.";
                    } else {
                        $scope.subsresponse = true;
                        $scope.msg = "Already subscribed.";
                    }
                });
            }
        }
    })
    .controller('headerctrl', function($scope, NavigationService, TemplateService, $uibModal) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $scope.alreadyReg=false;
        $scope.enablelogout = false;
        if ($.jStorage.get("user")) {
            $scope.enablelogout = true;
        }
        $scope.logout = function() {
            NavigationService.logout(function(data) {
                console.log(data);
                // if(data.value==true){
                $.jStorage.flush();
                window.location.reload();
                // }
            });
        }
        $scope.openLogin = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/login.html',
                controller: 'headerctrl'
            })
        };
        $scope.doSignup = function(accept, input, formValidate) {
            $scope.acceptValidate = false;
            $scope.alreadyReg=false;
            if (!accept) {
                $scope.acceptValidate = true;
            } else {
                if (formValidate.$valid) {
                    NavigationService.signup(input, function(data) {
                        if (data.value == false) {
                          console.log("herer");
                          $scope.alreadyReg=true;
                        } else {
                            $.jStorage.set("user", data);
                            window.location.reload();
                        }
                    })
                }
            }
        }
        $scope.doLogin = function(input, formValidate) {
            if (formValidate.$valid) {
                NavigationService.loginuser(input, function(data) {
                    if (data.value == false) {

                    } else {
                        console.log(data);
                        $.jStorage.set("user", data);
                        window.location.reload();
                    }
                });
            }
        };

       $scope.health = [
         "Cholesterol",
         "High Blood Pressure",
         "Diabetes",
         "Ailment Control",
         "Weight Management"
       ];
    });
