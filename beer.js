angular.module('cincybrews', [])
.controller('Beer', function($scope, $http) {
    
    
    //document.write(myKey);
    //var url= 'http://api.brewerydb.com/v2/breweries?key='+mykey+'&name=rhinegeist'
    //$scope.url= 'http://api.brewerydb.com/v2/breweries?key='+$scope.myKey+'&name=rhinegeist';

    var call= 'call.php';
    var grabCincyBreweries= 'grabCincyBreweries.php';

    
    //make request
    $http.get(call).
        then(function(response) {
            $scope.randomBeer= response.data;
            //console.log(response);
            
    	});
    	//$scope.myName= "<h1>test</h1>";

    $http.get(grabCincyBreweries).
        then(function(response) {

            $scope.brewery= response.data;
            //$scope.loop= response.data;
            //console.log(response);
                var data= response.data;
                return data;   
    	});
        //console.log('Testing: '+ $scope.brewery.data.name);
        

});