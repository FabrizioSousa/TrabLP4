(function () {
    'use strict';

    angular
        .module('app')
        .factory('ImagineAcao', Service);

    function Service($http, $q) {
        var service = {};

      
        service.VerProduto = VerProduto;
        service.GetAll = GetAll;
      
    
     
        return service;


        function VerProduto() {
   
            return $http.post('/DetalheAcao').then(handleSuccess, handleError);
        }
        function GetAll() {
            return $http.get('/ImagineAcao/listar').then(handleSuccess, handleError);
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
