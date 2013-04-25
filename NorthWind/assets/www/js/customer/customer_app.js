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

customerModule.controller('productsAndCategories', function($scope, CustDetailsList) {
	CustDetailsList.getCategoryList().then(function(categories) {
		$scope.categories = categories;
	});
});

customerModule.controller('productList', function($scope, CustDetailsList, $routeParams) {
	$scope.categoryID = $routeParams.categoryId;
	CustDetailsList.getProductsList($scope.categoryID).then(function(products) {
		$scope.products = products;
	});
});