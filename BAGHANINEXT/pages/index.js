

import classes from '../styles/event-item.module.css';

import styles from '../styles/Home.module.css'
import MainHeader from "./main-header";

import React from "react";

export const getStaticProps = async () => {


  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );

  const data = await res.json()



  return {
    props: {
      products: data
    },

  };
}

const Home = ({ products }) => {



  return (

    <div className={styles.container}>

      <MainHeader />
      {products.map((product) => (
        <li key={product.id} className={classes.item}>
          <h2> {product.name}</h2>

        </li>

      ))}

    </div>
  )
}



export default Home;