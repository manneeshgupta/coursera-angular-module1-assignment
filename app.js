(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishes = "";
  $scope.note = "Note: An empty item with ',  ,' is NOT considered in the count.";
  $scope.dishColor = {};
  $scope.dishColor.colorStyle = "";

  $scope.dishCountCheck = function () {
    var dishCnt = 0;
    var dishNames = $scope.dishes.split(",");
    for(var cnt=0; cnt <= dishNames.length; cnt++)
    {
      if(dishNames[cnt] != null)
      {
        if(dishNames[cnt].trim() != '')
        {
          dishCnt++;
        }
      }
    }
    if(dishCnt == 0)
    {
      $scope.dishCountMessage = "Please enter data first";
      $scope.dishColor.colorStyle = "red";
    }
    else if(dishCnt > 0 && dishCnt <= 3)
    {
      $scope.dishCountMessage = "Enjoy!";
      $scope.dishColor.colorStyle = "green";
    }
    else if(dishCnt > 3)
    {
      $scope.dishCountMessage = "Too much!";
      $scope.dishColor.colorStyle = "green";
    }
  };
}

})();
