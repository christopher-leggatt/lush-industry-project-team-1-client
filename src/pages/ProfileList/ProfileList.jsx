import './ProfileList.scss';
const ProfileList = ({ userData }) => {

    return (
        <h1>{userData.user_name}</h1>
    )
}

export default ProfileList;