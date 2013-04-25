customerModule.controller('customerList', function($scope,CustDetailsList){

	var customersdata = {};
	$scope.customersdata = customersdata;

	CustDetailsList.getCustomersList().then(function(customers) {
		$scope.customers = customers;
	});

	$scope.$on('getCustomersList', function(events, customers) {
		$scope.customers = customers;
	}) 

	$scope.postData =function(customerdata){
		$params = $.param({'data' : JSON.stringify(customerdata)});

		CustDetailsList.saveCustomerData($params);
		

		$scope.$on('getCustomersList', function(events, customers) {
      $scope.customers = customers;
		});

	}
});