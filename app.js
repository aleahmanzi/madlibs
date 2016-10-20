var demo = angular.module('demo', ['ngAnimate']);
  demo.controller('Ctrl', function ($scope){
  $scope.inputOptions = true;

   $scope.male = 'no'; 
   $scope.female = 'no';
   $scope.genderOne = 'her';
   $scope.genderTwo = 'she'
   $scope.genderThree = 'her'
  /// - default values

   $scope.setMale = function(){
    $scope.genderOne = 'his';
    $scope.genderTwo = 'he'
    $scope.genderThree = 'him'
    $scope.male = 'yes';
   }; /// - set male version of paragraph

   $scope.setFemale = function(){
    $scope.genderOne = 'her';
    $scope.genderTwo = 'she'
    $scope.genderThree = 'her'
    $scope.female = 'yes';
   }; /// - set female version of paragraph

    $scope.create = function() {
       $scope.inputOptions = false;
    };/// - submit user selections

    $scope.edit = function() {
      $scope.inputOptions = true;
      $scope.female = 'no';
      $scope.male = 'no';
    };/// - start game over, return to default

    $scope.restart = function() {
      $scope.inputOptions = true;
      $scope.word = {};
      $scope.female = 'no';
      $scope.male = 'no';
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

