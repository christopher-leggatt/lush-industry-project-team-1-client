import './ItemDetailPage.scss';
import { Link } from 'react-router-dom';
import slideImage1 from '../../assets/images/FLYWAY HAIR 1.jpg';
import slideImage2 from '../../assets/images/FLYWAY HAIR 2.jpg';
import slideImage3 from '../../assets/images/FLYWAY HAIR 3.jpg';
import checkIcon from '../../assets/icons/check.svg';
import crossIcon from '../../assets/icons/cross.svg';
import globeIcon from '../../assets/icons/globe.svg';
import backIcon from '../../assets/icons/back.svg';
import wheelChairIcon from '../../assets/icons/wheelchair.svg';
import cartIcon from '../../assets/icons/cart.svg';
import chevronBack from '../../assets/icons/chevron-back.svg';
import plusIcon from '../../assets/icons/plus.svg';
import miusIcon from '../../assets/icons/minus.svg';
import planIcon from '../../assets/icons/plane.svg';
import { useEffect, useRef, useState } from 'react';
import ItemTile from '../../components/ItemTile/ItemTile';


const ItemDetailPage = () => {

    const increaseButtonRef = useRef();
    const plusIconRef = useRef();

    const shopStock = 2;
    const onlineStock = 4;
    let stockType = ((shopStock === 0) ? (onlineStock) : (shopStock))
    const [counterActive, setCounterActive] = useState(false);
    let [counter, setCounter] = useState(0);
    const [buttonText, setButtonText] = useState('Add To Cart');
    const [buttonIcon, setButtonIcon] = useState(cartIcon);
    useEffect(() => {
        if (shopStock === 0) {
            setButtonIcon(planIcon);
            setButtonText('Ship To Home')
        }
    }, [shopStock])

    const product = {
        price: 15,
        name: "Test",
        image_url: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
        id: 1,
    };

    return (
        <section className="item-section">
            <div className="slide">
                <div className="slide__wrapper">
                    <div className="slide__header">
                        <Link className="slide__button slide__button--back"><img src={backIcon} alt="" className="slide__button-icon slide__button-icon--back" /></Link>
                        <Link className="slide__button slide__button--accessibility"><img src={wheelChairIcon} alt="" className="slide__button-icon slide__button-icon--accessibility" /></Link>
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
                        <h2 className="item__title">Flyway Hair</h2>
                        <h2 className="item__title item__title--price">$16</h2>
                    </div>
                    <div className="item__stock-container">
                        <div className="item__stock-group">
                            {(shopStock > 0) ? (
                                <img src={checkIcon} alt="" className="item__icon item__icon--stock" />
                            ) : (
                                <img src={crossIcon} alt="" className="item__icon item__icon--stock" />
                            )}
                            <p className="item__stock">{shopStock} in stock</p>

                        </div>
                        <div className="item__stock-group">
                            <img src={globeIcon} alt="" className="item__icon item__icon--stock" />
                            <p className="item__stock">{onlineStock} online</p>
                        </div>
                    </div>
                </div>
                <p className="item__detail">
                    Good for oily, fine and thin hair looking to add volume and shine while deeply-cleansing the scalp and strands.
                </p>
                <div className="item__button-container">
                    {counterActive ? (
                        <div className="counter">
                            <button onClick={(e) => {
                                if (counter > 0) {
                                    setCounter(--counter);

                                    increaseButtonRef.current.classList.remove('counter__button--inactive')
                                    plusIconRef.current.style.fill = '#fff'
                                    if ((shopStock === 0) ? setButtonText('Ship To Home') : setButtonText('Added'));

                                }
                                if (counter === 0) {
                                    setCounterActive(false)
                                    if ((shopStock === 0) ? setButtonText('Ship To Home') : setButtonText('Add To Cart'));
                                }
                            }} className="counter__button counter__button--decrease">
                                <img src={miusIcon} alt="" className="counter__icon" />
                            </button>
                            <div className="counter__text-container"><span className="counter__text">{counter}</span></div>
                            <button ref={increaseButtonRef} onClick={(e) => {
                                if (counter < stockType) {
                                    setCounter(++counter)
                                }
                                if (counter === stockType) {
                                    e.target.classList.add('counter__button--inactive')
                                    plusIconRef.current.style.fill = '#CCCCCC'
                                    setButtonText('Max Amount Reached')

                                }

                            }} className="counter__button counter__button--increase">
                                <svg className="counter__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path ref={plusIconRef} d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="white" />
                                </svg>

                            </button>
                        </div>
                    ) : (<></>)}
                    <button onClick={() => {
                        setCounterActive(true)
                        if (counter < 1) {
                            setCounter(++counter)
                            if ((shopStock === 0) ? setButtonText('Ship To Home') : setButtonText('Added'));
                        }

                    }} className="item__button item__button--add-to-cart">{buttonText} <img src={buttonIcon} alt="" className="item__button-icon" /></button>
                </div>

            </div>
            <div className="suggested">
                <div className="suggested__header">
                    <h2 className="suggested__heading">Suggested Item</h2>
                    <Link className="suggested__link">View All<img src={chevronBack} alt="" className="suggested__link-icon" /></Link>

                </div>
                <div className="suggested__list">
                    <div className="suggested__item">
                        <ItemTile product={product} size='small' />
                    </div>
                    <div className="suggested__item">
                        <ItemTile product={product} size='small' />
                    </div>
                    <div className="suggested__item">
                        <ItemTile product={product} size='small' />
                    </div>
                    <div className="suggested__item">
                        <ItemTile product={product} size='small' />
                    </div>


                </div>

            </div>
            {counter === 0 ? (<></>) : (
                <div className="total-popup">
                    <p className="total-popup__text">{`${counter} ${(counter === 1) ? `Item` : 'Items'} ($32)`}</p>
                </div>
            )}
        </section>
    )
}

export default ItemDetailPage;