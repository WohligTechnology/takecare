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
    name: "Health Packages",
    classis: "active",
    link: "#/healthpackages",
    subnav: []
  }, {
    name: "Health Products",
    classis: "active",
    link: "#/healthproducts",
    subnav: []
  }, {
    name: "Health Kit",
    classis: "active",
    link: "#/",
    subnav: []
  }, {
    name: "Cool Sculpting",
    classis: "active",
    link: "#/coolsculpting",
    subnav: []
  }, {
    name: "Nutrigenomics",
    classis: "active",
    link: "#/nutrigenomics",
    subnav: []
  }, {
    name: "Success Stories",
    classis: "active",
    link: "#/successstories",
    subnav: []
  }, {
    name: "Blog",
    classis: "active",
    link: "#/bloglisting",
    subnav: []
  }, {
    name: "News",
    classis: "active",
    link: "#/news",
    subnav: []
  }, {
    name: "FAQ",
    classis: "active",
    link: "#/faq",
    subnav: []
  }, {
    name: "Careers",
    classis: "active",
    link: "#/",
    subnav: []
  }, {
    name: "Contact",
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
      $http.get(adminurl + 'getSlide').success(callback);
    },
    getTestimonial: function(callback) {
      $http.get(adminurl + 'getTestimonial').success(callback);
    },
    getCategory: function(callback) {
      $http.get(adminurl + 'getCategory').success(callback);
    },
    getCategoryById: function(categoryid, callback) {
      $http.get(adminurl + 'getCategoryById?id=' + categoryid).success(callback);
    },
    getSubCategory: function(categoryid, callback) {
      $http.get(adminurl + 'getSubCategory?id=' + categoryid).success(callback);
    },
    getProductByCategory: function(request, callback) {
      $http.get(adminurl + 'getProductByCategory?categoryid=' + request.categoryid + '&subcategories=' + request.subcategories).success(callback);
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
