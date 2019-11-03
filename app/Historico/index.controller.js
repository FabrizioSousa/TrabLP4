(function () {
    'use strict';

    angular
        .module('app')
        .controller('Historico.IndexController', Controller);

    function Controller($window, Historico, FlashService) {
        var vm = this;

        vm.Question = null;
        vm.saveQuestion = saveQuestion;
        
        vm.DeletarPorID = DeletarPorID;
        vm.ListQuestions = null
        initController();

        function initController() {
            // get current user
            Historico.GetAll().then(function (questions) {
               
                vm.listquestions = questions;
                console.log(vm.listquestions);
            });
            
        }    
       

        function saveQuestion() {
            Historico.Create(vm.Question)
                .then(function () {
                    FlashService.Success('Question created');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
        function DeletarPorID(ID) {
            console.log(ID);
            Historico.Delete(ID)
            .then(function () {
                initController();
            })
            .catch(function (error) {
                FlashService.Error(error);
            });
        }

    
    }   
})();