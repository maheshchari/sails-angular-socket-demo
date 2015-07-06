'use strict';

/**
 * @ngdoc function
 * @name App.controller:CountryCtrl
 * @description
 * # CountryCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('CountryCtrl', function ($scope,$sails) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.country = {
      name:'',
      code:''
    };

    $scope.addCountry = function (){
      $sails.post("/country",$scope.country).success(function (data){
        $scope.country = {
          name:'',
          code:''
        };
        $scope.countries.push(data);
      }).error(function (){

      });
    };

    $sails.get("/country")
      .success(function (data, status, headers, jwr) {
        $scope.countries = data;
      })
      .error(function (data, status, headers, jwr) {
        alert('Houston, we got a problem!');
      });

    // Watching for updates
    var barsHandler = $sails.on("country", function (message) {
      console.log(message);
      if (message.verb === "created") {
        $scope.countries.push(message.data);
      }
      if (message.verb === "updated") {
        var country = _.find($scope.countries,function (country){return message.id === country.id});
        if(country){
          country.name = message.data.name;
          country.code = message.data.code;
        }
      }
      if(message.verb === "destroyed"){
        $scope.countries = _.reject($scope.countries,function (country){
           return message.id === country.id;
        });
      }
    });

    // Stop watching for updates
    $scope.$on('$destroy', function() {
      $sails.off('country', barsHandler);
    });

  });
