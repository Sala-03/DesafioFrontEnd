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
  const [feeds, setFeed] = useState([]);
  const [lista, setLista] = useState(feeds);
  const [qtd, setQtd] = useState();
  const { busca, filtro } = props;

  useEffect(() => {
    API.get('/SUGESTOES').then((response) => {
      setFeed(response.data);
      console.log('2', response.data);
    });

    API.get('/size/SUGESTOES').then((responseQtd) => {
      setQtd(responseQtd.data);
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
    const novaLista = feeds.filter(item => testaFiltro(1));
    setLista(novaLista);
  }, [busca, filtro])

  return (
    <form className={styles.novoFeedBack} onSubmit={removerFeed}>
      <div className={styles.itens}>
        {feeds}
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