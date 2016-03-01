var Glo =  {};

var mainurl = "http://moviewsapp.com/selfcare/index.php/";
var imgurl = "http://moviewsapp.com/selfcare/uploads/";


// if(!isproduction)
// {
//   mainurl = "http://192.168.0.123/selfbackend/index.php/";
//   imgurl = "http://192.168.0.123/selfbackend/uploads/";
// }


var cart = [];

var adminurl = mainurl + "json/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home",
    lineClass: 'liner',
    subnav: []
  }, {
    name: "Overview",
    classis: "active",
    link: "",
    lineClass: 'liner',
    nocursor: "no-pointer",
    subnav: [{
      name: "About Selfcare",
      classis: "active",
      link: "#/aboutus"
    }, {
      name: "Meet Suman",
      classis: "active",
      link: "#/meet"
    }, {
      name: "Meet The Team",
      classis: "active",
      link: "#/team"
    }, {
      name: "Selfcare 'TV'",
      classis: "active",
      link: "#/selfcaretv"
    }, ]
  }, {
    name: "Health Packages",
    classis: "active",
    link: "",
    lineClass: 'liner',
    nocursor: "no-pointer",
    subnav: [{
      name: "Weight Loss",
      classis: "active",
      link: "#/weightmanagement"
    }, {
      name: "Health Management",
      classis: "active",
      link: "#/healthmanagement"
    }, ]
  }, {
    name: "Health Products",
    classis: "active",
    link: "",
    lineClass: 'liner',
    nocursor: "no-pointer",
    subnav: [{
      name: "Snacks & Munchies",
      classis: "active",
      link: "#/healthproducts/1"
    }, {
      name: "Vitamins & Minerals",
      classis: "active",
      link: "#/healthproducts/2"
    }, {
      name: "Proteins Supplements",
      classis: "active",
      link: "#/healthproducts/3"
    }, {
      name: "Books & Gadgets",
      classis: "active",
      link: "#/healthproducts/4"
    }, ]
  }, {
    name: "Health Kit",
    classis: "active",
    link: "",
    lineClass: 'liner',
    nocursor: "no-pointer",
    subnav: [{
      name: "Calorie Meter (Coming Soon)",
      classis: "active",
      link: "",
      nocursor: "no-pointer"
    }, {
      name: "Recipes",
      classis: "active",
      link: "#/recipes"
    }, {
      name: "Restaurant Menus (Coming Soon)",
      classis: "active",
      link: "",
      nocursor: "no-pointer"
    }, ]
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
    name: "Image Consulting",
    classis: "active",
    link: "#/imageconsulting",
    lineClass: 'liner',
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
    name: "Careers",
    classis: "active",
    link: "#/careers",
    subnav: []
  }, {
    name: "Contact us",
    classis: "active",
    link: "#/contactus",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    showCart: function(callback) {
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
    authenticate: function(callback) {
      $http.get(adminurl + 'authenticate').success(callback);
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
    getPopularBlog: function(callback) {
      $http.get(adminurl + 'popularPost').success(callback);
    },
    getTag: function(callback) {
      $http.get(adminurl + 'getAllTags').success(callback);
    },
    getSubCategory: function(subcategoryid, callback) {
      $http.get(adminurl + 'getSubCategory?id=' + subcategoryid).success(callback);
    },
    getOrder: function(orderid, callback) {
      $http.get(adminurl + 'getorderbyorderid?id=' + orderid).success(callback);
    },
    getPlansById: function(planId, callback) {
      $http.get(adminurl + 'getPlans?id=' + planId).success(callback);
    },
    getProductsByCategory: function(request, callback) {
      $http.get(adminurl + 'getProductsByCategory?categoryid=' + request.categoryid + '&subcategories=' + request.subcategories + '&pageno=' + request.pageno + '&maxrow=20').success(callback);
    },
    checkoutCheck: function(callback) {
      $http.get(adminurl + 'checkoutCheck').success(callback);
    },
    getNewsYear: function(callback) {
      $http.get(adminurl + 'getNewsYear').success(callback);
    },
    getTvVideo: function(callback) {
      $http.get(adminurl + 'getTvVideo').success(callback);
    },
    getNews: function(request, callback) {
      $http.get(adminurl + 'getNews?year=' + request).success(callback);
    },
    logout: function(callback) {
      $http.get(adminurl + 'logout').success(callback);
    },
    userDetail: function(callback, errRes) {
      $http.get(adminurl + 'getuserbyid').success(callback).error(errRes);
    },
    getUserOrder: function(callback) {
      $http.get(adminurl + 'getOrders?id=' + $.jStorage.get("user").id).success(callback);
    },
    signup: function(request, callback) {
      console.log(request);
      $http({
        url: adminurl + 'signup',
        method: 'POST',
        data: {
          "firstname": request.firstname,
          "lastname": request.lastname,
          "email": request.email,
          "password": request.password
        }
      }).success(callback);
    },
    changePassword: function(password, callback) {
      $http({
        url: adminurl + 'changepassword',
        method: 'POST',
        withCredentials: true,
        data: {
          "email": $.jStorage.get('user').email,
          "oldpassword": password.oldpassword,
          "newpassword": password.newpassword,
          "confirmpassword": password.confirmpassword
        }
      }).success(callback);
    },
    updateUser: function(user, callback) {
      console.log(user);
      $http({
        url: adminurl + 'updateprofile',
        method: 'POST',
        data: user
      }).success(callback);
    },
    subscribe: function(request, callback) {
      $http.get(adminurl + 'subscribe?email=' + request.email).success(callback);
    },
    getBlog: function(search, pageno, tag, callback) {
      $http.get(adminurl + 'getAllBlog?search=' + search + '&pageno=' + pageno + '&tag=' + tag + '&maxrow=20').success(callback);
    },
    getBlogById: function(id, callback) {
      $http.get(adminurl + 'getBlogById?id=' + id).success(callback);
    },
    commentSubmit: function(comment, callback) {
      //comment.blogid
      //comment.name
      //comment.email
      //comment.website
      //comment.comment
      $http.post(adminurl + 'commentSubmit', comment).success(callback);
    },
    getUserById: function(callback) {
      $http.get(adminurl + 'getuserbyid').success(callback);
    },
    loginuser: function(request, callback) {
      $http({
        url: adminurl + 'loginuser',
        method: 'POST',
        data: {
          "email": request.email,
          "password": request.password
        }
      }).success(callback);
    },
    placeOrder: function(request, callback) {
      $http({
        url: adminurl + 'placeOrder',
        method: 'POST',
        data: request
      }).success(callback);
    },
    addToCart: function(cart, callback) {
      return $http({
        url: adminurl + "addToCart",
        method: "POST",
        data: {
          "product": cart.product,
          "quantity": cart.quantity,
          "json": "",
          "status": cart.status
        }
      }).success(callback);
    },
    removeFromCart: function(cart, callback) {
      // console.log(cart);
      return $http({
        url: adminurl + "removeFromCart",
        method: "POST",
        data: {
          "cart": cart.id,
          "status" : cart.status
        }
      }).success(callback);
    },
    contactSubmit: function(request, callback) {
      $http({
        url: adminurl + 'contactSubmit',
        method: 'POST',
        data: {
          "firstname": request.firstname,
          "lastname": request.lastname,
          "email": request.email,
          "mobile": request.mobile,
          "message": request.message
        }
      }).success(callback);
    },
    getSubPackages: function(callback) {
      $http.get(adminurl + 'getSubPackages').success(callback);
    },
    askSumanSubmit: function(request, callback) {
      $http({
        url: adminurl + 'askSumanSubmit',
        method: 'POST',
        data: {
          "category": request.category,
          "name": request.name,
          "email": request.email,
          "question": request.question
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
    forgotpassword: function(email, callback) {

      $http.post(adminurl + 'forgotpassword', {
        email: email
      }).success(callback);
    },
    totalItemCart: function(callback) {
      $http.get(adminurl + 'totalitemcart').success(callback);
    },
    forgotpasswordsubmit: function(password, hash, callback) {

      $http.post(adminurl + 'forgotpasswordsubmit', {
        password: password,
        hashcode: hash
      }).success(callback);
    },
    getRecipeDetail : function(id,callback) {
      if(!id)
      {
        id="";
      }
      $http.get(adminurl + 'getRecipeDetail?id='+id).success(callback);
    }
  };
});
