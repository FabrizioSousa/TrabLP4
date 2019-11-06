(function () {
    'use strict';

    angular
        .module('app')
        .controller('CadastroAcao.IndexController', Controller);

    function Controller(CadastroAcao, FlashService, UserService) {
        var vm = this;

       
        vm.Cadastrar = Cadastrar;
        
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }
        function Cadastrar()
        {
            // ok
            var Data_Escolhida = document.getElementById('Data').value;
            var Detalhes = document.getElementById('Detalhes').value;
          
           
            console.log(vm.Imagem);
            // debugger;
            let ArraySalvar = {
                Nome_Acao: vm.Nome_Acao,
                Endereco: vm.Endereco_Acao,
                Data: Data_Escolhida,
                Categoria: vm.cbCategoria,
                Detalhes: Detalhes,
                Imagem: vm.Imagem
            }
        //    console.log(ArraySalvar);
           
        CadastroAcao.SalvaDados(ArraySalvar)
           .then(function () {
               FlashService.Success('Ação feita com sucesso!');
           })
           .catch(function (error) {
               FlashService.Error(error);
           });
        }
       

    
    }   
})();