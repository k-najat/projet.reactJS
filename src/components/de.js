import React, { useState } from "react";
export default function De() {
    const[joueur1,setJoueur1]=useState(0);
    const[joueur2,setJoueur2]=useState(0);
    const[assais,setAssais]=useState(0);
    const[message,setMessage]=useState("");

    function handlerOnJoueur1(event){
        setJoueur1(event.target.value);
    }
    function lancerDe(){
        const valeurDe=Math.floor(Math.random()*6)+1;
        setJoueur2(valeurDe);
         
        if(valeurDe!==parseInt(joueur1)){
           setAssais(assais+1);
            
        }
        else{
            setMessage("bravo vous avez trouver la face cachée");
            setAssais(0);
        }
    }
  

    return(
        <div className="container">
            <div className="list">
            <h2 className="title">jeu de De joueur 1</h2>
            <div>
                <label>donner le numero de caché entre 1et 6:</label><input type="number" onChange={handlerOnJoueur1} value={joueur1} />
            </div>
            <div>
                <h2 className="title">jeu de De joueur 2</h2>
                <img src={`face${joueur1}.PNG`} alt={`de${joueur1}`} />
                <p> {`face${joueur2}:`}</p>
                <img src={`face${joueur2}.PNG`} alt={`de${joueur2}`} />
            </div>
            <div>
                <input type="button" value="Lancer..." onClick={lancerDe}/>
            </div>
            <p>{`nombre d'assais:${assais}`}</p>
            <p >{`${message}`}</p>
            </div>
        </div>
    )
}