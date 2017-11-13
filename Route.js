myApp.config(function ($routeProvider) {
	 $routeProvider.when('/Login',{ 
templateUrl:'Login/login.html',
controller:'LoginController'
	 }).otherwise({
	 	redirectTo:'/Login'
	 })
})