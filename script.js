async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);

  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.
  

  let imagenPoke= document.getElementById(`imagen-pokemon-${order}`)
  imagenPoke.src = pokemonData.imagen;
  console.log(pokemonData)


  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css

  //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:
  let barraHp = document.getElementById(`barra-hp-${order}`)
  let cantidadHp = document.getElementById(`cantidad-hp-${order}`)
  let barraAtaque = document.getElementById(`barra-ataque-${order}`)
  let cantidadAtaque = document.getElementById(`cantidad-ataque-${order}`)
  let barraDefensa = document.getElementById(`barra-defensa-${order}`)
  let cantidadDefensa = document.getElementById(`cantidad-defensa-${order}`)
  let barraVelocidad = document.getElementById(`barra-velocidad-${order}`)
  let cantidadVelocidad = document.getElementById(`cantidad-velocidad-${order}`)

  

  if (pokemonData.stats[0].amount < 35) {
    barraHp.classList.add('rojo')
    cantidadHp.classList.add('rojo')
    
  } else if (pokemonData.stats[0].amount >= 35 && pokemonData.stats[0].amount < 70) {
    barraHp.classList.add('amarillo')
    
  } else {
    barraHp.classList.add('verde')
    
  }

  if (pokemonData.stats[1].amount < 35) {
    barraAtaque.classList.add('rojo')
    
  } else if (pokemonData.stats[1].amount >= 35 && pokemonData.stats[1].amount < 70) {
    barraAtaque.classList.add('amarillo')
    
  } else {
    barraAtaque.classList.add('verde')
    
  }
  if (pokemonData.stats[2].amount < 35) {
    barraDefensa.classList.add('rojo')
    
  } else if (pokemonData.stats[2].amount >= 35 && pokemonData.stats[2].amount < 70) {
    barraDefensa.classList.add('amarillo')
  } else {
    barraDefensa.classList.add('verde')
  }
  //barra velocidad
  if (pokemonData.stats[3].amount < 35) {
    barraVelocidad.classList.add('rojo')
    
  } else if (pokemonData.stats[3].amount >= 35 && pokemonData.stats[3].amount < 70) {
    barraVelocidad.classList.add('amarillo')
  } else {
    barraVelocidad.classList.add('verde')
  }



  animarBarra(barraHp, pokemonData.stats[0].amount)
  animarBarra(barraAtaque, pokemonData.stats[1].amount)
  animarBarra(barraDefensa, pokemonData.stats[2].amount)
  animarBarra(barraVelocidad, pokemonData.stats[3].amount)


}

//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});

const tiempoDeCarga = 5000;

function animarBarra(elem, tiempo) {
  // Seleccionamos el elemento barra
  
  
  // Inicializamos el progreso en 0, para asegurarnos
  // que siempre arranque desde el principio
  let width = 0;
  
  // Calculamos el progreso en base al tiempo total de carga,
  const progresoSobreTiempoTotal = tiempoDeCarga / 100;
  
  // Creamos un intervalo que se repita en el tiempo que calculamos
  // para ir incrementando el progreso.
  let id = setInterval(incrementarProgreso, progresoSobreTiempoTotal);
  
  function incrementarProgreso() {
      // Si el progreso esta completo, detenemos el programa
      if (width >= tiempo) {
      clearInterval(id);
      } else {
      width++;
  
      // Modificamos el DOM, para impactar el nuevo progreso.
      elem.style.width = width + "%";
      elem.innerHTML = `<span>${width}  % </span>` ;
      }
  }
}