import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header.jsx';
import heroApple from "./assets/heroApple.png";
import styles from './index.module.css';
import Section from './Components/Section/Section.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />

    <img className={styles.banner} src={heroApple} alt="" />

    <Section 
      subtitle = {"Today's"} 
      title={"Flash Sales"} 
      time={true} 
      seta={true} 
      botao={false} 
      cardProduto={true}
    />

    <Section
      subtitle = {"Categories"} 
      title={"Browse By Category"} 
      time={false} 
      seta={true} 
      botao={false}
      cardProduto={true}
    />

    <Section 
      subtitle = { "This Month"} 
      title={"Best Selling Products"} 
      time={false} 
      seta={false} 
      botao={true}
      cardProduto={true}
    />

    <Section
      subtitle = {"Our Products"} 
      title={"Explore Our Products"} 
      time={false} 
      seta={true} 
      botao={false}
      cardProduto={true}
    />

  </StrictMode>
)
