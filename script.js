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
    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json()
        console.log(data.nombre)
        console.log(data.weight)
        console.log(data.types[0])
        
        if(respuesta.status == 200){
            
        }else{
            alert('error en la consulta')
        }
        console.log(respuesta);
    }catch(error) {
        console.log(error)
    }
}

formulario.addEventListener('submit', consultarPokemon)