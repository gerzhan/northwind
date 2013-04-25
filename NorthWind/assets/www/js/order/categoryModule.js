var categoryModule = angular.module('categoryModule', []);
var serverName = 'http://localhost/northwind/backend/';
var getCategoryListURL = serverName + 'ajax/mobile/get_categories';

/*Header request to send cross domain data*/
categoryModule.config(['$httpProvider', function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

/*Sharing docto data*/
categoryModule.factory('categoryList', ['$http', '$rootScope', function ($http, $rootScope) {
	var categories = [];
	return {
		getCategoryList: function() {
			return $http.get(getCategoryListURL).then(function(response) {
				categories = response.data;
				$rootScope.$broadcast('getCategoryList',categories);
				return categories;
			})
		}
	};
}]); 
