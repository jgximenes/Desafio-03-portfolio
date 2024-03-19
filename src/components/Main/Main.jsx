import React from 'react'
import Style from "./Main.module.css"
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from 'react';


const Main = () => {
  const [text, setText] = useState('');
  const toRotate = ['Gabriel Ximenes','Desenvolvedor Full-Stack', 'Estudante de Engenharia de Software'];
  const [loop, setLoop] = useState(0) ;
  const[isDeleting,setIsDeleting] = useState(false) ;
  const escreve = 150;
  const apagar = 200
  const [delta, setDelta] =  useState(100);

  
  
  
  useEffect(()=>{
      let ticker = setInterval(()=>{
          toType()
      }, delta)
      return()=>{clearInterval(ticker)}
  
      },[text])
      
      const toType = ()=>{
          let i = loop % toRotate.length;
          let fullTexte = toRotate[i];
          let udatedText = isDeleting ? fullTexte.substring(0,text.length -1):fullTexte.substring(0,text.length +1) 

          setText(udatedText);
          if(!isDeleting && udatedText === fullTexte){
                  setIsDeleting(true)
                  setDelta(apagar);
          }else if(isDeleting && udatedText === '')
          {
              setIsDeleting(false)
              setDelta(escreve);
              setLoop(loop+1)
          }
      }

  return (
    <div className={Style.mainContainer}>
        <h1>
        Olá, eu sou {text}
        </h1>
      <p> 
      Sou um desenvolvedor apaixonado por transformar ideias em soluções práticas e inovadoras. Com uma sólida formação em programação 
      e uma mentalidade criativa, estou constantemente buscando novos desafios para aprimorar minhas habilidades e contribuir para o progresso da tecnologia.
      </p>
        <a href="https://github.com/jgximenes" target='_black'><button type="button"> <span>
          <FaGithub />
        </span> Meu GitHub </button></a>
            </div>
  )
}

export default Main