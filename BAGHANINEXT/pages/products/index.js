import path from 'path';

import MainHeader from "../../main-header";
import { Fragment } from 'react';
import classes from './event-summary.module.css';
import c from './event-logistics.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';
function ProductDetailPage() {
    const router = useRouter();

    function show() {
        router.push('/products/a/a')
    }


    return (
        <Fragment className="body">


            <section className={c.title}>


                <p>
                    اولی
                </p>
                <button onClick={show}>
                    نشون بده


                </button>
            </section>






        </Fragment>
    );
}



export default ProductDetailPage;