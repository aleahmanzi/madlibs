var demo = angular.module('demo', ['ngAnimate']);
  demo.controller('Ctrl', function ($scope){
$scope.inputOptions = true;

 $scope.genderOne = 'her';
 $scope.genderTwo = 'she'
 $scope.genderThree = 'her'
/// - default values

 $scope.setMale = function(){
  $scope.genderOne = 'his';
  $scope.genderTwo = 'he'
  $scope.genderThree = 'him'
 }; /// - set male version of paragraph

 $scope.setFemale = function(){
  $scope.genderOne = 'her';
  $scope.genderTwo = 'she'
  $scope.genderThree = 'her'
 }; /// - set female version of paragraph

  $scope.userSubmit = function() {
    //console.log("test")
    $scope.inputOptions = false;
  };/// - submit user selections

  $scope.restart = function() {
    $scope.inputOptions = true;
    $scope.word = {};
  };/// - start game over, return to default

$scope.word = {
 maleName: '',
 jobTitle: '',
 tediousTask: '',
 dirtyTask: '',
 celebrityName: '',
 uselessSkill: '',
 adjective: '',
 obnoxiousCelebrity: '',
 hugeNumber: ''
 };

}); /// - Ctrl

