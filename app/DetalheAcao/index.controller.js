(function () {
    'use strict';

    angular
        .module('app')
        .controller('DetalheAcao.IndexController', Controller);

    function Controller($window, DetalheAcao, FlashService) {
        var vm = this;

        
     
        vm.endereco = null;
     
       
        loadJSON();

        function loadJSON() 
        {   
             
            DetalheAcao.GetAll().then(function (questions) {
         
             
                
                  vm.endereco = questions[0].Endereco;
                 console.log(vm.endereco)
                  
                  });
                }

    
    }   
})();