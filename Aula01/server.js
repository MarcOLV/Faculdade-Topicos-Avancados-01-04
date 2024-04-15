const http = require("http");
const port = 8080;

function microServicoApiDadosDoPontos() {
    return "Micro servico api dados dos pontos";
}

function moduloSistemaDePontos() {
    return "Modulo sistema de recompensa de pontos";
}

function microServicoSistemaDePagamentoEmpresaParceira() {
    return "Micro serviço sistema de pagamento empresa parceira e conversão de pontos"
}

function microServicoClienteInteressadosPontos() {
    return "Micro serviço Cliente com interesse em participar do programa de pontos"
}

function microServicoAcessaBancoDeDadosEmpresa() {
    return "Micro serviço acessa banco de dados pontos e clientes";
}

function microServicoAcessaBancoDeDadosEmpresaParceira() {
    return "Micro serviço acessa banco de dados empresa parceira";
}

function moduloSistemaDeBusca() {
    return "Modulo sistema de produtos";
}

function componenteCatalogoDeProdutos() {
    return "Componente Catalogo de produtos";
}

function moduloSistemaDePagamento() {
    return "Modulo sistema de pagamento";
}

function iniciarSistemaDePontos() {
    return "Iniciar sistema de compra e venda de produtos para recompensa de pontos";
}

function montarExecucao() {
   return '==>'+ iniciarSistemaDePontos() + "</br>"+
    '==> '+ moduloSistemaDeBusca() + "</br>"+
    '==> '+ componenteCatalogoDeProdutos() + "</br>"+
    '==> '+ microServicoApiDadosDoPontos() + "</br>" +
    '==> '+ moduloSistemaDePontos() + "</br>"+
    '==> '+ microServicoAcessaBancoDeDadosEmpresa() + "</br>" +
    '==> '+ microServicoAcessaBancoDeDadosEmpresaParceira() + "</br>" +
    '==> '+ moduloSistemaDePagamento() + "</br>" +
    '==> '+ microServicoSistemaDePagamentoEmpresaParceira() + "</br>"+
    '==> '+ microServicoClienteInteressadosPontos() +     
    "</br>";
}

http.createServer(function(req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(montarExecucao());
    res.end();

}).listen(port, function() {
    console.log("Iniciando Sistema para compra e troca de pontos por produtos");
});

