import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';

const WishlistMain = () => {
    return (
        <main>
            <Breadcrumb breadcrumbTitle="My Wishlist" breadcrumbSubTitle="Wishlist" />

            <div className="cart-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Add to cart</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/products/product-thumb-05.png" alt="img not found"/></a></Link></td>
                                                <td className="product-name"><Link href="/course-details"><a>Best Inspirational</a></Link></td>
                                                <td className="product-price"><span className="amount">$20.00</span></td>
                                                <td className="product-quantity">
                                                    <Link href="/cart"><a className="edu-border-btn">Add to Cart</a></Link>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$20.00</span></td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                            </tr>
                                            <tr>
                                            <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/products/product-thumb-11.png" alt="img not found"/></a></Link></td>
                                                <td className="product-name"><Link href="/course-details"><a>Wealth and Happiness</a></Link></td>
                                                <td className="product-price"><span className="amount">$24.00</span></td>
                                                <td className="product-quantity">
                                                    <Link href="/cart"><a className="edu-border-btn">Add to Cart</a></Link>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$24.00</span></td>
                                                <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WishlistMain;