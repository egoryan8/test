const { on } = require("events");
const http = require("http");
const path = require("path");

// Формируем запрос
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
};

// Отправляем запрос

const req = http.request(options, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk;
    });

    // завершаем запрос

    res.on('end', () => {
       console.log ('body:', JSON.parse(data))
    })

    .on(error, (err) => {
        console.log('Error:', err)
    }).end();
});



// const host = "localhost";


// or port 3000
// const port = "8000";
e
// http://localhost:8000

// const requestListener = function(req, res) {
//    res.writeHead(200);
//   res.end("Hello, server is working well");
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log(`Сервер запущен на http://${host}:${port}:`)
// });