angular.module("app").component("modalComp", {
  templateUrl: "components/modalComp/modalComp.html",
  controllerAs: "modalCtrl",
  controller: function(questionSrvc){
    questionSrvc.addQuestion(obj);
  },
  bindings: {
    
  }
})
