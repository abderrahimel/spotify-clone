import React from 'react';
import './titre.css';
function Titre({id, titre, description, img}) {
    const reduce = (string, n) =>{
        return string.length > n ? string.substring(0, n - 1)+ '...': string;
    }
    return (
        <div className='container'>
             <div className="image1">
                 <img src={img} alt="" />
             </div>

            <div className="titre-description">
                   
                        <h2>{titre}</h2>
                    
                  
                        <p>{reduce(description,62)}</p>
                   
            </div>
            

        </div>
    )
}

export default Titre
