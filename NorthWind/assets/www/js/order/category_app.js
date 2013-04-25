categoryModule.controller('categoryDetails', function($scope,categoryList) {
    
    categoryList.getCategoryList().then(function(categories) {
		$scope.categories = categories;
	})

	$scope.$on('getCategoryList', function(events, categories) {
		$scope.categories = categories;
	}) 
	
});