(function() {
  var app=angular.module("wordsApp", ["ngRoute"]);

  app.controller("wordController", function($scope){

$scope.words=[];

var wordbank=['no', 'gimme', 'snacks', 'candy', 'more'];

var classbank = [
  'bold', "italic", 'green'
];

var phraseBank = ['Have you seen Cars 2?', 'Zombies rule ninjas drule', "Give me more cookies!", "Whatever!"];

$scope.addWord=function() {
var utterance = wordbank[Math.floor(Math.random()*wordbank.length)];
console.log(utterance)

var obj = {name: utterance};
$scope.words.push(obj);
 console.log($scope.words);
}

$scope.addClass=function() {
  var utterance = wordbank[Math.floor(Math.random()*wordbank.length)];
  // $scope.words.push(utterance);

  var cls = classbank[Math.floor(Math.random()*classbank.length)];

  var obj ={name: utterance, clss: cls};
  $scope.words.push(obj);
}

$scope.addPhrase=function() {
var phrase = phraseBank[Math.floor(Math.random()*phraseBank.length)];
console.log(phrase)

var obj = {name: phrase};
$scope.words.push(obj);

}

$scope.prettyPhrase=function() {
  var phrase = phraseBank[Math.floor(Math.random()*phraseBank.length)];
  // $scope.words.push(utterance);

  var cls = classbank[Math.floor(Math.random()*classbank.length)];

  var obj ={name: phrase, clss: cls};
  $scope.words.push(obj);
}



});

})();
