import axios from "axios";
import { formatMoney } from "../../utils/money"
import { useState } from "react"

export function CartItemDetails({ cartItem, loadCart }) {
    const [update, setUpdate] = useState(false)


    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await loadCart();
    }


    return (
        <>
            <img
                className="product-image"
                src={cartItem.product?.image}
            />

            <div className="cart-item-details">
                <div className="product-name">{cartItem.product?.name}</div>
                <div className="product-price">
                    {formatMoney(cartItem.product?.priceCents ?? 0)}
                </div>
                <div className="product-quantity">

                    <span>
                        {update ? (
                            <span>
                                Quantity: <input className="quantity-textbox" type="text" />
                            </span>
                        ) : (
                            <span>
                                Quantity:{" "}
                                <span className="quantity-label">
                                    {cartItem.quantity}
                                </span>
                            </span>
                        )}
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={() => {
                            setUpdate(!update);
                        }}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}