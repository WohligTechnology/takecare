var mainurl = "http://wohlig.io:81/callApi/takecare/";
var adminurl = mainurl + "json/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home",
    subnav: []
  }, {
    name: "About Us",
    classis: "active",
    link: "#/aboutus",
    subnav: []
  }, {
    name: "Health Products",
    classis: "active",
    link: "#/healthproducts",
    subnav: []
  }, {
    name: "Health Packages",
    classis: "active",
    link: "#/healthpackages",
    subnav: []
  }, {
    name: "Health Management",
    classis: "active",
    link: "#/healthmanagement",
    subnav: []
  }, {
    name: "Weight Loss",
    classis: "active",
    link: "#/weightloss",
    subnav: []
  }, {
    name: "Image Consulting",
    classis: "active",
    link: "#/imageconsulting",
    subnav: []
  }, {
    name: "Product Category",
    classis: "active",
    link: "#/productcategory",
    subnav: []
  }, {
    name: "Product Detail",
    classis: "active",
    link: "#/productdetail",
    subnav: []
  }, {
    name: "FAQ",
    classis: "active",
    link: "#/faq",
    subnav: []
  }, {
    name: "Meet Suman Agarwal",
    classis: "active",
    link: "#/meet",
    subnav: []
  }, {
    name: "News",
    classis: "active",
    link: "#/news",
    subnav: []
  }, {
    name: "Success Stories",
    classis: "active",
    link: "#/about",
    subnav: []
  }, {
    name: "My Cart",
    classis: "active",
    link: "#/cart",
    subnav: []
  }, {
    name: "Checkout",
    classis: "active",
    link: "#/checkbox",
    subnav: []
  }, {
    name: "Team",
    classis: "active",
    link: "#/team",
    subnav: []
  }, {
    name: "Contact Us",
    classis: "active",
    link: "#/contactus",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    getSlide: function(callback) {
      console.log(adminurl);
      $http.get(adminurl + 'getSlide1').success(callback);
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  }
});
