var categoryModule = angular.module('categoryModule', []);
var serverName = 'http://192.168.3.76/northwind/backend/';
var getCustomersListURL = serverName + 'ajax/mobile/get_categories';

/*Header request to send cross domain data*/
categoryModule.config(['$httpProvider', function($httpProvider) {
	delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);