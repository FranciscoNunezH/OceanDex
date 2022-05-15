//console.log("Hola explorers")
//https://pokeapi.co
//Imprime en consola los datos de la api
const fetchPokemon = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    fetch(url).then((res) =>{
        //console.log(res)                                  //fetch hace solicitud a una api y res es respuesta
        return res.json();                                //Nos regresa la respuesta de la api
    }).then((data)=>{
        console.log(data);
        let pokeImg=data.sprites.front_default;           //Obtenemos los datos del api
        console.log(pokeImg);
        //pokeImage(pokeImg);
    })
}
//fetchPokemon();



//Imprime en consola el texto ingresado en el input
/*const imprimir =()=>{           //Funcion flecha, es como poner function
    const pokeName=document.getElementById("pokeName"); //Lee en el documento el id que definas
    let pokeInput=pokeName.value;   //Declaramos una variable que contenga el valor del id de pokeName
    console.log("Hola " + pokeInput);    //Va a imprimir en la consola el texto mas el valor de lo ingresado en el id del input
}*/




//Cambio de la imagen al iniciar la pagina
/*const pokeImage=(url)=>{
    const pokeImg=document.getElementById("pokeImg");   //Asigna en una variable del documento el valor del id que definas
    pokeImg.src= url;                                   //Cambia del elemento con el id definido
}*/
//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");


//La promesa es para hacer sincrono lo asincrono, espera a que termine un proceso para continuar
//Cambiar la imagen con el boton
const fetch2Pokemon = () =>{
    const pokeName=document.getElementById("pokeName"); //Lee en el documento el id que definas, este caso es el id del input
    let pokeInput = pokeName.value.toLowerCase();   //Declaramos una variable que contenga el valor del id de pokeName
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;   //Busca en la api el valor ingresado en el input

    fetch(url).then((res) =>{                              //fetch hace solicitud a una api y res es respuesta
        if(res.status!= "200"){                             //Status del error, si no se encuentra el pokemon ingresado te manda una imagen
            console.log(res);
            pokeImage("sad.jpeg");
            document.getElementById("tipo").innerHTML="No se encontro";
        }   
        else{
            return res.json(); //Nos regresa la respuesta de la api 
        }                                                              
        //Aqui se imprime la informacion en los id
    }).then((data)=>{                                     
        console.log(data);
        let pokeImg=data.sprites.front_default;           //Obtenemos los datos del api
        let tipo=data.species.name;
        //console.log(pokeImg);
        pokeImage(pokeImg);
        document.getElementById("tipo").innerHTML=tipo;

    })
    
}
//fetchPokemon();
const pokeImage=(url)=>{
    const pokeImg=document.getElementById("pokeImg");   //Asigna en una variable del documento el valor del id que definas
    pokeImg.src= url;                                   //Cambia del elemento con el id definido
}

const poketipo=(url)=>{
    const tipo=document.getElementById("tipo");
    tipo.src=url;
}