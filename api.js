fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
.then(data => {
    console.log(data)
    let element = document.createElement('article')
    let htmlString = ''
    for (let i = 0; i < 10; i++) {
        htmlString = htmlString + `
        <a href="${window.location.origin}/plantilla.html?name=${data.results[i].name}">
            <h3>
            </h3>
        </a>`
    }
    element.innerHTML = htmlString
    document.getElementById('container').append(element)
})