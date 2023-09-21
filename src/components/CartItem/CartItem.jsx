import "./_CartItem.scss";
import React from "react";
import { formatPrice } from "../../utils";
import { ReactComponent as Add } from "../../assets/icons/increase_qty.svg";
import { ReactComponent as Remove } from "../../assets/icons/decrease_qty.svg";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../../state/cartSlice";
import cartSlice from "../../state/cartSlice";

const CartItem = ({ product }) => {
  const {
    product_name,
    product_price,
    count,
    product_image,
    product_inshop_stock,
    product_online_stock,
    purchaseType,
    id,
  } = product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const disableIncreaseButton =
    (purchaseType === "inshop" && count >= product_inshop_stock) ||
    (purchaseType === "online" && count >= product_online_stock);

  const productInCart = useSelector((state) =>
    state.cart.find((p) => p.id === id)
  );

  const handleIncrease = () => {
    if (
      purchaseType === "inshop" &&
      productInCart.count < product_inshop_stock
    ) {
      dispatch(increaseCount(id));
    } else if (
      purchaseType === "online" &&
      productInCart.count < product_online_stock
    ) {
      dispatch(increaseCount(id));
    }
  };

  const handleDecrease = () => {
    if (productInCart.count > 0) {
      dispatch(decreaseCount(id));
    }
  };

  return (
    <article className="cart__cart-item cart-item">
      <div className="cart-item__name-price-wrapper">
        <h2 className="cart-item__item-name">{product_name}</h2>
        <h2 className="cart-item__item-price">
          {formatPrice(product_price, true)}
        </h2>
        <aside className="cart-item__item-counter-wrapper">
          <h3 className="cart-item__item-counter">{count}</h3>
        </aside>
      </div>
      <div
        className="cart-item__cart-item-card"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className={`cart-item__btns-wrapper`}>
          <button
            className={`cart-item__decrease-btn decrease-btn`}
            aria-label="Decrease count"
            onClick={handleDecrease}
          >
            <Remove className={`decrease-btn__decrease-icon`} />
          </button>

          <button
            className={`cart-item__increase-btn increase-btn ${
              disableIncreaseButton ? "increase-btn--max" : ""
            }`}
            aria-label="Increase count"
            onClick={handleIncrease}
            disabled={disableIncreaseButton}
          >
            <Add className={`increase-btn__increase-icon`} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
