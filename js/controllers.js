angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'angular-loading-bar', 'infinite-scroll'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.asksuman = {};
    $scope.asksuman.category = "";
    $scope.alerts = [];
    $scope.askcategories = [{
      value: "",
      name: "Choose a Category"
    }, {
      value: "Weight Loss",
      name: "Weight Loss"
    }, {
      value: "Weight Gain",
      name: "Weight Gain"
    }, {
      value: "Diet",
      name: "Diet"
    }, {
      value: "Health and Immunity",
      name: "Health and Immunity"
    }, {
      value: "Ailment Control",
      name: "Ailment Control"
    }, {
      value: "General",
      name: "General"
    }];
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
              type: 'success',
              msg: 'Your query has been sent'
            });
            $scope.asksuman = {};
            formValidate.email.$touched = false;
          }
        });
      } else {
        $scope.alerts.push({
          type: 'danger',
          msg: 'Please input all details'
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
  .controller('HealthProductsCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, cfpLoadingBar) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("healthproducts");
    $scope.menutitle = NavigationService.makeactive("Health Products");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.categoryid = $stateParams.id;
    $scope.categories = [];
    $scope.subCategories = [];
    $scope.products = [];
    $scope.alerts = [];
    $scope.msg = "Loading...";
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
            type: 'success',
            msg: 'Added to cart'
          });
        } else {
          $scope.alerts.push({
            type: 'danger',
            msg: 'Already in cart'
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
          $scope.msg = "No products found.";
          $scope.products = [];
        } else {
          console.log(data);
          $scope.products = data.data.queryresult;
          $scope.msg = ""
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
  .controller('SelfcaretvCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("selfcaretv");
    $scope.menutitle = NavigationService.makeactive("Selfcare Tv");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getTvVideo(function(data) {
      $scope.selfcaretv = data;
    });
  })
  .controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("careers");
    $scope.menutitle = NavigationService.makeactive("Careers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('PlansCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("plans");
    $scope.menutitle = NavigationService.makeactive("plans");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('OrderlistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("orderlist");
    $scope.menutitle = NavigationService.makeactive("orderlist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.orders = [];
    if ($.jStorage.get("user")) {
      NavigationService.getUserOrder(function(data) {
        // $scope.orders = data.plans;
        _.each(data.plans, function(n, key) {
          _.each(n.products, function(m, key1) {
            $scope.orders.push(m);
          });
        });
        // $scope.orders
      });
    }
  })
  .controller('AccountCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, cfpLoadingBar) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("account");
    $scope.menutitle = NavigationService.makeactive("Account");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.countries = countries;
    $scope.selectedShippingCountry = countries[0];
    $scope.selectedBillingCountry = countries[0];
    $scope.sameasbilling = false;
    $scope.alerts = [];
    $scope.error = false;
    $scope.orders = [];
    $scope.password = {};

    $scope.profile = {};
    $scope.profile.nameemailedit = 'edit';
    $scope.profile.changepasswordedit = 'edit';
    $scope.profile.billingaddressedit = 'edit';
    $scope.profile.shippingaddressedit = 'edit';

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.addAlert = function(type, msg) {
      $scope.alerts.push({
        type: type,
        msg: msg
      });
    }

    $scope.sameasbillingChange = function(sameas) {
      $scope.sameasbilling = sameas;
    }

    if ($.jStorage.get("user")) {
      NavigationService.getUserOrder(function(data) {
        // $scope.orders = data.plans;
        _.each(data.plans, function(n, key) {
          _.each(n.products, function(m, key1) {
            $scope.orders.push(m);
          });
        });
        // $scope.orders
      });
    }


    $scope.editProfile = function(num) {
      switch (num) {
        case 1:
          {
            console.log("name email");
            console.log($scope.profile.nameemailedit);
            if ($scope.profile.nameemailedit == 'edit') {
              $scope.profile.nameemailedit = 'save';
            } else {
              $scope.profile.nameemailedit = 'edit';
              $scope.updateUser()
            }
          }
          break;
        case 2:
          {
            if ($scope.profile.changepasswordedit == 'edit') {
              $scope.profile.changepasswordedit = 'save';
            } else {
              if ($scope.password.newpassword === $scope.password.confirmpassword) {
                NavigationService.changePassword($scope.password, function(data) {
                  console.log(data);
                  if (data.value == true) {
                    $scope.addAlert("success", "Password changed successfully. ");
                    $scope.profile.changepasswordedit = 'edit';
                  } else {
                    $scope.addAlert("danger", "Wrong password");
                  }
                });

              } else {
                $scope.addAlert("danger", "Re-entered password should be same as new password.");
              }

            }
          }
          break;
        case 3:
          {
            if ($scope.profile.billingaddressedit == 'edit') {
              $scope.profile.billingaddressedit = 'save';
            } else {
              $scope.allvalidation = [];
              $scope.allvalidation = [{
                field: $scope.user.billingline1,
                validation: ""
              }, {
                field: $scope.user.billingcity,
                validation: ""
              }, {
                field: $scope.user.billingpincode,
                validation: ""
              }, {
                field: $scope.user.billingstate,
                validation: ""
              }, {
                field: $scope.user.billingcountry,
                validation: ""
              }];

              var check = formvalidation($scope.allvalidation);
              if (check) {
                $scope.updateUser();
                $scope.profile.billingaddressedit = 'edit';
              } else {
                $scope.addAlert("danger", "Enter Manditory Fields.");
              }
            }
          }
          break;
        case 4:
          {
            if ($scope.profile.shippingaddressedit == 'edit') {
              $scope.profile.shippingaddressedit = 'save';
            } else {
              if ($scope.sameasbilling) {
                $scope.user.shippingline1 = $scope.user.billingline1;
                $scope.user.shippingline2 = $scope.user.billingline2;
                $scope.user.shippingline3 = $scope.user.billingline3;
                $scope.user.shippingcity = $scope.user.billingcity;
                $scope.user.shippingpincode = $scope.user.billingpincode;
                $scope.user.shippingstate = $scope.user.billingstate;
                $scope.user.shippingcountry = $scope.user.billingcountry;
              }
              $scope.allvalidation = [];
              $scope.allvalidation = [{
                field: $scope.user.shippingline1,
                validation: ""
              }, {
                field: $scope.user.shippingcity,
                validation: ""
              }, {
                field: $scope.user.shippingpincode,
                validation: ""
              }, {
                field: $scope.user.shippingstate,
                validation: ""
              }, {
                field: $scope.user.shippingcountry,
                validation: ""
              }];

              var check = formvalidation($scope.allvalidation);
              if (check) {
                $scope.updateUser();
                $scope.profile.shippingaddressedit = 'edit';
              } else {
                $scope.addAlert("danger", "Enter Manditory Fields.");
              }
            }
          }
          break;
        default:
          {

          }
      }
    }

    NavigationService.userDetail(function(data) {
      $scope.user = data;

      // console.log(_.findIndex($scope.countries,{'value':'Angola'}));
      // if (data.billingcountry=='') {
      //   $scope.selectedBillingCountry = $scope.countries[_.findIndex($scope.countries,{'value':'Please Select'})]
      // }else {
      //   $scope.selectedBillingCountry = $scope.countries[_.findIndex($scope.countries,{'value':data.billingcountry})]
      // }
      // if (data.shippingcountry=='') {
      //   $scope.selectedShippingCountry = $scope.countries[_.findIndex($scope.countries,{'value':'Please Select'})]
      // }else {
      //   $scope.selectedShippingCountry = $scope.countries[_.findIndex($scope.countries,{'value':data.shippingcountry})]
      // }

    }, function(data) {
      $state.go("error");
    })

    $scope.updateUser = function() {
      NavigationService.updateUser($scope.user, function(data) {
        $scope.addAlert("success", "Saved ");
      })
    }

  })
  .controller('HealthPackagesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("healthpackages");
    $scope.menutitle = NavigationService.makeactive("Health Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('HealthManagementCtrl', function($scope, TemplateService, NavigationService, $timeout, cfpLoadingBar) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("healthmanagement");
    $scope.menutitle = NavigationService.makeactive("Health Management");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getSubPackages(function(data) {
      $scope.subpackages = data;
      $scope.subpackages = _.chunk($scope.subpackages, 5);
      console.log($scope.subpackages);
    });
  })
  .controller('HealthManagementDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, cfpLoadingBar) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("healthmanagementdetail");
    $scope.menutitle = NavigationService.makeactive("Health Management Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.healthid = $stateParams.id;
    $scope.alerts = [];
    $scope.selectedPackage = {};
    cfpLoadingBar.start();

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    NavigationService.showCart(function(data) {
      cart = data;
    })

    NavigationService.getSubPackages(function(data) {
      $scope.subpackages = data;
      $scope.selectedPackage = _.find($scope.subpackages, {
          'id': $scope.healthid
        })
        // console.log($scope.selectedPackage);
      console.log(_.findIndex($scope.subpackages, {
        'id': $scope.healthid
      }));
      $scope.subpackages.splice(_.findIndex($scope.subpackages, {
        'id': $scope.healthid
      }), 1);
      $scope.subpackages = _.chunk($scope.subpackages, 3);
      console.log($scope.subpackages);
    });
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

    //get all plans
    NavigationService.getPlansById($stateParams.id, function(data) {
      $scope.plans = data.plans;
    });
    $scope.cartAdd = function(id) {
      if ($.jStorage.get("user")) {
        var input = {
          product: id,
          status: "3"
        };
        console.log(input);
        NavigationService.addToCart(input, function(data) {
          if (data.value == true) {
            $scope.alerts.push({
              type: 'success',
              msg: 'Added to cart'
            });
            $timeout(function() {
              $state.go("cart");
            }, 3000)
          } else {
            $scope.alerts.push({
              type: 'danger',
              msg: 'Already in cart'
            });

          }
        });
      } else {
        $scope.alerts.push({
          type: 'danger',
          msg: 'Please Login First'
        });
      }
    }
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
    $scope.alerts = [];
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
            type: 'success',
            msg: 'Added to cart'
          });
        } else {
          $scope.alerts.push({
            type: 'danger',
            msg: 'Already in cart'
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
  .controller('ErrorCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("error");
    $scope.menutitle = NavigationService.makeactive("Error");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('WentwrongCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wentwrong");
    $scope.menutitle = NavigationService.makeactive("Went Wrong");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getOrder($stateParams.orderid, function(data) {
      $scope.order = data;
    })
  })
  .controller('ThankyouCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("thankyou");
    $scope.menutitle = NavigationService.makeactive("Thankyou");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getOrder($stateParams.orderid, function(data) {
      $scope.order = data;
    })
  })
  .controller('ForgotpasswordCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("forgotpassword");
    $scope.menutitle = NavigationService.makeactive("Forgot Password");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('ForgotpopupCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("forgotpopup");
    $scope.menutitle = NavigationService.makeactive("Forgot");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('NewsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("news");
    $scope.menutitle = NavigationService.makeactive("News");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.newsyears = [];
    $scope.news = [];
    NavigationService.getNewsYear(function(data) {
        $scope.newsyears = data;
        $scope.activeTab($scope.newsyears[0].year)
      })
      // $scope.yearslide = [{
      //     year: "2015",
      //     news: [{
      //         title: "Feb - Hindustan Times Mint, Mumbai",
      //         image: "img/news/2015/India Today.jpg"
      //     }]
      // }, {
      //     year: "2014",
      //     news: [{
      //         title: "Jan - Absolute India, Mumbai",
      //         image: "img/news/2014/Suman Agarwal-Absolute Inia-Mum-Pg08-Organic food is the new-11.01.14.jpg"
      //     }, {
      //         title: "Feb - articleapi.com",
      //         image: "img/news/2014/Suman Agarwal-articleapi.com-Benefits of almonds for skin, hair and health-11.02.14.jpg"
      //     }, {
      //         title: "Feb - bubblews.com",
      //         image: "img/news/2014/Suman Agarwal-bubblews.com-Benefits of almonds for skin, hair and health-13.02.14.jpg"
      //     }, {
      //         title: "Feb - caravanalive.com",
      //         image: "img/news/2014/Suman Agarwal-caravanalive.com-Designer Diets from Selfcare-25.02.14.jpg"
      //     }, {
      //         title: "Feb - Dna After Hrs, Mumbai",
      //         image: "img/news/2014/Suman agarwal-Dna After Hrs-Mum-Pg04-Age Gracefully!-20.02.2014.jpg"
      //     }, {
      //         title: "Feb - dnaindia.com",
      //         image: "img/news/2014/Suman Agarwal-dnaindia.com-Anti-ageing foods to stay young-14.02.14.jpg"
      //     }, {
      //         title: "Feb - healthmeup.com",
      //         image: "img/news/2014/Suman Agarwal-healthmeup.com-Foods that Burn Fat Fast  Weight Loss-25.02.14.jpg"
      //     }, {
      //         title: "Feb - idiva.com",
      //         image: "img/news/2014/Suman Agarwal-idiva.com-All About Fats- The Good and the Bad-20.02.14.jpg"
      //     }, {
      //         title: "Feb - idiva.com",
      //         image: "img/news/2014/Suman Agarwal-idiva.com-Weight Loss Plan for Diabetics-13.02.14.jpg"
      //     }, {
      //         title: "Feb - in.lifestyle.yahoo.com",
      //         image: "img/news/2014/Suman Agarwal-in.lifestyle.yahoo.com-Weight Loss Plan for Diabetics-21.02.14.jpg"
      //     }, {
      //         title: "Jan - Midday, Mumbai",
      //         image: "img/news/2014/Suman Agarwal-Midday-Mum-Pg07-The Pregnant working woman's guide-07.01.14.jpg"
      //     }, {
      //         title: "Feb - mumbai.burrp.com",
      //         image: "img/news/2014/Suman Agarwal-mumbai.burrp.com-Timeless Radiance-14.02.14.jpg"
      //     }, {
      //         title: "Feb - mumbaimag.com",
      //         image: "img/news/2014/Suman Agarwal-mumbaimag.com-Timeless Radiance, A Skincare And Fitness Panel Discussion At Serafina-18.02.14.jpg"
      //     }, {
      //         title: "Feb - Sharir O Sasthya, Kolkata",
      //         image: "img/news/2014/Suman Agarwal-Sharir O Sasthya-Kol-Pg 64- 65-Let you grow old  but have a balanced diet and be young says Neutritionist   Suman Agarwal-15.02.14.jpg"
      //     }, {
      //         title: "Feb - Women's Health National",
      //         image: "img/news/2014/Suman Agarwal-Women's Health-National-Pg94-95-Control Your Cravings-Jan-Feb'14 .jpg"
      //     }, {
      //         title: "Feb - Women's Health National",
      //         image: "img/news/2014/Suman Agarwal-Women's Health-National-Pg96-Control Your Cravings-Jan-Feb'14.jpg"
      //     }]
      // }];

    $scope.activeTab = function(data) {
      NavigationService.getNews(data, function(data) {
        $scope.news = data;
      })
    };
  })
  .controller('SuccessStoriesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("successstories");
    $scope.menutitle = NavigationService.makeactive("Success Stories");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.reads = [{
      name: "Chetna Mehra",
      desc: "I started my plan in November and opted for 5kg Program. Vaishali has been extremely helpful to me in achieving this goal. Anytime of my day she was reachable and she never stopped me from eating anything. I have enjoyed this diet so much that, I wish to continue and lose further 5kgs. SelfCare is awesome! And I have recommended all my friends and family to come here.  Never thought that losing weight will be so much fun.",
      image: "img/stories/chetna.png",
      weight: "5.3"
    }, {
      name: "Kanchan Daswani",
      desc: "Self Care has changed my life and made me very principled towards my eating habits. I was confused and did not know how or what to do to lose weight. Self Care showed me way to <b>lose naturally</b> by eating everything in limit. I have lost <b>10kgs</b> and I am feeling <b>great, happy, confident, and very healthy.</b> One of the best thing to happen to me recently was to come to SelfCare. Thanks to Vaishali who is extremely helpful and now I consider her a friend. <b>Thanks to SelfCare.</b>",
      image: "img/stories/kanchan.png",
      weight: "10"
    }, {
      name: "Kiran Mandawewala",
      desc: "The weight loss program was very systematic. After losing 17kgs I feel energetic, confident and I have received so many compliments that it has added to my energy level. Nobody would believe that I have lost so much weight and that too with proper eating. I never starved myself and was always full at all times.",
      image: "img/stories/kiran.png",
      weight: "17"
    }, {
      name: "Neeta Lulla",
      desc: "<b>Persistence</b> and <b>diligent</b> towards complete health and nutrition of their client. <b>Suman</b> you are fabulous. Thank you for all that you have done for me. God Bless. ",
      image: "img/stories/neeta.png",
      weight: ""
    }, {
      name: "Renu Ruia",
      desc: "I was under Mona. She was very encouraging, very soft, sweet and flexible. Suman Mam was also very <b>encouraging and appreciative.</b> Even at times when I have not lost my weight. <b>They both never got upset and always said koi baat nahi, you are doing very well. I never starved.</b> ",
      image: "img/stories/renu.png",
      weight: "10"
    }, {
      name: "Sanjay Daswani",
      desc: "I am pleasantly surprised to lose over <b>10 kilos</b> in less than 3 months. SelfCare has taught me a <b>healthy way to lose weight and keep fit.</b> Never in my wildest dreams did I think that I would be eating so many meals a day and <b>still be losing weight</b> consistently week after week. <b>I thank Vaishali and Suman for helping me get to my target.</b>",
      image: "img/stories/sanjay.png",
      weight: "15"
    }, {
      title: "Transition",
      name: "Siddhart Banka",
      location: "Mumbai, India",
      desc: "I started working out (Walking), <b>eating healthy food,</b> started living a <b>healhty life.</b> Great center with all lovely people around. Dieticians are very good. <b>Allow full meal and no strict diet</b> like others do it so a better program then others.",
      image: "img/stories/siddhart.png",
      weight: "15"
    }, {
      name: "Smita Vijay",
      desc: "I’ve tried and failed many weight loss programmes before, and now losing <b>20kgs</b> seemed an impossible task for me. I didn’t believe I that I will really lose any of pregnancy weight. But with <b>SelfCare</b> it was not only possible, but an easy process. It was a long distance programme, but Vishakha with her personal attention has been a <b>great motivator both to exercise and keep a tab on my plate!</b>",
      image: "img/stories/smita.png",
      weight: "20"
    }, {
      title: "In the journey of diet she has ensured to keep my boost at its peak and never let me feel low or disappointed.",
      name: "Sonali Parekh",
      location: "Mumbai, India",
      desc: "My consulting nutritionist Vaishali is full co-operative, patient and an ever-boosting person. <b>In the journey of diet she has ensured to keep my boost at its peak and never let me feel low or disappointed</b>. When you diet you need to be pepped up always and Suman and Vaishali are excellent. It was a Happy journey with Suman",
      image: "img/stories/12.png",
      weight: "5"
    }, {
      name: "Amit Garg",
      desc: "“<b>Started looking 10 years younger</b>” is the quote I have heard from couple of colleagues over last week or so, lost around 6kgs in 2 months but physically impact is more significant.<b> Good experience for me.</b> The best part about the program was <b>the diet plan proposed was not less and quiet apt.</b> The key was <b>mix of diet and periodicity of food intake.</b> ",
      image: "img/stories/amit.png",
      weight: "6"
    }, {
      title: "The diet cookbook is also very helpful and the recipes are delicious.",
      name: "Ameesha Tibrewaal",
      location: "Mumbai, India",
      desc: "The first week was the most difficult but as I progressed into the program the hunger pangs became non-existent and I actually could see my body shrinking. <b>The diet cookbook is also very helpful and the recipes are delicious.</b> Amazing program and I am very pleased with the results.",
      image: "img/stories/2.png",
      weight: "5"
    }, {
      name: " Jay Shah",
      desc: "Thank you Nidhi! You were really patient with my irregular attendance. The program given by you was apt for my hectic lifestyle.",
      image: "img/stories/jay.png",
      weight: "5"
    }, {
      name: "L. Vishwanathan",
      desc: "I had joined better health and immunity program of SelfCare for a two month program. Due to this program I have been able to maintain good and active lifestyle. In the process the diets they have recommended can be maintained throughout life. I would recommend everyone to go through the program of SelfCare. ",
      image: "img/stories/vishwanathan.png",
      weight: "5"
    }, {
      name: "Mansi Sanghavi",
      desc: "Very good and enriching experience. Patiently dealt with great diet. Didn’t starve myself and was losing weight at every stage. Even when I didn’t lose weight in the stipulated time, SelfCare kept holding my hand till I reached my goal. Overall great experience and worth every penny.",
      image: "img/stories/mansi.png",
      weight: "10"
    }, {
      name: "Unnati Divecha",
      desc: "I had a great experience here – losing 10kgs in 6 months, the healthy way! Vibha has been very supportive, persuasive, and understanding! <b>The diet and understanding has become a way of life for me now.</b> Feels great!",
      image: "img/stories/unnati.png",
      weight: "10"
    }, {
      title: "I never starved myself and I was always full at all times.",
      name: "Kiran Mandawewala",
      location: "Jamnagar, India",
      desc: "The weight loss program was very systematic. After losing 17 kgs i feel energetic, confident and I have received so many compliments that it has added to my energy level. Everybody in Jamnagar has found a tremendous change in me, people here can’t believe that there can be so many significant changes in my body measurements with systematic diet control. Nobody would believe that I have lost so much weight and that too with proper eating. I never starved myself and I was always full at all times.",
      image: "img/stories/3.jpg",
      weight: "17"
    }, {
      title: "I have actually enjoyed losing weight.",
      name: "Bela Zaveri",
      location: "Mumbai, India",
      desc: "Feeling more energetic, light and increase in capacity.<br>I have actually enjoyed losing weight. Have never felt deprived about my food intake of course credit goes to my mentor Meloni Shah & above all Sumanji. Especially for extending my program when I was physically not doing well I would love to continue once i am back from my holiday. Thanks to all and of course heartiest thanks to my Gurdev to showing his grace and making me believe in myself and making me lead the target.",
      image: "img/stories/4.jpg",
      weight: "14"
    }, {
      title: "Balance of vital food pyramid",
      name: "Dr Jayprakash Suru",
      location: "Mumbai, India",
      desc: "Excellent program. No weight losing medications given. Balance of vital food pyramid.",
      image: "img/stories/5.png",
      weight: "9"
    }, {
      title: "I know I will be able to maintain this weight because I understand my body so much better.",
      name: "Dr. Savari Desai",
      location: "Mumbai, India",
      desc: "I came to meet Suman (after reading the website) reluctantly – pretty convinced that I was NOT going to join.  Suman was frank and reassuring to my post partum woes!<br>So I decided to go for it – Selfcare made me realize that I was not eating correctly and that changed me! Added to the whole weight-loss process was Dipti Patole – she was my “Rock” throughout the diet process of a year. She was always there ready to answer questions – push me when I needed it and tell me to chill out when I overdid it! I am so very glad I came here! I know I will be able to maintain this weight because I understand my body so much better. Suman, the entire Selfcare team…and of course the gorgeous Dipti – Thanks! Love you guys. Will keep coming.",
      image: "img/stories/6.png",
      weight: "9"
    }, {
      title: "Best thing about her was that at every step I felt that she wants me to lose weight as much I want to",
      name: "Jina Kapadia",
      location: "Surat, India",
      desc: "Neha has been very supportive and loving throughut the course. Many times I made goofups but with her guidance she would get me back on track. Best thing about her was that at every step I felt that she wants me to lose weight as much I want to.",
      image: "img/stories/7.png",
      weight: "5"
    }, {
      title: "Felt good getting appreciated for small efforts taken when reducing even a few grams",
      name: "Liza Shah",
      location: "Antwerp, Belgium",
      desc: "Changed my concept of dieting. You can enjoy eating and at the same time reduce, condition being eating right food and balanced. Enjoyed filling up weekly chart and looked forward to giving it and waiting for an answer from Selfcare. Felt good getting appreciated for small efforts taken when reducing even a few grams. Feels nice getting into clothes that I had lost all hopes of getting into",
      image: "img/stories/8.png",
      weight: "5"
    }, {
      title: "Vaishali has been wonderful and always replied on all my queries on whats app as well",
      name: "Madu Laccwani",
      location: "Mumbai, India",
      desc: "Thank you so much. You have helped me become more fit. Vaishali has been wonderful and always replied on all my queries on whats app as well. She is involved with us and very sweet.",
      image: "img/stories/9.png",
      weight: "5"
    }, {
      title: "I did not have to cook food separately specially for myself and I could eat whatever was prepared for everyone else",
      name: "Nayna Doshi",
      location: "Hong Kong, China",
      desc: "Asmitaji was really sweet as she was always there wherever I needed her. I thoroughly enjoyed the program. I always thought that weight loss = sacrifice tasty food, but I did not have to cook food separately specially for myself and I could eat whatever was prepared for everyone else. Wherever I went I could have whatever was available, weather at a party, restaurant or at my house. My concept for weight loss has completely changed. Thank you very much",
      image: "img/stories/10.png",
      weight: "6"
    }, {
      title: "Your guidance has given me new confidence",
      name: "Shaily Bagaria",
      location: "Bangkok, Thailand",
      desc: "Thank you for all your support. Your guidance has given me new confidence. In fact I am thoroughly pleased with your program",
      image: "img/stories/11.png",
      weight: "10"
    }, {
      title: "Changed my way/ perception towards eating. I find myself balancing my food content/ sweets.",
      name: "Anand Mehta",
      location: "Mumbai, India",
      desc: "Overall the program is good. Liked the weekly appointments. Changed my way/ perception towards eating. I find myself balancing my food content/ sweets. With proteins & vitamin levels. Very friendly staff, now getting ready to commit 5 more kgs.",
      image: "img/stories/13.png",
      weight: "10"
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
  .controller('CartCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("My Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.allcart = [];
    $scope.alerts = [];
    $scope.msg = "Loading...";
    $scope.getCart = function() {
      NavigationService.showCart(function(data) {
        $scope.allcart = data;
        cart = data;
        if (data == '') {
          $scope.msg = "Your cart is empty."
        } else {
          $scope.msg = "";
        }
        $scope.totalcart = 0;
        _.each($scope.allcart, function(key) {
          $scope.totalcart = $scope.totalcart + parseInt(key.price);
          key.qty = parseInt(key.qty);
          if (!$scope.validateQuantity(key)) {
            key.exceeds = true;
          } else {
            key.exceeds = false;
          }
        })
      })
    };
    $scope.proceedToCheckout = function() {
      NavigationService.checkoutCheck(function(data) {
        if (data.value) {
          $state.go("checkout");
        } else {
          $scope.getCart();
          $scope.alerts.push({
            type: 'danger',
            msg: 'Remove out of stock items'
          });
        }
      })
    }
    $scope.validateQuantity = function(item) {
      if (parseInt(item.qty) > parseInt(item.maxQuantity)) {
        return false;
      } else {
        return true;
      }
    }
    $scope.getCart();
    $scope.updateQuantity = function(item) {
      console.log("updating");
      if (parseInt(item.qty) <= 0) {
        console.log("here");
        item.qty = 1;
      } else {
        NavigationService.addToCart({
          quantity: item.qty,
          product: item.id,
          status: "2"
        }, function(data) {
          $scope.getCart();
        });
      }
    };
    $scope.addQuantity = function(item) {
      item.qty = parseInt(item.qty);
      item.qty++;
      $scope.updateQuantity(item);
    };
    $scope.subtractQuantity = function(item) {
      if (parseInt(item.qty) <= 0) {
        console.log("in sub");
        item.qty = 1;
      } else {
        item.qty = parseInt(item.qty);
        item.qty--;
        $scope.updateQuantity(item);
      }

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
            type: 'success',
            msg: 'Removed from cart'
          });
          $scope.getCart();
        } else {
          $scope.alerts.push({
            type: 'danger',
            msg: 'Not removed from cart'
          });
        }
      })
    }
  })
  .controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("checkout");
    $scope.menutitle = NavigationService.makeactive("Checkout");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.guest = "notguest";
    $scope.guestshow = true;
    $scope.countries = countries;
    $scope.allcart = [];
    $scope.checkout = {};
    $scope.alerts = [];
    $scope.user = {};
    $scope.shippingcharges = 0;
    $scope.login = {};
    $scope.cod = false;
    $scope.placeorder = true;
    $scope.shipAtSame = false;
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
    if ($.jStorage.get("user")) {
      $scope.user = $.jStorage.get("user");
      $scope.tabs[1].active = true;
      console.log($scope.tabs);
    }
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    NavigationService.getUserById(function(data) {
      $scope.checkout = data;
    })

    $scope.getCart = function() {
      NavigationService.showCart(function(data) {
        $scope.allcart = data;
        cart = data;
        $scope.totalcart = 0;
        _.each($scope.allcart, function(key) {
          $scope.totalcart = $scope.totalcart + parseInt(key.price);
          key.qty = parseInt(key.qty);
          if (!$scope.validateQuantity(key)) {
            key.exceeds = true;
          } else {
            key.exceeds = false;
          }
        })
        $scope.totalcart = $scope.totalcart + $scope.shippingcharges;
      })
    };
    $scope.validateQuantity = function(item) {
      if (parseInt(item.qty) > parseInt(item.maxQuantity)) {
        return false;
      } else {
        return true;
      }
    }
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
    $scope.codChange = function(cod) {
      if (cod) {
        $scope.placeorder = true;
      } else {
        $scope.placeorder = false;
      }
    }
    $scope.proceedToPayment = function() {
      console.log($scope.checkout);
      if ($scope.allcart.length > 0) {
        $scope.checkout.cart = $scope.allcart;
        NavigationService.checkoutCheck(function(data) {
          if (data.value) {
            NavigationService.placeOrder($scope.checkout, function(data) {
              $scope.order = data;
              $scope.tabs[3].active = true;
            })
          }
        })
      }
    };
    $scope.sameShipping = function(data) {
      if ($scope.shipAtSame) {
        $scope.checkout.shippingline1 = data.billingline1;
        $scope.checkout.shippingline2 = data.billingline2;
        $scope.checkout.shippingline3 = data.billingline3;
        $scope.checkout.shippingcity = data.billingcity;
        $scope.checkout.shippingpincode = data.billingpincode;
        $scope.checkout.shippingstate = data.billingstate;
        $scope.checkout.shippingcountry = data.billingcountry;
      }
    };
    $scope.shippingCheck = function(check) {
      if (check) {
        $scope.shipAtSame = true;
        $scope.sameShipping($scope.checkout);
      } else {
        $scope.shipAtSame = false;
        $scope.checkout.shippingline1 = "";
        $scope.checkout.shippingline2 = "";
        $scope.checkout.shippingline3 = "";
        $scope.checkout.shippingcity = "";
        $scope.checkout.shippingpincode = "";
        $scope.checkout.shippingstate = "";
        $scope.checkout.shippingcountry = "";
      }
    };
    $scope.proceedToShipping = function(input, status, formValidate) {
      if (!status) {
        if (formValidate.email.$valid) {
          $scope.checkout.email = input.email;
          console.log($scope.checkout);
          $scope.tabs[1].active = true;
        } else {
          $scope.alerts.push({
            type: 'danger',
            msg: 'Please enter all details'
          });
        }
      } else {
        if (formValidate.email.$valid && formValidate.password.$valid) {
          NavigationService.loginuser(input, function(data) {
            if (data.value == false) {} else {
              $.jStorage.set("user", data);
              $scope.checkout = $.jStorage.get("user");
              window.location.reload();
            }
          });
        } else {
          $scope.alerts.push({
            type: 'danger',
            msg: 'Please enter all details'
          });
        }
      }
    }
    $scope.proceedToSummary = function(input, formValidate, formValidateB, formValidateS) {
      console.log(input);
      if (formValidate.$valid && formValidateB.$valid && formValidateS.$valid) {
        if (!$scope.guestshow) {
          $scope.checkout.email = $scope.login.email;
          console.log($scope.guestshow);
        }
        console.log($scope.checkout);
        $scope.tabs[2].active = true;
        $scope.getCart();
      } else {
        $scope.alerts.push({
          type: 'danger',
          msg: 'Please enter all details'
        })
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
    $scope.imporvementsculp = [
      'img/sculpting/sculpslider1.jpg',
      'img/sculpting/sculpslider2.jpg',
      'img/sculpting/sculpslider3.jpg',
      'img/sculpting/sculpslider4.jpg',
      'img/sculpting/sculpslider5.jpg',
      'img/sculpting/sculpslider6.jpg',
      'img/sculpting/sculpslider7.jpg',
      'img/sculpting/sculpslider8.jpg',
    ];
    $scope.applicators = [{
      img: "img/sculpting/coolmax.jpg",
      heading: "Large Applicator - Cool Max",
      descp: "We call this applicator the 'Debulker'. We use this applicator to treat belly hangover and large areas on abs to maximize fat reduction."
    }, {
      img: "img/sculpting/coolmax.jpg",
      heading: "Medium Applicator - Cool Smooth",
      descp: "We use this applicator to treat dense fat. This non-suction applicator is our Favorite! It can be used for contouring outer thighs."
    }, {
      img: "img/sculpting/coolmax.jpg",
      heading: "Small Applicator - Cool Core",
      descp: "Cool Core applicator we use to sculpt the lower and upper abdomen of the body. Definitely the most commonly used applicator. You can transform your stomach in no time."
    }];
    $scope.faqsculp = [{
      qts: "Am I a good candidate?",
      descp: "Good candidates have noticeable bulges in certain areas they’d like to get rid of. The CoolSculpting fat reduction procedure is specifically designed for those who have unwanted fat that resists diet and exercise. Unlike gastric bypass surgery, the CoolSculpting procedure is not a weight loss solution for people who are obese. It is, however a non-surgical alternative to liposuction. Request a one-on-one consultation with us to determine if the CoolSculpting procedure is right for you."
    }, {
      qts: "How much does the CoolSculpting procedure cost?",
      descp: "The price for CoolSculpting procedures varies depending on your areas of concern, the number of sessions needed, and your ultimate goals. We will help create a customized treatment plan, in person, that’s tailored to your body, your goals, and your budget."
    }, {
      qts: "How long is each session? How many sessions will I need?",
      descp: "We will help you create an individualized treatment plan tailored to your specific goals. The length of your CoolSculpting session will vary depending on the number of areas being treated during one visit. We may schedule additional sessions in order to meet your goals."
    }, {
      qts: "Where does the fat go? Are the results permanent?",
      descp: "Once the treated fat cells are crystallized (frozen), your body processes the fat and eliminates these dead cells. Once the treated fat cells are gone, they’re gone for good."
    }, {
      qts: "What does it feel like?",
      descp: "As the cooling begins during the first few minutes, you will feel pressure and intense cold. This soon dissipates. Many people read, watch videos, work on their laptop, or even take a nap during their treatment."
    }, {
      qts: "Is the CoolSculpting procedure safe?",
      descp: "The CoolSculpting procedure is FDA-cleared for the flank (love handles), abdomen, and thigh. With over one million CoolSculpting treatments performed worldwide, it is proven to be a safe and effective treatment for non-surgical fat reduction."
    }, {
      qts: "Are there any side effects?",
      descp: "During the procedure you may experience deep pulling, tugging, pinching, numbness or discomfort. Following the procedure, typical side effects include temporary numbness, redness, swelling, bruising, firmness, tingling, stinging and pain. Rare side effects may also occur. The CoolSculpting procedure is not for everyone. You should not have the CoolSculpting procedure if you suffer from cryoglobulinemia or paroxysmal cold hemoglobinuria. The CoolSculpting procedure is not a treatment for obesity. As with any medical procedure, ask us if the CoolSculpting procedure is right for you."
    }, {
      qts: "Can I return to normal activities after my treatment?",
      descp: "Yes, you can. The CoolSculpting procedure is completely non-surgical, so typically you can return to normal activities immediately. Often times, patients return to work after their CoolSculpting session is over."
    }, {
      qts: "When will I see results?",
      descp: "You may start to see changes as quickly as three weeks after your treatment, and will experience the most dramatic results after two months. But your body will still flush out fat cells and continues doing so for up to four to six months after treatment."
    }, {
      qts: "Do I need to take special supplements or follow a strict diet and exercise program?",
      descp: "No supplements or pills are required and you do not have to adopt new diet and exercise habits. Many patients feel more motivated to take care of themselves after their CoolSculpting treatment. It is as if they get a second lease on their body and want to start anew again by taking even better care of themselves."
    }, {
      qts: "What happens if I gain weight down the road?",
      descp: "Many people, after seeing the results from their CoolSculpting procedure, take even better care of themselves. However, if you do gain weight, you may gain it evenly all over your body, not just in the treated areas."
    }];
  })
  .controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("blog");
    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.blog = {};
    $scope.blog.search = "";
    $scope.pageno = 0;
    $scope.tag = "";
    $scope.blogpage = [];
    $scope.tagmsg = "Loading...";
    var lastpage = 0;
    $scope.reloadBlog = function() {
      if (lastpage >= $scope.pageno) {
        ++$scope.pageno;
        NavigationService.getBlog($scope.blog.search, $scope.pageno, $scope.tag, function(data) {
          _.each(data.queryresult, function(n) {
            $scope.blogpage.push(n);
          })
          lastpage = data.lastpage;
        });
      }

    }
    $scope.reloadBlog();
    $scope.loadBlog = function() {
      $scope.reloadBlog();
    }
    NavigationService.getPopularBlog(function(data) {
      $scope.popularpost = data;
    })
    NavigationService.getTag(function(data) {
      $scope.tagger = data;
      if (data == '') {
        $scope.tagmsg = "No tags";
      } else {
        $scope.tagmsg = "";
      }
    })
    $scope.searchBlog = function() {
      $scope.pageno = 0;
      $scope.blogpage = [];
      $scope.reloadBlog();
    }
    $scope.tagClicked = function(tag) {
        if (tag == "") {
          $scope.tag = "";
        } else {
          $scope.tag = tag.name;
        }
        $scope.pageno = 0;
        $scope.blogpage = [];
        $scope.reloadBlog();
      }
      // $scope.blogpage = [{
      //   img: "img/blog/post1.jpg",
      //   title: "Your Questions, Answered",
      //   descp: "Q1. How much does the CoolSculpting procedure cost? Ans. The price for CoolSculpting procedures varies depending on your areas of concern, the number of sessions needed, and your ultimate goals..."
      // }, {
      //   img: "img/blog/post2.jpg",
      //   title: "Sparkle This Season",
      //   descp: "The first monsoon showers brought back the sparkling glow of the city by beating the scorching heat and pollution of summer. But, are these droplets going to help our skin glow? They don’t seem..."
      // }, {
      //   img: "img/blog/post3.jpg",
      //   title: "Cranberry Juice",
      //   descp: "Cranberry Juice Fights Heart Disease  Berries’ Antioxidants Raise “Good” Cholesterol, Lower “Bad”   – Drink up — cranberry juice, that is. Cranberry juice loads the blood with lots of disease-fighting antioxidants..."
      // }, {
      //   img: "img/blog/post4.jpg",
      //   title: "Lemons",
      //   descp: "The first monsoon showers brought back the sparkling glow of the city by beating the scorching heat and pollution of summer. But, are these droplets going to help our skin glow? They don’t seem..."
      // }, {
      //   img: "img/blog/post5.jpg",
      //   title: "Energy Expenditure In Exercise",
      //   descp: "Our body needs a constant supply of energy to be able to carry out everyday tasks. When we exercise the rate at which our body uses energy is higher, and the efficiency of the energy supply is one ..."
      // }, {
      //   img: "img/blog/post6.jpg",
      //   title: "Pump Up Your Workout",
      //   descp: "We believe that choice of music will differ for everyone. Here are some of our personal favorites that will pump up your workout Greyhound- Swedish house mafia (original mix) The workout..."
      // }];
      // $scope.popularpost = [{
      //   img: "img/blog/popular/post1.jpg",
      //   title: "Dhruv Kaji"
      // }, {
      //   img: "img/blog/popular/post2.jpg",
      //   title: "Juice it up or not"
      // }, {
      //   img: "img/blog/popular/post3.jpg",
      //   title: "White Bread vs Brown Bread"
      // }, {
      //   img: "img/blog/popular/post4.jpg",
      //   title: "The Complete PLate Theory"
      // }, {
      //   img: "img/blog/popular/post5.jpg",
      //   title: "Bearing the Brunt of Heartburn"
      // }];
      // $scope.tagger = [{
      //   name: "acidity",
      //   link: ""
      // }, {
      //   name: "benefits",
      //   link: ""
      // }, {
      //   name: "bhelpuri",
      //   link: ""
      // }, {
      //   name: "body",
      //   link: ""
      // }, {
      //   name: "Bread",
      //   link: ""
      // }, {
      //   name: "burger",
      //   link: ""
      // }, {
      //   name: "buttermilk",
      //   link: ""
      // }, {
      //   name: "calories",
      //   link: ""
      // }, {
      //   name: "carbs",
      //   link: ""
      // }, {
      //   name: "carrot",
      //   link: ""
      // }];
  })
  .controller('PregnancyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("pregnancy");
    $scope.menutitle = NavigationService.makeactive("Pregnancy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.healthdetail = [{
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/marathon.png",
      caption: "Marathon / Sports Nutrition",
      link: "marathon"
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
      img: "img/health/kids.png",
      caption: "Weight loss for kids",
      link: "weightlossforkids"
    }, {
      img: "img/health/weightloss.png",
      caption: "Weightloss with health gain",
      link: "weightlosswithhealthgain"
    }, {
      img: "img/health/lactation.png",
      caption: "Post pregnancy weight loss with lactation",
      link: "postpregnancy"
    }, {
      img: "img/health/weight-loss-pcos.png",
      caption: "weightloss with PCOS and Insulin Resistence",
      link: "weightlosswithpcos"
    }, {
      img: "img/health/ageing.png",
      caption: "Healthy aging",
      link: "healthyaging"
    }, {
      img: "img/health/pregnancy.png",
      caption: "pregnancy",
      link: "pregnancy"
    }, {
      img: "img/health/weight-gain.png",
      caption: "weight gain",
      link: "weightgain"
    }, {
      img: "img/health/ailment-control.png",
      caption: "ailment control",
      link: "ailmentcontrol"
    }, {
      img: "img/health/cancer.png",
      caption: "Cancer support",
      link: "cancersupport"
    }];
    $scope.healthdetail = _.chunk($scope.healthdetail, 3);
  })
  .controller('BlogDetailCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("blogdetail");
    $scope.menutitle = NavigationService.makeactive("Blog Detail");
    TemplateService.title = $scope.menutitle;
    TemplateService.footermenu = "";
    $scope.navigation = NavigationService.getnav();

    function successCallback (data,status) {
      $scope.blog = data;
      $scope.blog.tagsArr = data.tags.split(",");
    }
    NavigationService.getBlogById($stateParams.id,successCallback);

    $scope.blogtags = [{
      tag: "food",
      link: ""
    }, {
      tag: "fruits",
      link: ""
    }, {
      tag: "lemon honey water",
      link: ""
    }, {
      tag: "monsoon",
      link: ""
    }, {
      tag: "skin",
      link: ""
    }, {
      tag: "skin friendly",
      link: ""
    }];
    $scope.popularpost = [{
      img: "img/blog/popular/post1.jpg",
      title: "Dhruv Kaji"
    }, {
      img: "img/blog/popular/post2.jpg",
      title: "Juice it up or not"
    }, {
      img: "img/blog/popular/post3.jpg",
      title: "White Bread vs Brown Bread"
    }, {
      img: "img/blog/popular/post4.jpg",
      title: "The Complete PLate Theory"
    }, {
      img: "img/blog/popular/post5.jpg",
      title: "Bearing the Brunt of Heartburn"
    }];
    $scope.tagger = [{
      name: "acidity",
      link: ""
    }, {
      name: "benefits",
      link: ""
    }, {
      name: "bhelpuri",
      link: ""
    }, {
      name: "body",
      link: ""
    }, {
      name: "Bread",
      link: ""
    }, {
      name: "burger",
      link: ""
    }, {
      name: "buttermilk",
      link: ""
    }, {
      name: "calories",
      link: ""
    }, {
      name: "carbs",
      link: ""
    }, {
      name: "carrot",
      link: ""
    }];
  })
  .controller('RecipesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("recipes");
    $scope.menutitle = NavigationService.makeactive("Recipes");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.recipedetail = [
      {
        img: "img/recipes/recipe1.jpg",
        name: "Mushroom & Tofu Burger"
      },
      {
        img: "img/recipes/recipe2.jpg",
        name: "Mushroom Omelette"
      },
      {
        img: "img/recipes/recipe3.jpg",
        name: "Pancakes with red sauce"
      },
      {
        img: "img/recipes/recipe2.jpg",
        name: "Mushroom Omelette"
      },
       {
          img: "img/recipes/recipe1.jpg",
          name: "Mushroom & Tofu Burger"
        },
        {
            img: "img/recipes/recipe3.jpg",
            name: "Pancakes with red sauce"
          }
    ];
  })
  .controller('RecipedetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("recipedetail");
    $scope.menutitle = NavigationService.makeactive("Recipedetail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    }
    $scope.recipe = [
      "img/recipes/baingan.jpg",
      "img/recipes/baingan.jpg",
      "img/recipes/baingan.jpg",
      "img/recipes/baingan.jpg"
    ];
    $scope.recipees = [{
      img: "img/recipes/nachos.jpg",
      name: "nachos"
    }, {
      img: "img/recipes/bread.jpg",
      name: "bread"
    }, {
      img: "img/recipes/makai.jpg",
      name: "makai"
    }, {
      img: "img/recipes/bread.jpg",
      name: "bread"
    }, {
      img: "img/recipes/makai.jpg",
      name: "makai"
    }, {
      img: "img/recipes/nachos.jpg",
      name: "nachos"
    }];
    $scope.recipees = _.chunk($scope.recipees, 3);
    console.log($scope.recipees);
  })
  .controller('NutrigenomicsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("nutrigenomics");
    $scope.menutitle = NavigationService.makeactive("Nutrigenomics");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.nutrigenomics = [{
      qts: "What Will This Analysis Do For Me?",
      ans: "You will know where your potential genetic weaknesses are, so you can put preventative strategies into place"
    }, {
      qts: "What Will This Analysis Do For Me?",
      ans: "You will know where your potential genetic weaknesses are, so you can put preventative strategies into place"
    }];
  })
  .controller('StatsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("knowyourstats");
    $scope.menutitle = NavigationService.makeactive("Stats");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.oneAtATime = true;
    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  })
  .controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contactus");
    $scope.menutitle = NavigationService.makeactive("Contact Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.footermenu = "";
    $scope.alerts = [];
    $scope.contact = {};

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
    $scope.contactUs = function(input, formValidate) {
      console.log(input);
      console.log(formValidate);
      if (formValidate.$valid) {
        NavigationService.contactSubmit(input, function(data) {
          if (data.value == true) {
            $scope.alerts.push({
              type: 'success',
              msg: 'Your enquiry has been sent'
            });
            $scope.contact = {};
            formValidate.firstname.$touched = false;
          } else {
            $scope.alerts.push({
              type: 'danger',
              msg: 'Unable to send enquiry'
            });
          }
        });
      } else {
        $scope.alerts.push({
          type: 'danger',
          msg: 'Please input all details'
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
  $scope.categories = [];
  NavigationService.getCategory(function(data) {
    $scope.categories = data;
  })
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
  $scope.alreadyReg = false;
  $scope.enablelogout = false;
  $scope.invalidinput = false;
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
    $scope.alreadyReg = false;
    if (!accept) {
      $scope.acceptValidate = true;
    } else {
      if (formValidate.$valid) {
        NavigationService.signup(input, function(data) {
          if (data.value == false) {
            console.log("herer");
            $scope.alreadyReg = true;
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
          $scope.invalidinput = true;
        } else {
          console.log(data);
          $.jStorage.set("user", data);
          window.location.reload();
        }
      });
    }
  };

  $scope.facebookLogin = function() {
    window.open(mainurl + 'hauth/login/Facebook?returnurl=http://wohlig.co.in/selfcare', '_self', 'location=no');
  }
  $scope.googleLogin = function() {
    window.open(mainurl + 'hauth/login/Google?returnurl=http://wohlig.co.in/selfcare', '_self', 'location=no');
  }

  $scope.health = [{
    name: "Cholesterol",
    link: "#/"
  }, {
    name: "High Blood Pressure",
    link: "#/"
  }, {
    name: "Diabetes",
    link: "#/"
  }, {
    name: "Ailment Control",
    link: "#/ailmentcontrol"
  }, {
    name: "Weight Management",
    link: "#/weightmanagement"
  }];

  $scope.openForgot = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/forgotpopup.html',
      controller: 'headerctrl'
    })
  }
});
