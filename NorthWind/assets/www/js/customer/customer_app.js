customerModule.controller('customerList', function($scope,CustDetailsList){
   CustDetailsList.getCustomersList().then(function(customers) {
    $scope.customers = customers;
    });
 
    $scope.$on('getCustomersList', function(events, customers) {
    $scope.customers = customers;
    }) 
});