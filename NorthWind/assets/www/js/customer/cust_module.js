/*Define module*/
var serverName = 'http://192.168.3.76/northwind/backend/';

var getCustomersListURL = serverName + 'ajax/mobile';
var getCategoryListURL = serverName + 'ajax/mobile/get_categories';
var getProductListURL = serverName + 'ajax/mobile/product_by_id/';

var saveCustomerDataURL = serverName + 'ajax/mobile/save_customer_profile'

var customerModule = angular.module('customerModule', []);

/*Header request to send cross domain data*/
customerModule.config(['$httpProvider', function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

/*Routes are defined here*/
customerModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categories', {templateUrl: 'categories.html', controller: customerModule.customerList});
  $routeProvider.when('/products/:categoryId', {templateUrl: 'products.html', controller: customerModule.productList});
  $routeProvider.otherwise({redirectTo: '/categories'});
}]);

/*Sharing docto data*/
customerModule.factory('CustDetailsList', ['$http', '$rootScope', function ($http, $rootScope) {
	var customers = [];
	var categories = [];
	var products = [];
	return {
		getCustomersList: function() {
			return $http.get(getCustomersListURL).then(function(response) {
				customers = response.data;
				$rootScope.$broadcast('getCustomersList',customers);
				return customers;
			})
		},
		getCategoryList: function() {
			return $http.get(getCategoryListURL).then(function(response) {
				categories = response.data;
				$rootScope.$broadcast('getCategoryList',categories);
				return categories;
			})
		},
		getProductsList: function(categoryId) {
			return $http.get(getProductListURL + categoryId).then(function(response) {
				products = response.data;
				$rootScope.$broadcast('getProductsList',products);
				return products;
			})
		},
		saveCustomerData: function($params) {
			return $http({
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				url: saveCustomerDataURL,
				method: "POST",
				data: $params,
			})
			.success(function(addData) {
				customers = addData;
				$rootScope.$broadcast('getCustomersList',customers);
				return customers;
			});
		}
	};
}]); 
