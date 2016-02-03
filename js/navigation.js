// var mainurl = "http://wohlig.io:81/callApi/takecare/";
// var mainurl = "http://moviewsapp.com/selfcare/index.php/";
// var mainurl = "http://localhost/selfback/index.php/";
var mainurl = "http://192.168.0.118/selfbackend/index.php/";
// var imgurl = "http://moviewsapp.com/selfcare/uploads/";
// var imgurl = "http://localhost/selfback/uploads/";
var imgurl = "http://192.168.0.118/selfbackend/uploads/";
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
    link: "#/healthproducts/1",
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
    link: "#/blog",
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
    name: "Contact",
    classis: "active",
    link: "#/contactus",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    showCart: function (callback) {
        $http.get(adminurl + 'showCart').success(callback);
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
    checkoutCheck:function(callback){
      $http.get(adminurl+'checkoutCheck').success(callback);
    },
    logout:function(callback){
      $http.get(adminurl+ 'logout').success(callback);
    },
    signup:function(request,callback){
      console.log(request);
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
    placeOrder:function(request,callback){
      $http({
				url: adminurl + 'placeOrder',
				method: 'POST',
				data: request
			}).success(callback);
    },
    addToCart: function (cart, callback) {
        return $http({
            url: adminurl + "addToCart",
            method: "POST",
            data: {
                "product": cart.product,
                "quantity": cart.quantity,
                "json": "",
                "status":cart.status
            }
        }).success(callback);
    },
    removeFromCart: function (cart, callback) {
      console.log(cart);
        return $http({
            url: adminurl + "removeFromCart",
            method: "POST",
            data: {
                "cart": cart.id
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
    getSubPackages:function(callback){
        $http.get(adminurl + 'getSubPackages').success(callback);
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
