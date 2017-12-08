angular.module('app').component('questions', {
    templateUrl: 'components/questions/questions.template.html',
    controllerAs: 'questionsCtrl',
    controller: function(questionSrvc){
        this.questions = questionSrvc.currentQuestions();
        this.prevQuestions = questionSrvc.prevQuestions();


    }

}