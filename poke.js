
let form = document.querySelector('#pokeForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pokePerson = event.path[0][0].value
    console.log(pokePerson);
    loadPoke(pokePerson);
    form.reset();
})

let getPoke = async (pokePerson)=> {
    try {
        let response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokePerson}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}


let loadPoke = async (pokePerson)=> {
    let data = await getPoke(pokePerson);
    console.log(data);
    let new_rows = `<tr><td scope='row'>${data.forms[0].name}</td></tr><tr><td scope='row'><img src=${data.sprites.other["official-artwork"].front_default}></td></tr>`;
    document.getElementById('pokefact').insertAdjacentHTML('afterbegin', new_rows);
}


let clearData = () => {
    document.getElementById('pokefact').innerHTML='';
}












