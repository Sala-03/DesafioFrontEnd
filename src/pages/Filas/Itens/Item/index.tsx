import styles from './Item.module.scss'; 
import feeds from '../itens.json';
import classNames from "classnames";
import { IFeedBack } from 'interfaces';

interface Props {
  id: string;
  type: string;
  status: string;
  message:string;
}
export default function Item(props: Props) {

  const { id, type, status, message } = props;
  
  return (
    <div className={styles.item}>
     
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {status} </h2>
          <p> {message} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${type.toUpperCase()}`]]: true
          })}>{type}</div>          
        </div>
      </div>
    </div>
  );
}