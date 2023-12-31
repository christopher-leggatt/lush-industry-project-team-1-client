import "./ItemDetailPage.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import slideImage1 from "../../assets/images/FLYWAY HAIR 1.jpg";
import slideImage2 from "../../assets/images/FLYWAY HAIR 2.jpg";
import slideImage3 from "../../assets/images/FLYWAY HAIR 3.jpg";
import checkIcon from "../../assets/icons/check.svg";
import crossIcon from "../../assets/icons/cross.svg";
import globeIcon from "../../assets/icons/globe.svg";
import backIcon from "../../assets/icons/back.svg";
import wheelChairIcon from "../../assets/icons/wheelchair.svg";
import cartIcon from "../../assets/icons/cart.svg";
import chevronBack from "../../assets/icons/chevron-back.svg";
import plusIcon from "../../assets/icons/plus.svg";
import miusIcon from "../../assets/icons/minus.svg";
import planIcon from "../../assets/icons/plane.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice, getImageSrc } from "../../utils";
import { addToCart } from "../../state/cartSlice";

const ItemDetailPage = () => {
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [shopStock, setShopStock] = useState(0);
  const [onlineStock, setOnlineStock] = useState(0);
  const [purchaseType, setPurchaseType] = useState("");
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state?.cart?.items?.find((item) => item.id === id)
  );
  const cartBtnRef = useRef(null);
  const increaseButtonRef = useRef();
  const plusIconRef = useRef();

  let stockType = shopStock === 0 ? onlineStock : shopStock;
  const [counterActive, setCounterActive] = useState(false);
  let [counter, setCounter] = useState(0);
  const [buttonText, setButtonText] = useState("Add To Cart");
  const [buttonIcon, setButtonIcon] = useState(cartIcon);

  useEffect(() => {
    axios.get(`${API_URL}/product/${id}`).then((response) => {
      setItemDetail(response.data[0]);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(itemDetail).length > 0) {
      console.log(
        "🚀 ~ file: ItemDetailPage.jsx:51 ~ useEffect ~ itemDetail:",
        itemDetail
      );
      setShopStock(itemDetail.product_inshop_stock);
      setOnlineStock(itemDetail.product_online_stock);
      setCounterActive(true);

      if (itemDetail.product_inshop_stock === 0) {
        setButtonIcon(planIcon);
        setButtonText("Ship To Home");
      }
    }
  }, [itemDetail]);

  useEffect(() => {
    if (shopStock > 0 && onlineStock === 0) {
      setPurchaseType("inshop");
    } else if (shopStock === 0 && onlineStock > 0) {
      setPurchaseType("online");
    }
  }, [shopStock, onlineStock]);

  return (
    <section className="item-section">
      <div className="slide">
        <div className="slide__wrapper">
          <div className="slide__header">
            <Link className="slide__button slide__button--back">
              <img
                src={backIcon}
                alt=""
                className="slide__button-icon slide__button-icon--back"
              />
            </Link>
            <Link className="slide__button slide__button--accessibility">
              <img
                src={wheelChairIcon}
                alt=""
                className="slide__button-icon slide__button-icon--accessibility"
              />
            </Link>
          </div>
          <div className="slide__image-container">
            <img src={slideImage1} alt="" className="slide__image" />
            <img src={slideImage2} alt="" className="slide__image" />
            <img src={slideImage3} alt="" className="slide__image" />
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item__header">
          <div className="item__title-container">
            <h2 className="item__title">{itemDetail?.product_name}</h2>
            <h2 className="item__title item__title--price">{`$${itemDetail?.product_price}`}</h2>
          </div>
          <div className="item__stock-container">
            <div className="item__stock-group">
              {shopStock > 0 ? (
                <img
                  src={checkIcon}
                  alt=""
                  className="item__icon item__icon--stock"
                />
              ) : (
                <img
                  src={crossIcon}
                  alt=""
                  className="item__icon item__icon--stock"
                />
              )}
              <p className="item__stock">{shopStock} in stock</p>
            </div>
            <div className="item__stock-group">
              <img
                src={globeIcon}
                alt=""
                className="item__icon item__icon--stock"
              />
              <p className="item__stock">{onlineStock} online</p>
            </div>
          </div>
        </div>
        <p className="item__detail">{itemDetail.product_description}</p>
        <div className="item__button-container">
          {counterActive ? (
            <div className="counter">
              <button
                onClick={(e) => {
                  if (counter > 0) {
                    setCounter(--counter);

                    increaseButtonRef.current.classList.remove(
                      "counter__button--inactive"
                    );
                    plusIconRef.current.style.fill = "#fff";
                    if (
                      shopStock === 0
                        ? setButtonText("Ship To Home")
                        : setButtonText("Added")
                    );
                  }
                  if (counter === 0) {
                    setCounterActive(false);
                    if (
                      shopStock === 0
                        ? setButtonText("Ship To Home")
                        : setButtonText("Add To Cart")
                    );
                  }
                }}
                className="counter__button counter__button--decrease"
              >
                <img src={miusIcon} alt="" className="counter__icon" />
              </button>
              <div className="counter__text-container">
                <span className="counter__text">{counter}</span>
              </div>
              <button
                ref={increaseButtonRef}
                onClick={(e) => {
                  if (counter < stockType) {
                    setCounter(++counter);
                  }
                  if (counter === stockType) {
                    e.target.classList.add("counter__button--inactive");
                    plusIconRef.current.style.fill = "#CCCCCC";
                    setButtonText("Max Amount Reached");
                  }
                }}
                className="counter__button counter__button--increase"
              >
                <svg
                  className="counter__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={plusIconRef}
                    d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <></>
          )}
          <button
            onClick={() => {
              setCounterActive(true);
              if (counter < 1) {
                setCounter(++counter);                
                if (shopStock === 0) {
                  setButtonText("Ship To Home");
                } else {
                  setButtonText("Added");
                }
              };
              dispatch(
                addToCart({
                  product: { ...itemDetail, count: counter, purchaseType },
                })
              );
            }}
            className="item__button item__button--add-to-cart"
          >
            {buttonText}
            <img src={buttonIcon} alt="" className="item__button-icon" />
          </button>
        </div>
      </div>
      <div className="suggested">
        <div className="suggested__header">
          <h2 className="suggested__heading">Suggested Item</h2>
          <Link className="suggested__link">
            View All
            <img src={chevronBack} alt="" className="suggested__link-icon" />
          </Link>
        </div>
        <div className="suggested__list"></div>
      </div>
      {counter === 0 ? (
        <></>
      ) : (
        <div className="total-popup">
          <p className="total-popup__text">{`${counter} ${
            counter === 1 ? `Item` : "Items"
          } ($${itemDetail.product_price * counter})`}</p>
        </div>
      )}
    </section>
  );
};

export default ItemDetailPage;
