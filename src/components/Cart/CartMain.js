import React, { useState } from "react";
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';

const CartMain = () => {
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
        <main>
            <Breadcrumb breadcrumbTitle="My Cart" breadcrumbSubTitle="Cart" />

            <section className="cart-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">Images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="product-price">Unit Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/products/product-thumb-01.png" alt="img not found"/></a></Link></td>
                                            <td className="product-name"><Link href="/course-details"><a>Turn Yourself</a></Link></td>
                                            <td className="product-price"><span className="amount">$24.00</span></td>
                                            <td className="product-quantity text-center">
                                                <div className="product-quantity mt-10 mb-10">
                                                    <div className="product-quantity-form">
                                                        <form action="#">
                                                            <button type="button" className="cart-minus" onClick={handleDecrement}><i className="far fa-minus"></i></button>
                                                            <p className="cart-input">{count}</p>
                                                            <button type="button" className="cart-plus" onClick={handleIncrement}><i className="far fa-plus"></i></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$24.00</span></td>
                                            <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                        </tr>
                                        <tr>
                                        <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/products/product-thumb-02.png" alt="img not found"/></a></Link></td>
                                            <td className="product-name"><Link href="/course-details"><a>Turn Yourself</a></Link></td>
                                            <td className="product-price"><span className="amount">$12.00</span></td>
                                            <td className="product-quantity text-center">
                                                <div className="product-quantity mt-10 mb-10">
                                                    <div className="product-quantity-form">
                                                        <form action="#">
                                                            <button type="button" className="cart-minus" onClick={handleDecrement1}><i className="far fa-minus"></i></button>
                                                            <p className="cart-input">{count1}</p>
                                                            <button type="button" className="cart-plus" onClick={handleIncrement1}><i className="far fa-plus"></i></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$12.00</span></td>
                                            <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/products/product-thumb-03.png" alt="img not found"/></a></Link></td>
                                            <td className="product-name"><Link href="/course-details"><a>Attract Women</a></Link></td>
                                            <td className="product-price"><span className="amount">$42.00</span></td>
                                            <td className="product-quantity text-center">
                                                <div className="product-quantity mt-10 mb-10">
                                                    <div className="product-quantity-form">
                                                        <form action="#">
                                                            <button type="button" className="cart-minus" onClick={handleDecrement2}><i className="far fa-minus"></i></button>
                                                            <p className="cart-input">{count2}</p>
                                                            <button type="button" className="cart-plus" onClick={handleIncrement2}><i className="far fa-plus"></i></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$42.00</span></td>
                                            <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="coupon-all">
                                        <div className="coupon d-flex align-items-center">
                                            <input id="coupon_code" className="input-text" name="coupon_code" placeholder="Coupon code" type="text"/>
                                            <button className="edu-btn" name="apply_coupon" type="submit">Apply coupon</button>
                                        </div>
                                        <div className="coupon2">
                                            <button className="edu-btn" name="update_cart" type="submit">Update cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ml-auto">
                                    <div className="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul className="mb-20">
                                            <li>Subtotal <span>$78.00</span></li>
                                            <li>Total <span>$78.00</span></li>
                                        </ul>
                                        <Link href="/checkout"><a className="edu-border-btn">Proceed to checkout</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CartMain;