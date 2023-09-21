import './SearchPage.scss';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackHeader from '../../components/BackHeader/BackHeader';
import animationLogo from '../../assets/logo/AnimationLogo.svg';




const SearchPage = ({ setUserData }) => {
    const API_URL = process.env.REACT_APP_BACKEND_URL;
    const phoneInputRef = useRef();
    const submitButtonRef = useRef();
    const submitButtonIconRef = useRef();
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios.get(`${API_URL}/user/${phoneInputRef.current.value}`).then((response) => {
            setUserData(response.data[0]);
        }).then(() => {
            setIsLoading(true)
            setTimeout(() => {
                navigate('/profile-list');
            }, 2500)
        })

        event.target.reset();

    }
    return (
        <div className="search">

            {isLoading ? (
                <div className="loading">
                    <img src={animationLogo} alt="" className="loading__image" />
                </div>
            ) : (
                <>
                    <BackHeader backPage='/' />
                    <form className="search-form" onSubmit={handleFormSubmit}>
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
                </>
            )}
        </div>
    )
}

export default SearchPage;