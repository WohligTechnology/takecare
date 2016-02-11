// var mainurl = "http://wohlig.io:81/callApi/takecare/";
var mainurl = "http://moviewsapp.com/selfcare/index.php/";
// var mainurl = "http://localhost/selfback/index.php/";
// var mainurl = "http://192.168.0.118/selfbackend/index.php/";
var imgurl = "http://moviewsapp.com/selfcare/uploads/";
// var imgurl = "http://localhost/selfback/uploads/";
// var imgurl = "http://192.168.0.118/selfbackend/uploads/";
// var imgurl="";
var cart = [];

var adminurl = mainurl + "json/";
var countries = [{
  "value": "Please Select",
  "name": ""
}, {
  "value": "Afganistan",
  "name": "Afganistan"
}, {
  "value": "Albania",
  "name": "Albania"
}, {
  "value": "Algeria",
  "name": "Algeria"
}, {
  "value": "American Samoa",
  "name": "American Samoa"
}, {
  "value": "Andorra",
  "name": "Andorra"
}, {
  "value": "Angola",
  "name": "Angola"
}, {
  "value": "Anguilla",
  "name": "Anguilla"
}, {
  "value": "Antigua &amp; Ba",
  "name": "Antigua &amp; Ba"
}, {
  "value": "Argentina",
  "name": "Argentina"
}, {
  "value": "Armenia",
  "name": "Armenia"
}, {
  "value": "Aruba",
  "name": "Aruba"
}, {
  "value": "Australia",
  "name": "Australia"
}, {
  "value": "Austria",
  "name": "Austria"
}, {
  "value": "Azerbaijan",
  "name": "Azerbaijan"
}, {
  "value": "Bahamas",
  "name": "Bahamas"
}, {
  "value": "Bahrain",
  "name": "Bahrain"
}, {
  "value": "Bangladesh",
  "name": "Bangladesh"
}, {
  "value": "Barbados",
  "name": "Barbados"
}, {
  "value": "Belarus",
  "name": "Belarus"
}, {
  "value": "Belgium",
  "name": "Belgium"
}, {
  "value": "Belize",
  "name": "Belize"
}, {
  "value": "Benin",
  "name": "Benin"
}, {
  "value": "Bermuda",
  "name": "Bermuda"
}, {
  "value": "Bhutan",
  "name": "Bhutan"
}, {
  "value": "Bolivia",
  "name": "Bolivia"
}, {
  "value": "Bonaire",
  "name": "Bonaire"
}, {
  "value": "Bosnia &amp; Herzegovina",
  "name": "Bosnia &amp; Herzegovina"
}, {
  "value": "Botswana",
  "name": "Botswana"
}, {
  "value": "Brazil",
  "name": "Brazil"
}, {
  "value": "British Indian Ocean Ter",
  "name": "British Indian Ocean Ter"
}, {
  "value": "Brunei",
  "name": "Brunei"
}, {
  "value": "Bulgaria",
  "name": "Bulgaria"
}, {
  "value": "Burkina Faso",
  "name": "Burkina Faso"
}, {
  "value": "Burundi",
  "name": "Burundi"
}, {
  "value": "Cambodia",
  "name": "Cambodia"
}, {
  "value": "Cameroon",
  "name": "Cameroon"
}, {
  "value": "Canada",
  "name": "Canada"
}, {
  "value": "Canary Islands",
  "name": "Canary Islands"
}, {
  "value": "Cape Verde",
  "name": "Cape Verde"
}, {
  "value": "Cayman Islands",
  "name": "Cayman Islands"
}, {
  "value": "Central African Republic",
  "name": "Central African Republic"
}, {
  "value": "Chad",
  "name": "Chad"
}, {
  "value": "Channel Islands",
  "name": "Channel Islands"
}, {
  "value": "Chile",
  "name": "Chile"
}, {
  "value": "China",
  "name": "China"
}, {
  "value": "Christmas Island",
  "name": "Christmas Island"
}, {
  "value": "Cocos Island",
  "name": "Cocos Island"
}, {
  "value": "Colombia",
  "name": "Colombia"
}, {
  "value": "Comoros",
  "name": "Comoros"
}, {
  "value": "Congo",
  "name": "Congo"
}, {
  "value": "Cook Islands",
  "name": "Cook Islands"
}, {
  "value": "Costa Rica",
  "name": "Costa Rica"
}, {
  "value": "Cote DIvoire",
  "name": "Cote DIvoire"
}, {
  "value": "Croatia",
  "name": "Croatia"
}, {
  "value": "Cuba",
  "name": "Cuba"
}, {
  "value": "Curacao",
  "name": "Curacao"
}, {
  "value": "Cyprus",
  "name": "Cyprus"
}, {
  "value": "Czech Republic",
  "name": "Czech Republic"
}, {
  "value": "Denmark",
  "name": "Denmark"
}, {
  "value": "Djibouti",
  "name": "Djibouti"
}, {
  "value": "Dominica",
  "name": "Dominica"
}, {
  "value": "Dominican Republic",
  "name": "Dominican Republic"
}, {
  "value": "East Timor",
  "name": "East Timor"
}, {
  "value": "Ecuador",
  "name": "Ecuador"
}, {
  "value": "Egypt",
  "name": "Egypt"
}, {
  "value": "El Salvador",
  "name": "El Salvador"
}, {
  "value": "Equatorial Guinea",
  "name": "Equatorial Guinea"
}, {
  "value": "Eritrea",
  "name": "Eritrea"
}, {
  "value": "Estonia",
  "name": "Estonia"
}, {
  "value": "Ethiopia",
  "name": "Ethiopia"
}, {
  "value": "Falkland Islands",
  "name": "Falkland Islands"
}, {
  "value": "Faroe Islands",
  "name": "Faroe Islands"
}, {
  "value": "Fiji",
  "name": "Fiji"
}, {
  "value": "Finland",
  "name": "Finland"
}, {
  "value": "France",
  "name": "France"
}, {
  "value": "French Guiana",
  "name": "French Guiana"
}, {
  "value": "French Polynesia",
  "name": "French Polynesia"
}, {
  "value": "French Southern Ter",
  "name": "French Southern Ter"
}, {
  "value": "Gabon",
  "name": "Gabon"
}, {
  "value": "Gambia",
  "name": "Gambia"
}, {
  "value": "Georgia",
  "name": "Georgia"
}, {
  "value": "Germany",
  "name": "Germany"
}, {
  "value": "Ghana",
  "name": "Ghana"
}, {
  "value": "Gibraltar",
  "name": "Gibraltar"
}, {
  "value": "Great Britain",
  "name": "Great Britain"
}, {
  "value": "Greece",
  "name": "Greece"
}, {
  "value": "Greenland",
  "name": "Greenland"
}, {
  "value": "Grenada",
  "name": "Grenada"
}, {
  "value": "Guadeloupe",
  "name": "Guadeloupe"
}, {
  "value": "Guam",
  "name": "Guam"
}, {
  "value": "Guatemala",
  "name": "Guatemala"
}, {
  "value": "Guinea",
  "name": "Guinea"
}, {
  "value": "Guyana",
  "name": "Guyana"
}, {
  "value": "Haiti",
  "name": "Haiti"
}, {
  "value": "Hawaii",
  "name": "Hawaii"
}, {
  "value": "Honduras",
  "name": "Honduras"
}, {
  "value": "Hong Kong",
  "name": "Hong Kong"
}, {
  "value": "Hungary",
  "name": "Hungary"
}, {
  "value": "Iceland",
  "name": "Iceland"
}, {
  "value": "India",
  "name": "India"
}, {
  "value": "Indonesia",
  "name": "Indonesia"
}, {
  "value": "Iran",
  "name": "Iran"
}, {
  "value": "Iraq",
  "name": "Iraq"
}, {
  "value": "Ireland",
  "name": "Ireland"
}, {
  "value": "Isle of Man",
  "name": "Isle of Man"
}, {
  "value": "Israel",
  "name": "Israel"
}, {
  "value": "Italy",
  "name": "Italy"
}, {
  "value": "Jamaica",
  "name": "Jamaica"
}, {
  "value": "Japan",
  "name": "Japan"
}, {
  "value": "Jordan",
  "name": "Jordan"
}, {
  "value": "Kazakhstan",
  "name": "Kazakhstan"
}, {
  "value": "Kenya",
  "name": "Kenya"
}, {
  "value": "Kiribati",
  "name": "Kiribati"
}, {
  "value": "Korea North",
  "name": "Korea North"
}, {
  "value": "Korea South",
  "name": "Korea South"
}, {
  "value": "Kuwait",
  "name": "Kuwait"
}, {
  "value": "Kyrgyzstan",
  "name": "Kyrgyzstan"
}, {
  "value": "Laos",
  "name": "Laos"
}, {
  "value": "Latvia",
  "name": "Latvia"
}, {
  "value": "Lebanon",
  "name": "Lebanon"
}, {
  "value": "Lesotho",
  "name": "Lesotho"
}, {
  "value": "Liberia",
  "name": "Liberia"
}, {
  "value": "Libya",
  "name": "Libya"
}, {
  "value": "Liechtenstein",
  "name": "Liechtenstein"
}, {
  "value": "Lithuania",
  "name": "Lithuania"
}, {
  "value": "Luxembourg",
  "name": "Luxembourg"
}, {
  "value": "Macau",
  "name": "Macau"
}, {
  "value": "Macedonia",
  "name": "Macedonia"
}, {
  "value": "Madagascar",
  "name": "Madagascar"
}, {
  "value": "Malaysia",
  "name": "Malaysia"
}, {
  "value": "Malawi",
  "name": "Malawi"
}, {
  "value": "Maldives",
  "name": "Maldives"
}, {
  "value": "Mali",
  "name": "Mali"
}, {
  "value": "Malta",
  "name": "Malta"
}, {
  "value": "Marshall Islands",
  "name": "Marshall Islands"
}, {
  "value": "Martinique",
  "name": "Martinique"
}, {
  "value": "Mauritania",
  "name": "Mauritania"
}, {
  "value": "Mauritius",
  "name": "Mauritius"
}, {
  "value": "Mayotte",
  "name": "Mayotte"
}, {
  "value": "Mexico",
  "name": "Mexico"
}, {
  "value": "Midway Islands",
  "name": "Midway Islands"
}, {
  "value": "Moldova",
  "name": "Moldova"
}, {
  "value": "Monaco",
  "name": "Monaco"
}, {
  "value": "Mongolia",
  "name": "Mongolia"
}, {
  "value": "Montserrat",
  "name": "Montserrat"
}, {
  "value": "Morocco",
  "name": "Morocco"
}, {
  "value": "Mozambique",
  "name": "Mozambique"
}, {
  "value": "Myanmar",
  "name": "Myanmar"
}, {
  "value": "Nambia",
  "name": "Nambia"
}, {
  "value": "Nauru",
  "name": "Nauru"
}, {
  "value": "Nepal",
  "name": "Nepal"
}, {
  "value": "Netherland Antilles",
  "name": "Netherland Antilles"
}, {
  "value": "Netherlands (Holland, Europe)",
  "name": "Netherlands (Holland, Europe)"
}, {
  "value": "Nevis",
  "name": "Nevis"
}, {
  "value": "New Caledonia",
  "name": "New Caledonia"
}, {
  "value": "New Zealand",
  "name": "New Zealand"
}, {
  "value": "Nicaragua",
  "name": "Nicaragua"
}, {
  "value": "Niger",
  "name": "Niger"
}, {
  "value": "Nigeria",
  "name": "Nigeria"
}, {
  "value": "Niue",
  "name": "Niue"
}, {
  "value": "Norfolk Island",
  "name": "Norfolk Island"
}, {
  "value": "Norway",
  "name": "Norway"
}, {
  "value": "Oman",
  "name": "Oman"
}, {
  "value": "Pakistan",
  "name": "Pakistan"
}, {
  "value": "Palau Island",
  "name": "Palau Island"
}, {
  "value": "Palestine",
  "name": "Palestine"
}, {
  "value": "Panama",
  "name": "Panama"
}, {
  "value": "Papua New Guinea",
  "name": "Papua New Guinea"
}, {
  "value": "Paraguay",
  "name": "Paraguay"
}, {
  "value": "Peru",
  "name": "Peru"
}, {
  "value": "Philippines",
  "name": "Philippines"
}, {
  "value": "Pitcairn Island",
  "name": "Pitcairn Island"
}, {
  "value": "Poland",
  "name": "Poland"
}, {
  "value": "Portugal",
  "name": "Portugal"
}, {
  "value": "Puerto Rico",
  "name": "Puerto Rico"
}, {
  "value": "Qatar",
  "name": "Qatar"
}, {
  "value": "Republic of Montenegro",
  "name": "Republic of Montenegro"
}, {
  "value": "Republic of Serbia",
  "name": "Republic of Serbia"
}, {
  "value": "Reunion",
  "name": "Reunion"
}, {
  "value": "Romania",
  "name": "Romania"
}, {
  "value": "Russia",
  "name": "Russia"
}, {
  "value": "Rwanda",
  "name": "Rwanda"
}, {
  "value": "St Barthelemy",
  "name": "St Barthelemy"
}, {
  "value": "St Eustatius",
  "name": "St Eustatius"
}, {
  "value": "St Helena",
  "name": "St Helena"
}, {
  "value": "St Kitts-Nevis",
  "name": "St Kitts-Nevis"
}, {
  "value": "St Lucia",
  "name": "St Lucia"
}, {
  "value": "St Maarten",
  "name": "St Maarten"
}, {
  "value": "St Pierre &amp; Miquelon",
  "name": "St Pierre &amp; Miquelon"
}, {
  "value": "St Vincent &amp; Grenadines",
  "name": "St Vincent &amp; Grenadines"
}, {
  "value": "Saipan",
  "name": "Saipan"
}, {
  "value": "Samoa",
  "name": "Samoa"
}, {
  "value": "Samoa American",
  "name": "Samoa American"
}, {
  "value": "San Marino",
  "name": "San Marino"
}, {
  "value": "Sao Tome &amp; Principe",
  "name": "Sao Tome &amp; Principe"
}, {
  "value": "Saudi Arabia",
  "name": "Saudi Arabia"
}, {
  "value": "Senegal",
  "name": "Senegal"
}, {
  "value": "Serbia",
  "name": "Serbia"
}, {
  "value": "Seychelles",
  "name": "Seychelles"
}, {
  "value": "Sierra Leone",
  "name": "Sierra Leone"
}, {
  "value": "Singapore",
  "name": "Singapore"
}, {
  "value": "Slovakia",
  "name": "Slovakia"
}, {
  "value": "Slovenia",
  "name": "Slovenia"
}, {
  "value": "Solomon Islands",
  "name": "Solomon Islands"
}, {
  "value": "Somalia",
  "name": "Somalia"
}, {
  "value": "South Africa",
  "name": "South Africa"
}, {
  "value": "Spain",
  "name": "Spain"
}, {
  "value": "Sri Lanka",
  "name": "Sri Lanka"
}, {
  "value": "Sudan",
  "name": "Sudan"
}, {
  "value": "Suriname",
  "name": "Suriname"
}, {
  "value": "Swaziland",
  "name": "Swaziland"
}, {
  "value": "Sweden",
  "name": "Sweden"
}, {
  "value": "Switzerland",
  "name": "Switzerland"
}, {
  "value": "Syria",
  "name": "Syria"
}, {
  "value": "Tahiti",
  "name": "Tahiti"
}, {
  "value": "Taiwan",
  "name": "Taiwan"
}, {
  "value": "Tajikistan",
  "name": "Tajikistan"
}, {
  "value": "Tanzania",
  "name": "Tanzania"
}, {
  "value": "Thailand",
  "name": "Thailand"
}, {
  "value": "Togo",
  "name": "Togo"
}, {
  "value": "Tokelau",
  "name": "Tokelau"
}, {
  "value": "Tonga",
  "name": "Tonga"
}, {
  "value": "Trinidad &amp; Tobago",
  "name": "Trinidad &amp; Tobago"
}, {
  "value": "Tunisia",
  "name": "Tunisia"
}, {
  "value": "Turkey",
  "name": "Turkey"
}, {
  "value": "Turkmenistan",
  "name": "Turkmenistan"
}, {
  "value": "Turks &amp; Caicos Is",
  "name": "Turks &amp; Caicos Is"
}, {
  "value": "Tuvalu",
  "name": "Tuvalu"
}, {
  "value": "Uganda",
  "name": "Uganda"
}, {
  "value": "Ukraine",
  "name": "Ukraine"
}, {
  "value": "United Arab Emirates",
  "name": "United Arab Emirates"
}, {
  "value": "United Kingdom",
  "name": "United Kingdom"
}, {
  "value": "United States of America",
  "name": "United States of America"
}, {
  "value": "Uruguay",
  "name": "Uruguay"
}, {
  "value": "Uzbekistan",
  "name": "Uzbekistan"
}, {
  "value": "Vanuatu",
  "name": "Vanuatu"
}, {
  "value": "Vatican City State",
  "name": "Vatican City State"
}, {
  "value": "Venezuela",
  "name": "Venezuela"
}, {
  "value": "Vietnam",
  "name": "Vietnam"
}, {
  "value": "Virgin Islands (Brit)",
  "name": "Virgin Islands (Brit)"
}, {
  "value": "Virgin Islands (USA)",
  "name": "Virgin Islands (USA)"
}, {
  "value": "Wake Island",
  "name": "Wake Island"
}, {
  "value": "Wallis &amp; Futana Is",
  "name": "Wallis &amp; Futana Is"
}, {
  "value": "Yemen",
  "name": "Yemen"
}, {
  "value": "Zaire",
  "name": "Zaire"
}, {
  "value": "Zambia",
  "name": "Zambia"
}, {
  "value": "Zimbabwe",
  "name": "Zimbabwe"
}];
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
      name: "Recipes (Coming Soon)",
      classis: "active",
      link: "",
      nocursor: "no-pointer"
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
      $http.get(adminurl + 'getAllBlog?search=' + search + '&pageno=' + pageno + '&tag=' + tag + '&maxrow=2').success(callback);
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
      console.log(cart);
      return $http({
        url: adminurl + "removeFromCart",
        method: "POST",
        data: {
          "cart": cart.id
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
    forgotpasswordsubmit: function(password, hash, callback) {
      // $password = $data['password'];
      //  $hashcode = $data['hashcode'];
      $http.post(adminurl + 'forgotpasswordsubmit', {
        password: password,
        hashcode: hash
      }).success(callback);
    }
  };
});
