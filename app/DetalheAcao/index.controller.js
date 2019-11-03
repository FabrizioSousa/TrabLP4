(function () {
    'use strict';

    angular
        .module('app')
        .controller('DetalheAcao.IndexController', Controller);

    function Controller($window, DetalheAcao, FlashService) {
        var vm = this;

        vm.Question = null;
        vm.saveQuestion = saveQuestion;
        
        vm.DeletarPorID = DeletarPorID;
        vm.ListQuestions = null
        initController();

        function initController() {
            // get current user
            DetalheAcao.GetAll().then(function (questions) {
               
                vm.listquestions = questions;
                console.log(vm.listquestions);
            });
            
        }    
       

        function saveQuestion() {
            DetalheAcao.Create(vm.Question)
                .then(function () {
                    FlashService.Success('Question created');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
        function DeletarPorID(ID) {
            console.log(ID);
            DetalheAcao.Delete(ID)
            .then(function () {
                initController();
            })
            .catch(function (error) {
                FlashService.Error(error);
            });
        }

    
    }   
})();