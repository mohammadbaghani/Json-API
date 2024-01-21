import path from 'path';


import { Fragment } from 'react';
import classes from './event-summary.module.css';
import c from './event-logistics.module.css';


export const getStaticProps = async (params) => {

  const res = await fetch(



    `https://jsonplaceholder.typicode.com/users+params.id`
  );

return {
    props: {
      products: res.data
    },

  };
}
export const getStaticPaths = async () => {

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );

  const data = await res.json()

  const paths = data.map((a) => `/users/${a.id}`)


  return {
    paths, fallback: true

  };

};












function ProductDetailPage({ products }) {


  console.log(products)
  return (
    <Fragment className="body">





      <section className={c.title}>
        {products.map((product) => (
          <li key={product.id} className={classes.item}>
            <h2> {product.name}</h2>
            <Link href={`/products/${product.id}`}>
              <span className={styles.details}>
                مشاهده جزئیات
              </span></Link>
          </li>

        ))}

      </section>

    </Fragment>
  );
}

















export default ProductDetailPage;