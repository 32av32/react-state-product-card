import React from "react";
import styles from './Product.module.css'
import DetailInfo from "./DetailInfo";


function Product() {
    const [detailToggle, setDetailToggle] = React.useState(false)
    const [inCart, setInCart] = React.useState(false)

    const toggleDetail = (): void => {
        setDetailToggle(true)
    }
    const addToCart = (): void => {
        setInCart(true)
    }
    const removeFromCart = (): void => {
        setInCart(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img alt='product'
                     src='https://sneakerpolitics.com/cdn/shop/files/Sneaker-Politics-Vans-Pride_Pack-IG-1.jpg?v=1687538345&width=480'/>
            </div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <div>Nike Sneaker</div>
                        <div>$120</div>
                    </div>
                    <button className={styles.detail_button} onClick={toggleDetail}>Detail</button>
                </div>
                <hr/>
                <div className={styles.detail}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, repudiandae!
                </div>
            </div>
            <div className={styles.cart}>
                <button disabled={inCart} className={`${styles.cart_button} ${inCart && styles.in_cart}`} onClick={addToCart}>{inCart ? 'Already In cart' : 'Add to cart'}</button>
                {inCart && <div className={styles.delete_cart} onClick={removeFromCart}>Delete from cart</div>}
            </div>
            { detailToggle && <DetailInfo setDetailToggle={setDetailToggle} /> }
        </div>
    )
}

export default Product