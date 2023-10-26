fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
})
.catch(error => console.error('ERROR! The header could not be loaded because:', error));