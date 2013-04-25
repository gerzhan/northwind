/*Define module*/
var serverName = 'http://localhost/northwind/backend/';
var getCustomersListURL = serverName + 'ajax/mobile';
var saveCustomerDataURL = serverName + 'ajax/mobile/save_customer_profile'

var customerModule = angular.module('customerModule', []);

/*Header request to send cross domain data*/
customerModule.config(['$httpProvider', function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

/*Sharing docto data*/
customerModule.factory('CustDetailsList', ['$http', '$rootScope', function ($http, $rootScope) {
	var customers = [];
	return {
		getCustomersList: function() {
			return $http.get(getCustomersListURL).then(function(response) {
				customers = response.data;
				$rootScope.$broadcast('getCustomersList',customers);
				return customers;
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
