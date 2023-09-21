import './ProfileList.scss';
import BackHeader from '../../components/BackHeader/BackHeader';
import { Link } from 'react-router-dom';
const ProfileList = ({ userData }) => {

    return (
        <div className="profile-list">
            <BackHeader backPage='/search' />
            <div className="profile-list-container">
                <h1 className="profile-list__heading">User Profile</h1>
                <Link to='/profile' className="profile-list__item">
                    <div className="profile-list__text-container">
                        <p className="profile-list__text">{userData.user_name}</p>
                        <p className="profile-list__text">{userData.contact_phone}</p>
                    </div>
                    <div className="profile-list__image-container">
                        {userData.user_icon.length != 0 ? (
                            <img src={userData.user_icon} alt="" className="profile-list__image" />
                        ) : (
                            <div className="profile-list__image-placeholder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M24 3C12.387 3 3 12.45 3 24C3 29.5695 5.21249 34.911 9.15076 38.8492C11.1008 40.7993 13.4158 42.3461 15.9636 43.4015C18.5115 44.4568 21.2422 45 24 45C29.5695 45 34.911 42.7875 38.8492 38.8492C42.7875 34.911 45 29.5695 45 24C45 21.2422 44.4568 18.5115 43.4015 15.9636C42.3461 13.4158 40.7993 11.1008 38.8492 9.15076C36.8992 7.20073 34.5842 5.65388 32.0364 4.59853C29.4885 3.54318 26.7578 3 24 3ZM31.35 15.6C32.1854 15.6 32.9866 15.9319 33.5774 16.5226C34.1681 17.1134 34.5 17.9146 34.5 18.75C34.5 19.5854 34.1681 20.3866 33.5774 20.9774C32.9866 21.5681 32.1854 21.9 31.35 21.9C30.5146 21.9 29.7134 21.5681 29.1226 20.9774C28.5319 20.3866 28.2 19.5854 28.2 18.75C28.2 17.9146 28.5319 17.1134 29.1226 16.5226C29.7134 15.9319 30.5146 15.6 31.35 15.6ZM16.65 15.6C17.4854 15.6 18.2866 15.9319 18.8774 16.5226C19.4681 17.1134 19.8 17.9146 19.8 18.75C19.8 19.5854 19.4681 20.3866 18.8774 20.9774C18.2866 21.5681 17.4854 21.9 16.65 21.9C15.8146 21.9 15.0134 21.5681 14.4226 20.9774C13.8319 20.3866 13.5 19.5854 13.5 18.75C13.5 17.9146 13.8319 17.1134 14.4226 16.5226C15.0134 15.9319 15.8146 15.6 16.65 15.6ZM24 35.55C19.107 35.55 14.949 32.484 13.269 28.2H34.731C33.03 32.484 28.893 35.55 24 35.55Z" fill="#303D40" />
                                </svg>
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProfileList;