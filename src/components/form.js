import React, { useState } from "react";
export default function Form(){
const [nom,setNom]=useState("")
const [prenom,setPrenom]=useState("")
function handlerOnChangeNom(event){
    setNom(event.target.value)

}
function handlerOnChangePrenom(event){   
setPrenom(event.target.value)
}
function handlerSubmit(event){
alert(`Nom: ${nom}\nPrenom: ${prenom}`)
    event.preventDefault()
}
return (
    <div className="container">
        <form onSubmit={handlerSubmit}>
            <h2 className="title">Formulaire Inscription</h2>
            <table className="form-table">
                <tbody>
                    <tr>
                        <td><label htmlFor="nom">Nom:</label></td>
                        <td>
                            <input
                                id="nom"
                                type="text"
                                onChange={handlerOnChangeNom}
                                value={nom}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="prenom">Prenom:</label></td>
                        <td>
                            <input
                                id="prenom"
                                type="text"
                                onChange={handlerOnChangePrenom}
                                value={prenom}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="submit" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
)
}