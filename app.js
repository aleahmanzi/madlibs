var demo = angular.module('demo', ['ngAnimate']);
  demo.controller('Ctrl', function ($scope){
  
   $scope.startGame = true;
   $scope.inputOptions = false;
   $scope.beginHeader = false;
   $scope.resultsWrap = false;

   $scope.male = 'no'; 
   $scope.female = 'no';
   $scope.genderOne = 'her';
   $scope.genderTwo = 'she'
   $scope.genderThree = 'her'
  /// - default values

  $scope.startGame = function(){
    $scope.startGame = false;
    $scope.inputOptions = true;
    $scope.beginHeader = true;
  } /// - remove entry picture and start game

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
       $scope.resultsWrap = true;
    };/// - submit user selections

    $scope.edit = function() {
      $scope.inputOptions = true;
      $scope.resultsWrap = false;
    };/// - start game over, return to default

    $scope.restart = function() {
      $scope.inputOptions = true;
      $scope.resultsWrap = false;
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

