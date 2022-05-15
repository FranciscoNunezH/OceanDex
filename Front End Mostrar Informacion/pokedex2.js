const PokeMoves= document.getElementById("habilidades");

const fetch2Pokemon = () =>{
    const pokeName=document.getElementById("pokeName"); //Lee en el documento el id que definas, este caso es el id del input
    let pokeInput = pokeName.value.toLowerCase();   //Declaramos una variable que contenga el valor del id de pokeName
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;   //Busca en la api el valor ingresado en el input

    //window.location.reload();

    const progress=document.getElementById('progress');
    const progress2=document.getElementById('progress2');
    const progress3=document.getElementById('progress3');
    const progress4=document.getElementById('progress4');
    const progress5=document.getElementById('progress5');
    const progress6=document.getElementById('progress6');

    fetch(url).then((res) =>{                              //fetch hace solicitud a una api y res es respuesta
        if(res.status!= "200"){                             //Status del error, si no se encuentra el pokemon ingresado te manda una imagen
            console.log(res);
            pokeImage("./elements/sad.png");
            document.getElementById("tipo").innerHTML="N";
            document.getElementById("type").innerHTML="N";
            document.getElementById("peso").innerHTML="N";
            document.getElementById("altura").innerHTML="N";
            document.getElementById("special").innerHTML="N";
            /////////////////////////////////Stats///////////////////////
            document.getElementById("hp").innerHTML="N";
            document.getElementById("atk").innerHTML="N";
            document.getElementById("def").innerHTML="N";
            document.getElementById("satk").innerHTML="N";
            document.getElementById("sdef").innerHTML="N";
            document.getElementById("spd").innerHTML="N";
        }   
        else{
            return res.json(); //Nos regresa la respuesta de la api 
        }      
        
        
        //Aqui se imprime la informacion en los id
    }).then((data)=>{                                     
        console.log(data);
        let pokeImg=data.sprites.other.dream_world.front_default;           //Obtenemos los datos del api
        let tipo=data.species.name;

        let type=data.types[0].type.name;                 //Se pone el cero [0] cuando en la api lo muestra asi antes del valor
        let peso=data.weight/10;
        let altura=data.height/10;
        let special=data.abilities[1].ability.name; 
        let numero=data.id;

        ///////////////////////Stats////////////////////////////////////
        let hp_base=data.stats[0].base_stat;

        let atk_base=data.stats[1].base_stat;

        let def_base=data.stats[2].base_stat;

        let satk_base=data.stats[3].base_stat;

        let sdef_base=data.stats[4].base_stat;

        let spd_base=data.stats[5].base_stat;

        let Cm = data.moves.length;

        /*if (Cm=i){

        }*/
        
        //let PokeMoves= document.getElementById("habilidades")
        //PokeMoves.innerHTML="";

        /*for (i=0; i<Cm; i++){
            var li=document.createElement('li');
            let Movements=data.moves[i].move.name;
            li.id= Movements;
            li.innerHTML=Movements;
            document.getElementById("habilidades").appendChild(li);
            console.log(Movements);
        }*/


        let moves = data.moves;
        PokeMoves.innerHTML = "";

        for (let i = 0; i < moves.length; i++) {
            const move = document.createElement("li");
            PokeMoves.appendChild(move);

            move.innerText = moves[i].move.name;
        }

       
        progress.style.width= (hp_base*100/255) +'%'
        progress2.style.width= (atk_base*100/190) +'%'
        progress3.style.width= (def_base*100/250) +'%'
        progress4.style.width= (satk_base*100/194) +'%'
        progress5.style.width= (sdef_base*100/250) +'%'
        progress6.style.width= (spd_base*100/200) +'%'
        

        document.getElementById("hp").innerHTML=hp_base;
        document.getElementById("atk").innerHTML=atk_base;
        document.getElementById("def").innerHTML=def_base;
        document.getElementById("satk").innerHTML=satk_base;
        document.getElementById("sdef").innerHTML=sdef_base;
        document.getElementById("spd").innerHTML=spd_base;
        console.log(hp);
        //console.log(pokeImg);
        pokeImage(pokeImg);
        document.getElementById("tipo").innerHTML=tipo;
        document.getElementById("type").innerHTML=type;
        document.getElementById("peso").innerHTML=peso;
        document.getElementById("altura").innerHTML=altura;
        document.getElementById("special").innerHTML=special;
        document.getElementById("numero").innerHTML=numero;



    })
    
}


//fetchPokemon();
const pokeImage=(url)=>{
    const pokeImg=document.getElementById("pokeImg");   //Asigna en una variable del documento el valor del id que definas
    pokeImg.src= url;                                   //Cambia del elemento con el id definido
}

const poketipo=(url)=>{
    const tipo=document.getElementById("tipo");         //nombre
    tipo.src=url;
}

const poketype=(url)=>{
    const type=document.getElementById("type");         //Tipo de pokemon
    type.src=url;
}

const pokepeso=(url)=>{
    const peso=document.getElementById("peso");         //Tipo de pokemon
    peso.src=url;
}

const pokealtura=(url)=>{
    const altura=document.getElementById("altura");         //Tipo de pokemon
    altura.src=url;
}

const pokespecial=(url)=>{
    const special=document.getElementById("special");         //Tipo de pokemon
    special.src=url;
}

const pokenumero=(url)=>{
    const numero=document.getElementById("numero");         //Tipo de pokemon
    numero.src=url;
}

////////////////////////////////////stats///////////////////////////////////////////

const pokehp=(url)=>{
    const hp=document.getElementById("hp");         //Tipo de pokemon
    hp.src=url;
}

const pokeatk=(url)=>{
    const atk=document.getElementById("atk");         //Tipo de pokemon
    atk.src=url;
}

const pokedef=(url)=>{
    const def=document.getElementById("def");         //Tipo de pokemon
    def.src=url;
}

const pokesatk=(url)=>{
    const satk=document.getElementById("satk");         //Tipo de pokemon
    satk.src=url;
}

const pokesdef=(url)=>{
    const sdef=document.getElementById("sdef");         //Tipo de pokemon
    sdef.src=url;
}

const pokespd=(url)=>{
    const spd=document.getElementById("spd");         //Tipo de pokemon
    spd.src=url;
}

const printPokeMoves = (data) => {
    let moves = data.moves;
    PokeMoves.innerHTML = "";

    for (let i = 0; i < moves.length; i++) {
        const move = document.createElement("li");
        PokeMoves.appendChild(move);

        move.innerText = moves[i].move.name;
    }
}