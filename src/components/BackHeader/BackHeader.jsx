import './_BackHeader.scss';
import headerLogo from '../../assets/logo/Lush-black.jpg';
import backIcon from '../../assets/icons/back.svg';
import wheelChairIcon from '../../assets/icons/wheelchair.svg';
import { Link } from 'react-router-dom';

const BackHeader = ({ backPage }) => {
    return (
        <header className="header-back">
            <img src={headerLogo} alt="" className="header-back__logo" />
            <nav className="header-back__navbar">
                <Link to={backPage} className="header-back__link header-back__link--back"><img src={backIcon} alt="" className="header-back__icon header-back__icon--back" /></Link>
                <Link className="header-back__link header-back__link--accessibility"><img src={wheelChairIcon} alt="" className="header-back__icon header-back__icon--accessibility" /></Link>
            </nav>
        </header>
    )
}

export default BackHeader;