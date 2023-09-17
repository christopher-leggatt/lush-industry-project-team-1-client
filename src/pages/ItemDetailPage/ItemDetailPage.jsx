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

const ItemDetailPage = () => {
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
                            <img src={checkIcon} alt="" className="item__icon item__icon--stock" />
                            <p className="item__stock">3 in stock</p>
                        </div>
                        <div className="item__stock-group">
                            <img src={globeIcon} alt="" className="item__icon item__icon--stock" />
                            <p className="item__stock">47 online</p>
                        </div>
                    </div>
                </div>
                <p className="item__detail">
                    Good for oily, fine and thin hair looking to add volume and shine while deeply-cleansing the scalp and strands.
                </p>
                <div className="item__button-container">
                    <button className="item__button item__button--add-to-cart">Added To Cart <img src={cartIcon} alt="" className="item__button-icon" /></button>
                </div>

            </div>
            <div className="suggested">
                <div className="suggested__header">
                    <h2 className="suggested__heading">Suggested Item</h2>
                    <Link className="suggested__link">View All<img src={chevronBack} alt="" className="suggested__link-icon" /></Link>
                </div>
            </div>
        </section>
    )
}

export default ItemDetailPage;