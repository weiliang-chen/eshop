import React from "react";
import "./Checkout.css";
import Header from "./Header";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal"

function Checkout() {
    return (
        <div>
            <Header />
            <div className="checkout__left">
                <img src="" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <CheckOutProduct/>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
        
    )
}

export default Checkout;