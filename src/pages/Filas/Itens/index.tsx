import feeds from './itens.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect } from "react";
import Botao from 'components/Botao';

interface Props {
  busca: string,
  filtro: number | null
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(feeds);
  const { busca, filtro } = props;

  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }
  
  useEffect(() => {
    const novaLista = feeds.filter(item => testaFiltro(item.category.id));
    setLista(novaLista);
  },[busca, filtro])

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item key={item.id} {...item} />
      ))}
      <Botao type="submit">
        Remover
      </Botao>
    </div>
    
  )
}