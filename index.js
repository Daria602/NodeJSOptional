import fetch from 'node-fetch';

fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(response => console.log(response));
