//Imagen
const pokeImg = document.getElementById("pokeImg");
//Lista de habilidades
const PokeMoves= document.getElementById("habilidades");

//Datos
const nombre=document.getElementById("tipo");
const N_Ci=document.getElementById("N_Ci");                //Se pone el cero [0] cuando en la api lo muestra asi antes del valor
const N_Co=document.getElementById("N_Co");
const type=document.getElementById("type")
const type2=document.getElementById("type2");
const ambiente=document.getElementById("ambiente");
const familia=document.getElementById("familia");
const Num_Re=document.getElementById("Num_Re");
const ID=document.getElementById("ID");
const Estatus=document.getElementById("Estatus");
const Ejemplares=document.getElementById("Ejemplares")



const fetch2Pokemon = () =>{
    const pokeName=document.getElementById("pokeName"); //Lee en el documento el id que definas, este caso es el id del input
    let pokeInput = pokeName.value;   //Declaramos una variable que contenga el valor del id de pokeName
    //pokeInput[0].toUpperCase();
    console.log(pokeInput);
    pokeInput.trim();
    const url = `https://ocean-dex-api.herokuapp.com/api/consultar/${pokeInput}`;   //Busca en la api el valor ingresado en el input
    const url2 = `https://ocean-dex-api.herokuapp.com/api/consultar/img/${pokeInput}`;   //Busca en la api el valor ingresado en el input

    //window.location.reload();

    

    fetch(url).then((res) =>{                              //fetch hace solicitud a una api y res es respuesta
        if(res.status!= "200"){                             //Status del error, si no se encuentra el pokemon ingresado te manda una imagen
            console.log(res);
            printPokeImg("./elements/sad.png");
            document.getElementById("N_Ci").innerHTML="N";
            document.getElementById("familia").innerHTML="N";
            document.getElementById("type2").innerHTML="N";
            document.getElementById("ambiente").innerHTML="N";
            document.getElementById("Num_Re").innerHTML="N";
            /////////////////////////////////Stats///////////////////////
            document.getElementById("ID").innerHTML="N";
            document.getElementById("Estatus").innerHTML="N";
            document.getElementById("Ejemplares").innerHTML="N";
            document.getElementById("N_Co").innerHTML="N";
            document.getElementById("tipo").innerHTML="N";
            document.getElementById("type").innerHTML="N";
            document.getElementById("spd").innerHTML="N";
        }   
        else{
            return res.json(); //Nos regresa la respuesta de la api 
            console.log(res);
        }      
        
        
        //Aqui se imprime la informacion en los id
    }).then((data)=>{                                     
        console.log(data);

        //printPokeImg(data.sprites.other.dream_world.front_default);
        //console.log(data);
        printPokeFeatures(data);
    })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    fetch(url2).then((res2) =>{                              //fetch hace solicitud a una api y res es respuesta
        if(res2.status!= "200"){                             //Status del error, si no se encuentra el pokemon ingresado te manda una imagen
            console.log(res2);
            printPokeImg("./elements/sad.png");
            document.getElementById("N_Ci").innerHTML="N";
            document.getElementById("familia").innerHTML="N";
            document.getElementById("type2").innerHTML="N";
            document.getElementById("ambiente").innerHTML="N";
            document.getElementById("Num_Re").innerHTML="N";
            /////////////////////////////////Stats///////////////////////
            document.getElementById("ID").innerHTML="N";
            document.getElementById("Estatus").innerHTML="N";
            document.getElementById("Ejemplares").innerHTML="N";
            document.getElementById("N_Co").innerHTML="N";
            document.getElementById("tipo").innerHTML="N";
            document.getElementById("type").innerHTML="N";
        }   
        else{
            return res2.json(); //Nos regresa la respuesta de la api 
            console.log(res2);
        }      
        
        
        //Aqui se imprime la informacion en los id
    }).then((data)=>{                                     
        console.log(data);

        printPokeImg(data.img);
        
    })
    
}


//fetchPokemon();
const printPokeImg=(url2)=>{
    //const pokeImg=document.getElementById("pokeImg");   //Asigna en una variable del documento el valor del id que definas
    pokeImg.src= url2;                                   //Cambia del elemento con el id definido
}

const printPokeFeatures=(data)=>{
    //const pokeImg=document.getElementById("pokeImg");   //Asigna en una variable del documento el valor del id que definas
    //pokeImg.src= url;                                   //Cambia del elemento con el id definido
    nombre.innerText=data.Nombre_cientifico;
    N_Ci.innerText=data.Nombre_cientifico;
    N_Co.innerText=data.Nombres_comunes;
    type.innerText=data.especie;
    type2.innerText=data.especie;
    familia.innerText=data.familia;
    ambiente.innerText=data.Ambiente;
    Num_Re.innerText=data.Numero_de_registros; 
    ID.innerText=data.Identificador_unico;
    Estatus.innerText=data.Estatus;
    Ejemplares.innerText=data.Ejemplares.length;
}
