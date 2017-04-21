var app = angular.module("myApp", []);
  app.controller("contactCtrl", ['$http',function ($scope, $http){
    $scope.success = false;
    $scope.contact = [];
    $scope.send = function () {
      var htmlBody ='<div>Name: ' + $scope.name + '</div>' +
                    '<div>Email: ' + $scope.email + '</div>' +
                    '<div>Message: ' + $scope.content + '</div>' +
                    '<div>Date: ' + (new Date()).toString() + '</div>';

      $http({
          url: svc,
          method: 'POST',
          data: {
              'From': 'foo@foo.com',
              'To': 'me@gmail.com',
              'HtmlBody': htmlBody,
              'Subject': 'New Contact Form Submission'
          },
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
          }
      })
      success(function (data) {
          $scope.success = true;

      })
      error(function (data) {
          $scope.error = true;
      });
  }
}]);
