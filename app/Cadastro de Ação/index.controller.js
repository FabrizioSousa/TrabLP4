(function () {
    'use strict';

    angular
        .module('app')
        .controller('Consulta.IndexController', Controller);

    function Controller($window, Consulta, FlashService) {
        var vm = this;

       
        vm.Cadastrar = Cadastrar;
    

        function Cadastrar() {
            Consulta.Create(vm.Question)
                .then(function () {
                    FlashService.Success('Question created');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
       

    
    }   
})();