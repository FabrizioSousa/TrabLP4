(function () {
    'use strict';

    angular
        .module('app')
        .factory('Informacao', Service);

    function Service($http, $q) {
        var service = {};

      
        service.GetAll = GetAll;
       
        service.Delete = Delete
        service.Qtd = Qtd
        service.SalvaDados = SalvaDados;
        console.log("Passou no Estoque.Service");
        return service;


        function SalvaDados(ArrayParaSalvar) {
        
            return $http.post('/CadastroAcao/SalvarDados',ArrayParaSalvar).then(handleSuccess, handleError);
        }


        function Qtd() {
            
          
            return $http.delete('/qtd').then(handleSuccess, handleError);
        } 
        
       
        function GetAll() {
            return $http.get('/DetalheAcao/listar').then(handleSuccess, handleError);
        }

        function Delete(id) {
            
            console.log(id)
            return $http.delete('/consulta/'+ id).then(handleSuccess, handleError);
        } 
     

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
