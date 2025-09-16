const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', err => {
    console.log('Error: ' + err.message);
});