// var mainurl = "http://wohlig.io:81/callApi/takecare/";
var mainurl = "http://wohlig.co.in/selfbackend/index.php/";
// var mainurl = "http://localhost/selfback/index.php/";
var imgurl = "http://wohlig.co.in/selfbackend/uploads/";
// var imgurl = "http://localhost/selfback/uploads/";
// var imgurl="";

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
    getProductDetail: function(productid, callback) {
      $http.get(adminurl + 'getProductDetail?id=' + productid).success(callback);
    },
    getRelatedProduct: function(productid, callback) {
      $http.get(adminurl + 'getRelatedProduct?id=' + productid).success(callback);
    },
    getSubCategory: function(subcategoryid, callback) {
      $http.get(adminurl + 'getSubCategory?id=' + subcategoryid).success(callback);
    },
    getProductsByCategory: function(request, callback) {
      $http.get(adminurl + 'getProductsByCategory?categoryid=' + request.categoryid + '&subcategories=' + request.subcategories).success(callback);
    },
    logout:function(callback){
      $http.get(adminurl+ 'logout').success(callback);
    },
    signup:function(request,callback){
      $http({
				url: adminurl + 'signup',
				method: 'POST',
				data: {
					"firstname": request.firstname,
					"lastname": request.lastname,
          "email":request.email,
          "password":request.password
				}
			}).success(callback);
    },
    subscribe:function(request,callback){
      $http.get(adminurl + 'subscribe?email=' + request.email ).success(callback);
    },
    loginuser:function(request,callback){
      $http({
				url: adminurl + 'loginuser',
				method: 'POST',
				data: {
          "email":request.email,
          "password":request.password
				}
			}).success(callback);
    },
    contactSubmit:function(request,callback){
      $http({
				url: adminurl + 'contactSubmit',
				method: 'POST',
				data: {
					"firstname": request.firstname,
					"lastname": request.lastname,
          "email":request.email,
          "mobile":request.mobile,
          "message":request.message
				}
			}).success(callback);
    },
    askSumanSubmit:function(request,callback){
      $http({
				url: adminurl + 'askSumanSubmit',
				method: 'POST',
				data: {
					"category": request.category,
					"name": request.name,
          "email":request.email,
          "question":request.question
				}
			}).success(callback);
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
