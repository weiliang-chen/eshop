import React from "react";
import "./CheckOutProduct.css"

function CheckOutProduct(props) {
    return (
        <div>
            <div className="checkoutProduct">
            <img src={props.image} alt="product-image" className="checkoutProduct__image"/>

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{props.title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(props.rating).fill().map(() => (
                            <p> ⭐ </p>
                        ))}
                    </div>
                </div>

                
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct