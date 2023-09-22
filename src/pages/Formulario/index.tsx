import React, { useState } from 'react';

import Botao from 'components/Botao';
import style from './Formulario.module.scss';

function Formulario() {

  return (
    <form className={style.novoFeedBack} >
      <div className={style.inputContainer}>
        <label htmlFor="idFeed">
          Id:
        </label>
        <input
          type="number"
          name="idFeed"
          id="idFeed"
          placeholder="Id do FeedBack"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tipoFeed">
          Tipo (Sugestão/Elogio/Crítica)
        </label>
        <input
          type="text"
          name="tipoFeed"
          id="tipoFeed"      
          placeholder="Tipo (Sugestão/Elogio/Crítica)"   
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="mensagemFeed">
          Mensagem
        </label>
        <input
          type="text"
          name="mensagemFeed"
          id="mensagemFeed"     
          placeholder="Mensagem"       
          required
        />
      </div>
      <Botao type="submit">
        Adicionar Feed Back
      </Botao>
    </form>
  )
}

export default Formulario;