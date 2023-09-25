import React, { useState } from 'react';

import Botao from 'components/Botao';
import style from './Formulario.module.scss';
import { IFeedBack } from 'interfaces/IFeedBack';

import { API } from 'providers';


// interface Props {
//   setFeeds: React.Dispatch<React.SetStateAction<IFeedBack[]>>
// }

function Formulario() {
  const [tipoFeed, setTypeMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [mensagemFeed, setMessage] = useState("");

  async function adicionarFeed(evento: React.FormEvent<HTMLFormElement>) {

    evento.preventDefault();
   
    const data = {
      type: tipoFeed,
      message: mensagemFeed
    }

    console.log('data:', data);

    API.post('/enqueue', {
      data
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // async function onSubmit(values:IFeedBack) {
  //   const{ status, data } = await FeedBackServices.sendFeedBack(values);
  //   if(status === 201){
  //     console.log('Data', data);
  //   }

  // }

  return (
    <form className={style.novoFeedBack} onSubmit={adicionarFeed}>

      <div className={style.inputContainer}>
        <label htmlFor="tipoFeed">
          Tipo (Sugestão/Elogio/Crítica)
        </label>
        <input
          type="text"
          name="tipoFeed"
          id="tipoFeed"
          value={tipoFeed}
          onChange={evento => setTypeMessage(evento.target.value)}
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
          value={mensagemFeed}
          onChange={evento => setMessage(evento.target.value)}
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