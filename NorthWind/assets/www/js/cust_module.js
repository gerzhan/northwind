/*Define module*/
var cust_module = angular.module('cust_module', []);

/*Header request to send cross domain data*/
cust_module.config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

/*Sharing docto data*/
cust_module.factory('Cust_details_list', ['$http', '$rootScope', function ($http, $rootScope) {
	var doctors = [];
	return {
		getCustomerDetails: function($params) {
			return $http({
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: 'http://localhost/northwind/backend/ajax/mobile',
        method: "POST",
        data: $params,
      })
        .success(function(addData) {
          doctors = addData;
          //$rootScope.$broadcast('handleSharedDoctorProfiles',doctors);
        });
		}
	};
}]);
