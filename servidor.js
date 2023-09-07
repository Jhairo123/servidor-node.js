const http = require("http");
const chalk = require("chalk");

const HOST = "localhost";
const PORT = 8000;

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const respuestaJSON = {
      nombre: "Nicolas Gómez",
      mensaje: "Hola, desde Node.js!",
    };

    res.end(JSON.stringify(respuestaJSON));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
});
server.listen(PORT, HOST, () => {
  console.log(chalk.green(`Servidor escuchando en http://${HOST}:${PORT}/`));
});
