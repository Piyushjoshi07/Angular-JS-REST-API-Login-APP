mainController.controller("LoginController", function($http,$scope) {
 
	
 $scope.verify= function () {

 	$scope.data = JSON.stringify({"email":$scope.textemail, "password":$scope.textpassword});
 	$http({
    url: 'http://45.79.76.22/EasyRentals/EasyRentals/getUserDetails',
    method: "POST",
    data: $scope.data,
    headers: {'Content-Type': 'application/json'}
}).then(function(success){                                                          
	console.log(success.data);
	$scope.flag=success.data.value
	if($scope.flag)
	{
		window.location="#/Searchcar";
	}
	else
	{
		window.location="#/Login";
	}
});
 }
	
});
