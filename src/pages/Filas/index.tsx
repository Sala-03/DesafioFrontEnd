import styles from "./Filas.module.scss";
import Logo from "assets/logo.png";
import { useState } from "react";
import Filtros from "./Filtros";

import Itens from './Itens';
import Formulario from "pages/Formulario";
import { IFeedBack } from "interfaces/IFeedBack";

export default function Filas() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [feeds, setFeeds] = useState<IFeedBack>();
  
  return (
    <main>
      <nav className={styles.menu}>
      <img src={Logo} alt="Logo" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          API Spring AWS - SNS/SQS
        </div>
      </header>
      <section className={styles.Filas}>
        <Formulario/>
      </section>
      <section className={styles.Filas}>
        <h3 className={styles.Filas__titulo}>Filas</h3>
          <div className={styles.Filas__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />          
        </div>
        <Itens busca={busca} filtro={filtro} />
      </section>
    </main>
  )
}