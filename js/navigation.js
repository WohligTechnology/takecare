// var mainurl = "http://wohlig.io:81/callApi/takecare/";
// var mainurl = "http://moviewsapp.com/selfcare/index.php/";
// var mainurl = "http://localhost/selfback/index.php/";
var mainurl = "http://192.168.0.118/selfbackend/index.php/";
// var imgurl = "http://moviewsapp.com/selfcare/uploads/";
// var imgurl = "http://localhost/selfback/uploads/";
var imgurl = "http://192.168.0.118/selfbackend/uploads/";
// var imgurl="";

var adminurl = mainurl + "json/";
var countries = [{
        "value": "Please Select"
    }, {
        "value": "Afganistan"
    }, {
        "value": "Albania"
    }, {
        "value": "Algeria"
    }, {
        "value": "American Samoa"
    }, {
        "value": "Andorra"
    }, {
        "value": "Angola"
    }, {
        "value": "Anguilla"
    }, {
        "value": "Antigua &amp; Ba"
    }, {
        "value": "Argentina"
    }, {
        "value": "Armenia"
    }, {
        "value": "Aruba"
    }, {
        "value": "Australia"
    }, {
        "value": "Austria"
    }, {
        "value": "Azerbaijan"
    }, {
        "value": "Bahamas"
    }, {
        "value": "Bahrain"
    }, {
        "value": "Bangladesh"
    }, {
        "value": "Barbados"
    }, {
        "value": "Belarus"
    }, {
        "value": "Belgium"
    }, {
        "value": "Belize"
    }, {
        "value": "Benin"
    }, {
        "value": "Bermuda"
    }, {
        "value": "Bhutan"
    }, {
        "value": "Bolivia"
    }, {
        "value": "Bonaire"
    }, {
        "value": "Bosnia &amp; Herzegovina"
    }, {
        "value": "Botswana"
    }, {
        "value": "Brazil"
    }, {
        "value": "British Indian Ocean Ter"
    }, {
        "value": "Brunei"
    }, {
        "value": "Bulgaria"
    }, {
        "value": "Burkina Faso"
    }, {
        "value": "Burundi"
    }, {
        "value": "Cambodia"
    }, {
        "value": "Cameroon"
    }, {
        "value": "Canada"
    }, {
        "value": "Canary Islands"
    }, {
        "value": "Cape Verde"
    }, {
        "value": "Cayman Islands"
    }, {
        "value": "Central African Republic"
    }, {
        "value": "Chad"
    }, {
        "value": "Channel Islands"
    }, {
        "value": "Chile"
    }, {
        "value": "China"
    }, {
        "value": "Christmas Island"
    }, {
        "value": "Cocos Island"
    }, {
        "value": "Colombia"
    }, {
        "value": "Comoros"
    }, {
        "value": "Congo"
    }, {
        "value": "Cook Islands"
    }, {
        "value": "Costa Rica"
    }, {
        "value": "Cote DIvoire"
    }, {
        "value": "Croatia"
    }, {
        "value": "Cuba"
    }, {
        "value": "Curacao"
    }, {
        "value": "Cyprus"
    }, {
        "value": "Czech Republic"
    }, {
        "value": "Denmark"
    }, {
        "value": "Djibouti"
    }, {
        "value": "Dominica"
    }, {
        "value": "Dominican Republic"
    }, {
        "value": "East Timor"
    }, {
        "value": "Ecuador"
    }, {
        "value": "Egypt"
    }, {
        "value": "El Salvador"
    }, {
        "value": "Equatorial Guinea"
    }, {
        "value": "Eritrea"
    }, {
        "value": "Estonia"
    }, {
        "value": "Ethiopia"
    }, {
        "value": "Falkland Islands"
    }, {
        "value": "Faroe Islands"
    }, {
        "value": "Fiji"
    }, {
        "value": "Finland"
    }, {
        "value": "France"
    }, {
        "value": "French Guiana"
    }, {
        "value": "French Polynesia"
    }, {
        "value": "French Southern Ter"
    }, {
        "value": "Gabon"
    }, {
        "value": "Gambia"
    }, {
        "value": "Georgia"
    }, {
        "value": "Germany"
    }, {
        "value": "Ghana"
    }, {
        "value": "Gibraltar"
    }, {
        "value": "Great Britain"
    }, {
        "value": "Greece"
    }, {
        "value": "Greenland"
    }, {
        "value": "Grenada"
    }, {
        "value": "Guadeloupe"
    }, {
        "value": "Guam"
    }, {
        "value": "Guatemala"
    }, {
        "value": "Guinea"
    }, {
        "value": "Guyana"
    }, {
        "value": "Haiti"
    }, {
        "value": "Hawaii"
    }, {
        "value": "Honduras"
    }, {
        "value": "Hong Kong"
    }, {
        "value": "Hungary"
    }, {
        "value": "Iceland"
    }, {
        "value": "India"
    }, {
        "value": "Indonesia"
    }, {
        "value": "Iran"
    }, {
        "value": "Iraq"
    }, {
        "value": "Ireland"
    }, {
        "value": "Isle of Man"
    }, {
        "value": "Israel"
    }, {
        "value": "Italy"
    }, {
        "value": "Jamaica"
    }, {
        "value": "Japan"
    }, {
        "value": "Jordan"
    }, {
        "value": "Kazakhstan"
    }, {
        "value": "Kenya"
    }, {
        "value": "Kiribati"
    }, {
        "value": "Korea North"
    }, {
        "value": "Korea South"
    }, {
        "value": "Kuwait"
    }, {
        "value": "Kyrgyzstan"
    }, {
        "value": "Laos"
    }, {
        "value": "Latvia"
    }, {
        "value": "Lebanon"
    }, {
        "value": "Lesotho"
    }, {
        "value": "Liberia"
    }, {
        "value": "Libya"
    }, {
        "value": "Liechtenstein"
    }, {
        "value": "Lithuania"
    }, {
        "value": "Luxembourg"
    }, {
        "value": "Macau"
    }, {
        "value": "Macedonia"
    }, {
        "value": "Madagascar"
    }, {
        "value": "Malaysia"
    }, {
        "value": "Malawi"
    }, {
        "value": "Maldives"
    }, {
        "value": "Mali"
    }, {
        "value": "Malta"
    }, {
        "value": "Marshall Islands"
    }, {
        "value": "Martinique"
    }, {
        "value": "Mauritania"
    }, {
        "value": "Mauritius"
    }, {
        "value": "Mayotte"
    }, {
        "value": "Mexico"
    }, {
        "value": "Midway Islands"
    }, {
        "value": "Moldova"
    }, {
        "value": "Monaco"
    }, {
        "value": "Mongolia"
    }, {
        "value": "Montserrat"
    }, {
        "value": "Morocco"
    }, {
        "value": "Mozambique"
    }, {
        "value": "Myanmar"
    }, {
        "value": "Nambia"
    }, {
        "value": "Nauru"
    }, {
        "value": "Nepal"
    }, {
        "value": "Netherland Antilles"
    }, {
        "value": "Netherlands (Holland, Europe)"
    }, {
        "value": "Nevis"
    }, {
        "value": "New Caledonia"
    }, {
        "value": "New Zealand"
    }, {
        "value": "Nicaragua"
    }, {
        "value": "Niger"
    }, {
        "value": "Nigeria"
    }, {
        "value": "Niue"
    }, {
        "value": "Norfolk Island"
    }, {
        "value": "Norway"
    }, {
        "value": "Oman"
    }, {
        "value": "Pakistan"
    }, {
        "value": "Palau Island"
    }, {
        "value": "Palestine"
    }, {
        "value": "Panama"
    }, {
        "value": "Papua New Guinea"
    }, {
        "value": "Paraguay"
    }, {
        "value": "Peru"
    }, {
        "value": "Philippines"
    }, {
        "value": "Pitcairn Island"
    }, {
        "value": "Poland"
    }, {
        "value": "Portugal"
    }, {
        "value": "Puerto Rico"
    }, {
        "value": "Qatar"
    }, {
        "value": "Republic of Montenegro"
    }, {
        "value": "Republic of Serbia"
    }, {
        "value": "Reunion"
    }, {
        "value": "Romania"
    }, {
        "value": "Russia"
    }, {
        "value": "Rwanda"
    }, {
        "value": "St Barthelemy"
    }, {
        "value": "St Eustatius"
    }, {
        "value": "St Helena"
    }, {
        "value": "St Kitts-Nevis"
    }, {
        "value": "St Lucia"
    }, {
        "value": "St Maarten"
    }, {
        "value": "St Pierre &amp; Miquelon"
    }, {
        "value": "St Vincent &amp; Grenadines"
    }, {
        "value": "Saipan"
    }, {
        "value": "Samoa"
    }, {
        "value": "Samoa American"
    }, {
        "value": "San Marino"
    }, {
        "value": "Sao Tome &amp; Principe"
    }, {
        "value": "Saudi Arabia"
    }, {
        "value": "Senegal"
    }, {
        "value": "Serbia"
    }, {
        "value": "Seychelles"
    }, {
        "value": "Sierra Leone"
    }, {
        "value": "Singapore"
    }, {
        "value": "Slovakia"
    }, {
        "value": "Slovenia"
    }, {
        "value": "Solomon Islands"
    }, {
        "value": "Somalia"
    }, {
        "value": "South Africa"
    }, {
        "value": "Spain"
    }, {
        "value": "Sri Lanka"
    }, {
        "value": "Sudan"
    }, {
        "value": "Suriname"
    }, {
        "value": "Swaziland"
    }, {
        "value": "Sweden"
    }, {
        "value": "Switzerland"
    }, {
        "value": "Syria"
    }, {
        "value": "Tahiti"
    }, {
        "value": "Taiwan"
    }, {
        "value": "Tajikistan"
    }, {
        "value": "Tanzania"
    }, {
        "value": "Thailand"
    }, {
        "value": "Togo"
    }, {
        "value": "Tokelau"
    }, {
        "value": "Tonga"
    }, {
        "value": "Trinidad &amp; Tobago"
    }, {
        "value": "Tunisia"
    }, {
        "value": "Turkey"
    }, {
        "value": "Turkmenistan"
    }, {
        "value": "Turks &amp; Caicos Is"
    }, {
        "value": "Tuvalu"
    }, {
        "value": "Uganda"
    }, {
        "value": "Ukraine"
    }, {
        "value": "United Arab Emirates"
    }, {
        "value": "United Kingdom"
    }, {
        "value": "United States of America"
    }, {
        "value": "Uruguay"
    }, {
        "value": "Uzbekistan"
    }, {
        "value": "Vanuatu"
    }, {
        "value": "Vatican City State"
    }, {
        "value": "Venezuela"
    }, {
        "value": "Vietnam"
    }, {
        "value": "Virgin Islands (Brit)"
    }, {
        "value": "Virgin Islands (USA)"
    }, {
        "value": "Wake Island"
    }, {
        "value": "Wallis &amp; Futana Is"
    }, {
        "value": "Yemen"
    }, {
        "value": "Zaire"
    }, {
        "value": "Zambia"
    }, {
        "value": "Zimbabwe"
    }
];
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
    getNewsYear:function(callback){
      $http.get(adminurl+'getNewsYear').success(callback);
    },
    getNews:function(request,callback){
      $http.get(adminurl+'getNews?year='+request).success(callback);
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
