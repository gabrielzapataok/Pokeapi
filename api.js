//Me traigo los datos de la api
fetch('https://pokeapi.co/api/v2/pokemon/')

//los codifico a Json()
.then(response => response.json())
.then(data => {
    
    console.log(data)
    let element = document.createElement('article')
    let htmlString = ''
    for (let i = 0; i < 10; i++) {

        
        fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`)
        .then(response => response.json())
        .then(data=>{

        console.log(data)
        let miElement = document.createElement('div')
        miElement.innerHTML=`
        <a href = "plantilla.html?pokemon=${data.name}">
            <article>
                <h3>nombre: ${data.name}</h3>
                <img src="${data.sprites.front_default}"></img>
            </article>
        </a>
        `
        document.getElementById('container').append(miElement)
        });


    }
    element.innerHTML = htmlString
    document.getElementById('container').append(element)
})