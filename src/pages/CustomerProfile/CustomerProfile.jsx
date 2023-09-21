import './CustomerProfile.scss';
import headerLogo from '../../assets/logo/Lush-black.jpg';
import backIcon from '../../assets/icons/back.svg';
import wheelChairIcon from '../../assets/icons/wheelchair.svg';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/ProfileImage2.svg';
import chevronBack from '../../assets/icons/chevron-back.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemTile from '../../components/ItemTile/ItemTile';
const CustomerProfile = ({ userData }) => {
    const API_URL = process.env.REACT_APP_BACKEND_URL;
    const [userPurchases, setUserPurchases] = useState([]);
    let [totalSpend, setTotalSpend] = useState(0);

    useEffect(() => {
        axios.get(`${API_URL}/product/user/${userData.id}`)
            .then((response) => {
                setUserPurchases(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user purchases:', error);
            });
    }, [API_URL, userData.id]);

    useEffect(() => {
        let newTotalSpend = 0;
        userPurchases.forEach((transaction) => {
            newTotalSpend += Number(transaction.product_price);
        });
        setTotalSpend(newTotalSpend);
    }, [userPurchases]);


    const customerPeriod = (dateInput) => {
        let currentDate = new Date();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth() + 1;
        let currentYear = currentDate.getFullYear();


        let timeStamp = new Date(dateInput);
        let day = timeStamp.getDate();
        let month = timeStamp.getMonth() + 1;
        let year = timeStamp.getFullYear();

        if (year === currentYear && month === currentMonth && day === currentDay) {
            return 'New';
        } else if (year === currentYear && month === currentMonth) {
            return `${currentDay - day}+ Days`
        } else if (year === currentYear) {
            return `${currentMonth - month}+ Months`
        } else {
            return `${currentYear - year}+ Years`
        }

    }


    return (
        <div className="customer-profile">
            <div className="customer-profile__header-container">
                <div className="customer-profile__detail-container">
                    <img src='https://s3-alpha-sig.figma.com/img/be8e/a069/fd86d4dbd2860202577a1e0fbd4bd42e?Expires=1696204800&Signature=WcYmdRwYdPOrEeexWl0R-LohF6yrmY7-DihYhhvtZvcAgS-ZuWftyDgeE0AzYWdowc8wDHrb95Vd2-ADWOzzKIZDvH0AVk~cJy~Ni6q8Nbnk7N8obewvCB8i2A35P6KfIZhNBr2oYI04sLBdLRk1DIjn7IX3JPRibrpr2Qth2kwkDZ2RprQZUhIiZIzL33SioYsGRbekzJfLBcBPveV7jEeMKxyc6h4CB7G3NHKe0ZDMy9BouINTKxcAY3WVuSYU8VqtnSjgUAPj2qF33NvG~2wJtRCfDk5G~OZ4QpBRUrRKUJgCvEJ9B-5pBMONbVYph6UNv74aKTn9CqJNn4HzEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" className="header-back__logo" />
                    <div className="header-back__navbar">
                        <div className="customer-profile__detail">
                            <div className="customer-profile__name-container">
                                <p className="customer-profile__name">{userData.user_name}</p>
                                <p className="customer-profile__pronoun">{`(${userData.user_pronouns})`}</p>
                            </div>
                            <div className="customer-profile__pronunciation-container">
                                <p className="customer-profile__pronunciation">{userData.name_pronunciation}</p>
                                <div className="customer-profile__icon-container">
                                    <svg className='customer-profile__icon' xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                                        <path d="M11.5926 3.69445C11.7597 3.83452 11.8516 4.01178 11.8516 4.19523V13.8031C11.8516 13.9509 11.792 14.0956 11.6797 14.2202C11.5674 14.3448 11.4071 14.444 11.2178 14.5062C11.0285 14.5683 10.818 14.5908 10.6113 14.571C10.4045 14.5512 10.21 14.4899 10.0508 14.3944L5.70469 11.7876H2.44531C2.18677 11.7876 1.93076 11.7515 1.6919 11.6814C1.45304 11.6113 1.23601 11.5086 1.0532 11.3791C0.870381 11.2496 0.725364 11.0959 0.626425 10.9267C0.527486 10.7575 0.476563 10.5762 0.476562 10.3931V7.60404C0.476562 7.23419 0.683984 6.8795 1.0532 6.61797C1.42241 6.35645 1.92317 6.20953 2.44531 6.20953H5.70469L10.0517 3.60396C10.2731 3.47138 10.5598 3.4065 10.8488 3.42359C11.1377 3.44067 11.4052 3.5377 11.5926 3.69445Z" fill="#FAFAFA" />
                                    </svg>
                                </div>
                                <div className="customer-profile__image-container">
                                    <img src={profileImage} alt="" className="customer-profile__image" />
                                </div>
                            </div>
                        </div>
                        <Link className="header-back__link header-back__link--accessibility"><img src={wheelChairIcon} alt="" className="header-back__icon header-back__icon--accessibility" /></Link>
                    </div>
                </div>
                <div className="customer-profile__card-container">
                    <div className="customer-profile__card">
                        <p className="customer-profile__card-title">Customer For</p>
                        <p className="customer-profile__card-info">{customerPeriod(userData.created_at)}</p>
                    </div>
                    <div className="customer-profile__card">
                        <p className="customer-profile__card-title">Total Orders</p>
                        <p className="customer-profile__card-info">{userPurchases.length}</p>
                    </div>
                    <div className="customer-profile__card">
                        <p className="customer-profile__card-title">Total Spend</p>
                        <p className="customer-profile__card-info">{`$${totalSpend}`}</p>
                    </div>
                </div>
            </div>
            <div className="suggested">
                <div className="suggested__header">
                    <h2 className="suggested__heading">Recently Purchased</h2>
                    <Link className="suggested__link">View All<img src={chevronBack} alt="" className="suggested__link-icon" /></Link>

                </div>
                <div className="suggested__list">
                    {userPurchases.map(purchase => {
                        return (
                            <ItemTile key={purchase.id} product={{
                                product_price: Number(purchase.product_price),
                                product_name: purchase.product_name,
                                product_image: purchase.product_image,
                                id: purchase.id,
                                product_online_stock: purchase.product_online_stock,
                                product_inshop_stock: purchase.product_inshop_stock,
                            }} size='large' />
                        )
                    })}

                </div>

            </div>
            <div className="suggested">
                <div className="suggested__header">
                    <h2 className="suggested__heading">Suggested Item</h2>
                    <Link className="suggested__link">View All<img src={chevronBack} alt="" className="suggested__link-icon" /></Link>

                </div>
                <div className="suggested__list">


                </div>

            </div>
        </div>
    )
}

export default CustomerProfile;