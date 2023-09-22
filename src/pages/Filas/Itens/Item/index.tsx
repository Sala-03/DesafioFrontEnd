import styles from './Item.module.scss'; 
import feeds from '../itens.json';
import classNames from "classnames";

type Props = typeof feeds[0];

export default function Item(props: Props) {
  const { title, description, category, color, marca, price, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
          })}>{category.label}</div>
          <div className={styles.item__cor}>{color}</div>
          <div className={styles.item__marca}>{marca} </div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}