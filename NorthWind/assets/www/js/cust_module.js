/*Define module*/
var cust_module = angular.module('cust_module', []);

/*Header request to send cross domain data*/
cust_module.config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);
