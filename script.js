const formulario = document.querySelector('form')

//asyn function consulta

const consultarPokemon = async (e) => {
    e.preventDefault();
    let nombrePokemon = formulario.pokemon.value;

    // console.log(nombrePokemon)

    if(nombrePokemon == ''){
        alert('Debe ingresar el nombre del pokemon')
        return;
    }
    // console.log(nombrePokemon)
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    const config = {
        method : 'GET'
    }

    //CONSULTAR A LA API
    document.getElementById('estado').innerText = 'Buscando pokemon...'
    try {
        const respuesta = await fetch(url, config);
        if(respuesta.status == 200){
            const data = await respuesta.json()
            console.log(data.name)
            console.log(data.weight)
            console.log(data.types[0].type.name)
            console.log(data.sprites.front_default)

            document.getElementById('nombrePokemon').innerText = data.name
            document.getElementById('pesoPokemon').innerText = data.weight
            document.getElementById('tipoPokemon').innerText = data.types[0].type.name
            document.getElementById('imagenPokemon').innerText = data.sprites.front_default
            document.getElementById('estado').innerText = 'Pokemon encontrado'
            
        }else{
            // alert('error en la consulta')
            document.getElementById ('estado').innerText = 'Pokemon no encontrado'
        }
        // console.log(respuesta);
    }catch(error) {
        console.log(error)
    }
}

formulario.addEventListener('submit', consultarPokemon)


