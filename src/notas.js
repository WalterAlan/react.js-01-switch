import React from 'react';
import axios from 'axios'
import './notas.css'


    function Notas({title,content,author}){
        
          return(
              <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
                    Titulo: {title}
           </p>
            <p className="card-followers">
              <span className="card-followers-number"> Content : {content} </span>
              <span className="card-followers-title">  Autor: {author} </span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
                          12 Today
          </p>
                
      </article>
          )
      }
    


     

export default Notas
