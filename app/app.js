(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $stateProvider
                 .state('CadastroAcao', {
                url: '/CadastroAcao',
                templateUrl: 'CadastroAcao/index.html',
                controller: 'CadastroAcao.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'CadastroAcao' }
                 })  
                 .state('Informacao', {
                    url: '/Informacao',
                    templateUrl: 'Informacao/index.html',
                    controller: 'Informacao.IndexController',
                    controllerAs: 'vm',
                    data: { activeTab: 'Informacao' }
                     })               
                 .state('ImagineAcao', {
                url: '/ImagineAcao',
                templateUrl: 'ImagineAcao/index.html',
                controller: 'ImagineAcao.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'ImagineAcao' }
                 }) 
                 .state('DetalheAcao', {
                    url: '/DetalheAcao',
                    templateUrl: 'DetalheAcao/index.html',
                    controller: 'DetalheAcao.IndexController',
                    controllerAs: 'vm',
                    data: { activeTab: 'DetalheAcao' }
                     }) 
                     .state('Historico', {
                        url: '/Historico',
                        templateUrl: 'Historico/index.html',
                        controller: 'Historico.IndexController',
                        controllerAs: 'vm',
                        data: { activeTab: 'Historico' }
                         }) 
                       
                
            
            
            
    }

    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
          //  console.log($rootScope.activeTab);
            $rootScope.activeTab = toState.data.activeTab;
            //console.log($rootScope.activeTab);
        });
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;

            angular.bootstrap(document, ['app']);
        });
    });
})();