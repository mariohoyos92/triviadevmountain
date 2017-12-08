angular.module("app").component("card", {
  templateUrl: "components/questionCard/questionCard.template.html",
  controllerAs: "cardCtrl",
  bindings: {
    question: "<",
    difficulty: "<"
  },
  controller: function() {}
});
