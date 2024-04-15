const minhaBiblioteca = require("./biblioteca");
const http = require("http");

http.createServer(function (req, res) { 
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write("RGM do ALUNO: " + minhaBiblioteca.RGM + "<br>"); 
    res.write("Primeiro NOME: " + minhaBiblioteca.PrimeiroNome + "<br>"); 
    res.write("Ultimo NOME: " + minhaBiblioteca.UltimoNome + "<br>"); 
}).listen(8080, function() {
    console.log("Servidor na porta 8080");
});