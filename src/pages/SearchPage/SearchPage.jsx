import './SearchPage.scss';
import headerLogo from '../../assets/logo/Lush-black.jpg';
import backIcon from '../../assets/icons/back.svg';
import wheelChairIcon from '../../assets/icons/wheelchair.svg';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';


const SearchPage = () => {
    const phoneInputRef = useRef();
    const submitButtonRef = useRef();
    const submitButtonIconRef = useRef();
    const [buttonDisabled, setButtonDisabled] = useState(true)
    return (
        <div className="search">
            <header className="header-back">
                <img src={headerLogo} alt="" className="header-back__logo" />
                <nav className="header-back__navbar">
                    <Link className="header-back__link header-back__link--back"><img src={backIcon} alt="" className="header-back__icon header-back__icon--back" /></Link>
                    <Link className="header-back__link header-back__link--accessibility"><img src={wheelChairIcon} alt="" className="header-back__icon header-back__icon--accessibility" /></Link>
                </nav>
            </header>

            <form className="search-form">
                <input onChange={(e) => {
                    if (e.target.value.length === 10) {
                        submitButtonIconRef.current.style.fillOpacity = '1';
                        submitButtonRef.current.style.color = '#fff';
                        submitButtonRef.current.style.background = '#1A1A1A';
                        setButtonDisabled(false)
                    }
                    if (e.target.value.length < 10) {
                        submitButtonIconRef.current.style.fillOpacity = '0.5';
                        submitButtonRef.current.style.color = '#ffffff80';
                        submitButtonRef.current.style.background = '#929292';
                        setButtonDisabled(true)
                    }
                }} ref={phoneInputRef} type="number" className="search-form__input" placeholder='Enter Customer Phone Number' />
                <button disabled={buttonDisabled} ref={submitButtonRef} className="search-form__button">Search <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={submitButtonIconRef} d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617Z" fill="white" />
                </svg>
                </button>
            </form>
        </div>
    )
}

export default SearchPage;