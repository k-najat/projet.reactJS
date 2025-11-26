import React, { useState } from "react";

export default function Capable () {
const [id ,setId]=useState(0);
const [designation,setDesignation]=useState("");
const [prix,setPrix]=useState(0);
const [articles,setArticles]=useState([])
function handlerOnChangeId(event){
    setId(event.target.value);
}
function handlerOnChangeDesignation(event){
    setDesignation(event.target.value);
}
function handlerOnChangePrix(event){
    setPrix(event.target.value);
}
function handlerAddArticle(event){
    const newArticle={id,designation,prix};
    setArticles([...articles,newArticle]);
}
return (
    <div className="container">
        <h2 className="title">Ajout d'un Article</h2>

        <table className="form-table">
            <tbody>
                <tr>
                    <td><label>Id:</label></td>
                    <td><input type="number" onChange={handlerOnChangeId} value={id} /></td>
                </tr>
                <tr>
                    <td><label>Désignation:</label></td>
                    <td><input type="text" onChange={handlerOnChangeDesignation} value={designation} /></td>
                </tr>
                <tr>
                    <td><label>Prix:</label></td>
                    <td><input type="number" onChange={handlerOnChangePrix} value={prix} /></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="Ajouter" onClick={handlerAddArticle} />
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
          <h3>liste Articles</h3>
            <ul>
                {articles.map((article,index)=>(<li key={index}>
                <p>{article.id} | {article.designation} | {article.prix}</p></li>
                  ))}
            </ul>
        </div>
     <div>
    </div>
</div>
)
}