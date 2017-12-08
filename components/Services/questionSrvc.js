angular.module("app").service("cartSrvc", function($http) {
  let questions = [];
  let prevQuestions = [];

  this.addQuestion = function(question) {
    questions.push(question);
    return questions;
  };
  this.getQuestions = function() {
    $http
      .get(" https://practiceapi.devmountain.com/api/trivia/questions")
      .then(function(response) {
        prevQuestions = questions;
        questions = response;
        return questions;
      })
      .error(err => err);
  };
  this.getQuestionsBySearch = function(animal) {
    return questions.includes(animal);
  };
  this.getQuestionsByDifficulty = function() {
    $http
      .get(
        " https://practiceapi.devmountain.com/api/trivia/questions/difficulty/:id"
      )
      .then(function(response) {
        prevQuestions = questions;
        questions = response;
        return questions;
      });
  };
  this.currentQuestions = function() {
    return questions;
  };
  this.prevQuestions = function() {
    questions = prevQuestions;
    return questions;
  };
});
