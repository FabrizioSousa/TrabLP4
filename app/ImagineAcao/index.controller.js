



(function ()  
{
    'use strict';

    angular
        .module('app')
        .controller('ImagineAcao.IndexController', Controller);
       
    function Controller(ImagineAcao, FlashService,UserService) {
  
        var vm = this;
        
        vm.VerProduto = VerProduto;
        // vm.question= question;
        // vm.question = null;
     
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }


      


        function VerProduto()
        {
            // ok
          
            
            ImagineAcao.VerProduto()
            .then(function () {
                FlashService.Success('Pergunta salva com sucesso!');
            })
            .catch(function (error) {
                FlashService.Error(error);
            });
        }
              
        

        
         
        //     var pergunta = document.getElementById('pergunta').value;
         
          
        //    var a = document.createElement("a");
          
        //    a.setAttribute("name","a");
        //    a.setAttribute("class","list-group-item");
          
          
         
        //    a.innerHTML = pergunta;
    
        //    var table = document.getElementById("lista");
       
          
        //     table.appendChild(a);
            
        // } 

      

        // function DeletaPergunta()
        // {
          

        //   var x =document.getElementsByName("a")[0];
          
        //   x.remove();
          
        
       
         
           
         
         
    }
    
    


})();
