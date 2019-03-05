(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishes = "";

  $scope.dishCountCheck = function () {
    var dishCnt = 0;
    var dishNames = $scope.dishes.split(",");
    for(var cnt=0; cnt <= dishNames.length; cnt++)
    {
      if(dishNames[cnt] != null && dishNames[cnt] != '')
      {
        dishCnt++;
      }
    }
    if(dishCnt == 0)
    {
      $scope.dishCountMessage = "Please enter data first";
    }
    else if(dishCnt > 0 && dishCnt <= 3)
    {
      $scope.dishCountMessage = "Enjoy!";
    }
    else if(dishCnt > 3)
    {
      $scope.dishCountMessage = "Too much!";
    }
  };
}

})();
