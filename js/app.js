/**
 * Created by Felipe on 18/01/2015.
 */

    var app = angular.module('app',[]);

    var gems = [
        {nome:"testeNome",valor:"50"},
        {nome:"2",valor:"20"}
    ];


    app.controller('StoreController',function(){
        this.products = gems;
    });

    app.directive('encomendaTimeline',function(){
       return{
           restrict: 'E',
           templateUrl: 'EncomendaTimeline.html'
       };
    });

    app.directive('encomendaDetalhes',function(){
        return{
            restrict: 'E',
            templateUrl: 'EncomendaDetalhes.html'
        };
    });

    app.controller('EncomendaController',function(){
        this.encomenda = encomenda1;



    });

    /* TESTE de consumo de serviço REST */
    app.controller('ServiceTestController',['$http','$scope',function($http,$scope){
        $http.get('http://rest-service.guides.spring.io/greeting').success(function(data) {
                $scope.greeting = data;
        });
    }]);

    app.controller('ServiceTestController2',['$http','$scope',function($http,$scope){
        objetoServico = this;
        objetoServico.greeting = [];

        $http.get('http://rest-service.guides.spring.io/greeting').success(function(data) {
            objetoServico.greeting = data;
        });
    }]);


    var encomenda1 = {
        codigo: "9000",
        cliente: "Fulano",
        eventosCorreios:[
            {
                tipo: "XXX",
                status: "XXX",
                data: "07-01-2015",
                hora: "08:01:20",
                descricao: "PEDIDO APROVADO",
                detalhe: "PRODUTO EM ESTOQUE E PAGAMENTO OK",
                local: "CDD ALVORADA",
                codigo: "94800971",
                cidade: "CIDADE",
                uf: "RJ",
                acaoCliente: "AGUARDAR",
                ativo: false,
                exibir: true,
                imgSrc : "img/handshaking.png"
            },
            {
                tipo: "XXX",
                status: "XXX",
                data: "08-01-2015",
                hora: "16:01:20",
                descricao: "PICKING",
                detalhe: "LOCALIZAÇÃO E SEPARAÇÃO DO PRODUTO EM ESTOQUE",
                local: "CDD ALVORADA",
                codigo: "94800971",
                cidade: "CIDADE",
                uf: "RJ",
                acaoCliente: "AGUARDAR",
                ativo: false,
                exibir: true,
                imgSrc : "img/separacao.png"
            },
            {
                tipo: "XXX",
                status: "XXX",
                data: "08-01-2015",
                hora: "16:01:20",
                descricao: "PACKING",
                detalhe: "EMBALADO E PRONTO PARA DISTRIBUIÇÃO",
                local: "CDD ALVORADA",
                codigo: "94800971",
                cidade: "CIDADE",
                uf: "RJ",
                acaoCliente: "AGUARDAR",
                ativo: false,
                exibir: true,
                imgSrc : "img/packing.png"
            },
            {
                tipo: "XXX",
                status: "XXX",
                data: "10-01-2015",
                hora: "10:01:20",
                descricao: "COM A TRANSPORTADORA",
                detalhe: "PRODUTO ENTREGUE AOS CORREIOS",
                local: "CDD ALVORADA",
                codigo: "94800971",
                cidade: "CIDADE",
                uf: "RJ",
                acaoCliente: "AGUARDAR",
                ativo: false,
                exibir: true,
                imgSrc : "img/transportadora.png"
            },
            {
                tipo: "XXX",
                status: "XXX",
                data: "18-01-2015",
                hora: "10:15:20",
                descricao: "ENTREGUE",
                detalhe: "ENTREGUE PARA ALGUEM, TOMARA QUE SEJA A PESSOA CERTA :)",
                local: "ENDERECO DO CLIENTE",
                codigo: "94800971",
                cidade: "Rio de Janeiro",
                uf: "RJ",
                acaoCliente: "AGUARDAR",
                ativo: false,
                exibir: true,
                imgSrc : "img/recebido.png"
            }
        ]
    };




