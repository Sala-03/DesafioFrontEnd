//import feeds from './itens.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect } from "react";
import Botao from 'components/Botao';
import { API } from 'providers';

interface Props {
  busca: string,
  filtro: number | null
}

export default function Itens(props: Props) {
  const [feedsS, setFeedS] = useState([]);
  const [feedsE, setFeedE] = useState([]);
  const [feedsC, setFeedC] = useState([]);
  const [lista, setLista] = useState([]);
  const [qtd, setQtd] = useState();
  const [qtdS, setQtdS] = useState();
  const [qtdE, setQtdE] = useState();
  const [qtdC, setQtdC] = useState();
  const { busca, filtro } = props;

  useEffect(() => {
    API.get('/SUGESTOES').then((response) => {
      setFeedS(response.data);
      console.log('2', response.data);
    });

    API.get('/ELOGIOS').then((response) => {
      setFeedE(response.data);
      console.log('2', response.data);
    });

    API.get('/CRITICAS').then((response) => {
      setFeedC(response.data);
      console.log('2', response.data);
    });

    API.get('/size/SUGESTOES').then((responseQtd) => {
      setQtdS(responseQtd.data);
      console.log('qtd:', responseQtd.data);
    });

    API.get('/size/ELOGIOS').then((responseQtd) => {
      setQtdE(responseQtd.data);
      console.log('qtd:', responseQtd.data);
    });

    API.get('/size/CRITICAS').then((responseQtd) => {
      setQtdC(responseQtd.data);
      console.log('qtd:', responseQtd.data);
    });

  }, [])

  async function removerFeed() {

    API.post('/SUGESTOES')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  useEffect(() => {
    if (props.filtro == 1){
      setLista(feedsS);
      setQtd(qtdS);
    }
    if (props.filtro == 2){
      setLista(feedsE);
      setQtd(qtdE);
    }
    if (props.filtro == 3){
      setLista(feedsC);   
      setQtd(qtdC);
    }

  }, [busca, filtro])

  return (
    <form className={styles.novoFeedBack} onSubmit={removerFeed}>
      <div className={styles.itens}>
        {lista}
        <div className={styles.inputContainer}>
          <label>Qtd de itens: </label>
          <input
            type="text"
            name="qtdItens"
            value={qtd}
            disabled
          />
        </div>
        <Botao type="submit">
          Remover
        </Botao>
      </div>
    </form>
  )
}