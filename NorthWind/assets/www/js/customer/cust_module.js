/*Define module*/
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
      return $http.get("http://localhost/northwind/backend/ajax/mobile").then(function(response) {
        customers = response.data;
        $rootScope.$broadcast('getCustomersList',customers);
        return customers;
      })
    }
	};
}]);
