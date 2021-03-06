// define the project model
var projectModel = angular.module('projectModel', []);
// adding the routes
projectModel.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/view', {templateUrl: base_url + 'project/viewlist', controller: projectModel.projViewCtrl})
    .when('/edit/:id', {templateUrl: base_url + 'project/editproject', controller: projectModel.projectSingleEdit})
}]);

// adding the factory for shared projects
projectModel.factory('sharedProjects', ['$http', '$rootScope', function($http, $rootScope) {
	var projects = []; // init

	return {
    getProjects: function() {
      return $http.get(base_url + 'project/getjson').then(function (response) {
        projects = response.data;
        $rootScope.$broadcast('handleProjectsBroadcast', projects);
        return projects;
      });
    },
    addProjects: function($params) {
      return $http({
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: base_url + 'project/savejson',
        method: "POST",
        data: $params,
      })
      .success(function(addData) {
        projects = addData;
        $rootScope.$broadcast('handleProjectsBroadcast', projects);
      });
    },
    editProject: function($params) {
      return $http({
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: base_url + 'project/editjson',
        method: "POST",
        data: $params,
      })
        .success(function(editData) {
          projects = addData;
          $rootScope.$broadcast('handleProjectsBroadcast', projects);
        });
    }
  };
}]);