const http = require('http');
const fs = require('fs'); // file system

http.createServer(function (req, res) {
    fs.readFile('marco-27566340.html', function(err, data) {

        if (err)
            return console.log("[ERROR]: Erro na leitura do arquivo");

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3003, () => console.log("Servidor rodando na porta 3003"));