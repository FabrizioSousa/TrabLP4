(function () {
    'use strict';

    angular
        .module('app')
        .controller('Informacao.IndexController', Controller);

    function Controller($window, Informacao, FlashService) {
        var vm = this;

        vm.Question = null;
        vm.saveQuestion = saveQuestion;
        vm.endereco;
        vm.DeletarPorID = DeletarPorID;
        vm.ListQuestions = null
        loadJSON();

        function loadJSON() 
        {   
             
              Informacao.GetAll().then(function (questions) {
         
             
                
                  vm.endereco = questions[0].Endereco;
                 console.log(vm.endereco)
                  
                  }
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