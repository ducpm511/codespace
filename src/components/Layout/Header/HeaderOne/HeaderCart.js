import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const HeaderCart = ({setCartOpen, cartOpen}) => {

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      // for counter
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
      };

      const handleIncrement1 = () => {
        setCount1(prevCount => prevCount + 1);
      };
    
      const handleDecrement1 = () => {
        setCount1(prevCount => prevCount - 1);
      };

      const handleIncrement2 = () => {
        setCount2(prevCount => prevCount + 1);
      };
    
      const handleDecrement2 = () => {
        setCount2(prevCount => prevCount - 1);
      };

      return (
        <div className="cartmini__area">
            <div className={cartOpen ? "cartmini__wrapper opened": "cartmini__wrapper"}>
                <div className="cartmini__title">
                    <h4>Shopping cart</h4>
                </div>
                <div className="cartmini__close">
                    <button type="button" className="cartmini__close-btn" onClick={() => setCartOpen(false)}><i className="fal fa-times"></i></button>
                </div>
                <div className="cartmini__widget">
                    <div className="cartmini__inner">
                    <ul>
                        <li>
                            <div className="cartmini__thumb">
                                <Link href="/"><a><img src="assets/img/products/product-thumb-01.png" alt="image not found"/></a></Link>
                            </div>
                            <div className="cartmini__content">
                                <h5><a href="#">Turn Yourself</a></h5>
                                <div className="product-quantity mt-10 mb-10">
                                    <span className="cart-minus" onClick={handleDecrement}><i className="far fa-minus"></i></span>
                                    <p className="cart-input">{count}</p>
                                    <span className="cart-plus" onClick={handleIncrement}><i className="far fa-plus"></i></span>
                                </div>
                                <div className="product__sm-price-wrapper">
                                <span className="product__sm-price">$24.00</span>
                                </div>
                            </div>
                            <a href="#" className="cartmini__del"><i className="fal fa-times"></i></a>
                        </li>
                        <li>
                            <div className="cartmini__thumb">
                                <Link href="/"><a><img src="assets/img/products/product-thumb-02.png" alt="image not found"/></a></Link>
                            </div>
                            <div className="cartmini__content">
                                <h5><a href="#">Art of Not Giving</a></h5>
                                <div className="product-quantity mt-10 mb-10">
                                    <span className="cart-minus" onClick={handleDecrement1}><i className="far fa-minus"></i></span>
                                    <p className="cart-input">{count1}</p>
                                    <span className="cart-plus" onClick={handleIncrement1}><i className="far fa-plus"></i></span>
                                </div>
                                <div className="product__sm-price-wrapper">
                                <span className="product__sm-price">$12.00</span>
                                </div>
                            </div>
                            <a href="#" className="cartmini__del"><i className="fal fa-times"></i></a>
                        </li>
                        <li>
                            <div className="cartmini__thumb">
                                <Link href="/"><a><img src="assets/img/products/product-thumb-03.png" alt="image not found"/></a></Link>
                            </div>
                            <div className="cartmini__content">
                                <h5><a href="#">Attract Women</a></h5>
                                <div className="product-quantity mt-10 mb-10">
                                    <span className="cart-minus" onClick={handleDecrement2}><i className="far fa-minus"></i></span>
                                    <p className="cart-input">{count2}</p>
                                    <span className="cart-plus" onClick={handleIncrement2}><i className="far fa-plus"></i></span>
                                </div>
                                <div className="product__sm-price-wrapper">
                                <span className="product__sm-price">$42.00</span>
                                </div>
                            </div>
                            <a href="#" className="cartmini__del"><i className="fal fa-times"></i></a>
                        </li>
                    </ul>
                    </div>
                    <div className="cartmini__checkout">
                    <div className="cartmini__checkout-title mb-30">
                        <h4>Subtotal:</h4>
                        <span>$78.00</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCart;